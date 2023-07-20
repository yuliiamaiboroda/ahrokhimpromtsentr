import Image from 'next/image';
import productsBackground from '../../../public/images/bg-products-screen.jpg';
// import productsBackground from '../../../public/images/bg-main-screen.jpg';

export default function Page() {
  // return (
  //   <main>
  //     <section>
  //       <div
  //         className="relative mx-auto h-[628px] w-[1280px] overflow-hidden
  //         after:absolute after:-bottom-[50px] after:left-[120px] after:h-80 after:w-[1040px] after:bg-dark-gradient
  //       after:[transform:_perspective(400px)_rotateX(40deg)]"
  //       >
  //         <Image
  //           src={productsBackground}
  //           alt="поле пшениці"
  //           fill
  //           sizes="100vh"
  //         />
  //         <h1 className="absolute bottom-20 left-0 z-10 w-full text-center text-4xl ">
  //           Продукти компанії
  //         </h1>
  //       </div>
  //     </section>
  //   </main>
  // );

  return (
    <main>
      <section className="relative h-[628px] w-screen">
        <Image
          src={productsBackground}
          alt="Поле пшениці"
          fill
          sizes="100vh"
          quality={100}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        <h1 className="absolute bottom-[72px] w-full text-center text-4xl">
          Продукти компанії
        </h1>
      </section>
    </main>
  );
}
