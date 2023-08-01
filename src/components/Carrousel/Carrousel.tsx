'use client';
import { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Modal from '../Modal';
import { useModal } from '@/hooks';
import { awardsList } from '@/helpers/constants';

export default function Carrousel() {
  const [isActive, setIsActive] = useState(3);
  const [fullImage, setFullImage] = useState<{
    src: StaticImageData;
    alt: string;
    index: number;
  } | null>(null);

  const { isModalOpen, openModal, closeModal } = useModal();

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
      {fullImage && window.innerWidth >= 1280 ? (
        <Modal onClose={handleCloseImage} isModalOpen={isModalOpen}>
          <div className="flex items-center justify-center gap-5">
            <div className={`${fullImage.index === 0 ? 'xl:blur-[2px]' : ''}`}>
              <button
                onClick={() => {
                  fullImage.index !== 0
                    ? setFullImage({
                        ...awardsList[fullImage.index - 1],
                        index: fullImage.index - 1,
                      })
                    : null;
                }}
                className={` xl:transition-all xl:hover:scale-[1.2] xl:${
                  fullImage.index === 0 ? 'xl:blur-sm xl:hover:scale-[1]' : ''
                }`}
                type="button"
                disabled={fullImage.index === 0 ? true : false}
              >
                <svg className="xl:h-auto xl:w-[84px] xl:fill-accent xl:stroke-accent">
                  <use href="/images/icons.svg#left-arrow"></use>
                </svg>
              </button>
            </div>
            <Image src={fullImage.src} alt={fullImage.alt} />
            <div
              className={` ${
                awardsList.length === fullImage.index + 1 ? 'xl:blur-[2px]	' : ''
              }`}
            >
              <button
                onClick={() => {
                  awardsList.length !== fullImage.index + 1
                    ? setFullImage({
                        ...awardsList[fullImage.index + 1],
                        index: fullImage.index + 1,
                      })
                    : null;
                }}
                type="button"
                className={`xl:transition-all xl:hover:scale-[1.2] xl:${
                  awardsList.length === fullImage.index + 1
                    ? 'xl:blur-sm	 xl:hover:scale-[1]'
                    : ''
                }`}
                disabled={
                  awardsList.length === fullImage.index + 1 ? true : false
                }
              >
                <svg className="xl:h-auto xl:w-[84px] xl:fill-accent xl:stroke-accent">
                  <use href="/images/icons.svg#right-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
