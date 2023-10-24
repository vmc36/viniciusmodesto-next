import { GetStaticProps } from 'next';
import { allPosts, allProjects, Post, Project } from '.contentlayer/generated';
import { pick } from '@contentlayer/client';

import Section from 'components/Section';

import NaTrave from 'components/projects/NaTrave';
import ChaveNfe from 'components/projects/ChaveNfe';

type HomeProps = {
  posts: Post[];
  projects: Project[];
};

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <div className="flex flex-col gap-20 md:gap-28">
        <div>
          <h1 className="animate-in">Vinicius Modesto</h1>
          <p className="text-secondary animate-in" style={{ '--index': 1 } as React.CSSProperties}>
            Front-end Developer
          </p>
        </div>
        <div className="flex flex-col gap-4 animate-in" style={{ '--index': 2 } as React.CSSProperties}>
          <h2>Projetos Selecionados</h2>
          <ul className="flex flex-col gap-16">
            <li>
              Na Trave
              <Section heading="2022">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <h3>Na Trave - Catar 2022</h3>
                    <p className="text-secondary">
                      {' '}
                      Esse projeto foi um bolão para a copa de 2022 no catar, onde havia login, ranking e placares para as partidas. Foi um projeto full stack,
                      onde adorei demais o processo. Ferramentas utilizadas: react, prisma, KoaJS, Planetscale, tailwind e vite.
                    </p>
                    <a href="https://pickem-worldcup.vercel.app/">
                      <NaTrave />
                    </a>
                  </div>
                </div>
              </Section>
            </li>
            <li>
              Consulta NFe
              <Section heading="2023">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-secondary">
                      {' '}
                      Desenvolvi essa aplicação que retira as informações a partir da chave da nota fiscal e mostra na tela, também fazendo uma consulta a
                      empresa emissora via API. Esse foi um projeto onde eu como trabalhei como analista de suporte, pude unir a necessidade de conseguir uma
                      informação fiscal de maneira mais fácil a partir da chave da nota.
                    </p>
                    <a href="https://chavenfe.vercel.app/">
                      <ChaveNfe />
                    </a>
                  </div>
                </div>
              </Section>
            </li>
            <li>
              Na Trave
              <Section heading="2022">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-secondary">
                      {' '}
                      Esse projeto foi um bolão para a copa de 2022 no catar, onde havia login, ranking e placares para as partidas. Foi um projeto full stack,
                      onde adorei demais o processo. Ferramentas utilizadas: react, prisma, KoaJS, Planetscale, tailwind e vite.
                    </p>
                    <a href="https://pickem-worldcup.vercel.app/">
                      <NaTrave />
                    </a>
                  </div>
                </div>
              </Section>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .filter((_, i) => i < 4)
    .map((post) => pick(post, ['slug', 'title', 'publishedAt', 'image']));

  const projects = allProjects.map((post) => pick(post, ['slug', 'title', 'description', 'time']));

  return {
    props: { posts, projects },
  };
};
