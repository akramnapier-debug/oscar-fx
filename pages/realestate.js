import Link from 'next/link';

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Real Estate Overview (Coming Soon)</h1>
      <p className="mb-6">Top 5 Markets: Dubai, London, New York, Singapore, Hong Kong.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Homepage</Link>
    </div>
  );
}
