export default function handler(req, res) {
  const bonds = [
    { bond: 'US 10Y', yield: 4.32, change: 0.02, source: 'treasury.gov', timestamp: new Date().toISOString() },
    { bond: 'German Bund 10Y', yield: 2.51, change: -0.03, source: 'tradingeconomics', timestamp: new Date().toISOString() },
    { bond: 'Japan 10Y', yield: 0.78, change: 0.01, source: 'tradingeconomics', timestamp: new Date().toISOString() },
    { bond: 'UAE Sukuk 5Y', yield: 5.10, change: 0.00, source: 'tradingeconomics', timestamp: new Date().toISOString() },
    { bond: 'Malaysia Sukuk 10Y', yield: 3.85, change: -0.05, source: 'tradingeconomics', timestamp: new Date().toISOString() },
  ];
  console.log('✅ Bonds Data Fetched:', bonds);
  res.status(200).json(bonds);
}
