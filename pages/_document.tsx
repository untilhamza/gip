import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        /> */}
        <meta property="og:title" content="gip" key="title" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
