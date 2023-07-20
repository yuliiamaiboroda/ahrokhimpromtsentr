import { StaticImageData } from 'next/image';
import Image from 'next/image';

export default function BackgroundImage({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      placeholder="blur"
      sizes="100vh"
      quality={100}
      style={{ objectFit: 'cover', objectPosition: 'top' }}
    />
  );
}
