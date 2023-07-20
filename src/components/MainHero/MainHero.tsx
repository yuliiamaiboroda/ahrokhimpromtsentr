import Image, { StaticImageData } from 'next/image';
import bgImage from '../../../public/images/bg-main-screen.jpg';
import MainHeroContent from '../MainHeroContent/MainHeroContent';

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
        className={`relative mx-auto h-[882px] w-[1280px] before:absolute before:left-0 before:top-1/3 before:z-10 before:h-2/3 before:w-1/2 before:bg-[linear-gradient(180deg,_rgba(89,_107,_50,_0.90)_0%,_#29392E_100%)] `}
      >
        <Background src={bgImage} />
        <MainHeroContent/>
      
      </div>
    </section>
  );
}
