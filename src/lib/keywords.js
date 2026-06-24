/** Primary SEO targets, visible to crawlers via schema/meta, not in page UI */
export const SEO_KEYWORDS = {
  primary: [
    'Verience Studio',
    'Verience Studio Delhi',
    'Website Design Agency Delhi',
    'Web Development Company Delhi',
    'Branding Agency Delhi',
    'Social Media Marketing Agency Delhi',
    'Google Ads Agency Delhi',
  ],
  /** Local & niche long-tail targets */
  secondary: [
    'Website Design Tilak Nagar',
    'Branding Agency West Delhi',
    'Restaurant Marketing Agency Delhi',
    'Real Estate Marketing Agency Delhi',
    'Digital Marketing Agency Delhi NCR',
  ],
};

export const SEO_LOCATION = {
  city: 'Delhi',
  region: 'Delhi',
  country: 'India',
  geoRegion: 'IN-DL',
  areas: ['Tilak Nagar', 'West Delhi', 'Delhi NCR'],
};

export function getAllKeywords() {
  return [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.secondary];
}

/** Natural-language line for sr-only / schema, keeps keywords readable, not stuffed */
export function getKeywordSummary() {
  const areas = SEO_LOCATION.areas.join(', ');
  return `Verience Studio is a Delhi-based digital agency serving ${areas}: website design in Tilak Nagar, branding in West Delhi, restaurant marketing, real estate marketing, web development, social media, and Google Ads across Delhi NCR and India.`;
}
