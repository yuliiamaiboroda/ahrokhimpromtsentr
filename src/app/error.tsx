'use client';

import NotFoundMarkup from '@/components/NotFoundMarkup';

interface IProps {
  error: Error;
  reset: () => void;
}

const error = ({ error }: IProps) => {
  return <NotFoundMarkup title='Виникла помилка' description={error.message} />;
};

export default error;
