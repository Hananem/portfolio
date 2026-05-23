'use client';

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '@/lib/projects';

function Starburst({ color, size = 60 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60">
      <polygon
        points="30,2 34,22 52,14 40,28 58,30 40,32 52,46 34,38 30,58 26,38 8,46 20,32 2,30 20,28 8,14 26,22"
        fill={color}
        stroke="#111"
        strokeWidth="2"
      />
    </svg>
  );
}



export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  const [activeGalleryIndexes, setActiveGalleryIndexes] = useState<Record<number, number>>({});
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  if (!project) return notFound();

  const gallery = project.gallery ?? [];
  const currentSection = gallery[activeSectionIndex];
  const activeImageIndex = activeGalleryIndexes[activeSectionIndex] ?? 0;

  return (
    <main style={{ minHeight: '100vh', background: '#f5f0e8', fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* ── HERO ── */}
      <div style={{
        background: project.bg,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderBottom: '5px solid #111',
      }}>
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{ position: 'absolute', top: 32, left: 40, zIndex: 10 }}
        >
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#111', color: '#fef9c3',
            border: '3px solid #111', borderRadius: 8,
            padding: '10px 20px', fontWeight: 900, fontSize: 13,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            textDecoration: 'none', boxShadow: '4px 4px 0 rgba(0,0,0,0.3)',
          }}>
            ← Back
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(64px, 12vw, 180px)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 0.9,
            color: '#fff',
            letterSpacing: '-0.04em',
            textAlign: 'center',
            textShadow: '8px 8px 0 rgba(0,0,0,0.2)',
            padding: '0 40px',
            margin: 0,
          }}
        >
          {project.title}
        </motion.h1>
      </div>

      {/* ── Grid bg ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* ── Two columns: learnings + details ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 20, marginBottom: 24 }}
          className="project-cols"
        >
          <div style={{ background: project.bg, border: '4px solid #111', borderRadius: 8, padding: '24px', boxShadow: '6px 6px 0 #111' }}>
            <h3 style={{
              fontSize: 12, fontWeight: 900, textTransform: 'uppercase',
              letterSpacing: '0.2em', color: '#111', background: '#fef9c3',
              border: '3px solid #111', borderRadius: 4, padding: '6px 12px',
              display: 'inline-block', marginBottom: 18, boxShadow: '3px 3px 0 #111',
            }}>
              What I Learned
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {project.learnings.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fef9c3', border: '2px solid #111', marginTop: 5, flexShrink: 0 }} />
                  <p style={{ fontSize: 13, color: '#fff', lineHeight: 1.6, fontWeight: 600, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: '#fff', border: '4px solid #111', borderRadius: 8, padding: '20px 24px', boxShadow: '6px 6px 0 #111', flex: 1 }}>
              <p style={{ fontSize: 12, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#111', marginBottom: 10, borderBottom: '2px solid #111', paddingBottom: 8 }}>
                About
              </p>
              <p style={{ fontSize: 14, color: '#333', lineHeight: 1.75, margin: 0 }}>{project.details}</p>
            </div>
            <div style={{
              background: '#111', border: '4px solid #111', borderRadius: 8,
              padding: '16px 24px', boxShadow: '6px 6px 0 #555',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>Status</p>
                <p style={{ fontSize: 18, fontWeight: 900, color: '#fef9c3', margin: 0 }}>{project.tag}</p>
              </div>
              <Starburst color={project.bg} size={42} />
            </div>
          </div>
        </motion.div>

        {/* ── CTA bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginBottom: 40 }}
        >
          {project.isPrivate ? (
            <div style={{
              background: '#111', border: '4px solid #111', borderRadius: 8,
              padding: '20px 24px', boxShadow: '6px 6px 0 #111',
              display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <div style={{ fontSize: 32, background: '#fef9c3', width: 52, height: 52, border: '3px solid #fef9c3', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔒</div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fef9c3', marginBottom: 4 }}>Private Project</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, margin: 0, maxWidth: 500 }}>
                  This project was built for a real client under a confidentiality agreement. Source code and live demo are not publicly available.
                </p>
              </div>
            </div>
          ) : (
            <div style={{
              background: project.accent, border: '4px solid #111', borderRadius: 8,
              padding: '20px 24px', boxShadow: '6px 6px 0 #111',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
            }}>
              <p style={{ fontSize: 20, fontWeight: 900, color: '#fff', textShadow: '2px 2px 0 #111', margin: 0 }}>
                {project.liveUrl || 'Coming Soon'}
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ background: '#fef9c3', color: '#111', border: '3px solid #111', borderRadius: 6, padding: '12px 22px', fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', boxShadow: '4px 4px 0 #111', textDecoration: 'none' }}>View Live ↗</a>
                )}
                {project.githubUrl.frontend && (
                  <a href={project.githubUrl.frontend} target="_blank" rel="noopener noreferrer" style={{ background: '#111', color: '#fef9c3', border: '3px solid #111', borderRadius: 6, padding: '12px 22px', fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', boxShadow: '4px 4px 0 #555', textDecoration: 'none' }}>Frontend ↗</a>
                )}
                {project.githubUrl.backend && (
                  <a href={project.githubUrl.backend} target="_blank" rel="noopener noreferrer" style={{ background: '#27272a', color: '#fef9c3', border: '3px solid #111', borderRadius: 6, padding: '12px 22px', fontWeight: 900, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', boxShadow: '4px 4px 0 #555', textDecoration: 'none' }}>Backend ↗</a>
                )}
              </div>
            </div>
          )}
        </motion.div>

        {/* ── Gallery ── */}
        {gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
              {gallery.map((section, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveSectionIndex(i); setActiveGalleryIndexes((prev) => ({ ...prev, [i]: prev[i] ?? 0 })); }}
                  style={{
                    background: activeSectionIndex === i ? '#111' : '#fff',
                    color: activeSectionIndex === i ? '#fef9c3' : '#111',
                    border: '3px solid #111', borderRadius: 8, padding: '8px 18px',
                    fontWeight: 900, fontSize: 12, textTransform: 'uppercase',
                    letterSpacing: '0.08em', cursor: 'pointer',
                    boxShadow: activeSectionIndex === i ? '4px 4px 0 #555' : '3px 3px 0 #111',
                    transition: 'all 0.15s',
                  }}
                >
                  {i + 1}. {section.title}
                </button>
              ))}
            </div>

            {currentSection && (
              <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 20, alignItems: 'stretch' }} className="gallery-cols">
                <div>
                  <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', borderRadius: 8, border: '4px solid #111', background: '#ddd', marginBottom: 12, boxShadow: '6px 6px 0 #111' }}>
                    <img src={currentSection.images[activeImageIndex]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button onClick={() => setActiveGalleryIndexes((prev) => ({ ...prev, [activeSectionIndex]: activeImageIndex === 0 ? currentSection.images.length - 1 : activeImageIndex - 1 }))}
                      style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: '50%', border: '3px solid #111', background: '#fff', fontWeight: 900, fontSize: 18, cursor: 'pointer', boxShadow: '3px 3px 0 #111' }}>←</button>
                    <button onClick={() => setActiveGalleryIndexes((prev) => ({ ...prev, [activeSectionIndex]: activeImageIndex === currentSection.images.length - 1 ? 0 : activeImageIndex + 1 }))}
                      style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: '50%', border: '3px solid #111', background: '#fff', fontWeight: 900, fontSize: 18, cursor: 'pointer', boxShadow: '3px 3px 0 #111' }}>→</button>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                    {currentSection.images.map((img, imgIndex) => (
                      <button key={imgIndex} onClick={() => setActiveGalleryIndexes((prev) => ({ ...prev, [activeSectionIndex]: imgIndex }))}
                        style={{ border: activeImageIndex === imgIndex ? `4px solid ${project.accent}` : '3px solid #111', borderRadius: 8, overflow: 'hidden', aspectRatio: '1 / 1', cursor: 'pointer', padding: 0, background: '#fff', boxShadow: activeImageIndex === imgIndex ? '4px 4px 0 #111' : 'none' }}>
                        <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ background: project.bg, border: '4px solid #111', borderRadius: 8, padding: 24, boxShadow: '6px 6px 0 #111', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#fff' }}>
                  <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 10 }}>Showcase Details</p>
                  <h3 style={{ fontSize: 'clamp(22px, 3vw, 36px)', lineHeight: 1, fontWeight: 900, marginBottom: 20, textTransform: 'uppercase' }}>{currentSection.title}</h3>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {currentSection.text.map((item, i) => (
                      <li key={i} style={{ fontSize: 14, lineHeight: 1.9, marginBottom: 6, color: '#fff', listStyle: 'disc' }}>{item}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 28, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {gallery.map((_, i) => (
                      <button key={i} onClick={() => setActiveSectionIndex(i)}
                        style={{ width: i === activeSectionIndex ? 40 : 14, height: 14, borderRadius: 999, background: i === activeSectionIndex ? '#fef9c3' : 'rgba(255,255,255,0.3)', border: '2px solid #111', cursor: 'pointer', padding: 0, transition: 'all 0.25s' }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-cols { grid-template-columns: 1fr !important; }
          .gallery-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}