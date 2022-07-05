import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Chibi from "../images/chibi.png";
import Skills from "./Skills";
import Slider from "./Slider";

const About = () => {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles["two-cols"]}>
        <div className={styles["left"]}>
          <p>
            Hello! I am <strong>Mart Anthony Salazar</strong>. I&apos;m a BSIT
            student and also a freelance web developer.I am highly passionate
            about learning different programming languages, technologies, and
            skills that I can use for my future work and projects. I have an
            experience in freelancing particularly in web development and still
            learning things to grow in the tech industry.
          </p>

          <a href="https://ko-fi.com/Q5Q7CTA9C">
            <img
              height={36}
              style={{ border: 0, height: 36 }}
              src="https://cdn.ko-fi.com/cdn/kofi4.png?v=3"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
        </div>
        <Image
          alt="Mart Anthony Salazar Avatar"
          src={Chibi}
          width={300}
          height={450}
        />
      </div>
      <Skills />
    </section>
  );
};
export default About;
