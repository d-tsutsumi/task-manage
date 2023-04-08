import { GetServerSideProps } from 'next/types';
import Dashboad from '../components/pages/dashboad/index';
import { firstValueFrom, forkJoin } from 'rxjs';
import { getShowTableUsers, isUsersResponse } from '@/usecase/user';
import { User } from '../models/user';
import { getShowTableSkills } from '@/usecase/skill';
import { getShowTableProjects } from '@/usecase/project';
import { isSkills } from '../usecase/skill/index';
import { isProjects } from '../usecase/project/index';
import { Skills } from '@/models/skill';
import { DashBoadTableProjects } from '@/models/project';
import { TableBodyObject } from '../components/pages/dashboad/table/table';
import { DashboadTableContent } from '@/components/pages/dashboad/types';

type Props = {
  user: DashboadTableContent<User[]> | undefined;
  skills: DashboadTableContent<Skills> | undefined;
  projects: DashboadTableContent<DashBoadTableProjects[]> | undefined;
};

export default function DashBoad(props: Props) {
  return <Dashboad {...props} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await firstValueFrom(
    forkJoin([getShowTableUsers(), getShowTableSkills(), getShowTableProjects()]),
  );
  const [user, skills, projects] = response;

  return {
    props: {
      user: isUsersResponse(user) ? user : undefined,
      skills: isSkills(skills) ? skills : undefined,
      projects: isProjects(projects) ? projects : undefined,
    },
  };
};
