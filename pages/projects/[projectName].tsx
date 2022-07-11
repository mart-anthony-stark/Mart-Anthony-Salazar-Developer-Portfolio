import { FC } from "react";
import { Project } from "../../types";
import projects from "../../public/projects.json";

type Props = {
  project: Project;
};

const Project: FC<Props> = (props) => {
  const { project } = props;
  return <h1>{project.title}</h1>;
};

export async function getStaticProps(props: any) {
  const project = projects.filter(
    (project: Project) => project.title == props.params.projectName
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
          projectName: project.title,
        },
      };
    }),
    fallback: false,
  };
}

export default Project;
