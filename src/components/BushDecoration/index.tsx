import Image from 'next/image';
import bushLeft from '../../../public/images/left-bush.png';

export default function BushDecoration() {
  return (
    <>
      <Image
        src={bushLeft}
        alt="Колоски та листя"
        sizes="(min-widht: 1280px) 278px, (min-width: 768px) 224px, 118px"
        className="absolute -left-5 bottom-0 -z-10 h-auto w-[118px]
                  md:-left-5 md:w-[224px] xl:left-0 xl:w-[278px]"
      />
      <Image
        src={bushLeft}
        alt="Колоски та листя відзеркалено"
        sizes="(min-widht: 1280px) 278px, (min-width: 768px) 224px, 118px"
        className="absolute -right-5 bottom-0 -z-10 h-auto w-[118px] -scale-x-100
                  md:-right-5 md:w-[224px] xl:right-0 xl:w-[278px]"
      />
    </>
  );
}
