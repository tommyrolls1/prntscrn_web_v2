export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST' },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    }
  }

  try {
    const data = JSON.parse(event.body || '{}')
    const {
      type = 'enterprise',
      name = '',
      email = '',
      company = '',
      message = '',
      nda = false,
      website = '', // honeypot field
    } = data

    if (website) {
      return { statusCode: 200, body: JSON.stringify({ ok: true }) }
    }
    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) }
    }

    const to = process.env.TO_EMAIL || 'hello@prntscrn.studio'
    const from = process.env.FROM_EMAIL || 'website@prntscrn.studio'

    const subject = `PRNTSCRN Inquiry — ${type}${nda ? ' — NDA requested' : ''}`
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || '-'}`,
      `Type: ${type}`,
      `NDA requested: ${nda ? 'Yes' : 'No'}`,
      '',
      message,
    ].join('\n')

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Server not configured (missing RESEND_API_KEY)' }) }
    }

    const payload = { from, to, subject, text, reply_to: email }

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    })

    if (!resp.ok) {
      const details = await resp.text()
      return { statusCode: 502, body: JSON.stringify({ error: 'Email send failed', details }) }
    }

    const result = await resp.json()
    return { statusCode: 200, body: JSON.stringify({ ok: true, id: result?.id }) }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Unexpected error', details: String(err?.message || err) }) }
  }
}
