import ShereLayout from '@/components/layout/shareLayout';
import DetailContainer from './detailContaier';
type Props = {
  model: string;
};

export default function Detail({ model }: Props) {
  return (
    <ShereLayout>
      <DetailContainer model={model} />
    </ShereLayout>
  );
}
