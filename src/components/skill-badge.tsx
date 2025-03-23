"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  delay?: number
}

export default function SkillBadge({ name, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="bg-[#043d30] text-emerald-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#065446] transition-colors"
    >
      {name}
    </motion.div>
  )
}

