import ContactLink from '../ContactLink';

interface IProps {
  phone: string;
  email: string;
}

export default function Contacts({ phone, email }: IProps) {
  return (
    <div className="flex w-full flex-wrap justify-center gap-8 md:mx-auto md:w-4/5 md:flex-nowrap md:gap-6">
      <ContactLink href={`tel:${phone}`}>
        {`${phone.slice(0, 3)} (${phone.slice(3, 6)}) ${phone.slice(
          6,
          9
        )}-${phone.slice(9, 11)}-${phone.slice(11)}`}
      </ContactLink>
      <ContactLink href={`mailto:${email}`}>{email.toLowerCase()}</ContactLink>
    </div>
  );
}
