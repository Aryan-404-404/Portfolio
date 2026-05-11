'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    title: 'RepoCLI',
    tag: 'npm',
    image: '/RepoCLI.png',
    desc: 'Terminal AI agent published on npm that reads your entire codebase, fixes bugs autonomously, and raises GitHub issues from plain English commands. Uses Groq SDK for ultra-fast inference and Octokit for GitHub API integration.',
    pills: ['TypeScript', 'Groq SDK', 'Octokit', 'Commander.js', 'Node.js'],
    demo: null,
    source: 'https://github.com/Aryan-404-404/repoCLI',
  },
  {
    title: 'JobFlow.ai',
    tag: 'live',
    image: '/Jobflow_AI.png',
    desc: 'Distributed system bridging job browsing and application management. Chrome Extension for 1-click LinkedIn scraping + MERN Dashboard with Groq AI resume scoring at ~95% accuracy. Features real-time skill gap detection and cross-origin secure auth.',
    pills: ['React', 'Node.js', 'Express', 'MongoDB', 'Groq API', 'Chrome MV3', 'Tailwind', 'JWT'],
    demo: 'https://job-flow-ai-three.vercel.app/',
    source: 'https://github.com/Aryan-404-404/JobFlow-AI',
  },
  {
    title: 'AI Expense Tracker',
    tag: 'live',
    image: '/expense-tracker.png',
    desc: 'Full-stack finance app with an AI chatbot (Groq / Llama 3.3) that maintains conversation memory and advises on real spending patterns. Features interactive charts, secure JWT auth, role-based access control, and expense analytics via Recharts.',
    pills: ['React', 'Express', 'MongoDB', 'Groq API', 'Recharts', 'JWT', 'RBAC'],
    demo: 'https://ai-expense-tracker-seven-alpha.vercel.app/',
    source: 'https://github.com/Aryan-404-404/Expense-Tracker',
  },
  {
    title: 'AI Resume Analyzer',
    tag: 'live',
    image: '/Resume-analyzer.png',
    desc: 'ATS-optimized resume analysis tool with client-side PDF parsing via Web Workers (zero backend latency). Achieved 10x faster inference by migrating from Gemini to Groq\'s Llama 3.3. Strict JSON validation ensures reliable AI outputs for skill gap detection.',
    pills: ['TypeScript', 'Groq API', 'pdfjs-dist', 'Web Workers', 'React', 'Tailwind'],
    demo: 'https://ai-resume-analyzer-pi-ruby.vercel.app/',
    source: 'https://github.com/Aryan-404-404/AI-Resume-Analyzer',
  },
];

function ProjectCard({ project }) {
  const { title, tag, image, desc, pills, demo, source } = project;

  return (
    <div
      style={{
        background: 'var(--bg3)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.25s, transform 0.25s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(74,222,128,0.35)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'none';
      }}
    >
      {/* Image */}
      <div style={{
        height: '180px',
        background: 'var(--bg2)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid var(--border)',
        flexShrink: 0,
      }}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            style={{ objectFit: 'cover', opacity: 0.85, transition: 'opacity 0.3s' }}
          />
        ) : (
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--faint)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ fontSize: '28px', opacity: 0.4 }}>⚡</span>
            <span>Terminal AI Agent</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {/* Tag + links row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            padding: '3px 9px',
            borderRadius: '20px',
            ...(tag === 'live'
              ? { background: 'var(--green-dim)', color: 'var(--green)', border: '1px solid var(--green-border)' }
              : { background: 'rgba(203,56,55,0.15)', color: '#ff6b6b', border: '1px solid rgba(203,56,55,0.3)' }),
          }}>
            {tag === 'live' ? '● live' : 'npm'}
          </span>

          <div style={{ display: 'flex', gap: '12px' }}>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--faint)')}
              >
                ↗ Demo
              </a>
            )}
            {source && (
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--faint)')}
              >
                ⌥ Source
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
          {title}
        </h3>

        {/* Description — fixed height so cards don't stretch unevenly */}
        <p style={{
          fontSize: '12px', color: 'var(--muted)', lineHeight: 1.75,
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {desc}
        </p>

        {/* Tech pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '4px' }}>
          {pills.map(pill => (
            <span key={pill} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              padding: '3px 7px',
              borderRadius: '4px',
              border: '1px solid var(--border2)',
              color: 'var(--faint)',
              background: 'var(--bg2)',
            }}>
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
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
    <section id="projects" className="section-wrapper fade-section" ref={ref}>
      <div className="section-header">
        <span className="sec-num">02.</span>
        <span className="sec-title">Featured Projects</span>
        <div className="sec-line" />
      </div>

      <div className="proj-grid" style={{ marginBottom: '32px' }}>
        {PROJECTS.map(p => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <a
          href="https://github.com/Aryan-404-404?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--green)',
            border: '1px solid var(--green-border)',
            padding: '10px 24px',
            borderRadius: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--green-dim)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          View All Projects on GitHub →
        </a>
      </div>

      <style>{`
        .fade-section { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-section.visible { opacity: 1; transform: none; }
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (max-width: 700px) {
          .proj-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}