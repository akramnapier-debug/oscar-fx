import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6">We respect your data. We don’t sell or share it.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Homepage</Link>
    </div>
  );
}
