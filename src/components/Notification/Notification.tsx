interface IProps {
  setIsNotificationOpen: Function;
  isNotificationOpen: boolean;
  status?: 'success' | 'failure';
  title?: string;
  description?: string;
}

export default function Notification({
  setIsNotificationOpen,
  isNotificationOpen,
  status = 'success',
  title = `${status === 'success' ? 'Запит успішний' : 'Виникла помилка'}`,
  description = `${
    status === 'success'
      ? 'Ваш запит виконано успішно. Інформацію буде передано адміністратору сайту для подальшого опрацювання. Дякуємо, бла бла бла...'
      : 'Упсс... трапилась халепа, спробуйте ще раз. Вибачте за незручності :)'
  }`,
}: IProps) {
  const notificationDelay = 3000;

  const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
    hideNotification();
  }, notificationDelay);

  const hideNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    clearTimeout(timeoutId);
  };

  return (
    <div className="absolute right-[50%] top-[50%] z-50 -translate-y-[50%] translate-x-[50%] ">
      {isNotificationOpen && (
        <>
          <button
            className="fixed right-4 top-4 z-50 h-5 w-5 hover:cursor-pointer"
            onClick={() => hideNotification()}
          >
            <svg className="h-5 w-5 fill-accent stroke-accent">
              <use href="/images/icons.svg#cross"></use>
            </svg>
          </button>
          <div className="animate-ping golden-edge flex min-w-[220px] max-w-[345px] flex-col items-center justify-center gap-3 bg-phoneScreenBtn  px-3 pb-3 pt-10 text-center  md:max-w-[690px] md:gap-16 md:p-20 xl:max-w-[835px]">
            <h2 className="text-2xl md:text-4xl">{title}</h2>
            <p>{description}</p>
            <div
              className={`golden-edge flex h-[78px] w-[78px] items-center justify-center md:h-[200px] md:w-[200px] ${
                status === 'success' ? 'round' : 'warning-edge round'
              }`}
            >
              <svg
                className={`golden-edge h-8 w-8 md:h-20 md:w-20 ${
                  status === 'success' ? 'fill-accent' : 'fill-warning'
                }`}
              >
                <use href="/images/icons.svg#cross"></use>
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
