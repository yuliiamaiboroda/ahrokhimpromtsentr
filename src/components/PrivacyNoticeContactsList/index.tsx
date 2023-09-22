import { contactInformationArray } from '@/helpers/constants';
import ColossusDecoratedList from '../ColossusDecoratedList';
import Container from '../Container';
import Description from '../Description';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import data from '../../../public/data/data.json';

export default function PrivacyNoticeContactsList() {
  const classNameWrapper =
    ' max-w-[210px] pt-9 max-md:mx-auto	md:max-w-2xl  md:pt-11 xl:max-w-[752px] ';
  return (
    <Section>
      <Container>
        <SectionTitle title={data['privacy-page']['contacts-subtitle']} />
        <Description
          description={data['privacy-page']['contacts-description']}
        />
        <div className={classNameWrapper}>
          <ColossusDecoratedList list={contactInformationArray} />
        </div>
      </Container>
    </Section>
  );
}
