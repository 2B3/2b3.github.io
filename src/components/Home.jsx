import { ThemeToggle } from "./ThemeToggle"
import { StarBackground } from "./StarBackground"
import { Navbar } from "./Navbar"
import { HomeSection } from "./HomeSection"
import { AboutSection } from "./AboutMe"

export const Home = () => {
    return (
        <div className="min-y-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle/>
            
            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HomeSection />
                <AboutSection />
            </main>

            {/* Footer */}
        </div>
    )
}