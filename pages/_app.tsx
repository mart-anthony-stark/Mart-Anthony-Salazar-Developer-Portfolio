import "../styles/globals.scss";
// import "../styles/slider.scss";

import type { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import Typography from "../components/Typography";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
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
    <Layout>
      <div id="cursor"></div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
