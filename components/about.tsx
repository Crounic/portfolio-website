"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 1, 1])

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black -z-10" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float-slow opacity-20">
        <div className="w-40 h-40 rounded-full bg-purple-600 blur-3xl" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20">
        <div className="w-60 h-60 rounded-full bg-blue-600 blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/20">
              <Image src="/shreif2.png" alt="Shreif Abdalla" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="bg-black/40 border-purple-900/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-purple-400">Education</h3>
                    <p className="text-lg font-medium text-white">Bachelor of Science, Computer Science</p>
                    <p className="text-gray-300">University of Prince Edward Island</p>
                    <p className="text-sm text-gray-400">September 2021 - May 2025</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-purple-400">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {["English", "Arabic", "Turkish"].map((language, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-900/30 text-purple-200 rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-purple-400">About</h3>
                    <p className="text-gray-300">
                      I am a Software Engineer with a strong foundation in full-stack web development and backend systems.
                      I specialize in building scalable applications using Java, TypeScript, React, and Node.js with expertise in PostgreSQL and cloud technologies.
                      Passionate about clean code, system design, and creating efficient solutions that solve real-world problems.
                      I thrive in collaborative Agile environments and continuously push my technical boundaries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
