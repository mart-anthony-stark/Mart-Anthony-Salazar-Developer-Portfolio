import styles from "../styles/Skills.module.scss";
// import html from "../images/svg/html.svg";
// import css from "../images/svg/css.svg";
// import js from "../images/svg/js.svg";
// import reactjs from "../images/svg/reactjs.svg";
// import vue from "../images/svg/vue.svg";
// import mongo from "../images/svg/mongo.svg";
// import mysql from "../images/svg/mysql.svg";
import Image from "next/image";

const skillset = [
  {
    name: "HTML",
    logo: "/svg/html.svg",
  },
  {
    name: "CSS",
    logo: "/svg/css.svg",
  },
  {
    name: "JavaScript",
    logo: "/svg/js.svg",
  },
  {
    name: "MongoDB",
    logo: "/svg/mongo.svg",
  },
  {
    name: "ReactJS",
    logo: "/svg/reactjs.svg",
  },
  {
    name: "VueJS",
    logo: "/svg/vue.svg",
  },
  {
    name: "Nuxt",
    logo: "/svg/nuxt.svg",
  },
  {
    name: "MySQL",
    logo: "/svg/mysql.svg",
  },
  {
    name: "Jupyter",
    logo: "/svg/jupyter.svg",
  },
  {
    name: "Node JS",
    logo: "/svg/node.svg",
  },
  {
    name: "Express",
    logo: "/svg/express.svg",
  },
  {
    name: "Nest",
    logo: "/svg/nest.svg",
  },
  {
    name: "Java",
    logo: "/svg/java.svg",
  },
  {
    name: "Python",
    logo: "/svg/python.svg",
  },
];

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1>Skills</h1>
      <div className={styles.icons}>
        {skillset.map((skill) => (
          <div key={skill.name} className={styles.icon}>
            <Image src={skill.logo} alt="" width={70} height={70} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
