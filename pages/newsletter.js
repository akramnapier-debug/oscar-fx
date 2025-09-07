import Link from 'next/link';

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Weekly Newsletter (Coming Soon)</h1>
      <p className="mb-6">Recap + Watchlist for next week — subscribers only.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Homepage</Link>
    </div>
  );
}
