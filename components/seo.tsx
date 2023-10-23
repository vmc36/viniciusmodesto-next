import { DefaultSeo } from 'next-seo';

const config = {
  title: 'Vinicius Modesto - Front-end Developer',
  description: 'Construo Softwares web',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vinimodesto-dev.vercel.app/',
    site_name: 'Vinicius Modesto',
    images: [
      {
        url: 'https://vinimodesto-dev.vercel.app/_next/static/media/main-avatar.9ec893c5.svg',
        alt: 'Vinicius Modesto',
      },
    ],
  },
  twitter: {
    handle: '@vmc___',
    site: '@vmc___',
    cardType: 'summary_large_image',
  },
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}
