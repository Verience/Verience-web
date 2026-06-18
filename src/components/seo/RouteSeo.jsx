import { useEffect } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { applyPageSeo, getPageSeo, getProjectSeo } from '../../lib/seo';
import { getProjectBySlug } from '../../data/projectDetails';

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

    applyPageSeo(getPageSeo(pathname));
  }, [pathname]);

  return null;
}
