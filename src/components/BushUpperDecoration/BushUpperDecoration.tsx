import Image from 'next/image';
import bushUpperLeft from '../../../public/images/left-bush-upper.png';

export default function BushUpperDecoration() {
  return (
    <>
      <Image
        src={bushUpperLeft}
        alt="Колоски та листя"
        sizes="(min-widht: 1280px) 232px, (min-width: 768px) 195px, 195px"
        className="absolute left-0 top-1/2 -z-10 hidden h-auto md:block 
                   md:w-[195px] xl:w-[232px]"
      />
      <Image
        src={bushUpperLeft}
        alt="Колоски та листя відзеркалено"
        sizes="(min-widht: 1280px) 232px, (min-width: 768px) 195px, 195px"
        className="absolute right-0 top-1/2 -z-10 hidden h-auto -scale-x-100 
                  md:block md:w-[195px]  xl:w-[232px]"
      />
    </>
  );
}
