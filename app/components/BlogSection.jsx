'use client';

import { useEffect, useRef } from 'react';

const POSTS = [
  {
    title: 'From Tab Chaos to Clarity: Building an AI-Powered Job Application Tracker',
    tags: ['#showdev', '#ai', '#career', '#productivity'],
    excerpt:
      "A deep dive into building JobFlow.ai — the architecture decisions, Chrome Extension challenges, and how Groq AI was integrated for real-time resume scoring and skill gap detection.",
    date: 'Mar 12, 2025',
    readTime: '5 min read',
    href: 'https://dev.to/aryan404404/from-tab-chaos-to-clarity-building-an-ai-powered-job-application-tracker-3him',
  },
  {
    title: 'Building an ATS-Beating Resume Analyzer: From Gemini to Groq',
    tags: ['#webdev', '#ai', '#webworker', '#resume'],
    excerpt:
      "How migrating from Google Gemini to Groq\u2019s Llama 3.3 resulted in 10x faster inference, and why client-side Web Workers completely changed the architecture of the resume analyzer.",
    date: 'Mar 8, 2025',
    readTime: '3 min read',
    href: 'https://dev.to/aryan404404/building-an-ats-beating-resume-analyzer-from-gemini-to-groq-339p',
  },
];

export default function BlogSection() {
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
    <section id="blogs" className="section-wrapper fade-section" ref={ref}>
      <div className="section-header">
        <span className="sec-num">04.</span>
        <span className="sec-title">Blog Posts</span>
        <div className="sec-line" />
      </div>

      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--faint)',
        marginBottom: '28px',
        letterSpacing: '0.04em',
      }}>
        {'// writings · thoughts on '}
        <a
          href="https://dev.to/aryan404404"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--green)' }}
        >
          dev.to
        </a>
      </p>

      <div className="blogs-grid" style={{ marginBottom: '32px' }}>
        {POSTS.map(post => (
          <a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'border-color 0.25s, transform 0.25s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(74,222,128,0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            {/* Tags */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
              {post.tags.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  padding: '2px 8px',
                  borderRadius: '20px',
                  background: 'var(--green-dim)',
                  color: 'var(--green)',
                  border: '1px solid var(--green-border)',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--text)',
              lineHeight: 1.45,
              marginBottom: '10px',
            }}>
              {post.title}
            </h3>

            {/* Excerpt — clamped to 3 lines so cards stay even */}
            <p style={{
              fontSize: '12px',
              color: 'var(--muted)',
              lineHeight: 1.75,
              margin: '0 0 16px 0',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {post.excerpt}
            </p>

            {/* Footer */}
            <div style={{
              borderTop: '1px solid var(--border)',
              marginTop: 'auto',
              paddingTop: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)' }}>
                {post.date} · {post.readTime}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--green)' }}>
                Read on dev.to →
              </span>
            </div>
          </a>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <a
          href="https://dev.to/aryan404404"
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
          More posts on dev.to →
        </a>
      </div>

      <style>{`
        .fade-section { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fade-section.visible { opacity: 1; transform: none; }
        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (max-width: 700px) {
          .blogs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}