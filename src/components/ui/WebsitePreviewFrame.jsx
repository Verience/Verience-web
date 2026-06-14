import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function WebsitePreviewFrame({ url, title, fallbackImage }) {
  const [showFallback, setShowFallback] = useState(false);
  const displayUrl = url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-hairline)] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3 border-b border-[var(--color-hairline)] bg-[var(--color-canvas-muted)] px-4 py-3">
        <div className="hidden shrink-0 gap-1.5 sm:flex">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
        </div>

        <div className="min-w-0 flex-1 rounded-lg border border-[var(--color-hairline)] bg-white px-3 py-2 text-xs text-[color:var(--text-muted)]">
          <span className="block truncate">{displayUrl}</span>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
        >
          Open
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="relative h-[420px] overflow-hidden bg-[var(--color-canvas-muted)] sm:h-[480px] md:h-[560px]">
        {showFallback && fallbackImage ? (
          <div className="relative h-full w-full">
            <img src={fallbackImage} alt={title} className="h-full w-full object-cover object-top" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 px-6 text-center">
              <p className="mb-4 max-w-sm text-sm text-white/90">
                Live preview can&apos;t load here. Open the site to explore the full experience.
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-white text-[var(--color-ink)] hover:bg-white/90"
              >
                Visit {displayUrl}
              </a>
            </div>
          </div>
        ) : (
          <iframe
            src={url}
            title={`${title} website preview`}
            className="h-full w-full border-0 bg-white"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            onError={() => setShowFallback(true)}
          />
        )}
      </div>

      <p className="border-t border-[var(--color-hairline)] px-4 py-3 text-center text-xs text-[color:var(--text-muted)]">
        Scroll inside the frame to browse the live site
      </p>
    </div>
  );
}
