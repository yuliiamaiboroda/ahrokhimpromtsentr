import Image from 'next/image';
import ColossusIcon from 'public/images/colossus.svg';

interface IProps {
  children: React.ReactNode;
  isLinkInside?: boolean;
}

export default function ColossusDecoratedItem({
  children,
  isLinkInside = false,
}: IProps) {
  const classNameForSpanElement = isLinkInside
    ? 'overflow-hidden text-ellipsis py-5 font-body text-base font-bold	text-primary max-md:max-w-[210px] max-md:whitespace-nowrap	md:py-9	 md:text-xl xl:text-2xl'
    : 'py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl';

  return (
    <li className="relative grid grid-cols-[2px_1fr] items-center gap-2.5 md:gap-5 xl:gap-6 ">
      <Image
        src={ColossusIcon}
        alt="colossus"
        className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
      />
      <span className="block h-3/4 w-[1px]	bg-light-gradient  md:mt-[15px] md:w-0.5 "></span>
      <span className={classNameForSpanElement}>{children}</span>
    </li>
  );
}
