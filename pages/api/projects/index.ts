// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../../types";
import projects from "../../../public/projects.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  res.status(200).json(projects);
}
