export default function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute
                      bottom-0 w-full before:absolute before:-bottom-16 before:-left-0 before:h-60 before:w-full
                      before:bg-[linear-gradient(180deg,_rgba(65,_85,_40,_0.93)_0%,_#29392F_79.93%)]
                      before:[transform:_perspective(400px)_rotateX(70deg)]
                      sm:before:[transform:_perspective(400px)_rotateX(60deg)]
                      md:before:-bottom-8 md:before:left-0 
                      md:before:h-60
                      md:before:w-full
                      md:before:[transform:_perspective(400px)_rotateX(40deg)]"
    >
      <h1 className="absolute bottom-[40px] w-full text-center text-xl sm:bottom-[50px] md:bottom-[72px] md:text-3xl xl:text-4xl">
        {children}
      </h1>
    </div>
  );
}
