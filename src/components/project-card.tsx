"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  delay?: number
}

export default function ProjectCard({ title, description, image, tags, link, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#043d30] to-[#032922] rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-700/30 transition-all duration-500 hover:-translate-y-2 border border-emerald-700/30 group light-effect animate-border-glow"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-emerald-800/80 backdrop-blur-sm text-xs py-1 px-2 rounded-full text-emerald-100 font-medium glow-border">
          {tags[0]}
        </div>
      </div>
      <div className="p-6 relative">
        {/* Add subtle light effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-1000"></div>

        <h3 className="text-xl font-bold mb-2 text-emerald-300 group-hover:text-gradient transition-all duration-300 relative z-10">
          {title}
        </h3>
        <p className="text-emerald-100/80 mb-4 text-sm relative z-10">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 relative z-10">
          {tags.slice(1).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-emerald-800/50 text-emerald-300 px-2 py-1 rounded-full border border-emerald-700/30 glow-border-hover"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-all duration-300 group-hover:translate-x-2 relative z-10 glow-text-hover"
        >
          View Project <ExternalLink className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}

