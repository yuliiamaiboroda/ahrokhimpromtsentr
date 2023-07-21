import Image, { StaticImageData } from 'next/image';
import bgImage from '../../../public/images/bg-main-screen.jpg';
import MainHeroContent from '../MainHeroContent';
import colossusImage from '../../../public/images/image 18@3x.png';

function Background({ src }: { src: StaticImageData }) {
  return (
    <Image
      src={src}
      alt="hero"
      placeholder="blur"
      fill
      quality={100}
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  );
}

// TODO  paint longer colossus

export default function MainHero() {
  return (
    <section>
      <div
        className={`relative mx-auto h-[218px] w-full before:absolute  before:bottom-0 before:left-0   before:z-10 before:h-[77px] before:w-full before:bg-[linear-gradient(180deg,_rgba(89,_107,_50,_0.90)_0%,_#29392E_100%)] before:clip-path-trapeze md:h-[696px] md:overflow-hidden md:before:right-0 md:before:top-1/3 md:before:h-2/3 md:before:w-2/3 md:before:clip-path-trapezoid xl:h-[881px]`}
      >
        {/* <div className="absolute z-10 max-md:hidden md:bottom-[calc(25%+29px)] md:left-[calc(50%-173px)] md:h-[140px] md:w-[200px] md:translate-x-1/2 md:translate-y-1/2 md:-rotate-[10deg] min-[1030px]:bottom-[calc(25%+27px)] min-[1030px]:left-[calc(50%-161px)] min-[1030px]:-rotate-[6deg] xl:bottom-[calc(25%+33px)] xl:left-[calc(50%-161px)] xl:-rotate-[13deg]">
          <Background src={colossusImage} />
        </div> */}
        <div className="absolute z-10  max-md:hidden md:bottom-[8%] md:left-[40%] md:h-[126px] md:w-[189px] md:translate-x-1/2 md:translate-y-1/2 min-[1014px]:left-[45%] xl:bottom-[7%] xl:left-1/2 xl:h-[154px] xl:w-[230px] min-[1980px]:hidden">
          <Background src={colossusImage} />
        </div>
        <Background src={bgImage} />
        <MainHeroContent />
      </div>
    </section>
  );
}
