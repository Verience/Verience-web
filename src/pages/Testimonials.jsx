import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const testimonials = [
  {
    id: 1,
    name: 'Shobhiit Kulshreshth',
    role: 'Gawri Ganga',
    quote:
      'Verience captured our vision for Gawri Ganga and turned it into a polished web and marketing presence. Clear communication, solid execution, and a team that actually listens.',
  },
  {
    id: 2,
    name: 'Shobhiit Kulshreshth',
    role: 'Legaloids',
    quote:
      'For Legaloids we needed something credible and professional online. They delivered exactly that — structured delivery, attention to detail, and a site we are proud to stand behind.',
  },
  {
    id: 3,
    name: 'Mudit Johri',
    role: 'Compliance World',
    quote:
      'Compliance World needed consistency across web development, SEO, and digital marketing. Verience tied it together — better visibility, clearer messaging, and dependable follow-through.',
  },
  {
    id: 4,
    name: 'Ambrish Tiwari',
    role: 'Meta Microdigital',
    quote:
      'A strong partner for Meta Microdigital — fast iterations, thoughtful design, and marketing support that matches how we want to show up in the market.',
  },
];

const stats = [
  { label: 'Client satisfaction', value: '98%' },
  { label: 'Projects delivered', value: '10+' },
  { label: 'Core services', value: '6' },
];

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24 min-h-screen section-muted">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <p className="eyebrow eyebrow-accent mb-4">Testimonials</p>
          <h1 className="display-section mb-6">Clients who stuck around.</h1>
          <p className="body-lead">
            Real feedback from teams we've built with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={index === 1 ? 'card-dark text-center !py-8' : 'card-light text-center !py-8'}
            >
              <p className={`text-3xl font-display font-medium mb-1 ${index === 1 ? 'text-accent' : 'text-accent'}`}>
                {item.value}
              </p>
              <p className={`text-xs uppercase tracking-wider ${index === 1 ? 'text-white/50' : 'text-[color:var(--text-muted)]'}`}>
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="card-light"
            >
              <p className="text-[color:var(--text-muted)] leading-relaxed mb-8 text-[15px]">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-[var(--color-hairline)] pt-5">
                <p className="font-medium text-sm">{testimonial.name}</p>
                <p className="text-sm text-[color:var(--text-muted)]">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="body-lead mb-8">Ready to be next?</p>
          <Button to="/contact" variant="accent">
            Start your project
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
