import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Instagram, Volume2, VolumeX } from 'lucide-react';
import { syncReelPlayback } from '../../utils/reelVideo';

const AUTOPLAY_MS = 4500;
const SWIPE_THRESHOLD = 48;

function shuffle(items) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function getOffset(index, activeIndex, length) {
  let offset = index - activeIndex;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
}

function getCardStyle(offset, isActiveHovered = false) {
  const distance = Math.abs(offset);

  if (distance > 2) {
    return {
      opacity: 0,
      pointerEvents: 'none',
      transform: 'translate(-50%, -50%) translateX(0px) scale(0.65)',
      zIndex: 0,
    };
  }

  const translateX = offset * 275;
  let scale = offset === 0 ? 1 : distance === 1 ? 0.82 : 0.72;
  if (offset === 0 && isActiveHovered) scale = 1.08;

  const zIndex = offset === 0 && isActiveHovered ? 40 : 30 - distance * 10;

  return {
    opacity: offset === 0 ? 1 : distance === 1 ? 0.92 : 0.78,
    pointerEvents: distance <= 1 ? 'auto' : 'none',
    transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
    zIndex,
  };
}

function ReelCard({ reel, isActive, isMuted, onToggleMute }) {
  const videoRef = useRef(null);
  const website = reel.website?.trim();
  const instagram = reel.social?.instagram?.trim();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    return syncReelPlayback(video, isActive);
  }, [isActive, reel.video]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
    if (!isMuted) {
      video.volume = 1;
    }
  }, [isMuted]);

  const stopCarouselPointer = (event) => {
    event.stopPropagation();
  };

  const handleToggleMute = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    const video = videoRef.current;
    const nextMuted = !isMuted;

    if (video) {
      video.muted = nextMuted;
      video.volume = 1;

      if (!nextMuted) {
        try {
          await video.play();
        } catch {
          video.muted = true;
          onToggleMute(true);
          return;
        }
      }
    }

    onToggleMute(nextMuted);
  };

  return (
    <article
      className={`relative w-[275px] overflow-hidden rounded-[1.35rem] bg-black isolate sm:w-[295px] md:w-[320px] transition-[box-shadow,transform] duration-500 ${
        isActive
          ? 'shadow-[0_30px_80px_rgba(0,0,0,0.28)] group-hover/card:shadow-[0_36px_90px_rgba(0,0,0,0.34)]'
          : 'shadow-[0_16px_40px_rgba(0,0,0,0.16)]'
      }`}
    >
      <div className="group/card relative aspect-[9/16] bg-black">
        <video
          ref={videoRef}
          src={reel.video}
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover bg-black [transform:translateZ(0)]"
        />

        {isActive ? (
          <button
            type="button"
            onPointerDown={stopCarouselPointer}
            onClick={handleToggleMute}
            className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
            aria-label={isMuted ? 'Unmute reel' : 'Mute reel'}
            aria-pressed={!isMuted}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        ) : null}

        {isActive ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        ) : null}

        <div
          className={`absolute inset-0 z-10 flex flex-col justify-end bg-black/55 p-5 transition-opacity duration-300 ${
            isActive ? 'opacity-0 group-hover/card:opacity-100' : 'opacity-0'
          }`}
        >
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
            Client
          </p>
          <h3 className="mb-4 font-display text-2xl font-medium text-white">{reel.title}</h3>

          <div className="pointer-events-auto flex flex-col gap-2.5">
            {website ? (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                <ExternalLink size={15} />
                {website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
              </a>
            ) : null}

            {instagram ? (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                <Instagram size={15} />
                Instagram
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectReelCarousel({ reels }) {
  const dragRef = useRef({ active: false, startX: 0, moved: false });
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeHovered, setActiveHovered] = useState(false);

  const shuffledReels = useMemo(() => shuffle(reels), [reels]);
  const total = shuffledReels.length;

  const goTo = useCallback(
    (index) => {
      if (!total) return;
      setActiveIndex((index + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    setActiveHovered(false);
  }, [activeIndex]);

  useEffect(() => {
    if (paused || total <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  const handlePointerDown = (event) => {
    if (event.target.closest('button, a')) return;

    dragRef.current = { active: true, startX: event.clientX, moved: false };
    setPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (event.target.closest('button, a')) return;

    const drag = dragRef.current;
    if (!drag.active) return;
    if (Math.abs(event.clientX - drag.startX) > 6) drag.moved = true;
  };

  const handlePointerUp = (event) => {
    const drag = dragRef.current;
    if (!drag.active) return;

    const delta = event.clientX - drag.startX;
    drag.active = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (drag.moved) {
      if (delta <= -SWIPE_THRESHOLD) goNext();
      else if (delta >= SWIPE_THRESHOLD) goPrev();
    }

    window.setTimeout(() => setPaused(false), 1200);
  };

  if (!total) {
    return (
      <p className="px-6 text-center text-sm text-[color:var(--text-muted)]">
        Add reel videos inside each client&apos;s Reels folder to show them here.
      </p>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[1100px] px-6 md:px-12">
      <div
        className="relative h-[490px] sm:h-[530px] md:h-[600px] touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {shuffledReels.map((reel, index) => {
          const offset = getOffset(index, activeIndex, total);
          if (Math.abs(offset) > 2) return null;

          const isActive = offset === 0;

          return (
            <div
              key={reel.id}
              className="absolute left-1/2 top-1/2 overflow-hidden rounded-[1.35rem] transition-all duration-500 ease-out will-change-transform"
              style={getCardStyle(offset, isActive && activeHovered)}
              onMouseEnter={() => {
                if (isActive) setActiveHovered(true);
              }}
              onMouseLeave={() => setActiveHovered(false)}
              onClick={(event) => {
                if (event.target.closest('button, a')) return;
                if (!isActive) goTo(index);
              }}
              role="presentation"
            >
              <ReelCard
                reel={reel}
                isActive={isActive}
                isMuted={isMuted}
                onToggleMute={(nextMuted) => setIsMuted(nextMuted)}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => {
            goPrev();
            setPaused(true);
            window.setTimeout(() => setPaused(false), 1200);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-hairline)] bg-white text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          aria-label="Previous reel"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {shuffledReels.map((reel, index) => (
            <button
              key={reel.id}
              type="button"
              onClick={() => {
                goTo(index);
                setPaused(true);
                window.setTimeout(() => setPaused(false), 1200);
              }}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex
                  ? 'w-8 bg-[var(--color-accent)]'
                  : 'w-1.5 bg-[var(--color-shade-30)] hover:bg-[var(--color-shade-40)]'
              }`}
              aria-label={`Go to reel ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            goNext();
            setPaused(true);
            window.setTimeout(() => setPaused(false), 1200);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-hairline)] bg-white text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          aria-label="Next reel"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <p className="mt-5 text-center text-xs text-[color:var(--text-muted)]">
        Swipe or use arrows to browse · hover the center reel for client details
      </p>
    </div>
  );
}
