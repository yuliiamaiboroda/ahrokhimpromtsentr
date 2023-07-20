import AdvantagesList from '../AdvantagesList';
import ButtonLink from '../ButtonLink';

export default function AdvantagesSection() {
  return (
    <section>
      <div className="flex flex-col	items-center gap-12 py-20 md:gap-16 md:py-28	xl:gap-[72px] xl:pb-20 xl:pt-12">
        <AdvantagesList />
        <ButtonLink navigateTo="/about" title="Більше про нас" size="l" />
      </div>
    </section>
  );
}
