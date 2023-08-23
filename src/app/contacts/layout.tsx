import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Агрохімпромцентр | Контакти',
  openGraph: {
    title: 'Агрохімпромцентр | Контакти',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
