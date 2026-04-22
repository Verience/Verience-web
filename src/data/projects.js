/** Matches service titles on the Services page — use these exact strings as each project `category`. */
export const PROJECT_SERVICE_FILTERS = [
  'Digital Marketing',
  'Web Development',
  'PR Marketing',
  'Influencer Marketing',
  'SEO Strategy',
  'Brand Identity',
];

export const projects = [
  { id: 1, title: 'Gawri Ganga', category: 'Web Development', website: 'https://gawriganga.com', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop' },
  { id: 2, title: 'Legaloids', category: 'Web Development', website: 'https://legaloids.com', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Meta Microdigital', category: 'Web Development', website: 'https://metamicrodigital.com', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Gawri Ganga', category: 'Digital Marketing', website: 'https://gawriganga.com', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop' },
  { id: 5, title: 'Meta Microdigital', category: 'Digital Marketing', website: 'https://metamicrodigital.com', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' },
  { id: 6, title: 'Compliance World', category: 'Web Development', website: 'https://complianceworld.in', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop' },
  { id: 7, title: 'Compliance World', category: 'Digital Marketing', website: 'https://complianceworld.in', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop' },
  { id: 8, title: 'Compliance World', category: 'SEO Strategy', website: 'https://complianceworld.in', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop' },
  { id: 9, title: 'Gawri Ganga', category: 'SEO Strategy', website: 'https://gawriganga.com', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
];

/** First entries shown on the home “Selected Works” grid. */
const complianceWorldFeatured = projects.filter((p) => p.title === 'Compliance World' && p.category === 'Web Development');
export const featuredProjects = [...projects.slice(0, 3), ...complianceWorldFeatured];
