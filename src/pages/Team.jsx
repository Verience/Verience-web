import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';

const team = [
  { id: 1, name: 'Abdullah', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop' },
  { id: 2, name: 'Sarah Chen', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop' },
  { id: 3, name: 'Marcus Johnson', role: 'Lead Engineer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, name: 'Elena Rodriguez', role: 'Head of Marketing', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop' },
  { id: 5, name: 'David Kim', role: '3D Artist', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop' },
  { id: 6, name: 'Aisha Patel', role: 'UX/UI Designer', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop' },
];

export default function Team() {
  return (
    <div className="pt-32 pb-24 min-h-screen text-[color:var(--text-color)] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-heading font-black uppercase mb-6">
            Meet The <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl text-[color:var(--text-muted)] max-w-2xl">
            The visionary minds behind the magic. Unconventionally creative, technically profound.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] mb-6 shadow-sm border border-[var(--surface-rgb)]/10">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-4">
                    <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-[var(--primary)] transition-colors text-white">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-[var(--primary)] transition-colors text-white">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-heading font-bold mb-1">{member.name}</h3>
                <p className="text-[var(--secondary)] font-bold tracking-wider uppercase text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
