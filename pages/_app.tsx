import "../styles/globals.scss";
import Chatbot from "react-chatbot-kit";
import Script from "next/script";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import Typography from "../components/Typography";
import { useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { useRouter } from "next/router";
import Head from "next/head";
import { ActionProvider, MessageParser } from "../config/chatbot";
import { config } from "../config/chatbot-config";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState("");
  const [showBot, setBotVisible] = useState(false);

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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Mart Anthony Salazar" key="title" />
        <meta
          property="og:image"
          content="https://github.com/mart-anthony-stark/mart-anthony-stark/blob/main/gh-banner3.png?raw=true"
        />
        <meta
          property="og:description"
          content="A Filipino freelance web developer and BSIT student. He has a passion in learning different programming languages, technologies, and skills that can be used for future work and projects. He has an experience in freelancing particularly in web development and data science and still learning things to grow in the tech industry."
        />
        <meta property="og:url" content="https://martsalazar.vercel.app//" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W4BSK2TC51"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W4BSK2TC51');
        `}
      </Script>
      <Layout>
        {showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        )}
        <button
          className="app-chatbot-button"
          onClick={() => setBotVisible(!showBot)}
        >
          Chats
        </button>
        <div id="cursor"></div>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
