import { LoginUser } from '../../models/auth';
import { map, catchError, of, Subject } from 'rxjs';
import { setLoginUser } from '@/store/loginUser';
import { FormEvent } from 'react';
import { NextRouter } from 'next/router';
import repository from '@/repositories/login';
import { PipeCatchError } from '@/repositories/types';

type LoginResponse = LoginUser | PipeCatchError;
const isLoginResponse = (response: LoginResponse): response is LoginUser =>
  'token' in response && 'role' in response && 'user_name' in response;

export const login = (user_name: string, password: string) =>
  repository.post<LoginUser, { user_name: string; password: string }>({ user_name, password }).pipe(
    map((user) => ({
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
    if (isLoginResponse(res)) {
      setLoginUser({
        ...res,
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
