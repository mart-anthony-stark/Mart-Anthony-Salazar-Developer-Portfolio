import styles from "../styles/works.module.scss";

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.headerGrid}>
        <div className={`${styles.block} ${styles.b1}`}></div>
        <div className={`${styles.block} ${styles.b2}`}></div>
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
