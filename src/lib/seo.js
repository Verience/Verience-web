export const SITE = {
  name: 'Verience Media and Technology',
  shortName: 'Verience',
  url: 'https://veriencestudio.com',
  email: 'hello@veriencestudio.com',
  phone: '+918368759792',
  founded: 2025,
  locale: 'en_IN',
  defaultImage: '/favicon.png',
  defaultDescription:
    'Verience Media and Technology is a studio for web development, digital marketing, SEO, and brand media. Founded in 2025, we help companies ship websites, campaigns, and content that grow.',
  social: {
    instagram: 'https://www.instagram.com/veriencestudio/',
    linkedin: 'https://www.linkedin.com/company/verience/',
  },
};

const PAGE_SEO = {
  '/': {
    title: 'Verience Media and Technology | Web, Marketing & Brand Studio',
    description: SITE.defaultDescription,
  },
  '/about': {
    title: 'About | Verience Media and Technology',
    description:
      'Founded in 2025, Verience is a media and technology studio helping brands build credible digital presence through development, marketing, and strategy.',
  },
  '/services': {
    title: 'Services | Web Development, SEO & Digital Marketing',
    description:
      'Web development, digital marketing, SEO, PR, influencer campaigns, and brand identity from Verience Media and Technology.',
  },
  '/projects': {
    title: 'Projects | Client Work & Case Studies',
    description:
      'Explore Verience client work across web, social media, reels, and brand campaigns for companies in tech, wellness, mobility, and compliance.',
  },
  '/team': {
    title: 'Team | Verience Media and Technology',
    description:
      'Meet the Verience team behind web builds, marketing campaigns, and brand experiences for growing companies.',
  },
  '/contact': {
    title: 'Contact | Start a Project with Verience',
    description:
      'Get in touch with Verience Media and Technology for web development, digital marketing, and media projects. We respond within one business day.',
  },
};

function upsertMeta(attribute, key, content) {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;

  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function toAbsoluteUrl(path) {
  if (!path) return `${SITE.url}${SITE.defaultImage}`;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

function formatTitle(title) {
  return title.includes(SITE.shortName) ? title : `${title} | ${SITE.shortName}`;
}

export function getPageSeo(pathname) {
  const config = PAGE_SEO[pathname] ?? {
    title: SITE.name,
    description: SITE.defaultDescription,
  };

  return {
    title: config.title,
    description: config.description,
    path: pathname,
    image: SITE.defaultImage,
  };
}

export function getProjectSeo(project) {
  const description = project.tagline || project.description?.slice(0, 160) || SITE.defaultDescription;

  return {
    title: `${project.title} Case Study`,
    description,
    path: `/projects/${project.slug}`,
    image: project.coverImage || SITE.defaultImage,
    type: 'article',
  };
}

export function applyPageSeo({ title, description, path = '/', image, type = 'website' }) {
  const canonicalUrl = `${SITE.url}${path === '/' ? '' : path}`;
  const imageUrl = toAbsoluteUrl(image);
  const pageTitle = formatTitle(title);

  document.title = pageTitle;

  upsertMeta('name', 'description', description);
  upsertMeta('name', 'robots', 'index, follow');
  upsertMeta('property', 'og:site_name', SITE.name);
  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:url', canonicalUrl);
  upsertMeta('property', 'og:title', pageTitle);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:image', imageUrl);
  upsertMeta('property', 'og:locale', SITE.locale);
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', pageTitle);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', imageUrl);

  upsertLink('canonical', canonicalUrl);
}
