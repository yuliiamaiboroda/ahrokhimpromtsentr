import Image, { StaticImageData } from 'next/image';
import bgImage from '../../../public/images/bg-main@3x.jpg';

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
      <div className={`relative mx-auto h-[882px] w-[1280px]`}>
        <Background src={bgImage} />
        <h1 className="absolute left-24 top-80 text-4xl">АГРОХІМПРОМЦЕНТР</h1>
      </div>
    </section>
  );
}
