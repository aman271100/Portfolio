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
      period: "Jan 2024 - Present",
      location: "Gurugram, India",
      description:
        "Working as an AEM Developer at Tata Consultancy Services, developing and supporting enterprise web applications for global clients in the hospitality and airline domains. My work includes AEM component development, frontend development, application support, deployments, and production issue resolution.",

      projects: [
        {
          name: "Global Hospitality Client",
          period: "Aug 2025 - Present",
          achievements: [
            "Develop and support a large-scale corporate website using AEM, covering 6,000+ pages with 99.99% system uptime.",
            "Build and maintain reusable AEM components using Granite UI, Multifield, Selectors, and AEM Style System.",
            "Developed an AI-assisted FAQ solution using existing support data to answer common user queries.",
            "Handle application issues and production support requests through ServiceNow.",
          ],
        },
        {
          name: "International Airline Client",
          period: "Jan 2024 - Aug 2025",
          achievements: [
            "Developed and maintained 20+ AEM components for a global air cargo website.",
            "Worked on a ground staff application using Angular and a passenger loyalty tool using ReactJS.",
            "Managed CI/CD deployments and version control using Azure DevOps across multiple environments.",
            "Investigated and resolved bugs, application issues, and production support requests.",
          ],
        },
      ],

      technologies: [
        "Adobe Experience Manager (AEM 6.5)",
        "Java",
        "HTL (Sightly)",
        "Apache Sling",
        "Sling Models",
        "OSGi",
        "JCR",
        "Granite UI",
        "JavaScript",
        "React.js",
        "Angular",
        "Maven",
        "Git",
        "Azure DevOps",
        "ServiceNow",
        "HTML5",
        "CSS3",
      ],
    },
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "animate-fade-in-up opacity-100"
              : "opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Work Experience
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience building and supporting enterprise web applications
              across hospitality and airline domains.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`transition-all duration-1000 ${
                isVisible
                  ? `animate-fade-in-up opacity-100 animate-delay-${
                      (index + 1) * 200
                    }`
                  : "opacity-0"
              }`}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">

                    {/* Company Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-grow">

                      {/* Role Header */}
                      <div className="mb-5">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.position}
                        </h3>

                        <p className="text-lg text-primary font-medium mb-2">
                          {exp.company}
                        </p>

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

                      {/* Description */}
                      <p className="text-muted-foreground mb-7 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Client Projects */}
                      <div className="space-y-7 mb-8">
                        {exp.projects.map((project) => (
                          <div key={project.name}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                              <h4 className="font-semibold text-foreground">
                                {project.name}
                              </h4>

                              <span className="text-sm text-muted-foreground">
                                {project.period}
                              </span>
                            </div>

                            <ul className="grid md:grid-cols-2 gap-2">
                              {project.achievements.map((achievement) => (
                                <li
                                  key={achievement}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Technologies
                        </h4>

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
