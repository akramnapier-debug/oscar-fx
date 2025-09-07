import { useState, useEffect } from 'react';

export default function Home() {
  const [marketData, setMarketData] = useState({});
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoints = [
        'stocks', 'commodities', 'forex', 'crypto', 'bonds', 'realestate', 'news'
      ];

      const promises = endpoints.map(ep =>
        fetch(`/api/${ep}`).then(r => r.json()).catch(() => ({ error: true }))
      );

      const results = await Promise.all(promises);
      const [
        stocks, commodities, forex, crypto, bonds, realestate, newsData
      ] = results;

      setMarketData({ stocks, commodities, forex, crypto, bonds, realestate });
      setNews(newsData?.items || []);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Refresh every 1 min
    return () => clearInterval(interval);
  }, []);

  const renderCard = (title, data, keyField = 'symbol', valueField = 'price', changeField = 'change') => (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
      <h3 className="font-bold text-gray-800 mb-3">{title}</h3>
      {data?.error ? (
        <p className="text-red-500">Live data unavailable</p>
      ) : Array.isArray(data) ? (
        data.slice(0,5).map((item, i) => (
          <div key={i} className="flex justify-between py-1 border-b last:border-0">
            <span className="font-medium">{item[keyField]}</span>
            <span className={item[changeField] >= 0 ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
              ${item[valueField]?.toFixed(2)} {item[changeField] && `(${item[changeField].toFixed(2)}%)`}
            </span>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Oscar FX</h1>
          <div className="space-x-4 text-sm">
            <a href="/">Home</a>
            <a href="/stocks">Stocks</a>
            <a href="/commodities">Commodities</a>
            <a href="/forex">Forex</a>
            <a href="/crypto">Crypto</a>
            <a href="/bonds">Bonds</a>
            <a href="/realestate">Real Estate</a>
            <a href="/news">News</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* News Ticker */}
      <div className="bg-black text-yellow-400 py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll text-sm px-4">
          📰 {news.slice(0,5).map((n,i) => n.title).join(' • ')}
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderCard("Stock Indices", marketData.stocks, 'index')}
        {renderCard("Commodities", marketData.commodities, 'name')}
        {renderCard("Forex Pairs", marketData.forex, 'pair', 'rate')}
        {renderCard("Crypto", marketData.crypto)}
        {renderCard("Bonds (Yield)", marketData.bonds, 'bond', 'yield')}
        {renderCard("Real Estate", marketData.realestate, 'city', 'index')}
      </div>

      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p>© 2025 Oscar FX — Real-time financial data. No mock data. Ever.</p>
        <div className="mt-2 space-x-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/methodology" className="hover:underline">Methodology</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
