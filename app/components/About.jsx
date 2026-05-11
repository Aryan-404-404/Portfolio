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

const CARDS = [
  {
    title: 'Internship',
    body: (
      <>
        <strong style={{ color: 'var(--text)' }}>Frontend Developer Intern</strong><br />
        The Tann Mann Gaadi · Remote<br />
        Feb 2026 – Present
      </>
    ),
  },
  {
    title: 'Projects',
    body: (
      <>
        <strong style={{ color: 'var(--text)' }}>Indie Builder</strong><br />
        2024 – Present<br />
        MERN · Groq AI · npm Published
      </>
    ),
  },
  {
    title: 'Education',
    body: (
      <>
        <strong style={{ color: 'var(--text)' }}>BCA · DIT University</strong><br />
        2023 – 2026 · CGPA: 8.60<br />
        Final Year Student
      </>
    ),
  },
];

const STORY = [
  `I'm a final-year BCA student who builds full-stack applications using the MERN stack with Groq-powered AI — things people can actually open in a browser or install from npm.`,
  `Currently interning as a Frontend Developer at The Tann Mann Gaadi, building production UI components from Figma designs. Outside of that, I've published a CLI tool on npm, built a Chrome extension with AI form-filling, and wired up MongoDB-backed conversation memory into a finance app.`,
  `I care about the backend logic as much as the frontend craft. When I'm not coding, I'm somewhere in the mountains with no WiFi — which honestly makes the next session hit harder.`,
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

      <div
        style={{
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
              alt="Aryan"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, transparent 60%, rgba(74,222,128,0.08))',
            }} />
          </div>

          <p style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
            Aryan
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
            I don't just write code — I ship it.
          </h2>

          {STORY.map((para, i) => (
            <p key={i} style={{
              fontSize: '14px', color: 'var(--muted)', lineHeight: 1.85,
              marginBottom: '16px',
            }}>
              {para}
            </p>
          ))}

          {/* Cards — 3 col */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginTop: '28px',
          }}
            className="about-cards"
          >
            {CARDS.map(({ title, body }) => (
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
          .about-cards { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .about-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}