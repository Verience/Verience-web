import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Martin',
    role: 'CMO, Nova Labs',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1974&auto=format&fit=crop',
    quote:
      'Nextshift transformed our digital identity in under six weeks. We saw a 3.2x increase in qualified leads and a huge improvement in brand perception.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Daniel Brooks',
    role: 'Founder, PixelForge',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    quote:
      'Their team blends creativity with execution. From strategy to launch, every step felt structured, fast, and focused on measurable outcomes.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ava Khan',
    role: 'Head of Product, Driftly',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    quote:
      'The new website and product storytelling gave us instant credibility with enterprise clients. It now truly reflects the quality of our platform.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Noah Carter',
    role: 'CEO, Axiom Commerce',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    quote:
      'From UX refinement to conversion optimization, the impact has been immediate. Our checkout drop-off decreased by 28% in the first month.',
    rating: 5,
  },
];

const stats = [
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Average Growth Rate', value: '3.4x' },
  { label: 'Projects Delivered', value: '120+' },
];

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24 min-h-screen text-[color:var(--text-color)] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-heading font-black uppercase mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h1>
          <p className="text-xl text-[color:var(--text-muted)] max-w-3xl mx-auto">
            Trusted by ambitious brands worldwide. Real feedback from teams that partnered with Nextshift to scale, launch, and lead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 text-center"
            >
              <p className="text-4xl md:text-5xl font-heading font-black text-gradient mb-2">{item.value}</p>
              <p className="uppercase tracking-widest text-xs text-[color:var(--text-muted)]">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-[2rem] p-8 md:p-10 border border-[var(--surface-rgb)]/20 relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[var(--primary)]/20 blur-2xl" />

              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border border-[var(--surface-rgb)]/30"
                  />
                  <div>
                    <h3 className="font-bold font-heading text-lg leading-tight">{testimonial.name}</h3>
                    <p className="text-sm text-[color:var(--text-muted)]">{testimonial.role}</p>
                  </div>
                </div>
                <Quote size={28} className="text-[var(--primary)] opacity-80" />
              </div>

              <p className="text-[color:var(--text-muted)] leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-1 relative z-10">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-[var(--secondary)] text-[var(--secondary)]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-[color:var(--text-muted)] mb-8">
            Want your brand to be our next success story?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 font-bold text-[color:var(--bg)] transition-all duration-300 bg-[var(--text-color)] hover:scale-105 font-heading uppercase tracking-widest rounded-full"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
