import { css, Global } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Global
        styles={css`
          html,
          body {
            background-color: white;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          h1 {
            color: black;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }

          @media (prefers-color-scheme: dark) {
            html {
              color-scheme: dark;
            }
            body {
              color: white;
              background: white;
            }
          }
        `}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
