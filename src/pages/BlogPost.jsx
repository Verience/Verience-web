import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock3 } from 'lucide-react';
import BlogArticle from '../components/blog/BlogArticle';
import Button from '../components/ui/Button';
import { getAllBlogPosts, getBlogBySlug } from '../data/blogs';

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);
  const otherPosts = getAllBlogPosts().filter((item) => item.slug !== slug).slice(0, 3);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen section-muted bg-grid">
      <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-32 md:px-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <Link to="/blog" className="link-arrow mb-8 inline-flex text-sm">
            <ArrowLeft size={15} />
            All articles
          </Link>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="pill-tag pill-tag-accent">{post.category}</span>
            <span className="flex items-center gap-1.5 text-xs text-[color:var(--text-muted)]">
              <Clock3 size={13} />
              {post.readTime}
            </span>
            <span className="text-xs text-[color:var(--text-muted)]">{post.author}</span>
          </div>

          <h1 className="display-section mb-6">{post.title}</h1>
          <p className="body-lead mb-4">{post.excerpt}</p>
          <time dateTime={post.publishedAt} className="text-sm text-[color:var(--text-muted)]">
            Published {formatDate(post.publishedAt)}
          </time>
        </motion.header>

        <div className="max-w-3xl">
          <BlogArticle sections={post.sections} />
        </div>

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
          <Link to="/services" className="link-arrow">
            Explore services
          </Link>
        </motion.div>

        {otherPosts.length > 0 ? (
          <div className="mt-20 border-t border-[var(--color-hairline)] pt-14">
            <p className="eyebrow eyebrow-accent mb-8">More articles</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {otherPosts.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="card-light group !p-5 transition-all hover:-translate-y-0.5"
                >
                  <p className="eyebrow mb-3">{item.category}</p>
                  <h2 className="font-display text-lg font-medium leading-snug transition-colors group-hover:text-accent">
                    {item.title}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
