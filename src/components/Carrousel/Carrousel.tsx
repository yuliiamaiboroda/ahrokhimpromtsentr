'use client';
import Image from 'next/image';
import awardImage from '../../../public/images/1.jpg';
import { useState } from 'react';

const awardsArr = [
  awardImage,
  awardImage,
  awardImage,
  awardImage,
  awardImage,
  awardImage,
  awardImage,
  awardImage,
];

export default function Carrousel() {
  const [isActive, setIsActive] = useState(3);
  return (
    <>
      <ul className="flex  snap-mandatory gap-[30px] overflow-auto md:gap-[50px] xl:gap-[70px] xl:overflow-hidden">
        {awardsArr.map((el, index) => {
          return (
            <li
              className="relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px] xl:h-[284px] xl:w-[204px]"
              key={index}
            >
              <Image src={el} alt="awards" objectFit="contain" layout="fill" />
            </li>
          );
        })}
        {/* <li className="relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px] xl:h-[284px] xl:w-[204px]">
          <Image
            src={awardImage}
            alt="awards"
            objectFit="contain"
            layout="fill"
          />
        </li>
        <li className="relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px] xl:h-[284px] xl:w-[204px]">
          <Image
            src={awardImage}
            alt="awards"
            objectFit="contain"
            layout="fill"
          />
        </li>
        <li className="relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px] xl:h-[284px] xl:w-[204px]">
          <Image
            src={awardImage}
            alt="awards"
            objectFit="contain"
            layout="fill"
          />
        </li>
        <li className="relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px] xl:h-[284px] xl:w-[204px]">
          <Image
            src={awardImage}
            alt="awards"
            objectFit="contain"
            layout="fill"
          />
        </li>
        <li className="relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px] xl:h-[284px] xl:w-[204px]">
          <Image
            src={awardImage}
            alt="awards"
            objectFit="contain"
            layout="fill"
          />
        </li>{' '}
        <li className="relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px] xl:h-[284px] xl:w-[204px]">
          <Image
            src={awardImage}
            alt="awards"
            objectFit="contain"
            layout="fill"
          />
        </li>{' '}
        <li className="relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px] xl:h-[284px] xl:w-[204px]">
          <Image
            src={awardImage}
            alt="awards"
            objectFit="contain"
            layout="fill"
          />
        </li>
        <li className="relative h-[242px] w-[174px] flex-shrink-0 md:h-[292px] md:w-[210px] xl:h-[284px] xl:w-[204px]">
          <Image
            src={awardImage}
            alt="awards"
            objectFit="contain"
            layout="fill"
          />
        </li> */}
      </ul>
      <ul className="max-xl:hidden">
        <li
          onClick={() => {
            setIsActive(isActive - 1);
          }}
        >
          left
        </li>
        <li
          onClick={() => {
            setIsActive(isActive + 1);
          }}
        >
          right
        </li>
      </ul>
    </>
  );
}
