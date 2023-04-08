import { catchError, map, of } from 'rxjs';

import repository from '@/repositories/skill';
import { Skills } from '@/models/skill';
import { PipeCatchError } from '@/repositories/types';
import { DashboadTableContent } from '../../components/pages/dashboad/types/index';

type SkillsResponse = DashboadTableContent<Skills> | PipeCatchError;

export const isSkills = (response: SkillsResponse): response is DashboadTableContent<Skills> =>
  'title' in response && 'body' in response;

export const getShowTableSkills = () =>
  repository.getAll<Skills>().pipe(
    map((skills) => ({ title: 'sills', body: skills })),
    catchError((err) => {
      console.error(err);
      return of({ error: true, message: err.message });
    }),
  );
