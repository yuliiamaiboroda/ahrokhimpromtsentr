'use client';

import { useRef } from 'react';
import { Formik, Form } from 'formik';
import { resumeSchema } from '@/helpers/schemas';
import FormField from '../FormField';
import TextareaField from '../TextareaField';
import CheckboxField from '../CheckboxField';
import SelectorField from '../SelectorField';
import UploadFileField from '../UploadFileField';
import Button from '../Button';
import Notification from '../Notification';
import { useNotification } from '@/hooks';
import { BASE_URL } from '@/helpers/constants';

interface IProps {
  vacancies: { _id: string; title: string }[];
}

export default function ResumeForm({ vacancies }: IProps) {
  const { showSuccess, showFailure, ...state } = useNotification();
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <>
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
        validationSchema={resumeSchema(fileInput)}
        onSubmit={(formValues, actions) => {
          const formData = new FormData();
          Object.entries(formValues).forEach(([key, value]) => {
            if (key !== 'resume') {
              formData.append(key, String(value));
            }
          });

          if (fileInput.current?.files?.length) {
            formData.append('resume', fileInput.current.files[0]);
          }

          fetch(BASE_URL + '/api/resumes', {
            body: formData,
            method: 'POST',
          })
            .then(res => {
              if (!res.ok) {
                throw new Error('Error sending resume from data');
              }
            })
            .then(() => {
              actions.resetForm();
              showSuccess();
            })
            .catch(err => showFailure());
        }}
      >
        <Form
          className="mx-auto flex max-w-full flex-col gap-7 
                  font-body text-base font-bold text-primary 
                  md:max-w-[532px] md:gap-8 md:text-2xl xl:max-w-[576px] xl:text-3xl"
        >
          <FormField name="name" type="text" placeholder="Ім‘я" />
          <FormField
            name="phone"
            type="text"
            placeholder="Контактний телефон"
          />
          <FormField name="email" type="text" placeholder="Email" />
          <SelectorField
            name="position"
            placeholder="Вакансія"
            options={[
              ...vacancies.map(({ title }) => ({
                label: title,
                value: title,
              })),
              { label: 'Інше', value: 'other' },
            ]}
          />
          <UploadFileField
            name="resume"
            label="Завантажити файл"
            placeholder="Прикріпити резюме"
            fileRef={fileInput}
          />
          <TextareaField name="comment" placeholder="Коментар" />
          <CheckboxField
            name="agreement"
            label="Я даю згоду на обробку персональних даних"
          />
          <div className="mx-auto">
            <Button type="submit" variant="primary">
              Надіслати
            </Button>
          </div>
        </Form>
      </Formik>
      <Notification {...state} />
    </>
  );
}
