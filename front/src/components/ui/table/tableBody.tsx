import { useRouter } from 'next/router';

export default function TableBody({ columns }: { columns: (string | number)[] }) {
  const route = useRouter();
  const isDashBoad = route.pathname === '/dashboad';
  function routeDetail(column: string | number) {
    route.push(`${route.pathname}/${String(column)}`);
  }
  return (
    <tr
      className={isDashBoad ? 'cursor-default' : 'cursor-pointer hover:bg-slate-300'}
      onClick={isDashBoad ? undefined : () => routeDetail(columns[0])}
    >
      {columns.map((column, index) => (
        <th
          className='border-t-0 px-6 
            align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4  text-left'
          key={index}
        >
          {column}
        </th>
      ))}
    </tr>
  );
}
