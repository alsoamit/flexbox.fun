import React from 'react';
import Contributors from './Contributors';
import Features from './Features';
import Hero from './Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flexbox Playground</title>
        <meta
          name="description"
          content="
A Flexbox Playground that Lets You Experiment and Master Web Layouts"
        />
        <meta property="og:url" content="https://www.flexbox.fun" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Flexbox Playground - Build your confidence in Flexbox"
        />
        <meta
          property="og:description"
          content="
A Flexbox Playground that Lets You Experiment and Master Web Layouts"
        />
        <meta
          property="og:image"
          content="https://www.flexbox.fun/images/flexbox-fun.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="flexbox.fun" />
        <meta property="twitter:url" content="https://www.flexbox.fun" />
        <meta
          name="twitter:title"
          content="Build your confidence in Flexbox - Flexbox Playground"
        />
        <meta
          name="twitter:description"
          content="
A Flexbox Playground that Lets You Experiment and Master Web Layouts"
        />
        <meta
          name="twitter:image"
          content="https://www.flexbox.fun/images/flexbox-fun.png"
        />
      </Head>
      <Hero />
      <Features />
      <Contributors />
    </>
  );
}
