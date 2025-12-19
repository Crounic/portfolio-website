"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [text, setText] = useState("")
  const fullText = "Shreif Abdalla"
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    setMounted(true)

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="container px-4 py-16 md:py-24 relative z-10">
        <div className="absolute top-20 right-10 md:right-40 animate-float-slow">
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Floating planet"
              width={100}
              height={100}
              className="rounded-full bg-purple-600 opacity-80"
            />
          </motion.div>
        </div>

        <div className="absolute bottom-20 left-10 md:left-40 animate-float">
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Floating star"
              width={60}
              height={60}
              className="rounded-full bg-blue-500 opacity-70"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-purple-800 text-white"
          >
            Welcome to my Portfolio
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-purple-400 relative inline-block">
              {text}
              <motion.span
                aria-hidden
                className="inline-block ml-1"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                |
              </motion.span>
            </span>
          </h1>


          <motion.h2
            className="text-xl md:text-2xl mb-8 text-purple-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.p
            className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            Specializing in MERN stack development with expertise in React, Node.js, and TypeScript.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
            >
              <a href="https://github.com/Crounic" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
            >
              <a href="https://www.linkedin.com/in/shreif-abdalla-b1370b245/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
            >
              <a href="mailto:shreifabdalla877@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute right-0 md:right-20 bottom-0 md:bottom-10"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="relative w-[200px] md:w-[400px] h-[200px] md:h-[400px]">
              <Image
                src="/images/cat-astronaut-no-bg.png"
                alt="Cat Astronaut"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 animate-pulse"
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
