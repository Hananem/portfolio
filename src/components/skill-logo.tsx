"use client"

import { motion } from "framer-motion"

interface SkillLogoProps {
  name: string
  delay?: number
}

export default function SkillLogo({ name, delay = 0 }: SkillLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-3"
    >
      <div className="bg-gradient-to-br from-[#043d30] to-[#032922] p-5 rounded-xl w-24 h-24 flex items-center justify-center shadow-lg border border-emerald-700/30 group relative overflow-hidden light-effect animate-border-glow">
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>

        {/* Outer glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 animate-pulse-slow"></div>

        <div className="relative z-10">
          {name === "React" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-14 h-14">
              <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          )}

          {name === "Next.js" && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80" className="w-14 h-14">
              <path
                fill="#ffffff"
                d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149.6 0v12.7H94v20.4h44.3v12.6H94v21h55.5v12.6H80.5V0h69.1Zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6Zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7Z"
              />
              <path fill="#ffffff" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Z" />
            </svg>
          )}

          {name === "TypeScript" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-14 h-14">
              <path d="M0 200V0h400v400H0" fill="#3178c6" />
              <path
                d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
                fill="#fff"
              />
            </svg>
          )}

          {name === "JavaScript" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" className="w-14 h-14">
              <rect width="630" height="630" fill="#f7df1e" />
              <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
            </svg>
          )}

          {name === "HTML" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-14 h-14">
              <path d="M71,460 L30,0 481,0 440,460 255,512" fill="#e34f26" />
              <path d="M256,472 L405,431 440,37 256,37" fill="#ef652a" />
              <path
                d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"
                fill="#ebebeb"
              />
              <path d="M255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z" fill="#fff" />
            </svg>
          )}

          {name === "CSS" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-14 h-14">
              <path d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z" fill="#264de4" />
              <path d="M405.388 431.408l35.148-393.73H256v435.146z" fill="#2965f1" />
              <path
                d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
                fill="#ebebeb"
              />
              <path
                d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
                fill="#fff"
              />
            </svg>
          )}

          {name === "TailwindCSS" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 33" className="w-14 h-14">
              <g clipPath="url(#prefix__clip0)">
                <path
                  fill="#06B6D4"
                  fillRule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="prefix__clip0">
                  <path fill="#fff" d="M0 0h54v32.4H0z" />
                </clipPath>
              </defs>
            </svg>
          )}

          {name === "Node.js" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-14 h-14">
              <path
                fill="#8CC84B"
                d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"
              />
            </svg>
          )}

          {name === "MongoDB" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-14 h-14">
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#13AA52"
                  d="M127.998 0s-6.438 36.762 5.792 54.759c8.03 11.796 12.605 13.3 17.887 25.67 6.384 14.997 6.46 19.812 7.623 21.806 1.627 2.782 3.522 3.26 4.98 6.52 5.413 12.013 2.857 19.407 1.423 25.556-3.322 14.194-6.64 17.02-7.496 17.862-.74.732-2.69 2.653-5.012 4.854-4.102 3.88-5.83 3.74-5.83 3.74-.003 0-1.227 1.087-.686 2.71.227.697.688 1.315 1.362 1.847 0 0 2.226 2.016 5.236 2.887 4.716 1.364 5.905 3.638 6.66 5.804.36 1.013.583 2.36.523 3.864 0 0-.364 5.227-.727 6.48-.32 1.113-1.027 2.16-1.69 2.92-.17.19-.833.69-.923.883-.09.193-.18.386-.27.58-.09.193-.09.386-.09.58 0 .193.09.386.18.58.09.193.27.386.45.58.18.193.45.386.73.58.27.193.63.386.99.58.36.193.81.386 1.26.58.45.193.99.386 1.53.58.54.193 1.17.386 1.8.58.63.193 1.35.386 2.07.58.72.193 1.53.386 2.34.58.81.193 1.71.386 2.61.58.9.193 1.89.386 2.88.58.99.193 2.07.386 3.15.58 1.08.193 2.25.386 3.42.58 1.17.193 2.43.386 3.69.58 1.26.193 2.61.386 3.96.58 1.35.193 2.79.386 4.23.58 1.44.193 2.97.386 4.5.58 1.53.193 3.15.386 4.77.58 1.62.193 3.33.386 5.04.58 1.71.193 3.51.386 5.31.58 1.8.193 3.69.386 5.58.58 1.89.193 3.87.386 5.85.58 1.98.193 4.05.386 6.12.58 2.07.193 4.23.386 6.39.58 2.16.193 4.41.386 6.66.58 2.25.193 4.59.386 6.93.58 2.34.193 4.77.386 7.2.58 2.43.193 4.95.386 7.47.58 2.52.193 5.13.386 7.74.58 2.61.193 5.31.386 8.01.58 2.7.193 5.49.386 8.28.58 2.79.193 5.67.386 8.55.58 2.88.193 5.85.386 8.82.58 2.97.193 6.03.386 9.09.58 3.06.193 6.21.386 9.36.58 3.15.193 6.39.386 9.63.58 3.24.193 6.57.386 9.9.58 3.33.193 6.75.386 10.17.58 3.42.193 6.93.386 10.44.58 3.51.193 7.11.386 10.71.58 3.6.193 7.29.386 10.98.58 3.69.193 7.47.386 11.25.58 3.78.193 7.65.386 11.52.58 3.87.193 7.83.386 11.79.58 3.96.193 8.01.386 12.06.58 4.05.193 8.19.386 12.33.58 4.14.193 8.37.386 12.6.58 4.23.193 8.55.386 12.87.58 4.32.193 8.73.386 13.14.58 4.41.193 8.91.386 13.41.58 4.5.193 9.09.386 13.68.58 4.59.193 9.27.386 13.95.58 4.68.193 9.45.386 14.22.58 4.77.193 9.63.386 14.49.58 4.86.193 9.81.386 14.76.58 4.95.193 9.99.386 15.03.58 5.04.193 10.17.386 15.3.58 5.13.193 10.35.386 15.57.58 5.22.193 10.53.386 15.84.58 5.31.193 10.71.386 16.11.58 5.4.193 10.89.386 16.38.58 5.49.193 11.07.386 16.65.58 5.58.193 11.25.386 16.92.58 5.67.193 11.43.386 17.19.58 5.76.193 11.61.386 17.46.58 5.85.193 11.79.386 17.73.58 5.94.193 11.97.386 18.00.58 6.03.193 12.15.386 18.27.58 6.12.193 12.33.386 18.54.58 6.21.193 12.51.386 18.81.58 6.3.193 12.69.386 19.08.58 6.39.193 12.87.386 19.35.58 6.48.193 13.05.386 19.62.58 6.57.193 13.23.386 19.89.58 6.66.193 13.41.386 20.16.58 6.75.193 13.59.386 20.43.58 6.84.193 13.77.386 20.7.58 6.93.193 13.95.386 20.97.58 7.02.193 14.13.386 21.24.58 7.11.193 14.31.386 21.51.58 7.2.193 14.49.386 21.78.58 7.29.193 14.67.386 22.05.58 7.38.193 14.85.386 22.32.58 7.47.193 15.03.386 22.59.58 7.56.193 15.21.386 22.86.58 7.65"
                />
              </g>
            </svg>
          )}

          {name === "Git" && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" className="w-14 h-14">
              <path
                fill="#F05133"
                d="M90.156 41.965 50.036 1.848a5.918 5.918 0 0 0-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.034 7.034 0 0 1 1.67 7.275l10.187 10.184a7.028 7.028 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.05 7.05 0 0 1-9.965 0 7.044 7.044 0 0 1-1.528-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.06 7.06 0 0 1 2.304-1.539V33.926a7.049 7.049 0 0 1-2.304-1.543 7.05 7.05 0 0 1-1.516-7.7L29.242 14.272 1.732 41.777a5.925 5.925 0 0 0 0 8.371L41.852 90.27a5.925 5.925 0 0 0 8.368 0l39.934-39.934a5.925 5.925 0 0 0 .002-8.371"
              />
            </svg>
          )}
        </div>
      </div>
      <p className="text-sm text-emerald-300">{name}</p>
    </motion.div>
  )
}

