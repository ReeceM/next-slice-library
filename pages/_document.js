// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

import { createResolver } from 'next-slicezone/resolver'
import Links from '../next_components/Links';
export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    await createResolver()
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <Links />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
