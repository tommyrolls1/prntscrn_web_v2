export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const {
      type = 'enterprise',
      name = '',
      email = '',
      company = '',
      message = '',
      nda = false,
      website = '', // honeypot field (should be empty)
    } = req.body || {}

    // Basic validation and anti-spam honeypot
    if (website) {
      // silently accept spam submissions
      return res.status(200).json({ ok: true })
    }
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
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
      return res.status(500).json({ error: 'Server not configured (missing RESEND_API_KEY)' })
    }

    const payload = {
      from,
      to,
      subject,
      text,
      reply_to: email,
    }

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
      return res.status(502).json({ error: 'Email send failed', details })
    }

    const data = await resp.json()
    return res.status(200).json({ ok: true, id: data?.id })
  } catch (err) {
    return res.status(500).json({ error: 'Unexpected error', details: String(err?.message || err) })
  }
}
