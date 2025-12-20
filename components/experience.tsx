"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 1, 1])

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black -z-10" />

      {/* Floating elements */}
      <div className="absolute top-40 right-20 animate-float-slow opacity-20">
        <div className="w-40 h-40 rounded-full bg-blue-600 blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Work Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="mb-8 bg-black/40 border-blue-900/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-blue-400">Full Stack Software Engineer</CardTitle>
                  <p className="text-gray-300">BSCINTEC</p>
                  <p className="text-sm text-gray-400">Ottawa, ON</p>
                </div>
                <p className="text-sm text-gray-400">October 2025 - Present</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-300">
                <li>
                  Built backend services using both Node.js with TypeScript and Java with Spring Boot, strategically selecting each technology based on service requirements to optimize performance and scalability across a unified microservices architecture.
                </li>
                <li>
                  Implemented real-time features using WebSockets, including authenticated connections and message broadcasting.
                </li>
                <li>
                  Worked with PostgreSQL for schema design and migrations, focusing on data integrity and query performance.
                </li>
                <li>
                  Contributed to containerized development workflows with Docker and collaborated through Git-based reviews.
                </li>
                <li>
                  Designed and optimized database queries for efficient data retrieval and improved application performance.
                </li>
                <li>
                  Participated in code reviews, testing workflows, and deployment processes to ensure code quality and reliability.
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Node.js", "Java", "Spring Boot", "TypeScript", "PostgreSQL", "WebSockets", "Docker", "Git", "REST APIs", "Express", "Maven"].map(
                  (tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-blue-900/30 text-blue-200 border-blue-500/50 hover:bg-blue-800/40"
                    >
                      {tech}
                    </Badge>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-black/40 border-blue-900/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-blue-400">Software Developer Intern</CardTitle>
                  <p className="text-gray-300">Vierla</p>
                  <p className="text-sm text-gray-400">Remote - Toronto, ON</p>
                </div>
                <p className="text-sm text-gray-400">April 2025 - October 2025</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-300">
                <li>
                  Developed web application features using Next.js, React, and TypeScript with a focus on reusable components and consistent UI patterns.
                </li>
                <li>
                  Integrated frontend features with REST APIs and backend services, supporting end-to-end delivery of user stories.
                </li>
                <li>
                  Collaborated in Agile workflows (planning, reviews, iterations) and incorporated code review feedback.
                </li>
                <li>
                  Debugged and resolved front-end and integration issues to improve application stability and user experience.
                </li>
                <li>
                  Implemented responsive design patterns and accessibility best practices across multiple user-facing features.
                </li>
                <li>
                  Worked with product and design teams to translate mockups and requirements into functional React components.
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "REST APIs", "Agile", "Git", "UI/UX Integration"].map(
                  (tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-blue-900/30 text-blue-200 border-blue-500/50 hover:bg-blue-800/40"
                    >
                      {tech}
                    </Badge>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-black/40 border-blue-900/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-blue-400">Software Engineering Intern</CardTitle>
                  <p className="text-gray-300">Civonus Inc.</p>
                  <p className="text-sm text-gray-400">Remote - Charlottetown, PE</p>
                </div>
                <p className="text-sm text-gray-400">June 2024 - September 2024</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-300">
                <li>
                  Developed and maintained a web platform using the MERN stack with TypeScript and Material-UI.
                </li>
                <li>
                  Built and optimized backend API endpoints for secure data access and reliable request handling.
                </li>
                <li>
                  Wrote and tuned SQL queries for PostgreSQL-backed features and improved data access performance.
                </li>
                <li>
                  Implemented authentication and authorization mechanisms to protect sensitive user data.
                </li>
                <li>
                  Collaborated with backend and frontend teams to integrate APIs and ensure seamless data flow.
                </li>
                <li>
                  Participated in sprint planning and daily standups to track progress and communicate blockers.
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["MERN Stack", "React", "Node.js", "MongoDB", "PostgreSQL", "TypeScript", "Material-UI", "REST APIs"].map(
                  (tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-blue-900/30 text-blue-200 border-blue-500/50 hover:bg-blue-800/40"
                    >
                      {tech}
                    </Badge>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-black/40 border-blue-900/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-blue-400">IT Support Analyst</CardTitle>
                  <p className="text-gray-300">Silverado Gayrimenkul Real Estate</p>
                  <p className="text-sm text-gray-400">Istanbul, Turkey</p>
                </div>
                <p className="text-sm text-gray-400">September 2020 - December 2021</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-300">
                <li>
                  Resolved Windows, Office 365, VPN and VoIP incidents for 30+ users, sustaining a 95% same-day fix rate
                  and reducing Tier-3 escalations by 20%.
                </li>
                <li>
                  Streamlined device onboarding in partnership with HR and networking teams: automated imaging, domain
                  joins and BitLocker via MDT, cutting deployment turnaround 50%.
                </li>
                <li>
                  Managed AD user lifecycle and group policies; scripted bulk tasks in PowerShell, saving 4 hours
                  weekly.
                </li>
                <li>
                  Owned asset logistics – imaged, packaged and shipped 120+ laptop kits across three countries; updated
                  inventory in Jira Assets for audit accuracy.
                </li>
                <li>Authored 20+ Confluence KB articles adopted by Tier-1 agents, lowering repeat tickets 18%.</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Windows",
                  "Office 365",
                  "VPN",
                  "VoIP",
                  "Active Directory",
                  "PowerShell",
                  "MDT",
                  "BitLocker",
                  "Jira",
                  "Confluence",
                ].map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-blue-900/30 text-blue-200 border-blue-500/50 hover:bg-blue-800/40"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
