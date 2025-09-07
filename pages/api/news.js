import { parseStringPromise } from 'xml2js';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://finance.yahoo.com/rss/');
    const xml = await response.text();
    const result = await parseStringPromise(xml);

    const items = result.rss.channel[0].item.map(item => ({
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0]
    })).slice(0, 10);

    res.status(200).json({ items, source: 'Yahoo Finance RSS', timestamp: new Date().toISOString() });
  } catch (error) {
    console.error('❌ News RSS Error:', error.message);
    res.status(500).json({ error: "Live data unavailable" });
  }
}
