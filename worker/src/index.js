const ALLOWED_ORIGINS = [
  'https://me.aecaichang.com',
  'http://localhost:4321',
];

const KEY = 'total';
const SEEN_TTL_SECONDS = 86400; // one visit per IP per 24h
const BOT_PATTERN = /bot|crawler|spider|crawling|preview|fetch|monitor|headless/i;

async function hashIp(ip, date) {
  const data = new TextEncoder().encode(`${ip}:${date}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') ?? '';
    const headers = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    const current = Number(await env.VISITS.get(KEY)) || 0;

    if (request.method === 'POST') {
      const userAgent = request.headers.get('User-Agent') ?? '';
      if (BOT_PATTERN.test(userAgent) || !userAgent) {
        return new Response(JSON.stringify({ count: current }), { headers });
      }

      const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
      const today = new Date().toISOString().slice(0, 10);
      const seenKey = `seen:${await hashIp(ip, today)}`;
      if (await env.VISITS.get(seenKey)) {
        return new Response(JSON.stringify({ count: current }), { headers });
      }

      // ponytail: KV write is not atomic — concurrent hits may drop a count.
      // Fine for a portfolio counter; switch to a Durable Object if exactness matters.
      const next = current + 1;
      await Promise.all([
        env.VISITS.put(KEY, String(next)),
        env.VISITS.put(seenKey, '1', { expirationTtl: SEEN_TTL_SECONDS }),
      ]);
      return new Response(JSON.stringify({ count: next }), { headers });
    }

    return new Response(JSON.stringify({ count: current }), { headers });
  },
};
