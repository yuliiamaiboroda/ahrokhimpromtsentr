import Image, { StaticImageData } from 'next/image';
import bgImage from '../../../public/images/bg-main-screen.jpg';
import MainHeroContent from '../MainHeroContent';
import colossusImage from '../../../public/images/image 18@3x.png';
import colossusUpperImage from '../../../public/images/image50 @3x.png';

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

// change positions

export default function MainHero() {
  return (
    <section>
      <div
        className={`relative mx-auto h-[218px] w-full before:absolute  before:bottom-0 before:left-0   before:z-10 before:h-[77px] before:w-full before:bg-[linear-gradient(180deg,_rgba(89,_107,_50,_0.90)_0%,_#29392E_100%)] before:clip-path-trapeze md:h-[696px] md:overflow-hidden md:before:right-0 md:before:top-[35%] md:before:h-2/3 md:before:w-2/3 md:before:clip-path-trapezoid xl:h-[881px]`}
      >
        <div className="absolute z-10 max-md:hidden md:bottom-[calc(25%-115px)] md:left-[calc(50%-224px)] md:h-[588px] md:w-[333px] md:translate-x-1/2 md:translate-y-1/2 xl:bottom-[calc(25%-165px)] xl:left-[calc(50%-354px)] xl:h-[800px] xl:w-[490px] min-[1700px]:left-[calc(50%-336px)] min-[1980px]:hidden ">
          {/* <Background src={colossusUpperImage} /> */}
          <Image
            src={colossusUpperImage}
            alt="hero"
            placeholder="blur"
            fill
            quality={100}
            sizes="(min-width: 1280px) 490px, (min-width: 768px) 333px, 100px"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="absolute z-10 max-md:hidden md:bottom-[calc(25%-350px)] md:left-[calc(50%-303px)] md:h-[800px] md:w-[476px] md:translate-x-1/2 md:translate-y-1/2  xl:bottom-[calc(25%-476px)] xl:left-[calc(50%-483px)] xl:h-[1233px] xl:w-[742px] min-[1980px]:hidden ">
          {/* <Background src={colossusUpperImage} /> */}
          <Image
            src={colossusUpperImage}
            alt="hero"
            placeholder="blur"
            fill
            quality={100}
            sizes="(min-width: 1280px) 742px, (min-width: 768px) 467px, 100px"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="absolute z-10  max-md:hidden md:bottom-[8%] md:left-[40%] md:h-[126px] md:w-[189px] md:translate-x-1/2 md:translate-y-1/2 min-[1014px]:left-[45%] xl:bottom-[7%] xl:left-1/2 xl:h-[154px] xl:w-[230px] min-[1980px]:hidden">
          {/* <Background src={colossusImage} /> */}
          <Image
            src={colossusImage}
            alt="hero"
            placeholder="blur"
            fill
            quality={100}
            sizes="(min-width: 1280px) 230px, (min-width: 768px) 189px, 100px"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <Background src={bgImage} />
        <MainHeroContent />
      </div>
    </section>
  );
}
