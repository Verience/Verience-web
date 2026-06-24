import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import Button from '../components/ui/Button';
import { getAllBlogPosts } from '../data/blogs';

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen section-muted bg-grid">
      <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-32 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="eyebrow eyebrow-accent mb-4">Blog</p>
          <h1 className="display-section mb-6">
            Insights for <span className="text-accent">growing brands.</span>
          </h1>
          <p className="body-lead">
            Deep guides on website design, SEO, branding, and digital growth for Delhi and NCR
            businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="card-light group flex h-full flex-col !p-6 transition-all hover:-translate-y-0.5 md:!p-8"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="pill-tag pill-tag-accent">{post.category}</span>
                  <span className="flex items-center gap-1.5 text-xs text-[color:var(--text-muted)]">
                    <Clock3 size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="mb-3 font-display text-xl font-medium leading-snug transition-colors group-hover:text-accent md:text-2xl">
                  {post.title}
                </h2>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-[color:var(--text-muted)]">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between gap-4 border-t border-[var(--color-hairline)] pt-5">
                  <time dateTime={post.publishedAt} className="text-xs text-[color:var(--text-muted)]">
                    {formatDate(post.publishedAt)}
                  </time>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--text-color)] transition-colors group-hover:text-accent">
                    Read article
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

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
          <p className="eyebrow eyebrow-on-dark eyebrow-accent mb-5">Work with us</p>
          <h2 className="display-section mb-6 text-white">
            Ready to put these ideas<br />
            <span className="text-accent">into action?</span>
          </h2>
          <p className="body-lead-on-dark mb-10">
            Whether you need a lead generation website, a rebrand, or an SEO strategy built for AI
            search, we can help you plan the next step.
          </p>
          <Button to="/contact" variant="accent">
            Start a project
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
