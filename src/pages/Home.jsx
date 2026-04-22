import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Code, Megaphone, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero3D from '../components/canvas/Hero3D';
import Marquee from '../components/ui/Marquee';
import { Atom3D, Helix3D } from '../components/canvas/Creative3DElements';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Sparkles, title: "Digital Marketing", desc: "Data-driven campaigns that convert and build lasting brand equity." },
  { icon: Code, title: "Web Development", desc: "High-performance, immersive websites built with modern web tech." },
  { icon: Megaphone, title: "PR Marketing", desc: "Strategic public relations that amplify your brand story and reputation." },
  { icon: Users, title: "Influencer Marketing", desc: "Leverage top creators to boost your brand reach and drive authentic engagement." }
];

export default function Home() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    // GSAP text reveal
    const ctx = gsap.context(() => {
      gsap.from(".hero-text-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2
      });

      // Section titles reveal
      gsap.utils.toArray(".section-title").forEach(title => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[color:var(--text-color)] overflow-hidden transition-colors duration-500">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Hero3D />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-20 pointer-events-auto">
          <div className="overflow-hidden mb-4">
            <h1 className="hero-text-line font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none">
              SHAPING THE
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1 className="hero-text-line font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)]">
              DIGITAL FUTURE
            </h1>
          </div>
          
          <div className="overflow-hidden mb-12 max-w-2xl">
            <p className="hero-text-line text-lg md:text-xl text-[color:var(--text-muted)] font-light">
              Nextshift is a premium creative agency delivering high-end IT solutions, 
              immersive web experiences, and data-driven marketing.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/projects" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-[var(--primary)] font-heading uppercase tracking-widest rounded-full hover:bg-[color:var(--text-color)] hover:text-[color:var(--bg)] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Our Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </span>
            </Link>
            <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[color:var(--text-color)] transition-all duration-200 bg-transparent border border-[var(--surface-rgb)]/20 font-heading uppercase tracking-widest rounded-full hover:bg-[color:var(--surface)] overflow-hidden glass">
              <span>Contact Us</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center border border-[var(--surface-rgb)]/20 rounded-full p-2 glass"
        >
          <div className="w-1 h-3 bg-[color:var(--text-color)] rounded-full mb-1" />
        </motion.div>
      </section>

      <Marquee />

      {/* Services Marquee / Overview */}
      <section className="py-24 relative z-10 bg-[var(--surface)] border-y border-[var(--surface-rgb)]/20 overflow-hidden">
        <div className="absolute top-10 -left-10 lg:left-10">
          <Atom3D />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="section-title text-4xl md:text-5xl font-heading font-bold mb-16 text-center">
            OUR <span className="text-gradient">EXPERTISE</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl group transition-all duration-300 hover:border-[var(--primary)]/50 relative overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <service.icon size={40} className="text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3 font-heading text-[color:var(--text-color)]">{service.title}</h3>
                <p className="text-[color:var(--text-muted)] text-sm leading-relaxed mb-6">{service.desc}</p>
                
                <Link to="/services" className="text-sm text-[var(--primary)] font-semibold flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10">
                  Explore <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="absolute top-40 -right-20 lg:right-10 pointer-events-none">
          <Helix3D />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
            <h2 className="section-title text-5xl md:text-7xl font-heading font-bold leading-none max-w-xl">
              SELECTED <br /><span className="text-gradient">WORKS</span>
            </h2>
            <Link to="/projects" className="hidden md:flex items-center gap-2 mt-8 text-lg font-heading hover:text-[var(--primary)] transition-colors border-b border-[var(--primary)]/30 pb-1">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`group relative rounded-[2rem] overflow-hidden cursor-hover ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
              >
                <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[var(--surface)] relative border border-[var(--surface-rgb)]/10">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  {/* Overlay text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
                    <span className="text-[var(--secondary)] font-medium tracking-widest text-sm mb-2 uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Ready CTA */}
      <section className="py-32 relative z-10 bg-gradient-to-b from-transparent to-[var(--primary)]/10 border-t border-[var(--surface-rgb)]/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="section-title text-5xl md:text-8xl font-heading font-black mb-8">
            READY TO <span className="text-gradient">SCALE?</span>
          </h2>
          <p className="text-xl text-[color:var(--text-muted)] mb-12 max-w-2xl mx-auto">
            Let's build something extraordinary together. Book a free consultation and let's discuss your next big move.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 font-bold text-[color:var(--bg)] transition-all duration-300 bg-[var(--text-color)] hover:scale-105 font-heading uppercase tracking-widest rounded-full text-lg shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)]">
            Start a Project
          </Link>
        </div>
      </section>

    </div>
  );
}
