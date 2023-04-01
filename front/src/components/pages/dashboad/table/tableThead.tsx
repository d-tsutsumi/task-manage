type Props = {
  columnNames: string[];
};

export default function TableThead({ columnNames }: Props) {
  return (
    <thead>
      <tr>
        {columnNames.map((name) => (
          <th
            className='px-6 bg-blueGray-50 text-blueGray-500 align-middle 
                      border border-solid border-blueGray-100 py-3 text-xs 
                      border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'
            key={name}
          >
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
}
