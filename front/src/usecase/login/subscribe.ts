import { LoginParams } from '@/models/user';
import { postLogin } from '@/repositories/login';
import { useSubscription } from 'observable-hooks';
import { Dispatch, SetStateAction } from 'react';
import { Observable } from 'rxjs';

export const postSubScribe = (
  submit$: Observable<LoginParams>,
  setUsername: Dispatch<SetStateAction<string>>,
  setPassword: Dispatch<SetStateAction<string>>,
) => {
  useSubscription(submit$, (v) =>
    postLogin({ user_name: v.user_name, password: v.password }).subscribe({
      next: (v) => {
        console.log(v);
        setUsername('');
        setPassword('');
      },
      error: (error) => {
        console.log(error);
      },
    }),
  );
};
