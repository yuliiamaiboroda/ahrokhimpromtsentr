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
    <section className="relative h-[218px] w-full overflow-hidden bg-accent md:h-[537px] xl:h-[628px]">
      <BackgroundImage src={src} alt={alt} placeholder="blur" priority />
      <HeroTitle />
    </section>
  );
}
