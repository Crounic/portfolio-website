"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative overflow-hidden"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "light" ? 0 : 180 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-purple-400" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
