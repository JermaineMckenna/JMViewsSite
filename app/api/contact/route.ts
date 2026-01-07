import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // In the future, plug in an email service here (Resend, SendGrid, etc.)
    console.log("New contact submission from JMViews:", data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}