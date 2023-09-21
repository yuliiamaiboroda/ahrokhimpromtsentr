import { historyPeriodsArray } from '@/helpers/constants';
import ButtonLink from '../ButtonLink';
import ListOneColumn from '../ColossusDecoratedList';
import SectionTitle from '../SectionTitle';

export default function HistorySection() {
  return (
    <div className="flex  flex-col items-center justify-center ">
      <SectionTitle title="Історичні періоди розвитку" />
      <ListOneColumn list={historyPeriodsArray} />
      <ButtonLink title="Зв’язатися з нами" navigateTo="/contacts" size="l" />
    </div>
  );
}
