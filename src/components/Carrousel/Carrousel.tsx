'use client';
import { useEffect, useRef, useState } from 'react';
import { StaticImageData } from 'next/image';

import Slider from 'react-slick';
import '../../../public/css/slick.css';
import '../../../public/css/slick-theme.css';

import { useModal } from '@/hooks';
import { awardsList } from '@/helpers/constants';

import CarrusselModal from '../CarrouselModal';
import CarrouselItem from '../CarrouselItem';
import Modal from '../Modal';
import { NextArrow, PrevArrow } from '../ArrowButtons';

interface Size {
  width: number;
  height: number;
}

// TODO Remove resize listener on prod

export default function Carrousel() {
  const [fullImage, setFullImage] = useState<{
    src: StaticImageData;
    alt: string;
    index: number;
  } | null>(null);
  const [size, setSize] = useState<Size>();

  const sliderRef = useRef<Slider>(null);

  const { isModalOpen, openModal, closeModal } = useModal();

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

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: <PrevArrow onClick={() => sliderRef?.current?.slickPrev()} />,
    nextArrow: <NextArrow onClick={() => sliderRef?.current?.slickNext()} />,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: 'linear',
  };

  const resizeHanlder = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setSize({
      width: width,
      height: height,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHanlder);
    return () => {
      window.removeEventListener('resize', resizeHanlder);
    };
  }, []);

  return (
    <div className="xl:mx-auto  xl:mb-[135px] xl:w-[1326px]">
      {!size || size?.width >= 1280 ? (
        <Slider {...settings}>
          {awardsList.map(({ src, alt }, index) => {
            return (
              <CarrouselItem
                alt={alt}
                src={src}
                handleOpenImage={handleOpenImage}
                key={index}
                index={index}
              />
            );
          })}
        </Slider>
      ) : (
        <div
          className={`flex snap-mandatory items-center overflow-auto scroll-smooth `}
        >
          {awardsList.map(({ src, alt }, index) => {
            return (
              <CarrouselItem
                alt={alt}
                src={src}
                handleOpenImage={handleOpenImage}
                key={index}
                index={index}
              />
            );
          })}
        </div>
      )}
      {fullImage && (!size || size?.width >= 1280) ? (
        <Modal onClose={handleCloseImage} isModalOpen={isModalOpen}>
          <CarrusselModal
            fullImage={fullImage}
            awardsList={awardsList}
            setFullImage={setFullImage}
          />
        </Modal>
      ) : null}
    </div>
  );
}
