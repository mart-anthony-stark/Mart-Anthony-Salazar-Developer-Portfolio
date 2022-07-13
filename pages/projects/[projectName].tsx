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
        <div className={styles["two-cols"]}>
          <div className={styles["main"]}>
            <Image
              src={project.images[0]["src"]}
              alt={project.images[0]["alt"]}
              height={300}
              width={600}
            />
          </div>
          <div className={styles["menu"]}>
            {project.images.map((image) => (
              <div className={`${styles["button"]} ${styles["active"]}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={100}
                  width={200}
                />
              </div>
            ))}
          </div>
        </div>
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
