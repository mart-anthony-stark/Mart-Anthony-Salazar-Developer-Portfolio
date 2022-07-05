import { FC } from "react";
import { server } from "../../config";
import { Project } from "../../types";

type Props = {
  project: Project;
};

const Project: FC<Props> = (props) => {
  const { project } = props;
  return <h1>{project.title}</h1>;
};

export async function getStaticProps(props: any) {
  const projects = await fetch(`${server}/api/projects`).then((p) => p.json());
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
  console.log(process.env["HOST"]);
  const projects = await fetch(`${server}/api/projects`).then((p) => p.json());
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
