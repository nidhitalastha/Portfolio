export function TechStackIcons() {
    const technologies = [
        "Python",
        "Javascript",
        "Typescript",
        "React",
        "Node.js",
        "SQL",
        "GCP",
        "AWS",
        "RestAPI",
        "FastAPI",
        "Docker",
        "Kubernetes",
        "PyTorch",
        "Git",
        "Postman",
    ];

    return (
        <div className="flex flex-wrap justify-start gap-3 mt-8">
            {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                    {tech}
                </span>
            ))}
        </div>
    );
}