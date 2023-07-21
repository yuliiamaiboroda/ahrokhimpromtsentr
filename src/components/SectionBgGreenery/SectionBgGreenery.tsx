import bgRightBottom from '../../../public/images/right-bottom-image@3x.png';
import bgLeftBottom from '../../../public/images/left-bottom-image@3x.png';
import BackgroundImage from '../BackgroundImage';

export default function SectionBgGreenary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      {children}
      <div className="absolute -bottom-[10%] left-0 -z-[1] h-[500px] w-[250px] -translate-x-1/2 blur-[0.9559948444366455px] md:h-full md:w-[360px]  xl:h-[110%] xl:w-[450px]">
        <BackgroundImage src={bgLeftBottom} alt="background plants" />
      </div>
      <div className="absolute -bottom-[10%] right-0 -z-[1]  h-[500px] w-[250px] translate-x-1/2 blur-[0.9559948444366455px] md:h-full md:w-[360px]  xl:h-[110%] xl:w-[450px]">
        <BackgroundImage src={bgRightBottom} alt="background plants" />
      </div>
    </section>
  );
}
