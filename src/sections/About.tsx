import { ArrowRight } from "lucide-react";
import {
   siDiscord,
   siGithub,
   siOnlyfans,
   siReddit,
   siRoblox,
   siRobloxstudio,
   siSoundcloud,
   siSpotify,
   siX,
   siYoutube,
} from "simple-icons";

const getInTouch = [
   {
      icon: siGithub,
      link: "https://github.com/2B3",
      name: "GitHub",
      username: "2b3",
   },

   {
      icon: siRoblox,
      link: "https://www.roblox.com/users/1351897093/profile",
      name: "Roblox",
      username: "diegarro17",
   },

   {
      icon: siRobloxstudio,
      link: "https://devforum.roblox.com/u/diegarro17",
      name: "DevForum",
      username: "diegarro17",
   },

   {
      icon: siDiscord,
      link: "https://discordapp.com/users/1066063645768958135",
      name: "Discord",
      username: "fatunix",
   },

   {
      icon: siDiscord,
      link: "https://discord.gg/cJfGa5HSWa",
      name: "Discord Porfolio",
      username: "Jobless People Portfolio",
   },

   {
      icon: siReddit,
      link: "https://www.reddit.com/user/Diegarro15/",
      name: "Reddit",
      username: "Diegarro15",
   },

   {
      icon: siX,
      link: "https://x.com/Diegarro_15",
      name: "X",
      username: "Diegarro_15",
   },

   {
      icon: siYoutube,
      link: "https://www.youtube.com/@D_Bergman",
      name: "Youtube",
      username: "D_Bergman",
   },

   {
      icon: siOnlyfans,
      link: "https://only-fans.uk/2b3",
      name: "OnlyFans",
      username: "DBergman",
   },

   {
      icon: siSpotify,
      link: "https://open.spotify.com/user/31wn5gjb2yzatt7dihkrlztkkecy",
      name: "Spotify",
      username: "DB",
   },

   {
      icon: siSoundcloud,
      link: "https://soundcloud.com/kz1m46eafnig",
      name: "Soundcloud",
      username: "kz1m46eafnig",
   },
] as const;

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
               {getInTouch.map((area) => (
                  <a
                     href={area.link}
                     className="group flex items-center gap-4 p-4 rounded-lg hover:bg-background-card transition-colors duration-150"
                  >
                     <svg
                        className="w-6 h-6 text-foreground-dark"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d={area.icon.path} fill="currentColor" />
                     </svg>
                     <div className="flex flex-col sm:flex-row text-left justify-center sm:gap-2 min-w-0">
                        <span className="font-mono font-medium text-foreground">
                           {area.name}
                        </span>

                        <p className="text-sm text-foreground-muted truncate">
                           {area.username}
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
