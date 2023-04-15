export default function TableBody({ columns }: { columns: (string | number)[] }) {
  return (
    <tr>
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
