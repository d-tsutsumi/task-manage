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
      .pipe(tap((value) => value.event.preventDefault()))
      .pipe(map((value) => ({ user_name: value.username, password: value.password }))),
  );

  return {
    submit,
    submit$,
  };
};
