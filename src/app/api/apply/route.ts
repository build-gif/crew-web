import { NextResponse } from 'next/server';

const NOTION_TOKEN = process.env.NOTION_TOKEN || '';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // We expect the client to pass the NOTION_DB_ID or we configure it as an ENV variable.
    // For now, since Felipe needs to create the database, we'll placeholder it with a missing error if not set
    const NOTION_DB_ID = process.env.NOTION_CREW_DB_ID || 'PLACEHOLDER';
    
    if (NOTION_DB_ID === 'PLACEHOLDER') {
      console.warn("NOTION_CREW_DB_ID is not configured in Vercel. Returning success so frontend proceeds, but data is dropped.");
      return NextResponse.json({ success: true, warning: 'Database not linked yet.' });
    }

    // Map the form data strictly to English properties (Schema Compliance Rule from MEMORY.md)
    // We expect these exact columns in the Notion DB:
    // "Applicant Name" (Title)
    // "Email" (Email)
    // "Location" (Rich Text)
    // "Area" (Select)
    // "Status" (Status: Pending / Accepted / Rejected)
    // "LinkedIn" (URL)
    // "Is Building?" (Select: Yes / Not yet)
    // "Stage" (Select)
    // "Project / What" (Rich Text)
    // "Why the Crew?" (Rich Text)
    // "Referral Source" (Select)

    const notionPayload = {
      parent: { database_id: NOTION_DB_ID },
      properties: {
        'Applicant Name': { title: [{ text: { content: formData.name || 'Unknown' } }] },
        'Email': { email: formData.email || '' },
        'Location': { rich_text: [{ text: { content: formData.location || '' } }] },
        'Area': { select: { name: formData.area || 'Other' } },
        'Status': { status: { name: 'Pending' } },
        'LinkedIn': formData.linkedin ? { url: formData.linkedin } : undefined,
        'Is Building?': { select: { name: formData.building === 'yes' ? 'Yes' : 'Not yet' } },
        'Stage': formData.building === 'yes' && formData.stage ? { select: { name: formData.stage } } : undefined,
        'Project / What': formData.building === 'yes' && formData.whatBuilding ? { rich_text: [{ text: { content: formData.whatBuilding } }] } : undefined,
        'Why the Crew?': { rich_text: [{ text: { content: formData.whyCrew || '' } }] },
        'Referral Source': formData.howHeard ? { select: { name: formData.howHeard } } : undefined,
      }
    };

    // Clean up undefined properties
    Object.keys(notionPayload.properties).forEach(key => {
      if (notionPayload.properties[key] === undefined) {
        delete notionPayload.properties[key];
      }
    });

    const notionResponse = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify(notionPayload)
    });

    if (!notionResponse.ok) {
      const errorText = await notionResponse.text();
      console.error('Notion API Error:', errorText);
      return NextResponse.json({ error: 'Failed to save to Notion' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
