import { GetServerSideProps } from 'next';
import { firstValueFrom } from 'rxjs';
import { SWRConfig } from 'swr';

import Detail from '@/components/pages/detail';
import { Skills } from '@/models';
import { getShowTableSkills, isSkills } from '@/usecase/skill';

type Props = {
  fallback: {
    '/api/skill':
      | {
          title: string;
          body: Skills;
        }
      | undefined;
  };
};

export default function Skill({ fallback }: Props) {
  return (
    <SWRConfig value={{ fallback }}>
      <Detail model='skill' />
    </SWRConfig>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const skills = await firstValueFrom(getShowTableSkills());
  return {
    props: {
      fallback: {
        '/api/skill': isSkills(skills) ? skills : undefined,
      },
    },
  };
};
