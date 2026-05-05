export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, service, date } = body;

  if (!name || !email || !service || !date) {
    return Response.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  // TODO: replace with Google Sheets API call via googleapis
  console.log("Booking request:", body);

  return Response.json({ success: true, message: "Booking request received!" });
}
