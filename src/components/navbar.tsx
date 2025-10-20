"use client"
import { useState } from "react";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <Logo />
                </div>

                <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <button
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        className="text-foreground hover:text-primary relative group transition-colors"
                        >
                        {link.name}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                        </button>
                    ))}
                </div>
                </div>

                <div className="md:hidden">
                    <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-foreground hover:text-primary transition-colors"
                    >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                    </button>
                </div>
            </div>
        </div>

            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navLinks.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        className="block w-full text-left px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    >
                        {link.name}
                    </button>
                    ))}
                </div>
                </div>
            )}
        </nav>
    );
}