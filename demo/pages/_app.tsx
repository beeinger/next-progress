import type { AppProps } from "next/app";
import Head from "next/head";
//? You won't be importing from "../../dist", but from "next-progress"
import NextProgress from "../../dist";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Example</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Lorem Ipsum..." />
      </Head>
      <style jsx global>{`
        * {
          margin: 0;
        }

        body {
          font-family: "Press Start 2P", cursive;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
      {
        //
        // Can be placed anywhere in the return statement
        //
      }
      <NextProgress
        delay={300}
        height="8px"
        options={{ showSpinner: false }}
        disableSameRoute
      />
      {
        //
        //
        //
      }
      <Component {...pageProps} />
    </>
  );
}
