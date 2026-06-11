import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Marquee() {
  const textRef = useRef(null);

  useEffect(() => {
    const totalWidth = textRef.current.offsetWidth / 2;

    gsap.to(textRef.current, {
      x: -totalWidth,
      ease: 'none',
      duration: 18,
      repeat: -1,
    });
  }, []);

  const items = [
    'Digital Marketing',
    'Web Development',
    'Brand Identity',
    'PR & Media',
    'SEO Strategy',
    'Content Production',
  ];

  const renderTrack = (prefix) => (
    <div className="flex gap-10 px-5 items-center">
      {items.map((item, idx) => (
        <span key={`${prefix}-${idx}`} className="flex items-center gap-10">
          <span className="text-2xl md:text-5xl font-display font-medium tracking-tight text-white">
            {item}
          </span>
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="w-full py-12 md:py-16 bg-[var(--color-canvas-night)] overflow-hidden border-y border-white/5">
      <div ref={textRef} className="whitespace-nowrap flex w-max items-center">
        {renderTrack('a')}
        {renderTrack('b')}
      </div>
    </div>
  );
}
