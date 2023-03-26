import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <div className="c-container mx-auto flex min-h-screen flex-col items-center justify-center gap-y-8 py-20">
      <h1 className="c-title mx-auto max-w-2xl text-center text-7xl font-bold">
        Most interactive flexbox playground
      </h1>
      <div className="flex justify-center gap-4">
        <Link href="/app" className="rounded-full bg-blue-500 p-3 px-8">
          Try for Free
        </Link>
        <button className="rounded-full bg-gray-500 p-3 px-8">Tutorial</button>
      </div>
    </div>
  );
}
