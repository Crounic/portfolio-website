"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-black -z-10" />

      {/* Animated border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 background-animate" />

      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-sm text-gray-400">&copy; {currentYear} Shreif Abdalla. All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
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
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
            >
              <a href="https://www.linkedin.com/in/shreif-abdalla-b1370b245/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10"
            >
              <a href="mailto:sheriff.a2029@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
