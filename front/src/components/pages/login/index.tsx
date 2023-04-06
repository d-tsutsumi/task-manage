import LoginLayout from '../../layout/loginLayout';
import LoginForm from './loginForm';
import { FormEvent } from 'react';
import { useTextInputValue } from '../../../hooks/useInputChange';
import { login} from '@/usecase/login';
import { setLoginUser, LoginUser, loginUser } from '../../../store/loginUser';
export default function Login() {
  const [username, userNameSubject] = useTextInputValue();
  const [password, passwordSubject] = useTextInputValue();

  const submit = (e: FormEvent) => {
    console.log("gresgrse")
    e.preventDefault();
    login(username, password).subscribe({
      next: (res) => {
        if (!res.error) {
          const loginUser = res as LoginUser;
          setLoginUser({
            userName: loginUser.userName,
            token: loginUser.token,
            role: loginUser.role,
          });
        } else {
          // TODO error処理
          console.log(res);
        }
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
      {loginUser.value?.userName}
    </LoginLayout>
  );
}
