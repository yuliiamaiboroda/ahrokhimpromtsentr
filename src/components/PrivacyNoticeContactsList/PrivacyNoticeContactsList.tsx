import { contactInformationArray } from '@/helpers/constants';
import ColossusDecoratedListOneColumn from '../ColossusDecoratedListOneColumn';
import Container from '../Container';
import Description from '../Description';
import Section from '../Section';
import SectionTitle from '../SectionTitle';

export default function PrivacyNoticeContactsList() {
  return (
    <Section>
      <Container>
        <SectionTitle title="Контактна інформація" />
        <Description description="Якщо у користувача виникли питання або складнощі, пропонується звернутись до представників компанії наступними способами:" />
        <ColossusDecoratedListOneColumn list={contactInformationArray} />
      </Container>
    </Section>
  );
}
