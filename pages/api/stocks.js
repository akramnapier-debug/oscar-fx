export default function handler(req, res) {
  // Simulating delayed free API (Finnhub/Yahoo) — in real use, call API
  const stocks = [
    { index: 'S&P 500', price: 5680.21, change: 0.45, source: 'simulated-free-api', timestamp: new Date().toISOString() },
    { index: 'Dow Jones', price: 40512.68, change: 0.32, source: 'simulated-free-api', timestamp: new Date().toISOString() },
    { index: 'Nasdaq', price: 17890.35, change: 0.61, source: 'simulated-free-api', timestamp: new Date().toISOString() },
    { index: 'FTSE 100', price: 8315.89, change: -0.12, source: 'simulated-free-api', timestamp: new Date().toISOString() },
    { index: 'Nikkei 225', price: 38950.22, change: 1.05, source: 'simulated-free-api', timestamp: new Date().toISOString() },
  ];
  console.log('✅ Stocks Data Fetched:', stocks);
  res.status(200).json(stocks);
}
