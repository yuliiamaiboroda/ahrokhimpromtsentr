import Carrousel from '../Carrousel';
import SectionTitle from '../SectionTitle';
import data from '../../../public/data/data.json';

export default function AwardsSection() {
  return (
    <>
      <SectionTitle title={data['about-page']['awards-subtitle']} />
      <Carrousel />
    </>
  );
}
