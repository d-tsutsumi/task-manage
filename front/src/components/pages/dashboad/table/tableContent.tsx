import { TableBodyObject } from './table';
import TableBody from './tableBody';

type Props<T extends TableBodyObject> = {
  line: T[];
};

export default function TableContent<T extends TableBodyObject>({ line }: Props<T>) {
  return (
    <tbody>
      {line.map((columns, index) => {
        const colmn = Object.values(columns);
        return <TableBody columns={colmn}  key={index} />;
      })}
    </tbody>
  );
}
