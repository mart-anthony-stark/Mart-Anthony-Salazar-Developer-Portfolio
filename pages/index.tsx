import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import Typography from "../components/Typography";
import About from "../components/about";
import Works from "../components/Works";
import Social from "../components/Socials";

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
