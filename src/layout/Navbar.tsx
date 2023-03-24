import Link from 'next/link';
import React from 'react';
import { HiBookOpen } from 'react-icons/hi';

export default function Navbar() {
  return (
    <div className="fixed top-0 bottom-0 left-0 flex w-16 flex-col justify-between dark:bg-gray-800 dark:text-white/60">
      <div id="logo" className="flex justify-center py-2">
        <span className="text-4xl font-bold">F</span>
      </div>
      <div className="flex flex-1 flex-col items-stretch py-4">
        <Link href="/docs" className="flex justify-center">
          <HiBookOpen className="text-3xl" />
        </Link>
      </div>
      <div>
        <h2>Flexbox</h2>
      </div>
    </div>
  );
}
