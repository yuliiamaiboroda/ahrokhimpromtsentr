import { useState } from 'react';

export const useModal = (isOpen = false) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return { isModalOpen, openModal, closeModal };
};
