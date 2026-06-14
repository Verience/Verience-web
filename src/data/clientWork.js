export const CLIENT_FILTERS = [
  { id: 'media', label: 'Media' },
  { id: 'tech', label: 'Tech' },
];

export const clientWorkItems = [
  {
    slug: 'gawri-ganga',
    title: 'Gawri Ganga',
    filters: ['media', 'tech'],
    website: 'https://www.gawriganga.com',
    instagram: 'https://www.instagram.com/gawriganga.in/',
    content: {
      tech: {
        tagline: 'Production e-commerce built end to end, from frontend to deployment.',
        summary:
          'Independently designed, developed, deployed, and managed Gawri Ganga, a production-ready e-commerce platform serving real customers with payments, shipping, analytics, and full business operations.',
        deliverables: [
          'Customer-facing e-commerce platform',
          'Admin panel for products, orders, users, and operations',
          'Backend APIs, database architecture, and business logic',
          'Cloud infrastructure and CI/CD deployment pipeline',
        ],
        stack: {
          Frontend: ['React.js', 'Cloudflare CDN', 'Nginx'],
          Backend: ['Node.js', 'Express.js', 'REST APIs'],
          Database: ['PostgreSQL'],
          DevOps: ['AWS EC2', 'Docker', 'GitHub Actions', 'Linux', 'Nginx reverse proxy'],
          Integrations: ['Easebuzz payments', 'Shiprocket shipping', 'Meta Pixel', 'Google Analytics'],
        },
        highlights: [
          'Production server management and performance optimization',
          'Payment and shipping integrations in a live store',
          'Full-stack ownership across DevOps, cloud, and product workflows',
        ],
      },
      media: {
        tagline: 'Paid growth, SEO, and social for a live spiritual wellness brand.',
        summary:
          'Alongside the platform build, we run Meta ads, track performance with Meta Pixel, and handle SEO and social media to drive qualified traffic and sales for Gawri Ganga.',
        deliverables: [
          'Meta Ads campaign management and optimization',
          'Meta Pixel and conversion tracking setup',
          'SEO strategy and on-site optimization',
          'Social media content and brand presence',
        ],
        highlights: [
          'Paid and organic channels working together on a live store',
          'Search visibility for high-intent product and wellness queries',
          'Social content aligned with brand trust and authenticity',
        ],
      },
    },
  },
  {
    slug: 'drivers-klub',
    title: "Driver's Klub",
    filters: ['media'],
    website: '',
    instagram: 'https://www.instagram.com/driversklub.in/',
    content: {
      media: {
        tagline: 'Social media and driver acquisition for an EV mobility platform.',
        summary:
          "Verience handles Driver's Klub social media and brand building, creating bilingual content, campaign creative, and Instagram growth focused on driver acquisition.",
        deliverables: [
          'Social media strategy and content production',
          'Driver acquisition campaigns across Instagram',
          'Brand building with Hindi and English creative',
          'Standee, reel, and campaign assets for the field',
        ],
        highlights: [
          'Content built around real earnings and EV advantages',
          'Consistent @driversklub.in presence and engagement',
          'Campaign creative that speaks directly to drivers',
        ],
      },
    },
  },
  {
    slug: 'compliance-world',
    title: 'Compliance World',
    filters: ['tech'],
    website: 'https://complianceworld.in',
    instagram: '',
    content: {
      tech: {
        tagline: 'Business compliance website, React, Node, and Cloudflare deployment.',
        summary:
          'Built the Compliance World website from scratch, a structured platform for trademark and business compliance services with a clean enquiry flow and service pages.',
        deliverables: [
          'Responsive marketing website in React',
          'Node.js backend with contact and enquiry handling',
          'EmailJS integration for lead capture',
          'Deployed on Cloudflare',
        ],
        stack: {
          Frontend: ['React', 'Tailwind CSS'],
          Backend: ['Node.js', 'EmailJS'],
          Deployment: ['Cloudflare'],
        },
        highlights: [
          'Clear service architecture for compliance offerings',
          'Fast, maintainable stack for ongoing updates',
          'Production deployment with reliable delivery',
        ],
      },
    },
  },
  {
    slug: 'meta-microdigital',
    title: 'Meta Microdigital',
    filters: ['tech'],
    website: 'https://metamicrodigital.com',
    instagram: 'https://www.instagram.com/metamicrodigital/',
    content: {
      tech: {
        tagline: 'Corporate website for an IT and digital marketing agency.',
        summary:
          'Designed and built Meta Microdigital’s website, a modern presence for their IT and digital services with a fast stack and straightforward contact flow.',
        deliverables: [
          'Responsive agency website in React',
          'Node.js backend with EmailJS contact service',
          'Tailwind CSS design system',
          'Deployed on Vercel',
        ],
        stack: {
          Frontend: ['React', 'Tailwind CSS'],
          Backend: ['Node.js', 'EmailJS'],
          Deployment: ['Vercel'],
        },
        highlights: [
          'Brand-aligned layout for a technology-forward agency',
          'Clean service presentation for B2B prospects',
          'Agile iteration for launches and updates',
        ],
      },
    },
  },
  {
    slug: 'legaloids',
    title: 'Legaloids',
    filters: ['tech'],
    website: 'https://legaloids.com',
    instagram: '',
    content: {
      tech: {
        tagline: 'Professional web presence for a business law consulting firm.',
        summary:
          'Delivered a credible, BCI-conscious website for Legaloids, presenting practice areas, team, and consultation flow with clarity and authority.',
        deliverables: [
          'Responsive law firm website',
          'Practice area and team information architecture',
          'Professional visual system and consultation flow',
        ],
        stack: {
          Frontend: ['React', 'Tailwind CSS'],
        },
        highlights: [
          'Authority-led design without overstepping advertising guidelines',
          'Structured content for corporate and advisory services',
          'Mobile-ready experience for prospective clients',
        ],
      },
    },
  },
];

export function getClientsByFilter(filter) {
  return clientWorkItems.filter((client) => client.filters.includes(filter));
}

export function getClientWorkBySlug(slug) {
  return clientWorkItems.find((client) => client.slug === slug);
}
