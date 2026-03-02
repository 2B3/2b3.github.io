import { Navbar } from "../layout/Navbar";
import { Hero } from "../sections/Hero";
import { Projects } from "../sections/Projects";
import { About } from "../sections/About";
// import { TopographyBackground } from "../components/TopographyBackground";

export const Home = () => {
   return (
      <div className="min-h-screen bg-background overflow-x-hidden">
         {/* <TopographyBackground /> */}
         <Navbar />

         <main>
            <Hero />
            <About />
            <Projects />
         </main>
      </div>
   );
};
