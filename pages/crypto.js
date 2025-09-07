import Link from 'next/link';

export default function CryptoPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Crypto Overview (Coming Soon)</h1>
      <p className="mb-6">Live prices for BTC, ETH, XRP, BNB, SOL — with charts and sentiment.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Homepage</Link>
    </div>
  );
}
