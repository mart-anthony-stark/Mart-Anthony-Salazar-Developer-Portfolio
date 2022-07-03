import styles from "../styles/works.module.scss";
import Image from "next/image";
import reactiveOS from "../public/projects/react-os.webp";
import pizza from "../public/projects/Pizza.webp";
import Link from "next/link";

const Works = () => {
  return (
    <section id="works" className={styles.works}>
      <div className={styles.headerGrid}>
        <Link href="/">
          <div className={`${styles.block} ${styles.b1}`}>
            <Image src={reactiveOS} />
            <div className={styles.desc}>
              <h2>Reactive OS</h2>
              <h4>A desktop environment UI built using ReactJS</h4>
            </div>
          </div>
        </Link>
        <div className={`${styles.block} ${styles.b2}`}>
          <Image src={pizza} />
          <div className={styles.desc}>
            <h2>Pizza Arc</h2>
            <h4>Pizza Ordering Web App using Node.js</h4>
          </div>
        </div>
        <div className={`${styles.block} ${styles.b3}`}></div>
        <div className={`${styles.block} ${styles.b4}`}></div>
        <div className={styles["bottom-block"]}>
          <div className={`${styles.block} ${styles.b5}`}></div>
          <div className={`${styles.block} ${styles.b6}`}></div>
          <div className={`${styles.block} ${styles.b7}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Works;
