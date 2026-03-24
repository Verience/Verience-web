import { motion } from 'framer-motion';
import { Sparkles, Code, Smartphone, Rocket, Search, PenTool } from 'lucide-react';

const services = [
  { id: 1, icon: Sparkles, title: "Digital Marketing", desc: "Data-driven campaigns that convert and build lasting brand equity. SEO, paid social, and content strategy." },
  { id: 2, icon: Code, title: "Web Development", desc: "High-performance, immersive websites built with modern web tech like React, Three.js, and GSAP." },
  { id: 3, icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile experiences that users love, built for iOS and Android." },
  { id: 4, icon: Rocket, title: "AI Solutions", desc: "Integrating cutting-edge AI to automate workflows, personalize experiences, and scale your business." },
  { id: 5, icon: Search, title: "SEO Strategy", desc: "Dominate search engine rankings with our deep technical SEO and content cluster strategies." },
  { id: 6, icon: PenTool, title: "Brand Identity", desc: "Crafting memorable, Gen-Z aligned brand identities that resonate with modern audiences." }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 min-h-screen text-[color:var(--text-color)] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-heading font-black uppercase mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-[color:var(--text-muted)] max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive exponential growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass p-8 md:p-10 rounded-3xl group hover:border-[var(--primary)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--primary)]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <service.icon size={48} className="text-[var(--primary)] mb-8 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-4 font-heading">{service.title}</h3>
              <p className="text-[color:var(--text-muted)] leading-relaxed z-10 relative">{service.desc}</p>
              
              <div className="mt-8 flex items-center font-bold text-sm uppercase tracking-wider text-[var(--primary)] transition-colors cursor-pointer opacity-80 group-hover:opacity-100">
                <span>Learn More</span>
                <motion.span
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
