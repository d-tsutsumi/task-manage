import Table from '@/components/ui/table';
import { Skills } from '@/models';
import useSWR from 'swr';
type Props = {
  model: string;
};

export default function DetailContainer({ model }: Props) {
  const { data, isLoading } = useSWR<{ title: string; body: Skills }>(`/api/${model}`);

  return (
    <div className='w-full px-2 sm:px-4 flex flex-wrap gap-6 justify-center'>
      {data && !isLoading ? (
        <Table title={data.title} body={data.body} height='h-[calc(100vh_-_120px)] ' />
      ) : (
        <h1>Error</h1>
      )}
    </div>
  );
}
