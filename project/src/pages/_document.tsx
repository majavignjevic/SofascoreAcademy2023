import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{background: '${p => p.theme.surface.lvl0}', padding: '0',margin: '0 auto'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}