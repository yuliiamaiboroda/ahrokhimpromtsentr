import { historyPeriodsArray } from '@/helpers/constants';
import ButtonLink from '../ButtonLink';
import ListOneColumn from '../ColossusDecoratedList';
import SectionTitle from '../SectionTitle';

export default function HistorySection() {
  const classNameWrapper = 'pb-[48px] md:pb-[68px] xl:pb-[86px]';
  return (
    <div className="flex  flex-col items-center justify-center ">
      <SectionTitle title="Історичні періоди розвитку" />
      <div className={classNameWrapper}>
        <ListOneColumn list={historyPeriodsArray} />
      </div>
      <ButtonLink title="Зв’язатися з нами" navigateTo="/contacts" size="l" />
    </div>
  );
}
