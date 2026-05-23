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

        {/* Grid System - Match layout of image_dc475d.jpg using 12 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {projects.map((project, index) => {
            // التوزيع الجغرافي للبطاقات بناءً على ترتيبها في مصفوفة البيانات لمحاكاة الصورة تماماً
            let gridSpanClass = "md:col-span-4"; // الافتراضي
            
            if (index === 0 || index === 1) {
              // الصف الأول: بطاقتين كبيرتين متساويتين في الحجم بالنصف (50% / 50%)
              gridSpanClass = "md:col-span-6";
            } else if (index === 2) {
              // الصف الثاني: البطاقة اليسرى العريضة (حوالي 58%)
              gridSpanClass = "md:col-span-7";
            } else if (index === 3) {
              // الصف الثاني: البطاقة اليمنى المكملة (حوالي 42%)
              gridSpanClass = "md:col-span-5";
            } else {
              // الصف الثالث: 3 بطاقات مقسمة بالتساوي (4 أعمدة لكل واحدة)
              gridSpanClass = "md:col-span-4";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ x: -3, y: -3, boxShadow: '9px 9px 0px #111', transition: { duration: 0.15 } }}
                whileTap={{ x: 3, y: 3, boxShadow: '3px 3px 0px #111', transition: { duration: 0.1 } }}
                onClick={() => router.push(`/projects/${project.slug}`)}
                className={`${gridSpanClass} relative overflow-hidden cursor-pointer p-6 md:p-8 min-h-[220px] md:min-h-[260px]`}
                style={{
                  background: project.bg, 
                  borderRadius: 24, // حواف دائرية واضحة ومطابقة للصورة
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  border: '3px solid #111', 
                  boxShadow: '6px 6px 0px #111',
                }}
              >
                {/* الجزء العلوي: يضم العنوان الرئيسي الضخم والتاغ الفرعي */}
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                    <h3 style={{
                      fontSize: 'clamp(28px, 3.5vw, 48px)', // خط ضخم ومميز كالأرقام في الصورة
                      fontWeight: 900,
                      color: project.textColor, 
                      lineHeight: 1, 
                      marginTop: 2,
                      textTransform: 'uppercase',
                    }}>
                      {project.title}
                    </h3>
                    <span style={{
                      fontSize: 11, 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.15em',
                      color: project.textColor, 
                      opacity: 0.8, 
                      fontWeight: 700,
                      background: 'rgba(0, 0, 0, 0.15)', // كبسولة خلفية صغيرة للنص الفرعي
                      padding: '3px 10px',
                      borderRadius: 20,
                      width: 'fit-content'
                    }}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* الوصف القصير في المنتصف */}
                <p style={{
                  fontSize: 14, 
                  color: project.textColor, 
                  opacity: 0.85,
                  lineHeight: 1.4, 
                  marginTop: 14, 
                  marginBottom: 14,
                  maxWidth: '85%',
                }}>
                  {project.description}
                </p>

                {/* الجزء السفلي: التاجات والأيقونة العائمة في الزاوية */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{
                      fontSize: 10, 
                      fontWeight: 700, 
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em', 
                      color: project.textColor,
                      border: `2px solid ${project.textColor}`, 
                      padding: '4px 12px', 
                      borderRadius: 8,
                    }}>
                      {project.tag}
                    </span>
                    {project.isPrivate && (
                      <span style={{
                        fontSize: 10, 
                        fontWeight: 900, 
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em', 
                        color: '#111', 
                        background: '#fef9c3',
                        border: '2px solid #111', 
                        padding: '4px 12px', 
                        borderRadius: 8,
                      }}>
                        🔒 Private
                      </span>
                    )}
                  </div>

                  {/* أيقونة السهم المستوحاة من تموضع اللوجوهات أسفل بطاقات الصورة */}
                  <div style={{
                    width: 40, height: 40,
                    border: `2.5px solid ${project.textColor}`,
                    borderRadius: '50%', // دائرية لتجانس الأيقونات بالأسفل
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, color: project.textColor, fontWeight: 900,
                    background: 'rgba(255, 255, 255, 0.1)'
                  }}>
                    ↗
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}