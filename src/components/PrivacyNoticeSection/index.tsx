import Container from '../Container';
import Description from '../Description';
import Section from '../Section';
import SectionTitle from '../SectionTitle';

interface IProps {
  title: string;
  description: string;
}

export default function PrivatyNoticeSection({ title, description }: IProps) {
  return (
    <Section>
      <Container>
        <SectionTitle title={title} />
        <Description description={description} />
      </Container>
    </Section>
  );
}
