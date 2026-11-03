import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'transport/from-salem-junction',
  family: 'transport',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'Use Yercaud Lake & Boat House as the destination the whole trip is built around: from Salem Junction you first reach the city or the bus stand, then climb to the Yercaud bus stand, and only then cover the short final stretch to the lake and boat house. The published distances are approximate and must be confirmed on the day.',
    ta: 'முழுப் பயணமும் அமையும் இலக்காக ஏற்காடு ஏரி மற்றும் படகு இல்லத்தையே வையுங்கள்: சேலம் சந்திப்பிலிருந்து முதலில் நகரத்திற்கோ பேருந்து நிலையத்திற்கோ சென்று, பின்னர் ஏற்காடு பேருந்து நிலையம் வரை ஏறி, அதன் பின்னரே ஏரி மற்றும் படகு இல்லம் வரையிலான குறுகிய இறுதிப் பகுதியைக் கடக்க வேண்டும். வெளியிடப்பட்ட தொலைவுகள் தோராயமானவை; அன்று உறுதி செய்ய வேண்டும்.'
  },
  related: ['transport/from-salem', 'transport/parking', 'itineraries/one-day-from-lake', 'visit/best-time'],
  en: {
    title: 'Arriving at Salem Junction: onward transfer to Yercaud Lake',
    description:
      'Salem Junction is the rail gateway, but the lake is about 35 km away. Here is the transfer order, what to do with luggage, and why a late arrival needs a plan B.',
    kicker: 'Getting there',
    h1: 'From Salem Junction to the lake: transfer first, climb second',
    lead:
      'Salem Junction is one part of a two-part journey, not the destination. The station puts you in Salem; the lake is still about 35 km up the hill. Treating the transfer into the city and the ghat climb as a single trip is the mistake most rail travellers make.',
    facts: [
      { label: 'Rail approach', value: 'Salem Junction, about 35 km (district page)' },
      { label: 'Train services', value: 'To be verified — check live timings' },
      { label: 'Transfer', value: 'City or bus stand first, then the climb' },
      { label: 'Late arrivals', value: 'Have a fallback before you land' }
    ],
    blocks: [
      { kind: 'h2', text: 'The station is the start, not the finish' },
      {
        kind: 'p',
        text:
          'The district lists Salem Junction as the rail approach to Yercaud and puts it about 35 km from Yercaud. That figure is the whole distance from the station to the hill town; it does not mean the station sits at the foot of the climb. From the platform to the ghat road is one leg, and the climb itself is a second, separate leg.'
      },
      { kind: 'h2', text: 'Transfer order: the city first, then the climb' },
      {
        kind: 'steps',
        items: [
          'On arrival, get into Salem city or to the bus stand where the Yercaud service leaves — not straight onto a hill road.',
          'That is where a hill service or a vehicle is found; do not assume a direct Yercaud bus waits at the station entrance.',
          'Confirm the current departure time and boarding point before you commit.',
          'Ride up the ghat road and get off at the Yercaud bus stand at the top.',
          'Cover the short final stretch from the bus stand to the lake on foot or in a local vehicle.'
        ]
      },
      {
        kind: 'table',
        caption: 'Each leg of the trip, with what is known',
        head: ['Leg', 'Published distance or status', 'What to confirm'],
        rows: [
          ['Salem Junction to Salem city / bus stand', 'Not published here', 'Current local transport and fare'],
          ['Salem to Yercaud (the climb)', 'About 30–35 km (published range)', 'Departure time and boarding point'],
          ['Salem Junction as the rail approach', 'About 35 km (district page)', 'Your train’s actual arrival station and time']
        ]
      },
      { kind: 'h2', text: 'Luggage and a late arrival' },
      {
        kind: 'list',
        items: [
          'Keep luggage easy to carry on the climb; space on a hill bus can be tight.',
          'If you arrive after dark, try not to start the ghat road in the dark.',
          'Do not assume a bus or a vehicle is waiting at the station; arrange a fallback in advance.',
          'Train numbers and timings are not given on this page — they are for you to verify.'
        ]
      },
      {
        kind: 'note',
        text:
          'This page does not confirm any train service number or timing; check the live service before you travel. Local transport after a night arrival is not guaranteed, so build your plan around that rather than expecting it.'
      },
      {
        kind: 'list',
        items: [
          'The bus stand or city point from which the Yercaud service leaves.',
          'The current departure time and boarding point before you commit.',
          'How you will get from the station into the city or to the bus stand.',
          'Your train’s actual arrival station and time, which this page does not give.',
          'A fallback in case you arrive late or after dark.'
        ]
      },
      {
        kind: 'list',
        items: [
          'Expecting a direct Yercaud bus at the station entrance.',
          'Treating the station as the foot of the climb, when it is only the start.',
          'Starting the ghat road in the dark after a late arrival.',
          'Assuming a local vehicle or bus is waiting with no fallback arranged.',
          'Carrying luggage that is hard to handle on a crowded hill bus.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Which local transport is running from the station into the city that day.',
          'The current departure time and boarding point for the hill service, since no timetable is published here.',
          'Whether any direct service leaves from the station area, rather than assuming one does.',
          'Whether your arrival time leaves enough daylight to start the ghat road safely.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Reading the published 35 km figure as if the station sat at the foot of the climb.',
          'Treating the transfer into the city and the climb as a single leg.',
          'Booking nothing for the stretch between the platform and the bus stand.',
          'Planning no fallback for a late or after-dark arrival.'
        ]
      }
    ],
    faq: [
      {
        q: 'Does a direct bus run from Salem Junction to Yercaud?',
        a: 'No source obtained here confirms a direct service leaving the station entrance. If you arrive by train, the usual route is into Salem city or to the bus stand first, then the ghat climb. Check the current arrangement locally.'
      },
      {
        q: 'How far is Salem Junction from the lake?',
        a: 'The district puts Salem Junction about 35 km from Yercaud. That is the distance from the station to the hill town; the short final stretch to the lake is included within it. No exact travel time can be promised, because weather and traffic decide it.'
      },
      {
        q: 'What if I arrive at night?',
        a: 'Try to avoid starting the ghat road in the dark, and arrange a fallback before you arrive. Do not assume a local vehicle or a bus will be there; this page does not guarantee one.'
      },
      {
        q: 'Can we walk from Salem Junction to Yercaud?',
        a: 'No. The district puts Salem Junction about 35 km from Yercaud and the route includes the ghat climb, so this is not a walk. Reach the city or the bus stand, then take the hill route, and confirm the current arrangement locally.'
      },
      {
        q: 'What should we do with our luggage on the climb?',
        a: 'Keep it easy to carry, because space on a hill bus can be tight as you ride up the ghat road. This page does not list any left-luggage service, so plan to carry what you bring and confirm any options locally.'
      }
    ],
    sourceIds: ['districtLake', 'tnstc', 'googleMaps']
  },
  ta: {
    title: 'சேலம் சந்திப்பில் வந்திறங்கிய பின்: ஏற்காடு ஏரிக்கு அடுத்த இணைப்பு',
    description:
      'ரயில் வாயில் சேலம் சந்திப்பு; ஆனால் ஏரி சுமார் 35 கிமீ தொலைவில். இணைப்பின் வரிசை, லக்கேஜ் கையாள்வது, இரவில் வந்திறங்கினால் ஏன் ஒரு மாற்றுத் திட்டம் தேவை என்பதை இந்தப் பக்கம் விளக்குகிறது.',
    kicker: 'போக்குவரத்து',
    h1: 'சேலம் சந்திப்பிலிருந்து ஏரி வரை: முதலில் இணைப்பு, பின்னர் ஏற்றம்',
    lead:
      'சேலம் சந்திப்பு ஒரு இரு பகுதிப் பயணத்தின் ஒரு பகுதி; அது இலக்கு அல்ல. நிலையம் உங்களை சேலத்தில் இறக்குகிறது; ஏரி இன்னும் சுமார் 35 கிமீ மலைமேல் உள்ளது. நகரத்திற்குள் செல்லும் இணைப்பையும் மலைச்சாலை ஏற்றத்தையும் ஒரே பயணமாகக் கருதுவதே பல ரயில் பயணிகள் செய்யும் தவறு.',
    facts: [
      { label: 'ரயில் அணுகல்', value: 'சேலம் சந்திப்பு, சுமார் 35 கிமீ (மாவட்டப் பக்கம்)' },
      { label: 'ரயில் சேவைகள்', value: 'சரிபார்க்க வேண்டியவை — நேரடி நேரங்களைப் பாருங்கள்' },
      { label: 'இணைப்பு', value: 'முதலில் நகரம் அல்லது பேருந்து நிலையம், பின்னர் ஏற்றம்' },
      { label: 'இரவு வருகை', value: 'வந்திறங்கும் முன் ஒரு மாற்றுத் திட்டம் வையுங்கள்' }
    ],
    blocks: [
      { kind: 'h2', text: 'நிலையம் தொடக்கம், முடிவு அல்ல' },
      {
        kind: 'p',
        text:
          'சேலம் சந்திப்பை ஏற்காட்டுக்கான ரயில் அணுகலாக மாவட்டம் குறிப்பிட்டு, அது ஏற்காட்டிலிருந்து சுமார் 35 கிமீ எனத் தெரிவிக்கிறது. அந்த எண் நிலையத்திலிருந்து மலை நகரம் வரையிலான முழுத் தொலைவு; நிலையம் ஏற்றத்தின் அடிவாரத்திலேயே உள்ளது என்று அர்த்தமல்ல. நடைமேடையிலிருந்து மலைச்சாலை வரை ஒரு பகுதி; ஏற்றம் தனியாக இரண்டாம் பகுதி.'
      },
      { kind: 'h2', text: 'இணைப்பு வரிசை: முதலில் நகரம், பின்னர் ஏற்றம்' },
      {
        kind: 'steps',
        items: [
          'வந்திறங்கியதும் முதலில் சேலம் நகரத்திற்கோ ஏற்காடு சேவை புறப்படும் பேருந்து நிலையத்திற்கோ செல்லுங்கள் — நேராக மலைச்சாலைக்கு அல்ல.',
          'அங்குதான் மலைச்சாலை சேவையோ ஒரு வாகனமோ கிடைக்கும்; நிலைய நுழைவில் இருந்து நேரடி ஏற்காடு பேருந்து இருப்பதாகக் கருத வேண்டாம்.',
          'முடிவு செய்யும் முன் தற்போதைய புறப்பு நேரத்தையும் ஏறும் இடத்தையும் உறுதி செய்யுங்கள்.',
          'மலைச்சாலையில் ஏறி, மேலே உள்ள ஏற்காடு பேருந்து நிலையத்தில் இறங்குங்கள்.',
          'பேருந்து நிலையத்திலிருந்து ஏரி வரையிலான குறுகிய இறுதிப் பகுதியை நடந்தோ உள்ளூர் வாகனத்திலோ கடந்து செல்லுங்கள்.'
        ]
      },
      {
        kind: 'table',
        caption: 'பயணத்தின் ஒவ்வொரு பகுதியும், தெரிந்த தகவலுடன்',
        head: ['பகுதி', 'வெளியிடப்பட்ட தொலைவு அல்லது நிலை', 'உறுதி செய்ய வேண்டியவை'],
        rows: [
          ['சேலம் சந்திப்பு முதல் சேலம் நகரம் / பேருந்து நிலையம்', 'இங்கு வெளியிடப்படவில்லை', 'தற்போதைய உள்ளூர் போக்குவரத்தும் கட்டணமும்'],
          ['சேலம் முதல் ஏற்காடு (ஏற்றம்)', 'சுமார் 30–35 கிமீ (வெளியிடப்பட்ட வரம்பு)', 'புறப்பு நேரமும் ஏறும் இடமும்'],
          ['சேலம் சந்திப்பு — ரயில் அணுகலாக', 'சுமார் 35 கிமீ (மாவட்டப் பக்கம்)', 'உங்கள் ரயில் உண்மையில் வந்திறங்கும் நிலையமும் நேரமும்']
        ]
      },
      { kind: 'h2', text: 'லக்கேஜும் இரவு வருகையும்' },
      {
        kind: 'list',
        items: [
          'ஏற்றத்தில் எளிதில் எடுத்துச் செல்லக்கூடிய வகையில் லக்கேஜை வையுங்கள்; மலைப் பேருந்தில் இடம் குறுகியதாக இருக்கலாம்.',
          'இருள் வந்த பின் வந்திறங்கினால், மலைச்சாலையை இருளில் ஏறத் தொடங்க வேண்டாம்.',
          'நிலையத்தில் ஒரு பேருந்தோ வாகனமோ காத்திருக்கும் எனக் கருத வேண்டாம்; முன்கூட்டியே ஒரு மாற்றுத் திட்டம் வையுங்கள்.',
          'ரயில் சேவை எண்களும் நேரங்களும் இந்தப் பக்கத்தில் தரப்படவில்லை — அவை நீங்கள் சரிபார்க்க வேண்டியவை.'
        ]
      },
      {
        kind: 'note',
        text:
          'இந்தப் பக்கம் எந்த ரயில் சேவை எண்ணையும் நேரத்தையும் உறுதி அளிக்கவில்லை; பயணத்திற்கு முன் தற்போதைய சேவையைச் சரிபாருங்கள். இரவில் வந்திறங்கிய பின் கிடைக்கும் உள்ளூர் போக்குவரத்து உறுதி அல்ல; அதை எதிர்பார்ப்பதை விட அதைச் சுற்றி உங்கள் திட்டத்தை அமையுங்கள்.'
      },
      {
        kind: 'list',
        items: [
          'ஏற்காடு சேவை எந்தப் பேருந்து நிலையத்திலிருந்தோ நகரப் புள்ளியிலிருந்தோ புறப்படுகிறது என்பது.',
          'முடிவு செய்யும் முன் தற்போதைய புறப்பு நேரமும் ஏறும் இடமும்.',
          'நிலையத்திலிருந்து நகரத்திற்கோ பேருந்து நிலையத்திற்கோ எப்படிச் செல்வீர்கள் என்பது.',
          'உங்கள் ரயில் உண்மையில் வந்திறங்கும் நிலையமும் நேரமும் — இவற்றை இந்தப் பக்கம் தரவில்லை.',
          'தாமதமாகவோ இருளுக்குப் பின்னோ வந்தால் ஒரு மாற்றுத் திட்டம்.'
        ]
      },
      {
        kind: 'list',
        items: [
          'நிலைய நுழைவில் ஒரு நேரடி ஏற்காடு பேருந்தை எதிர்பார்ப்பது.',
          'நிலையத்தை ஏற்றத்தின் அடிவாரமாகக் கருதுவது; அது தொடக்கம் மட்டுமே.',
          'இரவு தாமத வருகைக்குப் பின் மலைச்சாலையை இருளில் ஏறத் தொடங்குவது.',
          'மாற்றுத் திட்டம் எதுவும் இல்லாமல், ஒரு உள்ளூர் வாகனமோ பேருந்தோ காத்திருக்கும் எனக் கருதுவது.',
          'நெரிசலான மலைப் பேருந்தில் கையாளக் கடினமான லக்கேஜை எடுத்துச் செல்வது.'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'அன்று நிலையத்திலிருந்து நகரத்திற்கு எந்த உள்ளூர் போக்குவரத்து இயங்குகிறது.',
          'மலைச் சேவைக்கான தற்போதைய புறப்பு நேரமும் ஏறும் இடமும் — இங்கு நேர அட்டவணை வெளியிடப்படவில்லை.',
          'நிலையப் பகுதியிலிருந்து ஒரு நேரடிச் சேவை புறப்படுகிறதா — உள்ளது எனக் கருதாமல் உறுதி செய்யுங்கள்.',
          'உங்கள் வருகை நேரம், மலைச்சாலையைப் பாதுகாப்பாக ஏறத் தேவையான பகல் வெளிச்சத்தை விட்டுச் செல்கிறதா.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'வெளியிடப்பட்ட 35 கிமீ எண்ணை, நிலையம் ஏற்றத்தின் அடிவாரத்தில் இருப்பது போலப் படிப்பது.',
          'நகரத்திற்குள் செல்லும் இணைப்பையும் ஏற்றத்தையும் ஒரே பகுதியாகக் கருதுவது.',
          'நடைமேடையிலிருந்து பேருந்து நிலையம் வரையிலான பகுதிக்கு எதுவும் முன்கூட்டியே திட்டமிடாதது.',
          'தாமதமாகவோ இருளுக்குப் பின்னோ வரும் வருகைக்கு எந்த மாற்றுத் திட்டமும் வைக்காதது.'
        ]
      }
    ],
    faq: [
      {
        q: 'சேலம் சந்திப்பிலிருந்து ஏற்காடு நேரடிப் பேருந்து ஓடுகிறதா?',
        a: 'நிலைய நுழைவிலிருந்து ஒரு நேரடிச் சேவை இருப்பதாக இங்கு கிடைத்த எந்த மூலமும் உறுதி அளிக்கவில்லை. ரயிலில் வந்தால், முதலில் சேலம் நகரத்திற்கோ பேருந்து நிலையத்திற்கோ செல்வதே வழக்கமான வழி; பின்னர் மலைச்சாலை ஏற்றம். தற்போதைய ஏற்பாட்டை உள்ளூரில் சரிபார்க்கவும்.'
      },
      {
        q: 'சேலம் சந்திப்பு ஏரியிலிருந்து எவ்வளவு தொலைவு?',
        a: 'சேலம் சந்திப்பை ஏற்காட்டிலிருந்து சுமார் 35 கிமீ என மாவட்டம் குறிப்பிடுகிறது. அது நிலையத்திலிருந்து மலை நகரம் வரையிலான தொலைவு; ஏரிக்கான குறுகிய இறுதிப் பகுதி அதில் அடங்கும். துல்லியமான பயணநேரத்தை உறுதி அளிக்க முடியாது, வானிலையும் போக்குவரத்தும் பொறுத்தது.'
      },
      {
        q: 'இரவில் வந்திறங்கினால் என்ன செய்வது?',
        a: 'மலைச்சாலையை இருளில் ஏறத் தொடங்குவதைத் தவிர்க்க முயலுங்கள்; வந்திறங்கும் முன்பே ஒரு மாற்றுத் திட்டத்தை வையுங்கள். உள்ளூர் வாகனமோ பேருந்தோ இருக்கும் எனக் கருத வேண்டாம்; இந்தப் பக்கம் அதை உறுதி அளிக்கவில்லை.'
      },
      {
        q: 'சேலம் சந்திப்பிலிருந்து ஏற்காடு வரை நடந்து செல்லலாமா?',
        a: 'இல்லை. சேலம் சந்திப்பை ஏற்காட்டிலிருந்து சுமார் 35 கிமீ என மாவட்டம் குறிப்பிடுகிறது; வழியில் மலைச்சாலை ஏற்றமும் அடங்கும்; எனவே இது ஒரு நடை அல்ல. நகரத்திற்கோ பேருந்து நிலையத்திற்கோ சென்று, பின்னர் மலை வழியை எடுத்துக் கொள்ளுங்கள்; தற்போதைய ஏற்பாட்டை உள்ளூரில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'ஏற்றத்தில் லக்கேஜை எப்படிக் கையாள்வது?',
        a: 'எளிதில் எடுத்துச் செல்லக்கூடிய வகையில் வையுங்கள்; ஏனெனில் மலைச்சாலையில் ஏறும்போது மலைப் பேருந்தில் இடம் குறுகியதாக இருக்கலாம். இந்தப் பக்கம் எந்த லக்கேஜ் வைப்பக சேவையையும் பட்டியலிடவில்லை; எனவே கொண்டு வருவதை நீங்களே சுமக்கத் திட்டமிட்டு, ஏதேனும் வழிகள் இருந்தால் உள்ளூரில் உறுதி செய்யுங்கள்.'
      }
    ],
    sourceIds: ['districtLake', 'tnstc', 'googleMaps']
  }
};

export default page;
