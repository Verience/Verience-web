import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function SeoArticle({
  eyebrow,
  title,
  titleAccent,
  sections,
  showCta = false,
  className = 'section-pad border-t border-[var(--color-hairline)] bg-white',
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-3xl">
          {(eyebrow || title) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              {eyebrow ? <p className="eyebrow eyebrow-accent mb-4">{eyebrow}</p> : null}
              {title ? (
                <h2 className="display-section">
                  {title}
                  {titleAccent ? (
                    <>
                      <br />
                      <span className="text-accent">{titleAccent}</span>
                    </>
                  ) : null}
                </h2>
              ) : null}
            </motion.div>
          )}

          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
              >
                <h3 className="mb-4 font-display text-xl font-medium tracking-tight text-[color:var(--text-color)] md:text-2xl">
                  {section.heading}
                </h3>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-[15px] leading-[1.8] text-[color:var(--text-muted)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {showCta ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mt-14 flex flex-wrap items-center gap-4 border-t border-[var(--color-hairline)] pt-10"
            >
              <Button to="/contact" variant="accent">
                Start a project
              </Button>
              <Link to="/projects" className="link-arrow">
                View client work
              </Link>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
