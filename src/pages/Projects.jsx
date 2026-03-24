import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { id: 1, title: 'Neon X', category: 'Web App', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'Aura Fintech', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Velocity AI', category: 'AI Platform', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop' },
  { id: 4, title: 'Elysium', category: 'E-Commerce', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop' },
  { id: 5, title: 'Quantum VR', category: 'Web3', image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=1939&auto=format&fit=crop' },
  { id: 6, title: 'Nova Marketing', category: 'Branding', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop' },
];

export default function Projects() {
  return (
    <div className="pt-32 pb-24 min-h-screen text-[color:var(--text-color)] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-none mb-4">
              Featured<br/><span className="text-gradient">Projects</span>
            </h1>
            <p className="text-[color:var(--text-muted)] text-lg max-w-lg">
              A curated selection of our finest work cutting across web, mobile, and AI.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 2) * 0.2, duration: 0.6 }}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 shadow-sm border border-[var(--surface-rgb)]/10">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  <ArrowUpRight className="text-white" size={24} />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{project.title}</h3>
                  <p className="text-[color:var(--text-muted)]">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
