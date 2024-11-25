import Image from "next/image";
import { NextSeo } from "next-seo";

import Link from "components/Link";
import Section from "components/Section";
import Workplaces from "components/Workplaces";
import Gallery from "components/Gallery";

import siacomLogo from "public/companies/siacom-logo.png";
import tjprLogo from "public/companies/tjpr-logo.png";
import zenvialogo from "public/companies/zenvia.jpg";
import test from "public/companies/test.jpg";

import avatar from "public/avatar.png";

export const connectLinks = [
 { label: "Email", href: "mailto:viniciusmodesto.dev@gmail.com" },
 { label: "LinkedIn", href: "https://www.linkedin.com/in/vinicius-modesto96/" },
 { label: "GitHub", href: "https://github.com/vmc36" },
];

const workplaces = [
 {
  title: "Analista de Suporte N2 SaaS",
  description: "Zenvia",
  time: "2024 - Now",
  imageSrc: test,
  link: "https://www.zenvia.com",
 },
 {
  title: "Frontend Developer",
  description: "Sia.Com",
  time: "2021 - Now",
  imageSrc: siacomLogo,
  link: "http://siacominformatica.com.br/",
 },
 {
  title: "Analista de Suporte",
  description: "Sia.Com",
  time: "2020 - Now",
  imageSrc: siacomLogo,
  link: "http://siacominformatica.com.br/",
 },
 {
  title: "Técnico em Informática",
  description: "Sia.Com",
  time: "2019 - 2020",
  imageSrc: siacomLogo,
  link: "http://siacominformatica.com.br/",
 },
 {
  title: "Estágio - Núcleo de informática",
  description: "Tribunal de Justiça do Estado do Paraná",
  time: "2017 - 2018",
  imageSrc: tjprLogo,
  link: "https://www.tjpr.jus.br/",
 },
];

const seoTitle = "Sobre mim | Vinicius Modesto";
const seoDesc = "Desenvolvedor Front-end, Analista de Suporte";

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
     site_name: "Vinicius Modesto",
    }}
    twitter={{
     cardType: "summary_large_image",
    }}
   />
   <div className="flex flex-col gap-16 md:gap-24">
    <div className="hidden sm:block">
     <Gallery />
    </div>
    <div className="-mb-8 sm:hidden animate-in">
     <Image
      src={avatar}
      width={48}
      height={48}
      alt="avatar of Vinicius Modesto"
     />
    </div>
    <div
     className="flex flex-col gap-16 animate-in sm:animate-none md:gap-24"
     style={{ "--index": 2 } as React.CSSProperties}
    >
     <Section heading="Sobre mim" headingAlignment="right">
      <div className="flex flex-col gap-6">
       <p>
        Olá! Sou Vinícius Modesto, desenvolvedor Front-end com experiência
        também em suporte técnico. Tenho {new Date().getFullYear() - 1996} anos,
        moro em Recife - PE, e atuo com tecnologia há{" "}
        {new Date().getFullYear() - 2014} anos, quando me formei na faculdade de
        S.I.
       </p>
       <p>
        Atualmente atuo na Zenvia como analista de suporte N2 de uma aplicação
        SAAS amplamente utilizada.
       </p>
       <p>
        Minha trajetória começou com suporte técnico e manutenção de
        computadores, mas logo migrei para o universo de suporte e
        desenvolvimento web.
       </p>
       <p>
        Trabalhei por mais de 3 anos na Sia.Com, onde atuei como analista de
        suporte e desenvolvedor. No suporte, atendia clientes, resolvia dúvidas
        e bugs, realizava testes de software, treinava usuários e novos
        colaboradores.
       </p>

       <p>
        Já como desenvolvedor, participei da criação de páginas web usando
        tecnologias como PHP,Laravel, VueJS e React, sempre buscando entregar
        projetos bonitos e eficientes em parceria com designers e outros devs.
        Meu foco está em criar soluções práticas e resolver problemas.
       </p>

       <p>
        Além disso, valorizo muito o trabalho em equipe e a troca de ideias para
        trazer o melhor resultado possível. Se quiser saber mais sobre mim, dá
        uma olhada no meu LinkedIn ou no meu GitHub!
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
        + de {new Date().getFullYear() - 2014} anos de experiência atuando com
        tecnologia, entre Hardware, atendimento ao cliente, suporte e
        Desenvolvimento front-end.
       </p>
       <Workplaces items={workplaces} />
      </div>
     </Section>
    </div>
   </div>
  </>
 );
}
