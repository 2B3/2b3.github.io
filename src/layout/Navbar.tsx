import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
   { href: "#about", label: "About" },
   { href: "#projects", label: "Projects" },
   // { href: "#experience", label: "Experience" },
   // { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);

      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header
         className={`top-0 left-0 right-0 transition-all duration-400 fixed z-50 px-5
            ${
               isScrolled
                  ? "py-3 border-b bg-background-dark/75 border-b-background-highlight backdrop-blur-xs"
                  : "bg-transparent py-4 border-transparent"
            }`}
      >
         <nav className="container mx-auto px-6 flex items-center justify-between">
            <a
               href="#"
               className="text-xl font-bold tracking-tight text-foreground-dark hover:text-blue transition-all duration-300"
            >
               2B3
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
               <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                  {navLinks.map((link, index) => (
                     <a
                        href={link.href}
                        key={index}
                        className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground text-foreground-dark rounded-full hover:bg-surface"
                     >
                        {link.label}
                     </a>
                  ))}
               </div>
            </div>

            {/* Mobile nav */}
            <button
               className="md:hidden p-2 text-foreground cursor-pointer"
               onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
         </nav>
      </header>
   );
};
