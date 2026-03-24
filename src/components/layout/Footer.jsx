import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--surface-rgb)]/20 pt-24 pb-12 relative overflow-hidden transition-colors duration-500">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-heading font-bold tracking-tighter text-[color:var(--text-color)] mb-6 inline-block">
              NEXT<span className="text-gradient">SHIFT</span>
            </Link>
            <p className="text-[color:var(--text-muted)] max-w-sm mb-8 text-lg">
              We build immersive digital experiences that scale your business into the future.
            </p>
            <div className="flex items-center space-x-6">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-[color:var(--text-muted)] hover:text-[color:var(--text-color)] transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[color:var(--text-color)] font-semibold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects', 'Team'].map((item) => (
                <li key={item}>
                  <Link to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`} className="text-[color:var(--text-muted)] hover:text-[color:var(--text-color)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[color:var(--text-color)] font-semibold mb-6 uppercase tracking-wider text-sm">Legal & Connect</h4>
            <ul className="space-y-4 mb-8">
              <li><Link to="/legal" className="text-[color:var(--text-muted)] hover:text-[color:var(--text-color)] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="text-[color:var(--text-muted)] hover:text-[color:var(--text-color)] transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="group relative w-full h-12 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden flex items-center px-4 border border-[var(--surface-rgb)]/20 transition-all cursor-pointer">
              <span className="text-[color:var(--text-muted)] text-sm group-hover:text-[color:var(--text-color)] w-full block truncate transition-colors">nextshitftsolutions@gmail.com</span>
              <ArrowRight className="absolute right-4 text-[color:var(--text-muted)] group-hover:text-[color:var(--primary)] transition-colors group-hover:translate-x-1" size={16} />
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--surface-rgb)]/20 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[color:var(--text-muted)] text-sm">
            © {new Date().getFullYear()} Nextshift Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm font-heading font-bold tracking-widest text-[color:var(--text-muted)]">
            BUILD THE FUTURE
          </div>
        </div>
      </div>
    </footer>
  );
}
