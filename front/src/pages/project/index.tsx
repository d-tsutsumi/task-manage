import { GetServerSideProps } from 'next';
import { firstValueFrom } from 'rxjs';
import { SWRConfig } from 'swr';

import Detail from '@/components/pages/detail';
import { DashBoadTableProjects } from '@/models';
import { getShowTableProjects, isProjects } from '../../usecase/project/index';

type Props = {
  fallback: {
    '/api/projects':
      | {
          title: string;
          body: DashBoadTableProjects[];
        }
      | undefined;
  };
};

export default function Skill({ fallback }: Props) {
  return (
    <SWRConfig value={{ fallback }}>
      <Detail model='projects' />
    </SWRConfig>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projects = await firstValueFrom(getShowTableProjects());
  return {
    props: {
      fallback: {
        '/api/projects': isProjects(projects) ? projects : undefined,
      },
    },
  };
};
