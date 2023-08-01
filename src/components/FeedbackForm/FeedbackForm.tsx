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

function InputError({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`${className} absolute left-0 top-[calc(100%+0.5rem)] z-20 w-full 
                rounded-xl border-2 border-solid border-transparent
                bg-accent px-3 py-3 font-body text-sm 
                text-warning shadow-hover transition duration-1000
                hover:-translate-y-2/3 md:px-4 md:text-base xl:px-6 `}
    >
      {children}
    </p>
  );
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function FormField({ name, ...props }: IInputProps) {
  const [field, meta] = useField(name);
  return (
    <label className="relative">
      <div
        className={`golden-edge ${
          meta.touched && meta.error ? 'warning-edge' : ''
        }`}
      >
        <input
          {...field}
          {...props}
          className="block h-full w-full bg-transparent px-3
                  py-5 outline-none transition duration-200 
                  focus:shadow-hover md:px-4 md:py-6 xl:px-6"
        />
      </div>
      <InputError
        className={
          meta.touched && meta.error
            ? 'translate-y-0 scale-100'
            : ' -translate-y-full scale-0'
        }
      >
        {meta.error}
      </InputError>
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
    <label className="relative">
      <div
        className={`golden-edge ${
          meta.touched && meta.error ? 'warning-edge' : ''
        }`}
      >
        <textarea
          {...field}
          {...props}
          rows={rows}
          cols={cols}
          className="block h-full w-full resize-none bg-transparent px-3 py-5 outline-none
                  transition duration-200 focus:shadow-hover md:px-4 md:py-6 xl:px-6"
        />
      </div>
      <InputError
        className={
          meta.touched && meta.error
            ? 'translate-y-0 scale-100'
            : ' -translate-y-full scale-0'
        }
      >
        {meta.error}
      </InputError>
    </label>
  );
}

interface ICheckobxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

function CheckboxField({ label, name }: ICheckobxProps) {
  const [field, meta] = useField(name);
  return (
    <label className="relative flex cursor-pointer items-center gap-2">
      <input {...field} type="checkbox" className="absolute -z-0 scale-0" />
      <div className="relative">
        <svg className="h-6 w-6 fill-none stroke-accent stroke-2">
          <use href="/images/icons.svg#check-box"></use>
        </svg>
        <svg
          className={`${
            field.value ? 'opacity-100' : 'opacity-0'
          } absolute left-1/2 top-1/2 h-6 w-6 
                    -translate-x-1/2 -translate-y-1/2 fill-accent
                    stroke-accent transition duration-200 hover:shadow-hover`}
        >
          <use href="/images/icons.svg#check-mark"></use>
        </svg>
      </div>
      {label}
      <InputError
        className={
          meta.touched && meta.error
            ? 'translate-y-0 scale-100'
            : ' -translate-y-full scale-0'
        }
      >
        {meta.error}
      </InputError>
    </label>
  );
}

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
      <Form
        className="mx-auto flex max-w-full flex-col gap-7 font-body 
                  text-base font-bold text-primary placeholder:text-placeholder md:max-w-[532px] 
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
        <CheckboxField
          name="agreement"
          label="Я даю згоду на обробку
          персональний даних"
        />
        <button
          type="submit"
          className="mx-auto min-w-[200px] rounded-xl bg-light-gradient
                    px-2 py-3 text-center font-body text-base 
                    font-bold text-secondary hover:shadow-hover md:text-xl xl:text-2xl"
        >
          Надіслати
        </button>
      </Form>
    </Formik>
  );
}
