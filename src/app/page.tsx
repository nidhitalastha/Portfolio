"use client"
import { Navbar } from "@/components/navbar";
import { Education } from "@/components/education";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
