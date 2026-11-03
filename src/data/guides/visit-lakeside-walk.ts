import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'visit/lakeside-walk',
  family: 'visit',
  priority: 'P2',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake',
  fromLake: {
    en: 'The lakeside walk starts where you already are: from Yercaud Lake & Boat House, simply follow the lake road and the adjoining parkland on foot, and no ticket is needed for the open shore. How far a continuous path actually runs is uncertain, so treat any given distance as approximate and confirm the route on the ground.',
    ta: 'ஏரிக்கரை நடை நீங்கள் ஏற்கனவே இருக்கும் இடத்திலிருந்தே தொடங்குகிறது: ஏற்காடு ஏரி மற்றும் படகு இல்லத்திலிருந்து ஏரிச் சாலையையும் அதை ஒட்டிய பூங்காப் பகுதியையும் நடந்தே பின்பற்றுங்கள்; திறந்த கரைக்கு டிக்கெட் தேவையில்லை. தொடர்ச்சியான பாதை எவ்வளவு தூரம் செல்கிறது என்பது உறுதியில்லை; எனவே கொடுக்கப்படும் எந்தத் தொலைவையும் தோராயமாகக் கருதி வழியை இடத்தில் உறுதி செய்யுங்கள்.'
  },
  related: ['visit/best-time', 'nearby/anna-park', 'nearby/deer-park', 'itineraries/low-walking', 'food/cafes-with-lake-views'],
  en: {
    title: 'Walking around Yercaud Lake: what is actually walkable',
    description:
      'The walkable parts of Yercaud Lake’s shore, where you can enter and pause — and one thing to confirm on the ground: whether a continuous, safe loop exists.',
    kicker: 'Visiting the lake',
    h1: 'The lakeside on foot: entrances, rest spots and one honest caveat',
    lead:
      'A walk along the shore is the simplest way to enjoy Yercaud Lake, and it needs no ticket. What it does need is a realistic idea of how far you can go. The district page names the parkland around the water but says nothing about a complete path around it, so this page describes what is known and flags what is not.',
    facts: [
      { label: 'Shore landmarks', value: 'Deer Park, Anna Park, Tamil Nadu Hotel' },
      { label: 'Anna Park, beside the lake', value: '₹15 adult / ₹10 child (district page)' },
      { label: 'Continuous loop', value: 'Uncertain — confirm on site' },
      { label: 'Accessible route', value: 'Unconfirmed — no source found' }
    ],
    blocks: [
      { kind: 'h2', text: 'What surrounds the shore' },
      {
        kind: 'p',
        text:
          'The district tourism page describes the lake as being bordered by a deer park, a recreation park and Tamil Nadu Hotel, and places Anna Park immediately next to it. Those are the reference points most visitors walk between on the shore side.'
      },
      {
        kind: 'list',
        items: [
          'Anna Park sits right beside the lake; the district page lists entry at ₹15 for adults and ₹10 for children, with separate camera and video charges.',
          'Deer Park and the recreation park are named as part of the lakeside setting.',
          'Tamil Nadu Hotel is another landmark the district page places by the water.',
          'A public road and the boat-house area make up the busiest, most accessible stretch.'
        ]
      },
      { kind: 'h2', text: 'Is there a continuous loop around the lake?' },
      {
        kind: 'note',
        text:
          'No source obtained for this page confirms that a continuous, safe, step-free path runs right around Yercaud Lake. Whether such a loop exists — and whether it crosses a road, private land or uneven ground — should be confirmed on site before you plan a full circuit. Assume you can walk stretches of the shore rather than a guaranteed ring.'
      },
      {
        kind: 'p',
        text:
          'In practice, plan a there-and-back walk along the accessible shore instead of a circuit. That way you are never committed to finishing a loop that may not exist, and you can turn around whenever the ground or the gradient stops suiting your group.'
      },
      { kind: 'h2', text: 'Entrances and places to pause' },
      {
        kind: 'list',
        items: [
          'The main approach is by the lake road near the boat house and the adjoining parkland.',
          'Anna Park is the clearest stopping point, with its own ticket and hours that differ from the lake.',
          'Use the parks and roadside benches as rest points rather than expecting facilities at fixed intervals.',
          'Confirm opening hours for each park separately; the lake area and the parks do not share one schedule.',
          'Take drinking water with you; do not assume water points at regular distances.'
        ]
      },
      {
        kind: 'table',
        caption: 'Ways to walk the lakeside, and what each asks of you',
        head: ['Option', 'What it involves', 'What to check'],
        rows: [
          ['There-and-back along the accessible shore', 'Walk out and retrace your steps, turning back when the ground or gradient stops suiting you', 'Where the accessible stretch begins and ends'],
          ['Pausing inside a park beside the lake', 'Stop within parkland rather than on the open shore', 'Each park’s own ticket and hours'],
          ['A full circuit of the lake', 'A complete loop around the water', 'Whether a continuous, safe loop exists at all']
        ]
      },
      {
        kind: 'list',
        items: [
          'Assuming a full loop exists without confirming it on the ground.',
          'Starting a circuit with no turning point if the path runs out.',
          'Expecting water points, benches or facilities at regular intervals.',
          'Treating the parks and the open lake as having one shared timetable.',
          'Setting out without drinking water or a plan for limited mobility.'
        ]
      },
      {
        kind: 'steps',
        items: [
          'Ask locally where the walkable shore begins and ends.',
          'Check whether the stretch you plan suits your group’s mobility.',
          'Confirm each park’s separate hours and entry charge before including it.',
          'Carry water and pick a clear point at which you will turn back.',
          'Re-check the ground conditions if it has rained recently.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Confirm on the day that the stretch you plan is open, since rain can change the ground.',
          'Ask locally whether the shore walk is broken by a road or private land at any point.',
          'Check before you pay that each park beside the lake is open and charging as listed.',
          'Do not assume a step-free route; test the gradient with your group before committing.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Planning a fixed route before confirming the shore is walkable at all.',
          'Assuming the walk suits everyone in your group without checking the gradient.',
          'Mixing up the lake timetable with each park’s own opening hours.',
          'Forgetting that recent rain can leave the shore path uneven or slippery.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can you walk all the way around Yercaud Lake?',
        a: 'We could not confirm from any source that a continuous, safe, step-free path circles the lake. Plan a there-and-back walk along the accessible shore, and confirm a full loop on site before relying on it.'
      },
      {
        q: 'Is the lakeside walk suitable for limited mobility?',
        a: 'No source describes an accessible route, so treat step-free access as unconfirmed. Check the ground in person and plan short, retraceable stretches rather than a circuit.'
      },
      {
        q: 'Do I need a ticket to walk by the lake?',
        a: 'Walking the open lakeside needs no ticket as far as any source says. Anna Park beside the lake is separate and charges its own entry, so check its hours before planning it into the walk.'
      },
      {
        q: 'Does the lakeside walk have a fixed route or a defined start?',
        a: 'No source obtained describes a fixed route or an official start point. The main approach is by the lake road near the boat house and the adjoining parkland, and you can walk the accessible shore from there. Confirm the walkable stretch on the ground.'
      },
      {
        q: 'What should the parks beside the lake be used for?',
        a: 'Treat them as stopping and rest points rather than expecting facilities at fixed intervals. Anna Park is the clearest stopping point, with its own ticket and hours that differ from the lake, so confirm each park separately.'
      }
    ],
    sourceIds: ['districtLake', 'googleMaps', 'districtGallery', 'districtPlaces']
  },
  ta: {
    title: 'ஏற்காடு ஏரியைச் சுற்றி நடப்பது: உண்மையில் எவ்வளவு தூரம் நடக்கலாம்',
    description:
      'ஏற்காடு ஏரிக்கரையில் நடக்கக்கூடிய பகுதிகள், நுழைவு இடங்கள், ஓய்வு இடங்கள் — மேலும் நிலத்தில் உறுதி செய்ய வேண்டிய ஒன்று: தொடர்ச்சியான, பாதுகாப்பான, தடையற்ற சுற்றுப் பாதை உள்ளதா என்பது.',
    kicker: 'ஏரியைப் பார்வையிடுதல்',
    h1: 'ஏரிக்கரையில் நடை: நுழைவு இடங்கள், ஓய்வு இடங்கள், ஒரு நேர்மையான எச்சரிக்கை',
    lead:
      'ஏரிக்கரையில் நடப்பது ஏற்காடு ஏரியை அனுபவிக்கும் மிக எளிய வழி; அதற்கு டிக்கெட் தேவையில்லை. ஆனால் எவ்வளவு தூரம் செல்ல முடியும் என்பதற்கு நடைமுறையான கணிப்பு தேவை. நீரைச் சுற்றியுள்ள பூங்காப் பகுதிகளை மாவட்டப் பக்கம் பெயரிடுகிறது; ஆனால் நீரைச் சுற்றி ஒரு முழுமையான பாதை உள்ளது என்பதைப் பற்றி எதுவும் கூறவில்லை. எனவே இந்தப் பக்கம் தெரிந்ததை விவரித்து, தெரியாததைக் குறிக்கிறது.',
    facts: [
      { label: 'கரை அடையாளங்கள்', value: 'மான் பூங்கா, அண்ணா பூங்கா, தமிழ்நாடு ஹோட்டல்' },
      { label: 'ஏரிக்கு அருகிலுள்ள அண்ணா பூங்கா', value: 'பெரியவர் ₹15 / குழந்தை ₹10 (மாவட்டப் பக்கம்)' },
      { label: 'தொடர்ச்சியான சுற்று', value: 'உறுதியில்லை — இடத்தில் உறுதி செய்யுங்கள்' },
      { label: 'தடையற்ற வழி', value: 'உறுதி செய்யப்படவில்லை — மூலம் இல்லை' }
    ],
    blocks: [
      { kind: 'h2', text: 'கரையைச் சுற்றி என்ன இருக்கிறது' },
      {
        kind: 'p',
        text:
          'ஏரியை ஒரு மான் பூங்கா, ஒரு பொழுதுபோக்குப் பூங்கா, தமிழ்நாடு ஹோட்டல் ஆகியவை சூழ்ந்திருப்பதாகவும், அண்ணா பூங்கா அதற்கு நேரடியாக அருகில் இருப்பதாகவும் மாவட்டச் சுற்றுலாப் பக்கம் குறிப்பிடுகிறது. கரைப் பகுதியில் பயணிகள் அதிகம் நடந்து செல்லும் அடையாளப் புள்ளிகள் இவையே.'
      },
      {
        kind: 'list',
        items: [
          'அண்ணா பூங்கா ஏரிக்கு நேரடியாக அருகில் உள்ளது; பெரியவர்களுக்கு ₹15, குழந்தைகளுக்கு ₹10 நுழைவு எனவும், கேமரா, காணொலிக்குத் தனிக் கட்டணம் எனவும் மாவட்டப் பக்கம் குறிப்பிடுகிறது.',
          'மான் பூங்காவும் பொழுதுபோக்குப் பூங்காவும் ஏரிக்கரைச் சூழலின் பகுதியாகப் பெயரிடப்பட்டுள்ளன.',
          'தமிழ்நாடு ஹோட்டல் நீரின் அருகில் மாவட்டப் பக்கம் குறிப்பிடும் மற்றொரு அடையாளம்.',
          'பொது சாலையும் படகு இல்லப் பகுதியும் மிக நெரிசலான, எளிதில் அணுகக்கூடிய பகுதி.'
        ]
      },
      { kind: 'h2', text: 'ஏரியைச் சுற்றி ஒரு தொடர்ச்சியான சுற்றுப் பாதை உள்ளதா?' },
      {
        kind: 'note',
        text:
          'ஏற்காடு ஏரியைச் சுற்றி ஒரு தொடர்ச்சியான, பாதுகாப்பான, படிகள் இல்லாத பாதை உள்ளது என்பதை இந்தப் பக்கத்திற்குப் பெறப்பட்ட எந்த மூலமும் உறுதி செய்யவில்லை. அத்தகைய சுற்று உள்ளதா — அது ஒரு சாலையையோ, தனியார் நிலத்தையோ, சமமற்ற தரையையோ கடக்கிறதா — என்பதை முழுச் சுற்றைத் திட்டமிடுவதற்கு முன் இடத்திலேயே உறுதி செய்ய வேண்டும். உறுதியான ஒரு வளையத்திற்குப் பதிலாக, கரையின் சில பகுதிகளை நடக்கலாம் எனக் கருதுங்கள்.'
      },
      {
        kind: 'p',
        text:
          'நடைமுறையில், சுற்று வளையத்திற்குப் பதிலாக அணுகக்கூடிய கரையில் சென்று திரும்பும் நடையைத் திட்டமிடுங்கள். அவ்வாறு செய்தால், இல்லாத ஒரு வளையத்தை முடிக்க வேண்டிய கட்டாயம் உங்களுக்கு இருக்காது; தரையோ சரிவோ உங்கள் குழுவுக்குப் பொருந்தாதபோது எப்போது வேண்டுமானாலும் திரும்பலாம்.'
      },
      { kind: 'h2', text: 'நுழைவு இடங்களும் ஓய்வு இடங்களும்' },
      {
        kind: 'list',
        items: [
          'முக்கிய அணுகல், படகு இல்லம் அருகிலுள்ள ஏரிச் சாலை மற்றும் அதை ஒட்டிய பூங்காப் பகுதி வழியாகும்.',
          'அண்ணா பூங்கா தெளிவான நிறுத்தப் புள்ளி; அதன் சொந்த டிக்கெட்டும் ஏரியிலிருந்து வேறுபடும் நேரமும் உள்ளன.',
          'நிலையான இடைவெளியில் வசதிகள் இருக்கும் என எதிர்பார்க்காமல், பூங்காக்களையும் சாலையோர இருக்கைகளையும் ஓய்வு இடங்களாகப் பயன்படுத்துங்கள்.',
          'ஒவ்வொரு பூங்காவின் திறப்பு நேரத்தையும் தனித்தனியே உறுதி செய்யுங்கள்; ஏரிப் பகுதிக்கும் பூங்காக்களுக்கும் ஒரே அட்டவணை இல்லை.',
          'குடிநீரை எடுத்துச் செல்லுங்கள்; ஒவ்வொரு குறிப்பிட்ட தூரத்திலும் தண்ணீர் இருக்கும் எனக் கருத வேண்டாம்.'
        ]
      },
      {
        kind: 'table',
        caption: 'ஏரிக்கரையில் நடக்கும் வழிகள், ஒவ்வொன்றும் உங்களிடம் கேட்பது என்ன',
        head: ['வழி', 'என்ன அடங்கும்', 'எதைச் சரிபார்க்க வேண்டும்'],
        rows: [
          ['அணுகக்கூடிய கரையில் சென்று திரும்பும் நடை', 'நடந்து சென்று அதே வழியில் திரும்புங்கள்; தரையோ சரிவோ பொருந்தாதபோது திரும்புங்கள்', 'அணுகக்கூடிய பகுதி எங்கே தொடங்கி முடிகிறது'],
          ['ஏரிக்கு அருகிலுள்ள பூங்காவில் நிற்பது', 'திறந்த கரையில் அல்லாமல் பூங்கா நிலத்திற்குள் நிற்பது', 'ஒவ்வொரு பூங்காவின் சொந்த டிக்கெட்டும் நேரமும்'],
          ['ஏரியைச் சுற்றி ஒரு முழுச் சுற்று', 'நீரைச் சுற்றி ஒரு முழுமையான வளையம்', 'தொடர்ச்சியான, பாதுகாப்பான சுற்று உள்ளதா என்பது']
        ]
      },
      {
        kind: 'list',
        items: [
          'ஒரு முழுச் சுற்று உள்ளதா என்பதை இடத்தில் உறுதி செய்யாமல் அது உள்ளதாகக் கருதுவது.',
          'பாதை முடிந்தால் திரும்பும் இடம் எதுவும் இல்லாமல் ஒரு சுற்றைத் தொடங்குவது.',
          'நிலையான இடைவெளியில் தண்ணீர், இருக்கைகள், வசதிகள் இருக்கும் என எதிர்பார்ப்பது.',
          'பூங்காக்களுக்கும் திறந்த ஏரிக்கும் ஒரே அட்டவணை உள்ளதாகக் கருதுவது.',
          'குடிநீரோ, நடக்கும் திறன் குறைவானவர்களுக்கான திட்டமோ இல்லாமல் புறப்படுவது.'
        ]
      },
      {
        kind: 'steps',
        items: [
          'நடக்கக்கூடிய கரை எங்கே தொடங்கி எங்கே முடிகிறது என உள்ளூரில் கேளுங்கள்.',
          'நீங்கள் திட்டமிடும் பகுதி உங்கள் குழுவின் நடைநிலைக்குப் பொருந்துகிறதா என்பதைச் சரிபாருங்கள்.',
          'சேர்க்கும் முன் ஒவ்வொரு பூங்காவின் தனி நேரத்தையும் நுழைவுக் கட்டணத்தையும் உறுதி செய்யுங்கள்.',
          'குடிநீரை எடுத்துச் சென்று, எங்கே திரும்புவீர்கள் என்பதைத் தெளிவாகத் தேர்ந்தெடுங்கள்.',
          'சமீபத்தில் மழை பெய்திருந்தால் தரை நிலையை மீண்டும் சரிபாருங்கள்.'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'மழை தரையை மாற்றக்கூடும் என்பதால், நீங்கள் திட்டமிடும் பகுதி அன்று திறந்திருக்கிறதா என்பதை உறுதிப்படுத்துங்கள்.',
          'கரை நடை எங்காவது ஒரு சாலையாலோ தனியார் நிலத்தாலோ பிரிக்கப்படுகிறதா என்பதை உள்ளூரில் கேளுங்கள்.',
          'ஏரிக்கு அருகிலுள்ள ஒவ்வொரு பூங்காவும் திறந்து, பட்டியலிட்டபடி கட்டணம் வசூலிக்கிறதா என்பதை பணம் செலுத்தும் முன் சரிபாருங்கள்.',
          'படிகள் இல்லாத வழி உள்ளது எனக் கருத வேண்டாம்; முடிவு செய்யும் முன் உங்கள் குழுவுடன் சரிவைச் சோதியுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'கரை நடக்கக்கூடியதா என்பதை உறுதி செய்யாமல் ஒரு நிலையான வழியைத் திட்டமிடுவது.',
          'சரிவைச் சரிபார்க்காமல், அந்த நடை உங்கள் குழுவில் அனைவருக்கும் பொருந்தும் எனக் கருதுவது.',
          'ஏரியின் அட்டவணையையும் ஒவ்வொரு பூங்காவின் சொந்த திறப்பு நேரத்தையும் குழப்புவது.',
          'சமீபத்திய மழை கரைப் பாதையை சமமற்றதாகவோ வழுக்கலாகவோ ஆக்கலாம் என்பதை மறப்பது.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஏற்காடு ஏரியைச் சுற்றி முழுவதும் நடந்து செல்லலாமா?',
        a: 'ஏரியைச் சுற்றி ஒரு தொடர்ச்சியான, பாதுகாப்பான, படிகள் இல்லாத பாதை உள்ளது என்பதை எந்த மூலத்திலும் உறுதி செய்ய முடியவில்லை. அணுகக்கூடிய கரையில் சென்று திரும்பும் நடையைத் திட்டமிட்டு, ஒரு முழுச் சுற்றை நம்புவதற்கு முன் அதை இடத்தில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'நடக்கும் திறன் குறைவானவர்களுக்கு ஏரிக்கரை நடை ஏற்றதா?',
        a: 'தடையற்ற வழியை எந்த மூலமும் விவரிக்கவில்லை; எனவே படிகள் இல்லாத அணுகலை உறுதி செய்யப்படாததாகக் கருதுங்கள். தரையை நேரில் சரிபார்த்து, சுற்று வளையத்திற்குப் பதிலாக மீண்டும் திரும்பக்கூடிய குறுகிய பகுதிகளைத் திட்டமிடுங்கள்.'
      },
      {
        q: 'ஏரிக்கரையில் நடக்க டிக்கெட் தேவையா?',
        a: 'எந்த மூலமும் கூறியவரை, திறந்த ஏரிக்கரையில் நடக்க எந்த டிக்கெட்டும் தேவையில்லை. ஏரிக்கு அருகிலுள்ள அண்ணா பூங்கா தனித்தது; அதற்குத் தனி நுழைவுக் கட்டணம் உண்டு; எனவே நடையில் அதைச் சேர்க்கும் முன் அதன் நேரத்தைச் சரிபாருங்கள்.'
      },
      {
        q: 'ஏரிக்கரை நடைக்கு நிலையான வழியோ ஒரு நிர்ணயிக்கப்பட்ட தொடக்கமோ உள்ளதா?',
        a: 'பெறப்பட்ட எந்த மூலமும் ஒரு நிலையான வழியையோ அதிகாரப்பூர்வ தொடக்கப் புள்ளியையோ விவரிக்கவில்லை. முக்கிய அணுகல், படகு இல்லம் அருகிலுள்ள ஏரிச் சாலை மற்றும் அதை ஒட்டிய பூங்காப் பகுதி வழியாகும்; அங்கிருந்து அணுகக்கூடிய கரையில் நடக்கலாம். நடக்கக்கூடிய பகுதியை இடத்தில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'ஏரிக்கு அருகிலுள்ள பூங்காக்களை எதற்குப் பயன்படுத்த வேண்டும்?',
        a: 'நிலையான இடைவெளியில் வசதிகள் இருக்கும் என எதிர்பாராமல், அவற்றை நிறுத்தம் மற்றும் ஓய்வு இடங்களாகப் பயன்படுத்துங்கள். அண்ணா பூங்கா தெளிவான நிறுத்தப் புள்ளி; அதன் சொந்த டிக்கெட்டும் ஏரியிலிருந்து வேறுபடும் நேரமும் உள்ளன; எனவே ஒவ்வொரு பூங்காவையும் தனித்தனியே உறுதி செய்யுங்கள்.'
      }
    ],
    sourceIds: ['districtLake', 'googleMaps', 'districtGallery', 'districtPlaces']
  }
};

export default page;
