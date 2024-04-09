import Head from "next/head";
import { Navbar, Footer } from '@/components/elements'
import React from 'react';
import { LayoutProps } from "../types/layoutProps";

export const Layout: React.FC<LayoutProps> = ({ children, metaTitle, metaDescription }) => {
  return (
    <>
      <Head>
        <title>{`${metaTitle}`}</title>
        <meta
          name="description"
          content={metaDescription || "Raniaarn's Portfolio"}
        />
        <meta property="og:title" content={`${metaTitle}`} />
        <meta property="og:image" content="https://i.ibb.co/kBYXM63/raniaarn.png" />
        <meta property="og:description" content={`${metaDescription || "Raniaarn's Portfolio"}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://i.ibb.co/kBYXM63/raniaarn.png" />
        <meta name="line:image" content="https://i.ibb.co/kBYXM63/raniaarn.png" />
        <link rel="icon" href="/icons/raniaarn.svg" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}