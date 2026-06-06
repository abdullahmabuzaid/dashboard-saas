'use client';

import Link from 'next/link';

export default function Error({ reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-surface p-6 text-center">
      <h2 className="text-2xl font-bold text-on-surface mb-4">Something went wrong</h2>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary/90 transition-all"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-2 bg-surface-container border border-outline-variant/10 text-on-surface rounded-xl font-semibold hover:bg-surface-container-high transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
