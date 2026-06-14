import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const socialLinks = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/verience/', label: 'LinkedIn' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-canvas-night)] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Logo
              size={36}
              wordmarkClassName="text-white text-xl"
              iconClassName="bg-white rounded-xl p-2"
              className="mb-5"
            />
            <p className="text-[var(--color-link-muted)] max-w-sm mb-8 text-sm leading-relaxed">
              A technology and media studio building digital products, campaigns, and brand
              experiences for companies that want to move faster.
            </p>
            <div className="flex items-center gap-5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[var(--color-link-muted)] hover:text-[var(--color-accent)] transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-5 text-white/90">Navigation</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-[var(--color-link-muted)] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-5 text-white/90">Contact</h4>
            <ul className="space-y-3 text-sm text-[var(--color-link-muted)]">
              <li>
                <a href="mailto:hello@veriencestudio.com" className="hover:text-white transition-colors">
                  hello@veriencestudio.com
                </a>
              </li>
              <li>+91 9599454313</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-link-muted)]">
            © {new Date().getFullYear()} Verience Technology and Media
          </p>
          <p className="text-xs text-[var(--color-link-muted)]">
            Web · Media · Strategy
          </p>
        </div>
      </div>
    </footer>
  );
}
