import awardFirstImage from '../../../public/images/1.jpg';
import awardSecImage from '../../../public/images/2.jpg';
import awardThirdImage from '../../../public/images/3.jpg';
import awardFourImage from '../../../public/images/4.jpg';
import awardFiveImage from '../../../public/images/5.jpg';
import awardSixImage from '../../../public/images/6.jpg';
import awardSevenImage from '../../../public/images/7.jpg';
import awardEightImage from '../../../public/images/8.jpg';
import awardNineImage from '../../../public/images/9.jpg';
import awardTenImage from '../../../public/images/10.jpg';
import awardElevenImage from '../../../public/images/11.jpg';
import awardTwelfImage from '../../../public/images/12.jpg';
import awardThirteenImage from '../../../public/images/13.jpg';
import awardFourteenImage from '../../../public/images/14.jpg';
import awardFiveteenImage from '../../../public/images/15.jpg';
import awardSixteenImage from '../../../public/images/16.jpg';
import awardSeventeenImage from '../../../public/images/17.jpg';
import awardEighteenImage from '../../../public/images/18.jpg';
import { StaticImageData } from 'next/image';

interface IImage {
  src: StaticImageData;
  alt: string;
}

export const awardsList: IImage[] = [
  { src: awardFirstImage, alt: 'Honorary diploma of Andrii Polyakov' },
  { src: awardSecImage, alt: 'Honorary diploma of Andrii Polyakov' },
  { src: awardThirdImage, alt: 'Honorary certificate of Zoya Uroychenko' },
  { src: awardFourImage, alt: 'Honorary certificate of Zoya Uroychenko' },
  { src: awardFiveImage, alt: 'Honorary certificate of Grigory Polyakov' },
  {
    src: awardTenImage,
    alt: 'Honorary diploma of Andrii Polyakov',
  },
  { src: awardElevenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  { src: awardTwelfImage, alt: 'Letter of Grigory Polyakov' },
  { src: awardThirteenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  { src: awardFourteenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  {
    src: awardFiveteenImage,
    alt: 'certificate that the private enterprise "Agrokhimpromtsentr" is a member of the Public Union "Agrarian Union of Ukraine"',
  },
  { src: awardSixteenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  { src: awardSeventeenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  { src: awardEighteenImage, alt: 'Honorary certificate of Grigory Polyakov' },
  {
    src: awardSixImage,
    alt: 'Honorable mention for services to the Sumy region',
  },
  {
    src: awardSevenImage,
    alt: "Polyakov Grigory's honorary award for high achievements",
  },
  {
    src: awardEightImage,
    alt: 'Honorary title "honored worker of agriculture of Ukraine"',
  },
  {
    src: awardNineImage,
    alt: 'Award of Honor of the Agrarian Union of Ukraine',
  },
];
