import { getStructuredDataGraph } from '../../lib/seo';

export default function StructuredData() {
  const json = JSON.stringify(getStructuredDataGraph());

  return (
    <script
      id="verience-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
