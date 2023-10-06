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
          countryCode: '+380',
          phone: '',
          email: '',
          position: '',
          resume: '',
          comment: '',
          agreement: false,
        }}
        validationSchema={resumeSchema(fileInput)}
        onSubmit={(formValues, actions) => {
          const updatedValues = {
            name: formValues.name,
            phone: `${formValues.countryCode}${formValues.phone}`,
            email: formValues.email,
            position: formValues.position,
            resume: formValues.resume,
            comment: formValues.comment,
            agreement: formValues.agreement,
          };
          const formData = new FormData();
          Object.entries(updatedValues).forEach(([key, value]) => {
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
          <div className=" flex gap-1">
            <div className="min-w-[64px] basis-1/4 md:basis-1/5 xl:basis-1/4">
              <FormField
                type="text"
                name="countryCode"
                placeholder="Код країни"
                disabled={true}
              />
            </div>
            <div className="basis-3/4 md:basis-4/5 xl:basis-3/4">
              <FormField
                name="phone"
                type="text"
                placeholder="Контактний телефон"
              />
            </div>
          </div>
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
