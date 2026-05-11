'use client';

import { useEffect, useRef } from 'react';

const SKILL_CATS = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vite'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'REST APIs'],
  },
  {
    label: 'AI / APIs',
    items: ['Groq API', 'Llama 3.3', 'Tool Calling', 'Gemini', 'Prompt Eng.', 'Agentic AI'],
  },
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Java', 'SQL'],
  },
  {
    label: 'Tools & DevOps',
    items: ['Git', 'Docker', 'Vercel', 'Postman', 'Render', 'Octokit'],
  },
  {
    label: 'Specialties',
    items: ['PDF Extraction', 'Web Workers', 'Chrome MV3', 'RBAC', 'Data Viz', 'Auth (JWT/BCrypt)'],
  },
];

const LC_STATS = [
  { label: 'Problems Solved', val: '250+' },
  { label: 'Contest Rating',  val: '~1632' },
  { label: 'SQL Problems',    val: '50+' },
  { label: 'Global Rank',     val: 'Top 19%' },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { ref.current?.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-wrapper fade-section" ref={ref}>
      <div className="section-header">
        <span className="sec-num">03.</span>
        <span className="sec-title">Tech Stack</span>
        <div className="sec-line" />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.6fr',
        gap: '52px',
        alignItems: 'start',
      }}
        className="skills-outer"
      >
        {/* ── Left: intro + LC card ── */}
        <div>
          <p style={{
            fontSize: '14px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '28px',
          }}>
            A comprehensive overview of my technical skills across the full stack — from
            crafting polished UIs to architecting scalable backends, with AI integration
            as the thread tying it all together.
          </p>

          {/* LeetCode card */}
          <div style={{
            background: 'var(--bg3)', border: '1px solid var(--border)',
            borderRadius: '10px', padding: '20px',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--green)',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Problem Solving
            </p>

            {LC_STATS.map(({ label, val }) => (
              <div key={label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '9px 0', borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--muted)' }}>
                  {label}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500, color: 'var(--green)' }}>
                  {val}
                </span>
              </div>
            ))}

            <div style={{ marginTop: '14px' }}>
              <a
                href="https://leetcode.com/u/aryan411770/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--green)' }}
              >
                View LeetCode Profile →
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: skill grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }} className="skills-grid">
          {SKILL_CATS.map(({ label, items }) => (
            <div key={label} style={{
              background: 'var(--bg3)', border: '1px solid var(--border)',
              borderRadius: '10px', padding: '16px',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--green)', marginBottom: '10px',
              }}>
                {label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {items.map(item => (
                  <span key={item} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    padding: '3px 8px', borderRadius: '4px',
                    border: '1px solid var(--border2)', color: 'var(--muted)', background: 'var(--bg2)',
                    transition: 'border-color 0.2s, color 0.2s', cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      e.target.style.borderColor = 'var(--green-border)';
                      e.target.style.color = 'var(--green)';
                    }}
                    onMouseLeave={e => {
                      e.target.style.borderColor = 'var(--border2)';
                      e.target.style.color = 'var(--muted)';
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .fade-section { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-section.visible { opacity: 1; transform: none; }
        @media (max-width: 900px) {
          .skills-outer { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}