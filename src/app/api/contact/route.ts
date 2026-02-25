import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, caseType, description } = body;

    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !caseType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
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
                <div class="value">${firstName} ${lastName}</div>
              </div>

              <div class="field">
                <span class="label">Phone:</span>
                <div class="value">${phone}</div>
              </div>

              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>

              <div class="field">
                <span class="label">Type of Case:</span>
                <div class="value">${caseType}</div>
              </div>

              ${description ? `
                <div class="field">
                  <span class="label">Description:</span>
                  <div class="value">${description.replace(/\n/g, '<br>')}</div>
                </div>
              ` : ''}

              <div class="footer">
                <p>This email was sent from the contact form at forsyth4defense.com</p>
                <p>Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}</p>
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

Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}
    `;

    // Send email to both recipients
    const recipients = process.env.EMAIL_TO || 'diego@comcreate.org,John@forsyth4defense.com';

    await transporter.sendMail({
      from: `"Forsyth4Defense Contact Form" <${process.env.EMAIL_FROM}>`,
      to: recipients,
      subject: `New Consultation Request - ${caseType} - ${firstName} ${lastName}`,
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
