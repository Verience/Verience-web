import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CLIENT_FILTERS, getClientsByFilter } from '../../data/clientWork';
import { getProjectBySlug } from '../../data/projectDetails';

function ClientCard({ client, filter }) {
  const project = getProjectBySlug(client.slug);
  const content = client.content[filter];
  const coverImage = project?.coverImage;

  if (!content) return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35 }}
    >
      <Link to={`/projects/${client.slug}`} className="group block h-full">
        <div className="photo-frame relative mb-5 aspect-[4/3] overflow-hidden bg-[var(--color-shade-30)]">
          {coverImage ? (
            <img
              src={coverImage}
              alt={client.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-[color:var(--text-muted)]">
              {client.title}
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          <span className="pill-tag pill-tag-accent">{filter === 'tech' ? 'Tech' : 'Media'}</span>
          {client.filters.length > 1 ? (
            <span className="pill-tag pill-tag-shade">Tech + Media</span>
          ) : null}
        </div>

        <h3 className="font-display text-xl font-medium transition-colors group-hover:text-accent">
          {client.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
          {content.tagline}
        </p>
      </Link>
    </motion.div>
  );
}

export default function ClientWorkSection() {
  const [filter, setFilter] = useState('tech');
  const clients = useMemo(() => getClientsByFilter(filter), [filter]);

  return (
    <section className="section-pad border-t border-[var(--color-hairline)] bg-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow eyebrow-accent mb-4">Client work</p>
          <h2 className="display-section mb-4">Every client, end to end.</h2>
          <p className="body-lead">
            Browse by Tech or Media, click a client to see reels, posts, and full project details.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {CLIENT_FILTERS.map(({ id, label }) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                className={
                  active
                    ? 'btn-pill bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]'
                    : 'btn-pill border border-[var(--color-hairline)] bg-white text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }
              >
                {label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {clients.map((client) => (
              <ClientCard key={`${client.slug}-${filter}`} client={client} filter={filter} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
