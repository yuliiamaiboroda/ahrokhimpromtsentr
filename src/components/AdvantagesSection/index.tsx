import { advantagesItemsArray } from '@/helpers/constants';
import ButtonLink from '../ButtonLink';
import ColossusDecoratedList from '../ColossusDecoratedList';

export default function AdvantagesSection() {
  return (
    <section>
      <div className="flex flex-col	items-center gap-12 py-20 pt-[15rem] md:gap-16 md:py-28	xl:gap-[72px] xl:pb-20 xl:pt-12">
        <ColossusDecoratedList isTwoColumns list={advantagesItemsArray} />
        <ButtonLink navigateTo="/about" title="Більше про нас" size="l" />
      </div>
    </section>
  );
}
