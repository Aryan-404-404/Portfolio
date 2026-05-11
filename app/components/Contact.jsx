'use client';

import { useEffect, useRef, useState } from 'react';

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
    value: 'aryan-sehgal-599443271',
    href: 'https://www.linkedin.com/in/aryan-sehgal-599443271/',
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
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { ref.current?.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setStatus('// please fill all fields');
      return;
    }
    const mailto = `mailto:aryan411770@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact from ${name}`
    )}&body=${encodeURIComponent(`${message}\n\nFrom: ${email}`)}`;
    window.location.href = mailto;
    setStatus('// opening email client...');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="section-wrapper fade-section" ref={ref}>
      <div className="section-header">
        <span className="sec-num">05.</span>
        <span className="sec-title">Get In Touch</span>
        <div className="sec-line" />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '64px',
        alignItems: 'start',
      }}
        className="contact-grid"
      >
        {/* ── Left ── */}
        <div>
          <h2 style={{
            fontSize: '32px', fontWeight: 800, color: 'var(--text)',
            letterSpacing: '-1px', lineHeight: 1.2, marginBottom: '14px',
          }}>
            Open to work.<br />
            <span style={{ color: 'var(--green)' }}>Let&apos;s build.</span>
          </h2>
          <p style={{
            fontSize: '14px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '32px',
          }}>
            Looking for SDE roles at AI-native startups (Series A/B · 11–200 people).
            Remote or on-site in India. Graduating July 2026 and ready to ship
            production code from day one.
          </p>

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
                  transition: 'border-color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--green-border)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
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
                <div>
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
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div style={{
          background: 'var(--bg3)', border: '1px solid var(--border)',
          borderRadius: '12px', padding: '28px',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px',
          }}>
            // send a message
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
              { id: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)',
                  letterSpacing: '0.06em', display: 'block', marginBottom: '6px',
                }}>
                  {label}
                </label>
                <input
                  type={type}
                  value={form[id]}
                  onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                  placeholder={placeholder}
                  style={{
                    width: '100%', background: 'var(--bg2)',
                    border: '1px solid var(--border2)', borderRadius: '7px',
                    padding: '10px 14px', fontFamily: 'var(--font-mono)',
                    fontSize: '12px', color: 'var(--text)', outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--green-border)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border2)')}
                />
              </div>
            ))}

            {/* Message */}
            <div>
              <label style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)',
                letterSpacing: '0.06em', display: 'block', marginBottom: '6px',
              }}>
                Message
              </label>
              <textarea
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about the role or project…"
                rows={4}
                style={{
                  width: '100%', background: 'var(--bg2)',
                  border: '1px solid var(--border2)', borderRadius: '7px',
                  padding: '10px 14px', fontFamily: 'var(--font-mono)',
                  fontSize: '12px', color: 'var(--text)', outline: 'none',
                  resize: 'none', transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--green-border)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border2)')}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%', padding: '12px', borderRadius: '8px',
                background: 'var(--green)', color: '#050a05',
                fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 500,
                border: 'none', cursor: 'pointer', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.target.style.opacity = '0.85')}
              onMouseLeave={e => (e.target.style.opacity = '1')}
            >
              Send Message
            </button>

            {status && (
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: status.includes('please') ? '#ff6b6b' : 'var(--green)',
                textAlign: 'center',
              }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .fade-section { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-section.visible { opacity: 1; transform: none; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder { color: var(--faint); }
      `}</style>
    </section>
  );
}