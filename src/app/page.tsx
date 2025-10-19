"use client"
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Navbar />
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl md:text-7xl font-bold font-sans">
            Hi, I'm Nidhi
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            Welcome to my portfolio
          </p>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-card">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold font-sans mb-8">About</h2>
          <p className="text-lg text-muted-foreground">
            About section content coming soon...
          </p>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold font-sans mb-8">Experience</h2>
          <p className="text-lg text-muted-foreground">
            Experience section content coming soon...
          </p>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-card">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold font-sans mb-8">Projects</h2>
          <p className="text-lg text-muted-foreground">
            Projects section content coming soon...
          </p>
        </div>
      </section>
    </div>
  );
}
