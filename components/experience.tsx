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
                  <CardTitle className="text-blue-400">Full Stack Web Developer Intern</CardTitle>
                  <p className="text-gray-300">Civonus Inc.</p>
                <p className="text-sm text-gray-400">Stratford, PE, Canada</p>

                </div>
                <p className="text-sm text-gray-400">June 2024 - September 2024</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-gray-300">
                <li>
                  Developed and maintained an online policy-making platform using the MERN stack with TypeScript and
                  Material-UI.
                </li>
                <li>
                  Implemented user-friendly front-end components and responsive design principles for seamless user
                  interaction.
                </li>
                <li>Created and optimized back-end APIs for secure data management.</li>
                <li>Conducted research and integrated AI tools for enhanced analytics.</li>
                <li>Collaborated with cross-functional teams to deliver features aligned with user needs.</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["MERN Stack", "React", "Node.js", "MongoDB", "TypeScript", "Material-UI", "REST APIs", "AWS"].map(
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
                <p className="text-sm text-gray-400">September 2021 - November 2022</p>
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
