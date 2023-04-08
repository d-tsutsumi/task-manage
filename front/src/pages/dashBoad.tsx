import { GetServerSideProps } from 'next/types';
import Dashboad from '../components/pages/dashboad/index';
import { firstValueFrom } from 'rxjs';
import { getShowTableUsers } from '@/usecase/user';
import { User } from '../models/user';
export default function DashBoad({ users }: { users: User[] }) {
  console.log(users);
  return <Dashboad />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const data = await firstValueFrom(getShowTableUsers());
    const users = data.users;
    return {
      props: { users: users },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};
