import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen text-[color:var(--text-color)] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-heading font-black uppercase mb-6">
            Our <span className="text-gradient">Story</span>
          </h1>
          <p className="text-xl text-[color:var(--text-muted)] max-w-3xl mx-auto">
            Founded in 2024, Nextshift isn't just an agency; we're a collective of forward-thinkers, builders, and dreamers obsessed with moving the digital needle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden aspect-square relative border border-[var(--surface-rgb)]/20"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team collaborating" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4">The Vision</h3>
              <p className="text-[color:var(--text-muted)] leading-relaxed text-lg">
                We believe the future belongs to brands that adapt fast. Our mission is to equip you with the tools, design, and tech stack needed to dominate your niche. Gen-Z aesthetics combined with robust engineering.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="glass p-6 rounded-2xl border border-[var(--surface-rgb)]/20 shadow-sm">
                <div className="text-5xl font-black font-heading text-[var(--primary)] mb-2">50+</div>
                <div className="text-[color:var(--text-muted)] text-sm tracking-widest uppercase font-bold">Projects Delivered</div>
              </div>
              <div className="glass p-6 rounded-2xl border border-[var(--surface-rgb)]/20 shadow-sm">
                <div className="text-5xl font-black font-heading text-[var(--accent)] mb-2">12+</div>
                <div className="text-[color:var(--text-muted)] text-sm tracking-widest uppercase font-bold">Global Awards</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
