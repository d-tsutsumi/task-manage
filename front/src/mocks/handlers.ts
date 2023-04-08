import { rest } from 'msw';
import { user, users, skill, skills, project, projects, loginUser } from './data';

const BASE_URL = 'http://my.backend';
export const handlers = [
  rest.get(`${BASE_URL}/user`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.get(`${BASE_URL}/user`, (req, res, ctx) => {
    const userId = req.url.searchParams.get('user_id');
    return res(ctx.status(200), ctx.json(user));
  }),

  rest.get(`${BASE_URL}/project`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(projects));
  }),
  rest.get(`${BASE_URL}/project`, (req, res, ctx) => {
    const projectId = req.url.searchParams.get('project_id');
    return res(ctx.status(200), ctx.json(project));
  }),
  rest.get(`${BASE_URL}/skill`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(skills));
  }),
  rest.get(`${BASE_URL}/skill`, (req, res, ctx) => {
    const _skillId = req.url.searchParams.get('project_id');
    return res(ctx.status(200), ctx.json(skill));
  }),
  rest.post(`${BASE_URL}/login`, async (req, res, ctx) => {
    const _body = await req.json<{ user_name: string; password: string }>();

    return res(ctx.status(200), ctx.json(loginUser));
  }),
];
