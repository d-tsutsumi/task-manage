import loginRepository from '../../repositories/login';
import { User } from '../../models/user';
import { map, catchError, of, Subject } from 'rxjs';
import { LoginUser, setLoginUser } from '@/store/loginUser';
import { FormEvent } from 'react';
import { NextRouter } from 'next/router';

type LoginResponse =
  | { error: boolean; token: string; role: string; userName: string }
  | { error: boolean; message: string };

export const login = (user_name: string, password: string) =>
  loginRepository.post<User, { user_name: string; password: string }>({ user_name, password }).pipe(
    map((user) => ({ error: false, token: user.token, role: user.role, userName: user.user_name })),
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
        userName: loginUser.userName,
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
