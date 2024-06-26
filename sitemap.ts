import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ahrohimpromcentr.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://ahrohimpromcentr.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://ahrohimpromcentr.com/products',
      lastModified: new Date(),
    },
    {
      url: 'https://ahrohimpromcentr.com/services',
      lastModified: new Date(),
    },
    {
      url: 'https://ahrohimpromcentr.com/vacancies',
      lastModified: new Date(),
    },
    {
      url: 'https://ahrohimpromcentr.com/contacts',
      lastModified: new Date(),
    },
    {
      url: 'https://ahrohimpromcentr.com/privacy-notice',
      lastModified: new Date(),
    },
  ];
}
