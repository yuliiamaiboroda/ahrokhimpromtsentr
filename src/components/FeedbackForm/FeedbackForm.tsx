'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Yup from 'yup';

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
      // validationSchema={feedbackSchema}
      onSubmit={(values, actions) => {
        console.log('values', values);
      }}
    >
      <Form className="flex flex-col gap-5 text-zinc-500">
        <label>
          Name:
          <Field type="text" name="name" />
        </label>
        <label>
          Phone:
          <Field type="text" name="contactPhone" />
        </label>
        <label>
          Email:
          <Field type="email" name="contactMail" />
        </label>
        <label>
          Comment:
          <Field name="comment" cols={32} rows={5} as="textarea" />
        </label>
        <button type="submit">Accept</button>
      </Form>
    </Formik>
  );
}
