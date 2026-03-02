import { useTrail, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

type TrailProps = {
   children: React.ReactNode;
};

const description = [
   "I’m a scripter and UI designer specialized in Roblox (Luau).",
   "I focus on creating fast and scalable software.",
   "I enjoy building solutions that work.",
];

const Trail = ({ children }: TrailProps) => {
   const items = React.Children.toArray(children);
   const [show, setShow] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => setShow(true), 0);
      return () => clearTimeout(timer);
   }, []);

   const trail = useTrail(items.length, {
      opacity: show ? 1 : 0,
      y: show ? 0 : 40,
      config: { mass: 1, tension: 240, friction: 20 },
   });

   return (
      <div className="space-y-4 mt-8 absolute top-1/4">
         {trail.map((style, index) => (
            <animated.div
               key={index}
               style={{
                  opacity: style.opacity,
                  transform: style.y.to((y) => `translate3d(0,${y}px,0)`),
               }}
            >
               {items[index]}
            </animated.div>
         ))}
      </div>
   );
};

export const Hero = () => {
   return (
      <section className="relative min-h-screen flex flex-col justify-center max-w-3xl mx-auto px-8 py-20 animation-fade-in">
         <Trail>
            <h1 className="text-5xl md:text-7xl font-bold font-mono text-foreground leading-tight">
               Douberg
            </h1>

            <span className="text-2xl text-foreground-dark tracking-wide">
               Full-Stack Roblox scripter · Student
            </span>

            <div>
               {description.map((text: string) => (
                  <span className="text-xl text-comment whitespace-pre-line leading-relaxed max-w-2xl">
                     {text + "\n"}
                  </span>
               ))}
            </div>
         </Trail>

         <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
         >
            <a
               href="#about"
               className="flex flex-col items-center gap-2 text-muted-foreground text-foreground-muted transition-all group"
            >
               <ChevronDown className="w-7 h-7 animate-[bounce_1.5s_infinite]" />
            </a>
         </div>
      </section>
   );
};
