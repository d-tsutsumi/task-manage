import PrimarilyButton from '@/components/ui/button/primarilyButton';
import { useRouter } from 'next/router';

export default function Header({
  title,
  routeDetail,
}: {
  title: string;
  routeDetail?: () => void;
}) {
  const route = useRouter();
  const path = route.pathname;

  return (
    <div className='rounded-t mb-0 px-4 py-3 border-0'>
      <div className='flex flex-wrap items-center'>
        <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
          <h3 className='font-semibold text-base text-blueGray-700'>{title}</h3>
        </div>
        <div className='relative w-full sm:w-1/5 px-4 max-w-full flex-grow flex-1 text-right'>
          {path === '/dashboad' ? (
            <PrimarilyButton text={'See All'} onClickHandle={routeDetail} size='xl' />
          ) : (
            <PrimarilyButton text={'Add'} size='sm' />
          )}
        </div>
      </div>
    </div>
  );
}
