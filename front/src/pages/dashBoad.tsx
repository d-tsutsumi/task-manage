import { GetServerSideProps } from 'next/types';
import { firstValueFrom, forkJoin } from 'rxjs';

import Dashboad from '../components/pages/dashboad/index';

import { User, DashBoadTableProjects, Skills } from '@/models';
import { getShowTableUsers, isUsersResponse } from '@/usecase/user';
import { getShowTableSkills, isSkills } from '@/usecase/skill';
import { getShowTableProjects, isProjects } from '@/usecase/project';
import { DashboadTableContent } from '@/components/pages/dashboad/types';

type Props = {
  user?: DashboadTableContent<User[]>;
  skills?: DashboadTableContent<Skills>;
  projects?: DashboadTableContent<DashBoadTableProjects[]>;
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
