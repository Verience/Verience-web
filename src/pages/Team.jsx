import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const team = [
  { id: 1, name: 'Abdullah', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop' },
  { id: 2, name: 'Sarah Chen', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop' },
  { id: 3, name: 'Marcus Johnson', role: 'Lead Engineer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, name: 'Elena Rodriguez', role: 'Head of Marketing', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop' },
  { id: 5, name: 'David Kim', role: 'Design Lead', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop' },
  { id: 6, name: 'Aisha Patel', role: 'UX/UI Designer', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop' },
];

export default function Team() {
  return (
    <div className="pt-32 pb-24 min-h-screen section-muted">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <p className="eyebrow eyebrow-accent mb-4">Team</p>
          <h1 className="display-section mb-6">The people behind the work.</h1>
          <p className="body-lead">
            A focused team across design, development, and marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="card-light !p-0 overflow-hidden group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex justify-between items-start">
                <div>
                  <h3 className="font-display font-medium">{member.name}</h3>
                  <p className="text-sm text-[color:var(--text-muted)]">{member.role}</p>
                </div>
                <a href="#" className="text-[color:var(--text-muted)] hover:text-accent transition-colors">
                  <Linkedin size={17} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
