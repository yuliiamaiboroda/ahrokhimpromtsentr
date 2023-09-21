import Container from '../Container';
import Description from '../Description';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import {
  accessToPersonalDataArray,
  personalDatainBrowsersArray,
} from '@/helpers/constants';
import ColossusDecoratedList from '../ColossusDecoratedList';

export default function AccessToPersonalDataSection() {
  return (
    <Section>
      <Container>
        <SectionTitle title="Доступ до персональних даних користувача" />
        <Description description="В розділі сайту “Контакти” користувач може подати запит для отримання інформації щодо своїх персональних даних. Що отримує користувач після запиту:" />
        <ColossusDecoratedList list={accessToPersonalDataArray} />
        <ul className="flex flex-col gap-9 md:gap-11 ">
          <li>
            <Description description="За допомогою налаштувань у браузері кожен користувач має право відмовитись або обмежити використання файлів Cookie. Однак слід розуміти, що в разі повної відмови, деякі особливості та функціонал сайту можуть не працювати або працювати обмежено." />
          </li>
          <li>
            <Description description="Як блокувати, відмовлятись або приймати налаштування файлів Cookie? Для цього варто скористатись вказівками для кожного браузера окремо." />
          </li>
        </ul>
        <ColossusDecoratedList
          list={personalDatainBrowsersArray}
          isLinkInside
        />
        <Description description="Зверніть увагу, що інструкція для кожного браузеру технічно відрізняється та згідно з оновленнями програмного забезпечення деякий функціонал може бути обмежений. " />
      </Container>
    </Section>
  );
}
