// Shared content model for the Yercaud Lake guide pages.
// English pages live under /en/<slug>/ and the existing Tamil counterparts under /<slug>/.
// Each page answers one specific visitor question in both site languages.

export type Family = 'boating' | 'visit' | 'transport' | 'food' | 'nearby' | 'itineraries';

export type Block =
  | { kind: 'h2'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'steps'; items: string[] }
  | { kind: 'table'; caption?: string; head: string[]; rows: string[][] }
  | { kind: 'note'; text: string };

export interface Fact {
  label: string;
  value: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

// A source carried by the page. Sources are shared by id (see sources.ts) so that
// labels and dates stay identical across the whole guide set. Reader-facing text
// is bilingual so a Tamil page never shows English source commentary.
export interface GuideSource {
  label: { en: string; ta: string };
  url: string;
  date: { en: string; ta: string };
  note?: { en: string; ta: string };
}

export interface GuideText {
  title: string;
  description: string;
  kicker: string;
  h1: string;
  lead: string;
  facts: Fact[];
  blocks: Block[];
  faq: FaqItem[];
  sourceIds: string[];
}

export interface GuidePage {
  // Slug without a leading or trailing slash, e.g. 'boating/guide'.
  slug: string;
  family: Family;
  priority: 'P0' | 'P1' | 'P2';
  // Date this page's own facts were last re-checked (shown to readers).
  lastChecked: string;
  // Query used for the "open in Google Maps" link, when the page is about one place.
  mapsQuery?: string;
  // How to reach this page's subject when starting from Yercaud Lake. Kept as its
  // own field so every page carries the same "from the lake" starting relation.
  fromLake: { en: string; ta: string };
  related: string[];
  en: GuideText;
  ta: GuideText;
}

export const FAMILIES: Record<Family, { en: string; ta: string; order: number }> = {
  boating: { en: 'Boating', ta: 'படகு சவாரி', order: 1 },
  visit: { en: 'Visiting the lake', ta: 'ஏரியைப் பார்வையிடுதல்', order: 2 },
  transport: { en: 'Getting there', ta: 'போக்குவரத்து', order: 3 },
  food: { en: 'Food & drink', ta: 'உணவு & பானம்', order: 4 },
  nearby: { en: 'Nearby places', ta: 'அருகிலுள்ள இடங்கள்', order: 5 },
  itineraries: { en: 'Itineraries', ta: 'பயணத் திட்டங்கள்', order: 6 }
};
