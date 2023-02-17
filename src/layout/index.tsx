import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: any) {
  return (
    <>
      <div className="h-20">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
