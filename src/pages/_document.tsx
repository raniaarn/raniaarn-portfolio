import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="2tHTYWSNOYbZ-XLS5PAarS7PdJuWHDXZsqNJ_jo8iYE" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}