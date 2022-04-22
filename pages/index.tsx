import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <section className={styles.hero}></section>
    </div>
  );
};

export default Home;
