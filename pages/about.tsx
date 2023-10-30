import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Link from 'components/Link';
import Section from 'components/Section';
import Workplaces from 'components/Workplaces';
import Gallery from 'components/Gallery';

import bitrefillLogo from 'public/projects/bitrefill-logo.png';
import tracklibLogo from 'public/projects/tracklib-logo.png';
import styleroomLogo from 'public/projects/styleroom-logo.png';
import trailroutesLogo from 'public/projects/trailroutes-logo.png';
import notionLogo from 'public/projects/notion-logo.png';
import strengthLogo from 'public/projects/strength-logo.png';
import avatar from 'public/avatar.png';

export const connectLinks = [
  { label: 'Email', href: 'mailto:viniciusmodesto.dev@gmail.com' },
  { label: 'Twitter', href: 'https://twitter.com/vmc___' },
  { label: 'GitHub', href: 'https://github.com/vmc36' },
];

const workplaces = [
  {
    title: 'Sia.Com',
    description: 'Front-end Developer',
    time: '2021 - Now',
    imageSrc: bitrefillLogo,
    link: 'https://bitrefill.com',
  },
  {
    title: 'Frontend Developer',
    description: 'Tracklib',
    time: '2016 - 2021',
    imageSrc: tracklibLogo,
    link: 'https://tracklib.com',
  },
  {
    title: 'Design Engineer',
    description: 'Styleroom',
    time: '2013 - 2016',
    imageSrc: styleroomLogo,
    link: 'https://styleroom.se/app',
  },
];

const sideProjects = [
  {
    title: 'Trail Routes',
    description: 'Mapping platform built with react, mapbox, swiftUI',
    imageSrc: trailroutesLogo,
    link: 'https://github.com/samuelkraft/routes',
  },
  {
    title: 'notion-blog-nextjs',
    description: 'Next.js starter repo with a blog powered by Notion',
    imageSrc: notionLogo,
    link: 'https://github.com/samuelkraft/notion-blog-nextjs',
  },
  {
    title: 'Strength',
    description: 'iOS & WatchOS strength tracking app',
    imageSrc: strengthLogo,
    link: 'https://samuelkraft.github.io/strength/',
  },
  {
    title: 'samuelkraft-next',
    description: 'The website you are looking at!',
    imageSrc: avatar,
    link: 'https://github.com/samuelkraft/samuelkraft-next',
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto quas illum impedit at asperiores consequatur perspiciatis expedita
                repellendus, quidem nisi sapiente ex facilis dolor recusandae aspernatur. Aliquam, similique numquam!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse itaque, quaerat iure dolorum quas libero facilis culpa? Eaque magni repudiandae,
                illum rem distinctio, iusto dolorem sapiente architecto officiis doloremque at.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In distinctio nihil nam! Nihil sed soluta ipsum atque magni fuga eum unde. Voluptas
                sunt, nesciunt corporis quidem ad dolores incidunt molestiae.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dignissimos suscipit dicta nulla ut magnam dolorem, cupiditate voluptate
                asperiores sed tenetur facilis eum reiciendis, explicabo dolore ab debitis autem ullam.
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
          {/* <Section heading="Side projects" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <p>I enjoy hacking on the side.</p>
              <Workplaces items={sideProjects} />
            </div>
          </Section> */}
        </div>
      </div>
    </>
  );
}
