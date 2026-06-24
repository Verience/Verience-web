export const homeFaqs = [
  {
    question: 'What services does Verience offer?',
    answer:
      'We cover digital marketing, web development, PR and influencer campaigns, SEO, and brand identity. Most clients start with one service and expand as they grow. Browse our services page for the full breakdown.',
  },
  {
    question: 'How long does a typical website project take?',
    answer:
      'A focused business website usually takes 3 to 6 weeks from kickoff to launch, depending on scope, content readiness, and revisions. Larger builds with custom features or e-commerce can take longer. We share a clear timeline before work begins.',
  },
  {
    question: 'Do you work with businesses outside Delhi?',
    answer:
      'Yes. We are based in Delhi and work with clients across India and internationally. Most projects run remotely with regular video check-ins, shared docs, and async updates.',
  },
  {
    question: 'How much does a website or marketing project cost?',
    answer:
      'Costs depend on scope: a starter website, a full brand and site build, or ongoing ads and content each land at different price points. Share your goals and budget range on the contact form and we will recommend a realistic plan.',
  },
  {
    question: 'What happens after I submit a project inquiry?',
    answer:
      'We review your brief and reply within one business day with follow-up questions or a short call invite. From there we scope the work, share a proposal with timeline and pricing, and kick off once you are ready.',
  },
  {
    question: 'Do you offer support after launch?',
    answer:
      'Yes. We offer maintenance, content updates, SEO tuning, and ongoing marketing retainers. You own your code and assets; we stay available when you need a team that already knows your brand.',
  },
];

export function getFaqStructuredData(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}
