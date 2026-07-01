import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from '../components/ui/Button';
import SeoArticle from '../components/seo/SeoArticle';
import { getMainServices } from '../data/servicePages';
import ServicePageLayout, { ServiceArticle } from '../components/services/ServicePageLayout';
import { getServiceBySlug } from '../data/servicePages';
import { servicesSeoSections } from '../data/servicesSeoContent';

export default function Services() {
  const services = getMainServices();

  return (
    <div className="min-h-screen section-muted bg-grid">
      <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-32 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <p className="eyebrow eyebrow-accent mb-4">Services</p>
          <h1 className="display-section mb-6">
            Everything you need to <span className="text-accent">grow online.</span>
          </h1>
          <p className="body-lead mb-8">
          End-to-end digital services, from your first website to ongoing marketing and growth
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact" variant="primary">
              Start a project
            </Button>
            <Button to="/projects" variant="outlineLight">
              View our work
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className={`group block h-full transition-all hover:-translate-y-0.5 ${
                    index === 0 ? 'card-dark' : 'card-light'
                  }`}
                >
                  <Icon
                    size={26}
                    className={index === 0 ? 'mb-5 text-accent' : 'mb-5 text-[var(--color-shade-50)]'}
                    strokeWidth={1.5}
                  />
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h2 className="font-display text-lg font-medium">{service.title}</h2>
                    <ArrowUpRight
                      size={18}
                      className={`shrink-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                        index === 0 ? 'text-white/50 group-hover:text-accent' : 'text-[color:var(--text-muted)] group-hover:text-accent'
                      }`}
                    />
                  </div>
                  <p
                    className={
                      index === 0
                        ? 'text-sm leading-relaxed text-white/60'
                        : 'text-sm leading-relaxed text-[color:var(--text-muted)]'
                    }
                  >
                    {service.shortDesc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <SeoArticle
        eyebrow="What we do"
        title="Branding, design, and"
        titleAccent="marketing in one place."
        sections={servicesSeoSections}
        className="section-pad border-t border-[var(--color-hairline)] bg-white"
      />

      <section className="section-dark section-pad relative overflow-hidden border-t border-white/5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-[640px] px-6 text-center"
        >
          <p className="eyebrow eyebrow-on-dark eyebrow-accent mb-5">Get started</p>
          <h2 className="display-section mb-6 text-white">
            Not sure which service<br />
            <span className="text-accent">you need first?</span>
          </h2>
          <p className="body-lead-on-dark mb-10">
            Tell us what you are building. We will recommend the right mix of design, development,
            and marketing, with a clear plan and honest timeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" variant="accent">
              Book a consultation
            </Button>
            <Button to="/contact" variant="outlineDark">
              Let&apos;s talk
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <ServicePageLayout service={service}>
      <ServiceArticle service={service} />
    </ServicePageLayout>
  );
}
