// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  const projects = [{ id: 1, title: "iaugsasdasdasdasdad" }];
  res.status(200).json(projects);
}
