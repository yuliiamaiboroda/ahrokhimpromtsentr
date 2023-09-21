import { historyPeriodsArray } from '@/helpers/constants';
import ButtonLink from '../ButtonLink';
import ListOneColumn from '../ColossusDecoratedList';
import SectionTitle from '../SectionTitle';
import data from '../../../public/data/data.json';

export default function HistorySection() {
  const classNameWrapper = 'pb-[48px] md:pb-[68px] xl:pb-[86px]';
  return (
    <div className="flex  flex-col items-center justify-center ">
      <SectionTitle title={data['about-page']['history-subtitle']} />
      <div className={classNameWrapper}>
        <ListOneColumn list={historyPeriodsArray} />
      </div>
      <ButtonLink title="Зв’язатися з нами" navigateTo="/contacts" size="l" />
    </div>
  );
}
