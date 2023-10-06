import Image from 'next/image';
import Tractor from '../../../public/images/tractor.svg';
import Smoke from '../../../public/images/smoke.svg';

export default function LoadingMarkup() {
  return (
    <div className="h-screen w-full">
      <div className="flex animate-bounce justify-center">
        <Image
          className="h-auto w-20 animate-ping md:w-28 xl:w-32"
          src={Smoke}
          alt="Smoke"
          sizes="100hw"
          quality={100}
          priority={true}
        />
        <Image
          className="h-auto w-20 md:w-28 xl:w-32"
          src={Tractor}
          alt="Track"
          sizes="100hw"
          quality={100}
          priority={true}
        />
      </div>
    </div>
  );
}
