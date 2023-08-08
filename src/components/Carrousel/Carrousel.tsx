'use client';
import { useRef, useState } from 'react';
import { StaticImageData } from 'next/image';
import Modal from '../Modal';
import { useModal } from '@/hooks';
import { IImage, awardsList } from '@/helpers/constants';
import CarrusselModal from '../CarrouselModal';
import CarrouselItem from '../CarrouselItem';

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

  const handleScrollRight = () => {
    if (
      currentAwardsArray.length - 3 === isActive &&
      currentAwardsArray.length
    ) {
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
        className={`scroll-smooth flex snap-mandatory items-center gap-[30px] overflow-auto xl:scrollbar md:gap-[50px] xl:mx-auto xl:gap-[70px]`}
      >
        {currentAwardsArray.map(({ src, alt }, index) => {
          return (
            <CarrouselItem
              alt={alt}
              src={src}
              index={index}
              isActive={isActive}
              handleOpenImage={handleOpenImage}
              key={index}
            />
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
              handleScrollRight();
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
