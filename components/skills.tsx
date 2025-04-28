"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 1, 1])

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black -z-10" />

      {/* Floating elements */}
      <div className="absolute top-20 right-10 animate-float-slow opacity-20">
        <div className="w-40 h-40 rounded-full bg-purple-600 blur-3xl" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float opacity-20">
        <div className="w-60 h-60 rounded-full bg-blue-600 blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-black/40 border-purple-900/50 backdrop-blur-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Programming Languages",
                  skills: [
                    "Python",
                    "R",
                    "C#",
                    "Java",
                    "JavaScript",
                    "TypeScript",
                    "PHP",
                    "C",
                    "Dart",
                    "Kotlin",
                    "C++",
                  ],
                },
                {
                  name: "Web Development",
                  skills: ["HTML", "CSS", "React", "Node.js", "Express", "Material-UI"],
                },
                {
                  name: "Mobile Development",
                  skills: ["Flutter", "Kotlin"],
                },
                {
                  name: "Databases",
                  skills: ["SQL", "NoSQL", "MongoDB"],
                },
                {
                  name: "Tools & Platforms",
                  skills: ["Git", "Linux", "AWS"],
                },
                {
                  name: "Patterns & Practices",
                  skills: [
                    "Machine Learning",
                    "Object Oriented Programming",
                    "UX Design",
                    "Full-Stack Web Development",
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold mb-3 text-white">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-900/30 text-purple-200 rounded-full text-sm border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
