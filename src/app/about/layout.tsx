import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Агрохімпромцентр | Про нас',
  openGraph: {
    title: 'Агрохімпромцентр | Про нас',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
