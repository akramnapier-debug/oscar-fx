import Link from 'next/link';

export default function BondsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Bonds Overview (Coming Soon)</h1>
      <p className="mb-6">Top 5 Bond Markets: US Treasuries, German Bunds, JGBs, UAE Sukuk, Malaysia Sukuk.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Homepage</Link>
    </div>
  );
}
