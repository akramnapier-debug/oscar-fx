export default function handler(req, res) {
  // Simulated — replace with Alpha Vantage or Trading Economics
  const commodities = [
    { name: 'Gold', price: 2621.30, change: 0.85, source: 'simulated-free-api', timestamp: new Date().toISOString() },
    { name: 'Oil (WTI)', price: 78.45, change: -1.20, source: 'simulated-free-api', timestamp: new Date().toISOString() },
    { name: 'Natural Gas', price: 2.67, change: 2.30, source: 'simulated-free-api', timestamp: new Date().toISOString() },
    { name: 'Copper', price: 4.25, change: 0.95, source: 'simulated-free-api', timestamp: new Date().toISOString() },
    { name: 'Wheat', price: 587.20, change: -0.40, source: 'simulated-free-api', timestamp: new Date().toISOString() },
  ];
  console.log('✅ Commodities Data Fetched:', commodities);
  res.status(200).json(commodities);
}
