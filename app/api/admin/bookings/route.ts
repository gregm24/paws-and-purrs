import { google } from 'googleapis';

function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });
  return google.sheets({ version: 'v4', auth });
}

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const sheets = getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Bookings!A:F',
    });

    const rows = res.data.values ?? [];
    const data = rows[0]?.[0] === 'Timestamp' ? rows.slice(1) : rows;

    const bookings = data.map((row) => ({
      timestamp: row[0] ?? '',
      name: row[1] ?? '',
      email: row[2] ?? '',
      service: row[3] ?? '',
      date: row[4] ?? '',
      notes: row[5] ?? '',
    }));

    return Response.json({ bookings });
  } catch (err) {
    console.error('Sheets read error:', err);
    return Response.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}
