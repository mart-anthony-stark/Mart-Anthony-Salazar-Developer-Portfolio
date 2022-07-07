import styles from "../styles/works.module.scss";
import Image from "next/image";
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
      </div>
    </section>
  );
};

export default Works;
