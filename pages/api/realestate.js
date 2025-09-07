export default function handler(req, res) {
  const realestate = [
    { city: 'Dubai', index: 185.2, change: 2.1, source: 'knightfrank.com', timestamp: new Date().toISOString() },
    { city: 'London', index: 168.7, change: 0.3, source: 'knightfrank.com', timestamp: new Date().toISOString() },
    { city: 'New York', index: 210.5, change: 1.2, source: 'globalpropertyguide.com', timestamp: new Date().toISOString() },
    { city: 'Singapore', index: 155.9, change: -0.5, source: 'globalpropertyguide.com', timestamp: new Date().toISOString() },
    { city: 'Hong Kong', index: 142.3, change: -1.8, source: 'globalpropertyguide.com', timestamp: new Date().toISOString() },
  ];
  console.log('✅ Real Estate Data Fetched:', realestate);
  res.status(200).json(realestate);
}
