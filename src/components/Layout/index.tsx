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
          content={metaDescription || "Raniaarn"}
        />
        <meta property="og:image" content="https://i.ibb.co/8DjvMk1/preview.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/raniaarn.svg" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}