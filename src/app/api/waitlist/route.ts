import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      const res = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          email,
          source: 'teaser',
          utm_source: null,
          utm_medium: null,
          utm_campaign: null
        })
      });

      if (!res.ok) {
        const errorText = await res.text();
        if (errorText.includes('duplicate key value violates unique constraint')) {
          return NextResponse.json({ success: true, message: 'already on the list' });
        }
      }
    }

    if (process.env.RESEND_API_KEY) {
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
          text: `Hey,

You're on the list for Crew of Builders.

The room opens May 18 — we'll send the link the moment applications go live.

Until then: keep building.

— The Crew`
        })
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
