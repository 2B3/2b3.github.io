import { ArrowRight } from "lucide-react";
import { SocialLinks } from "../data/about";

export const About = () => {
   return (
      <section
         id="about"
         className="relative min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-8 py-20 animate-fade-in"
      >
         <div className="text-center mx-auto max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
               About
            </h2>
            <div className="text-xl animate-fade-in text-foreground-dark space-y-4">
               <p>
                  Hi, I’m a curious and driven student fascinated by computer
                  science and everything Unix-like.
               </p>
               <p>
                  I love exploring programming from low-level languages like C
                  to scripting with Lua in Roblox, as well as JavaScript and
                  Python for web and automation projects. On top of coding, I
                  enjoy designing intuitive UIs that feel clean and functional.
                  I’m always experimenting, learning new tools, and building
                  things that challenge me to think creatively and efficiently.
               </p>
            </div>

            <h2 className="text-4xl md:text-3xl font-bold mt-4 mb-6 animation-delay-100 text-foreground-dark">
               Get in touch
            </h2>

            <div className="mt-6 space-y-1 max-w-4xl">
               {SocialLinks.map((social) => (
                  <a
                     href={social.link}
                     className="group flex items-center gap-4 p-4 rounded-lg hover:bg-background-card transition-colors duration-150"
                  >
                     <svg
                        className="w-6 h-6 text-foreground-dark"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d={social.icon.path} fill="currentColor" />
                     </svg>
                     <div className="flex flex-col sm:flex-row text-left justify-center sm:gap-2 min-w-0">
                        <span className="font-mono font-medium text-foreground">
                           {social.name}
                        </span>

                        <p className="text-sm text-foreground-muted truncate">
                           {social.username}
                        </p>
                     </div>
                     <ArrowRight className="text-foreground-muted ml-auto shrink-0 group-hover:translate-x-1 transition-transform duration-150" />
                  </a>
               ))}
            </div>
         </div>
      </section>
   );
};
