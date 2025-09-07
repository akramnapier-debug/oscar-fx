let cache = null;
let cacheTime = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export default async function handler(req, res) {
  const now = Date.now();

  if (cache && now - cacheTime < CACHE_DURATION) {
    console.log('✅ Serving Crypto from cache');
    return res.status(200).json(cache);
  }

  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,binancecoin,solana&vs_currencies=usd&include_24hr_change=true');
    if (!response.ok) throw new Error('CoinGecko failed');

    const rawData = await response.json();
    cache = [
      { symbol: 'BTC', price: rawData.bitcoin.usd, change: rawData.bitcoin.usd_24h_change, source: 'coingecko', timestamp: new Date().toISOString() },
      { symbol: 'ETH', price: rawData.ethereum.usd, change: rawData.ethereum.usd_24h_change, source: 'coingecko', timestamp: new Date().toISOString() },
      { symbol: 'XRP', price: rawData.ripple.usd, change: rawData.ripple.usd_24h_change, source: 'coingecko', timestamp: new Date().toISOString() },
      { symbol: 'BNB', price: rawData.binancecoin.usd, change: rawData.binancecoin.usd_24h_change, source: 'coingecko', timestamp: new Date().toISOString() },
      { symbol: 'SOL', price: rawData.solana.usd, change: rawData.solana.usd_24h_change, source: 'coingecko', timestamp: new Date().toISOString() },
    ];
    cacheTime = now;

    console.log('✅ Crypto Data Fetched:', cache);
    res.status(200).json(cache);
  } catch (error) {
    console.error('❌ Crypto API Error:', error.message);
    res.status(500).json({ error: "Live data unavailable" });
  }
}
