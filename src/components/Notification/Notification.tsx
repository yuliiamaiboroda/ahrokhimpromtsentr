// interface IProps {
//   setIsNotificationOpen: Function;
//   isNotificationOpen: boolean;
//   status?: 'success' | 'failure';
//   title?: string;
//   description?: string;
// }

// export default function Notification({
//   setIsNotificationOpen,
//   isNotificationOpen,
//   status = 'success',
//   title = `${status === 'success' ? 'Запит успішний' : 'Виникла помилка'}`,
//   description = `${
//     status === 'success'
//       ? 'Ваш запит виконано успішно. Інформацію буде передано адміністратору сайту для подальшого опрацювання. Дякуємо, бла бла бла...'
//       : 'Упсс... трапилась халепа, спробуйте ще раз. Вибачте за незручності :)'
//   }`,
// }: IProps) {
//   const notificationDelay = 3000;

//   const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
//     hideNotification();
//   }, notificationDelay);

//   const hideNotification = () => {
//     setIsNotificationOpen(!isNotificationOpen);
//     clearTimeout(timeoutId);
//   };

//   return (
//     <div className="absolute right-[50%] top-[50%] z-50 -translate-y-[50%] translate-x-[50%] ">
//       {isNotificationOpen && (
//         <>
//           <button
//             className="fixed right-4 top-4 z-50 h-5 w-5 hover:cursor-pointer"
//             onClick={() => hideNotification()}
//           >
//             <svg className="h-5 w-5 fill-accent stroke-accent">
//               <use href="/images/icons.svg#cross"></use>
//             </svg>
//           </button>
//           <div className="golden-edge flex min-w-[220px] max-w-[345px] flex-col items-center justify-center gap-3 bg-phoneScreenBtn  px-3 pb-3 pt-10 text-center  md:max-w-[690px] md:gap-16 md:p-20 xl:max-w-[835px]">
//             <h2 className="text-2xl md:text-4xl">{title}</h2>
//             <p>{description}</p>
//             <div
//               className={`golden-edge flex h-[78px] w-[78px] items-center justify-center md:h-[200px] md:w-[200px] ${
//                 status === 'success' ? 'round' : 'warning-edge round'
//               }`}
//             >
//               <svg
//                 className={`golden-edge h-8 w-8 md:h-20 md:w-20 ${
//                   status === 'success' ? 'fill-accent' : 'fill-warning'
//                 }`}
//               >
//                 <use href="/images/icons.svg#cross"></use>
//               </svg>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

import { use, useEffect } from 'react';

interface IProps {
  isShown: boolean;
  status: 'success' | 'failure';
  onClose: () => void;
}
let timeoutId: NodeJS.Timeout;

export default function Notification({ onClose, isShown, status }: IProps) {
  useEffect(() => {
    if (isShown) {
      timeoutId = setTimeout(() => {
        onClose();
      }, 3000);
    }
  }, [isShown, onClose]);

  const handleClose = () => {
    onClose();
    clearTimeout(timeoutId);
  };

  return (
    <div
      className={`${
        isShown
          ? 'opacity-1 scale-100'
          : 'pointer-events-none scale-50 opacity-0'
      } fixed bottom-0 left-0 right-0 top-0 z-50
        transition duration-200`}
      onClick={handleClose}
    >
      <div
        className={`${
          status === 'success'
            ? 'bg-dark-gradient'
            : 'warning-edge bg-light-gradient text-warning'
        } golden-edge left-1/2 top-1/2 w-4/5 max-w-[970px] 
        -translate-x-1/2 -translate-y-1/2 
        px-7 py-3 font-body font-bold shadow-card md:px-32
          md:py-20 xl:px-52 xl:py-16`}
      >
        <h3 className=" mb-10 text-center text-2xl md:mb-16 md:text-4xl">
          Title
        </h3>
        <p className="mb-10 text-center text-base md:mb-16 md:text-2xl">
          Description Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptate in dolore odit ea minima cupiditate ut placeat sit adipisci
          quibusdam!
        </p>
        <div
          className="relative mx-auto h-20 w-20
                    md:h-52 md:w-52 xl:h-56 xl:w-56"
        >
          <svg
            className={`${
              status === 'success' ? 'stroke-accent' : 'stroke-warning'
            } ablsolute left-0 top-0 h-full w-full fill-none`}
          >
            <use href="/images/icons.svg#circle"></use>
          </svg>
          <svg
            className={`${
              status === 'success' ? 'fill-accent' : 'fill-warning'
            } absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {status === 'success' ? (
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
