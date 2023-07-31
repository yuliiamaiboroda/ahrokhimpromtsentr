'use client';

import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
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
  contactPhone: '',
  agreement: false,
};

interface IProps {}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function FormField({ name, ...props }: IInputProps) {
  const [field, meta] = useField(name);
  return (
    <label className="contact">
      <input
        {...field}
        {...props}
        className="w-full  rounded-xl bg-transparent
                  px-3 py-5 placeholder:text-placeholder md:px-4 md:py-6 xl:px-6"
      />
      {meta.touched && meta.error ? (
        <div className="absolute left-0 top-full">{meta.error}</div>
      ) : null}
    </label>
  );
}

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

function TextareaField({
  name,
  rows = 5,
  cols = 32,
  ...props
}: ITextareaProps) {
  const [field, meta] = useField(name);
  return (
    <label className="contact">
      <textarea
        {...field}
        {...props}
        rows={rows}
        cols={cols}
        className="block w-full resize-none rounded-xl
                  bg-transparent px-3 py-5 placeholder:text-placeholder md:px-4 md:py-6 xl:px-6"
      />
      {meta.touched && meta.error ? (
        <div className="left-) absolute top-full">{meta.error}</div>
      ) : null}
    </label>
  );
}

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
      <Form
        className="mx-auto flex max-w-full flex-col gap-7 font-body 
                  text-base font-bold md:max-w-[532px] 
                  md:gap-8 md:text-2xl xl:max-w-[576px] xl:text-3xl"
      >
        <FormField type="text" name="name" placeholder="Ім‘я" />
        <FormField
          type="text"
          name="contactPhone"
          placeholder="Контактний телефон"
        />
        <FormField type="email" name="contactMail" placeholder="Email" />
        <TextareaField name="comment" placeholder="Коментар" />
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
