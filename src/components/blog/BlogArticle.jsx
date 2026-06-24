import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Lightbulb } from 'lucide-react';
import { extractBlockText } from '../../lib/blogBlocks';

function Paragraph({ text }) {
  return (
    <p className="text-[15px] leading-[1.85] text-[color:var(--text-muted)]">{text}</p>
  );
}

function Subheading({ text }) {
  return (
    <h3 className="pt-2 font-display text-lg font-medium tracking-tight text-[color:var(--text-color)]">
      {text}
    </h3>
  );
}

function ListBlock({ style, items }) {
  const Tag = style === 'numbered' ? 'ol' : 'ul';
  const listClass =
    style === 'numbered'
      ? 'list-decimal space-y-2 pl-5 text-[15px] leading-[1.75] text-[color:var(--text-muted)] marker:text-[var(--color-accent)]'
      : 'list-disc space-y-2 pl-5 text-[15px] leading-[1.75] text-[color:var(--text-muted)] marker:text-[var(--color-accent)]';

  return (
    <Tag className={listClass}>
      {items.map((item) => (
        <li key={item.slice(0, 40)}>{item}</li>
      ))}
    </Tag>
  );
}

function TableBlock({ headers, rows, caption }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--color-hairline)] bg-[var(--color-canvas-light)]">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        {caption ? (
          <caption className="border-b border-[var(--color-hairline)] bg-[var(--color-canvas-muted)] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[color:var(--text-muted)]">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className="border-b border-[var(--color-hairline)] bg-[var(--color-canvas-muted)]">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-display text-xs font-medium uppercase tracking-wider text-[color:var(--text-color)]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-[var(--color-hairline)] last:border-b-0 even:bg-[var(--color-canvas-muted)]/50"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 align-top text-[14px] leading-relaxed text-[color:var(--text-muted)]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ComparisonBlock({ title, left, right }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--color-hairline)] bg-[var(--color-canvas-light)]">
      {title ? (
        <div className="border-b border-[var(--color-hairline)] bg-[var(--color-canvas-muted)] px-5 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--text-muted)]">
            {title}
          </p>
        </div>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b border-[var(--color-hairline)] p-5 md:border-b-0 md:border-r">
          <p className="mb-3 font-display text-sm font-medium text-[color:var(--text-color)]">
            {left.label}
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
            {left.items.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-shade-40)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[var(--color-accent-soft)]/40 p-5">
          <p className="mb-3 font-display text-sm font-medium text-[var(--color-accent)]">
            {right.label}
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
            {right.items.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-2">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const CALLOUT_STYLES = {
  info: {
    icon: Lightbulb,
    wrap: 'border-[rgba(47,107,255,0.15)] bg-[var(--color-accent-soft)]',
    title: 'text-[var(--color-accent)]',
    text: 'text-[color:var(--text-muted)]',
  },
  tip: {
    icon: CheckCircle2,
    wrap: 'border-emerald-200 bg-emerald-50',
    title: 'text-emerald-800',
    text: 'text-emerald-900/80',
  },
  warning: {
    icon: AlertCircle,
    wrap: 'border-amber-200 bg-amber-50',
    title: 'text-amber-900',
    text: 'text-amber-900/80',
  },
};

function CalloutBlock({ title, text, variant = 'info' }) {
  const style = CALLOUT_STYLES[variant] ?? CALLOUT_STYLES.info;
  const Icon = style.icon;

  return (
    <div className={`flex gap-3 rounded-xl border px-4 py-4 ${style.wrap}`}>
      <Icon size={18} className={`mt-0.5 shrink-0 ${style.title}`} />
      <div>
        {title ? <p className={`mb-1 text-sm font-medium ${style.title}`}>{title}</p> : null}
        <p className={`text-sm leading-relaxed ${style.text}`}>{text}</p>
      </div>
    </div>
  );
}

function BlockRenderer({ block, index }) {
  switch (block.type) {
    case 'subheading':
      return <Subheading key={index} text={block.text} />;
    case 'list':
      return <ListBlock key={index} style={block.style} items={block.items} />;
    case 'table':
      return (
        <TableBlock
          key={index}
          headers={block.headers}
          rows={block.rows}
          caption={block.caption}
        />
      );
    case 'comparison':
      return (
        <ComparisonBlock
          key={index}
          title={block.title}
          left={block.left}
          right={block.right}
        />
      );
    case 'callout':
      return (
        <CalloutBlock
          key={index}
          title={block.title}
          text={block.text}
          variant={block.variant}
        />
      );
    case 'paragraph':
    default:
      return <Paragraph key={index} text={block.text} />;
  }
}

function getSectionBlocks(section) {
  if (section.blocks?.length) return section.blocks;
  if (section.paragraphs?.length) {
    return section.paragraphs.map((text) => ({ type: 'paragraph', text }));
  }
  return [];
}

export default function BlogArticle({ sections }) {
  return (
    <article className="space-y-12">
      {sections.map((section, index) => {
        const blocks = getSectionBlocks(section);

        return (
          <motion.section
            key={section.heading}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: index * 0.02 }}
            className="border-b border-[var(--color-hairline)] pb-12 last:border-b-0"
          >
            <h2 className="mb-6 font-display text-xl font-medium tracking-tight text-[color:var(--text-color)] md:text-2xl">
              {section.heading}
            </h2>
            <div className="space-y-5">
              {blocks.map((block, blockIndex) => (
                <BlockRenderer key={blockIndex} block={block} index={blockIndex} />
              ))}
            </div>
          </motion.section>
        );
      })}
    </article>
  );
}

export function countBlocksWords(sections) {
  return sections
    .flatMap(getSectionBlocks)
    .map(extractBlockText)
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
}
