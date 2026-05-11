import './globals.css';

export const metadata = {
  title: 'Aryan Sehgal — Full Stack Dev & AI Builder',
  description:
    'Full Stack Developer (MERN) based in Dehradun. Building production-ready apps with AI integration using Groq, React, Node.js and MongoDB.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'AI Integration', 'Groq', 'React', 'Next.js'],
  authors: [{ name: 'Aryan Sehgal' }],
  openGraph: {
    title: 'Aryan Sehgal — Full Stack Dev & AI Builder',
    description: 'Building production-ready apps with MERN stack and Groq-powered AI.',
    url: 'https://portfolio-aryan-neon.vercel.app',
    siteName: 'Aryan Sehgal Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}