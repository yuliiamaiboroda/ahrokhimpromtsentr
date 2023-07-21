import Image, { StaticImageData } from 'next/image';
import bgImage from '../../../public/images/bg-main-screen.jpg';
import MainHeroContent from '../MainHeroContent';

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

export default function MainHero() {
  return (
    <section>
      <div
        className={`relative mx-auto h-[218px] w-full  before:absolute before:bottom-0   before:left-0 before:z-10 before:h-[77px] before:w-full before:bg-[linear-gradient(180deg,_rgba(89,_107,_50,_0.90)_0%,_#29392E_100%)] before:clip-path-trapeze md:h-[696px] md:before:right-0 md:before:top-1/3 md:before:h-2/3 md:before:w-2/3 md:before:clip-path-trapezoid xl:h-[881px]`}
      >
        <Background src={bgImage} />
        <MainHeroContent />
      </div>
    </section>
  );
}
