import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: any) {
  return (
    <div className="flex gap-5">
      <div className="w-16">
        <Navbar />
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
}
