// i18n scaffolding for the Yercaud Lake guide.
// Tamil (ta) is the original/local language and kept verbatim across components.
// English (en) is the added locale to capture English queries (e.g. "yercaud lake").

export type Locale = 'ta' | 'en';
export const locales: Locale[] = ['ta', 'en'];
export const defaultLocale: Locale = 'ta';

// Stable section element IDs used as in-page anchors (Header nav, links).
// Tamil keeps the original Tamil IDs so existing anchors keep working.
export const sectionIds: Record<string, Record<Locale, string>> = {
  intro:         { ta: 'அறிமுகம்', en: 'about' },
  planning:      { ta: 'திட்டமிடல்', en: 'planning' },
  weather:       { ta: 'வானிலை', en: 'weather' },
  facilities:    { ta: 'வசதிகள்', en: 'facilities' },
  transport:     { ta: 'போக்குவரத்து', en: 'transport' },
  map:           { ta: 'வரைபடம்', en: 'map' },
  history:       { ta: 'வரலாறு', en: 'history' },
  gallery:       { ta: 'புகைப்படங்கள்', en: 'gallery' },
  stories:       { ta: 'கதைகள்', en: 'stories' },
  season:        { ta: 'பருவவியூகம்', en: 'season' },
  itineraries:   { ta: 'இயக்கதிட்டங்கள்', en: 'itineraries' },
  responsibility: { ta: 'பொறுப்பு', en: 'responsibility' },
  surroundings:   { ta: 'சுற்றுப்புறம்', en: 'nearby' },
  faq:           { ta: 'கேள்விகள்', en: 'faq' },
  sources:       { ta: 'ஆதாரங்கள்', en: 'sources' }
};

export function sec(locale: Locale, key: keyof typeof sectionIds): string {
  return sectionIds[key][locale];
}

// Primary navigation (Header). Each entry maps to a section id above.
export const nav: Record<Locale, { key: keyof typeof sectionIds; label: string }[]> = {
  ta: [
    { key: 'intro', label: 'அறிமுகம்' },
    { key: 'planning', label: 'பயணத் திட்டம்' },
    { key: 'weather', label: 'வானிலை' },
    { key: 'facilities', label: 'வசதிகள்' },
    { key: 'history', label: 'வரலாறு' },
    { key: 'gallery', label: 'புகைப்படங்கள்' },
    { key: 'surroundings', label: 'சுற்றுப்புறம்' },
    { key: 'faq', label: 'கேள்விகள்' },
    { key: 'sources', label: 'ஆதாரங்கள்' }
  ],
  en: [
    { key: 'intro', label: 'About' },
    { key: 'planning', label: 'Plan your visit' },
    { key: 'weather', label: 'Weather' },
    { key: 'facilities', label: 'Facilities' },
    { key: 'history', label: 'History' },
    { key: 'gallery', label: 'Photos' },
    { key: 'surroundings', label: 'Nearby' },
    { key: 'faq', label: 'FAQ' },
    { key: 'sources', label: 'Sources' }
  ]
};

export function navItems(locale: Locale): { id: string; label: string }[] {
  return nav[locale].map((n) => ({ id: sec(locale, n.key), label: n.label }));
}

// Build the locale-prefixed path for alternates.
// `path` is the current page path without locale prefix, e.g. '/', '/terms/'.
export function localizedPath(path: string, locale: Locale): string {
  if (locale === 'ta') return path;
  const clean = path === '/' ? '' : path.replace(/\/+$/, '');
  return '/en' + (clean || '') + (clean ? '/' : '');
}

// hreflang alternates for a given canonical path. x-default points to English
// to better capture the international "yercaud lake" queries.
export function hreflangAlternates(path: string, site: string): { hreflang: string; href: string }[] {
  const base = site.replace(/\/+$/, '');
  const ta = base + localizedPath(path, 'ta');
  const en = base + localizedPath(path, 'en');
  return [
    { hreflang: 'ta', href: ta },
    { hreflang: 'en', href: en },
    { hreflang: 'x-default', href: en }
  ];
}

// Small inline helper for components: returns English when locale is en, else Tamil.
export function pick(locale: Locale, ta: string, en: string): string {
  return locale === 'en' ? en : ta;
}
