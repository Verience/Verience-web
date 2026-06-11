import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isDark = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isDark ? 'text-white' : 'text-[color:var(--text-color)]',
        isScrolled || !isHome
          ? 'bg-white/90 backdrop-blur-md border-b border-[var(--color-hairline)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between h-11">
          <Logo
            size={34}
            wordmarkClassName={isDark ? 'text-white' : 'text-[color:var(--text-color)]'}
          />

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    'text-sm transition-colors relative',
                    isActive
                      ? 'font-medium'
                      : isDark
                        ? 'text-white/60 hover:text-white'
                        : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-color)]'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent)] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            {isDark ? (
              <Button to="/contact" variant="accent" className="!py-2.5 !px-5 !text-sm">
                Let's talk
              </Button>
            ) : (
              <Button to="/contact" variant="primary" className="!py-2.5 !px-5 !text-sm">
                Let's talk
              </Button>
            )}
          </div>

          <button
            type="button"
            className="md:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={clsx(
              'md:hidden overflow-hidden border-t',
              isDark ? 'bg-[var(--color-canvas-night)] border-white/10' : 'bg-white border-[var(--color-hairline)]'
            )}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    'text-base py-1',
                    isDark ? 'text-white/75 hover:text-white' : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-color)]'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                to="/contact"
                variant={isDark ? 'accent' : 'primary'}
                className="mt-2 w-full !text-sm"
              >
                Let's talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
