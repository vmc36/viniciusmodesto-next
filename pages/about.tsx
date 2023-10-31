import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Link from 'components/Link';
import Section from 'components/Section';
import Workplaces from 'components/Workplaces';
import Gallery from 'components/Gallery';

import siacomLogo from 'public/projects/siacom-logo.png';
import tjprLogo from 'public/projects/tjpr-logo.png';
import avatar from 'public/avatar.png';

export const connectLinks = [
  { label: 'Email', href: 'mailto:viniciusmodesto.dev@gmail.com' },
  { label: 'Twitter', href: 'https://twitter.com/vmc___' },
  { label: 'GitHub', href: 'https://github.com/vmc36' },
];

const workplaces = [
  {
    title: 'Frontend Developer',
    description: 'Sia.Com',
    time: '2021 - Now',
    imageSrc: siacomLogo,
    link: 'http://siacominformatica.com.br/',
  },
  {
    title: 'Analista de Suporte',
    description: 'Sia.Com',
    time: '2020 - Now',
    imageSrc: siacomLogo,
    link: 'http://siacominformatica.com.br/',
  },
  {
    title: 'Técnico em Informática',
    description: 'Sia.Com',
    time: '2019 - 2020',
    imageSrc: siacomLogo,
    link: 'http://siacominformatica.com.br/',
  },
  {
    title: 'Estágio - Núcleo de informática',
    description: 'Tribunal de Justiça do Estado do Paraná',
    time: '2017 - 2018',
    imageSrc: tjprLogo,
    link: 'https://www.tjpr.jus.br/',
  },
];

const seoTitle = 'Sobre mim | Vinicius Modesto';
const seoDesc = 'Desenvolvedor Front-end, Analista de Suporte';

export default function About() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://vinimodesto-dev.vercel.app/about/`,
          site_name: 'Vinicius Modesto',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="hidden sm:block">
          <Gallery />
        </div>
        <div className="-mb-8 sm:hidden animate-in">
          <Image src={avatar} width={48} height={48} alt="avatar of Vinicius Modesto" />
        </div>
        <div className="flex flex-col gap-16 animate-in sm:animate-none md:gap-24" style={{ '--index': 2 } as React.CSSProperties}>
          <Section heading="Sobre mim" headingAlignment="right">
            <div className="flex flex-col gap-6">
              <p>
                <em className="font-semibold">Olá</em>&nbsp; Me chamo Vinícius, tenho 27 anos e trabalho com T.I há 9 e atualmente atuo com desenvolvimento
                Front End e Suporte.
              </p>
              <p>
                Comecei na carreira de T.I em 2014, ingressando na faculdade de Sistemas de Informação pela Universidade Paranaense - Unipar, em Umuarama - PR,
                onde me formei 4 anos depois.
              </p>
              <p>Já atuei como técnico de informática, atualmente atuo como analista de suporte e desenvolvedor Front-end.</p>
              <p>
                Minha grande paixão é trabalhar com tecnologia, criando e entendendo como as coisas funcionam, compartilhando ideias e aprendendo com pessoas.
                Possuo um background desde como funciona um computador a como gerenciar o armazenamento de dados de uma aplicação em um navegador.
              </p>
              <p>
                Fui criado no Paraná, mas atualmente moro em Recife-PE. Casado com a Aléxia, gosto de viajar e como hobby gosto de jogar League of Legends ou
                assistir esportes. Meus times favoritos são: Arsenal (Premiere League), Santos (Brasil), New England Patrios (NFL) e Cleveland Cavaliers (NBA).
              </p>
            </div>
          </Section>
          <Section heading="Contato" headingAlignment="right">
            <ul className="flex gap-6 animated-list">
              {connectLinks.map((link) => (
                <li className="transition-opacity" key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Section>
          <Section heading="Trabalho" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <p>
                + de {new Date().getFullYear() - 2014} anos de experiência atuando com tecnologia, entre Hardware, atendimento ao cliente, suporte e
                desenvolvimento front-end
              </p>
              <Workplaces items={workplaces} />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
