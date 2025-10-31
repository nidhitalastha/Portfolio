"use client"
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
    const experienceData = [
    {
      id: 1,
      company: "The Commons XR",
      title: "FullStack Engineer",
      location: "San Diego, CA",
      startDate: "Aug 2025",
      endDate: "Present",
      responsibilities: [
        "Collaborate with cross-functional teams to build and optimize data pipelines and communication infrastructure across cloud-based services, enhancing reliability, scalability, and security.", 
        "Design automate testing and deployment workflows, while debugging and improving microservice-based architectures for greater performance and supportability.",
      ]
    },
    {
      id: 2,
      company: "Translation Commons",
      title: "WordPress Administrator",
      location: "Foster City, CA",
      startDate: "Jul 2025",
      endDate: "Aug 2025",
      responsibilities: [
        "Designed and developed a Media Resources page on WordPress featuring categorized video sections with quick-access navigation buttons, improving content discoverability by including a search bar for efficient user experience.",
      ]
    },
    {
      id: 3,
      company: "Purdue University",
      title: "Teaching Assistant",
      location: "Fort Wayne, IN",
      startDate: "Jan 2025",
      endDate: "May 2025",
      responsibilities: [
        "Actively monitoring and grading weekly assignments and 16 weekly group sprints for 40 students, ensuring alignment with Agile and project management principles.", 
        "Providing constructive feedback on rotating team-roles, improving team collaboration and sprint execution across 10+ project teams.",
      ]
    },
    {
      id: 4,
      company: "DaveAI",
      title: "Data Engineer",
      location: "Bengaluru, India",
      startDate: "Apr 2021",
      endDate: "Jul 2022",
      responsibilities: [
        "Delivered chatbot and kiosk solutions for nationalized banks and automotive clients, which reduced branch-level queries by 40%. Built database schemas for digital signage.",
        "Built a multilingual Covid-19 WhatsApp bot (500+ users), developed an image-tagging tool for number plate recognition Machine Learning Model, and mentored 10-15 interns with onboarding resources, cutting ramp-up time by 50%."
      ]
    },
    {
      id: 5,
      company: "Klaritree",
      title: "Security Engineer Intern",
      location: "Bengaluru, India",
      startDate: "Dec 2020",
      endDate: "Apr 2021",
      responsibilities: [
        "Configured access management for developers, improved secure remote access, and reduced unauthorized access incidents by 60%.",
        "Conducted network and system scans using Nmap across 3+ environments, identified and helped resolve 2 critical vulnerabilities to strengthen security posture."
      ]
    }
  ]

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
        setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="experience" className="flex items-center justify-center py-26 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-10">
          Experience
        </h2>
        
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {experienceData.map((exp, index) => (
              <CarouselItem 
                key={exp.id} 
                className="pl-2 md:pl-4 basis-[85%] md:basis-3/4 lg:basis-2/3"
                >
                <div className={`h-full transition-all duration-300 ${
                    current === index ? 'scale-105' : 'scale-95 opacity-50'
                }`}>
                    <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl group">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg text-foreground truncate">
                            {exp.company}
                          </h3>
                        </div>
                      </div>

                      <h4 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:from-accent group-hover:to-primary transition-all">
                        {exp.title}
                      </h4>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span className="flex-1">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex justify-center gap-2 mt-8">
        {experienceData.map((_, index) => (
            <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index 
                ? 'bg-primary w-8' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to experience ${index + 1}`}
            />
        ))}
        </div>
      </div>
    </section>
  );
}