export const welcomeMail = (name, email) => ({
  from: process.env.SENDER_EMAIL,
  to: email,
  subject: "Welcome to DevSource",
  text: `Hello ${name},

  Welcome to DevSource! We're excited to have you on board. Your account has been successfully created with the email ID: ${email}

  Get started by visiting: ${
    process.env.FRONTEND_URL ||
    process.env.CLIENT_URL ||
    "https://devsource.example.com"
  }

  If you need help, reply to this email.

  Best regards,
  The DevSource Team
  `,
  html: `<!doctype html>
  <html>
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    </head>
    <body style="margin:0;padding:0;background:#f4f6f8;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:24px 0;">
      <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.06);">
        <tr>
          <td style="padding:24px 28px;background:linear-gradient(90deg,#4f46e5,#06b6d4);color:#ffffff;">
          <h1 style="margin:0;font-size:20px;line-height:1.2;">DevSource</h1>
          </td>
        </tr>

        <tr>
          <td style="padding:28px;">
          <h2 style="margin:0 0 12px;font-size:18px;color:#111827;">Welcome, ${name}!</h2>
          <p style="margin:0 0 16px;color:#374151;line-height:1.5;">
            Thanks for joining DevSource — we're thrilled to have you. Your account has been created using <strong style="color:#111827;">${email}</strong>.
          </p>

          <p style="margin:0 0 20px;color:#374151;line-height:1.5;">
            Get started by visiting your dashboard and exploring projects, resources, and tools to accelerate your development workflow.
          </p>

          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:18px 0;">
            <tr>
            <td align="center">
              <a href="${
                process.env.FRONTEND_URL ||
                process.env.CLIENT_URL ||
                "https://devsource.example.com"
              }" target="_blank" rel="noopener" style="display:inline-block;padding:12px 20px;background:#4f46e5;color:#ffffff;border-radius:6px;text-decoration:none;font-weight:600;">
              Get Started
              </a>
            </td>
            </tr>
          </table>

          <hr style="border:none;border-top:1px solid #e6e9ee;margin:20px 0;" />

          <p style="margin:0;color:#6b7280;font-size:13px;line-height:1.4;">
            Need help? Reply to this email or contact <strong style="color:#111827;">${
              process.env.SUPPORT_EMAIL || process.env.SENDER_EMAIL
            }</strong>.
          </p>
          </td>
        </tr>

        <tr>
          <td style="padding:16px 28px;background:#f9fafb;color:#9ca3af;font-size:12px;text-align:center;">
          © ${new Date().getFullYear()} DevSource. All rights reserved.
          </td>
        </tr>
        </table>
      </td>
      </tr>
    </table>
    </body>
  </html>`,
});
