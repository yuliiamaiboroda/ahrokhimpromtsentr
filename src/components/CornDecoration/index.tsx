import Image from 'next/image';
import cornFlowerLeft from '../../../public/images/left-corn-flower.png';

export default function CornDecoration() {
  return (
    <>
      <Image
        src={cornFlowerLeft}
        alt="Цвіт кукурудзи"
        sizes="(min-widht: 1280px) 290px, (min-width: 768px) 236px, 115px"
        className="absolute -left-8 bottom-0 -z-10 h-auto w-[115px]
                  md:-left-0 md:w-[236px] xl:-bottom-3 xl:left-0 xl:w-[290px]"
      />
      <Image
        src={cornFlowerLeft}
        alt="Цвіт кукурудзи відзеркалено"
        sizes="(min-widht: 1280px) 290px, (min-width: 768px) 236px, 115px"
        className="absolute -right-8 bottom-0 -z-10 h-auto w-[115px] -scale-x-100
                  md:-right-0 md:w-[236px] xl:-bottom-3 xl:right-0 xl:w-[290px]"
      />
    </>
  );
}
