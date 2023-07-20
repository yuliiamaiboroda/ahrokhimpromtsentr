import ButtonLink from '../ButtonLink/ButtonLink';

export default function MainHeroContent() {
  return (
    <div className="absolute left-1/2 top-[75%] z-20 flex w-[271px] -translate-x-1/2 flex-col items-center  justify-center text-4xl md:left-[calc(50%-170px)] md:top-[40%] md:flex md:w-[373px] md:flex-col	 md:items-baseline xl:left-[calc(50%-260px)] xl:w-[441px]">
      <h1 className="mb-0.5	 text-center font-heading text-xl font-bold text-primary md:text-start md:text-3xl xl:text-[40px]/[49px] ">
        АГРОХІМПРОМЦЕНТР
      </h1>
      <h2 className="text-center font-body	 text-base font-bold  text-subtitle md:text-start	md:text-xl	xl:text-2xl">
        Якість здобута поколіннями
      </h2>
      <p className="mb-[32px] mt-[26px] text-center font-body text-base font-semibold text-primary md:mb-[38px] md:text-start md:text-lg xl:mb-[40px] xl:mt-[24px]	xl:text-xl">
        Підприємство з особливою історією, що впливає на сучасність сільського
        господарства
      </p>
      <ButtonLink navigateTo="/products" title="Продукти компанії" size="l" />
    </div>
  );
}