"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Add EmailJS imports
import emailjs from "@emailjs/browser"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 1, 1])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace these with your actual EmailJS service, template, and public key
      const result = await emailjs.sendForm(
        "service_dnwmlac", // e.g., 'service_abc123'
        "template_mtczki9", // e.g., 'template_xyz789'
        formRef.current!,
        "IJGLwvxD27AExJi6e", // e.g., 'user_abcdefg123456'
      )

      if (result.text === "OK") {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        // Reset form
        formRef.current?.reset()
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black -z-10" />

      {/* Floating elements */}
      <div className="absolute top-40 left-20 animate-float-slow opacity-20">
        <div className="w-40 h-40 rounded-full bg-blue-600 blur-3xl" />
      </div>
      <div className="absolute bottom-40 right-20 animate-float opacity-20">
        <div className="w-60 h-60 rounded-full bg-purple-600 blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-black/40 border-blue-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </CardTitle>
                <CardDescription className="text-gray-300">
                  <a href="mailto:Sharifabdelwadood@yahoo.com" className="hover:text-blue-400 transition-colors">
                    Sharifabdelwadood@yahoo.com
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-black/40 border-purple-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-400">
                  <Phone className="h-5 w-5 mr-2" />
                  Phone
                </CardTitle>
                <CardDescription className="text-gray-300">
                  <a href="tel:+19029781350" className="hover:text-purple-400 transition-colors">
                    (902) 978-1350
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-black/40 border-indigo-900/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
            <CardHeader>
              <CardTitle className="text-indigo-400">Send Me a Message</CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <Input
                      id="user_name"
                      name="user_name"
                      required
                      className="bg-black/50 border-indigo-900/50 focus:border-indigo-500 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input
                      id="user_email"
                      name="user_email"
                      type="email"
                      required
                      className="bg-black/50 border-indigo-900/50 focus:border-indigo-500 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    className="bg-black/50 border-indigo-900/50 focus:border-indigo-500 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="bg-black/50 border-indigo-900/50 focus:border-indigo-500 text-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
