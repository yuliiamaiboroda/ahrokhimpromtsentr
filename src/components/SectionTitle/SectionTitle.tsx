import Image from 'next/image';
import ColossusIcon from 'public/images/colossus.svg';
import CollossusRightIcon from 'public/images/colossus-right.svg';
interface IProps {
  title: string;
}

export default function SectionTitle({ title }: IProps) {
  return (
    <div className="mb-12 flex	items-center	justify-center gap-4 md:mb-[84px]">
      <Image
        src={ColossusIcon}
        alt="icon"
        className="h-6 w-6 md:h-8 md:w-8 xl:h-9 xl:w-9"
      />
      <span className="block bg-light-gradient max-md:hidden md:h-0.5 md:w-36"></span>
      <h2 className="text-center font-heading text-xl font-bold text-primary first-letter:capitalize md:text-3xl xl:text-4xl">
        {title}
      </h2>
      <span className="block bg-light-gradient max-md:hidden md:h-0.5 md:w-36"></span>
      <Image
        src={CollossusRightIcon}
        alt="icon"
        className="h-6 w-6 md:h-8 md:w-8 xl:h-9 xl:w-9"
      />
    </div>
  );
}
