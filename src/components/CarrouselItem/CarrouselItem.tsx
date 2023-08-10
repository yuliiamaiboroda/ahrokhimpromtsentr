import Image, { StaticImageData } from 'next/image';

interface IProps {
  alt: string;
  index: number;
  src: StaticImageData;
  handleOpenImage: (src: StaticImageData, alt: string, index: number) => void;
}

export default function CarrouselItem({
  alt,
  src,
  handleOpenImage,
  index,
}: IProps) {
  return (
    <div
      className={`carousel-item relative h-[242px] w-[174px]  max-xl:flex-shrink-0 md:h-[292px]
           md:w-[210px]
              `}
      onClick={() => {
        handleOpenImage(src, alt, index);
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 210px, 174px"
        className="object-contain"
      />
    </div>
  );
}
