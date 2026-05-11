'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const STATS = [
  { num: '5+',    label: 'Live Projects'  },
  { num: '250+',  label: 'LC Problems'    },
  { num: '~1632', label: 'LC Rating'      },
  { num: 'npm',   label: 'Published Pkg'  },
  { num: '8.60',  label: 'CGPA'           },
];

const ROLES = [
  'Full-Stack Dev · AI Integration',
  'MERN Stack Engineer',
  'Groq-Powered AI Builder',
  'npm Package Author',
  'Backend logic · Frontend craft',
];

export default function Hero() {
  const roleRef = useRef(null);

  useEffect(() => {
    let ri = 0, ci = 0, deleting = false, timer;
    const tick = () => {
      const el = roleRef.current;
      if (!el) return;
      const cur = ROLES[ri];
      if (!deleting) {
        el.textContent = cur.slice(0, ci + 1);
        ci++;
        if (ci === cur.length) { deleting = true; timer = setTimeout(tick, 2000); return; }
      } else {
        el.textContent = cur.slice(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; ri = (ri + 1) % ROLES.length; }
      }
      timer = setTimeout(tick, deleting ? 45 : 65);
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 8% 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(74,222,128,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(74,222,128,0.035) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, black 0%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, black 0%, transparent 80%)',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,222,128,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--green-dim)', border: '1px solid var(--green-border)',
          borderRadius: '20px', padding: '5px 14px',
          fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)',
          marginBottom: '24px',
          animation: 'fadeUp 0.6s ease both',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)',
            animation: 'blink 1.2s step-end infinite',
          }} />
          available for opportunities
        </div>

        {/* Greeting */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--faint)',
          marginBottom: '8px', animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0,
          animationFillMode: 'forwards',
        }}>
          // hello world
        </p>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 800,
          color: 'var(--text)', lineHeight: 1.0, letterSpacing: '-2px',
          marginBottom: '18px',
          animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0,
          animationFillMode: 'forwards',
        }}>
          Hi, I&apos;m<br />
          <span style={{ color: 'var(--green)' }}>Aryan .</span>
        </h1>

        {/* Typewriter role */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--green)',
          marginBottom: '20px', display: 'flex', alignItems: 'center',
          animation: 'fadeUp 0.6s 0.3s ease both', opacity: 0,
          animationFillMode: 'forwards',
          minHeight: '20px',
        }}>
          <span ref={roleRef} />
          <span style={{
            display: 'inline-block', width: '8px', height: '15px',
            background: 'var(--green)', marginLeft: '3px',
            animation: 'blink 1.2s step-end infinite', verticalAlign: '-3px',
          }} />
        </div>

        {/* Description */}
        <p style={{
          fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8,
          maxWidth: '520px', marginBottom: '32px',
          animation: 'fadeUp 0.6s 0.4s ease both', opacity: 0,
          animationFillMode: 'forwards',
        }}>
          I build production-ready apps — from Chrome extensions to terminal agents —
          using the MERN stack with Groq-powered AI at the core. Based in Dehradun,
          graduating July 2026.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '52px',
          animation: 'fadeUp 0.6s 0.5s ease both', opacity: 0,
          animationFillMode: 'forwards',
        }}>
          <a href="#projects" className="btn-primary" onClick={e => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Projects
          </a>
          <a
            href="/MERN_Full_Stack_Aryan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '36px', flexWrap: 'wrap',
          animation: 'fadeUp 0.6s 0.6s ease both', opacity: 0,
          animationFillMode: 'forwards',
        }}>
          {STATS.map(({ num, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '22px',
                fontWeight: 700, color: 'var(--green)',
              }}>
                {num}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                color: 'var(--faint)', letterSpacing: '0.05em',
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        opacity: 0.4,
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--faint)', letterSpacing: '0.12em' }}>
          SCROLL
        </span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--green), transparent)',
          animation: 'pulse 1.5s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
}