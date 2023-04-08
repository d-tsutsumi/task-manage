import { User } from '../../models/user';
import { catchError, map, of, throwError } from 'rxjs';

import repository from '@/repositories/user';
export const getShowTableUsers = () =>
  repository.getAll<{ users: User[]; error: boolean }>().pipe(
    map((user) => ({ users: user.users, error: false })),
    catchError((err) => {
      console.error(err);
      throw throwError(() => new Error(err))
    }),
  );