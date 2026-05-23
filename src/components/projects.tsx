'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '@/lib/projects';

export default function MyProjects() {
  const router = useRouter();

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: '#f5f0e8', fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div style={{
              background: '#3a5bbf',
              border: '4px solid #111',
              borderRadius: 16,
              boxShadow: '7px 7px 0 #111',
              display: 'inline-block',
            }}>
              {/* macOS dots */}
              <div style={{
                display: 'flex', gap: 7, marginBottom: 12,
                background: '#faf7ed', padding: '8px 10px',
                borderTopLeftRadius: 12, borderTopRightRadius: 12,
              }}>
                {['#e05252', '#e0a852', '#52c25a'].map((c, i) => (
                  <div key={i} style={{
                    width: 14, height: 14, borderRadius: '50%',
                    background: c, border: '2px solid #111',
                  }} />
                ))}
              </div>

              <h2 style={{
                fontFamily: "'boogaloo', sans-serif",
                fontSize: 'clamp(64px, 10vw, 96px)',
                fontWeight: 400,
                lineHeight: 0.95,
                color: '#f5a623',
                letterSpacing: 1,
                textTransform: 'lowercase',
                padding: '18px 40px 22px',
                margin: 0,
                WebkitTextStroke: '3px #000000',
                textShadow: `2px 2px 0 #111, 4px 4px 0 #111, 6px 6px 0 #111`,
              }}>
                my projects
              </h2>

              <span style={{
                fontFamily: "'boogaloo', sans-serif",
                fontSize: 13,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.85)',
                marginTop: 25,
                padding: '18px 40px 22px',
                display: 'block',
              }}>
                fullstack · frontend
              </span>
            </div>

            <p style={{
              fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.2em',
              color: '#fff', position: 'absolute', top: -18, right: -18,
              fontWeight: 700, background: '#c1705a', display: 'inline-block',
              padding: '6px 18px', borderRadius: 8, border: '3px solid #111',
              boxShadow: '3px 3px 0 #111', fontFamily: "'Boogaloo', sans-serif",
            }}>
              Selected Work
            </p>

            <div style={{
              position: 'absolute', bottom: -18, right: -18,
              background: '#6dbf8a', border: '3px solid #111',
              borderRadius: '50%', width: 44, height: 44,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '3px 3px 0 #111',
            }}>
              ✦
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ x: -3, y: -3, boxShadow: '9px 9px 0px #111', transition: { duration: 0.15 } }}
              whileTap={{ x: 3, y: 3, boxShadow: '3px 3px 0px #111', transition: { duration: 0.1 } }}
              onClick={() => router.push(`/projects/${project.slug}`)}
              className={`${project.gridClass} relative overflow-hidden cursor-pointer`}
              style={{
                background: project.bg, borderRadius: 4, padding: 24,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                border: '3px solid #111', boxShadow: '6px 6px 0px #111',
              }}
            >
              <div>
                <span style={{
                  fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.2em',
                  color: project.textColor, opacity: 0.65, fontWeight: 700,
                }}>
                  {project.category}
                </span>
                <h3 style={{
                  fontSize: 'clamp(18px, 2vw, 26px)', fontWeight: 900,
                  color: project.textColor, lineHeight: 1.1, marginTop: 6,
                  textTransform: 'uppercase',
                }}>
                  {project.title}
                </h3>
              </div>

              <p style={{
                fontSize: 12, color: project.textColor, opacity: 0.75,
                lineHeight: 1.5, marginTop: 10, maxWidth: 280,
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{
                    fontSize: 9, fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.1em', color: project.textColor, opacity: 0.5,
                    border: `1.5px solid ${project.textColor}`, padding: '2px 8px', borderRadius: 2,
                  }}>
                    {project.tag}
                  </span>
                  {project.isPrivate && (
                    <span style={{
                      fontSize: 9, fontWeight: 900, textTransform: 'uppercase',
                      letterSpacing: '0.1em', color: '#111', background: '#fef9c3',
                      border: '1.5px solid #111', padding: '2px 8px', borderRadius: 2,
                    }}>
                      🔒 Private
                    </span>
                  )}
                </div>

                <div style={{
                  width: 36, height: 36,
                  border: `2.5px solid ${project.textColor}`,
                  borderRadius: 2,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, color: project.textColor, fontWeight: 900,
                }}>
                  ↗
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}