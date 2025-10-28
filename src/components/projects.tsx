import { Github, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "AI-Powered Chatbot",
      description: "Intelligent conversational assistant using natural language processing",
      category: "NLP",
      technologies: ["Python", "TensorFlow", "Flask", "MongoDB"],
      timeframe: "Jan 2024 - Mar 2024",
      githubUrl: "https://github.com/nidhitalastha/project-1",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack online shopping application with payment integration",
      category: "Web App",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      timeframe: "Apr 2024 - Jun 2024",
      githubUrl: "https://github.com/nidhitalastha/project-2",
    },
    {
      id: 3,
      title: "Security Scanner",
      description: "Automated vulnerability detection and network security analysis tool",
      category: "Security",
      technologies: ["Python", "Nmap", "Docker", "FastAPI"],
      timeframe: "Jul 2024 - Sep 2024",
      githubUrl: "https://github.com/nidhitalastha/project-3",
    },
    {
      id: 4,
      title: "LLM Fine-tuning Framework",
      description: "Custom framework for training and deploying large language models",
      category: "LLMs",
      technologies: ["PyTorch", "HuggingFace", "AWS", "TypeScript"],
      timeframe: "Oct 2024 - Dec 2024",
      githubUrl: "https://github.com/nidhitalastha/project-4",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "NLP": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      "Web App": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
      "Security": "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
      "LLMs": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    };
    return colors[category] || "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20";
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-card py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projectsData.map((project) => (
            <Card 
              key={project.id} 
              className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group flex flex-col"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Category Badge */}
                <div className="mb-4">
                  <span 
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(project.category)}`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold font-sans text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Spacer to push bottom content down */}
                <div className="flex-1"></div>

                {/* Timeframe and GitHub Link */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{project.timeframe}</span>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="flex justify-end">
          <a
            href="https://github.com/nidhitalastha?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-semibold transition-colors flex items-center gap-2 group"
          >
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}