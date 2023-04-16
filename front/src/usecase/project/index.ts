import { catchError, map, of } from 'rxjs';

import repository from '@/repositories/project';
import { PipeCatchError } from '@/repositories/types';
import { DashBoadTableProjects, Project } from '@/models/project';
import { DashboadTableContent } from '@/components/pages/dashboad/types';

type ProjectsResponse = DashboadTableContent<DashBoadTableProjects[]> | PipeCatchError;

export const isProjects = (
  response: ProjectsResponse,
): response is DashboadTableContent<DashBoadTableProjects[]> =>
  'title' in response && 'body' in response;

export const getShowTableProjects = () =>
  repository.getAll<Project[]>().pipe(
    map((projects) => ({
      title: 'projects',
      body: projects.map<DashBoadTableProjects>((project) => ({
        name: project.name,
        member_count: project.member_count,
        end_years: project.end_years,
        start_year: project.start_year,
      })),
    })),
    catchError((err) => {
      console.error(err);
      return of({ error: true, message: err.message });
    }),
  );
