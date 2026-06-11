import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen section-muted">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <p className="eyebrow eyebrow-accent mb-4">About</p>
          <h1 className="display-section mb-6">
            A studio at the intersection of <span className="text-accent">tech and media.</span>
          </h1>
          <p className="body-lead">
            Founded in 2024, Verience helps brands build credible digital presence —
            through development, marketing, and strategy that actually ships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="photo-frame aspect-[4/5]"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Team collaborating"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xl font-display font-medium mb-3">How we work</h3>
              <p className="text-[color:var(--text-muted)] leading-relaxed">
                We move fast without cutting corners — clear scopes, regular updates,
                and deliverables you can actually use. No bloated decks, no endless revisions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-light !p-6">
                <div className="text-4xl font-display font-medium text-accent mb-1">10+</div>
                <div className="text-xs uppercase tracking-wider text-[color:var(--text-muted)]">
                  Projects delivered
                </div>
              </div>
              <div className="card-dark !p-6">
                <div className="text-4xl font-display font-medium text-accent mb-1">6</div>
                <div className="text-xs uppercase tracking-wider text-white/50">
                  Core services
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
