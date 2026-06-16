type Project = {
  title: string;
  description: string;
  video: string;
  thumbnail: string;
  tags: string[];
  link: string;
  github?: string;
};

export const ProjectList = [
   {
      title: "Personal Portfolio",
      description:
         "A modern and uniquely styled template, designed to showcase my most creative work, Developed with cutting-edge web technologies, a responsive design, and a clean aesthetic, Using the Tokyo-Night color palette.",
      video: "#",
      thumbnail: "https://github.com/2B3/source/blob/main/Portfolio%20image.png?raw=true",
      tags: ["React", "Django", "Tailwind", "TypeScript"],
      link: "http://localhost:4000/",
      github: "https://github.com/2b3/2b3.github.io",
   },

   {
      title: "Browser in Roblox",
      description:
         "A React-Luau powered browser for Roblox with dynamic rendering, modular architecture, and advanced URL routing. Tabs use unique Base64 hash IDs for clean, reliable navigation.",
      video: "https://cdn.discordapp.com/attachments/1481294390310862909/1481294391732867102/2026-03-11_11-01-07.mp4?ex=6a320328&is=6a30b1a8&hm=3b40f6ef9b68f564adc036c10a40a378ee4ca3629a46c5a43738db36cc52372c&",
      thumbnail: "https://cdn.discordapp.com/attachments/1481294390310862909/1516395397881401354/image.png?ex=6a327cc4&is=6a312b44&hm=e365986823a60c134630d02025a9511f303e9df8ffb7ef40f0adf0948496249c&",
      tags: ["React luau", "React spring", "UI Labs", "Packet"],
      link: "https://www.roblox.com/games/137822191499518",
      github: "https://github.com/2B3/browser-luau",
   },
] as const satisfies Project[];

export const TagList: { [key: string]: string } = {
   // Web Libs
   react: "https://react.com",
   nodejs: "https://nodejs.org",
   django: "https://djangoproject.com",
   tailwind: "https://tailwindcss.com/",
   typescript: "https://typescriptlang.org/",

   // Roblox Libs
   ["packet"]: "https://devforum.roblox.com/t/packet-networking-library",
   ["react-spring"]: "https://www.chrisc.dev/roact-spring",
   ["react-luau"]: "https://react.luau.page/",
   ["ui-labs"]: "https://ui-labs.luau.page/",
} as const;