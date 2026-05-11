'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'home',     href: '#home',     num: '00.' },
  { label: 'about',    href: '#about',    num: '01.' },
  { label: 'projects', href: '#projects', num: '02.' },
  { label: 'experience', href: '#experience', num: '03.' },
  { label: 'skills',   href: '#skills',   num: '04.' },
  { label: 'blogs',    href: '#blogs',    num: '05.' },
  { label: 'contact',  href: '#contact',  num: '06.' },
];

export default function Navbar() {
  const [active, setActive]   = useState('home');
  const [menuOpen, setMenu]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenu(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 5%', height: '64px',
        background: scrolled ? 'rgba(8,12,16,0.92)' : 'rgba(8,12,16,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        {/* Logo */}
        <a
          href="#home"
          onClick={e => { e.preventDefault(); handleNav('#home'); }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 500, color: 'var(--text)' }}
        >
          &lt;<span style={{ color: 'var(--green)' }}> Aryan </span>/&gt;
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {NAV_LINKS.map(({ label, href, num }) => (
            <a
              key={label}
              href={href}
              onClick={e => { e.preventDefault(); handleNav(href); }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: active === label ? 'var(--green)' : 'var(--faint)',
                letterSpacing: '0.06em',
                transition: 'color 0.2s',
              }}
            >
              <span style={{ color: 'var(--green)', marginRight: '3px' }}>{num}</span>
              {label}
            </a>
          ))}
        </div>

        {/* Hire me CTA */}
        <a
          href="mailto:aryan411770@gmail.com"
          className="desktop-nav"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500,
            padding: '7px 16px', borderRadius: '6px',
            background: 'var(--green)', color: '#050a05',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.target.style.opacity = '0.85')}
          onMouseLeave={e => (e.target.style.opacity = '1')}
        >
          hire me
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenu(!menuOpen)}
          aria-label="Toggle menu"
          className="hamburger-btn"
          style={{
            display: 'none', flexDirection: 'column', gap: '5px',
            background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '20px', height: '1.5px',
              background: menuOpen ? 'var(--green)' : 'var(--faint)',
              transition: 'background 0.2s',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 90,
          background: 'rgba(8,12,16,0.97)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '32px',
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={e => { e.preventDefault(); handleNav(href); }}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '16px',
                color: active === label ? 'var(--green)' : 'var(--muted)',
                letterSpacing: '0.1em',
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:aryan411770@gmail.com"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              padding: '10px 24px', borderRadius: '8px',
              background: 'var(--green)', color: '#050a05',
            }}
            onClick={() => setMenu(false)}
          >
            hire me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}