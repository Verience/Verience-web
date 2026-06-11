import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Hero3D from '../components/canvas/Hero3D';
import Marquee from '../components/ui/Marquee';
import { featuredProjects } from '../data/projectDetails';

const services = [
  {
    num: '01',
    title: 'Digital Marketing',
    desc: 'Paid media, content, and campaigns engineered around measurable growth.',
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Fast, scalable websites and apps — built clean, shipped on time.',
  },
  {
    num: '03',
    title: 'PR & Influencer',
    desc: 'Press, creators, and partnerships that put your brand in the right rooms.',
  },
  {
    num: '04',
    title: 'Brand Identity',
    desc: 'Visual systems and voice that feel unmistakably yours.',
  },
];

const stats = [
  { value: '10+', label: 'Projects shipped' },
  { value: '6', label: 'Service lines' },
  { value: '4', label: 'Active markets' },
];

const clients = ['Gawri Ganga', 'Legaloids', 'Compliance World', 'Meta Microdigital', "Driver's Klub"];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-[var(--color-canvas-night)] text-white min-h-screen flex items-center overflow-hidden">
        <Hero3D />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-36 pb-28 md:pt-44 md:pb-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow eyebrow-on-dark eyebrow-accent mb-8"
              >
                Technology & Media Studio
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="display-hero mb-8"
              >
                We build what<br />
                <span className="text-accent">brands become.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="body-lead body-lead-on-dark max-w-lg mb-10"
              >
                Verience partners with companies on web, media, and marketing —
                from first launch to full-scale digital presence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Button to="/projects" variant="accent">
                  View work
                </Button>
                <Button to="/contact" variant="outlineDark">
                  Start a project
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4 flex gap-8 lg:gap-6 lg:justify-end"
            >
              {stats.map((s) => (
                <div key={s.label} className="border-l border-white/15 pl-5">
                  <div className="text-3xl md:text-4xl font-display font-medium text-accent">{s.value}</div>
                  <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Clients */}
      <section className="section-muted py-14 border-b border-[var(--color-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="eyebrow text-center mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-5">
            {clients.map((name) => (
              <span key={name} className="text-sm font-medium text-[var(--color-shade-60)] tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services bento */}
      <section className="section-pad section-muted bg-grid">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <p className="eyebrow eyebrow-accent mb-4">Capabilities</p>
              <h2 className="display-section">Full-stack digital, one studio.</h2>
            </div>
            <Link to="/services" className="link-arrow shrink-0">
              All services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className={index === 0 ? 'card-dark md:row-span-1' : 'card-light'}
              >
                <span className={index === 0 ? 'pill-tag pill-tag-dark mb-5' : 'pill-tag pill-tag-shade mb-5'}>
                  {service.num}
                </span>
                <h3 className="text-xl font-display font-medium mb-3">{service.title}</h3>
                <p className={index === 0 ? 'text-white/60 text-sm leading-relaxed' : 'text-[color:var(--text-muted)] text-sm leading-relaxed'}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="section-pad bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow eyebrow-accent mb-4">Selected work</p>
              <h2 className="display-section">Projects that ship.</h2>
            </div>
            <Link to="/projects" className="link-arrow shrink-0">
              Full portfolio <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`${index % 2 === 1 ? 'md:mt-20' : ''}`}
              >
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className="photo-frame aspect-[4/3] mb-5 relative overflow-hidden bg-[var(--color-shade-30)]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm text-[color:var(--text-muted)]">
                        View project
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.services.slice(0, 2).map((service) => (
                      <span key={service} className="pill-tag pill-tag-shade">
                        {service}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-display font-medium group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-pad relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[640px] mx-auto px-6 text-center relative z-10">
          <p className="eyebrow eyebrow-on-dark eyebrow-accent mb-5">Get started</p>
          <h2 className="display-section text-white mb-6">Your next chapter starts here.</h2>
          <p className="body-lead-on-dark mb-10">
            Tell us what you're building. We'll come back with a clear plan and honest timeline.
          </p>
          <Button to="/contact" variant="accent">
            Book a consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
