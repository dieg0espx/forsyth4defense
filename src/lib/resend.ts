import { Resend } from 'resend'

export type EmailOptions = {
  to: string | string[]
  subject: string
  html: string
  text?: string
}

let cached: Resend | null = null

const getResend = (): Resend => {
  if (cached) return cached
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  cached = new Resend(apiKey)
  return cached
}

export async function sendEmail(options: EmailOptions) {
  const from = process.env.EMAIL_FROM
  if (!from) {
    throw new Error('EMAIL_FROM is not configured')
  }

  const { data, error } = await getResend().emails.send({
    from,
    to: Array.isArray(options.to) ? options.to : [options.to],
    subject: options.subject,
    html: options.html,
    text: options.text,
  })

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`)
  }

  return data
}
