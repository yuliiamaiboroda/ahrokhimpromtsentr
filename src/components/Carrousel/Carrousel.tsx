'use client';
import { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import awardFirstImage from '../../../public/images/1.jpg';
import awardSecImage from '../../../public/images/2.jpg';
import awardThirdImage from '../../../public/images/3.jpg';
import awardFourImage from '../../../public/images/4.jpg';
import awardFiveImage from '../../../public/images/5.jpg';
import awardSixImage from '../../../public/images/6.jpg';
import awardSevenImage from '../../../public/images/7.jpg';
import awardEightImage from '../../../public/images/8.jpg';
import awardNineImage from '../../../public/images/9.jpg';
import awardTenImage from '../../../public/images/10.jpg';
import awardElevenImage from '../../../public/images/11.jpg';
import awardTwelfImage from '../../../public/images/12.jpg';
import awardThirteenImage from '../../../public/images/13.jpg';
import awardFourteenImage from '../../../public/images/14.jpg';
import awardFiveteenImage from '../../../public/images/15.jpg';
import awardSixteenImage from '../../../public/images/16.jpg';
import awardSeventeenImage from '../../../public/images/17.jpg';
import awardEighteenImage from '../../../public/images/18.jpg';
import Modal from '../Modal';

interface IImage {
  src: StaticImageData;
  alt: string;
}

const awardsList: IImage[] = [
  { src: awardFirstImage, alt: 'Honorary diploma of Andrii Polyakov' },
  { src: awardSecImage, alt: 'Honorary diploma of Andrii Polyakov' },
  { src: awardThirdImage, alt: 'Honorary certificate of Zoya Uroychenko' },
  { src: awardFourImage, alt: 'Honorary certificate of Zoya Uroychenko' },
  { src: awardFiveImage, alt: 'Honorary certificate of Grigory Polyakov' },
  {
    src: awardTenImage,
    alt: 'Honorary diploma of Andrii Polyakov',
  },
  { src: awardElevenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  { src: awardTwelfImage, alt: 'Letter of Grigory Polyakov' },
  { src: awardThirteenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  { src: awardFourteenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  {
    src: awardFiveteenImage,
    alt: 'certificate that the private enterprise "Agrokhimpromtsentr" is a member of the Public Union "Agrarian Union of Ukraine"',
  },
  { src: awardSixteenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  { src: awardSeventeenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  { src: awardEighteenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  {
    src: awardSixImage,
    alt: 'Honorable mention for services to the Sumy region',
  },
  {
    src: awardSevenImage,
    alt: "Polyakov Grigory's honorary award for high achievements",
  },
  {
    src: awardEightImage,
    alt: 'Honorary title "honored worker of agriculture of Ukraine"',
  },
  {
    src: awardNineImage,
    alt: 'Award of Honor of the Agrarian Union of Ukraine',
  },
];

export default function Carrousel() {
  const [isActive, setIsActive] = useState(3);
  const [fullImage, setFullImage] = useState<IImage | null>(null);
  const ref = useRef<HTMLUListElement>(null);

  const handleScrollLeft = () => {
    if (isActive <= 3) {
      return null;
    }
    ref.current ? (ref.current.scrollLeft -= 274) : null;
    setIsActive(isActive - 1);
  };

  const handleScrollRight = (lenght: number) => {
    if (lenght - 2 === isActive) {
      return null;
    }
    ref.current ? (ref.current.scrollLeft += 274) : null;
    setIsActive(isActive + 1);
  };

  const handleOpenImage = (src: StaticImageData, alt: string) => {
    src ? setFullImage({ src, alt }) : null;
  };

  const handleCloseImage = () => {
    setFullImage(null);
  };

  return (
    <div className="xl:mx-auto  xl:w-[1326px]">
      <ul
        ref={ref}
        className={`flex snap-mandatory items-center gap-[30px] overflow-auto xl:scrollbar md:gap-[50px] xl:mx-auto xl:gap-[70px]`}
      >
        {awardsList.map(({ src, alt }, index) => {
          return (
            <li
              className={`relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px]
           xl:${
             isActive === index + 1
               ? 'xl:flex-srink-[2] xl:h-[328px] xl:w-[236px]'
               : ' xl:h-[284px] xl:w-[204px]'
           }
           xl:transition-[width]
              `}
              key={index}
              onClick={() => handleOpenImage(src, alt)}
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
        })}
      </ul>
      <ul className="max-xl:hidden xl:mx-auto xl:flex xl:items-center xl:justify-center xl:gap-[62px] ">
        <li
          onClick={() => {
            handleScrollLeft();
          }}
          className="xl:cursor-pointer xl:transition-all xl:hover:scale-[1.2]"
        >
          <svg className="xl:h-auto xl:w-[84px] xl:fill-accent xl:stroke-accent">
            <use href="/images/icons.svg#left-arrow"></use>
          </svg>
        </li>
        <li
          onClick={() => {
            handleScrollRight(awardsList.length);
          }}
          className="xl:cursor-pointer xl:transition-all xl:hover:scale-[1.2]"
        >
          <svg className="xl:h-auto xl:w-[84px] xl:fill-accent xl:stroke-accent">
            <use href="/images/icons.svg#right-arrow"></use>
          </svg>
        </li>
      </ul>
      {fullImage ? (
        <Modal onClose={handleCloseImage}>
          <Image src={fullImage.src} alt={fullImage.alt} />
        </Modal>
      ) : null}
    </div>
  );
}
