import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ahrokhimpromtsentr.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://ahrokhimpromtsentr.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://ahrokhimpromtsentr.vercel.app/products',
      lastModified: new Date(),
    },
    {
      url: 'https://ahrokhimpromtsentr.vercel.app/services',
      lastModified: new Date(),
    },
    {
      url: 'https://ahrokhimpromtsentr.vercel.app/vacancies',
      lastModified: new Date(),
    },
    {
      url: 'https://ahrokhimpromtsentr.vercel.app/contacts',
      lastModified: new Date(),
    },
  ];
}
