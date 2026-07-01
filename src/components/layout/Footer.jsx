import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, MapPin } from 'lucide-react';
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
  { Icon: Instagram, href: SITE.social.instagram, label: 'Instagram' },
  { Icon: Facebook, href: SITE.social.facebook, label: 'Facebook' },
  { Icon: Linkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
];

const formattedPhone = SITE.phone.replace('+91', '+91 ');

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
            <p className="text-[var(--color-link-muted)] max-w-sm mb-6 text-sm leading-relaxed">
              {SITE.brandName} is a media and technology studio building digital products, campaigns, and brand
              experiences for companies that want to move faster.
            </p>
            <div className="mb-6 flex items-start gap-2 text-sm text-[var(--color-link-muted)]">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" strokeWidth={1.75} />
              <span>
                {SITE.brandName}
                <br />
                {SITE.address.locality}, {SITE.address.country}
              </span>
            </div>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => {
                const IconComponent = social.Icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-link-muted)] hover:text-[var(--color-accent)] transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
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
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">
                  {formattedPhone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.url}
                  className="hover:text-white transition-colors"
                >
                  {SITE.url.replace('https://', '')}
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
            © {new Date().getFullYear()} {SITE.brandName} · {SITE.address.locality}, {SITE.address.country}
          </p>
          <p className="text-xs text-[var(--color-link-muted)]">
            Web · Media · Strategy
          </p>
        </div>
      </div>
    </footer>
  );
}
