import { NotificationStatus } from '@/types';

interface IProps {
  isShown: boolean;
  status: keyof typeof NotificationStatus;
  hideNotification: () => void;
}

export default function Notification({
  hideNotification,
  isShown,
  status,
}: IProps) {
  const isSuccess = status === NotificationStatus.success;

  return (
    <div
      className={`${
        isShown ? 'opacity-1' : 'pointer-events-none opacity-0'
      } fixed bottom-0 left-0 right-0 top-0 z-50
        backdrop-blur-sm transition duration-200`}
      onClick={hideNotification}
    >
      <div
        className={`${
          isSuccess
            ? 'bg-dark-gradient'
            : 'warning-edge bg-light-gradient text-warning'
        } ${
          isShown ? 'scale-100' : 'scale-50'
        } golden-edge left-1/2 top-1/2 w-4/5 max-w-[970px] 
        -translate-x-1/2 -translate-y-1/2 px-7 py-3
        font-body font-bold shadow-card transition duration-200 
        md:px-32 md:py-20 xl:px-52 xl:py-16`}
      >
        <h3 className="mb-10 text-center text-2xl md:mb-16 md:text-4xl">
          {isSuccess ? 'Успішний запит' : 'Виникла помилка'}
        </h3>
        <p className="mb-10 text-center text-base md:mb-16 md:text-2xl">
          {isSuccess
            ? 'Ваш запит виконано успішно. Інформацію буде передано адміністратору сайту для подальшого опрацювання.'
            : 'Упсс... трапилась халепа, спробуйте ще раз. Вибачте за незручності :)'}
        </p>
        <div
          className="relative mx-auto h-20 w-20
                    md:h-52 md:w-52 xl:h-56 xl:w-56"
        >
          <svg
            className={`${
              isSuccess
                ? 'stroke-[url(#light-gradient)_var(--accent)]'
                : 'stroke-warning'
            } ablsolute left-0 top-0 h-full w-full fill-none`}
          >
            <use href="/images/icons.svg#circle"></use>
          </svg>
          <svg
            className={`${
              isSuccess
                ? 'fill-[url(#light-gradient)_var(--accent)]'
                : 'fill-warning'
            } absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {isSuccess ? (
              <use href="/images/icons.svg#check-mark"></use>
            ) : (
              <use href="/images/icons.svg#cross"></use>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}
