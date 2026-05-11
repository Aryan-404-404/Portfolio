'use client';

import { useEffect, useRef } from 'react';

const EXPERIENCE = [
  {
    type: 'Internship',
    role: 'Frontend Developer Intern',
    org: 'The Tann Mann Gaadi',
    period: 'Feb 2025 – Present',
    location: 'Remote',
    bullets: [
      'Building production-ready UI components for an admin panel using React.js and Tailwind CSS, translating Figma designs with pixel-level accuracy.',
      'Developing fully responsive pages with dynamic data rendering; resolving UI bugs across multiple dashboard views.',
      'Following feature branch and PR workflow with conventional commits — zero hardcoded data, integration-ready components.',
    ],
    pills: ['React.js', 'Tailwind CSS', 'Figma', 'Git', 'PR Workflow'],
  },
  {
    type: 'Indie',
    role: 'Indie Builder · Full Stack & AI',
    org: 'Personal Projects',
    period: '2024 – Present',
    location: 'Self-directed',
    bullets: [
      'Published RepoCLI on npm — a terminal AI agent with an agentic tool-calling loop, recursive DFS codebase search, and GitHub API integration.',
      'Built and shipped 3+ full-stack apps using MERN + Groq AI: a job tracker with a Chrome extension, a finance app with MongoDB-backed conversation memory, and an ATS resume analyzer.',
      'Focused on real-world constraints: JWT auth, RBAC, TTL indexes, Web Workers, and client-side PDF parsing — not just tutorial projects.',
    ],
    pills: ['MERN', 'Groq API', 'TypeScript', 'Node.js', 'MongoDB', 'Chrome MV3', 'npm'],
  },
];

const CERTS = [
  {
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: 'Jan 2026',
    link: 'https://www.hackerrank.com/certificates/a29a79042830',
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    date: 'Jan 2026',
    link: 'https://www.hackerrank.com/certificates/07873cd67680',
  },
];

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section-wrapper fade-section" ref={ref}>
      <div className="section-header">
        <span className="sec-num">03.</span>
        <span className="sec-title">Experience</span>
        <div className="sec-line" />
      </div>

      {/* ── Experience timeline ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '52px' }}>
        {EXPERIENCE.map(({ type, role, org, period, location, bullets, pills }) => (
          <div
            key={role}
            style={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '28px 32px',
              position: 'relative',
              transition: 'border-color 0.25s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(74,222,128,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            {/* Type badge */}
            <span style={{
              position: 'absolute', top: '28px', right: '28px',
              fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.08em', padding: '3px 10px', borderRadius: '20px',
              ...(type === 'Internship'
                ? { background: 'var(--green-dim)', color: 'var(--green)', border: '1px solid var(--green-border)' }
                : { background: 'rgba(99,102,241,0.12)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.25)' }
              ),
            }}>
              {type === 'Internship' ? '● Internship' : '⚡ Indie'}
            </span>

            {/* Header */}
            <div style={{ marginBottom: '16px', paddingRight: '80px' }}>
              <h3 style={{
                fontSize: '17px', fontWeight: 700, color: 'var(--text)',
                marginBottom: '4px', letterSpacing: '-0.3px',
              }}>
                {role}
              </h3>
              <div style={{
                display: 'flex', gap: '16px', flexWrap: 'wrap',
                fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--muted)',
              }}>
                <span style={{ color: 'var(--green)' }}>{org}</span>
                <span>{period}</span>
                <span style={{ color: 'var(--faint)' }}>{location}</span>
              </div>
            </div>

            {/* Bullets */}
            <ul style={{
              listStyle: 'none', padding: 0, margin: '0 0 18px 0',
              display: 'flex', flexDirection: 'column', gap: '8px',
            }}>
              {bullets.map((b, i) => (
                <li key={i} style={{
                  fontSize: '13px', color: 'var(--muted)', lineHeight: 1.75,
                  display: 'flex', gap: '10px', alignItems: 'flex-start',
                }}>
                  <span style={{
                    color: 'var(--green)', fontFamily: 'var(--font-mono)',
                    fontSize: '11px', marginTop: '3px', flexShrink: 0,
                  }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {pills.map(pill => (
                <span key={pill} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px',
                  padding: '3px 8px', borderRadius: '4px',
                  border: '1px solid var(--border2)',
                  color: 'var(--faint)', background: 'var(--bg2)',
                }}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Certifications ── */}
      <div>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--green)',
          letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px',
        }}>
          // Certifications
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="certs-grid">
          {CERTS.map(({ title, issuer, date, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', flexDirection: 'column', gap: '6px',
                background: 'var(--bg3)', border: '1px solid var(--border)',
                borderRadius: '10px', padding: '18px 20px',
                textDecoration: 'none',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(74,222,128,0.35)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}>
                  {title}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px',
                  color: 'var(--green)', marginLeft: '12px', flexShrink: 0,
                }}>
                  ↗
                </span>
              </div>
              <div style={{
                display: 'flex', gap: '12px',
                fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)',
              }}>
                <span>{issuer}</span>
                <span>·</span>
                <span>{date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .fade-section { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-section.visible { opacity: 1; transform: none; }
        @media (max-width: 600px) {
          .certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}