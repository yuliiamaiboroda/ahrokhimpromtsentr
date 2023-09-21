import Container from '../Container';
import Description from '../Description';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import {
  accessToPersonalDataArray,
  personalDatainBrowsersArray,
} from '@/helpers/constants';
import ColossusDecoratedList from '../ColossusDecoratedList';
import data from '../../../public/data/data.json';

export default function AccessToPersonalDataSection() {
  const classNameListWrapper = ' py-9 md:py-11 ';

  return (
    <Section>
      <Container>
        <SectionTitle title={data['privacy-page']['access-to-data-subtitle']} />
        <Description
          description={data['privacy-page']['access-to-data-description-first']}
        />
        <div className={classNameListWrapper}>
          <ColossusDecoratedList list={accessToPersonalDataArray} />
        </div>
        <ul className="flex flex-col gap-9 md:gap-11 ">
          <li>
            <Description
              description={
                data['privacy-page']['access-to-data-description-second']
              }
            />
          </li>
          <li>
            <Description
              description={
                data['privacy-page']['access-to-data-description-third']
              }
            />
          </li>
        </ul>
        <div className={classNameListWrapper}>
          <ColossusDecoratedList
            list={personalDatainBrowsersArray}
            isLinkInside
          />
        </div>
        <Description
          description={
            data['privacy-page']['access-to-data-description-fourth']
          }
        />
      </Container>
    </Section>
  );
}
