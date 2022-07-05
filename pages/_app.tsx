import "../styles/globals.scss";
// import "../styles/slider.scss";

import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import Typography from "../components/Typography";
import { useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(router.asPath);
  }, [router.asPath]);

  useEffect(() => {
    const cursor: any = document.querySelector("#cursor");
    function followCursor(e: MouseEvent) {
      cursor.style.top = e.clientY + window.scrollY + "px";
      cursor.style.left = e.clientX + "px";
    }
    function snap() {
      cursor.classList.add("snap");

      setTimeout(() => {
        cursor.classList.remove("snap");
      }, 500);
    }

    window.addEventListener("mousemove", followCursor);
    window.addEventListener("click", snap);

    return () => {
      window.removeEventListener("mousemove", followCursor);
      window.removeEventListener("click", snap);
    };
  }, []);

  return (
    <AppContext.Provider value={{ activeRoute, setActiveRoute }}>
      <Head>
        <title>Mart Anthony Salazar</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Mart Anthony Salazar" key="title" />
      </Head>
      <Layout>
        <div id="cursor"></div>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
