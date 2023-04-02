import TableContent from './tableContent';
import Header from './tableHeader';
import TableThead from './tableThead';
export type TableBodyObject = { [key: string]: string };

type Props<T extends TableBodyObject> = {
  title: string;
  body: T[];
  routeDetail: () => void;
  height: string;
};

export default function Table<T extends TableBodyObject>({
  title,
  body,
  routeDetail,
  height,
}: Props<T>) {
  const headNames = Object.keys(body[0]);
  return (
    <div
      className={`relative flex flex-col
      min-w-0 break-words bg-white mb-6 shadow-lg
      rounded ${height}  overflow-scroll w-[22rem] sm:w-full`}
    >
      <Header title={title} routeDetail={routeDetail} />
      <div className='block w-full overflow-x-auto'>
        <table className='items-center w-full bg-transparent border-collapse'>
          <TableThead columnNames={headNames} />
          <TableContent line={body} />
        </table>
      </div>
    </div>
  );
}
