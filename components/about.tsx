import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Chibi from "../images/chibi.png";

const About = () => {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles["two-cols"]}>
        <div className={styles["left"]}>
          <p>
            I am <strong>Mart Anthony Salazar</strong>, I am highly passionate
            about learning different programming languages, technologies, and
            skills that I can use for my future work and projects. I have an
            experience in freelancing particularly in web development and still
            learning things to grow in the tech industry.
          </p>
        </div>
        <Image src={Chibi} width={500} height={500} />
      </div>
    </section>
  );
};
export default About;