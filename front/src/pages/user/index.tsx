import { GetServerSideProps } from 'next';
import { firstValueFrom } from 'rxjs';
import { SWRConfig } from 'swr';

import Detail from '@/components/pages/detail';
import { User } from '@/models';
import { getShowTableUsers, isUsersResponse } from '@/usecase/user';

type Props = {
  fallback: {
    '/api/user':
      | {
          title: string;
          body: User[];
        }
      | undefined;
  };
};

export default function Skill({ fallback }: Props) {
  return (
    <SWRConfig value={{ fallback }}>
      <Detail model='user' />
    </SWRConfig>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = await firstValueFrom(getShowTableUsers());
  return {
    props: {
      fallback: {
        '/api/user': isUsersResponse(users) ? users : undefined,
      },
    },
  };
};
