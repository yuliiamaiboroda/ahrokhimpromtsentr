import contactsBackground from '../../../public/images/bg-contacts-screen.jpg';
import HeroSection from '@/components/HeroSection';
export default function Page() {
  return (
    <main>
      <HeroSection
        src={contactsBackground}
        alt="Колоски зернової культури на світанку"
      />
      Its CONTACTS page
    </main>
  );
}
