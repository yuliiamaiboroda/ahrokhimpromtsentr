import Image from 'next/image';
import Container from '../Container';
import Description from '../Description';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import ColossusIcon from 'public/images/colossus.svg';

export default function AccessToPersonalDataSection() {
  return (
    <Section>
      <Container>
        <SectionTitle title="Доступ до персональних даних користувача" />
        <Description description="В розділі сайту “Контакти” користувач може подати запит для отримання інформації щодо своїх персональних даних. Що отримує користувач після запиту:" />
        <ul className=" grid max-w-[210px] py-9 max-md:mx-auto	md:max-w-2xl  md:gap-x-[76px]  md:py-11 xl:max-w-[752px] ">
          <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-[1px]	bg-light-gradient  md:mt-[15px] "></span>
            <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
              Доступ до персональної інформації, яка була надана користувачем.
            </span>
          </li>
          <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-[1px]	bg-light-gradient  md:mt-[15px] "></span>
            <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
              Оновлення, коригування чи видалення персональної інформації.
            </span>
          </li>
          <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-[1px]	bg-light-gradient  md:mt-[15px] "></span>
            <span className="py-5  font-body text-base font-bold	text-primary md:py-9	md:text-xl xl:text-2xl">
              Анулювання згоди на обробку та зберігання персональної інформації.
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
        <ul className="flex flex-col gap-9 md:gap-11 ">
          <li>
            <Description description="За допомогою налаштувань у браузері кожен користувач має право відмовитись або обмежити використання файлів Cookie. Однак слід розуміти, що в разі повної відмови, деякі особливості та функціонал сайту можуть не працювати або працювати обмежено." />
          </li>
          <li>
            <Description description="Як блокувати, відмовлятись або приймати налаштування файлів Cookie? Для цього варто скористатись вказівками для кожного браузера окремо." />
          </li>
        </ul>

        <ul className=" grid max-w-[210px] py-9	max-md:mx-auto  md:max-w-2xl  md:gap-x-[76px] md:py-11 xl:max-w-[752px]">
          <li className="relative flex items-center	gap-2.5 md:gap-5	xl:gap-6">
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-[1px]	bg-light-gradient  md:mt-[15px] "></span>
            <span className="overflow-hidden text-ellipsis py-5 font-body text-base font-bold	text-primary max-md:max-w-[210px] max-md:whitespace-nowrap	md:py-9	 md:text-xl xl:text-2xl">
              Chrome:{' '}
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent"
              >
                https://support.google.com/chrome/answer/95647
              </a>
            </span>
          </li>
          <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-[1px]	bg-light-gradient  md:mt-[15px] "></span>
            <span className="overflow-hidden text-ellipsis  py-5 font-body text-base  font-bold text-primary max-md:max-w-[210px]	max-md:whitespace-nowrap md:py-9	md:text-xl xl:text-2xl">
              Internet Explorer:{' '}
              <a
                href="http://windows.microsoft.com/en-US/windows-vista/Block-or-allow-cookies"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent"
              >
                http://windows.microsoft.com/en-US/windows-vista/Block-or-allow-cookies
              </a>
            </span>
          </li>
          <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-[1px]	bg-light-gradient  md:mt-[15px] "></span>
            <span className="overflow-hidden text-ellipsis py-5 font-body text-base  font-bold text-primary max-md:max-w-[210px]	max-md:whitespace-nowrap md:py-9	md:text-xl xl:text-2xl">
              Mozilla:{' '}
              <a
                href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent"
              >
                https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
              </a>
            </span>
          </li>
          <li className="relative flex items-center gap-2.5	md:gap-5 xl:gap-6	">
            <Image
              src={ColossusIcon}
              alt="colossus"
              className="absolute -left-1.5 -top-2.5 h-6 w-6 md:h-7 md:w-7 xl:h-8 xl:w-8"
            />
            <span className="block h-3/4 w-[1px]	bg-light-gradient  md:mt-[15px] "></span>
            <span className="overflow-hidden	 text-ellipsis py-5 font-body  text-base  font-bold text-primary max-md:max-w-[210px]	max-md:whitespace-nowrap md:py-9	md:text-xl xl:text-2xl">
              Safari:{' '}
              <a
                href="https://www.apple.com/legal/privacy/en-ww/cookies/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent"
              >
                https://www.apple.com/legal/privacy/en-ww/cookies/
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
        <Description description="Зверніть увагу, що інструкція для кожного браузеру технічно відрізняється та згідно з оновленнями програмного забезпечення деякий функціонал може бути обмежений. " />
      </Container>
    </Section>
  );
}
