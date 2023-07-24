'use client';
import Image from 'next/image';
import awardImage from '../../../public/images/1.jpg';
import awardSecImage from '../../../public/images/2.jpg';
import awardThirdImage from '../../../public/images/3.jpg';
import { useState } from 'react';

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
  const [styleActive, setStyleActive] = useState(0);

  const handleScrollLeft = () => {
    if (isActive <= 3) {
      return null;
    }
    setIsActive(isActive - 1);
    setStyleActive(styleActive + (1 / 5) * 100);
  };

  const handleScrollRight = (lenght: number) => {
    if (lenght - 2 === isActive) {
      return null;
    }
    setIsActive(isActive + 1);
    setStyleActive(styleActive - (1 / 5) * 100);
  };

  return (
    <>
      <ul
        className={`flex  snap-mandatory items-center gap-[30px] overflow-auto md:gap-[50px] xl:justify-between  xl:overflow-hidden`}
        style={{ transform: `translateX(${styleActive}%)` }}
      >
        {awardsArr.map((el, index) => {
          return (
            <li
              className={`relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px] xl:h-[284px] xl:w-[calc(100%/6)] xl:${
                isActive === index + 1
                  ? 'xl:flex-srink-[2] xl:h-[328px] xl:w-[236px]'
                  : ''
              }`}
              key={index}
            >
              <Image src={el} alt="awards" objectFit="contain" layout="fill" />
            </li>
          );
        })}
      </ul>
      <ul className="max-xl:hidden">
        <li
          onClick={() => {
            handleScrollLeft();
          }}
        >
          left
        </li>
        <li
          onClick={() => {
            handleScrollRight(awardsArr.length);
          }}
        >
          right
        </li>
      </ul>
    </>
  );
}
