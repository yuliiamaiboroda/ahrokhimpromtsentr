'use client';

import { Formik, Form } from 'formik';
import { feedbackSchema } from '@/helpers/schemas';
import FormField from '../FormField';
import TextareaField from '../TextareaField';
import CheckboxField from '../CheckboxField';
import Button from '../Button';
import Notification from '../Notification';
import { useNotification } from '@/hooks';
import { BASE_URL } from '@/helpers/constants';

const INITIAL_STATE = {
  name: '',
  comment: '',
  contactMail: '',
  countryCode: '+380',
  contactPhone: '',
  agreement: false,
};

interface IProps {}

export default function FeedbackForm({}: IProps) {
  const { showSuccess, showFailure, ...state } = useNotification();
  return (
    <>
      <Formik
        initialValues={INITIAL_STATE}
        validationSchema={feedbackSchema}
        onSubmit={(values, actions) => {
          const updatedValues = {
            name: values.name,
            comment: values.comment,
            contactMail: values.contactMail,
            contactPhone: `${values.countryCode}${values.contactPhone}`,
            agreement: values.agreement,
          };
          fetch(BASE_URL + '/api/feedback/', {
            body: JSON.stringify(updatedValues),
            headers: { 'Content-type': 'application/json' },
            method: 'PUT',
          })
            .then(res => {
              if (!res.ok) {
                throw new Error('Error sending feedback form data');
              }
            })
            .then(() => {
              actions.resetForm();
              showSuccess();
            })
            .catch(err => showFailure);
        }}
      >
        <Form
          className="mx-auto flex max-w-full flex-col gap-7 
                  font-body text-base font-bold text-primary placeholder:text-placeholder 
                  md:max-w-[532px] md:gap-8 md:text-2xl xl:max-w-[576px] xl:text-3xl"
        >
          <FormField type="text" name="name" placeholder="Ім‘я" />
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
                type="text"
                name="contactPhone"
                placeholder="Контактний телефон"
              />
            </div>
          </div>
          <FormField type="email" name="contactMail" placeholder="Email" />
          <TextareaField name="comment" placeholder="Коментар" />
          <CheckboxField
            name="agreement"
            label="Я даю згоду на обробку
          персональний даних"
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
