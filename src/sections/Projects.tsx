import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const tagLinks: { [key: string]: string } = {
   react: "https://react.com",
   typescript: "https://typescriptlang.org/",
   nodejs: "https://nodejs.org",
   ["react-luau"]: "https://react.luau.page/",
   ["react-spring"]: "https://www.chrisc.dev/roact-spring",
} as const;

const projectsTable = [
   {
      title: "Sonner in roblox",
      description:
         "un toast para roblox que muestra notificaciones rapidas a los jugadores, con apilacion automatica.",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      thumbnail:
         "https://pbs.twimg.com/media/HCR2ifYXAAAJWQ2?format=jpg&name=small",
      tags: ["React-luau", "React-spring"],
      link: "https://github.com/2B3/sonner-roblox",
      github: "#",
   },
] as const;

export const Projects = () => {
   const [hovered, setHovered] = useState<number | null>(null);

   return (
      <section className="relative min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-8 py-20 animation-fade-in">
         <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-foreground-dark text-xl tracking-wider uppercase animate-fade-in">
               Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
               Projects
            </h2>
         </div>

         <div className="grid md:grid-cols-2 gap-6">
            {projectsTable.map((project, index) => (
               <div
                  key={index}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="rounded-lg overflow-hidden animate-fade-in md:row-span-2 bg-background-card border border-foreground-muted/50 hover:border-foreground-muted transition-all hover:scale-101 duration-300 hover:shadow-[0_0_20px_rgba(122,162,247,0.1)]"
               >
                  <video
                     className="w-full aspect-video object-cover"
                     controls={hovered == index}
                     poster={project.thumbnail}
                  >
                     <source src={project.video} type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>

                  <div className="p-6 space-y-4">
                     <div className="flex items-start text-foreground-dark hover:text-foreground">
                        <a
                           href={project.link}
                           className="transition-all hover:translate-x-0.5"
                        >
                           <h3 className="text-xl font-semibold transition-colors flex">
                              {project.title}
                              <ArrowUpRight className="w-4 h-4 transition-all" />
                           </h3>
                        </a>
                     </div>

                     <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIdx) => (
                           <a href={tagLinks[tag.toLowerCase()]}>
                              <span
                                 key={tagIdx}
                                 className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-foreground-muted/50 hover:border-foreground text-foreground-dark hover:border-primary/50 hover:text-foreground transition-all duration-300"
                              >
                                 {tag}
                              </span>
                           </a>
                        ))}
                     </div>

                     <p className="text-foreground-muted text-base">
                        {project.description}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};
