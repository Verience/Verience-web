export const projectTestimonials = [
  {
    slug: 'gawri-ganga',
    name: 'Shobhiit Kulshreshth',
    role: 'Gawri Ganga',
    quote:
      'Verience captured our vision for Gawri Ganga and turned it into a polished web and marketing presence. Clear communication, solid execution, and a team that actually listens.',
  },
  {
    slug: 'legaloids',
    name: 'Shobhiit Kulshreshth',
    role: 'Legaloids',
    quote:
      'For Legaloids we needed something credible and professional online. They delivered exactly that, structured delivery, attention to detail, and a site we are proud to stand behind.',
  },
  {
    slug: 'compliance-world',
    name: 'Mudit Johri',
    role: 'Compliance World',
    quote:
      'Compliance World needed consistency across web development, SEO, and digital marketing. Verience tied it together, better visibility, clearer messaging, and dependable follow-through.',
  },
  {
    slug: 'meta-microdigital',
    name: 'Ambrish Tiwari',
    role: 'Meta Microdigital',
    quote:
      'A strong partner for Meta Microdigital, fast iterations, thoughtful design, and marketing support that matches how we want to show up in the market.',
  },
];

export function getTestimonialBySlug(slug) {
  return projectTestimonials.find((item) => item.slug === slug);
}
