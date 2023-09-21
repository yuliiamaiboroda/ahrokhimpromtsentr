import Image from 'next/image';
import ColossusIcon from 'public/images/colossus.svg';
import ColossusDecoratedItem from '../ColossusDecoratedItem';

interface IProps {
  list: string[] | JSX.Element[];
  isLinkInside?: boolean;
  isTwoColumns?: boolean;
}

export default function ColossusDecoratedList({
  list,
  isLinkInside = false,
  isTwoColumns = false,
}: IProps) {
  if (!list || list.length === 0) {
    return null;
  }

  const classNameForList = isTwoColumns
    ? 'mx-auto  grid	max-w-[210px]  md:max-w-2xl  md:grid-cols-2 md:gap-x-[76px] xl:max-w-[752px]'
    : 'mx-auto mb-[48px] grid max-w-[210px] md:mb-[68px] md:max-w-2xl xl:mb-[86px] xl:max-w-[752px]';

  return (
    <ul className={classNameForList}>
      {list.map((el, index) => (
        <ColossusDecoratedItem key={index} isLinkInside={isLinkInside}>
          {el}
        </ColossusDecoratedItem>
      ))}
      <li className="relative">
        <Image
          src={ColossusIcon}
          alt="colossus"
          className="absolute -left-1.5 -top-2.5  h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
        />
      </li>
      {isTwoColumns ? (
        <li className="relative max-md:hidden">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -left-1.5 -top-2.5	h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
        </li>
      ) : null}
    </ul>
  );
}
