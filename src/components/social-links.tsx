import { Linkedin, Github, Mail } from "lucide-react";

export function SocialLinks() {
    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/nidhishree-talastha/",
            icon: Linkedin,
        },
        {
            name: "GitHub",
            href: "https://github.com/nidhitalastha",
            icon: Github,
        },
        {
            name: "Email",
            href: "mailto:nidhishreet01@gmail.com",
            icon: Mail,
        },
    ];

    return (
        <div className="flex lg:flex-col gap-4">
            {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                <a
                    key={link.name}
                    href={link.href}
                    {...(link.href.startsWith('http') && {
                        target: "_blank",
                        rel: "noopener noreferrer"
                    })}
                    className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                    aria-label={link.name}
                    >
                    <Icon className="h-5 w-5" />
                </a>
                );
            })}
        </div>
    );
}