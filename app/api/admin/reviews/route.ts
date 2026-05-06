import { google } from 'googleapis';

const SHEET = 'Reviews';

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

function isAuthed(request: Request) {
  return request.headers.get('authorization') === `Bearer ${process.env.ADMIN_PASSWORD}`;
}

export async function GET(request: Request) {
  if (!isAuthed(request)) return Response.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const sheets = getSheetsClient();
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${SHEET}!A:E`,
    });
    const rows = res.data.values ?? [];
    const data = rows[0]?.[0] === 'Timestamp' ? rows.slice(1) : rows;
    return Response.json({
      reviews: data.map((row, i) => ({
        row: i + 2,
        timestamp: row[0] ?? '',
        name: row[1] ?? '',
        rating: row[2] ?? '',
        review: row[3] ?? '',
        display: row[4] === 'TRUE',
      })),
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('Unable to parse range')) return Response.json({ reviews: [] });
    console.error('Admin reviews read error:', err);
    return Response.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  if (!isAuthed(request)) return Response.json({ error: 'Unauthorized' }, { status: 401 });
  const { row, display } = await request.json();
  try {
    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${SHEET}!E${row}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [[display ? 'TRUE' : 'FALSE']] },
    });
    return Response.json({ success: true });
  } catch (err) {
    console.error('Admin reviews update error:', err);
    return Response.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!isAuthed(request)) return Response.json({ error: 'Unauthorized' }, { status: 401 });
  const { row } = await request.json();
  try {
    const sheets = getSheetsClient();
    const meta = await sheets.spreadsheets.get({ spreadsheetId: process.env.GOOGLE_SHEET_ID! });
    const sheetId = meta.data.sheets?.find((s) => s.properties?.title === SHEET)?.properties?.sheetId ?? 0;
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      requestBody: {
        requests: [{
          deleteDimension: {
            range: { sheetId, dimension: 'ROWS', startIndex: row - 1, endIndex: row },
          },
        }],
      },
    });
    return Response.json({ success: true });
  } catch (err) {
    console.error('Admin reviews delete error:', err);
    return Response.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
