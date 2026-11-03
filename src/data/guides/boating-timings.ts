import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'boating/timings',
  family: 'boating',
  priority: 'P0',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'The boat house stands on the Yercaud Lake shore, so from the lake entrance you reach the counter and jetty on foot along the lakeside path; no separate vehicle ride is needed. The distance is approximate — confirm the counter and jetty location locally on the day.',
    ta: 'படகு இல்லம் ஏற்காடு ஏரிக்கரையில் உள்ளது; எனவே ஏரியின் நுழைவாயிலிருந்து ஏரிக்கரைப் பாதை வழியாகக் கவுண்டரையும் தளத்தையும் நடந்தே அடையலாம், தனி வாகனம் தேவையில்லை. தூரம் தோராயமானது — கவுண்டரும் தளமும் இருக்கும் இடத்தை அன்று உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['boating/guide', 'boating/prices', 'boating/weekend-queues', 'transport/parking', 'itineraries/lake-in-one-hour'],
  en: {
    title: 'Yercaud boat house timings: opening, tickets and last boat',
    description:
      'Opening hours, ticket windows, the last boat and a temporary stop are different things. See why an open lake does not prove the boats are running.',
    kicker: 'Boating',
    h1: 'Boat house timings: what “open” really covers',
    lead:
      'Visitors often arrive with one number in mind, expect boats to match it, and leave disappointed. The gate being open, tickets being sold, the last boat going out and a temporary stop for weather are four separate things. This page keeps them apart and shows the two published timings side by side.',
    facts: [
      { label: 'Google Maps listing', value: '09:00–18:00 (checked 25 Oct 2026)' },
      { label: 'TTDC portal listing', value: '09:00–18:00 (read 2 Nov 2026)' },
      { label: 'Older district page', value: 'Boating to 17:30 (undated)' },
      { label: 'Last ticket', value: 'May stop earlier — unconfirmed' }
    ],
    blocks: [
      { kind: 'h2', text: 'Four timings people mix up' },
      {
        kind: 'p',
        text:
          'The lake area, the boat-house counter and the jetty keep their own hours on the ground. A single published number usually describes only one of them. The lists below are what two current sources say; neither states a last-boat time or a ticket cut-off, so those have to be asked for at the counter.'
      },
      {
        kind: 'table',
        caption: 'Published timings and what each one describes',
        head: ['Source', 'Listed window', 'What it appears to cover'],
        rows: [
          ['Google Maps place listing (25 Oct 2026)', '09:00–18:00', 'General visiting hours'],
          ['TTDC booking portal (read 2 Nov 2026)', '09:00–18:00', 'Boat house operating window'],
          ['Older district page (undated)', '09:00–17:30', 'Boating hours']
        ]
      },
      {
        kind: 'note',
        text:
          'No source obtained here states when the last ticket is sold or when the final boat leaves the jetty. Treat any exact “last boat” time you see online as unconfirmed and ask at the counter.'
      },
      { kind: 'h2', text: 'Why an open lake is not the same as boats running' },
      {
        kind: 'list',
        items: [
          'Weather: wind, rain or low visibility on the water can pause rides even while the shore stays open.',
          'Water level and safety: the boat house may limit or stop service if conditions on the lake change.',
          'Maintenance and staff: individual boats or the whole jetty can be taken out of service without notice.',
          'Crowds and festivals: during peak days, service can pause to clear a queue or support event activity.',
          'Off-peak quiet: on a slow day the fleet may run on fewer boats rather than a fixed departure time.'
        ]
      },
      { kind: 'h2', text: 'Planning around the timing' },
      {
        kind: 'steps',
        items: [
          'Decide the day, not just the hour: weekdays are quieter than weekends and festival days.',
          'Arrive with buffer — the listing covers the window, not your guaranteed slot.',
          'Ask at the counter when the last ticket is sold that day and how long the current wait is.',
          'Keep a fallback: the lakeside, Anna Park and the viewpoints stay open if boating pauses.',
          'Re-check on the day; the map listing and the portal can change without warning.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes visitors make about timings' },
      {
        kind: 'list',
        items: [
          'Treating a listed opening time as the first boat departure.',
          'Assuming the gate being open means boats are running.',
          'Reading the closing time as the last-boat time without asking.',
          'Planning the boat ride as the fixed centre of the day rather than a flexible item.',
          'Checking the timing once and not re-checking on the day.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'steps',
        items: [
          'Ask the counter when the last ticket is sold that day.',
          'Ask how long the current wait is before joining the line.',
          'Check the current open window again on the day itself.',
          'Keep a fallback plan in case rides pause for weather or crowds.',
          'Confirm whether any festival activity is affecting the boat house.'
        ]
      }
    ],
    faq: [
      {
        q: 'What time does the Yercaud boat house open?',
        a: 'Two current lists both show 09:00–18:00, one on Google Maps and one on the TTDC portal. An older, undated district page shows boating to 17:30. Treat these as dated and confirm the day’s timings at the counter.'
      },
      {
        q: 'Is the last boat at the listed closing time?',
        a: 'Not necessarily. No source obtained here states a last-ticket time or a last-boat time. Ticket sales commonly stop before closing, so ask at the counter when you arrive.'
      },
      {
        q: 'Can boats stop even when the lake is open?',
        a: 'Yes. Weather, water conditions, maintenance or crowds can pause rides while the lakeside itself stays open. The lake being open is not a promise that boats are running.'
      },
      {
        q: 'What time should we arrive to wait less?',
        a: 'No published queue figure exists. The guidance on this page is to pick a weekday over a weekend or festival day, arrive with a buffer before the listed window closes, and ask at the counter about the current wait. The pattern is best tested on the day.'
      },
      {
        q: 'Do timings change on holidays or during the festival?',
        a: 'The listings can change without warning, and on peak days service can pause to clear a queue or support event activity. Re-check the timings and the current wait at the counter on the day rather than relying on a number read earlier.'
      }
    ],
    sourceIds: ['ttdcBooking', 'districtLake', 'googleMaps', 'districtBoatHouse']
  },
  ta: {
    title: 'ஏற்காடு படகு இல்ல நேரம்: திறப்பு, டிக்கெட் மற்றும் கடைசிப் படகு',
    description:
      'திறப்பு நேரம், டிக்கெட் விற்பனை நேரம், கடைசிப் படகு, தற்காலிக நிறுத்தம் ஆகியவை வெவ்வேறு விஷயங்கள். வெளியிடப்பட்ட இரு நேரங்களை ஒப்பிட்டு, ஏரி திறந்திருப்பது படகு இயங்குவது அல்ல என்பதைப் பாருங்கள்.',
    kicker: 'படகு சவாரி',
    h1: 'படகு இல்ல நேரம்: “திறந்திருக்கிறது” என்றால் உண்மையில் என்ன',
    lead:
      'பயணிகள் பெரும்பாலும் ஒரே எண்ணை மனதில் வைத்து வந்து, படகும் அதற்கேற்ப இருக்கும் என எதிர்பார்த்து, ஏமாற்றத்துடன் திரும்புகிறார்கள். வாயில் திறந்திருப்பது, டிக்கெட் விற்பது, கடைசிப் படகு கிளம்புவது, வானிலைக்காகத் தற்காலிக நிறுத்தம் — இவை நான்கு தனித்தனி விஷயங்கள். இந்தப் பக்கம் அவற்றைப் பிரித்து, வெளியிடப்பட்ட இரு நேரங்களையும் அருகருகே காட்டுகிறது.',
    facts: [
      { label: 'Google Maps பட்டியல்', value: '09:00–18:00 (25 அக் 2026 சரிபார்ப்பு)' },
      { label: 'TTDC தளப் பட்டியல்', value: '09:00–18:00 (2 நவ 2026-ல் படித்தது)' },
      { label: 'பழைய மாவட்டப் பக்கம்', value: 'படகு 17:30 வரை (தேதியில்லாதது)' },
      { label: 'கடைசி டிக்கெட்', value: 'முன்பே நிற்கலாம் — உறுதி செய்யப்படவில்லை' }
    ],
    blocks: [
      { kind: 'h2', text: 'மக்கள் குழப்பிக்கொள்ளும் நான்கு நேரங்கள்' },
      {
        kind: 'p',
        text:
          'ஏரிப் பகுதி, படகு இல்லக் கவுண்டர், படகுத் தளம் ஆகியவை நிலத்தில் தனித்தனி நேரங்களைக் கொண்டிருக்கின்றன. ஒரே வெளியிடப்பட்ட எண் பொதுவாக அவற்றில் ஒன்றை மட்டுமே விவரிக்கிறது. கீழே உள்ள பட்டியல்கள் தற்போதைய இரு மூலங்கள் சொல்வது; இரண்டுமே கடைசிப் படகு நேரத்தையோ டிக்கெட் நிறுத்த நேரத்தையோ குறிப்பிடவில்லை; எனவே அவற்றைக் கவுண்டரில் கேட்க வேண்டும்.'
      },
      {
        kind: 'table',
        caption: 'வெளியிடப்பட்ட நேரங்களும், ஒவ்வொன்றும் விவரிப்பதும்',
        head: ['மூலம்', 'குறிப்பிடப்பட்ட நேரம்', 'எதை விவரிக்கிறது'],
        rows: [
          ['Google Maps இடப் பட்டியல் (25 அக் 2026)', '09:00–18:00', 'பொது பார்வை நேரம்'],
          ['TTDC முன்பதிவுத் தளம் (2 நவ 2026-ல் படித்தது)', '09:00–18:00', 'படகு இல்லம் இயங்கும் நேரம்'],
          ['பழைய மாவட்டப் பக்கம் (தேதியில்லாதது)', '09:00–17:30', 'படகு சவாரி நேரம்']
        ]
      },
      {
        kind: 'note',
        text:
          'இங்கு பெறப்பட்ட எந்த மூலமும் கடைசி டிக்கெட் எப்போது விற்கப்படுகிறது, இறுதிப் படகு எப்போது தளத்தை விட்டுக் கிளம்புகிறது என்பதைக் குறிப்பிடவில்லை. ஆன்லைனில் தெரியும் துல்லியமான “கடைசிப் படகு” நேரத்தை உறுதி செய்யப்படாத தகவலாகக் கருதி கவுண்டரில் கேளுங்கள்.'
      },
      { kind: 'h2', text: 'ஏரி திறந்திருப்பது படகு இயங்குவது அல்ல என்பது ஏன்' },
      {
        kind: 'list',
        items: [
          'வானிலை: நீரின் மேல் காற்று, மழை அல்லது குறைந்த தெளிவு — கரை திறந்திருந்தாலும் சவாரி நிற்கலாம்.',
          'நீர்மட்டமும் பாதுகாப்பும்: ஏரி நிலை மாறினால் படகு இல்லம் சேவையைக் குறைக்கலாம் அல்லது நிறுத்தலாம்.',
          'பராமரிப்பும் பணியாளரும்: தனிப் படகுகளோ முழுத் தளமோ முன்னறிவிப்பின்றி சேவையிலிருந்து விலக்கப்படலாம்.',
          'கூட்டமும் விழாவும்: அதிக பயணிகள் உள்ள நாட்களில் வரிசையைக் குறைக்க அல்லது விழா நடவடிக்கைகளுக்கு சேவை தற்காலிகமாக நிற்கலாம்.',
          'குறைந்த நாள்: மெதுவான நாளில் ஒரு நிலையான கிளம்பும் நேரத்துக்குப் பதிலாகக் குறைவான படகுகளே இயங்கலாம்.'
        ]
      },
      { kind: 'h2', text: 'நேரத்தை வைத்து எப்படித் திட்டமிடுவது' },
      {
        kind: 'steps',
        items: [
          'நாளை முடிவு செய்யுங்கள், மணிநேரத்தை மட்டும் அல்ல: வார இறுதி மற்றும் விழா நாட்களைவிட வாரநாட்கள் அமைதி.',
          'இடைவெளியுடன் வாருங்கள் — பட்டியல் நேரச் சாளரத்தை மட்டுமே குறிக்கிறது; உங்களுக்கான உறுதியான இடத்தை அல்ல.',
          'அன்று கடைசி டிக்கெட் எப்போது விற்கிறது, இப்போது எவ்வளவு காத்திருப்பு என்பதைக் கவுண்டரில் கேளுங்கள்.',
          'மாற்று வழியை வைத்திருங்கள்: படகு நின்றால் ஏரிக்கரை, அண்ணா பூங்கா, காட்சி முனைகள் திறந்தே இருக்கும்.',
          'அன்று மீண்டும் சரிபாருங்கள்; வரைபடப் பட்டியலும் தளமும் எச்சரிக்கை இன்றி மாறலாம்.'
        ]
      },
      { kind: 'h2', text: 'நேரம் குறித்து பயணிகள் செய்யும் பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'பட்டியலிடப்பட்ட திறப்பு நேரத்தையே முதல் படகு கிளம்பும் நேரமாகக் கருதுவது.',
          'வாயில் திறந்திருந்தால் படகுகள் இயங்குகின்றன எனக் கருதுவது.',
          'கேட்காமல் மூடும் நேரத்தையே கடைசிப் படகு நேரமாகப் படிப்பது.',
          'படகு சவாரியை நெகிழ்வான ஒன்றாகக் கருதாமல் நாளின் நிலையான மையமாகத் திட்டமிடுவது.',
          'ஒருமுறை நேரத்தைப் பார்த்துவிட்டு அன்று மீண்டும் சரிபார்க்காதது.'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'steps',
        items: [
          'அன்று கடைசி டிக்கெட் எப்போது விற்கிறது எனக் கவுண்டரில் கேளுங்கள்.',
          'வரிசையில் சேர்வதற்கு முன் இப்போதைய காத்திருப்பைக் கேளுங்கள்.',
          'அன்றைய தினத்திலேயே தற்போதைய திறந்திருக்கும் நேரத்தை மீண்டும் சரிபாருங்கள்.',
          'வானிலை அல்லது கூட்டத்தால் சவாரி நின்றால் மாற்றுத் திட்டத்தை வைத்திருங்கள்.',
          'விழா நடவடிக்கைகள் ஏதேனும் படகு இல்லத்தைப் பாதிக்கிறதா என உறுதி செய்யுங்கள்.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஏற்காடு படகு இல்லம் எத்தனை மணிக்குத் திறக்கிறது?',
        a: 'தற்போதைய இரு பட்டியல்களும் 09:00–18:00 எனக் காட்டுகின்றன — ஒன்று Google Maps-லும், மற்றொன்று TTDC தளத்திலும். பழைய, தேதியில்லாத மாவட்டப் பக்கம் படகு 17:30 வரை எனக் குறிப்பிடுகிறது. இவற்றைத் தேதியுள்ள தகவலாகக் கருதி அன்றைய நேரத்தைக் கவுண்டரில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'பட்டியலிடப்பட்ட மூடும் நேரத்தில்தான் கடைசிப் படகா?',
        a: 'அது அவசியமில்லை. இங்கு பெறப்பட்ட எந்த மூலமும் கடைசி டிக்கெட் நேரத்தையோ கடைசிப் படகு நேரத்தையோ குறிப்பிடவில்லை. டிக்கெட் விற்பனை பொதுவாக மூடும் நேரத்துக்கு முன்பே நிற்கும்; வரும்போது கவுண்டரில் கேளுங்கள்.'
      },
      {
        q: 'ஏரி திறந்திருந்தாலும் படகு நிற்குமா?',
        a: 'ஆம். வானிலை, நீர் நிலை, பராமரிப்பு அல்லது கூட்டம் காரணமாக ஏரிக்கரை திறந்திருந்தாலும் சவாரி நிற்கலாம். ஏரி திறந்திருப்பது படகு இயங்குவதற்கான உறுதி அல்ல.'
      },
      {
        q: 'குறைவாகக் காத்திருக்க எத்தனை மணிக்கு வர வேண்டும்?',
        a: 'வெளியிடப்பட்ட வரிசை எண் எதுவும் இல்லை. இந்தப் பக்கத்தின் வழிகாட்டுதல்: வார இறுதி அல்லது விழா நாளைவிட வாரநாளைத் தேர்ந்தெடுங்கள், பட்டியலிடப்பட்ட நேரச் சாளரம் முடிவதற்கு முன் இடைவெளியுடன் வாருங்கள், இப்போதைய காத்திருப்பைக் கவுண்டரில் கேளுங்கள். இந்தப் போக்கை அன்று சோதிப்பதே சிறந்தது.'
      },
      {
        q: 'விடுமுறை அல்லது விழா நாட்களில் நேரங்கள் மாறுமா?',
        a: 'பட்டியல்கள் எச்சரிக்கை இன்றி மாறலாம்; உச்ச நாட்களில் வரிசையைக் குறைக்க அல்லது விழா நடவடிக்கைகளுக்குச் சேவை தற்காலிகமாக நிற்கலாம். முன்பே படித்த ஒரு எண்ணை நம்பாமல், அன்று நேரங்களையும் இப்போதைய காத்திருப்பையும் கவுண்டரில் மீண்டும் சரிபாருங்கள்.'
      }
    ],
    sourceIds: ['ttdcBooking', 'districtLake', 'googleMaps', 'districtBoatHouse']
  }
};

export default page;
