import { LoginParams } from '@/models/user';
import { useObservableCallback } from 'observable-hooks';
import { FormEvent } from 'react';
import { tap, map } from 'rxjs';

export type LoginsubmitArgs = {
  event: FormEvent<HTMLFormElement>;
  username: string;
  password: string;
};

export const useLoginSubmitEvent = () => {
  const [submit, submit$] = useObservableCallback<LoginParams, LoginsubmitArgs>((event$) =>
    event$
      .pipe(tap(({ event }) => event.preventDefault()))
      .pipe(map(({ username, password }) => ({ user_name: username, password }))),
  );

  return {
    submit,
    submit$,
  };
};
