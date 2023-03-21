import InputGroup from '@/components/ui/input/inputGroup';
import PrimarilyButton from '../../ui/button/primarilyButton';

export default function LofinForm() {
  return (
    <form className='w-96  h-80 bg-white shadow-sm rounded-lg px-6 pt-4 pb-6 mb-2'>
      <InputGroup label='username' id='username' margin={4} direction='b' value='user' type='text' size='full' />
      <InputGroup label='password' id='password' margin={6} direction='b' value='pass' type='password' size='full' />
      <div className='flex justify-center mb-6'>
        <PrimarilyButton text='Sign in' size="xl"/>
      </div>
    </form>
  );
}
