import vacanciesBackground from '../../../public/images/bg-vacancies-screen.jpg';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Description from '@/components/Description';
import SmallCotainer from '@/components/SmallContainer';
import ResumeForm from '@/components/ResumeForm';
import ButtonLink from '@/components/ButtonLink';
import VacanciesCatalogue from '@/components/VacanciesCatalogue';

interface IVacancyTitle {
  _id: string;
  title: string;
}

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

async function getVacancyTitles() {
  const res = await fetch(
    'https://ahrokhimpromtsentr.cyclic.app/api/vacancies/titles'
  );

  if (!res.ok) {
    throw new Error('Error fetching vacancies titles');
  }

  return res.json() as Promise<IVacancyTitle[]>;
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
  const vacancyTitles = await getVacancyTitles();
  const vacanciesList = await getVacancies();

  return (
    <main>
      <HeroSection src={vacanciesBackground} alt="Поля в гірській місцевості" />
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
      <div id="resumeform">
        <Section>
          <Container>
            <SectionTitle title="Відгукнутися" />
            <SmallCotainer>
              <Description description="Вкажіть свої контактні дані і ми надамо зворотній зв’язок" />
            </SmallCotainer>
            <ResumeForm vacancies={vacancyTitles} />
          </Container>
        </Section>
      </div>
    </main>
  );
}
