import Image from 'next/image';
import ColossusIcon from 'public/mainPage/colossus.svg';

// TODO: rewrite on real text  , check sizes, rewrite on svg sprite

export default function AdvantagesSection() {
  return (
    <section>
      <ul className="grid  md:grid-cols-2	md:gap-x-[76px]  max-w-[210px]  md:max-w-2xl xl:max-w-[752px] mx-auto ">
        <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
          <span className="block h-3/4	 md:mt-[15px]	bg-light-gradient  w-0.5 md:w-1 "></span>
          <span className="py-5  md:py-9 font-body font-bold	text-primary text-base	md:text-xl xl:text-2xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </span>
        </li>
        <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
          <span className="block h-3/4	 md:mt-[15px]	bg-light-gradient  w-0.5 md:w-1 "></span>
          <span className="py-5  md:py-9 font-body font-bold	text-primary text-base	md:text-xl xl:text-2xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </span>
        </li>
        <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
          <span className="block h-3/4	 md:mt-[15px]	bg-light-gradient  w-0.5 md:w-1 "></span>
          <span className="py-5  md:py-9 font-body font-bold	text-primary text-base	md:text-xl xl:text-2xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </span>
        </li>
        <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5		h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
          <span className="block h-3/4	 md:mt-[15px]	bg-light-gradient  w-0.5 md:w-1 "></span>
          <span className="py-5  md:py-9 font-body font-bold	text-primary text-base	md:text-xl xl:text-2xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </span>
        </li>

        <li className="relative">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5		h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
        </li>
        <li className="relative max-md:hidden">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5		h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
        </li>
      </ul>
    </section>
  );
}
