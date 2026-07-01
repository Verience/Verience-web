import { getAllKeywords, SEO_KEYWORDS, SEO_LOCATION } from './keywords';

export const SEO_LIMITS = {
  title: 60,
  description: 155,
};

export const SITE = {
  name: 'Verience Media and Technology',
  brandName: 'Verience Studio',
  shortName: 'Verience',
  url: 'https://veriencestudio.com',
  email: 'hello@veriencestudio.com',
  phone: '+918368759792',
  founded: 2025,
  locale: 'en_IN',
  defaultImage: '/favicon.png',
  defaultDescription:
    'Verience Studio is a Delhi agency for web design, branding, social media, and digital marketing. Websites, campaigns, and creative strategy since 2025.',
  social: {
    instagram: 'https://www.instagram.com/veriencestudio/',
    facebook: 'https://www.facebook.com/people/Verience-Studio/61591026191470/',
    linkedin: 'https://www.linkedin.com/company/verience/',
    whatsapp:
      'https://wa.me/918368759792?text=Hi,%20I%20came%20across%20your%20business%20and%20would%20love%20to%20connect.%20I%E2%80%99m%20currently%20looking%20for%20guidance%20and%20insights%20on%20growing%20my%20business,%20and%20I%20feel%20a%20discussion%20with%20you%20could%20be%20valuable.',
  },
  address: {
    locality: 'Delhi',
    region: 'Delhi',
    country: 'India',
    countryCode: 'IN',
  },
};

const PAGE_SEO = {
  '/': {
    title: 'Verience Studio | Web Design Agency Delhi',
    description: SITE.defaultDescription,
  },
  '/about': {
    title: 'About Verience Studio | Delhi Agency',
    description:
      'Verience Studio is a Delhi media and technology studio for branding, web development, social media, and marketing strategy. Credible digital presence since 2025.',
  },
  '/services': {
    title: 'Digital Services | Verience Studio',
    description:
      'Web design, branding, SEO, social media, and Google Ads from Verience Studio in Delhi NCR. Six core services, one accountable creative team.',
  },
  '/projects': {
    title: 'Client Work | Verience Studio Delhi',
    description:
      'Verience Studio portfolio: websites, social reels, branding, and campaigns for clients across Delhi NCR, Tilak Nagar, and West Delhi.',
  },
  '/contact': {
    title: 'Contact Verience Studio | Delhi',
    description:
      'Contact Verience Studio in Delhi for web design, branding, and marketing. Email hello@veriencestudio.com or call +91 8368759792. Reply within one business day.',
  },
  '/blog': {
    title: 'Blog | Verience Studio',
    description:
      'Guides on website design, SEO, branding, and digital growth for Delhi and NCR businesses from Verience Studio.',
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

export function clampMetaText(text, maxLength) {
  if (!text || text.length <= maxLength) return text;

  const trimmed = text.slice(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(' ');

  if (lastSpace > maxLength * 0.55) {
    return trimmed.slice(0, lastSpace).trim();
  }

  return trimmed.trim();
}

export function formatTitle(title) {
  const withBrand =
    title.includes(SITE.brandName) || title.includes(SITE.shortName)
      ? title
      : `${title} | ${SITE.brandName}`;

  return clampMetaText(withBrand, SEO_LIMITS.title);
}

export function formatDescription(description) {
  return clampMetaText(description || SITE.defaultDescription, SEO_LIMITS.description);
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
        alternateName: [SITE.brandName, SITE.shortName],
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
        sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
      },
      {
        '@type': 'LocalBusiness',
        '@id': LOCAL_BUSINESS_ID,
        name: SITE.brandName,
        alternateName: [SITE.name, SITE.shortName],
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
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          addressCountry: SITE.address.countryCode,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE.phone,
          email: SITE.email,
          contactType: 'customer service',
          areaServed: SEO_LOCATION.country,
          availableLanguage: ['English', 'Hindi'],
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
        name: SITE.brandName,
        alternateName: SITE.name,
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
    title: SITE.brandName,
    description: SITE.defaultDescription,
  };

  return {
    title: formatTitle(config.title),
    description: formatDescription(config.description),
    path: pathname,
    image: SITE.defaultImage,
  };
}

export function getProjectSeo(project) {
  const rawDescription =
    project.tagline || project.description?.slice(0, 160) || SITE.defaultDescription;

  return {
    title: formatTitle(`${project.title} Case Study`),
    description: formatDescription(rawDescription),
    path: `/projects/${project.slug}`,
    image: project.coverImage || SITE.defaultImage,
    type: 'article',
  };
}

export function getServiceSeo(service) {
  return {
    title: formatTitle(service.seo.title),
    description: formatDescription(service.seo.description),
    path: `/services/${service.slug}`,
    image: SITE.defaultImage,
  };
}

export function getBlogSeo(post) {
  return {
    title: formatTitle(post.seo.title),
    description: formatDescription(post.seo.description),
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
  const pageDescription = formatDescription(description);

  document.title = pageTitle;

  upsertMeta('name', 'description', pageDescription);
  upsertMeta('name', 'robots', 'index, follow');
  applyGeoMeta();
  applyKeywordMeta();
  upsertMeta('property', 'og:site_name', SITE.brandName);
  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:url', canonicalUrl);
  upsertMeta('property', 'og:title', pageTitle);
  upsertMeta('property', 'og:description', pageDescription);
  upsertMeta('property', 'og:image', imageUrl);
  upsertMeta('property', 'og:locale', SITE.locale);
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', pageTitle);
  upsertMeta('name', 'twitter:description', pageDescription);
  upsertMeta('name', 'twitter:image', imageUrl);

  upsertLink('canonical', canonicalUrl);
}
