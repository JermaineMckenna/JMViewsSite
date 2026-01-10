import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendKey || !toEmail || !fromEmail) {
      return Response.json(
        { ok: false, error: "Missing server email configuration." },
        { status: 500 }
      );
    }

    const data = (await request.json()) as Payload;

    const name = (data.name ?? "").toString().trim();
    const email = (data.email ?? "").toString().trim();
    const projectType = (data.projectType ?? "").toString().trim();
    const budget = (data.budget ?? "").toString().trim();
    const message = (data.message ?? "").toString().trim();

    // Validate
    if (!name || name.length < 2) {
      return Response.json({ ok: false, error: "Name is required." }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return Response.json({ ok: false, error: "Valid email is required." }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return Response.json(
        { ok: false, error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return Response.json({ ok: false, error: "Message is too long." }, { status: 400 });
    }

    const resend = new Resend(resendKey);

    const subject = `JMViews enquiry — ${name}${projectType ? ` (${projectType})` : ""}`;

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height:1.6; color:#0f172a;">
        <h2 style="margin:0 0 12px 0;">New JMViews enquiry</h2>
        <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${projectType ? `<p style="margin:0 0 8px 0;"><strong>Project type:</strong> ${escapeHtml(projectType)}</p>` : ""}
        ${budget ? `<p style="margin:0 0 8px 0;"><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ""}
        <hr style="border:none; border-top:1px solid #e2e8f0; margin:16px 0;" />
        <p style="margin:0 0 8px 0;"><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap; background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #e2e8f0; margin:0;">
${escapeHtml(message)}
        </pre>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: `JMViews Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return Response.json({ ok: false, error: "Email sending failed." }, { status: 500 });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}