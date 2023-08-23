import Container from '../Container';
import Description from '../Description';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import ColossusIcon from 'public/images/colossus.svg';

// ToDo after domen bought change subject in a href mailto

export default function PrivacyNoticeContactsList() {
  return (
    <Section>
      <Container>
        <SectionTitle title="Контактна інформація" />
        <Description description="Якщо у користувача виникли питання або складнощі, пропонується звернутись до представників компанії наступними способами:" />
        <ul className="grid max-w-[210px] pt-9 max-md:mx-auto	md:max-w-2xl  md:gap-x-[76px]  md:pt-11 xl:max-w-[752px] ">
          <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-0.5	bg-light-gradient  md:mt-[15px] "></span>
            <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
              Номер телефону:{' '}
              <a
                href="tel:+380542225196"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent"
              >
                +380 542 225 196
              </a>
            </span>
          </li>
          <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-0.5	bg-light-gradient  md:mt-[15px] "></span>
            <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
              Адреса електронної пошти:{' '}
              <a
                href="mailto:30452338@ukr.net?subject=Mail from ahrokhimpromtsentr.sumy.ua"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent"
              >
                30452338@ukr.net
              </a>
            </span>
          </li>
          <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-0.5	bg-light-gradient  md:mt-[15px] "></span>
            <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
              Місцезнаходження комплексу:{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent"
                href="https://www.google.com/maps/place/%D0%93%D0%BE%D1%80%D0%BE%D0%B1%D1%96%D0%B2%D0%BA%D0%B0,+%D0%A1%D1%83%D0%BC%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+41833/@51.0864863,34.3252191,13z/data=!4m15!1m8!3m7!1s0x412973166d96ceb9:0x6443dfbd07a3d190!2z0JPQvtGA0L7QsdGW0LLQutCwLCDQodGD0LzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDE4MzM!3b1!8m2!3d51.0848295!4d34.3645393!16s%2Fg%2F12238cl5!3m5!1s0x412973166d96ceb9:0x6443dfbd07a3d190!8m2!3d51.0848295!4d34.3645393!16s%2Fg%2F12238cl5?hl=uk&entry=ttu"
              >
                Горобівка, Сумська область, 41833
              </a>
            </span>
          </li>
          <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-0.5	bg-light-gradient  md:mt-[15px] "></span>
            <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
              Адреса:{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent"
                href="https://www.google.com/maps/place/%D0%9F%D0%9F%D0%A4+%22%D0%90%D0%B3%D1%80%D0%BE%D1%85%D1%96%D0%BC%D0%BF%D1%80%D0%BE%D0%BC%D1%86%D0%B5%D0%BD%D1%82%D1%80%22/@50.9077759,34.7942724,19z/data=!3m1!4b1!4m6!3m5!1s0x412901896d76e81b:0xb4f85292f702bf85!8m2!3d50.9077759!4d34.7949161!16s%2Fg%2F12qgtzxkz?hl=uk&entry=ttu"
              >
                Покровська площа, 13, Суми, Сумська область, 40000
              </a>
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
      </Container>
    </Section>
  );
}
