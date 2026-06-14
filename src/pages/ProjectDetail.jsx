import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getProjectBySlug, getReelsBySlug } from '../data/projectDetails';
import { getClientWorkBySlug } from '../data/clientWork';
import { getTestimonialBySlug } from '../data/testimonials';
import ProjectDetailContent from '../components/ui/ProjectDetailContent';
import Button from '../components/ui/Button';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const clientWork = getClientWorkBySlug(slug);
  const reels = getReelsBySlug(slug);
  const testimonial = getTestimonialBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen section-muted pb-24 pt-28">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text-color)]"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span key={service} className="pill-tag pill-tag-accent">
                {service}
              </span>
            ))}
          </div>

          <h1 className="display-section mb-3">{project.title}</h1>
          <p className="body-lead mb-10 max-w-2xl">{project.tagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <ProjectDetailContent
            project={project}
            clientWork={clientWork}
            reels={reels}
            testimonial={testimonial}
          />

          <div className="mt-14 border-t border-[var(--color-hairline)] pt-10">
            <Button to="/contact" variant="accent">
              Start a similar project
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
