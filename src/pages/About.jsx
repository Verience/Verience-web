import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Layers,
  Rocket,
  Target,
  Users,
  Zap,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { SITE } from '../lib/seo';

const stats = [
  { value: '10+', label: 'Projects shipped' },
  { value: '6', label: 'Service lines' },
  { value: String(SITE.founded), label: 'Founded' },
];

const values = [
  {
    icon: Target,
    title: 'Outcome-first',
    desc: 'Every deliverable ties back to a business goal: leads, launches, or brand lift. No vanity metrics.',
  },
  {
    icon: Zap,
    title: 'Ship fast, ship right',
    desc: 'Tight scopes, weekly updates, and work you can actually use. We move quickly without cutting corners.',
  },
  {
    icon: Layers,
    title: 'Full-stack studio',
    desc: 'Design, development, and marketing under one roof, so your brand stays consistent across every touchpoint.',
  },
  {
    icon: Users,
    title: 'Partners, not vendors',
    desc: 'We embed in your team, ask hard questions, and stay honest about timelines, trade-offs, and what will move the needle.',
  },
];

const process = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn your goals, audience, and constraints, then map a clear path forward.',
  },
  {
    num: '02',
    title: 'Strategy & design',
    desc: 'Wireframes, brand direction, and a scoped plan before a single line of code or copy is written.',
  },
  {
    num: '03',
    title: 'Build & launch',
    desc: 'Development, content, and campaigns executed in sprints with regular check-ins.',
  },
  {
    num: '04',
    title: 'Grow & iterate',
    desc: 'Post-launch optimization, reporting, and ongoing support to keep momentum going.',
  },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[var(--color-canvas-night)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-0 h-[480px] w-[480px] translate-x-1/4 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-28 pt-36 md:px-12 md:pb-36 md:pt-44">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow eyebrow-on-dark eyebrow-accent mb-8"
              >
                About Verience Studio
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="display-hero mb-8"
              >
                A studio at the<br />
                <span className="text-accent">intersection of tech and media.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="body-lead body-lead-on-dark mb-10 max-w-xl"
              >
                Founded in {SITE.founded} in Delhi, Verience Studio helps brands build credible digital
                presence through development, marketing, and strategy that actually ships.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Button to="/contact" variant="accent">
                  Start a project
                </Button>
                <Button to="/projects" variant="outlineDark">
                  View our work
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 lg:col-span-4 lg:justify-end lg:gap-6"
            >
              {stats.map((s) => (
                <div key={s.label} className="border-l border-white/15 pl-5">
                  <div className="font-display text-3xl font-medium text-accent md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad section-muted bg-grid border-t border-[var(--color-hairline)]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="photo-frame relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Verience team collaborating"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-canvas-light)]/95 p-4 shadow-lg backdrop-blur-sm sm:max-w-[11rem]">
                  <Globe size={20} className="mb-2 text-[var(--color-accent)]" strokeWidth={1.5} />
                  <p className="font-display text-sm font-medium leading-snug">
                    Based in Delhi, working globally
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <p className="eyebrow eyebrow-accent mb-4">Our story</p>
                <h2 className="display-section mb-6">
                  Built for brands that need to <span className="text-accent">move.</span>
                </h2>
                <p className="body-lead mb-4">
                  Verience started with a simple observation: most agencies either build beautiful
                  things that don&apos;t convert, or run campaigns on sites that don&apos;t hold up.
                  We bridge that gap.
                </p>
                <p className="text-[15px] leading-relaxed text-[color:var(--text-muted)]">
                  We&apos;re a lean studio where design, engineering, and marketing work as one unit.
                  That means fewer handoffs, faster decisions, and work that looks sharp and performs
                  under real-world pressure.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card-light !p-5">
                  <Rocket size={20} className="mb-3 text-[var(--color-accent)]" strokeWidth={1.5} />
                  <p className="font-display text-sm font-medium">Launch-ready</p>
                  <p className="mt-1 text-xs leading-relaxed text-[color:var(--text-muted)]">
                    From MVP to full-scale rollout
                  </p>
                </div>
                <div className="card-dark !p-5">
                  <Target size={20} className="mb-3 text-[var(--color-accent)]" strokeWidth={1.5} />
                  <p className="font-display text-sm font-medium">Results-driven</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">
                    Measured against real KPIs
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            <p className="eyebrow eyebrow-accent mb-4">What we stand for</p>
            <h2 className="display-section mb-4">Principles that guide every project.</h2>
            <p className="body-lead">
              These aren&apos;t wall posters. They&apos;re how we scope, communicate, and deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isDark = index === 0;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className={isDark ? 'card-dark' : 'card-light'}
                >
                  <Icon
                    size={26}
                    className={`mb-5 ${isDark ? 'text-accent' : 'text-[var(--color-shade-50)]'}`}
                    strokeWidth={1.5}
                  />
                  <h3 className="mb-3 font-display text-xl font-medium">{value.title}</h3>
                  <p
                    className={
                      isDark
                        ? 'text-sm leading-relaxed text-white/60'
                        : 'text-sm leading-relaxed text-[color:var(--text-muted)]'
                    }
                  >
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad section-muted border-t border-[var(--color-hairline)]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <p className="eyebrow eyebrow-accent mb-4">How we work</p>
              <h2 className="display-section">A process built for clarity.</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-sm text-sm leading-relaxed text-[color:var(--text-muted)]"
            >
              No bloated decks, no endless revisions. Just structured phases with clear deliverables
              at every step.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className={`relative ${index === 0 ? 'card-dark' : 'card-light'}`}
              >
                <span
                  className={
                    index === 0 ? 'pill-tag pill-tag-dark mb-5' : 'pill-tag pill-tag-shade mb-5'
                  }
                >
                  {step.num}
                </span>
                <h3 className="mb-3 font-display text-lg font-medium">{step.title}</h3>
                <p
                  className={
                    index === 0
                      ? 'text-sm leading-relaxed text-white/60'
                      : 'text-sm leading-relaxed text-[color:var(--text-muted)]'
                  }
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-pad relative overflow-hidden border-t border-white/5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-[640px] px-6 text-center"
        >
          <p className="eyebrow eyebrow-on-dark eyebrow-accent mb-5">Get started</p>
          <h2 className="display-section mb-6 text-white">
            Ready to build<br />
            <span className="text-accent">something real?</span>
          </h2>
          <p className="body-lead-on-dark mb-10">
            Tell us what you&apos;re working on. We&apos;ll come back with a clear plan and honest
            timeline, with no generic pitch deck.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" variant="accent">
              Book a consultation
            </Button>
            <Link to="/services" className="link-arrow text-white/70 hover:text-white">
              Explore services <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
