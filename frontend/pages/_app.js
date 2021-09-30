import App from "next/app";
import Head from "next/head";
import "../assets/css/style.css";
import { createContext } from "react";
import { getStrapiMedia } from "../utils/media";
import { fetchAPI } from "../utils/api";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

// const MyApp = ({ Component, pageProps }) => {
  const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} /> */}
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (appContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  // const fetchAPI = await getFetchAPI(appContext.router.locale)

  return {
    ...appProps,
    pageProps: {
      global: appProps,
    },
  }
}

export default MyApp