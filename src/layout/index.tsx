import { useRouter } from 'next/router';
import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: any) {
  const router = useRouter();
  return (
    <div className="flex">
      <Navbar isAppNav={router.pathname === '/app'} />
      <main className="flex-1">{children}</main>
    </div>
  );
}
