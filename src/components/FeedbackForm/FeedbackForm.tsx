'use client';

import { Formik, Form } from 'formik';
import { feedbackSchema } from '@/helpers/schemas';
import FormField from '../FormField';
import TextareaField from '../TextareaField';
import CheckboxField from '../CheckboxField';
import Notification from '../Notification';
import { useNotification } from '@/hooks';

const INITIAL_STATE = {
  name: '',
  comment: '',
  contactMail: '',
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
          fetch('https://ahrokhimpromtsentr.cyclic.app/api/feedback', {
            body: JSON.stringify(values),
            headers: { 'Content-type': 'application/json' },
            method: 'POST',
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
      <Notification {...state} />
    </>
  );
}
