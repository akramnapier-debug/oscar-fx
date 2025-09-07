import Link from 'next/link';

export default function CommoditiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Commodities Overview (Coming Soon)</h1>
      <p className="mb-6">Live prices for Gold, Oil, Gas, Wheat, Copper — with mini charts and news.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Homepage</Link>
    </div>
  );
}
