import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';
import { SITE } from '../../lib/seo';
import { getKeywordSummary } from '../../lib/keywords';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const socialLinks = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/company/verience/', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://www.instagram.com/veriencestudio/', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-canvas-night)] text-white pt-20 pb-10 border-t border-white/5">
      <p className="sr-only">{getKeywordSummary()}</p>
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
              A media and technology studio building digital products, campaigns, and brand
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
              <li>
                <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">
                  {SITE.phone.replace('+91', '+91 ')}
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-link-muted)]">
            © {new Date().getFullYear()} Verience Media and Technology
          </p>
          <p className="text-xs text-[var(--color-link-muted)]">
            Web · Media · Strategy
          </p>
        </div>
      </div>
    </footer>
  );
}
