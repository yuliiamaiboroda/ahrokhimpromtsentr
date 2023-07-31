'use client';

import Image from 'next/image';
import awardImage from '../../../public/images/1.jpg';
import awardSecImage from '../../../public/images/2.jpg';
import awardThirdImage from '../../../public/images/3.jpg';
import { useRef, useState } from 'react';

const awardsArr = [
  awardImage,
  awardSecImage,
  awardThirdImage,
  awardImage,
  awardSecImage,
  awardThirdImage,
  awardSecImage,
  awardImage,
  awardSecImage,
  awardThirdImage,
  awardImage,
];

export default function Carrousel() {
  const [isActive, setIsActive] = useState(3);
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

  return (
    <div className="xl:mx-auto  xl:w-[1326px]">
      <ul
        ref={ref}
        className={`flex snap-mandatory items-center gap-[30px] overflow-auto scroll-smooth  xl:scrollbar  md:gap-[50px] xl:mx-auto xl:gap-[70px]`}
      >
        {awardsArr.map((el, index) => {
          return (
            <li
              className={`relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px] xl:h-[284px] xl:w-[204px]
           xl:${
             isActive === index + 1
               ? 'xl:flex-srink-[2] xl:h-[328px] xl:w-[236px]'
               : ''
           }
              `}
              key={index}
            >
              <Image
                src={el}
                alt="awards"
                fill
                sizes="(min-width: 768px) 210px, 174px"
                className="object-contain"
              />
            </li>
          );
        })}
      </ul>
      <ul className="max-xl:hidden xl:mx-auto xl:flex xl:items-center xl:justify-center xl:gap-[62px]">
        <li
          onClick={() => {
            handleScrollLeft();
          }}
          className="xl:cursor-pointer"
        >
          <svg className="xl:h-auto xl:w-[84px] xl:fill-accent xl:stroke-accent">
            <use href="/images/icons.svg#left-arrow"></use>
          </svg>
        </li>
        <li
          onClick={() => {
            handleScrollRight(awardsArr.length);
          }}
          className="xl:cursor-pointer"
        >
          <svg className="xl:h-auto xl:w-[84px] xl:fill-accent xl:stroke-accent">
            <use href="/images/icons.svg#right-arrow"></use>
          </svg>
        </li>
      </ul>
    </div>
  );
}
