import Image from 'next/image';
import ColossusIcon from 'public/mainPage/colossus.svg';

// TODO: rewrite on real text  , check sizes, rewrite on svg sprite

export default function AdvantagesList() {
  return (
    <ul className="mx-auto  grid	max-w-[210px]  md:max-w-2xl  md:grid-cols-2 md:gap-x-[76px] xl:max-w-[752px] ">
      <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
        <Image
          src={ColossusIcon}
          alt="colossus"
          className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
        />
        <span className="block h-3/4	 w-0.5	bg-light-gradient  md:mt-[15px] md:w-1 "></span>
        <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
          {/* Постійний розвиток */}
          <p>
            Протягом 24 років підприємство активно розвивається та збільшує
            технологічні можливості вирощування, обробки та реалізації культур.
          </p>
        </span>
      </li>
      <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
        <Image
          src={ColossusIcon}
          alt="colossus"
          className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
        />
        <span className="block h-3/4	 w-0.5	bg-light-gradient  md:mt-[15px] md:w-1 "></span>
        <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
          {/* Лідерство та репутація */}
          <p>
            Завдяки дотриманню сталих традицій у поєднанні з сучасними
            принципами, компанія є лідером серед виробників гречки в Сумській
            області.
          </p>
        </span>
      </li>
      <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
        <Image
          src={ColossusIcon}
          alt="colossus"
          className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
        />
        <span className="block h-3/4	 w-0.5	bg-light-gradient  md:mt-[15px] md:w-1 "></span>
        <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
          {/* Власні потужності */}
          <p>
            АГРОХІМПРОМЦЕНТР має всі можливості та відповідну техніку з метою
            вирощування, збору, оброблення та зберігання сільськогосподарської
            продукції.
          </p>
        </span>
      </li>
      <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
        <Image
          src={ColossusIcon}
          alt="colossus"
          className="absolute -left-1.5 -top-2.5	h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
        />
        <span className="block h-3/4	 w-0.5	bg-light-gradient  md:mt-[15px] md:w-1 "></span>
        <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
          {/* Унікальний досвід */}
          <p>
            Починаючи з 1999 року і до сьогодні представники підприємства
            працюють для збереження історичних цінностей сільського господарства
            України.
          </p>
        </span>
      </li>

      <li className="relative">
        <Image
          src={ColossusIcon}
          alt="colossus"
          className="absolute -left-1.5 -top-2.5	h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
        />
      </li>
      <li className="relative max-md:hidden">
        <Image
          src={ColossusIcon}
          alt="colossus"
          className="absolute -left-1.5 -top-2.5	h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
        />
      </li>
    </ul>
  );
}
