import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/resend';

const caseTypeEnum = z.enum([
  'sex-crimes',
  'dui',
  'domestic-violence',
  'drug-offenses',
  'federal',
  'assault',
  'theft',
  'other',
]);

const contactSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(100),
  lastName: z.string().trim().min(1, 'Last name is required').max(100),
  phone: z
    .string()
    .trim()
    .min(7, 'Phone number is required')
    .max(30)
    .regex(/^[\d\s().+\-extEXT]+$/, 'Phone number contains invalid characters'),
  email: z.string().trim().email('Invalid email address').max(254),
  caseType: caseTypeEnum,
  description: z.string().trim().max(2000).optional().default(''),
});

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Subject lines must not contain CRLF — strip them to defend against header injection.
const sanitizeSubject = (value: string): string =>
  value.replace(/[\r\n]+/g, ' ').slice(0, 200);

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Invalid form submission',
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { firstName, lastName, phone, email, caseType, description } = parsed.data;

  if (!process.env.EMAIL_TO) {
    console.error('EMAIL_TO env var is not configured');
    return NextResponse.json(
      { error: 'Email service is not configured' },
      { status: 500 }
    );
  }

  const recipients = process.env.EMAIL_TO
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);

  if (recipients.length === 0) {
    console.error('EMAIL_TO env var is empty after parsing');
    return NextResponse.json(
      { error: 'Email service is not configured' },
      { status: 500 }
    );
  }

  const safe = {
    firstName: escapeHtml(firstName),
    lastName: escapeHtml(lastName),
    phone: escapeHtml(phone),
    email: escapeHtml(email),
    caseType: escapeHtml(caseType),
    description: escapeHtml(description),
  };

  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  });

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .header {
            background-color: #0d1b2a;
            color: #b8860b;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            background-color: white;
            padding: 30px;
            border-radius: 0 0 5px 5px;
          }
          .field {
            margin-bottom: 15px;
          }
          .label {
            font-weight: bold;
            color: #0d1b2a;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            color: #333;
            padding: 8px;
            background-color: #f5f5f5;
            border-radius: 3px;
          }
          .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <div class="value">${safe.firstName} ${safe.lastName}</div>
            </div>

            <div class="field">
              <span class="label">Phone:</span>
              <div class="value">${safe.phone}</div>
            </div>

            <div class="field">
              <span class="label">Email:</span>
              <div class="value">${safe.email}</div>
            </div>

            <div class="field">
              <span class="label">Type of Case:</span>
              <div class="value">${safe.caseType}</div>
            </div>

            ${
              description
                ? `
              <div class="field">
                <span class="label">Description:</span>
                <div class="value">${safe.description.replace(/\n/g, '<br>')}</div>
              </div>
            `
                : ''
            }

            <div class="footer">
              <p>This email was sent from the contact form at forsyth4defense.com</p>
              <p>Submitted on: ${submittedAt}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  const emailText = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Type of Case: ${caseType}
${description ? `Description: ${description}` : ''}

Submitted on: ${submittedAt}
  `;

  try {
    await sendEmail({
      to: recipients,
      subject: sanitizeSubject(
        `New Consultation Request - ${caseType} - ${firstName} ${lastName}`
      ),
      text: emailText,
      html: emailHtml,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
