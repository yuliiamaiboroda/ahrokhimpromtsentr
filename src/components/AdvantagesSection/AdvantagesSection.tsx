// import Image, { StaticImageData } from 'next/image';
import AdvantagesList from '../AdvantagesList';
import ButtonLink from '../ButtonLink';
// import bgRightBottom from '../../../public/images/right-bottom-image@3x.png';
// import bgLeftBottom from '../../../public/images/left-bottom-image@3x.png';

// function Background({ src }: { src: StaticImageData }) {
//   return (
//     <Image
//       src={src}
//       alt="hero"
//       placeholder="blur"
//       quality={100}
//       width={300}
//       height={600}
//       style={{
//         objectFit: 'cover',
//       }}
//     />
//   );
// }

export default function AdvantagesSection() {
  return (
    <section>
      <div className="flex flex-col	items-center gap-12 py-20 pt-[15rem] md:gap-16 md:py-28	xl:gap-[72px] xl:pb-20 xl:pt-12">
        <AdvantagesList />
        <ButtonLink navigateTo="/about" title="Більше про нас" size="l" />
      </div>
      {/* <>
        <Background src={bgRightBottom} />
        <Background src={bgLeftBottom} />
      </> */}
    </section>
  );
}
