import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

// site meta
const title = 'MHacks'
const description =
  'Michigan’s premier hackathon is back in person. November 18-19, 2023. Applications open soon.'
const url = 'https://mhacks.org/'
const image = 'https://mhacks.org/img/title.svg'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={description} />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:image' content={image} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@mhacks' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />

        <link rel='icon' href='/favicons/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
