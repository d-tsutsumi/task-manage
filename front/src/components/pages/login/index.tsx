import { ObservableInput, Subject, catchError, map, of } from 'rxjs';
import LoginLayout from '../../layout/loginLayout';
import LoginForm from './loginForm';
import { FormEvent, useState } from 'react';
import { fromFetch } from 'rxjs/fetch';
import { User } from '../../../models/user';
export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const userNameSubject = new Subject<FormEvent<HTMLInputElement>>();
  userNameSubject.subscribe({
    next: (e) => setUsername(e.currentTarget.value),
    error: (e) => console.log(e),
    complete: () => setUsername(''),
  });

  const passwordSubject = new Subject<FormEvent<HTMLInputElement>>();
  passwordSubject.subscribe({
    next: (e) => {
      setPassword(e.currentTarget.value);
    },
    error: (e) => console.log(e),
    complete: () => setPassword(''),
  });

  const loginData$ = fromFetch<User>('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_name: username, password }),
    selector: (res) => res.json(),
  }).pipe(
    map((user) => ({ token: user.token, role: user.role, userName: user.user_name })),
    catchError((err) => {
      // Network or other error, handle appropriately
      console.error(err);
      return of({ error: true, message: err.message });
    }),
  );
  const submit = (e: FormEvent) => {
    e.preventDefault();
    loginData$.subscribe({
      next: (user) => {
        console.log(user);
      },
      complete: () => {
        userNameSubject.complete();
        passwordSubject.complete();
        (document.getElementById('user_name') as HTMLInputElement).value = '';
        (document.getElementById('password') as HTMLInputElement).value = '';
      },
    });
  };
  const loginFormProps = {
    username,
    setUsername: userNameSubject,
    setPassword: passwordSubject,
    password,
    submit,
  };

  return (
    <LoginLayout>
      <div className='flex justify-center  mt-8  h-[calc(100vh_-_148px)]'>
        <LoginForm {...loginFormProps} />
      </div>
    </LoginLayout>
  );
}
