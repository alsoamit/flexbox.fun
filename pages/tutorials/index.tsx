import Link from 'next/link';
import React from 'react';
import Docs from 'src/docs';

export default function DocsPage() {
  // return <Docs />;
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 py-40 md:py-60">
        <Link
          href="/"
          id="logo"
          className="flex animate-pulse justify-center px-3 py-2"
        >
          <img src="/images/logo.png" className="mb-1 w-32" alt="flexbox.fun" />
        </Link>
        <h1 className="c-heading-text text-5xl font-bold">Coming Soon!</h1>
      </div>
    </>
  );
}
