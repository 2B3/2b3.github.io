export const ProjectList = [
   {
      title: "Sonner in roblox",
      description:
         "un toast para roblox que muestra notificaciones rapidas a los jugadores, con apilacion automatica.",
      video: "https://www.youtube.com/watch?v=YArwepWDhb0",
      thumbnail:
         "https://pbs.twimg.com/media/HCR2ifYXAAAJWQ2?format=jpg&name=small",
      tags: ["React-luau", "React-spring"],
      link: "https://github.com/2B3/sonner-roblox",
      github: "#",
   },
] as const;

export const TagList: { [key: string]: string } = {
   react: "https://react.com",
   nodejs: "https://nodejs.org",
   typescript: "https://typescriptlang.org/",
   ["react-luau"]: "https://react.luau.page/",
   ["react-spring"]: "https://www.chrisc.dev/roact-spring",
} as const;