"use client"
import { Navbar } from "@/components/navbar";
import { Education } from "@/components/education";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
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
