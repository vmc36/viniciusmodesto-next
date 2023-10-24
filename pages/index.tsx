import { GetStaticProps } from "next";
import { allPosts, allProjects, Post, Project } from ".contentlayer/generated";
import { pick } from "@contentlayer/client";

import Link from "components/Link";
import Section from "components/Section";

import BitrefillGraphic from "components/projects/NaTrave";
import TrailRoutesGraphic from "components/projects/TrailRoutesGraphic";
import TracklibGraphic from "components/projects/TracklibGraphic";

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
     <p
      className="text-secondary animate-in"
      style={{ "--index": 1 } as React.CSSProperties}
     >
      Front-end Developer
     </p>
    </div>
    <div
     className="flex flex-col gap-4 animate-in"
     style={{ "--index": 2 } as React.CSSProperties}
    >
     <h2>Projetos Selecionados</h2>
     <ul className="flex flex-col gap-16">
      {projects.map((project) => (
       <li key={project.title}>
        <Section heading={project.time}>
         <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
           <h3>{project.title}</h3>
           <p className="text-secondary">{project.description}</p>
           <Link href={`/project/${project.slug}`} underline>
            Read case study
           </Link>
          </div>
          <Link href={`/project/${project.slug}`}>
           {project.slug === "tracklib" && <TracklibGraphic />}
           {project.slug === "bitrefill" && <BitrefillGraphic />}
           {project.slug === "trailroutes" && <TrailRoutesGraphic />}
          </Link>
         </div>
        </Section>
       </li>
      ))}
     </ul>
    </div>
   </div>
  </>
 );
}

export const getStaticProps: GetStaticProps = async () => {
 const posts = allPosts
  .sort(
   (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  .filter((_, i) => i < 4)
  .map((post) => pick(post, ["slug", "title", "publishedAt", "image"]));

 const projects = allProjects.map((post) =>
  pick(post, ["slug", "title", "description", "time"])
 );

 return {
  props: { posts, projects },
 };
};
