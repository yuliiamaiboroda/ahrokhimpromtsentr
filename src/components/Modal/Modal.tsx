import { useEffect } from 'react';

interface IProps {
  children: React.ReactNode;
  onClose: () => void;
}
const ESCAPE_KEY = 'Escape';

//  TODO add  library body scroll lock

export default function Modal({ children, onClose }: IProps) {
  useEffect(() => {
    const escapeModal = (event: KeyboardEvent) => {
      if (event.code === ESCAPE_KEY) {
        event.preventDefault();
        onClose();
      }
    };
  }, []);

  const handleBackdropCloseModal = ({
    target,
    currentTarget,
  }: React.MouseEvent) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center p-4 backdrop-blur-sm"
      onClick={handleBackdropCloseModal}
    >
      <div className="relative w-[300px] rounded-2xl p-8 md:w-[600px] xl:w-[800px]">
        <button type="button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}
