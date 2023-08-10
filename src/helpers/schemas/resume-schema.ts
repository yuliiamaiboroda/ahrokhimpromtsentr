import React from 'react';
import * as Yup from 'yup';
import { fileFormat, fileSize } from '@/utils';

export const resumeSchema = (fileField: React.RefObject<HTMLInputElement>) =>
  Yup.object({
    name: Yup.string().trim().min(2).max(62).required(),
    phone: Yup.string()
      .trim()
      .matches(
        /^\+380\d{9}$/,
        'Phone should containe +380 and another 9 numbers'
      )
      .required(),
    email: Yup.string()
      .trim()
      .matches(
        /^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/,
        'Поле електронної пошти повинно містити тільки: латинські літери, цифри та знаки, на початку або в кінці електронної пошти не може бути дефіс, перед (@) повинно бути не менше 2 символів.'
      )
      .required(),
    position: Yup.string()
      .trim()
      .matches(
        /^(?![-' ]+$)[a-zA-Zа-яА-ЯіІїЇєЄ0-9-'‘ʼ,./ ]+$/,
        'Поле позиції повинно містити тільки: літери, цифри, дефіси та апостроф'
      )
      .min(5)
      .max(30)
      .required(),
    resume: Yup.mixed()
      .test(
        'is-corrent-forat',
        'Резюме повине буди в форматі pdf',
        fileFormat(fileField, ['pdf'])
      )
      .test(
        'is-correct-size',
        'Розмір файлу не повинен перевищувати 5Mb',
        fileSize(fileField, 5)
      ),
    comment: Yup.string()
      .trim()
      .min(2)
      .max(2000)
      .test(
        'word-length',
        'Одне або кілька слів перевищують максимальну довжину в 20 символів',
        value => {
          if (!value) return true;
          const words = value.split(' ');

          for (const word of words) {
            if (word.length > 20) {
              return false;
            }
          }

          return true;
        }
      )
      .required(),
    agreement: Yup.bool()
      .oneOf([true], 'Agreement should be checked')
      .required(),
  });
