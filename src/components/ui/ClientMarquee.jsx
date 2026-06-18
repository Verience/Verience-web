import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const clients = [
  {
    name: 'Gawri Ganga',
    fontFamily: "'Playfair Display', Georgia, serif",
    fontStyle: 'italic',
    fontWeight: 600,
  },
  {
    name: 'Legaloids',
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontWeight: 400,
  },
  {
    name: 'Compliance World',
    fontFamily: "'Syne', var(--font-display), sans-serif",
    fontWeight: 600,
    letterSpacing: '-0.03em',
  },
  {
    name: 'Meta Microdigital',
    fontFamily: "'Space Mono', ui-monospace, monospace",
    fontWeight: 600,
    letterSpacing: '-0.04em',
  },
  {
    name: "Driver's Klub",
    fontFamily: "'Bebas Neue', Impact, sans-serif",
    fontWeight: 400,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
];

function ClientTrack({ prefix }) {
  return (
    <div className="flex items-center gap-10 px-5 md:gap-14 md:px-8">
      {clients.map((client) => (
        <span key={`${prefix}-${client.name}`} className="flex shrink-0 items-center gap-10 md:gap-14">
          <span
            className="whitespace-nowrap mb-2 text-[clamp(1.6rem,3.8vw,2.75rem)] leading-none text-[var(--color-shade-50)]"
            style={{
              fontFamily: client.fontFamily,
              fontStyle: client.fontStyle,
              fontWeight: client.fontWeight,
              letterSpacing: client.letterSpacing,
              textTransform: client.textTransform,
            }}
          >
            {client.name}
          </span>
          <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]/70" />
        </span>
      ))}
    </div>
  );
}

export default function ClientMarquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const totalWidth = track.offsetWidth / 2;

    gsap.set(track, { x: -totalWidth });
    const tween = gsap.to(track, {
      x: 0,
      ease: 'none',
      duration: 28,
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section className="section-muted border-b border-[var(--color-hairline)] py-12 md:py-16">
      <p className="eyebrow mb-8 text-center">Trusted by teams at</p>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-canvas-muted)] to-transparent md:w-28"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-canvas-muted)] to-transparent md:w-28"
        />

        <div ref={trackRef} className="flex w-max items-center whitespace-nowrap">
          <ClientTrack prefix="a" />
          <ClientTrack prefix="b" />
        </div>
      </div>
    </section>
  );
}
