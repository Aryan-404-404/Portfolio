'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const QUICK_INFO = [
  { icon: '📍', text: 'Dehradun, India' },
  { icon: '💼', text: 'Open to opportunities' },
  { icon: '🌐', text: 'Remote friendly' },
  { icon: '🎓', text: 'BCA — DIT University' },
];

const INTERESTS = [
  { emoji: '🌲', label: 'Nature' },
  { emoji: '🎮', label: 'Gaming' },
  { emoji: '📺', label: 'Sci-Fi' },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-wrapper fade-section" ref={ref}>
      <div className="section-header">
        <span className="sec-num">01.</span>
        <span className="sec-title">About Me</span>
        <div className="sec-line" />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(220px, 280px) 1fr',
        gap: '64px',
        alignItems: 'start',
      }}
        className="about-grid"
      >
        {/* ── Left column ── */}
        <div>
          {/* Avatar */}
          <div style={{
            width: '200px', height: '200px', borderRadius: '14px',
            border: '1px solid var(--border)', overflow: 'hidden',
            marginBottom: '20px', background: 'var(--bg3)', position: 'relative',
          }}>
            <Image
              src="/DP.jpeg"
              alt="Aryan Sehgal"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Green shimmer overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, transparent 60%, rgba(74,222,128,0.08))',
            }} />
          </div>

          <p style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
            Aryan Sehgal
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)', marginBottom: '18px' }}>
            Full Stack Developer
          </p>

          {/* Quick info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {QUICK_INFO.map(({ icon, text }) => (
              <div key={text} style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span>{icon}</span>
                {text}
              </div>
            ))}
          </div>

          {/* Interests */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {INTERESTS.map(({ emoji, label }) => (
              <span key={label} style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                padding: '4px 10px', borderRadius: '20px',
                border: '1px solid var(--border2)', color: 'var(--faint)',
                background: 'var(--bg2)',
              }}>
                {emoji} {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right column ── */}
        <div>
          <h2 style={{
            fontSize: '26px', fontWeight: 700, color: 'var(--text)',
            letterSpacing: '-0.5px', marginBottom: '16px',
          }}>
            Passionate about building things that actually work.
          </h2>

          {[
            `I'm a final-year Computer Science student and Full Stack Developer based in Dehradun. I build web applications using the MERN stack with AI integration as my core specialty.`,
            `My focus is simple: writing clean, maintainable code and building systems that solve real problems. I enjoy the logic behind backend architecture and am fascinated by how AI can be woven into practical tools people use daily.`,
            `When I'm not coding, I'm usually off-grid in the mountains or learning new technologies to sharpen my craft. I believe in building in public and sharing knowledge.`,
          ].map((para, i) => (
            <p key={i} style={{
              fontSize: '14px', color: 'var(--muted)', lineHeight: 1.85,
              marginBottom: '16px',
            }}>
              {para}
            </p>
          ))}

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '28px' }}>
            {[
              {
                title: 'Experience',
                body: (
                  <>
                    <strong style={{ color: 'var(--text)' }}>Full Stack Dev (Indie)</strong><br />
                    2023 – Present · Personal Projects<br />
                    MERN + AI Integration
                  </>
                ),
              },
              {
                title: 'Education',
                body: (
                  <>
                    <strong style={{ color: 'var(--text)' }}>BCA · DIT University</strong><br />
                    2022 – 2026 · CGPA: 8.60<br />
                    Final Year Student
                  </>
                ),
              },
            ].map(({ title, body }) => (
              <div key={title} style={{
                background: 'var(--bg3)', border: '1px solid var(--border)',
                borderRadius: '10px', padding: '16px',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--green)',
                  letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px',
                }}>
                  {title}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .fade-section { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-section.visible { opacity: 1; transform: none; }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}