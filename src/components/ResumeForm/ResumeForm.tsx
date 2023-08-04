'use client';

import { useRef } from 'react';
import { Formik, Form } from 'formik';
import { resumeShema } from '@/helpers/schemas';
import FormField from '../FormField';
import TextareaField from '../TextareaField';
import CheckboxField from '../CheckboxField';
import PositionSelector from '../PositionSelector';

interface IProps {
  vacancies: { _id: string; title: string }[];
}

export default function ResumeForm({ vacancies }: IProps) {
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        position: '',
        resume: '',
        comment: '',
        agreement: false,
      }}
      validationSchema={resumeShema(fileInput)}
      onSubmit={(values, action) => {
        console.log('values', values);
        action.resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form
          className="mx-auto flex max-w-full flex-col gap-7 
                  font-body text-base font-bold text-primary placeholder:text-placeholder 
                  md:max-w-[532px] md:gap-8 md:text-2xl xl:max-w-[576px] xl:text-3xl"
        >
          <FormField name="name" type="text" placeholder="Ім‘я" />
          <FormField
            name="phone"
            type="text"
            placeholder="Контактний телефон"
          />
          <FormField name="email" type="text" placeholder="Email" />
          <PositionSelector
            name="position"
            options={vacancies.map(({ title }) => ({
              label: title,
              value: title,
            }))}
            onChange={option => setFieldValue('position', option?.value)}
          />
          <TextareaField name="comment" placeholder="Коментар" />
          <CheckboxField
            name="agreement"
            label="Я даю згоду на обробку персональних даних"
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
      )}
    </Formik>
  );
}
