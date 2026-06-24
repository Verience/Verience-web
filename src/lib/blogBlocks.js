/** @typedef {'paragraph' | 'subheading' | 'list' | 'table' | 'comparison' | 'callout'} BlockType */

export function p(text) {
  return { type: 'paragraph', text };
}

export function h3(text) {
  return { type: 'subheading', text };
}

export function ul(items) {
  return { type: 'list', style: 'bullet', items };
}

export function ol(items) {
  return { type: 'list', style: 'numbered', items };
}

export function table(headers, rows, caption) {
  return { type: 'table', headers, rows, caption };
}

export function comparison(left, right, title) {
  return { type: 'comparison', title, left, right };
}

export function callout(text, { title, variant = 'info' } = {}) {
  return { type: 'callout', text, title, variant };
}

/** Convert legacy sections (paragraphs only) to block format */
export function paragraphsToBlocks(paragraphs) {
  return paragraphs.map((text) => p(text));
}

export function extractBlockText(block) {
  switch (block.type) {
    case 'paragraph':
    case 'subheading':
    case 'callout':
      return block.text;
    case 'list':
      return block.items.join(' ');
    case 'table':
      return [...block.headers, ...block.rows.flat()].join(' ');
    case 'comparison':
      return [
        block.title,
        block.left?.label,
        ...(block.left?.items ?? []),
        block.right?.label,
        ...(block.right?.items ?? []),
      ]
        .filter(Boolean)
        .join(' ');
    default:
      return '';
  }
}
