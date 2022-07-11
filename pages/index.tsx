import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import Typography from "../components/Typography";
import About from "../components/about";
import Works from "../components/Works";
import Social from "../components/Socials";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const Home: NextPage = () => {
  return (
    <div>
      <section className={styles.hero}>
        <Typography
          text1="Create, curate, solve."
          text2="That's the way I code"
        />
        <Typography
          text1="Mart Anthony Salazar"
          text2="Creating Things For Web"
          delay={3}
          permanent
        />
        <div className={styles.know}></div>
        <Social />
      </section>
      <About />
      <Works />
    </div>
  );
};

export default Home;
