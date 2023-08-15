import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import Contacts from '@/components/Contacts';

const vacancy = {
  _id: '646e1584a5f81586b187fad3',
  category: 'actual-vacancies',
  title: 'Вантажник',
  description:
    'Потрібен вантажник Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam unde nulla ipsa blanditiis culpa omnis mollitia? Incidunt necessitatibus cumque assumenda!',
  sallary: '10000-12000',
  education: 'неповна',
  contactMail: 'test@mail.com',
  contactPhone: '+380503561436',
  workExperienceRequired: '1',
  location: 'Суми,Суми',
};

export default function Page() {
  const {
    title,
    description,
    sallary,
    education,
    workExperienceRequired,
    location,
    contactMail,
    contactPhone,
  } = vacancy;

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
