"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const response = await fetch("https://formspree.io/f/mgvavgow", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        const data = await response.json()
        setFormError(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setFormError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative z-10 glass-effect rounded-xl shadow-2xl border border-emerald-700/30 overflow-hidden"
    >
      {isSubmitted ? (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-emerald-500/20 rounded-full flex items-center justify-center animate-float">
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gradient">Message Sent!</h3>
          <p className="text-emerald-100/80 mb-8 text-lg">Thank you for reaching out. I'll get back to you soon.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-emerald-700/20 hover:translate-y-[-2px] font-medium"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <div className="p-8">
          <h3 className="text-xl font-bold mb-6 text-gradient">Send Me a Message</h3>

          {formError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-900/40 border border-red-800/50 p-4 rounded-lg text-white mb-6 flex items-start"
            >
              <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-red-400" />
              <p className="text-sm">{formError}</p>
            </motion.div>
          )}

          <form method="POST" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-emerald-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#021f19]/50 border border-emerald-800/50 rounded-lg focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 focus:outline-none transition-all duration-200 placeholder:text-emerald-100/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-emerald-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#021f19]/50 border border-emerald-800/50 rounded-lg focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 focus:outline-none transition-all duration-200 placeholder:text-emerald-100/30"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-emerald-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#021f19]/50 border border-emerald-800/50 rounded-lg focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 focus:outline-none transition-all duration-200 placeholder:text-emerald-100/30 resize-none"
                  placeholder="Your message..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-emerald-700/20 hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </span>
              )}
            </button>
          </form>
        </div>
      )}

      {/* Enhanced decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl z-[-1]"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl z-[-1]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl z-[-1] animate-pulse-glow"></div>
    </motion.div>
  )
}

