export const ProjectList = [
   {
      title: "Portfolio",
      description:
         "My personal portfolio, a modern and uniquely styled template, designed to showcase my most creative work, Developed with cutting-edge web technologies, a responsive design, and a clean aesthetic, Using the Tokyo-Night color palette and a dedicated REST API.",
      video: "#",
      thumbnail:
         "https://github.com/2B3/source/blob/main/Portfolio%20image.png?raw=true",
      tags: ["React", "Django", "Tailwind", "TypeScript"],
      link: "https://github.com/2B3/sonner-roblox",
      github: "#",
   },
] as const;

export const TagList: { [key: string]: string } = {
   react: "https://react.com",
   nodejs: "https://nodejs.org",
   django: "https://djangoproject.com",
   tailwind: "https://tailwindcss.com/",
   typescript: "https://typescriptlang.org/",
   ["react-luau"]: "https://react.luau.page/",
   ["react-spring"]: "https://www.chrisc.dev/roact-spring",
} as const;