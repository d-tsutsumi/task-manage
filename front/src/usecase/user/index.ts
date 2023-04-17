import { catchError, map, of } from 'rxjs';

import { PipeCatchError } from '@/repositories/types';
import repository from '@/repositories/user';
import { User } from '@/models/user';
import { DashboadTableContent } from '@/components/pages/dashboad/types';

type UsersResponse = DashboadTableContent<User[]> | PipeCatchError;
export const isUsersResponse = (
  response: UsersResponse,
): response is DashboadTableContent<User[]> => 'body' in response;

export const getShowTableUsers = () =>
  repository.getAll<{ users: User[] }>().pipe(
    map((res) => ({ body: res.users, title: 'users' })),
    catchError((err) => {
      console.error(err);
      return of({ error: true, message: err.message });
    }),
  );
