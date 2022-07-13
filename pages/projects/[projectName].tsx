import { FC } from "react";
import { Project } from "../../types";
import projects from "../../public/projects.json";
import styles from "../../styles/Project.module.scss";
import Image from "next/image";

type Props = {
  project: Project;
};

const Project: FC<Props> = (props) => {
  const { project } = props;
  return (
    <div className={styles.project}>
      <div className={styles["image-container"]}>
        <h2>{project.title}</h2>
        <div className={styles["main"]}>
          <img src={project.images[0]["src"]} alt={project.images[0]["alt"]} />
        </div>
        <div className={styles["menu"]}></div>
      </div>
    </div>
  );
};

export async function getStaticProps(props: any) {
  const project = projects.filter(
    (project: Project) => project.slug == props.params.projectName
  )[0];

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: projects.map((project: Project) => {
      return {
        params: {
          projectName: project.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Project;
