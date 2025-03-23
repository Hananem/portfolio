"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

interface NavLink {
  name: string
  href: string
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "contact"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#011a14]/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      {/* Light effect at the bottom of navbar when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/20 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-all duration-300 relative group"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#home")
            }}
          >
            <span className="text-gradient glow-text">HN</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-emerald-100 hover:text-emerald-400 transition-all duration-300 relative group ${
                  activeSection === link.href.substring(1) ? "text-emerald-400" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400/50 blur-sm"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-emerald-100 hover:text-emerald-400 transition-colors p-2 rounded-full hover:bg-emerald-900/30 relative overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 rounded-full animate-pulse-slow opacity-0 hover:opacity-30 bg-emerald-500/20"></div>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-effect shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-emerald-100 hover:text-emerald-400 transition-colors py-3 border-b border-emerald-700/20 flex items-center relative overflow-hidden ${
                    activeSection === link.href.substring(1) ? "text-emerald-400" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                >
                  <span
                    className={`w-2 h-2 bg-emerald-500 rounded-full mr-3 ${
                      activeSection === link.href.substring(1) ? "animate-pulse-slow" : ""
                    }`}
                  ></span>
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <div className="absolute inset-0 bg-emerald-500/5"></div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

