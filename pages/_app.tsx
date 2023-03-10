import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="author" content="John Doe"/>
      <title> InHouse</title>
    </Head>
    <Component {...pageProps} />
  </>

}
