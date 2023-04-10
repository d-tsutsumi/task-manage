import ShereLayout from '@/components/layout/shareLayout';
import DashBoadContainer from './dashBoadContainer';
import { DashboadTableContent } from './types';
import { DashBoadTableProjects } from '@/models/project';
import { Skills } from '@/models/skill';
import { User } from '@/models/user';

type Props = {
  user?: DashboadTableContent<User[]>;
  skills?: DashboadTableContent<Skills>;
  projects?: DashboadTableContent<DashBoadTableProjects[]>;
};

export default function Dashboad(props: Props) {
  return (
    <ShereLayout>
      <DashBoadContainer {...props} />
    </ShereLayout>
  );
}
