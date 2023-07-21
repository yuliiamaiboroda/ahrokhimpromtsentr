import AdvantagesList from '../AdvantagesList';
import ButtonLink from '../ButtonLink';
import bgRightBottom from '../../../public/images/right-bottom-image@3x.png';
import bgLeftBottom from '../../../public/images/left-bottom-image@3x.png';
import BackgroundImage from '../BackgroundImage';
BackgroundImage;

export default function AdvantagesSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col	items-center gap-12 py-20 pt-[15rem] md:gap-16 md:py-28	xl:gap-[72px] xl:pb-20 xl:pt-12">
        <AdvantagesList />
        <ButtonLink navigateTo="/about" title="Більше про нас" size="l" />
      </div>
      <div className="absolute -bottom-[10%] left-0 -z-[1] h-[500px] w-[250px] -translate-x-1/2 blur-[0.9559948444366455px] md:h-full md:w-[360px] xl:-bottom-[10%] xl:h-[110%] xl:w-[450px]">
        <BackgroundImage src={bgLeftBottom} alt="background plants" />
      </div>
      <div className="absolute -bottom-[10%] right-0 -z-[1]  h-[500px] w-[250px] translate-x-1/2 blur-[0.9559948444366455px] md:h-full md:w-[360px]  xl:h-[110%] xl:w-[450px]">
        <BackgroundImage src={bgRightBottom} alt="background plants" />
      </div>
    </section>
  );
}
