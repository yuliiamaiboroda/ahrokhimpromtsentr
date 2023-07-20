import { StaticImageData } from 'next/image';
import BackgroundImage from '../BackgroundImage';
import HeroTitle from '../HeroTitle';

export default function HeroSection({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  return (
    <section className="relative h-[209px] w-screen overflow-hidden md:h-[537px] xl:h-[628px]">
      <BackgroundImage src={src} alt={alt} />
      <HeroTitle />
    </section>
  );
}
