import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface IProps {
  src: StaticImageData;
  alt: string;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  className?: string;
}

export default function BackgroundImage({
  src,
  alt,
  sizes = '100vh',
  quality = 100,
  priority = false,
  placeholder,
  className = 'object-cover object-top',
}: IProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      placeholder={placeholder}
      sizes={sizes}
      quality={quality}
      className={className}
    />
  );
}
