import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectCases } from '../data/projectDetails';

export default function Projects() {
  return (
    <div className="pt-32 pb-24 min-h-screen section-muted">
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
            One case study per client — web, marketing, brand, and more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projectCases.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <Link to={`/projects/${project.slug}`} className="group block h-full">
                <div className="photo-frame aspect-[4/3] mb-5 relative bg-[var(--color-shade-30)]">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-[color:var(--text-muted)]">
                      View project
                    </div>
                  )}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.services.map((service) => (
                    <span key={service} className="pill-tag pill-tag-shade">
                      {service}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-display font-medium group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                {project.tagline && (
                  <p className="text-sm text-[color:var(--text-muted)] mt-2 line-clamp-2">
                    {project.tagline}
                  </p>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
