import Image, { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  fullImage: {
    src: StaticImageData;
    alt: string;
    index: number;
  };
  awardsList: { src: StaticImageData; alt: string }[];
  setFullImage: Dispatch<
    SetStateAction<{
      src: StaticImageData;
      alt: string;
      index: number;
    } | null>
  >;
}

export default function CarrusselModal({
  fullImage,
  awardsList,
  setFullImage,
}: IProps) {
  const handleScrollLeft = () => {
    fullImage.index !== 0
      ? setFullImage({
          ...awardsList[fullImage.index - 1],
          index: fullImage.index - 1,
        })
      : null;
  };

  const handleScrollRight = () => {
    awardsList.length !== fullImage.index + 1
      ? setFullImage({
          ...awardsList[fullImage.index + 1],
          index: fullImage.index + 1,
        })
      : null;
  };

  return (
    <div className="flex items-center justify-center gap-5">
      <div className={`${fullImage.index === 0 ? 'xl:blur-[2px]' : ''}`}>
        <button
          onClick={handleScrollLeft}
          className={` xl:transition-all xl:hover:scale-[1.2] xl:${
            fullImage.index === 0 ? 'xl:blur-sm xl:hover:scale-[1]' : ''
          }`}
          type="button"
          disabled={fullImage.index === 0 ? true : false}
          aria-label="arrow left"
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
          onClick={handleScrollRight}
          type="button"
          className={`xl:transition-all xl:hover:scale-[1.2] xl:${
            awardsList.length === fullImage.index + 1
              ? 'xl:blur-sm	 xl:hover:scale-[1]'
              : ''
          }`}
          disabled={awardsList.length === fullImage.index + 1 ? true : false}
          aria-label="arrow right"
        >
          <svg className="xl:h-auto xl:w-[84px] xl:fill-accent xl:stroke-accent">
            <use href="/images/icons.svg#right-arrow"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
