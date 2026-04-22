import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: 'Shobhiit Kulshreshth',
    role: 'Gawri Ganga',
    image:
      'https://ui-avatars.com/api/?name=Shobhiit+Kulshreshth&background=6366f1&color=fff&size=128&bold=true',
    quote:
      'Nextshift captured our vision for Gawri Ganga and turned it into a polished web and marketing presence. Clear communication, solid execution, and a team that actually listens.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Shobhiit Kulshreshth',
    role: 'Legaloids',
    image:
      'https://ui-avatars.com/api/?name=Shobhiit+Kulshreshth&background=6366f1&color=fff&size=128&bold=true',
    quote:
      'For Legaloids we needed something credible and professional online. They delivered exactly that—structured delivery, attention to detail, and a site we are proud to stand behind.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mudit Johri',
    role: 'Compliance World',
    image:
      'https://ui-avatars.com/api/?name=Mudit+Johri&background=0ea5e9&color=fff&size=128&bold=true',
    quote:
      'Compliance World needed consistency across web development, SEO, and digital marketing. Nextshift tied it together—better visibility, clearer messaging, and dependable follow-through.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ambrish Tiwari',
    role: 'Meta Microdigital',
    image:
      'https://ui-avatars.com/api/?name=Ambrish+Tiwari&background=8b5cf6&color=fff&size=128&bold=true',
    quote:
      'A strong partner for Meta Microdigital—fast iterations, thoughtful design, and marketing support that matches how we want to show up in the market.',
    rating: 5,
  },
];

const stats = [
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Average Growth Rate', value: '3.4x' },
  { label: 'Projects Delivered', value: '10+' },
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
