import Link from 'next/link';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Financial Newsroom (Coming Soon)</h1>
      <p className="mb-6">Aggregated headlines filtered by asset class: Stocks, Forex, Crypto, Bonds, Real Estate.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Homepage</Link>
    </div>
  );
}
