import { rest } from "msw";
import { user, users, skill, skills, project, projects } from "./data";
export const handlers = [
  rest.get("/user", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.get("/user", (req, res, ctx) => {
    const userId = req.url.searchParams.get("user_id");
    return res(ctx.status(200), ctx.json(user));
  }),

  rest.get("/project", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(projects));
  }),
  rest.get("/project", (req, res, ctx) => {
    const projectId = req.url.searchParams.get("project_id");
    return res(ctx.status(200), ctx.json(project));
  }),
  rest.get("/skill", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(skills));
  }),
  rest.get("/skill", (req, res, ctx) => {
    const skillId = req.url.searchParams.get("project_id");
    return res(ctx.status(200), ctx.json(skill));
  }),
];
