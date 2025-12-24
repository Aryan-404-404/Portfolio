'use client'
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
      setActiveSection(href.substring(1));
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-blue-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with glow effect */}
          <div className="shrink-0 relative group">
            <a 
              href="#home" 
              onClick={(e) => smoothScroll(e, '#home')}
              className="text-2xl font-bold relative"
            >
              <span className="relative z-10 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {"< Aryan />"}
              </span>
              <span className="absolute inset-0 blur-xl bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-60 transition-opacity"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {activeSection === item.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-blue-400 to-purple-500"></span>
                )}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, '#contact')}
              className="relative ml-4 px-6 py-2.5 text-sm font-semibold text-white overflow-hidden group rounded-lg"
            >
              <span className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600"></span>
              <span className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10">Let's Talk</span>
              <span className="absolute inset-0 rounded-lg ring-1 ring-white/20"></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-300 hover:text-white transition-colors group"
            >
              <span className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
              {isOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-linear-to-r from-blue-500/20 to-purple-500/20 text-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, '#contact')}
              className="block px-4 py-3 text-sm font-semibold text-center text-white bg-linear-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}