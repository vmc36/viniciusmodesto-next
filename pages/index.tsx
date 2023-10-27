import { GetStaticProps } from 'next';
import { allPosts, allProjects, Post, Project } from '.contentlayer/generated';
import { pick } from '@contentlayer/client';

import Section from 'components/Section';

import NaTrave from 'components/projects/NaTrave';
import ChaveNfe from 'components/projects/ChaveNfe';
import BorderRadius from 'components/projects/BorderRadius';
import CurrentWeather from 'components/projects/CurrentWeather';
import ToDoList from 'components/projects/ToDoList';

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
              Border radius generator
              <Section heading="2022">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-secondary">
                      {' '}
                      Foi um projeto simples, porém desenvolvido em comunidade junto a devsoutinholabs, onde o desafio foi lançado com o protótipo e as soluções
                      foram enviadas no repositório com a hashtag #devsoutinhochallange. O processo foi bem bacana, simples do ponto de vista técnico porém
                      interessante pela participação da comunidade.
                    </p>
                    <a href="https://border-radius-previewer-vmc36.vercel.app/">
                      <BorderRadius />
                    </a>
                  </div>
                </div>
              </Section>
            </li>
            <li>
              Current Weather
              <Section heading="2022">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-secondary">
                      {' '}
                      É uma aplicação que consome dados da API Climática (https://openweathermap.org/api) e exibe as informações baseadas na localização atual
                      do usuário. Já existia a ideia de pegar a temperatura inserindo a cidade manualmente, então, fiz um upgrade utilizando o recurso de
                      localização pelo browser e fazendo essa consulta de forma automática.
                    </p>
                    <a href="https://current-weather-api.vercel.app/">
                      <CurrentWeather />
                    </a>
                  </div>
                </div>
              </Section>
            </li>
            <li>
              To do List
              <Section heading="2022">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <p className="text-secondary">
                      {' '}
                      Uma aplicação simples para atender uma necessidade pessoal de criar uma lista de coisas a se fazer de forma direta e prática. A sua task é
                      criada e ao finalizar ela, pode se clicar para dizer que foi concluida ou exclui-la. Utiliza o localstorage do navegador para salvar as
                      tarefas.
                    </p>
                    <a href="https://todolist-iota-sooty.vercel.app" />
                    <ToDoList />
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
