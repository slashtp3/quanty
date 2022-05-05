import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="keywords"
            content="Discord, Bot, Discord Bot, Moderation Discord Bot, Music Bot, Music, Moderation"
          />
          <meta property="og:title" content="Quanty - Discord Bot" />
          <meta
            property="og:description"
            content="Serving quality of life discord features with Quanty."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.quanty.xyz" />

          <link rel="icon" href="/quanty-64.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
