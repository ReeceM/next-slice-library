// pages/_app.js
import React from 'react'
import NextApp from 'next/app'

import { default as theme } from '../styles/theme'

import { ThemeProvider, BaseStyles } from 'theme-ui'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <BaseStyles>
          <Component {...pageProps} />
        </BaseStyles>
      </ThemeProvider>
    )
  }
}
