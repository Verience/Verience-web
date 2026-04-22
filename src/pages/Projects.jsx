import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECT_SERVICE_FILTERS, projects } from '../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="pt-32 pb-24 min-h-screen text-[color:var(--text-color)] transition-colors duration-500 relative overflow-x-hidden overflow-y-visible">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-none mb-4">
              Featured<br/><span className="text-gradient">Projects</span>
            </h1>
            <p className="text-[color:var(--text-muted)] text-lg max-w-lg">
              A curated selection of our finest work cutting across web, mobile, and AI.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12 md:mb-16 -mx-1 px-1"
        >
          <p className="text-xs font-heading uppercase tracking-widest text-[color:var(--text-muted)] mb-4">
            Filter by service
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-heading font-bold uppercase tracking-wide transition-all duration-300 border ${
                activeFilter === 'all'
                  ? 'bg-[var(--primary)] text-white border-[var(--primary)]'
                  : 'glass border-[var(--surface-rgb)]/20 text-[color:var(--text-color)] hover:border-[var(--primary)]/50'
              }`}
            >
              All
            </button>
            {PROJECT_SERVICE_FILTERS.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveFilter(label)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-heading font-bold uppercase tracking-wide transition-all duration-300 border ${
                  activeFilter === label
                    ? 'bg-[var(--primary)] text-white border-[var(--primary)]'
                    : 'glass border-[var(--surface-rgb)]/20 text-[color:var(--text-color)] hover:border-[var(--primary)]/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-14 md:gap-x-12 md:gap-y-20">
          {filteredProjects.length === 0 ? (
            <p className="col-span-full text-center text-[color:var(--text-muted)] py-16 text-lg">
              No projects in this category yet. Check back soon.
            </p>
          ) : (
            filteredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.website}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 2) * 0.2, duration: 0.6 }}
              className="group cursor-pointer block overflow-visible pb-2"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-8 shadow-sm border border-[var(--surface-rgb)]/10">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  <ArrowUpRight className="text-white" size={24} />
                </div>
              </div>
              <div className="flex justify-between items-start overflow-visible pb-6">
                <div className="min-w-0 pr-2">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 leading-snug pb-1 group-hover:text-[var(--primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[color:var(--text-muted)] leading-relaxed">{project.category}</p>
                </div>
              </div>
            </motion.a>
          ))
          )}
        </div>
      </div>
    </div>
  );
}
