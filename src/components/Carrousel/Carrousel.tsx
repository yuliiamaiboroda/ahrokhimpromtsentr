'use client';
import { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Modal from '../Modal';
import { useModal } from '@/hooks';
import { IImage, awardsList } from '@/helpers/constants';
import CarrusselModal from '../CarrouselModal';

export default function Carrousel() {
  const [isActive, setIsActive] = useState(3);
  const [fullImage, setFullImage] = useState<{
    src: StaticImageData;
    alt: string;
    index: number;
  } | null>(null);
  const [currentAwardsArray, setCurrentArray] = useState<IImage[]>(awardsList);
  const [indexAddedLeft, setIndexAddedLeft] = useState(1);
  const [indexAddedRight, setIndexAddedRight] = useState(0);

  const { isModalOpen, openModal, closeModal } = useModal();

  const ref = useRef<HTMLUListElement>(null);

  const handleScrollLeft = () => {
    if (isActive <= 3 && currentAwardsArray.length) {
      setCurrentArray([
        currentAwardsArray[currentAwardsArray.length - indexAddedLeft],
        ...currentAwardsArray,
      ]);
      setIndexAddedLeft(indexAddedLeft + 1);
      return null;
    }
    ref.current ? (ref.current.scrollLeft -= 274) : null;
    setIsActive(isActive - 1);
  };

  const handleScrollRight = (lenght: number) => {
    if (lenght - 3 === isActive && currentAwardsArray.length) {
      setCurrentArray([
        ...currentAwardsArray,
        currentAwardsArray[indexAddedRight],
      ]);
      setIndexAddedRight(indexAddedRight + 1);
    }
    ref.current ? (ref.current.scrollLeft += 274) : null;
    setIsActive(isActive + 1);
  };

  const handleOpenImage = (
    src: StaticImageData,
    alt: string,
    index: number
  ) => {
    src && window.innerWidth >= 1280
      ? (setFullImage({ src, alt, index }), openModal())
      : null;
  };

  const handleCloseImage = () => {
    setFullImage(null);
    closeModal();
  };

  return (
    <div className="xl:mx-auto  xl:w-[1326px]">
      <ul
        ref={ref}
        className={`flex snap-mandatory items-center gap-[30px] overflow-auto scroll-smooth xl:scrollbar md:gap-[50px] xl:mx-auto xl:gap-[70px]`}
      >
        {currentAwardsArray.map(({ src, alt }, index) => {
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
        })}
      </ul>
      <ul className="max-xl:hidden xl:mx-auto xl:flex xl:items-center xl:justify-center xl:gap-[62px] ">
        <li>
          <button
            type="button"
            onClick={() => {
              handleScrollLeft();
            }}
            className="xl:cursor-pointer xl:transition-all xl:hover:scale-[1.2]"
            aria-label="arrow left"
          >
            <svg className="xl:h-auto xl:w-[84px] xl:fill-accent xl:stroke-accent">
              <use href="/images/icons.svg#left-arrow"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              handleScrollRight(currentAwardsArray.length);
            }}
            className="xl:cursor-pointer xl:transition-all xl:hover:scale-[1.2]"
            aria-label="arrow right"
          >
            <svg className="xl:h-auto xl:w-[84px] xl:fill-accent xl:stroke-accent">
              <use href="/images/icons.svg#right-arrow"></use>
            </svg>
          </button>
        </li>
      </ul>
      {fullImage && window.innerWidth >= 1280 ? (
        <Modal onClose={handleCloseImage} isModalOpen={isModalOpen}>
          <CarrusselModal
            fullImage={fullImage}
            awardsList={currentAwardsArray}
            setFullImage={setFullImage}
          />
        </Modal>
      ) : null}
    </div>
  );
}
