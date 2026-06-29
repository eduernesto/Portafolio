const rateLimit = new Map();

function getClientIP(req) {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || '0.0.0.0';
}

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = getClientIP(req);
  const now = Date.now();
  const windowMs = 60 * 1000;

  // Rate limit: 3 requests per minute per IP
  if (rateLimit.has(ip)) {
    const timestamps = rateLimit.get(ip).filter(t => now - t < windowMs);
    if (timestamps.length >= 3) {
      return res.status(429).json({ error: 'Too many requests. Try again later.' });
    }
    timestamps.push(now);
    rateLimit.set(ip, timestamps);
  } else {
    rateLimit.set(ip, [now]);
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    try {
      const data = JSON.parse(body);

      // Validation
      if (!data.name || data.name.trim().length < 2) {
        return res.status(400).json({ error: 'Name must be at least 2 characters.' });
      }
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return res.status(400).json({ error: 'Invalid email.' });
      }
      if (!data.subject || data.subject.trim().length < 3) {
        return res.status(400).json({ error: 'Subject must be at least 3 characters.' });
      }
      if (!data.message || data.message.trim().length < 10) {
        return res.status(400).json({ error: 'Message must be at least 10 characters.' });
      }

      // ponytail: logs only, plug in Resend/SendGrid when you need delivery
      console.log('[contact]', JSON.stringify({
        name: data.name.trim(),
        email: data.email.trim(),
        subject: data.subject.trim(),
        message: data.message.trim(),
        ip,
        time: new Date().toISOString(),
      }));

      res.status(200).json({ ok: true });
    } catch (e) {
      res.status(400).json({ error: 'Invalid JSON.' });
    }
  });
};
