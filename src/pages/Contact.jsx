import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Contact3D from '../components/canvas/Contact3D';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center text-[color:var(--text-color)] transition-colors duration-500 relative overflow-hidden">
      <Contact3D />
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-none mb-6">
              Let's <br/><span className="text-gradient">Talk</span>
            </h1>
            <p className="text-[color:var(--text-muted)] text-xl mb-12 max-w-md">
              Ready to elevate your digital presence? Drop us a line and let's start building the future together.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm tracking-widest uppercase text-[color:var(--text-muted)] mb-2">Email</h4>
                <a href="mailto:nextshitftsolutions@gmail.com" className="text-2xl font-bold hover:text-[var(--primary)] transition-colors break-words">nextshitftsolutions@gmail.com</a>
              </div>
              <div>
                <h4 className="text-sm tracking-widest uppercase text-[color:var(--text-muted)] mb-2">Location</h4>
                <p className="text-2xl font-bold">123 Cyber Street<br/>Neo Tokyo, 90210</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-[2.5rem] border border-[var(--surface-rgb)]/20 shadow-lg"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[color:var(--text-muted)] px-2">Name</label>
                <input type="text" className="w-full bg-black/5 dark:bg-white/5 border border-[var(--surface-rgb)]/20 rounded-2xl px-6 py-4 outline-none focus:border-[var(--primary)] transition-all text-[color:var(--text-color)]" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[color:var(--text-muted)] px-2">Email</label>
                <input type="email" className="w-full bg-black/5 dark:bg-white/5 border border-[var(--surface-rgb)]/20 rounded-2xl px-6 py-4 outline-none focus:border-[var(--primary)] transition-all text-[color:var(--text-color)]" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[color:var(--text-muted)] px-2">Message</label>
                <textarea rows="4" className="w-full bg-black/5 dark:bg-white/5 border border-[var(--surface-rgb)]/20 rounded-2xl px-6 py-4 outline-none focus:border-[var(--primary)] transition-all text-[color:var(--text-color)]" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full group relative inline-flex items-center justify-center px-8 py-5 font-bold text-[color:var(--bg)] transition-all duration-200 bg-[var(--text-color)] font-heading uppercase tracking-widest rounded-2xl hover:bg-[var(--primary)] hover:text-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                <span className="relative z-10 flex items-center gap-2">
                  Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
