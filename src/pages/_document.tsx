import Document, { Html, Head, Main, NextScript } from "next/document";
import { Meta } from "config";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={Meta.lang}>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content={Meta.description} />
          <meta name='keywords' content={Meta.tags.join(",")} />
          {/*  */}
          <meta itemProp='name' content={Meta.title} />
          <meta itemProp='description' content={Meta.description} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
