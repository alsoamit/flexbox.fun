import { useRouter } from 'next/router';
import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: any) {
  const router = useRouter();
  return (
    <div className="flex w-full max-w-full">
      <Navbar isAppNav={router.pathname === '/app'} />
      <main className="w-full max-w-full flex-1">{children}</main>
    </div>
  );
}
