import { useEffect } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { applyPageSeo, getPageSeo, getProjectSeo, getServiceSeo, getBlogSeo } from '../../lib/seo';
import { getProjectBySlug } from '../../data/projectDetails';
import { getServiceBySlug } from '../../data/servicePages';
import { getBlogBySlug } from '../../data/blogs';

export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const projectMatch = matchPath({ path: '/projects/:slug', end: true }, pathname);

    if (projectMatch?.params.slug) {
      const project = getProjectBySlug(projectMatch.params.slug);
      if (project) {
        applyPageSeo(getProjectSeo(project));
        return;
      }
    }

    const serviceMatch = matchPath({ path: '/services/:slug', end: true }, pathname);

    if (serviceMatch?.params.slug) {
      const service = getServiceBySlug(serviceMatch.params.slug);
      if (service) {
        applyPageSeo(getServiceSeo(service));
        return;
      }
    }

    const blogMatch = matchPath({ path: '/blog/:slug', end: true }, pathname);

    if (blogMatch?.params.slug) {
      const post = getBlogBySlug(blogMatch.params.slug);
      if (post) {
        applyPageSeo(getBlogSeo(post));
        return;
      }
    }

    applyPageSeo(getPageSeo(pathname));
  }, [pathname]);

  return null;
}
