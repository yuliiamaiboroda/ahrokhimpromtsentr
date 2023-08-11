import type { RefObject } from 'react';

export const fileRequired = (fileField: RefObject<HTMLInputElement>) => () => {
  const files = fileField.current?.files;
  return !files?.length ? false : true;
};

export const fileConditional =
  (fileField: RefObject<HTMLInputElement>, condition?: any) => () => {
    const files = fileField.current?.files;
    return !files?.length && !condition ? false : true;
  };

export const fileFormat =
  (fileField: RefObject<HTMLInputElement>, validFormats: string[]) => () => {
    const files = fileField.current?.files;
    if (files?.length) {
      const file = files[0];
      const extension = file.type.split('/')[1];
      return validFormats.includes(extension);
    }
    return true;
  };

export const fileSize =
  (fileField: RefObject<HTMLInputElement>, fileSizeMb: number) => () => {
    const files = fileField.current?.files;
    if (files?.length) {
      const file = files[0];
      const size = file.size / 1024 / 1024;
      return size <= fileSizeMb;
    }
    return true;
  };
