import type { AppProps } from "next/app";
import Head from "next/head";
//? You won't be importing from "../../dist", but from "next-progress"
import NextProgress from "../../dist";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
    }

    body {
      font-family: 'Press Start 2P', cursive;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Example</title>
      </Head>
      <GlobalStyle />
      {
        //
        // Can be placed anywhere in the return statement
        //
      }
      <NextProgress delay={300} height="8px" options={{ showSpinner: false }} />
      {
        //
        //
        //
      }
      <Component {...pageProps} />
    </>
  );
}
