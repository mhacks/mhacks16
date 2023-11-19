import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

// site meta
const title = 'MHacks'
const description = 'The most hype hackathon in the world is BACK.'
const url = 'https://mhacks.org/'
const image = 'https://mhacks.org/img/background.png'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  console.error(
    'Warning: Encountered two children with the same key, `Daniel Malis`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. \n    at div    \n    at div \n    at MentorThanks \n    at div \n    at Index \n    at App (https://nsadnkwjqdhwqoudho23uo89u20odij2odi23jdpo28dijo2iduo9iu.mhacks.org)\n    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:80:11) \n    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:306:63) \n    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:858:919)\n    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:78:1)\n    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:182:11)\n    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:372:11)'
  )
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
        <link rel='icon' href='/icons/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
