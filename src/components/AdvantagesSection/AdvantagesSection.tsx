import Image from "next/image";
import ColossusIcon from "public/mainPage/colossus.svg";

// TODO: rewrite fixed width, add gradient , check sizes

// TODO: add text styles after thema will be deployed

// TODO: discuss afterelement or live that variant and delete extra svg

export default function AdvantagesSection() {
  return (
    <section>
      <ul className="grid  md:grid-cols-2	md:gap-x-[76px] max-w-xs md:max-w-2xl xl:max-w-[752px] mx-auto ">
        <li className="relative flex items-center gap-2.5		">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5		h-6 w-6 md:h-7 md:w-7"
          />
          <span className="block h-3/4	 md:mt-[15px]	 bg-gradient-to-b from-orange-200 to-yellow-400 w-0.5	"></span>
          <span className="py-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </span>
        </li>
        <li className="relative flex items-center gap-2.5		">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5		h-6 w-6 md:h-7 md:w-7"
          />
          <span className="block h-3/4	 md:mt-[15px]	 bg-gradient-to-b from-orange-200 to-yellow-400 w-0.5	"></span>
          <span className="py-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </span>
        </li>
        <li className="relative flex items-center gap-2.5	">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5		h-6 w-6 md:h-7 md:w-7"
          />
          <span className="block h-3/4	 md:mt-[15px]	 bg-gradient-to-b from-orange-200 to-yellow-400 w-0.5	"></span>
          <span className="py-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </span>
        </li>
        <li className="relative flex items-center gap-2.5		">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5		h-6 w-6 md:h-7 md:w-7"
          />
          <span className="block h-3/4	 md:mt-[15px]	 bg-gradient-to-b from-orange-200 to-yellow-400 w-0.5	"></span>
          <span className="py-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </span>
        </li>

        <li className="relative">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5		h-6 w-6 md:h-7 md:w-7"
          />
        </li>
        <li className="relative max-md:hidden">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -top-2.5 -left-1.5		h-6 w-6 md:h-7 md:w-7"
          />
        </li>
        {/* <li className="relative">
          <span className="block py-5 before:block before:absolute before:content-advantagesSectionColossus	before:top1/4 before:w-6 before:h-6 after:block after:h-1 after:absolute after:content-advantagesSectionLine ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </span>
        </li> */}
      </ul>
    </section>
  );
}
