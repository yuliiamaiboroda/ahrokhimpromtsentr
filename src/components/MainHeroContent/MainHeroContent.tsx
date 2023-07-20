import ButtonLink from '../ButtonLink/ButtonLink';

export default function MainHeroContent() {
  return (
    <div className="absolute left-24 top-80 z-20 w-[271px] text-4xl md:w-[373px] xl:w-[441px]">
      <h1 className="mb-0.5	 text-center font-heading text-xl font-bold text-primary md:text-start md:text-3xl xl:text-[40px]/[49px] ">
        АГРОХІМПРОМЦЕНТР
      </h1>
      <h2 className="text-center font-body	 text-base font-bold  text-subtitle md:text-start	md:text-xl	xl:text-2xl">
        Збереження багатовікових традицій
      </h2>
      <p className="mb-[32px] mt-[26px] text-center font-body text-base font-semibold text-primary md:mb-[38px] md:text-start md:text-lg xl:mb-[40px] xl:mt-[24px]	xl:text-xl">
        Підприємство з особливою історією, що впливає на сучасність сільського
        господарства
      </p>
      <ButtonLink navigateTo="/products" title="Продукти компанії" size="l" />
    </div>
  );
}
