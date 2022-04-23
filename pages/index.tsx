import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import Typography from "../components/Typography";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const Home: NextPage = () => {
  return (
    <div>
      <section className={styles.hero}>
        <Typography text1="Turning Ideas" text2="Into Solutions" />
        <Typography text1="Better People," text2="Better Websites" delay={4} />
        <Typography
          text1="Create, curate, teach."
          text2="That's the way I code"
          delay={8}
        />
        <Typography
          text1="Mart Anthony Salazar"
          text2="Web Developer"
          delay={12}
          permanent={true}
        />
      </section>
    </div>
  );
};

export default Home;
