import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Description from '@/components/Description';
import ButtonLink from '@/components/ButtonLink';
import VacanciesCatalogue from '@/components/VacanciesCatalogue';
import { BASE_URL } from '@/helpers/constants';
import data from '../../../public/data/data.json';

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
  const res = await fetch(BASE_URL + '/api/vacancies/category/all-vacancies');

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
          <SectionTitle title={data['vacancies-page']['job-subtitle']} />
          <div className="flex flex-col gap-5">
            <Description
              description={data['vacancies-page']['description-first']}
            />
            <Description
              description={data['vacancies-page']['description-second']}
            />
            <Description
              description={data['vacancies-page']['description-third']}
            />
            <Description
              description={data['vacancies-page']['description-fourth']}
            />
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
          <SectionTitle title={data['vacancies-page']['vacancies-subtitle']} />
          <VacanciesCatalogue vacancies={vacanciesList} />
        </Container>
      </Section>
    </>
  );
}
