import AdvantagesList from '../AdvantagesList';
import ButtonLink from '../ButtonLink';

export default function AdvantagesSection() {
  return (
    <section>
      <div className="flex flex-col	gap-12 md:gap-16 xl:gap-[72px] items-center py-20	md:py-28 xl:pt-12 xl:pb-20">
        <AdvantagesList />
        <ButtonLink navigateTo="/about" title="Більше про нас" size="l" />
      </div>
    </section>
  );
}
