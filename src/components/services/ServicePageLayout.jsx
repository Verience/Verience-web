import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';
import {
  getMainServiceBySlug,
  getMainServices,
  isSubService,
} from '../../data/servicePages';

function RichParagraph({ parts, className }) {
  return (
    <p className={className}>
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return <span key={index}>{part}</span>;
        }
        if (part.link) {
          return (
            <Link
              key={index}
              to={part.link}
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              {part.text}
            </Link>
          );
        }
        return <span key={index}>{part.text}</span>;
      })}
    </p>
  );
}

function ServiceParagraph({ paragraph, variant = 'light' }) {
  const className =
    variant === 'dark'
      ? 'text-[15px] leading-[1.8] text-white/65'
      : 'text-[15px] leading-[1.8] text-[color:var(--text-muted)]';

  if (typeof paragraph === 'string') {
    return <p className={className}>{paragraph}</p>;
  }

  return <RichParagraph parts={paragraph} className={className} />;
}

export function ServiceArticle({ service, variant = 'light' }) {
  return (
    <div className="space-y-10">
      {service.sections.map((section, index) => (
        <motion.div
          key={section.heading}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, delay: index * 0.03 }}
        >
          <h2 className="mb-4 font-display text-xl font-medium tracking-tight text-[color:var(--text-color)] md:text-2xl">
            {section.heading}
          </h2>
          <div className="space-y-4">
            {section.paragraphs.map((paragraph, pIndex) => (
              <ServiceParagraph key={pIndex} paragraph={paragraph} variant={variant} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function ServicePageLayout({ service, children }) {
  const parent = service.parentSlug ? getMainServiceBySlug(service.parentSlug) : null;
  const otherServices = getMainServices().filter((item) => item.slug !== service.slug);

  return (
    <div className="min-h-screen section-muted bg-grid">
      <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-32 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <Link
            to={parent ? `/services/${parent.slug}` : '/services'}
            className="link-arrow mb-8 inline-flex text-sm"
          >
            <ArrowLeft size={15} />
            {parent ? `Back to ${parent.title}` : 'All services'}
          </Link>

          <p className="eyebrow eyebrow-accent mb-4">{service.hero.eyebrow}</p>
          <h1 className="display-section mb-6 max-w-3xl">
            {service.hero.title}
            <br />
            <span className="text-accent">{service.hero.accent}</span>
          </h1>
          <p className="body-lead max-w-2xl">{service.hero.lead}</p>
        </motion.div>

        <div className="max-w-3xl">{children}</div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-14 flex max-w-3xl flex-wrap items-center gap-4 border-t border-[var(--color-hairline)] pt-10"
        >
          <Button to="/contact" variant="accent">
            Start a project
          </Button>
          <Link to="/projects" className="link-arrow">
            View our work
          </Link>
        </motion.div>

        {!isSubService(service.slug) && otherServices.length > 0 ? (
          <div className="mt-20 border-t border-[var(--color-hairline)] pt-14">
            <p className="eyebrow mb-6">Other services</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="card-light group flex items-center justify-between !p-5 transition-all hover:-translate-y-0.5"
                >
                  <span className="font-display font-medium">{item.title}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[color:var(--text-muted)] transition-colors group-hover:text-accent"
                  />
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
