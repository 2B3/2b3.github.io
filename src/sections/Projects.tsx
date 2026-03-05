import { ArrowUpRight } from "lucide-react";
import { MediaController, MediaPlayButton } from "media-chrome/react";
import { siGithub } from "simple-icons";
import ReactPlayer from "react-player";

import { ProjectList, TagList } from "../data/projects";

export const Projects = () => {
   return (
      <section
         id="projects"
         className="relative min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-8 py-20 animation-fade-in"
      >
         <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-foreground-dark text-xl tracking-wider uppercase animate-fade-in">
               Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
               Projects
            </h2>
         </div>

         <div className="grid md:grid-cols-2 gap-6">
            {ProjectList.map((project, index) => (
               <div
                  key={index}
                  className="rounded-lg overflow-hidden animate-fade-in md:row-span-2 bg-background-card border border-foreground-muted/50 hover:border-foreground-muted transition-all hover:scale-101 duration-300 hover:shadow-[0_0_20px_rgba(122,162,247,0.1)]"
               >
                  <MediaController className="w-full aspect-video object-cover relative group">
                     <ReactPlayer
                        className="w-full aspect-video object-cover"
                        poster={project.thumbnail}
                        src={project.video}
                        style={{ aspectRatio: "16 / 9" }}
                        playIcon={<></>}
                        controls={true}
                        width="100%"
                        height="100%"
                        light={
                           <div className="relative w-full aspect-video overflow-hidden">
                              <img
                                 src={project.thumbnail}
                                 alt={project.title}
                                 className="w-full h-full object-cover transition-all duration-300 group-hover:blur-xs group-hover:opacity-85 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 flex items-center justify-center space-x-2">
                                 <MediaPlayButton className="bg-background/35 rounded-full backdrop-blur-xs p-2 group-hover:visible hover:scale-110 invisible transition-all duration-200" />
                                 {project.github !== "#" && (
                                    <a href={project.github}>
                                       <svg
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          className="bg-background/35 w-10 h-10 rounded-full backdrop-blur-xs p-2 group-hover:scale-110 transition-all duration-200 text-white"
                                       >
                                          <path d={siGithub.path} />
                                       </svg>
                                    </a>
                                 )}
                              </div>
                           </div>
                        }
                     />
                  </MediaController>

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
                           <a href={TagList[tag.toLowerCase()]}>
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
