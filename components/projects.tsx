"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 1, 1])

  const projects = [
    {
      id: "mythos",
      title: "Mythos Manager Phone Application",
      description:
        "A campaign management system built with Flutter and Dart, featuring Firebase authentication and Firestore for real-time data synchronization.",
      technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Git"],
      details: [
        "Developed a campaign management system using Flutter and Dart.",
        "Integrated Firebase for secure user authentication and Firestore for real-time data synchronization.",
        "Utilized Git for version control and collaborative development.",
        "Implemented error handling mechanisms for various scenarios during image processing.",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "discord",
      title: "Music Discord Bot",
      description:
        "A Discord bot created in Python with music playback features via the YouTube API, utilizing asynchronous programming for efficient operation.",
      technologies: ["Python", "Discord API", "YouTube API", "Asynchronous Programming"],
      details: [
        "Created a Discord bot in Python with features like music playback via the YouTube API.",
        "Optimized functionality using asynchronous programming for efficient operation.",
        "Implemented user-friendly commands for controlling playback, skipping tracks, adjusting volume, and requesting songs.",
        "Employed asynchronous programming principles to optimize the bot's responsiveness during heavy usage.",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black -z-10" />

      {/* Floating elements */}
      <div className="absolute bottom-40 left-20 animate-float opacity-20">
        <div className="w-60 h-60 rounded-full bg-indigo-600 blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
        >
          A showcase of my recent development work, featuring web and mobile applications
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="mythos" className="w-full">
            <TabsList className="w-full mb-8 bg-black/40 backdrop-blur-sm border border-indigo-900/50 p-1">
              {projects.map((project) => (
                <TabsTrigger
                  key={project.id}
                  value={project.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  {project.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {projects.map((project) => (
              <TabsContent key={project.id} value={project.id}>
                <Card className="bg-black/40 border-indigo-900/50 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48 md:h-64 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl text-indigo-400">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <h4 className="text-lg font-semibold mb-2 text-white">Key Features</h4>
                    <ul className="space-y-2 list-disc list-inside text-gray-300 mb-6">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold mb-2 text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          className="bg-indigo-900/30 text-indigo-200 border-indigo-500/50 hover:bg-indigo-800/40"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  )
}
