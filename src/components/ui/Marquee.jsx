import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Marquee() {
  const marqueeRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    
    // Simple endless horizontal loop with GSAP
    const totalWidth = textRef.current.offsetWidth / 2;
    
    gsap.to(textRef.current, {
      x: -totalWidth,
      ease: 'none',
      duration: 15,
      repeat: -1,
    });
    
  }, []);

  const items = [
    "DIGITAL MARKETING •",
    "BRAND IDENTITY •",
    "WEB DEVELOPMENT •",
    "UI/UX DESIGN •",
    "AI SOLUTIONS •",
    "SEO STRATEGY •",
  ];

  return (
    <div 
      ref={marqueeRef}
      className="w-full py-6 md:py-10 bg-[var(--primary)] text-[color:var(--bg)] overflow-hidden relative rotate-[-2deg] scale-[1.05] shadow-2xl z-20 my-20"
    >
      <div 
        ref={textRef}
        className="whitespace-nowrap flex w-max"
      >
        {/* Double the content for seamless looping */}
        <div className="flex gap-8 px-4 text-4xl md:text-7xl font-heading font-black tracking-tighter">
          {items.map((item, idx) => <span key={`a-${idx}`}>{item}</span>)}
        </div>
        <div className="flex gap-8 px-4 text-4xl md:text-7xl font-heading font-black tracking-tighter">
          {items.map((item, idx) => <span key={`b-${idx}`}>{item}</span>)}
        </div>
      </div>
    </div>
  );
}
