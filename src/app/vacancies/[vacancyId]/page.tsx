import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Contacts from '@/components/Contacts';

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

async function getCurrentVacancy(vacancyId: string) {
  const res = await fetch(
    `https://ahrokhimpromtsentr.cyclic.app/api/vacancies/certain/${vacancyId}`
  );

  if (!res.ok) {
    throw new Error('Error fetching vacancies');
  }

  return res.json() as Promise<IVacancy>;
}

export default async function Page({
  params,
}: {
  params: { vacancyId: string };
}) {
  const {
    title,
    description,
    sallary,
    education,
    workExperienceRequired,
    location,
    contactMail,
    contactPhone,
  } = await getCurrentVacancy(params.vacancyId);

  const vacancyDetails = [
    { label: 'Опис', value: description },
    { label: 'Заробітня плата', value: sallary },
    { label: 'Освіта', value: education },
    { label: 'Досвід', value: workExperienceRequired },
    { label: 'Адреса', value: location },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle title={title} />
        <ul className="mx-auto mb-9 w-10/12 md:mb-16">
          {vacancyDetails.map(({ label, value }) => (
            <li
              key={label}
              className="flex items-start justify-between gap-1 font-body text-base md:text-xl
                        xl:text-2xl [&:not(:first-child)]:mt-6 
                        [&:not(:first-child)]:md:mt-8"
            >
              <p className="font-semibold">{label}:</p>
              <p className="w-2/3 text-right font-bold">{value}</p>
            </li>
          ))}
        </ul>
        <Contacts phone={contactPhone} email={contactMail} />
      </Container>
    </Section>
  );
}
