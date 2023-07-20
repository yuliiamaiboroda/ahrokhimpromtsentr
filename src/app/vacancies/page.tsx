'use client';
import Button from '@/components/Button';
import vacanciesBackground from '../../../public/images/bg-vacancies-screen.jpg';
import HeroSection from '@/components/HeroSection/HeroSection';

export default function Page() {
  return (
    <main>
      <HeroSection src={vacanciesBackground} alt="Поля в гірській місцевості" />
      its VACANCIES page
      <div className="flex items-center justify-center gap-5">
        <Button
          onClick={() => console.log('click')}
          variant="primary"
          type="button"
          title="Всі вакансіїї"
        />
        <Button
          onClick={() => console.log('click')}
          variant="secondary"
          type="button"
          title="Актуальні вакансії"
        />
      </div>
    </main>
  );
}
