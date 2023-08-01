import Image, { StaticImageData } from 'next/image';

interface IProps {
  alt: string;
  index: number;
  src: StaticImageData;
  handleOpenImage: (src: StaticImageData, alt: string, index: number) => void;
  isActive: number;
}

export default function CarrouselItem({
  alt,
  src,
  handleOpenImage,
  index,
  isActive,
}: IProps) {
  return (
    <li
      className={`relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px]
           xl:${
             isActive === index + 1
               ? 'xl:flex-srink-[2] xl:h-[328px] xl:w-[236px]'
               : ' xl:h-[284px] xl:w-[204px]'
           }
              `}
      key={index}
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
    </li>
  );
}
