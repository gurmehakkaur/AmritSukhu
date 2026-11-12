import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  if (!payload?.name || !payload?.phone || !payload?.events) {
    return NextResponse.json({ error: "Missing required RSVP details" }, { status: 400 });
  }

  // The Google Forms adapter belongs here once the private form endpoint is supplied.
  // Keeping this server-side prevents form configuration from reaching the browser.
  return NextResponse.json({ received: true }, { status: 200 });
}