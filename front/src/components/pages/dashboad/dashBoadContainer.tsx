import Table from '@/components/pages/dashboad/table';
import { DashboadTableContent } from './types';
import { DashBoadTableProjects } from '@/models/project';
import { Skills } from '@/models/skill';
import { User } from '@/models/user';

type Props = {
  user: DashboadTableContent<User[]> | undefined;
  skills: DashboadTableContent<Skills> | undefined;
  projects: DashboadTableContent<DashBoadTableProjects[]> | undefined;
};

export default function DashBoadContainer({ user, skills, projects }: Props) {
  function route() {
    console.log('route');
  }
  return (
    <div className='w-full px-2 sm:px-4 flex flex-wrap gap-6 justify-center'>
      {user ? (
        <div className='basis-7/12'>
          <Table
            title={user.title}
            body={user.body}
            routeDetail={route}
            height='h-[calc(100vh_-_120px)] '
          />
        </div>
      ) : (
        <h1>Error</h1>
      )}

      <div className='basis-4/12'>
        {skills ? (
          <Table
            title={skills.title}
            body={skills.body}
            routeDetail={route}
            height='h-[calc((100vh_-_144px)_/_2)]'
          />
        ) : (
          <h1>Error</h1>
        )}
        {projects ? (
          <Table
            title={projects.title}
            body={projects.body}
            routeDetail={route}
            height='h-[calc((100vh_-_144px)_/_2)]'
          />
        ) : (
          <h1>Error</h1>
        )}
      </div>
    </div>
  );
}
