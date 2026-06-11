import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { getProjectBySlug } from '../data/projectDetails';
import ImageCarousel from '../components/ui/ImageCarousel';
import Button from '../components/ui/Button';

const socialConfig = [
  { key: 'instagram', label: 'Instagram', icon: Instagram },
  { key: 'facebook', label: 'Facebook', icon: Facebook },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { key: 'twitter', label: 'Twitter / X', icon: Twitter },
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const activeSocials = socialConfig.filter(
    ({ key }) => project.social?.[key]?.trim()
  );

  return (
    <div className="pt-28 pb-24 min-h-screen section-muted">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--text-muted)] hover:text-[color:var(--text-color)] transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.services.map((service) => (
              <span key={service} className="pill-tag pill-tag-accent">
                {service}
              </span>
            ))}
          </div>

          <h1 className="display-section mb-3">{project.title}</h1>
          <p className="body-lead max-w-2xl mb-10">{project.tagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <ImageCarousel images={project.carousel} alt={project.title} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h2 className="text-lg font-display font-medium mb-4">Overview</h2>
              <p className="text-[color:var(--text-muted)] leading-relaxed">{project.description}</p>
            </div>

            {project.contentPreview?.length > 0 && (
              <div>
                <h2 className="text-lg font-display font-medium mb-4">Project details</h2>
                <div className="space-y-4">
                  {project.contentPreview.map((paragraph, i) => (
                    <p key={i} className="text-[color:var(--text-muted)] leading-relaxed text-[15px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {project.highlights?.length > 0 && (
              <div className="card-light !p-6 space-y-5">
                <h3 className="text-sm font-medium uppercase tracking-wider text-[color:var(--text-muted)]">
                  At a glance
                </h3>
                {project.highlights.map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xs text-[color:var(--text-muted)] mb-1">{label}</p>
                    <p className="font-medium text-sm">{value}</p>
                  </div>
                ))}
              </div>
            )}

            {project.website?.trim() && (
              <div className="card-light !p-6">
                <h3 className="text-sm font-medium uppercase tracking-wider text-[color:var(--text-muted)] mb-4">
                  Live site
                </h3>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                >
                  Visit website <ExternalLink size={14} />
                </a>
              </div>
            )}

            {activeSocials.length > 0 && (
              <div className="card-light !p-6">
                <h3 className="text-sm font-medium uppercase tracking-wider text-[color:var(--text-muted)] mb-4">
                  Social
                </h3>
                <div className="flex flex-wrap gap-3">
                  {activeSocials.map(({ key, label, icon: Icon }) => (
                    <a
                      key={key}
                      href={project.social[key]}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--color-hairline)] text-sm hover:border-[var(--color-accent)] hover:text-accent transition-colors"
                      aria-label={label}
                    >
                      <Icon size={16} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <Button to="/contact" variant="accent" className="w-full">
              Start a similar project
            </Button>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
