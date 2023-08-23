import { useState, useEffect } from 'react';
import { NotificationStatus } from '@/types';

const TIMEOUT_DELAY = 3000;

export function useNotification() {
  const [isShown, setIsShown] = useState(false);
  const [status, setStatus] = useState<keyof typeof NotificationStatus>(
    NotificationStatus.success
  );
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isShown) {
      const id = setTimeout(() => {
        setIsShown(false);
        setTimeoutId(null);
      }, TIMEOUT_DELAY);
      setTimeoutId(id);
    }
  }, [isShown]);

  const showSuccess = () => {
    setStatus(NotificationStatus.success);
    setIsShown(true);
  };

  const showFailure = () => {
    setStatus(NotificationStatus.failure);
    setIsShown(true);
  };

  const hideNotification = () => {
    setIsShown(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return { showSuccess, showFailure, hideNotification, status, isShown };
}
