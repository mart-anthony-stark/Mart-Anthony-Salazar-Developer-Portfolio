import { FC, useState } from "react";
import { Project } from "../../types";
import projects from "../../public/projects.json";
import styles from "../../styles/Project.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
};

const Project: FC<Props> = (props) => {
  const [activeImage, setActiveImage] = useState(0);
  const { project } = props;
  return (
    <div className={styles.project}>
      <div className={styles["image-container"]}>
        <h2>{project.title}</h2>
        <div className={styles["two-cols"]}>
          <div className={styles["main"]}>
            <Image
              src={project.images[activeImage]["src"]}
              alt={project.images[activeImage]["alt"]}
              height={300}
              width={600}
            />
          </div>
          <div className={styles["menu"]}>
            {project.images.map((image, i) => (
              <div
                key={image.src}
                className={`${styles["button"]} ${
                  activeImage == i && styles["active"]
                }`}
                onClick={() => {
                  setActiveImage(i);
                }}
              >
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
        <h3>{project.subheading}</h3>

        <div className={styles.links}>
          {project.link && (
            <Link href={project.link}>
              <span className={styles.site}>
                Visit Site
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </span>
            </Link>
          )}
          {project.sourcecode && (
            <Link href={project.sourcecode}>
              <span className={styles.code}>
                View Source Code
                <i className="fa fa-github" aria-hidden="true"></i>
              </span>
            </Link>
          )}
        </div>
        <p className={styles.description}>{project.description}</p>
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
