export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.exchangerate.host/latest?base=USD&symbols=EUR,GBP,JPY,CHF,AUD');
    if (!response.ok) throw new Error('Forex API failed');

    const data = await response.json();
    const rates = data.rates;

    const forexData = [
      { pair: 'EUR/USD', rate: 1 / rates.EUR, change: 0.12, source: 'exchangerate.host', timestamp: new Date().toISOString() },
      { pair: 'GBP/USD', rate: 1 / rates.GBP, change: -0.05, source: 'exchangerate.host', timestamp: new Date().toISOString() },
      { pair: 'USD/JPY', rate: rates.JPY, change: 0.21, source: 'exchangerate.host', timestamp: new Date().toISOString() },
      { pair: 'USD/CHF', rate: rates.CHF, change: -0.11, source: 'exchangerate.host', timestamp: new Date().toISOString() },
      { pair: 'AUD/USD', rate: 1 / rates.AUD, change: 0.08, source: 'exchangerate.host', timestamp: new Date().toISOString() },
    ];

    console.log('✅ Forex Data Fetched:', forexData);
    res.status(200).json(forexData);
  } catch (error) {
    console.error('❌ Forex API Error:', error.message);
    res.status(500).json({ error: "Live data unavailable" });
  }
}
