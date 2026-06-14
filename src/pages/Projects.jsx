import { motion } from 'framer-motion';
import ProjectReelCarousel from '../components/ui/ProjectReelCarousel';
import ClientWorkSection from '../components/ui/ClientWorkSection';
import { projectReels } from '../data/projectDetails';

export default function Projects() {
  return (
    <div className="pt-32 pb-0 min-h-screen section-muted overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow eyebrow-accent mb-4">Portfolio</p>
          <h1 className="display-section mb-6">Work we're proud of.</h1>
          <p className="body-lead">
            Reels and campaigns we've built for clients, web, social, and brand in motion.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.08 }}
      >
        <ProjectReelCarousel reels={projectReels} />
      </motion.div>

      <ClientWorkSection />
    </div>
  );
}
