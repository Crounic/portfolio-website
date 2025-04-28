"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseDown = () => setCursorVariant("click")
    const handleMouseUp = () => setCursorVariant("default")
    const handleMouseEnter = () => {
      const links = document.querySelectorAll("a, button")
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => setCursorVariant("hover"))
        link.addEventListener("mouseleave", () => setCursorVariant("default"))
      })
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("DOMContentLoaded", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("DOMContentLoaded", handleMouseEnter)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(147, 51, 234, 0.5)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(147, 51, 234, 0.8)",
      mixBlendMode: "difference" as const,
    },
    click: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: "rgba(147, 51, 234, 1)",
      mixBlendMode: "difference" as const,
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    />
  )
}
