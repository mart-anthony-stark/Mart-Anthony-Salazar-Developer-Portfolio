import styles from "../styles/works.module.scss";
import Image from "next/image";
// import reactiveOS from "../public/projects/reactos/react-os.webp";
// import pizza from "../public/projects/Pizza.webp";
// import shrewsburry from "../public/projects/shrewsburry.webp";
// import ShoeShop from "../public/projects/ShoeShop.webp";
import projects from "../public/projects.json";

import Link from "next/link";

const blockClassNames = [
  styles.b1,
  styles.b2,
  styles.b3,
  styles.b4,
  styles.b5,
  styles.b6,
  styles.b7,
];
const Works = () => {
  return (
    <section id="works" className={styles.works}>
      <h1 className="heading">Works</h1>
      <div className={styles.headerGrid}>
        {projects.map((project, index) => (
          <Link href="/">
            <div className={`${styles.block} ${blockClassNames[index]}`}>
              <Image
                alt={project["images"][0]["alt"]}
                src={project["images"][0]["src"]}
                layout="fill"
              />
              <div className={styles.desc}>
                <h2>{project["title"]}</h2>
                <h4>{project["subheading"]}</h4>
              </div>
            </div>
          </Link>
        ))}
        {/* <Link href="/">
          <div className={`${styles.block} ${styles.b1}`}>
            <Image
              alt="Reactive OS"
              src="https://raw.githubusercontent.com/mart-anthony-stark/Mart-Anthony-Salazar-Developer-Portfolio/main/public/projects/reactos/react-os.webp"
              layout="fill"
            />
            <div className={styles.desc}>
              <h2>Reactive OS</h2>
              <h4>A desktop environment UI built using ReactJS</h4>
            </div>
          </div>
        </Link>
        <div className={`${styles.block} ${styles.b2}`}>
          <Image alt="Pizza Web App" src={pizza} />
          <div className={styles.desc}>
            <h2>Pizza Arc</h2>
            <h4>Pizza Ordering Web App using Node.js</h4>
          </div>
        </div>
        <div className={`${styles.block} ${styles.b3}`}>
          <Image alt="Footwear Ecommerce" src={ShoeShop} />
          <div className={styles.desc}>
            <h2>Shoe Shop</h2>
            <h4>A desktop environment UI built using ReactJS</h4>
          </div>
        </div>
        <div className={`${styles.block} ${styles.b4}`}>
          <Image alt="Student Attendance System with QR" src={shrewsburry} />
          <div className={styles.desc}>
            <h2>Shrewsbury International School</h2>
            <h4>  </h4>
          </div>
        </div>
        <div className={styles["bottom-block"]}>
          <div className={`${styles.block} ${styles.b5}`}></div>
          <div className={`${styles.block} ${styles.b6}`}></div>
          <div className={`${styles.block} ${styles.b7}`}></div>
        </div> */}
      </div>
    </section>
  );
};

export default Works;
