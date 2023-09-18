import React from 'react';
import * as Yup from 'yup';
import { fileFormat, fileSize } from '@/utils';

export const resumeSchema = (fileField: React.RefObject<HTMLInputElement>) =>
  Yup.object({
    name: Yup.string()
      .trim()
      .min(2, "Ім'я занадто коротке - має містити мінімум 2 символи")
      .max(62, "Ім'я занадтно довге - має містити максимум 62 символів")
      .required("Ім'я є обов'язковим полем"),
    phone: Yup.string()
      .trim()
      .matches(
        /^\+380\d{9}$/,
        'Контактний номер повинен починатись з "+380" та містити 9 цифр після коду країни'
      )
      .required("Контактний телефон є обов'язковим полем"),
    email: Yup.string()
      .trim()
      .min(
        10,
        'Контактна пошта занадто коротка - має містити мінімум 10 символів.'
      )
      .max(
        63,
        'Контактна пошта занадто довга - має містити максимум 63 символів.'
      )
      .email('Невалідна пошта')
      .matches(
        /^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/,
        'Поле електронної пошти повинно містити тільки: латинські літери, цифри та знаки, на початку або в кінці електронної пошти не може бути дефіс, перед (@) повинно бути не менше 2 символів.'
      )
      .required("Контактна пошта є обов'язковим полем"),
    position: Yup.string()
      .trim()
      .matches(
        /^(?![-' ]+$)[a-zA-Zа-яА-ЯіІїЇєЄ0-9-'‘ʼ,./ ]+$/,
        'Поле позиції повинно містити тільки: літери, цифри, дефіси та апостроф'
      )
      .min(5)
      .max(30)
      .required("Поле позиції є обов'язковим полем"),
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
      .min(2, 'Коментар занадтно короткий - має містити мінімум 10 символів.')
      .max(2000, 'Коментар занадтно довга ий має містити максимум 63 символів.')
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
      .required("Коментар є обов'язковим полем"),
    agreement: Yup.bool()
      .oneOf([true], 'Згода має бути надана')
      .required("Згода на обробку даних є обов'язковим полем"),
  });
