import LoginLayout from '../../layout/loginLayout';
import LoginForm from './loginForm';

export default function Login() {
  return (
    <LoginLayout>
      <div className='flex justify-center  mt-8  h-[calc(100vh_-_148px)]'>
        <LoginForm />
      </div>
    </LoginLayout>
  );
}
