import {
  Sparkles,
  Code,
  Megaphone,
  Users,
  Search,
  PenTool,
} from 'lucide-react';

/** Inline link segment inside a paragraph */
export function link(href, text) {
  return { link: href, text };
}

export function text(value) {
  return { text: value };
}

export const SUB_SERVICE_SLUGS = {
  websiteDesign: '/services/website-design-delhi',
  socialMedia: '/services/social-media-marketing-delhi',
  googleAds: '/services/google-ads-agency-delhi',
  branding: '/services/branding-agency-delhi',
  webDevelopment: '/services/web-development-delhi',
};

export const MAIN_SERVICES = [
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDesc: 'SEO, paid social, content strategy, and campaigns aligned with your business goals.',
    icon: Sparkles,
    seo: {
      title: 'Digital Marketing Delhi | Verience Studio',
      description:
        'Digital marketing, Google Ads, and social campaigns from Verience Studio in Delhi NCR. Strategy and growth for restaurants, real estate, and local brands.',
    },
    hero: {
      eyebrow: 'Digital Marketing',
      title: 'Marketing that connects',
      accent: 'channels to revenue.',
      lead: 'Integrated campaigns across search, social, and content, built for Delhi, West Delhi, Tilak Nagar, and NCR businesses that need measurable growth.',
    },
    sections: [
      {
        heading: 'Strategy before spend',
        paragraphs: [
          'Digital marketing fails when channels are treated as isolated experiments. Verience starts with your business model, margins, and sales cycle, then maps the mix of organic, paid, and owned media that actually fits. As a digital marketing agency Delhi NCR companies hire for accountable delivery, we scope campaigns around leads, calls, bookings, or purchases, not vanity impressions.',
          [
            text('Paid performance is handled by our '),
            link(SUB_SERVICE_SLUGS.googleAds, 'Google Ads agency Delhi'),
            text(' team: keyword intent, landing page alignment, conversion tracking, and weekly optimisation. Organic and social layers are supported through our '),
            link(SUB_SERVICE_SLUGS.socialMedia, 'social media marketing agency Delhi'),
            text(' practice, reels, calendars, and community management that reinforce your positioning.'),
          ],
          'We work with restaurants pushing weekend footfall, real estate projects launching new towers, and service brands competing in crowded West Delhi markets. Each vertical gets different creative, different targeting, and different reporting, because a dine-in promo is not the same problem as a luxury apartment lead funnel.',
        ],
      },
      {
        heading: 'Full-funnel thinking',
        paragraphs: [
          'Campaigns perform better when the destination is built to convert. Because we also design and develop, we can fix page speed, form flows, and on-page messaging without waiting on another vendor. That integration is why clients treat us as a long-term partner rather than a one-off ads contractor.',
          'Content strategy, email nurture, influencer collaborations, and PR support can layer on when they serve your goals. We do not sell a fixed package of twelve channels. We recommend what moves your metric in the next ninety days, then expand from proof, not promises.',
        ],
      },
      {
        heading: 'Industry programmes',
        paragraphs: [
          'Restaurant marketing agency Delhi clients often need reel-first Instagram, weekend offer pushes, and geo-targeted promos for delivery radiuses. We build those calendars and tie them to reservation or ordering landing pages.',
          'Real estate marketing agency Delhi developers hire us for project microsites, walkthrough reels, lead forms with CRM handoff, and ad funnels segmented by budget band. Creative is tailored per tower, not one template for every inventory type.',
          'Whether you are scaling across Delhi NCR or doubling down on Tilak Nagar and West Delhi neighbourhoods, we align channel mix, creative volume, and reporting cadence to your internal sales capacity, so marketing generates leads your team can actually close.',
        ],
      },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDesc: 'Responsive websites and web applications built with modern, maintainable technology.',
    icon: Code,
    seo: {
      title: 'Web Development Delhi | Verience Studio',
      description:
        'Fast, SEO-ready websites and web apps from Verience Studio in Delhi. Modern stacks, clean code, and launches built to convert.',
    },
    hero: {
      eyebrow: 'Web Development',
      title: 'Websites engineered to',
      accent: 'ship and scale.',
      lead: 'From marketing sites to product landing pages, development that pairs with design, SEO, and your growth stack.',
    },
    sections: [
      {
        heading: 'Development that supports the business',
        paragraphs: [
          [
            text('A beautiful layout means little if the build is slow, brittle, or impossible to update. As a '),
            link(SUB_SERVICE_SLUGS.webDevelopment, 'web development company Delhi'),
            text(' teams rely on, Verience ships semantic HTML, optimised assets, and component structures your future developers can understand.'),
          ],
          [
            text('Design and UX are covered by our '),
            link(SUB_SERVICE_SLUGS.websiteDesign, 'website design agency Delhi'),
            text(' practice, wireframes, visual systems, and mobile-first layouts, before a single production commit. That handoff reduces rework and keeps brand intent intact through launch.'),
          ],
          'We build multi-page company sites, campaign microsites, enquiry flows with EmailJS or API backends, and lightweight tools when off-the-shelf SaaS is the wrong fit.',
        ],
      },
      {
        heading: 'Performance and SEO baked in',
        paragraphs: [
          'Core Web Vitals, metadata, schema markup, and accessible markup are part of delivery, not a post-launch upsell. We compress media, lazy-load where appropriate, and structure headings so search engines and screen readers both get clarity.',
          'If you have an existing site that underperforms, we audit first: hosting, theme bloat, plugin conflicts, or front-end architecture. Sometimes a refactor wins; sometimes a rebuild does. We recommend honestly.',
        ],
      },
      {
        heading: 'Stacks we work with',
        paragraphs: [
          'Our marketing sites typically use modern React/Vite or equivalent fast front-ends with Tailwind-style systems for maintainability. Integrations include analytics, CRM handoff, WhatsApp CTAs, and payment or booking embeds when required.',
          'Documentation and training handoffs are available for internal teams who will manage content after launch. You own your code and assets. We are not interested in lock-in.',
        ],
      },
    ],
  },
  {
    slug: 'pr-marketing',
    title: 'PR Marketing',
    shortDesc: 'Press outreach, reputation management, and media coverage that builds credibility.',
    icon: Megaphone,
    seo: {
      title: 'PR Marketing Delhi | Verience Studio',
      description:
        'PR, press outreach, and reputation management in Delhi from Verience Studio. Stories and media coverage that build long-term credibility.',
    },
    hero: {
      eyebrow: 'PR Marketing',
      title: 'Stories that earn',
      accent: 'trust and coverage.',
      lead: 'Press outreach, reputation management, and narrative positioning for brands that need credibility, not just clicks.',
    },
    sections: [
      {
        heading: 'Credibility beyond the feed',
        paragraphs: [
          'Social proof from paid ads fades when the spend stops. PR builds third-party validation, articles, interviews, features, and mentions that sales teams can reuse for months. Verience helps Delhi and NCR brands craft newsworthy angles, founder stories, and launch narratives journalists actually respond to.',
          [
            text('PR works best alongside consistent public presence. We align announcements with your '),
            link(SUB_SERVICE_SLUGS.socialMedia, 'social media marketing agency Delhi'),
            text(' calendar so coverage, posts, and landing pages tell one story on launch day.'),
          ],
        ],
      },
      {
        heading: 'Reputation and crisis readiness',
        paragraphs: [
          'Online reputation is part of PR today. We monitor sentiment themes, respond frameworks for reviews, and correction strategies when misinformation spreads. Proactive brands invest here before a crisis; reactive brands pay more later.',
          'For B2B and professional services, thought leadership pieces and LinkedIn-native storytelling often outperform generic press releases. We match format to audience.',
        ],
      },
      {
        heading: 'Measurable PR outcomes',
        paragraphs: [
          'We track pickups, referral traffic, branded search lifts, and inbound enquiries tied to coverage windows. PR is not magic. It is disciplined storytelling with a distribution plan.',
        ],
      },
    ],
  },
  {
    slug: 'influencer-marketing',
    title: 'Influencer Marketing',
    shortDesc: 'Creator partnerships and campaigns that reach the right audience authentically.',
    icon: Users,
    seo: {
      title: 'Influencer Marketing Delhi | Verience Studio',
      description:
        'Influencer and creator campaigns from Verience Studio in Delhi. Authentic partnerships, UGC, and reach for lifestyle and consumer brands.',
    },
    hero: {
      eyebrow: 'Influencer Marketing',
      title: 'Creators who fit',
      accent: 'your brand, not just your brief.',
      lead: 'Partnerships, UGC, and campaign structures that feel native on Instagram, YouTube, and emerging platforms.',
    },
    sections: [
      {
        heading: 'Authenticity over reach vanity',
        paragraphs: [
          'The wrong creator deal wastes budget and dilutes brand. We shortlist creators by audience overlap, content quality, and past partnership behaviour, not follower count alone. Campaigns are structured with clear deliverables, usage rights, and tracking links or promo codes where applicable.',
          [
            text('Influencer content feeds your broader '),
            link(SUB_SERVICE_SLUGS.socialMedia, 'social media marketing agency Delhi'),
            text(' engine: whitelisted ads, reposts, and retargeting pools built from engagement data.'),
          ],
        ],
      },
      {
        heading: 'Categories we activate',
        paragraphs: [
          'Restaurants benefit from tasting reels and local food creators. Real estate projects use walkthrough and lifestyle creators. D2C brands use UGC-style ads that outperform polished studio creative in many funnels. We match format to purchase behaviour.',
        ],
      },
      {
        heading: 'End-to-end campaign ops',
        paragraphs: [
          'Briefing, contracting, content review, posting windows, and performance recap, handled in one workflow. You approve creative; we manage creator logistics and timelines.',
        ],
      },
    ],
  },
  {
    slug: 'seo-strategy',
    title: 'SEO Strategy',
    shortDesc: 'Technical SEO, content clusters, and search visibility that compounds over time.',
    icon: Search,
    seo: {
      title: 'SEO Services Delhi | Verience Studio',
      description:
        'SEO strategy, technical audits, and local search from Verience Studio in Delhi. Organic visibility that compounds over time.',
    },
    hero: {
      eyebrow: 'SEO Strategy',
      title: 'Search visibility that',
      accent: 'compounds, not spikes.',
      lead: 'Technical SEO, content architecture, and local search for Delhi businesses investing in organic growth.',
    },
    sections: [
      {
        heading: 'Technical foundation first',
        paragraphs: [
          [
            text('SEO collapses on slow, broken, or poorly structured sites. We audit crawlability, indexation, canonical tags, mobile experience, and Core Web Vitals, often alongside our '),
            link(SUB_SERVICE_SLUGS.webDevelopment, 'web development company Delhi'),
            text(' team when fixes require code changes.'),
          ],
          'Keyword research maps to intent: informational, commercial, and local. We prioritise pages that can rank and convert, not thin doorway pages that risk penalties.',
        ],
      },
      {
        heading: 'Content clusters and local SEO',
        paragraphs: [
          [
            text('Service businesses in Tilak Nagar, West Delhi, and across NCR benefit from location-aware pages, schema, and Google Business Profile optimisation, aligned with '),
            link(SUB_SERVICE_SLUGS.websiteDesign, 'website design agency Delhi'),
            text(' updates when new landing pages are needed.'),
          ],
          'Blog and resource content is planned in clusters: pillar pages supported by supporting articles that internal-link strategically. We write for humans first; algorithms second.',
        ],
      },
      {
        heading: 'SEO plus paid search',
        paragraphs: [
          [
            text('Organic and paid search inform each other. Our '),
            link(SUB_SERVICE_SLUGS.googleAds, 'Google Ads agency Delhi'),
            text(' team uses SEO keyword insights for ad groups while SEO uses paid search query reports to find new content opportunities.'),
          ],
          'Monthly reporting covers rankings, traffic quality, conversions, and next-month priorities, honest about timelines, because sustainable SEO is a marathon.',
        ],
      },
    ],
  },
  {
    slug: 'brand-identity',
    title: 'Brand Identity',
    shortDesc: 'Visual identity and messaging systems that feel distinct and intentional.',
    icon: PenTool,
    seo: {
      title: 'Brand Identity Delhi | Verience Studio',
      description:
        'Logos, visual identity, and brand systems from Verience Studio in Delhi. Design that works across web, social, print, and sales.',
    },
    hero: {
      eyebrow: 'Brand Identity',
      title: 'Identity that looks',
      accent: 'as serious as your work.',
      lead: 'Logos, colour, typography, voice, and guidelines, built to work on web, social, print, and sales collateral.',
    },
    sections: [
      {
        heading: 'More than a logo file',
        paragraphs: [
          [
            text('Brand identity is how people recognise and remember you. As a '),
            link(SUB_SERVICE_SLUGS.branding, 'branding agency Delhi'),
            text(' businesses trust for complete systems, Verience delivers logo marks, colour palettes, typography rules, icon style, photography direction, and messaging frameworks, packaged so your team applies them consistently.'),
          ],
          'We run discovery workshops to clarify positioning, audience, and competitive white space before visual exploration. Design without strategy produces pretty assets that do not differentiate.',
        ],
      },
      {
        heading: 'Brand that ships across channels',
        paragraphs: [
          [
            text('Identity work connects directly to '),
            link(SUB_SERVICE_SLUGS.websiteDesign, 'website design agency Delhi'),
            text(' and '),
            link(SUB_SERVICE_SLUGS.socialMedia, 'social media marketing agency Delhi'),
            text(' execution, so launch day does not pair a new logo with off-brand Instagram templates.'),
          ],
          'West Delhi retailers, NCR startups, and professional services firms all need different visual temperatures: premium vs approachable, bold vs restrained. We calibrate to your market, not trends alone.',
        ],
      },
      {
        heading: 'Deliverables you can use',
        paragraphs: [
          'Brand guidelines PDF, social templates, presentation masters, and asset exports in formats your printers and developers need. Optional brand voice documentation for copywriters and sales teams.',
        ],
      },
    ],
  },
];

export const SUB_SERVICES = [
  {
    slug: 'website-design-delhi',
    title: 'Website Design Delhi',
    parentSlug: 'web-development',
    seo: {
      title: 'Website Design Delhi | Verience Studio',
      description:
        'Conversion-focused website design from Verience Studio in Delhi. Mobile-first UX for Tilak Nagar, West Delhi, and NCR businesses.',
    },
    hero: {
      eyebrow: 'Website Design',
      title: 'Website design agency',
      accent: 'Delhi businesses trust.',
      lead: 'Layouts, UX, and visual systems that convert, from discovery to developer handoff.',
    },
    sections: [
      {
        heading: 'Design that drives action',
        paragraphs: [
          'Your website is often the first sales conversation. As a website design agency Delhi companies hire for premium yet practical builds, Verience maps user journeys, defines page hierarchy, and designs mobile-first interfaces that guide visitors toward enquiry, booking, or purchase.',
          'We offer website design Tilak Nagar and West Delhi businesses can collaborate on remotely, structured milestones, clear feedback rounds, and Figma deliverables developers can implement without guesswork.',
        ],
      },
      {
        heading: 'What you receive',
        paragraphs: [
          'Wireframes, high-fidelity screens, design systems, responsive breakpoints, and interaction notes. Optional copy direction aligned with your brand voice.',
          'Design pairs with our web development practice for launch, or we hand off to your in-house team with complete specs.',
        ],
      },
    ],
  },
  {
    slug: 'social-media-marketing-delhi',
    title: 'Social Media Marketing Delhi',
    parentSlug: 'digital-marketing',
    seo: {
      title: 'Social Media Delhi | Verience Studio',
      description:
        'Social media marketing, reels, and content calendars from Verience Studio in Delhi. Instagram, LinkedIn, and platform-native growth.',
    },
    hero: {
      eyebrow: 'Social Media',
      title: 'Social media marketing',
      accent: 'agency Delhi teams hire.',
      lead: 'Content that feels native, stays on-brand, and supports paid and organic growth goals.',
    },
    sections: [
      {
        heading: 'Platform-native content',
        paragraphs: [
          'As a social media marketing agency Delhi brands partner with for ongoing presence, we plan content pillars, produce reels and static posts, write captions that sound human, and manage publishing calendars.',
          'Restaurant, real estate, wellness, and tech clients each need different hooks, lengths, and CTAs. We do not recycle one format everywhere.',
        ],
      },
      {
        heading: 'Organic plus paid alignment',
        paragraphs: [
          'Top-performing organic posts become ad creative. Community engagement informs FAQ content for websites and sales scripts. Social is treated as a growth channel, not an afterthought.',
        ],
      },
    ],
  },
  {
    slug: 'google-ads-agency-delhi',
    title: 'Google Ads Delhi',
    parentSlug: 'digital-marketing',
    seo: {
      title: 'Google Ads Delhi | Verience Studio',
      description:
        'Google Ads management from Verience Studio in Delhi. Search campaigns with tracking, landing pages, and ongoing optimisation.',
    },
    hero: {
      eyebrow: 'Google Ads',
      title: 'Google Ads agency',
      accent: 'Delhi performance campaigns.',
      lead: 'Paid search and performance media structured around conversions, not clicks alone.',
    },
    sections: [
      {
        heading: 'Account structure that scales',
        paragraphs: [
          'As a Google Ads agency Delhi businesses use for lead gen and e-commerce, Verience builds campaigns around intent: brand, competitor, category, and local keywords where relevant.',
          'Conversion tracking, GA4 linkage, and landing page alignment are configured before scaling spend. Fixing attribution after the fact is expensive.',
        ],
      },
      {
        heading: 'Optimisation rhythm',
        paragraphs: [
          'Weekly bid, copy, and audience adjustments based on search term reports and quality score trends. Monthly strategy reviews with plain-language summaries for stakeholders who do not live in ad dashboards.',
        ],
      },
    ],
  },
  {
    slug: 'branding-agency-delhi',
    title: 'Branding Agency Delhi',
    parentSlug: 'brand-identity',
    seo: {
      title: 'Branding Agency Delhi | Verience Studio',
      description:
        'Branding and identity from Verience Studio in Delhi and West Delhi. Positioning, logos, and guidelines for a distinct market presence.',
    },
    hero: {
      eyebrow: 'Branding',
      title: 'Branding agency',
      accent: 'Delhi & West Delhi.',
      lead: 'Identity systems that help you stand out in crowded local and national markets.',
    },
    sections: [
      {
        heading: 'Positioning before pixels',
        paragraphs: [
          'As a branding agency Delhi and branding agency West Delhi entrepreneurs work with, we clarify who you serve, why you win, and how you should look and sound before visual exploration begins.',
          'Deliverables include logo systems, colour and type rules, brand voice, and application examples across web and social.',
        ],
      },
      {
        heading: 'Built to deploy',
        paragraphs: [
          'Guidelines your team and vendors can follow without constant agency involvement. Optional rollout support for website and campaign launches.',
        ],
      },
    ],
  },
  {
    slug: 'web-development-delhi',
    title: 'Web Development Delhi',
    parentSlug: 'web-development',
    seo: {
      title: 'Web Dev Company Delhi | Verience Studio',
      description:
        'Web development company in Delhi from Verience Studio. Maintainable sites, modern front-ends, and SEO-ready markup.',
    },
    hero: {
      eyebrow: 'Web Development',
      title: 'Web development company',
      accent: 'Delhi, built right.',
      lead: 'Clean code, fast performance, and launches your team can maintain.',
    },
    sections: [
      {
        heading: 'Engineering standards',
        paragraphs: [
          'As a web development company Delhi teams rely on, Verience ships semantic markup, optimised assets, accessible components, and deployment pipelines that do not break on the first content edit.',
          'Integrations include forms, analytics, CRM hooks, WhatsApp CTAs, and third-party APIs when your workflow requires them.',
        ],
      },
      {
        heading: 'From redesign to net-new',
        paragraphs: [
          'Audits for legacy WordPress or bloated themes, refactors for performance, or greenfield builds on modern stacks, scoped after we understand traffic, content, and internal capabilities.',
        ],
      },
    ],
  },
];

const ALL_SERVICES = [...MAIN_SERVICES, ...SUB_SERVICES];

export function getMainServices() {
  return MAIN_SERVICES;
}

export function getServiceBySlug(slug) {
  return ALL_SERVICES.find((service) => service.slug === slug) ?? null;
}

export function getMainServiceBySlug(slug) {
  return MAIN_SERVICES.find((service) => service.slug === slug) ?? null;
}

export function isSubService(slug) {
  return SUB_SERVICES.some((service) => service.slug === slug);
}
