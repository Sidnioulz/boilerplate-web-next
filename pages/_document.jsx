import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        {/* Change lang as required. */}
        <Head>
          {/* Customise manually as it can't be injected with CSS modules. */}
          <meta name=" theme-color" content="#ff11cc" />
          {/*
          Load your preload fonts here using tags like the line below.
          <link rel="preload" href="/static/fonts/subset-FONT.woff2" crossOrigin="true" as="font" />
          */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
