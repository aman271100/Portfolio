"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      company: "Tata Consultancy Services",
      position: "AEM Developer",
      period: "2023 - Present",
      location: "Gurugram, India",
      description: "Working as a Systems Engineer at Tata Consultancy Services (TCS), specializing in Adobe Experience Manager (AEM) development for global clients in the Hospitality (IHG) and Airline (Virgin Atlantic) domains. Responsible for full-stack AEM implementation, including backend OSGi development, headless architecture with GraphQL, and frontend integration using React and Angular.",
      achievements: [
    "Engineered a scalable headless implementation for the IHG global website using AEM GraphQL APIs to feed React components, enabling dynamic content delivery.",
    "Enhanced and maintained 20+ core AEM components for the Virgin Atlantic Cargo portal, ensuring 99.9% system availability for global operations.",
    "Developed custom OSGi services and Sling Servlets to consume external REST APIs for financial calculation tools, utilizing Sling Models to decouple business logic.",
    "Built complex Granite UI dialogs (Multifields) and leveraged the AEM Style System to create modular components, reducing content authoring time by 30%.",
    "Managed L2 technical support via ServiceNow, resolving critical production incidents within defined SLAs and orchestrating deployments using Azure DevOps."
  ],
  technologies: [
    "Adobe Experience Manager (AEM 6.5)",
    "Java (OSGi/Sling)",
    "React.js",
    "Angular",
    "GraphQL",
    "Azure DevOps",
    "ServiceNow",
    "HTML/CSS/JS"
  ]
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Building innovative solutions and driving success through technology and teamwork.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`transition-all duration-1000 ${
                isVisible ? `animate-fade-in-up opacity-100 animate-delay-${(index + 1) * 200}` : "opacity-0"
              }`}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">{exp.position}</h3>
                          <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
