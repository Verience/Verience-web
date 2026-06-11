import { motion } from 'framer-motion';
import { Sparkles, Code, Megaphone, Users, Search, PenTool } from 'lucide-react';

const services = [
  { id: 1, icon: Sparkles, title: 'Digital Marketing', desc: 'SEO, paid social, content strategy, and campaigns aligned with your business goals.' },
  { id: 2, icon: Code, title: 'Web Development', desc: 'Responsive websites and web applications built with modern, maintainable technology.' },
  { id: 3, icon: Megaphone, title: 'PR Marketing', desc: 'Press outreach, reputation management, and media coverage that builds credibility.' },
  { id: 4, icon: Users, title: 'Influencer Marketing', desc: 'Creator partnerships and campaigns that reach the right audience authentically.' },
  { id: 5, icon: Search, title: 'SEO Strategy', desc: 'Technical SEO, content clusters, and search visibility that compounds over time.' },
  { id: 6, icon: PenTool, title: 'Brand Identity', desc: 'Visual identity and messaging systems that feel distinct and intentional.' },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 min-h-screen section-muted bg-grid">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <p className="eyebrow eyebrow-accent mb-4">Services</p>
          <h1 className="display-section mb-6">
            Everything you need to <span className="text-accent">grow online.</span>
          </h1>
          <p className="body-lead">
            End-to-end digital services — from your first website to ongoing marketing and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className={index === 0 ? 'card-dark' : 'card-light'}
            >
              <service.icon
                size={26}
                className={index === 0 ? 'text-accent mb-5' : 'text-[var(--color-shade-50)] mb-5'}
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-display font-medium mb-3">{service.title}</h3>
              <p className={index === 0 ? 'text-white/60 text-sm leading-relaxed' : 'text-[color:var(--text-muted)] text-sm leading-relaxed'}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
