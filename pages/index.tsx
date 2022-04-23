import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const Home: NextPage = () => {
  return (
    <div>
      <section className={styles.hero}>
        <motion.h1
          animate={{ y: -100, opacity: 0 }}
          transition={{ delay: 2, duration: 1.3 }}
          className={styles.typography}
        >
          <motion.span
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            Turning Ideas
          </motion.span>
          <motion.span
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Into Solutions
          </motion.span>
        </motion.h1>
      </section>
    </div>
  );
};

export default Home;
