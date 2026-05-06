import { google } from 'googleapis';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({ version: 'v4', auth });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, service, date, notes } = body;

  if (!name || !email || !service || !date) {
    return Response.json(
      { success: false, error: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[new Date().toISOString(), name, email, service, date, notes ?? '']],
      },
    });
  } catch (err) {
    console.error('Sheets error:', err);
    return Response.json(
      { success: false, error: 'Failed to save booking. Please try again.' },
      { status: 500 }
    );
  }

  // Emails are best-effort — don't fail the booking if they error
  try {
    await Promise.all([
      resend.emails.send({
        from: 'Paws & Purrs <onboarding@resend.dev>',
        to: email,
        subject: 'Booking Request Received — Paws & Purrs',
        html: `<p>Hi ${name},</p>
<p>Thanks for reaching out! I received your booking request for <strong>${service}</strong> on <strong>${date}</strong>.</p>
<p>I'll follow up within 24 hours to confirm the details.</p>
<p>— Greg<br>Paws &amp; Purrs · 917-900-8924</p>`,
      }),
      resend.emails.send({
        from: 'Paws & Purrs <onboarding@resend.dev>',
        to: process.env.NOTIFICATION_EMAIL!,
        subject: `New Booking: ${service} on ${date}`,
        html: `<p><strong>New booking request:</strong></p>
<ul>
  <li><strong>Name:</strong> ${name}</li>
  <li><strong>Email:</strong> ${email}</li>
  <li><strong>Service:</strong> ${service}</li>
  <li><strong>Date:</strong> ${date}</li>
  <li><strong>Notes:</strong> ${notes || 'None'}</li>
</ul>`,
      }),
    ]);
  } catch (err) {
    console.error('Email error:', err);
  }

  return Response.json({ success: true, message: 'Booking request received!' });
}
