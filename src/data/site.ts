// Central SEO entity bindings for the Yercaud Lake & Boat House visitor guide.
// Format (per site SEO policy): "attraction name + city + travel guide".
export const ATTRACTION_FULL_NAME = 'Yercaud Lake & Boat House (Emerald Lake)';
export const ATTRACTION_SHORT_NAME = 'Yercaud Lake';
export const CITY_NAME = 'Yercaud';
export const STATE_PROVINCE = 'Tamil Nadu';
export const COUNTRY_NAME = 'India';

// English site name used for og:site_name / PWA manifest (international search & share cards).
export const SITE_NAME = `${ATTRACTION_FULL_NAME}, ${CITY_NAME} — Visitor Guide`;

// Tamil equivalent used for on-page <title> and sub-page suffixes.
export const SITE_NAME_TA = 'ஏற்காடு ஏரி & படகு இல்லம், ஏற்காடு — பயண வழிகாட்டி';

export function withSiteNameTa(suffix: string): string {
  return `${suffix} | ${SITE_NAME_TA}`;
}

// English site name used for the /en/ page titles and og:site_name.
export const SITE_NAME_EN = 'Yercaud Lake & Boat House (Emerald Lake), Yercaud — Travel Guide';

export function withSiteNameEn(suffix: string): string {
  return `${suffix} | ${SITE_NAME_EN}`;
}

// Geographic / authority facts (single source of truth for JSON-LD & content).
export const GEO = {
  latitude: 11.78333,
  longitude: 78.21028,
  streetAddress: 'Lake Road',
  locality: 'Yercaud',
  region: 'Tamil Nadu',
  postalCode: '636602',
  country: 'IN',
  plusCode: 'Q6M5+C7',
  mapsShareUrl: 'https://maps.app.goo.gl/DnvJDBDKXe8s1Rmi9',
  govtTourismUrl: 'https://salem.nic.in/tourist-place/images-of-yercaudlake/'
};
