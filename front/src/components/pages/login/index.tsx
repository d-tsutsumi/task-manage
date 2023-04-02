import LoginLayout from '../../layout/loginLayout';
import LoginForm from './loginForm';
import { useState } from 'react';
import { useLoginSubmitEvent } from '@/usecase/login';
import { postSubScribe } from '@/usecase/login/subscribe';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { submit, submit$ } = useLoginSubmitEvent();
  postSubScribe(submit$, setUsername, setPassword);

  const loginFormProps = { username, setUsername, setPassword, password, submit };
  return (
    <LoginLayout>
      <div className='flex justify-center  mt-8  h-[calc(100vh_-_148px)]'>
        <LoginForm {...loginFormProps} />
      </div>
    </LoginLayout>
  );
}
