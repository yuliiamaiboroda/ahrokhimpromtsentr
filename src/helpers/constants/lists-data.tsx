import ColossusItemWithLink from '@/components/ColossusItemWithLink';

export const historyPeriodsArray = [
  '1 Етап – становлення та вивчення пріоритетних напрямків. На початку діяльності представники комплексу розширювали площі земель та виявляли перспективні шляхи для вирощування та обробки культур з подальшою реалізацією',
  '2 Етап – Удосконалення технологій. У цей період компанія активно приділяла увагу технологіям виробництва та догляду за зерновими. Працівники центру постійно шукали нові можливості шляхом вивчення теорії та практики, а також співпрацювали з експертами у галузі з усієї країни. ',
  '3 Етап – Покращення матеріальних можливостей. Протягом років здійснювалась заміна техніки, будівництво складських та промислових потужностей, вдосконалювались інструменти та створювались нові умови для збільшення якості культур. Цей етап триває і нині. ',
  'Впродовж 2012-2014 років на території підприємства було побудовано критий тік, два зерносховища, майстерні для ремонту техніки та будинок механізаторів з усіма побутовими зручностями. Крім того, у цей період відбулось значне оновлення та поповнення машинно-тракторного парку.',
  'З 1999 року та по сьогодення веденням бухгалтерського обліку займається Уройченко Зоя Олександрівна. Роботу над сучасним підприємством продовжують син Андрій Григорович (працює з моменту заснування) та онук Дмитро Андрійович (з 2020 року). Збереження сімейних цінностей та їх поєднання з традиціями підприємства має позитивний вплив на репутацію і розвиток компанії.',
];

export const accessToPersonalDataArray = [
  'Доступ до персональної інформації, яка була надана користувачем.',
  'Оновлення, коригування чи видалення персональної інформації.',
  'Анулювання згоди на обробку та зберігання персональної інформації.',
];

export const personalDatainBrowsersArray: Array<JSX.Element> = [
  <ColossusItemWithLink
    title="Chrome"
    shownLink="https://support.google.com/chrome/answer/95647"
    linkTo="https://support.google.com/chrome/answer/95647"
  />,
  <ColossusItemWithLink
    title="Mozilla"
    linkTo="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
    shownLink="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
  />,
  <ColossusItemWithLink
    title="Safari"
    linkTo="https://www.apple.com/legal/privacy/en-ww/cookies/"
    shownLink="https://www.apple.com/legal/privacy/en-ww/cookies/"
  />,
  <ColossusItemWithLink
    title="Microsoft Edge"
    linkTo="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
    shownLink="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge..."
  />,
];

// ToDo after domen bought change subject in a href mailto

export const contactInformationArray: Array<JSX.Element> = [
  <ColossusItemWithLink
    title="Номер телефону:"
    linkTo="tel:+380542225196"
    shownLink="+380 542 225 196"
  />,
  <ColossusItemWithLink
    title="Адреса електронної пошти:"
    linkTo="mailto:30452338@ukr.net?subject=Mail from ahrokhimpromtsentr.sumy.ua"
    shownLink="30452338@ukr.net"
  />,
  <ColossusItemWithLink
    title="Місцезнаходження комплексу:"
    linkTo="https://www.google.com/maps/place/%D0%93%D0%BE%D1%80%D0%BE%D0%B1%D1%96%D0%B2%D0%BA%D0%B0,+%D0%A1%D1%83%D0%BC%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+41833/@51.0864863,34.3252191,13z/data=!4m15!1m8!3m7!1s0x412973166d96ceb9:0x6443dfbd07a3d190!2z0JPQvtGA0L7QsdGW0LLQutCwLCDQodGD0LzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDE4MzM!3b1!8m2!3d51.0848295!4d34.3645393!16s%2Fg%2F12238cl5!3m5!1s0x412973166d96ceb9:0x6443dfbd07a3d190!8m2!3d51.0848295!4d34.3645393!16s%2Fg%2F12238cl5?hl=uk&entry=ttu"
    shownLink="Горобівка, Сумська область, 41833"
  />,
  <ColossusItemWithLink
    title="Адреса"
    linkTo="https://www.google.com/maps/place/%D0%9F%D0%9F%D0%A4+%22%D0%90%D0%B3%D1%80%D0%BE%D1%85%D1%96%D0%BC%D0%BF%D1%80%D0%BE%D0%BC%D1%86%D0%B5%D0%BD%D1%82%D1%80%22/@50.9077759,34.7942724,19z/data=!3m1!4b1!4m6!3m5!1s0x412901896d76e81b:0xb4f85292f702bf85!8m2!3d50.9077759!4d34.7949161!16s%2Fg%2F12qgtzxkz?hl=uk&entry=ttu"
    shownLink="Покровська площа, 13, Суми, Сумська область, 40000"
  />,
];
