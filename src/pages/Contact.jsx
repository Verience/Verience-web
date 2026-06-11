import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen section-muted">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow eyebrow-accent mb-4">Contact</p>
            <h1 className="display-section mb-6">
              Let's build<br /><span className="text-accent">something real.</span>
            </h1>
            <p className="body-lead mb-12 max-w-md">
              Have a project in mind? Reach out and we'll respond within one business day.
            </p>

            <div className="space-y-8">
              <div>
                <p className="eyebrow mb-2">Email</p>
                <a
                  href="mailto:wemultify@gmail.com"
                  className="text-lg font-medium hover:text-accent transition-colors"
                >
                  wemultify@gmail.com
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2">Phone</p>
                <p className="text-lg font-medium">+91 9599454313</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-light"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-[color:var(--text-muted)] mb-2">Name</label>
                <input type="text" className="input-field" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-[color:var(--text-muted)] mb-2">Email</label>
                <input type="email" className="input-field" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm text-[color:var(--text-muted)] mb-2">Message</label>
                <textarea
                  rows="5"
                  className="input-field resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit" variant="accent" className="w-full">
                Send message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
