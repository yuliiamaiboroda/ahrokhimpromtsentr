'use client';
import { useState } from 'react';
import Button from '@/components/Button';
import vacanciesBackground from '../../../public/images/bg-vacancies-screen.jpg';
import HeroSection from '@/components/HeroSection/HeroSection';
import Notification from '@/components/Notification';

export default function Page() {
  const [isNotificationOpen, setIsNotificationOpen] =
    useState(false);

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
          onClick={() => setIsNotificationOpen(true)}
          variant="secondary"
          type="button"
          title="Актуальні вакансії"
        />
        {isNotificationOpen && (
          <Notification
            setIsNotificationOpen={setIsNotificationOpen}
            isNotificationOpen={isNotificationOpen}
            status="success"
          />
        )}
      </div>
    </main>
  );
}
