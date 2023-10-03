import Image from 'next/image';
import Tractor from '../../../public/images/tractor.svg';
import Smoke from '../../../public/images/smoke.svg';

export default function LoadingMarkup() {
  return (
    <div className="h-screen w-full">
      <div className="flex animate-bounce justify-center">
        <Image
          className="animate-ping"
          src={Smoke}
          alt="Smoke"
          width={90}
          height={90}
          quality={100}
        />
        <Image src={Tractor} alt="Track" width={90} height={90} quality={100} />
      </div>
    </div>
  );
}
