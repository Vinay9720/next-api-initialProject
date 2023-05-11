import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function app({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default app;
