import OfferingsItem from '../OfferingsItem';

interface IOffer {
  _id: string;
  title: string;
  imageURL: string;
}

interface IProps {
  offers: IOffer[];
  navigateTo: string;
}

export default function OfferingsGallery({ offers, navigateTo }: IProps) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
      {offers.map(offer => (
        <OfferingsItem key={offer._id} {...offer} navigateTo={navigateTo} />
      ))}
    </ul>
  );
}
