import { motion } from 'framer-motion';
import ProjectReelCarousel from '../components/ui/ProjectReelCarousel';
import ClientWorkSection from '../components/ui/ClientWorkSection';
import SeoArticle from '../components/seo/SeoArticle';
import { projectReels } from '../data/projectDetails';
import { projectsArticleSections } from '../data/projectsSeoContent';

export default function Projects() {
  return (
    <div className="min-h-screen overflow-hidden section-muted">
      <div className="pt-32 pb-0">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            <p className="eyebrow eyebrow-accent mb-4">Portfolio</p>
            <h1 className="display-section mb-6">Work we&apos;re proud of.</h1>
            <p className="body-lead">
              Reels, websites, and brand campaigns from our work as a website design agency Delhi,
              social media marketing agency Delhi, and web development company Delhi, built for
              clients across tech, wellness, mobility, and compliance.
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

      <SeoArticle
        eyebrow="Our work"
        title="Projects that reflect"
        titleAccent="real business goals."
        sections={projectsArticleSections}
        className="section-pad border-t border-[var(--color-hairline)] section-muted bg-grid"
      />
    </div>
  );
}
