'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import emptyImage from '../../../public/images/brokenTractor.svg';

interface IProps {
  id: string;
  title: string;
  imageURL: string;
  navigateTo: string;
}

export default function OfferingsItem({
  id,
  title,
  imageURL,
  navigateTo,
}: IProps) {
  const [imgSrc, setImgSrc] = useState(imageURL);

  return (
    <li className="h-[186px] w-full max-w-[266px] md:h-[226px] md:max-w-[323px] xl:max-w-[350px]">
      <Link
        href={`${navigateTo}/${id}`}
        className="golden-edge relative block h-full w-full bg-light-gradient
                   hover:shadow-hover "
      >
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="(min-width: 1280px) 350px,  (min-width: 768px) 323px,  266px"
          className="object-cover object-center"
          onError={() => {
            setImgSrc(emptyImage.src);
          }}
        />
        <p
          className="absolute left-0 top-1/2 w-full -translate-y-1/2 bg-[rgba(47,_64,_48,_0.67)] p-3 text-center 
                                font-body text-base font-bold first-letter:capitalize md:p-2 md:text-xl xl:text-2xl"
        >
          {title}
        </p>
      </Link>
    </li>
  );
}
