import Table from "@/components/pages/dashboad/table";

const mock = {
  title: 'page Vists',
  body: [
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
    { 'PAGE NAME': '/argon/', VISITORS: '4,569', 'UNIQUE USERS': '340', 'BOUNCE RATE': '46,53%' },
  ],
};

export default function DashBoadContainer() {
  function route() {
    console.log('route');
  }
  return (
    <div className='w-full px-2 sm:px-4 flex flex-wrap gap-6 justify-center'>
      <div className='basis-7/12'>
        <Table
          title={mock.title}
          body={mock.body}
          routeDetail={route}
          height='h-[calc(100vh_-_120px)] '
        />
      </div>
      <div className='basis-4/12'>
        <Table
          title={mock.title}
          body={mock.body}
          routeDetail={route}
          height='h-[calc((100vh_-_144px)_/_2)]'
        />
        <Table
          title={mock.title}
          body={mock.body}
          routeDetail={route}
          height='h-[calc((100vh_-_144px)_/_2)]'
        />
      </div>
    </div>
  );
}
