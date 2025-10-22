"use client"
import { TypeAnimation } from "react-type-animation";
import { SocialLinks } from "./social-links";
import { TechStackIcons } from "./tech-stack-icons";

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-between gap-8">
              <div className="flex-1 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold font-sans bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Hi, I&apos;m Nidhi
                </h1>

                <div className="mt-4 text-2xl md:text-3xl font-semibold text-foreground">
                  <TypeAnimation
                    sequence={[
                      "Full-Stack Developer",
                      2000,
                      "Security Engineer",
                      2000,
                      "AI/ML Enthusiast",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>

                <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Full-Stack Security Engineer with expertise spanning cloud infrastructure,
                  AI/ML, and web development. I build secure, scalable systems, from
                  adversarial ML models and VS Code extensions to chatbot solutions and data
                  pipelines. Passionate about combining security best practices with
                  cutting-edge technology to solve real-world problems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <button
                    onClick={() =>
                      document
                        .querySelector("#projects")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() =>
                      document
                        .querySelector("#experience")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    View Experience
                  </button>
                  <a
                    href="/resume.pdf"
                    download="Nidhishree_Talastha_Resume.pdf"
                    className="px-8 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors text-center"
                  >
                    Download Resume
                  </a>
                </div>

                <TechStackIcons />
              </div>

              <div className="hidden lg:flex flex-col gap-4">
                <SocialLinks />
              </div>
            </div>

            <div className="lg:hidden mt-8 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </section>
    );
}