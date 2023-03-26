import { useRouter } from 'next/router';
import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: any) {
  const router = useRouter();
  return (
    <div className="flex">
      {router.pathname === '/app' && (
        <div className="w-16">
          <Navbar />
        </div>
      )}
      <main className="flex-1">{children}</main>
    </div>
  );
}
