import { Navbar } from "../layout/Navbar";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { About } from "../sections/About";

export const Home = () => {
   return (
      <div className="min-h-screen bg-background overflow-x-hidden">
         <Navbar />

         <Hero />
         <About />
         <Projects />
      </div>
   );
};
