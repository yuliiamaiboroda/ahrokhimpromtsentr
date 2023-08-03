'use client';
import { useEffect, useRef } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock-upgrade';
interface IProps {
  children: React.ReactNode;
  onClose: () => void;
  isModalOpen: boolean;
}

const ESCAPE_KEY = 'Escape';

// ToDo rewrite button with golden borders , replace x on svg

export default function Modal({ children, onClose, isModalOpen }: IProps) {
  const backdrop = useRef(null);
  const modal = useRef(null);

  useEffect(() => {
    const escapeModal = (event: KeyboardEvent) => {
      if (event.code === ESCAPE_KEY) {
        event.preventDefault();
        onClose();
      }
    };

    if (isModalOpen) {
      disableBodyScroll(document.body, {
        allowTouchMove: () => true,
        reserveScrollBarGap: true,
      });

      window.addEventListener('keydown', escapeModal);
    } else {
      enableBodyScroll(document.body);
      clearAllBodyScrollLocks();
      window.removeEventListener('keydown', escapeModal);
    }
    return () => clearAllBodyScrollLocks();
  }, [onClose, isModalOpen]);

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
      ref={backdrop}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-0 top-0 h-[50px] w-[50px] rounded text-primary"
      >
        X
      </button>
      <div
        className="relative w-[300px]  rounded-2xl p-8 md:w-[600px]"
        ref={modal}
      >
        {children}
      </div>
    </div>
  );
}
