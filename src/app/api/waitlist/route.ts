import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 1. SUPABASE
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      const res = await fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          full_name: 'Desconhecido', // Coluna obrigatória no banco
          email,
          origin: 'crew-waitlist',
          metadata: { source: 'teaser' }
        })
      });

      if (!res.ok) {
        const errorText = await res.text();
        if (errorText.includes('duplicate key value violates unique constraint')) {
          return NextResponse.json({ success: true, message: 'already on the list' });
        }
      }
    }

    // 2. RESEND (Transactional + Audience)
    if (process.env.RESEND_API_KEY) {
      // Envia o e-mail transacional
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Crew of Builders <hello@weheartimpact.com>',
          to: email,
          subject: `You're on the list — Crew of Builders`,
          text: `Hey,\n\nYou're on the list for Crew of Builders.\n\nThe room opens May 18 — we'll send the link the moment applications go live.\n\nUntil then: keep building.\n\n— The Crew`
        })
      });

      // Adiciona na Audiência (Lista de Contatos) do Resend
      if (process.env.RESEND_AUDIENCE_ID) {
        await fetch(`https://api.resend.com/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            unsubscribed: false
          })
        });
      }
    }

    // 3. NOTION
    if (process.env.NOTION_API_KEY && process.env.NOTION_WAITLIST_DB_ID) {
      await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28'
        },
        body: JSON.stringify({
          parent: { database_id: process.env.NOTION_WAITLIST_DB_ID },
          properties: {
            Email: {
              title: [
                { text: { content: email } }
              ]
            },
            Status: {
              select: { name: 'Waitlist' }
            },
            Source: {
              rich_text: [
                { text: { content: 'Teaser LP' } }
              ]
            }
          }
        })
      });
    }

    
    // Notify Felipe Waitlist
    if (process.env.RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Crew of Builders <hello@weheartimpact.com>',
          to: 'felipe@weheartimpact.com',
          subject: 'Novo Lead Recebido - Waitlist Crew',
          text: `Novo email na waitlist: ${email}`
        })
      }).then(res => res.json()).then(data => console.log("Felipe Waitlist Notify:", data)).catch(e => console.error("Felipe Waitlist Notify Error:", e));
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
