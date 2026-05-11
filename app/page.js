"use client";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <BlogSection />
        <Contact />
      </main>
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '28px 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--faint)' }}>
          designed &amp; built by{' '}
          <span style={{ color: 'var(--green)' }}>Aryan Sehgal</span> · 2025
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            { label: 'github',   href: 'https://github.com/Aryan-404-404' },
            { label: 'linkedin', href: 'https://www.linkedin.com/in/aryan-sehgal-599443271/' },
            { label: 'dev.to',   href: 'https://dev.to/aryan404404' },
            { label: 'leetcode', href: 'https://leetcode.com/u/aryan411770/' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--faint)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target.style.color = 'var(--green)')}
              onMouseLeave={e => (e.target.style.color = 'var(--faint)')}
            >
              {label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}