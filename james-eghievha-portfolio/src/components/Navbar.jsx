import { useEffect } from "react";
import { cn } from "./lib/utils";
import { useState } from "react";
import { X, Menu } from "lucide-react"; // 2.1k (gzipped: 1.1k)


const navItems = [
    {name: 'Home', href: '#hero'},
    {name: 'About', href: '#about'},
    {name: 'Skills', href: '#skills'},
    {name: 'Projects', href: '#projects'},
    {name: 'Services', href: '#services'},
    {name: 'Contact', href: '#contact'},
    {name: 'Blog', href: '#blog'},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // This component renders a responsive navbar that changes its style based on scroll position.
    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5 bg-transparent"
        )}>
            <div className="container flex items-center justify-between px-3 sm:px-6">
                <a className="text-lg sm:text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">JamesEghievha </span>Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-4 lg:space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-base lg:text-lg text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav toggle */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* mobile nav menu */}
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-6 sm:space-y-8 text-lg sm:text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}