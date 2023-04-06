import loginRepository from '../../repositories/login';
import { User } from '../../models/user';
import { map, catchError, of } from 'rxjs';;


export const login = (user_name: string, password: string) =>
  loginRepository.post<User, { user_name: string; password: string }>({ user_name, password }).pipe(
    map((user) => ({ error: false, token: user.token, role: user.role, userName: user.user_name })),
    catchError((err) => {
      console.error(err);
      return of({ error: true, message: err.message });
    }),
  );

