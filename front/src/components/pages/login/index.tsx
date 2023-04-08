import { FormEvent } from 'react';

import LoginLayout from '../../layout/loginLayout';
import LoginForm from './loginForm';
import { useTextInputValue } from '@/hooks/useInputChange';

import { login } from '@/usecase/login';
import { loginUser } from '@/store/loginUser';
import { loginSubscribe } from '@/usecase/login';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, userNameSubject] = useTextInputValue();
  const [password, passwordSubject] = useTextInputValue();
  const router = useRouter();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subscribe = loginSubscribe(userNameSubject, passwordSubject, router);
    login(username, password).subscribe(subscribe);
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
      {loginUser.value?.user_name}
    </LoginLayout>
  );
}
