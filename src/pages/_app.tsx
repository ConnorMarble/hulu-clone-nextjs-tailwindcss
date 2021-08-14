import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import Layout from "src/components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
