import { createClient } from '@supabase/supabase-js';
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.warn('[RSS] Missing Supabase env vars. Skipping RSS generation.');
  process.exit(0);
}

const client = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: false,
  },
});

const BASE_URL = process.env.SITE_URL || 'https://vixlor.ai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildRss = (items) => {
  const pubDate = new Date().toUTCString();
  const itemXml = items
    .map((item) => `
      <item>
        <title><![CDATA[${item.title}]]></title>
        <link>${BASE_URL}/blog/${item.slug}</link>
        <guid>${BASE_URL}/blog/${item.slug}</guid>
        <pubDate>${new Date(item.published_at).toUTCString()}</pubDate>
        <description><![CDATA[${item.excerpt}]]></description>
      </item>
    `)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>VIXLOR Journal</title>
    <link>${BASE_URL}/blog</link>
    <description>Sexy AI image growth playbooks, prompt formulas, and VIXLOR product drops.</description>
    <language>en-us</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    ${itemXml}
  </channel>
</rss>`;
};

(async () => {
  const { data, error } = await client
    .from('posts')
    .select('id, slug, title, excerpt, published_at, status')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(50);

  if (error) {
    console.error('[RSS] Supabase error', error);
    process.exit(1);
  }

  const rssXml = buildRss(data ?? []);
  const publicDir = join(__dirname, '..', 'public');
  await mkdir(publicDir, { recursive: true });
  await writeFile(join(publicDir, 'rss.xml'), rssXml, 'utf8');
  console.log(`[RSS] Generated rss.xml with ${data?.length ?? 0} posts.`);
})();
