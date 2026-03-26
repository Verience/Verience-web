import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import ThemeToggle from '../ui/ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Testimonials', path: '/testimonials' },
  // { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-4" : "py-6"
    )}>
      <div className={clsx(
        "max-w-7xl mx-auto px-6 md:px-12 transition-all duration-300",
        isScrolled ? "w-[95%] rounded-full glass border border-[var(--surface-rgb)]/20" : "w-full"
      )}>
        <div className="flex items-center justify-between h-14 relative">
          <Link to="/" className="text-2xl font-heading font-bold tracking-tighter text-[color:var(--text-color)] z-50">
            NEXT<span className="text-gradient">SHIFT</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group text-sm font-medium uppercase tracking-wider"
                >
                  <span className={clsx(
                    "transition-colors duration-300",
                    isActive ? "text-[color:var(--text-color)] font-bold" : "text-[color:var(--text-muted)] group-hover:text-[color:var(--text-color)]"
                  )}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />
            <Link to="/contact" className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,var(--secondary)_50%,var(--primary)_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[var(--bg)] px-5 py-1 text-sm font-medium text-[color:var(--text-color)] backdrop-blur-3xl transition-colors hover:bg-[color:var(--surface)]">
                Let's Talk
              </span>
            </Link>
          </div>

          <button 
            className="md:hidden text-[color:var(--text-color)] z-50 flex items-center gap-4"
          >
            <ThemeToggle />
            <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 mx-4 glass rounded-2xl p-6 md:hidden flex flex-col space-y-4 shadow-xl border border-white/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[color:var(--text-muted)] hover:text-[color:var(--text-color)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
