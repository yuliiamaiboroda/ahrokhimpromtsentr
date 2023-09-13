import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import ColossusIcon from 'public/images/colossus.svg';

interface IProps {
  list: string[];
  title?: string;
}

export default function ListOneColumn({ list, title = '' }: IProps) {
  if (!list || list.length === 0) {
    return null;
  }

  return (
    <div className="flex  flex-col items-center justify-center ">
      {title ? <SectionTitle title={title} /> : null}
      <ul className="mx-auto mb-[48px] grid max-w-[210px] md:mb-[68px] md:max-w-2xl xl:mb-[86px] xl:max-w-[752px]">
        {list.map((text, index) => (
          <li
            key={index}
            className="relative grid grid-cols-[2px_1fr] items-center gap-2.5 md:gap-5 xl:gap-6 "
          >
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-[1px]	bg-light-gradient  md:mt-[15px] md:w-0.5 "></span>
            <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
              {text}
            </span>
          </li>
        ))}
        <li className="relative">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -left-1.5 -top-2.5  h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
        </li>
      </ul>
    </div>
  );
}
