import './globals.css';
import { IBMPlexSans, nunito } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SvgLightGradient from '@/components/SvgLightGradient';
import type { Metadata } from 'next';
import { REVALIDATION_DELAY } from '@/helpers/constants';

export const metadata: Metadata = {
  title: 'Агрохімпромцентр',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'i1iWS5kNotE--s9pt7n7RyvwJ_y6fdhA9AOCllMqs2g',
  },
  description:
    'Агрохімпромцентр: Поколіннями засвоєна якість та сучасний розвиток у сільському господарстві. Відданість традиціям та інноваціям для якісних результатів. Технологічні можливості для повного циклу вирощування та обробки продукції. Спадщина минулих поколінь у службі сталого розвитку сільського господарства.',
  openGraph: {
    type: 'website',
    siteName: 'Агрохімпромцентр',
    title: 'Агрохімпромцентр',
    description:
      'Агрохімпромцентр: Поколіннями засвоєна якість та сучасний розвиток у сільському господарстві. Відданість традиціям та інноваціям для якісних результатів. Технологічні можливості для повного циклу вирощування та обробки продукції. Спадщина минулих поколінь у службі сталого розвитку сільського господарства.',
  },
  authors: [
    { name: 'Yuliia Maiboroda', url: 'https://github.com/yuliiamaiboroda' },
    { name: 'Ivan Drahoner', url: 'https://github.com/idrahoner' },
    { name: 'Yaroslav Senyuk', url: 'https://github.com/SenYaroslav' },
  ],
  keywords: [
    'Агрохімпромцентр',
    'Агрокомпанія',
    'Сумська агрокомпанія',
    'ППФ Агрохимпромцентр',
    'Агрохимпромцентр',
    'АХПЦ',
    'Агрохім',
    'Агрохімпром',
    'ППФ Агрохімпромцентр',
    'Агрофірма',
    'Аграрна компанія',
    'Зернові культури',
    'Зерно',
    'Ціни на зерно',
    'Пш',
    'Пшениця',
    'Сонях',
    'Соя',
    'Кукурудза',
    'Гречка',
    'Послуги комбайна',
    'Логістика',
  ],
};

export const revalidate = REVALIDATION_DELAY;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body
        className={`${IBMPlexSans.variable} ${nunito.variable} flex min-h-screen flex-col bg-body-gradient font-heading text-primary`}
      >
        <Header />
        {children}
        <SvgLightGradient />
        <Footer />
      </body>
    </html>
  );
}
