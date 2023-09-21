import HeroSection from '@/components/HeroSection/HeroSection';
import contactsBackground from '../../../public/images/bg-contacts-screen.jpg';
import PrivatyNoticeSection from '@/components/PrivacyNoticeSection';
import PrivacyNoticeContactsList from '@/components/PrivacyNoticeContactsList';
import AccessToPersonalDataSection from '@/components/AccessToPersonalDataSection';
import data from '../../../public/data/data.json';

export default function Page() {
  return (
    <main>
      <HeroSection alt="Політика конфіденційності" src={contactsBackground} />
      <PrivatyNoticeSection
        title={data['privacy-page']['policy-subtitle']}
        description={data['privacy-page']['policy-description']}
      />
      <PrivacyNoticeContactsList />
      <PrivatyNoticeSection
        title={data['privacy-page']['key-definitions-subtitle']}
        description={data['privacy-page']['key-definitions-description']}
      />
      <PrivatyNoticeSection
        title={data['privacy-page']['data-collecting-subtitle']}
        description={data['privacy-page']['data-collecting-description']}
      />
      <PrivatyNoticeSection
        title={data['privacy-page']['protection-subtitle']}
        description={data['privacy-page']['protection-description']}
      />
      <AccessToPersonalDataSection />
      <PrivatyNoticeSection
        title={data['privacy-page']['person-data-subtitle']}
        description={data['privacy-page']['person-data-description']}
      />
      <PrivatyNoticeSection
        title={data['privacy-page']['informing-about-cookie-subtitle']}
        description={data['privacy-page']['informing-about-cookie-description']}
      />
    </main>
  );
}
