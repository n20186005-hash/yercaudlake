import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'transport/parking',
  family: 'transport',
  priority: 'P0',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'Starting from Yercaud Lake & Boat House, parking is not a fixed destination: vehicles stop in the lake area and along the approach road. Because no space is guaranteed, how far you may have to go is approximate and must be confirmed locally on the day.',
    ta: 'ஏற்காடு ஏரி & படகு இல்லத்திலிருந்து தொடங்கினால், பார்க்கிங் ஒரு நிலையான இடம் அல்ல: வாகனங்கள் ஏரிப் பகுதியிலும் அணுகுச் சாலையிலும் நிறுத்தப்படுகின்றன. உறுதியான இடம் எதுவும் இல்லாததால், எவ்வளவு தூரம் செல்ல வேண்டியிருக்கும் என்பது தோராயமானது; அன்று உள்ளூரில் உறுதி செய்ய வேண்டும்.'
  },
  related: ['transport/from-yercaud-bus-stand', 'transport/bus-vs-taxi', 'visit/best-time', 'boating/weekend-queues'],
  en: {
    title: 'Parking at Yercaud Lake: where to try and when it is tight',
    description:
      'There is no guaranteed parking beside Yercaud Lake, and it is tightest on weekends and in peak season. What the festival parking pages do and do not tell you.',
    kicker: 'Getting there',
    h1: 'Parking near the lake: no guaranteed space, tightest in season',
    lead:
      'Parking is the part of a lake visit that can genuinely change your plan. No source obtained here promises a space beside Yercaud Lake, and the official parking information that exists belongs to a festival period rather than the whole year. What follows is what is known, and what to check when you arrive.',
    facts: [
      { label: 'Guaranteed space', value: 'None near the lake' },
      { label: 'Busiest', value: 'Weekends and the peak season' },
      { label: 'Official parking pages', value: 'Festival-period arrangements only' },
      { label: 'Fees and rules', value: 'To be verified on the day' }
    ],
    blocks: [
      { kind: 'h2', text: 'Where people park, and what to expect' },
      {
        kind: 'p',
        text:
          'Vehicles stop in the lake area and along the approach road, but no guaranteed space is published for the lake itself. Arriving early is the practical move, and even that does not secure a space. It is tightest on weekends and through the peak season, when the same limited area has to take far more traffic.'
      },
      { kind: 'h2', text: 'Peak days: weekends and the season' },
      {
        kind: 'table',
        caption: 'What the records on the lake-parking question actually say',
        head: ['Source', 'What it covers', 'How to read it'],
        rows: [
          ['District lake page', 'General place information for the lake area', 'Older and dated — no year-round parking scheme'],
          ['District festival pages', 'Parking and similar arrangements during the Summer Festival', 'Festival-period only, not a year-round service'],
          ['Lake place listing', 'Address and general hours (a 09:00–18:00 snapshot)', 'Aggregator data, not a parking notice']
        ]
      },
      { kind: 'h2', text: 'Entry direction and the festival caveat' },
      {
        kind: 'list',
        items: [
          'The entry direction into the lake area and any permitted stopping route depend on local notices on the day, which cannot be confirmed in advance.',
          'The official parking information obtained belongs to the May Summer Festival period; it should not be read as a permanent, year-round service.',
          'Festival pages mention extra arrangements being made at that time, and those apply only to that period.',
          'No current parking fee is given on this page; it is a figure to check on arrival.'
        ]
      },
      {
        kind: 'note',
        text:
          'A simple rule: assume there is no guaranteed space beside the lake. Do not read the parking information on the festival pages as a year-round service — it is an arrangement for a set period. Follow local guidance once you arrive.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Whether any direction or stopping restriction is in force in the lake area that day.',
          'Where you are permitted to leave a vehicle, and for how long.',
          'Whether a parking charge is being collected, since no current fee is published here.',
          'Whether an official festival-period arrangement is in effect, or the ordinary situation applies.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Assuming a space will be waiting beside the lake, especially on a weekend or in peak season.',
          'Reading the festival parking pages as a year-round service.',
          'Leaving the vehicle on the approach road without checking that stopping is allowed there.',
          'Planning the day around a specific parking charge, since no current figure is confirmed.'
        ]
      }
    ],
    faq: [
      {
        q: 'Is there parking at Yercaud Lake?',
        a: 'No guaranteed parking is published for the lake itself. Vehicles stop in the lake area and along the approach road, but a space is not assured, and it is tightest on weekends and in peak season. Confirm locally when you arrive.'
      },
      {
        q: 'Does the government parking page apply all year?',
        a: 'No. The district parking information obtained belongs to the May Summer Festival period, when extra arrangements are made. It should not be read as a permanent, year-round service.'
      },
      {
        q: 'What does parking cost?',
        a: 'No current fee was obtained. Published festival material and aggregator listings do not establish today’s charge; ask on arrival and treat any figure you see as unverified.'
      },
      {
        q: 'What should I check about parking on the day itself?',
        a: 'Check any direction or stopping restriction in the lake area, where you are permitted to leave the vehicle and for how long, and whether a charge is being collected. No current fee or year-round arrangement is published here, so confirm locally on arrival.'
      },
      {
        q: 'Is parking easier on any particular day?',
        a: 'The records obtained say the area is tightest on weekends and in peak season, so those are the hardest days for a space. No day is guaranteed; arriving early helps but does not secure a space. Confirm the situation locally on the day.'
      }
    ],
    sourceIds: ['districtFestival', 'districtFestivalTransport', 'districtLake', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு ஏரியில் பார்க்கிங்: எங்கே முயலலாம், எப்போது நெரிசல்',
    description:
      'ஏற்காடு ஏரிக்கு அருகில் உறுதியான நிறுத்துமிடம் இல்லை; வார இறுதியிலும் பருவ காலத்திலும் மிக நெரிசல். அதிகாரப்பூர்வ பார்க்கிங் பக்கங்கள் ஆண்டு முழுவதும் அல்ல, விழாக் கால ஏற்பாடுகள் என்பதை விளக்குகிறது.',
    kicker: 'போக்குவரத்து',
    h1: 'ஏரிக்கு அருகில் பார்க்கிங்: உறுதியான இடம் இல்லை, பருவத்தில் மிக நெரிசல்',
    lead:
      'பார்க்கிங்தான் ஏரி பயணத்தில் உங்கள் திட்டத்தையே மாற்றக்கூடிய பகுதி. ஏற்காடு ஏரிக்கு அருகில் ஒரு இடம் கிடைக்கும் என இங்கு கிடைத்த எந்த மூலமும் உறுதி அளிக்கவில்லை; உள்ள அதிகாரப்பூர்வ பார்க்கிங் தகவலும் ஆண்டு முழுவதும் அல்ல, ஒரு விழாக் காலத்திற்கு உரியது. தெரிந்தவை மற்றும் வந்ததும் சரிபார்க்க வேண்டியவை கீழே உள்ளன.',
    facts: [
      { label: 'உறுதியான இடம்', value: 'ஏரிக்கு அருகில் எதுவும் இல்லை' },
      { label: 'மிக நெரிசல்', value: 'வார இறுதி மற்றும் பருவ காலம்' },
      { label: 'அதிகாரப்பூர்வ பார்க்கிங் பக்கங்கள்', value: 'விழாக் கால ஏற்பாடுகள் மட்டுமே' },
      { label: 'கட்டணமும் விதிகளும்', value: 'அன்று சரிபார்க்க வேண்டியவை' }
    ],
    blocks: [
      { kind: 'h2', text: 'மக்கள் எங்கே நிறுத்துகிறார்கள், என்ன எதிர்பார்க்கலாம்' },
      {
        kind: 'p',
        text:
          'வாகனங்கள் ஏரிப் பகுதியிலும் அணுகுச் சாலையிலும் நிறுத்தப்படுகின்றன; ஆனால் ஏரிக்கு நேரடியாக உறுதியான இடம் எதுவும் வெளியிடப்படவில்லை. முன்னதாக வருவது நடைமுறை; அதுவும் ஒரு இடத்தை உறுதி செய்யாது. வார இறுதியிலும் பருவ காலம் முழுவதும் மிக நெரிசலாக இருக்கும்; அப்போது அதே குறுகிய பகுதி மிக அதிக போக்குவரத்தைத் தாங்க வேண்டியிருக்கும்.'
      },
      { kind: 'h2', text: 'அதிக நெரிசல் நாட்கள்: வார இறுதி மற்றும் பருவம்' },
      {
        kind: 'table',
        caption: 'ஏரிப் பார்க்கிங் கேள்வியில் உள்ள பதிவுகள் உண்மையில் என்ன சொல்கின்றன',
        head: ['மூலம்', 'எதைக் குறிக்கிறது', 'எப்படிப் படிக்க வேண்டும்'],
        rows: [
          ['மாவட்ட ஏரிப் பக்கம்', 'ஏரிப் பகுதிக்கான பொதுத் தகவல்', 'பழைய, தேதியுள்ளது — ஆண்டு முழுவதும் பார்க்கிங் திட்டம் அல்ல'],
          ['மாவட்ட விழாப் பக்கங்கள்', 'கோடை விழா காலத்தில் நிறுத்தம் உள்ளிட்ட ஏற்பாடுகள்', 'விழாக் காலத்திற்கு மட்டும்; ஆண்டு முழுவதும் சேவை அல்ல'],
          ['ஏரி இடப் பட்டியல்', 'முகவரி மற்றும் பொது நேரம் (09:00–18:00 பதிவு)', 'திரட்டல் தரவு, பார்க்கிங் அறிவிப்பு அல்ல']
        ]
      },
      { kind: 'h2', text: 'நுழைவு திசையும் விழா எச்சரிக்கையும்' },
      {
        kind: 'list',
        items: [
          'ஏரிப் பகுதிக்குள் நுழையும் திசையும் அனுமதிக்கப்பட்ட நிறுத்த வழியும் அன்று உள்ளூர் அறிவிப்புகளைப் பொறுத்தது; அதை முன்கூட்டியே உறுதி செய்ய முடியாது.',
          'கிடைத்த அதிகாரப்பூர்வ பார்க்கிங் தகவல் மே கோடை விழாக் காலத்தைச் சேர்ந்தது; அதை நிரந்தர, ஆண்டு முழுவதும் உள்ள சேவையாகப் படிக்கக் கூடாது.',
          'அந்தக் காலத்தில் கூடுதல் ஏற்பாடுகள் செய்யப்படுவதாக விழாப் பக்கங்கள் குறிப்பிடுகின்றன; அவை அந்தக் காலத்திற்கு மட்டுமே.',
          'நிறுத்தக் கட்டணத்திற்கான தற்போதைய எண் எதுவும் இந்தப் பக்கத்தில் இல்லை; அது வந்ததும் சரிபார்க்க வேண்டியது.'
        ]
      },
      {
        kind: 'note',
        text:
          'எளிய விதி: ஏரிக்கு அருகில் உறுதியான நிறுத்துமிடம் இல்லை எனக் கருதுங்கள். விழாப் பக்கங்களில் உள்ள பார்க்கிங் தகவலை ஆண்டு முழுவதும் உள்ள சேவையாகப் படிக்க வேண்டாம் — அது ஒரு குறிப்பிட்ட காலத்திற்கான ஏற்பாடு. வந்ததும் உள்ளூர் வழிகாட்டுதலைப் பின்பற்றுங்கள்.'
      },
      { kind: 'h2', text: 'அன்று உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'அன்று ஏரிப் பகுதியில் ஏதேனும் திசை அல்லது நிறுத்தக் கட்டுப்பாடு அமலில் உள்ளதா.',
          'வாகனத்தை எங்கே, எவ்வளவு நேரம் நிறுத்த அனுமதி உள்ளது.',
          'பார்க்கிங் கட்டணம் ஏதேனும் வசூலிக்கப்படுகிறதா — தற்போதைய கட்டணம் எதுவும் இங்கு வெளியிடப்படவில்லை.',
          'விழாக் கால அதிகாரப்பூர்வ ஏற்பாடு அமலில் உள்ளதா, அல்லது வழக்கமான நிலைதானா.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'ஏரிக்கு அருகில் ஒரு இடம் காத்திருக்கும் எனக் கருதுவது, குறிப்பாக வார இறுதியிலோ பருவ காலத்திலோ.',
          'விழாப் பார்க்கிங் பக்கங்களை ஆண்டு முழுவதும் உள்ள சேவையாகப் படிப்பது.',
          'நிறுத்த அனுமதி உள்ளதா எனச் சரிபார்க்காமல் அணுகுச் சாலையில் வாகனத்தை விட்டுச் செல்வது.',
          'ஒரு குறிப்பிட்ட பார்க்கிங் கட்டணத்தை மனதில் வைத்து நாளைத் திட்டமிடுவது — தற்போதைய எண் எதுவும் உறுதி செய்யப்படவில்லை.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஏற்காடு ஏரியில் பார்க்கிங் உள்ளதா?',
        a: 'ஏரிக்கு நேரடியாக உறுதியான நிறுத்துமிடம் வெளியிடப்படவில்லை. வாகனங்கள் ஏரிப் பகுதியிலும் அணுகுச் சாலையிலும் நிறுத்தப்படுகின்றன; ஆனால் இடம் உறுதி அல்ல, வார இறுதி மற்றும் பருவ காலத்தில் மிக நெரிசல். வந்ததும் உள்ளூரில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'அரசு பார்க்கிங் பக்கம் ஆண்டு முழுவதும் பொருந்துமா?',
        a: 'இல்லை. கிடைத்த மாவட்டப் பார்க்கிங் தகவல் மே கோடை விழாக் காலத்தைச் சேர்ந்தது; அப்போது கூடுதல் ஏற்பாடுகள் செய்யப்படுகின்றன. அதை நிரந்தர, ஆண்டு முழுவதும் உள்ள சேவையாகப் படிக்கக் கூடாது.'
      },
      {
        q: 'பார்க்கிங் கட்டணம் எவ்வளவு?',
        a: 'தற்போதைய கட்டணம் எதுவும் கிடைக்கவில்லை. வெளியிடப்பட்ட விழாத் தகவலோ திரட்டல் பட்டியலோ இன்றைய கட்டணத்தை உறுதிப்படுத்தாது; வந்ததும் கேளுங்கள், காணும் எண்ணை உறுதி செய்யப்படாததாகவே கருதுங்கள்.'
      },
      {
        q: 'பார்க்கும் நாளில் பார்க்கிங் பற்றி என்ன சரிபார்க்க வேண்டும்?',
        a: 'ஏரிப் பகுதியில் ஏதேனும் திசை அல்லது நிறுத்தக் கட்டுப்பாடு உள்ளதா, வாகனத்தை எங்கே எவ்வளவு நேரம் நிறுத்த அனுமதி உள்ளது, கட்டணம் வசூலிக்கப்படுகிறதா என்பதைச் சரிபாருங்கள். தற்போதைய கட்டணமோ ஆண்டு முழுவதும் ஏற்பாடோ இங்கு வெளியிடப்படவில்லை; வந்ததும் உள்ளூரில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'குறிப்பிட்ட ஒரு நாளில் பார்க்கிங் எளிதாக இருக்குமா?',
        a: 'கிடைத்த பதிவுகளின்படி வார இறுதியிலும் பருவ காலத்திலும் பகுதி மிக நெரிசலாக இருக்கும்; அந்த நாட்களிலேயே இடம் பெறுவது கடினம். எந்த நாளும் உறுதி அல்ல; முன்னதாக வருவது உதவும், ஆனால் இடத்தை உறுதி செய்யாது. அன்று உள்ளூரில் நிலையை உறுதி செய்யுங்கள்.'
      }
    ],
    sourceIds: ['districtFestival', 'districtFestivalTransport', 'districtLake', 'googleMaps']
  }
};

export default page;
