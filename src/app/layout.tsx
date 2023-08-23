import './globals.css';
import { IBMPlexSans, nunito } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SvgLightGradient from '@/components/SvgLightGradient';

export const metadata = {
  title: 'Агрохімпромцентр',
  description:
    'Підприємство з особливою історією, що впливає на сучасність сільського господарства',
};

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
