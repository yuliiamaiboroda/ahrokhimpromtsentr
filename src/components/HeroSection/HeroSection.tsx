export default function HeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative h-[209px] w-screen overflow-hidden md:h-[537px] xl:h-[628px]">
      {children}
    </section>
  );
}
