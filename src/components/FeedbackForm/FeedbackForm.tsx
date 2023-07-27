'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const feedbackSchema = Yup.object({
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
  contactMail: Yup.string()
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
      'Будь ласка введіть валідну адресу контактної пошти'
    )
    .required("Контактна пошта є обов'язковим полем"),
  contactPhone: Yup.string()
    .matches(
      /^\+380\d{9}$/,
      'Контактний номер повинен починатись з "+380" та містити 9 цифр після коду країни'
    )
    .required("Контактний телефон є обов'язковим полем"),
  name: Yup.string()
    .min(4, "Ім'я занадто коротке - має містити мінімум 4 символи")
    .max(30, "Ім'я занадтно довге - має містити максимум 30 символів")
    .required("Ім'я є обов'язковим полем"),
  agreement: Yup.bool()
    .oneOf([true], 'Згода має бути надана')
    .required("Згода на обробку даних є обов'язковим полем"),
});

interface IFeedback {
  name: string;
  contactPhone: string;
  contactMail: string;
  comment: string;
  agreement: boolean;
}

const INITIAL_STATE = {
  name: '',
  comment: '',
  contactMail: '',
  contactPhone: '+380',
  agreement: false,
};

interface IProps {}

export default function FeedbackForm({}: IProps) {
  return (
    <Formik
      initialValues={INITIAL_STATE}
      validateOnBlur
      validationSchema={feedbackSchema}
      onSubmit={(values, actions) => {
        console.log('values', values);
      }}
    >
      <Form className="flex flex-col gap-5 text-zinc-500">
        <Field type="text" name="name" />
        <ErrorMessage name="name" />
        <Field type="text" name="contactPhone" />
        <ErrorMessage name="contactPhone" />
        <Field type="email" name="contactMail" />
        <ErrorMessage name="contactMail" />
        <Field name="comment" cols={32} rows={5} as="textarea" />
        <ErrorMessage name="comment" />
        <label>
          <Field name="agreement" type="checkbox" />Я даю згоду на обробку
          персональний даних
          <ErrorMessage name="agreement" />
        </label>
        <button type="submit">Accept</button>
      </Form>
    </Formik>
  );
}
