'use client';
import Image, { StaticImageData } from 'next/image';
import emptyImage from '../../../public/images/brokenTractor.svg';
import { useState } from 'react';

interface IProps {
  src: string | StaticImageData;
  alt: string;
}

export default function DetailsImage({ src, alt }: IProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div
      className="golden-edge relative mx-auto mb-5 h-[200px] w-full max-w-[300px] bg-light-gradient
                  md:mb-10 md:h-[300px] md:max-w-[400px]"
    >
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="(min-widht: 480px) 400px, 300px"
        className="object-cover object-center"
        onError={() => {
          setImgSrc(emptyImage.src);
        }}
      />
    </div>
  );
}
