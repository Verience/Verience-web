import { getAllKeywords, SEO_KEYWORDS, SEO_LOCATION } from './keywords';

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
    'Verience is a website design agency and web development company in Delhi, also a branding, social media marketing, and Google Ads agency helping brands ship websites and campaigns since 2025.',
  social: {
    instagram: 'https://www.instagram.com/veriencestudio/',
    linkedin: 'https://www.linkedin.com/company/verience/',
    whatsapp:
      'https://wa.me/918368759792?text=Hi,%20I%20came%20across%20your%20business%20and%20would%20love%20to%20connect.%20I%E2%80%99m%20currently%20looking%20for%20guidance%20and%20insights%20on%20growing%20my%20business,%20and%20I%20feel%20a%20discussion%20with%20you%20could%20be%20valuable.',
  },
};

const PAGE_SEO = {
  '/': {
    title: 'Website Design & Web Development Agency Delhi | Verience',
    description: SITE.defaultDescription,
  },
  '/about': {
    title: 'About | Branding & Digital Agency Delhi',
    description:
      'Founded in 2025 in Delhi, Verience is a media and technology studio and a branding agency helping companies build credible digital presence through web development, marketing, and strategy.',
  },
  '/services': {
    title: 'Services | Digital Marketing Agency Delhi NCR',
    description:
      'Explore six core services: digital marketing, web development, PR, influencer marketing, SEO, and brand identity from Verience in Delhi NCR.',
  },
  '/projects': {
    title: 'Projects | Website Design & Social Media Agency Delhi',
    description:
      'Portfolio from a website design agency Delhi and social media marketing agency Delhi: web builds, reels, branding, and campaigns for clients across Delhi NCR, Tilak Nagar, and West Delhi.',
  },
  '/contact': {
    title: 'Contact | Website Design Tilak Nagar & West Delhi',
    description:
      'Contact Verience for website design in Tilak Nagar, branding in West Delhi, restaurant and real estate marketing across Delhi NCR. Reply within one business day.',
  },
  '/blog': {
    title: 'Blog | Web Design, SEO & Branding Insights',
    description:
      'Articles on website design, lead generation, AI search, SEO trends 2026, branding, and UI UX design for Delhi and NCR businesses.',
  },
};

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const LOCAL_BUSINESS_ID = `${SITE.url}/#localbusiness`;

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

function buildServiceOffers() {
  return getAllKeywords().map((name, index) => ({
    '@type': 'Offer',
    position: index + 1,
    itemOffered: {
      '@type': 'Service',
      name,
      areaServed: {
        '@type': 'City',
        name: SEO_LOCATION.city,
      },
      provider: { '@id': ORG_ID },
    },
  }));
}

export function getStructuredDataGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}${SITE.defaultImage}`,
        email: SITE.email,
        telephone: SITE.phone,
        foundingDate: String(SITE.founded),
        description: SITE.defaultDescription,
        knowsAbout: getAllKeywords(),
        areaServed: {
          '@type': 'City',
          name: SEO_LOCATION.city,
          containedInPlace: {
            '@type': 'Country',
            name: SEO_LOCATION.country,
          },
        },
        sameAs: [SITE.social.instagram, SITE.social.linkedin],
      },
      {
        '@type': 'ProfessionalService',
        '@id': LOCAL_BUSINESS_ID,
        name: SITE.name,
        url: SITE.url,
        image: `${SITE.url}${SITE.defaultImage}`,
        email: SITE.email,
        telephone: SITE.phone,
        priceRange: '$$',
        description: SITE.defaultDescription,
        knowsAbout: getAllKeywords(),
        areaServed: {
          '@type': 'AdministrativeArea',
          name: `${SEO_LOCATION.city}, ${SEO_LOCATION.country}`,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: SEO_LOCATION.city,
          addressRegion: SEO_LOCATION.region,
          addressCountry: SEO_LOCATION.geoRegion.split('-')[0],
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital agency services in Delhi',
          itemListElement: buildServiceOffers(),
        },
        parentOrganization: { '@id': ORG_ID },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: SITE.defaultDescription,
        publisher: { '@id': ORG_ID },
        inLanguage: 'en-IN',
        about: getAllKeywords().map((keyword) => ({
          '@type': 'Thing',
          name: keyword,
        })),
      },
    ],
  };
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

export function getServiceSeo(service) {
  return {
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
    image: SITE.defaultImage,
  };
}

export function getBlogSeo(post) {
  return {
    title: post.seo.title,
    description: post.seo.description,
    path: `/blog/${post.slug}`,
    image: SITE.defaultImage,
    type: 'article',
  };
}

function applyGeoMeta() {
  upsertMeta('name', 'geo.region', SEO_LOCATION.geoRegion);
  upsertMeta('name', 'geo.placename', SEO_LOCATION.city);
}

function applyKeywordMeta() {
  const keywords = getAllKeywords();
  if (keywords.length > 0) {
    upsertMeta('name', 'keywords', keywords.join(', '));
  }
}

export function applyPageSeo({ title, description, path = '/', image, type = 'website' }) {
  const canonicalUrl = `${SITE.url}${path === '/' ? '' : path}`;
  const imageUrl = toAbsoluteUrl(image);
  const pageTitle = formatTitle(title);

  document.title = pageTitle;

  upsertMeta('name', 'description', description);
  upsertMeta('name', 'robots', 'index, follow');
  applyGeoMeta();
  applyKeywordMeta();
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
