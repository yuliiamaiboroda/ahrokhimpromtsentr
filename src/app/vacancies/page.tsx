import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Description from '@/components/Description';
import ButtonLink from '@/components/ButtonLink';
import VacanciesCatalogue from '@/components/VacanciesCatalogue';

interface IVacancy {
  _id: string;
  category: string;
  title: string;
  description: string;
  sallary: string;
  education: string;
  contactMail: string;
  contactPhone: string;
  workExperienceRequired: string;
  location: string;
}

async function getVacancies() {
  const res = await fetch(
    'https://ahrokhimpromtsentr.cyclic.app/api/vacancies/category/all-vacancies'
  );

  if (!res.ok) {
    throw new Error('Error fetching vacancies titles');
  }

  return res.json() as Promise<IVacancy[]>;
}

export default async function Page() {
  const vacanciesList = await getVacancies();

  return (
    <>
      <Section>
        <Container>
          <SectionTitle title="Робота" />
          <div className="flex flex-col gap-5">
            <Description description="Підприємство з багаторічним досвідом знаходиться у постійному пошуку кваліфікованих спеціалістів у різних галузях сільськогосподарського направлення. Майбутнім працівникам пропонується ряд переваг: гідна заробітна плата, повний соціальний пакет та якісні умови роботи." />
            <Description description="Претендентам достатньо залишити онлайн заявку на сайті, щоб отримати швидкий зворотний зв'язок. Просимо звернути увагу, що відділ кадрів доступний виключно у робочий час. " />
            <Description description="Бажаєте приєднатись?" />
            <Description description="Дізнайтесь про відкриті вакансії прямо зараз!" />
          </div>
          <div className="mx-auto mt-5 w-fit md:mt-10">
            <ButtonLink
              navigateTo="/vacancies#resumeform"
              title="Залишити заявку"
            />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle title="Вакансії" />
          <VacanciesCatalogue vacancies={vacanciesList} />
        </Container>
      </Section>
    </>
  );
}
