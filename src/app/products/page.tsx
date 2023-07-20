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
      <section className="relative h-[209px] w-screen overflow-hidden md:h-[537px] xl:h-[628px]">
        <Image
          src={productsBackground}
          alt="Поле пшениці"
          fill
          sizes="100vh"
          quality={100}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        <div
          className="absolute
                      bottom-0 w-full before:absolute before:-bottom-16 before:-left-0 before:h-60 before:w-full
                      before:bg-[linear-gradient(180deg,_rgba(65,_85,_40,_0.93)_0%,_#29392F_79.93%)]
                      before:[transform:_perspective(400px)_rotateX(70deg)]
                      md:before:-bottom-8
                      md:before:left-0 md:before:h-60 
                      md:before:w-full
                      md:before:[transform:_perspective(400px)_rotateX(40deg)]"
        >
          <h1 className="absolute bottom-[40px] w-full text-center text-xl md:bottom-[72px] md:text-3xl xl:text-4xl">
            Продукти компанії
          </h1>
        </div>
      </section>
    </main>
  );
}
