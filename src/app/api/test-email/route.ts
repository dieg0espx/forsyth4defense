import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/resend';

export async function GET() {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'RESEND_API_KEY is not configured' },
      { status: 500 }
    );
  }

  const to = process.env.CONTACT_EMAIL || 'diego@comcreate.org';

  try {
    const data = await sendEmail({
      to,
      subject: 'Test Email - Forsyth4Defense',
      html: '<h1>Test Email</h1><p>This is a test email from the Forsyth4Defense contact system.</p>',
      text: 'Test Email\n\nThis is a test email from the Forsyth4Defense contact system.',
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send test email' },
      { status: 500 }
    );
  }
}
