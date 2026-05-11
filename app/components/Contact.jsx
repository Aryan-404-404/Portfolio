'use client';

import { useEffect, useRef } from 'react';

const CONTACT_LINKS = [
  {
    icon: '✉',
    label: 'Email',
    value: 'aryan411770@gmail.com',
    href: 'mailto:aryan411770@gmail.com',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin/aryan',
    href: 'https://www.linkedin.com/in/aryan-599443271/',
  },
  {
    icon: '⌥',
    label: 'GitHub',
    value: 'Aryan-404-404',
    href: 'https://github.com/Aryan-404-404',
  },
  {
    icon: '⚡',
    label: 'LeetCode',
    value: 'aryan411770 · ~1632 rating',
    href: 'https://leetcode.com/u/aryan411770/',
  },
];

export default function Contact() {
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
    <section id="contact" className="section-wrapper fade-section" ref={ref}>
      <div className="section-header">
        <span className="sec-num">05.</span>
        <span className="sec-title">Get In Touch</span>
        <div className="sec-line" />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'start',
      }}
        className="contact-grid"
      >
        {/* ── Left: heading + blurb ── */}
        <div>
          <h2 style={{
            fontSize: '32px', fontWeight: 800, color: 'var(--text)',
            letterSpacing: '-1px', lineHeight: 1.2, marginBottom: '14px',
          }}>
            Open to work.<br />
            <span style={{ color: 'var(--green)' }}>Let&apos;s build.</span>
          </h2>
          <p style={{
            fontSize: '14px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '12px',
          }}>
            Looking for SDE roles at AI-native startups. Remote or on-site in India.
            Graduating July 2026 — ready to ship production code from day one.
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: 'var(--faint)', lineHeight: 1.7,
          }}>
            Best way to reach me is email or LinkedIn.<br />
            I typically respond within 24 hours.
          </p>
        </div>

        {/* ── Right: links ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {CONTACT_LINKS.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                background: 'var(--bg3)', border: '1px solid var(--border)',
                borderRadius: '10px', padding: '14px 18px',
                transition: 'border-color 0.2s, transform 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--green-border)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {/* Icon bubble */}
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'var(--green-dim)', border: '1px solid var(--green-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', flexShrink: 0, color: 'var(--green)',
                fontFamily: 'var(--font-mono)', fontWeight: 600,
              }}>
                {icon}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--faint)',
                  letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2px',
                }}>
                  {label}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text)' }}>
                  {value}
                </p>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                color: 'var(--faint)',
              }}>↗</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .fade-section { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-section.visible { opacity: 1; transform: none; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}