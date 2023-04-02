import InputGroup from '@/components/ui/input/inputGroup';
import PrimarilyButton from '../../ui/button/primarilyButton';
import { SetStateAction } from 'react';
import { LoginsubmitArgs } from '@/usecase/login';

type Props = {
  username: string;
  password: string;
  setUsername: React.Dispatch<SetStateAction<string>>;
  setPassword: React.Dispatch<SetStateAction<string>>;
  submit: (args: LoginsubmitArgs) => void;
};

export default function LoginForm({ username, password, setUsername, setPassword, submit }: Props) {
  return (
    <form
      className='w-96  h-80 bg-white shadow-sm rounded-lg px-6 pt-4 pb-6 mb-2'
      onSubmit={(e) => submit({ event: e, username: username, password })}
    >
      <InputGroup
        label='username'
        id='username'
        margin={4}
        direction='b'
        value={username}
        type='text'
        size='full'
        setState={setUsername}
      />
      <InputGroup
        label='password'
        id='password'
        margin={6}
        direction='b'
        value={password}
        type='password'
        size='full'
        setState={setPassword}
      />
      <div className='flex justify-center mb-6'>
        <PrimarilyButton text='Sign in' size='xl' type='submit' />
      </div>
    </form>
  );
}
