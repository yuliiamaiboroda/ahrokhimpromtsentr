import Image from 'next/image';
import ColossusIcon from 'public/mainPage/colossus.svg';

interface IProps {
  title: string;
}

export default function SectionTitle({ title }: IProps) {
  return (
    <div className="flex items-center	justify-center	gap-4">
      <Image
        src={ColossusIcon}
        alt="icon"
        className="w-6 h-6 md:w-8 md:h-8 xl:w-9 xl:h-9"
      />
      <div className="max-md:hidden md:h-0.5 md:w-36 bg-light-gradient"></div>
      <h2 className="text-primary font-heading text-xl md:text-3xl xl:text-4xl font-bold ">
        {title}
      </h2>
      <div className="max-md:hidden md:h-0.5 md:w-36 bg-light-gradient"></div>
      <Image
        src={ColossusIcon}
        alt="icon"
        className="w-6 h-6 md:w-8 md:h-8 xl:w-9 xl:h-9"
      />
    </div>
  );
}
