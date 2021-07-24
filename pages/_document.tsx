import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDoc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content="antonyjr.in" key="title" />
          <meta
            name="description"
            content="Hi, I'm Antony. Aspiring Computer Scientist and Open Source Developer"
          />
          <meta
            property="og:description"
            content="Hi, I'm Antony. Aspiring Computer Scientist and Open Source Developer"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="antonyjr.in" />
          <meta property="og:image" content="https://antonyjr.in/social.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://antonyjr.in/social.png" />
          <meta name="twitter:creator" content="@antonyjr0" />
          <meta name="twitter:site" content="@antonyjr0" />
          <meta name="twitter:title" content="antonyjr.in" />
          <meta
            name="twitter:description"
            content="Hi, I'm Antony. I work with computers and watch Animes a lot."
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={"light"} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDoc;
