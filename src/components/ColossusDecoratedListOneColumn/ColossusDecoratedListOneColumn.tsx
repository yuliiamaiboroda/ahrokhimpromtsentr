import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import ColossusIcon from 'public/images/colossus.svg';
import ColossusDecoratedItem from '../ColossusDecoratedItem';

interface IProps {
  list: string[] | JSX.Element[];
  title?: string;
}

export default function ColossusDecoratedListOneColumn({
  list,
  title = '',
}: IProps) {
  if (!list || list.length === 0) {
    return null;
  }

  return (
    <div className="flex  flex-col items-center justify-center ">
      {title ? <SectionTitle title={title} /> : null}
      <ul className="mx-auto mb-[48px] grid max-w-[210px] md:mb-[68px] md:max-w-2xl xl:mb-[86px] xl:max-w-[752px]">
        {list.map((el, index) => (
          <ColossusDecoratedItem key={index}>{el}</ColossusDecoratedItem>
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
