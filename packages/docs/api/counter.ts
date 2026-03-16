import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from 'redis';

function parseCookies(cookieHeader: string): Record<string, string> {
  return Object.fromEntries(
    cookieHeader.split(';').map((c) => {
      const [k, ...v] = c.trim().split('=');
      return [k, v.join('=')];
    }),
  );
}

let client: ReturnType<typeof createClient> | null = null;

async function getRedis() {
  if (!client) {
    client = createClient({ url: process.env.REDIS_URL });
    client.on('error', () => {
      client = null;
    });
  }
  if (!client.isOpen) await client.connect();
  return client;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const redis = await getRedis();

  if (req.method === 'POST') {
    const cookies = parseCookies(req.headers.cookie || '');

    if (!cookies.visitor_id) {
      const id = crypto.randomUUID();
      res.setHeader(
        'Set-Cookie',
        `visitor_id=${id}; Path=/; Max-Age=${30 * 86400}; HttpOnly; SameSite=Lax`,
      );
      await redis.incr('site:uv');
    }

    await redis.incr('site:pv');
  }

  const [uv, pv] = await Promise.all([redis.get('site:uv'), redis.get('site:pv')]);

  res.json({ uv: Number(uv) || 0, pv: Number(pv) || 0 });
}
