"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import ThreeScene from "@/components/three-scene"
import ProjectCard from "@/components/project-card"
import SkillLogo from "@/components/skill-logo"
import ContactForm from "@/components/contact-form"
import Navbar from "@/components/navbar"
import FlyingLogos from "@/components/flying-logos"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-[#011a14] text-emerald-50">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ThreeScene />
        </div>

        <FlyingLogos />

        {/* Light effect overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-emerald-400/5 blur-[80px] animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-teal-500/5 blur-[60px] animate-pulse-slow animation-delay-2000"></div>
        </div>

        {/* Hero gradient overlay */}
        <div className="absolute inset-0 hero-gradient z-0"></div>

        <div className="z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="px-4 py-1 bg-emerald-900/50 rounded-full text-emerald-400 text-sm font-medium border border-emerald-800/50 backdrop-blur-sm glow-border">
              Frontend Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-4 text-gradient animate-text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hana Nemsi
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-8 rounded-full relative"
          >
            <div className="absolute inset-0 bg-emerald-400/50 blur-sm animate-pulse-slow"></div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-emerald-100/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build modern, responsive web applications with React, Next.js, and TypeScript. Creating beautiful digital
            experiences is my passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <Link
              href="https://github.com/Hananem"
              target="_blank"
              className="p-3 bg-gradient-to-br from-[#043d30] to-[#032922] rounded-full hover:shadow-emerald-700/20 hover:-translate-y-1 transition-all duration-300 border border-emerald-700/30 group light-effect animate-border-glow"
            >
              <Github className="w-6 h-6 text-emerald-300 group-hover:text-emerald-400 transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/hana-nemsi-27a18a148/"
              target="_blank"
              className="p-3 bg-gradient-to-br from-[#043d30] to-[#032922] rounded-full hover:shadow-emerald-700/20 hover:-translate-y-1 transition-all duration-300 border border-emerald-700/30 group light-effect animate-border-glow animation-delay-500"
            >
              <Linkedin className="w-6 h-6 text-emerald-300 group-hover:text-emerald-400 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:nemsihana@gmail.com"
              className="p-3 bg-gradient-to-br from-[#043d30] to-[#032922] rounded-full hover:shadow-emerald-700/20 hover:-translate-y-1 transition-all duration-300 border border-emerald-700/30 group light-effect animate-border-glow animation-delay-1000"
            >
              <Mail className="w-6 h-6 text-emerald-300 group-hover:text-emerald-400 transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={scrollToAbout}
        >
          <div className="p-3 bg-gradient-to-br from-[#043d30] to-[#032922] rounded-full hover:shadow-emerald-700/20 hover:-translate-y-1 transition-all duration-300 border border-emerald-700/30 animate-float light-effect">
            <ArrowDown className="w-6 h-6 text-emerald-300" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-[#032922] relative text-center">
  {/* Light effects for about section */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/20 overflow-hidden">
    <div className="absolute inset-0 animate-shimmer"></div>
  </div>
  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/20 overflow-hidden">
    <div className="absolute inset-0 animate-shimmer"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <motion.h2
      className="text-3xl md:text-4xl font-bold mb-2 text-gradient animate-text-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      About Me
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-12 rounded-full relative"
    >
      <div className="absolute inset-0 bg-emerald-400/50 blur-sm animate-pulse-slow"></div>
    </motion.div>

    {/* Centered Text */}
    <motion.div
      className="max-w-3xl mx-auto text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <p className="text-lg mb-6">
        I am a passionate Full Stack Developer with a strong foundation in HTML, 
        CSS, JavaScript, React, Next.js, and Tailwind CSS for building responsive 
        and user-friendly interfaces. I also have experience working with Node.js 
        and Express to develop full-stack applications.
      </p>
      <p className="text-lg mb-6">
        After college, my journey in web development began when I built my first website. 
        Since then, I have been honing my skills by working on full-stack projects, 
        creating responsive and user-friendly web applications.
      </p>
      <p className="text-lg">
        When I am not coding, you can find me hiking, reading sci-fi novels, or experimenting with new web
        technologies.
      </p>
    </motion.div>
  </div>
</section>



      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#011a14] relative">
        {/* Light effects for projects section */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/20 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/20 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] rounded-full bg-emerald-400/5 blur-[80px] animate-pulse-slow animation-delay-1500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2 text-center text-gradient animate-text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-12 rounded-full relative"
          >
            <div className="absolute inset-0 bg-emerald-400/50 blur-sm animate-pulse-slow"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Jobify"
              description="A modern job portal built with the MERN stack, connecting job seekers with employers. Features include job listings, user profiles, application management, and an admin dashboard with interactive charts."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%84%D9%82%D8%B7%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A7%D8%B4%D8%A9%202025-03-19%20170954.jpg-G4R6U3ZYQJLlOijLNOEDhJzGpXNA5B.jpeg"
              tags={["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Chart.js"]}
              link="https://jobify-mwbz.onrender.com"
              delay={0.1}
            />
            <ProjectCard
              title="Vidly"
              description="A modern video-sharing platform where users can upload videos, add thumbnails, and organize content into playlists. Features include comments, reactions, and a powerful search system."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%84%D9%82%D8%B7%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A7%D8%B4%D8%A9%202025-03-19%20171940.jpg-lWS7dsnYJpSW4h13ftKGnMkMKmEGRG.jpeg"
              tags={["React", "Node.js", "MongoDB", "Express", "Socket.io"]}
              link="https://vidly-eo5p.onrender.com"
              delay={0.15}
            />
            <ProjectCard
              title="MindHeaven"
              description="A blog application that allows users to write and share blogs using the Quill.js text editor. Features include comments, likes, profile photo uploads, and an admin dashboard for content management."
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%84%D9%82%D8%B7%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A7%D8%B4%D8%A9%202025-03-19%20172124.jpg-dbS5YPn1BuR57S4mDtfS4sYQWMtQvS.jpeg"
              tags={["React", "Node.js", "MongoDB", "Express", "Quill.js"]}
              link="https://mindheaven-apd7.onrender.com"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#032922] relative">
        {/* Light effects for skills section */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/20 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/20 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] animate-pulse-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2 text-center text-gradient animate-text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-12 rounded-full relative"
          >
            <div className="absolute inset-0 bg-emerald-400/50 blur-sm animate-pulse-slow"></div>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 max-w-5xl mx-auto">
            <SkillLogo name="JavaScript" delay={0.1} />
            <SkillLogo name="TypeScript" delay={0.15} />
            <SkillLogo name="React" delay={0.2} />
            <SkillLogo name="Next.js" delay={0.25} />
            <SkillLogo name="HTML" delay={0.3} />
            <SkillLogo name="CSS" delay={0.35} />
            <SkillLogo name="TailwindCSS" delay={0.38} />
            <SkillLogo name="Node.js" delay={0.4} />
            <SkillLogo name="MongoDB" delay={0.45} />
            <SkillLogo name="Git" delay={0.5} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#011a14] relative">
        {/* Light effects for contact section */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/20 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>
        <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] rounded-full bg-emerald-400/5 blur-[60px] animate-pulse-slow animation-delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2 text-center text-gradient animate-text-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-12 rounded-full relative"
          >
            <div className="absolute inset-0 bg-emerald-400/50 blur-sm animate-pulse-slow"></div>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#032922] text-center relative">
        {/* Light effect for footer */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/20 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <p className="mb-4">© {new Date().getFullYear()} Hana Nemsi. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              href="https://github.com/Hananem"
              target="_blank"
              className="text-emerald-400 hover:text-emerald-300 transition-colors glow-text-hover"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/hana-nemsi-27a18a148/"
              target="_blank"
              className="text-emerald-400 hover:text-emerald-300 transition-colors glow-text-hover"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:nemsihana@gmail.com"
              className="text-emerald-400 hover:text-emerald-300 transition-colors glow-text-hover"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}


