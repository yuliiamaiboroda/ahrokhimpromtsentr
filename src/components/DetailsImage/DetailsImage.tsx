import Image, { StaticImageData } from 'next/image';

interface IProps {
  src: string | StaticImageData;
  alt: string;
}

export default function DetailsImage({ src, alt }: IProps) {
  return (
    <div
      className="golden-edge relative mx-auto mb-5 h-[200px] w-full max-w-[300px] bg-light-gradient
                  md:mb-10 md:h-[300px] md:max-w-[400px]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-widht: 480px) 400px, 300px"
        className="object-cover object-center"
      />
    </div>
  );
}
