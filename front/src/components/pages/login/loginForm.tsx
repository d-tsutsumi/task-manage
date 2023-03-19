import InputGroup from '@/components/ui/input/inputGroup';
import PrimarilyButton from '../../ui/button/primarilyButton';

export default function LofinForm() {
  return (
    <form className='w-96  h-80 bg-white shadow-sm rounded-lg px-6 pt-4 pb-6 mb-2'>
      <InputGroup label='username' id='username' margin='mb-4' value={'user!'} type='text' />
      <InputGroup label='password' id='password' margin='mb-6' value='pass' type='password' />
      <div className='mb-6'>
        <PrimarilyButton text='Sign in' />
      </div>
    </form>
  );
}
