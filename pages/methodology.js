import Link from 'next/link';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Methodology</h1>
      <p className="mb-6">How we source and verify data. No mock data. Ever.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Homepage</Link>
    </div>
  );
}
