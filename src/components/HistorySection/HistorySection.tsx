import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import ColossusIcon from 'public/mainPage/colossus.svg';
import ButtonLink from '../ButtonLink';

export default function HistorySection() {
  return (
    <section className="justify-cente flex flex-col items-center gap-[48px] md:gap-[68px] xl:gap-[86px]">
      <SectionTitle title="Історичні періоди розвитку" />
      <ul className="mx-auto grid max-w-[210px] md:max-w-2xl md:gap-x-[76px] xl:max-w-[752px]">
        <li className="relative flex items-center gap-2.5 md:gap-5 xl:gap-6 ">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
          <span className="block h-3/4	 w-[10px]	bg-light-gradient  md:mt-[15px] md:w-1 "></span>
          <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
            1 Етап – становлення та вивчення пріоритетних напрямків. На початку
            діяльності представники комплексу розширювали площі земель та
            виявляли перспективні шляхи для вирощування та обробки культур з
            подальшою реалізацією
          </span>
        </li>
        <li className="relative flex items-center gap-2.5 md:gap-5 xl:gap-6 ">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
          <span className="block h-3/4	 w-[10px]	bg-light-gradient  md:mt-[15px] md:w-1 "></span>
          <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
            2 Етап – Удосконалення технологій. У цей період компанія активно
            приділяла увагу технологіям виробництва та догляду за зерновими.
            Працівники центру постійно шукали нові можливості шляхом вивчення
            теорії та практики, а також співпрацювали з експертами у галузі з
            усієї країни.
          </span>
        </li>
        <li className="relative flex items-center gap-2.5 md:gap-5 xl:gap-6 ">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
          <span className="block h-3/4	 w-[10px]	bg-light-gradient  md:mt-[15px] md:w-1 "></span>
          <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
            3 Етап – Покращення матеріальних можливостей. Протягом років
            здійснювалась заміна техніки, вдосконалювались інструменти та
            створювались нові умови для збільшення якості культур. Цей етап
            триває і нині.
          </span>
        </li>
        <li className="relative flex items-center gap-2.5 md:gap-5 xl:gap-6 ">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
          <span className="block h-3/4	 w-[10px]	bg-light-gradient  md:mt-[15px] md:w-1 "></span>
          <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
            Впродовж 2012-2014 років на території підприємства було побудовано
            критий тік, два зерносховища, майстерні для ремонту техніки та
            будинок механізаторів з усіма побутовими зручностями. Крім того, у
            цей період відбулось значне оновлення та поповнення
            машинно-тракторного парку.
          </span>
        </li>
        <li className="relative flex items-center gap-2.5 md:gap-5 xl:gap-6 ">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
          <span className="block h-3/4	 w-[10px]	bg-light-gradient  md:mt-[15px] md:w-1 "></span>
          <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
            З 1999 року та по сьогодення веденням бухгалтерського обліку
            займається Уройченко Зоя Олександрівна. Роботу над сучасним
            підприємством продовжують син Андрій Григорович (працює з моменту
            заснування) та внук Дмитро Андрійович (з 2020 року). Збереження
            сімейних цінностей та їх поєднання з традиціями підприємства має
            позитивний вплив на репутацію і розвиток компанії.
          </span>
        </li>
        <li className="relative">
          <Image
            src={ColossusIcon}
            alt="colossus"
            className="absolute -left-1.5 -top-2.5	h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
          />
        </li>
      </ul>
      <ButtonLink title="Зв’язатися з нами" navigateTo="/contacts" size="l" />
    </section>
  );
}
