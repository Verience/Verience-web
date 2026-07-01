import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Instagram, Facebook, Linkedin, Twitter, Volume2, VolumeX } from 'lucide-react';
import WebsitePreviewFrame from './WebsitePreviewFrame';
import { syncReelPlayback } from '../../utils/reelVideo';

const socialConfig = [
  { key: 'instagram', label: 'Instagram', icon: Instagram },
  { key: 'facebook', label: 'Facebook', icon: Facebook },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { key: 'twitter', label: 'Twitter / X', icon: Twitter },
];

function StackGroup({ label, items }) {
  if (!items?.length) return null;

  return (
    <div>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="pill-tag pill-tag-shade">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkColumn({ title, content, showLabel = true }) {
  if (!content) return null;

  const stackEntries = content.stack ? Object.entries(content.stack) : [];

  return (
    <div className="min-w-0">
      {showLabel ? (
        <span className="pill-tag pill-tag-accent mb-5 inline-block">{title}</span>
      ) : null}

      <p className="mb-3 font-display text-xl font-medium leading-snug md:text-2xl">{content.tagline}</p>
      <p className="mb-8 max-w-3xl text-sm leading-relaxed text-[color:var(--text-muted)] md:text-[15px]">
        {content.summary}
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
            Scope
          </p>
          <ul className="space-y-2.5">
            {content.deliverables.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {content.highlights?.length ? (
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
              Highlights
            </p>
            <ul className="space-y-2.5">
              {content.highlights.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-[color:var(--text-muted)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-shade-40)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {stackEntries.length > 0 ? (
        <div className="mt-8 rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-canvas-muted)] p-5 md:p-6">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
            Technologies
          </p>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {stackEntries.map(([label, items]) => (
              <StackGroup key={label} label={label} items={items} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function WorkDeliverySection({ clientWork }) {
  const tech = clientWork?.content?.tech;
  const media = clientWork?.content?.media;
  const hasTech = Boolean(tech);
  const hasMedia = Boolean(media);
  const hasBoth = hasTech && hasMedia;
  const [activeTab, setActiveTab] = useState(hasTech ? 'tech' : 'media');

  if (!hasTech && !hasMedia) return null;

  const activeContent = activeTab === 'tech' ? tech : media;
  const activeTitle = activeTab === 'tech' ? 'Tech' : 'Media';

  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-display text-lg font-medium">What we delivered</h2>

        {hasBoth ? (
          <div className="flex w-fit gap-1 rounded-full border border-[var(--color-hairline)] bg-white p-1">
            <button
              type="button"
              onClick={() => setActiveTab('tech')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'tech'
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'text-[color:var(--text-muted)] hover:text-[var(--color-ink)]'
              }`}
            >
              Tech
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('media')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'media'
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'text-[color:var(--text-muted)] hover:text-[var(--color-ink)]'
              }`}
            >
              Media
            </button>
          </div>
        ) : null}
      </div>

      <div className="card-light !p-6 md:!p-8">
        <WorkColumn
          key={activeTab}
          title={activeTitle}
          content={activeContent}
          showLabel={!hasBoth}
        />
      </div>
    </section>
  );
}

function DetailReel({ reel }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.45 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    return syncReelPlayback(video, isVisible);
  }, [isVisible, reel.video]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
    if (!isMuted) video.volume = 1;
  }, [isMuted]);

  return (
    <div className="relative w-[180px] shrink-0 overflow-hidden rounded-2xl bg-black sm:w-[200px] md:w-[220px]">
      <div className="relative aspect-[9/16]">
        <video
          ref={videoRef}
          src={reel.video}
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <button
          type="button"
          onClick={() => setIsMuted((current) => !current)}
          className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm"
          aria-label={isMuted ? 'Unmute reel' : 'Mute reel'}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </div>
    </div>
  );
}

export default function ProjectDetailContent({ project, clientWork, reels, testimonial }) {
  const website = clientWork?.website?.trim() || project.website?.trim();
  const instagram = clientWork?.instagram?.trim() || project.social?.instagram?.trim();
  const activeSocials = socialConfig.filter(({ key }) => project.social?.[key]?.trim());
  const isTechProject = clientWork?.filters?.includes('tech');
  const showWebsitePreview = isTechProject && Boolean(website);
  const showPostsGrid = !showWebsitePreview && project.carousel?.length > 0;

  return (
    <div className="space-y-14">
      {reels.length > 0 ? (
        <section>
          <h2 className="mb-5 font-display text-lg font-medium">Reels</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {reels.map((reel) => (
              <DetailReel key={reel.id} reel={reel} />
            ))}
          </div>
        </section>
      ) : null}

      {showWebsitePreview ? (
        <section>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-lg font-medium">Visual</h2>
              <p className="mt-1 text-sm text-[color:var(--text-muted)]">
                Live website preview, scroll inside the frame to explore pages.
              </p>
            </div>
          </div>
          <WebsitePreviewFrame
            url={website}
            title={project.title}
            fallbackImage={project.coverImage}
          />
        </section>
      ) : null}

      {showPostsGrid ? (
        <section>
          <h2 className="mb-5 font-display text-lg font-medium">Posts & visuals</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {project.carousel.map((image) => (
              <div key={image} className="photo-frame aspect-square overflow-hidden bg-[var(--color-shade-30)]">
                <img src={image} alt={project.title} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <WorkDeliverySection clientWork={clientWork} />

      <section className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14">
        <div className="space-y-10 lg:col-span-2">
          <div>
            <h2 className="mb-4 font-display text-lg font-medium">Overview</h2>
            <p className="leading-relaxed text-[color:var(--text-muted)]">{project.description}</p>
          </div>

          {project.contentPreview?.length > 0 ? (
            <div>
              <h2 className="mb-4 font-display text-lg font-medium">Project details</h2>
              <div className="space-y-4">
                {project.contentPreview.map((paragraph) => (
                  <p key={paragraph} className="text-[15px] leading-relaxed text-[color:var(--text-muted)]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ) : null}

          {project.features?.length > 0 ? (
            <div>
              <h2 className="mb-4 font-display text-lg font-medium">Key highlights</h2>
              <ul className="space-y-3">
                {project.features.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed text-[color:var(--text-muted)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {testimonial ? (
            <div className="card-light">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
                Testimonial
              </p>
              <p className="mb-6 text-[15px] leading-relaxed text-[color:var(--text-muted)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-[var(--color-hairline)] pt-4">
                <p className="text-sm font-medium">{testimonial.name}</p>
                <p className="text-sm text-[color:var(--text-muted)]">{testimonial.role}</p>
              </div>
            </div>
          ) : null}
        </div>

        <aside className="space-y-4">
          {project.highlights?.length > 0 ? (
            <div className="card-light !p-6 space-y-5">
              <h3 className="text-sm font-medium uppercase tracking-wider text-[color:var(--text-muted)]">
                At a glance
              </h3>
              {project.highlights.map(({ label, value }) => (
                <div key={label}>
                  <p className="mb-1 text-xs text-[color:var(--text-muted)]">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          ) : null}

          {(website || instagram || activeSocials.length > 0) && (
            <div className="card-light !p-6 space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-[color:var(--text-muted)]">
                Links
              </h3>

              {website ? (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                >
                  Visit website <ExternalLink size={14} />
                </a>
              ) : null}

              {instagram ? (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              ) : null}

              {activeSocials
                .filter(({ key }) => key !== 'instagram' || !instagram)
                .map((social) => {
                  const IconComponent = social.icon;
                  return (
                  <a
                    key={social.key}
                    href={project.social[social.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                  >
                    <IconComponent size={16} />
                    {social.label}
                  </a>
                  );
                })}
            </div>
          )}

          {clientWork?.filters?.length ? (
            <div className="card-light !p-6">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-[color:var(--text-muted)]">
                Verience scope
              </h3>
              <div className="flex flex-wrap gap-2">
                {clientWork.filters.includes('tech') ? (
                  <span className="pill-tag pill-tag-shade">Tech</span>
                ) : null}
                {clientWork.filters.includes('media') ? (
                  <span className="pill-tag pill-tag-shade">Media</span>
                ) : null}
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </div>
  );
}
