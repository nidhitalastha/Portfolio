export function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Masters",
      field: "Computer Science",
      university: "Purdue University",
      location: "Fort Wayne, IN",
      startDate: "August 2023", 
      endDate: "May 2025",
      gpa: "3.8/4.0", 
      coursework: "Ethical AI, Deep Learning, Crypto & Network Security, Algorithms Design & Analysis, Database Systems, Software Engineering, Low-code/No-code, Operating Systems",
      side: "right", 
    },
    {
      id: 2,
      degree: "Bachelors",
      field: "Computer Science and Engineering",
      university: "Visvesvaraya Technological University",
      location: "Bengaluru, India",
      startDate: "August 2017", 
      endDate: "August 2021",
      gpa: "3.3/4.0", 
      coursework: "Data Structures & Algorithms, Python Programming, C Programming, Crypto & Network Security, AI & Its Applications, Software Project Management",
      side: "left", 
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-16">
          Education
        </h2>

        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex gap-20">
            <div className="w-1 bg-border h-full"></div>
            <div className="w-1 bg-border h-full"></div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-22 flex flex-col justify-between py-8">
            <div className="h-1 bg-border w-full"></div>
            <div className="h-1 bg-border w-full"></div>
            <div className="h-1 bg-border w-full"></div>
            <div className="h-1 bg-border w-full"></div>
          </div>

          <div className="space-y-0">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex items-center ${
                  edu.side === "right" ? "justify-end" : "justify-start"
                } ${index === 1 ? "mt-12" : "mb-12"}`}
              >

                <div
                  className={`w-7/12 ${
                    edu.side === "right" ? "ml-auto pl-24" : "mr-auto pr-24"
                  }`}
                >
                  <div className="bg-card border border-border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className={`text-2xl font-bold font-sans text-foreground mb-1 ${edu.side === "right" ? "text-right" : ""}`}>
                      {edu.degree}
                    </h3>

                    <h4 className={`text-lg font-semibold text-primary mb-2 ${edu.side === "right" ? "text-right" : ""}`}>
                      {edu.field}
                    </h4>

                    <p className={`text-sm text-foreground mb-3 ${edu.side === "right" ? "text-right" : ""}`}>
                      {edu.university} | {edu.location}
                    </p>

                    <div className={`mb-3 ${edu.side === "right" ? "text-right" : ""}`}>
                      <h5 className="text-xs font-semibold text-foreground mb-1">
                        Coursework:
                      </h5>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {edu.coursework}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        {edu.startDate} - {edu.endDate}
                      </span>

                      <span className="text-sm font-semibold text-foreground">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-card border border-border rounded-lg p-4 shadow-lg"
            >
                <h3 className={`text-2xl font-bold font-sans text-foreground mb-1 ${edu.side === "right" ? "text-right" : ""}`}>
                {edu.degree}
                </h3>

                <h4 className={`text-lg font-semibold text-primary mb-2 ${edu.side === "right" ? "text-right" : ""}`}>
                {edu.field}
                </h4>

                <p className={`text-sm text-foreground mb-3 ${edu.side === "right" ? "text-right" : ""}`}>
                {edu.university} | {edu.location}
                </p>

                <div className={`mb-3 ${edu.side === "right" ? "text-right" : ""}`}>
                <h5 className="text-xs font-semibold text-foreground mb-1">
                    Coursework:
                </h5>
                <p className="text-xs text-muted-foreground line-clamp-2">
                    {edu.coursework}
                </p>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-border">
                <span className="text-xs text-muted-foreground">
                    {edu.startDate} - {edu.endDate}
                </span>

                <span className="text-sm font-semibold text-foreground">
                    GPA: {edu.gpa}
                </span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
