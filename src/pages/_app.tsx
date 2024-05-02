import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NextSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  <NextSeo
    defaultTitle="Raniaaarn | Rania Maharani Narendra"
    title={pageProps?.title}
    description={pageProps?.description}
  />

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return <Component {...pageProps} />;
}
