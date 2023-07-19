import Image, { StaticImageData } from 'next/image';
import bgImage from '../../public/images/bg-main@3x.jpg';

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
      <div className={`relative w-[1280px] h-[882px] mx-auto`}>
        <Background src={bgImage} />
        <h1 className="absolute top-80 left-24 text-4xl">АГРОХІМПРОМЦЕНТР</h1>
      </div>
    </section>
  );
}
