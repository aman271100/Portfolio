"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye, Folder, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
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

  const projects = [
    {
      title: "SHRDCabs – Shuttle Booking & Live Tracking Platform",
      description:
        "An end-to-end shuttle booking platform developed to simplify daily shuttle travel. The platform allows users to book rides, manage trips, purchase bus passes, make online payments, and track shuttles live.",
      image: "/shrdcabs.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Google Apps Script",
        "Google Sheets",
        "Razorpay",
      ],
      features: [
        "Online Shuttle Booking",
        "My Trips",
        "Bus Pass Management",
        "Razorpay Payments",
        "Live Shuttle Tracking",
        "Responsive Web Design",
      ],
      github: "",
      demo: "https://www.shrdcabs.com",
      status: "Live",
    },
    {
      title: "Intruder Alert System",
      description:
        "A real-time intrusion detection system built using Arduino UNO, ESP8266, and an ultrasonic sensor. The system sends distance data to Firebase and displays the information through a Flask-based web interface.",
      image: "/intruder-alert.png",
      technologies: [
        "Arduino UNO",
        "ESP8266",
        "Firebase",
        "Flask",
        "Python",
      ],
      features: [
        "Real-time Detection",
        "Firebase Integration",
        "Distance Monitoring",
        "Web Interface",
      ],
      github: "",
      demo: "",
      status: "Completed",
    },
    {
      title: "Multilingual Named Entity Recognition",
      description:
        "A Flask-based web application for multilingual text processing that automatically detects the input language and identifies named entities such as people, organizations, and locations.",
      image: "/ner-project.png",
      technologies: [
        "Python",
        "Flask",
        "spaCy",
        "langdetect",
        "HTML",
        "CSS",
      ],
      features: [
        "Language Detection",
        "Named Entity Recognition",
        "Multilingual Processing",
        "Web Interface",
      ],
      github: "",
      demo: "",
      status: "Completed",
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "animate-fade-in-up opacity-100"
              : "opacity-0"
          }`}
        >
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
                <Folder className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
              Projects showcasing my experience in web development,
              backend integration, payments, automation, and real-time systems.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${
                isVisible
                  ? `animate-fade-in-up opacity-100 animate-delay-${
                      (index + 1) * 200
                    }`
                  : "opacity-0"
              }`}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group bg-white/80 backdrop-blur-sm border-blue-100 hover:border-blue-200">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        project.status === "Completed"
                          ? "default"
                          : "secondary"
                      }
                      className={
                        project.status === "Completed"
                          ? "bg-green-500 hover:bg-green-600"
                          : project.status === "Live"
                            ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                            : "bg-blue-500 hover:bg-blue-600"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex-grow">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        Key Features:
                      </h4>

                      <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                        Technologies:
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-blue-200 text-blue-700 hover:bg-blue-50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons - only shown when links exist */}
                  {(project.github || project.demo) && (
                    <div className="flex gap-4 pt-6 border-t border-blue-100">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}

                      {project.demo && (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {project.status === "Live"
                              ? "Visit Website"
                              : "Demo"}
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* GitHub */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible
              ? "animate-fade-in-up opacity-100"
              : "opacity-0"
          }`}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            asChild
          >
            <a
              href="https://github.com/aman271100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Eye className="h-5 w-5 mr-2" />
              View GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
