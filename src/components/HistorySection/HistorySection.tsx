import { historyPeriodsArray } from '@/helpers/constants';
import ButtonLink from '../ButtonLink';
import ListOneColumn from '../ListOneColumn';

export default function HistorySection() {
  return (
    <div className="flex  flex-col items-center justify-center ">
      <ListOneColumn
        title="Історичні періоди розвитку"
        list={historyPeriodsArray}
      />
      <ButtonLink title="Зв’язатися з нами" navigateTo="/contacts" size="l" />
    </div>
  );
}
