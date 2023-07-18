import { IBM_Plex_Sans, Nunito } from 'next/font/google';

export const IBMPlexSans = IBM_Plex_Sans({
  subsets: ['cyrillic'],
  weight: ['700'],
  style: ['normal'],
  variable: '--font-ibm-plex-sans',
});
export const nunito = Nunito({
  subsets: ['cyrillic'],
  weight: ['600', '700'],
  variable: '--font-nunito',
});
