import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-surface p-6 text-center">
      <h1 className="text-6xl font-black text-primary mb-4">404</h1>
      <h2 className="text-xl font-bold text-on-surface mb-6">Page Not Found</h2>
      <Link
        href="/"
        className="px-8 py-3 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
      >
        Return to Dashboard
      </Link>
    </div>
  );
}
