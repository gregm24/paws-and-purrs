import { google } from 'googleapis';

const SHEET = 'Reviews';
const HEADERS = ['Timestamp', 'Name', 'Rating', 'Review', 'Display'];

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

async function ensureReviewsSheet(sheets: ReturnType<typeof google.sheets>, spreadsheetId: string) {
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const exists = meta.data.sheets?.some((s) => s.properties?.title === SHEET);
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests: [{ addSheet: { properties: { title: SHEET } } }] },
    });
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${SHEET}!A1:E1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [HEADERS] },
    });
  }
}

export async function POST(request: Request) {
  const { name, review, rating } = await request.json();

  if (!name || !review) {
    return Response.json(
      { success: false, error: 'Name and review are required' },
      { status: 400 }
    );
  }

  try {
    const sheets = getSheetsClient();
    await ensureReviewsSheet(sheets, process.env.GOOGLE_SHEET_ID!);
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${SHEET}!A:E`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[new Date().toISOString(), name, rating ?? '', review, 'FALSE']],
      },
    });
    return Response.json({ success: true });
  } catch (err) {
    console.error('Review submit error:', err);
    return Response.json({ success: false, error: 'Failed to save review.' }, { status: 500 });
  }
}
