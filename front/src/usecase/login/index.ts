import { LoginUser } from '../../models/auth';
import { map, catchError, of, Subject } from 'rxjs';
import { setLoginUser } from '@/store/loginUser';
import { FormEvent } from 'react';
import { NextRouter } from 'next/router';
import repository from '@/repositories/login';

type LoginResponse =
  | { error: boolean; token: string; role: string; user_name: string }
  | { error: boolean; message: string };

export const login = (user_name: string, password: string) =>
  repository.post<LoginUser, { user_name: string; password: string }>({ user_name, password }).pipe(
    map((user) => ({
      error: false,
      token: user.token,
      role: user.role,
      user_name: user.user_name,
    })),
    catchError((err) => {
      console.error(err);
      return of({ error: true, message: err.message });
    }),
  );

export const loginSubscribe = (
  userNameSubject: Subject<FormEvent<HTMLInputElement>>,
  passwordSubject: Subject<FormEvent<HTMLInputElement>>,
  router: NextRouter,
) => ({
  next: (res: LoginResponse) => {
    if (!res.error) {
      const loginUser = res as LoginUser;
      setLoginUser({
        user_name: loginUser.user_name,
        token: loginUser.token,
        role: loginUser.role,
      });
      router.push('/dashboad');
    } else {
      console.log('error');
      // TODO error処理
    }
  },
  complete: () => {
    userNameSubject.complete();
    passwordSubject.complete();
    (document.getElementById('user_name') as HTMLInputElement).value = '';
    (document.getElementById('password') as HTMLInputElement).value = '';
  },
});
