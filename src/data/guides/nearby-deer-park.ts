import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'nearby/deer-park',
  family: 'nearby',
  priority: 'P2',
  lastChecked: '2 November 2026',
  mapsQuery: 'Deer Park Yercaud',
  fromLake: {
    en: 'Deer Park is described as a small enclosure in the Yercaud hill area rather than at the lake itself, so plan a vehicle or auto ride from the boat house rather than a walk. No verified distance is available, so treat any figure as approximate and confirm the location and its current status locally on the day.',
    ta: 'மான் பூங்கா ஏரியை ஒட்டியல்ல, ஏற்காடு மலைப்பகுதியில் ஒரு சிறிய அடைப்பாக விவரிக்கப்படுகிறது; எனவே படகு இல்லத்திலிருந்து நடப்பதற்குப் பதிலாக வாகனம் அல்லது ஆட்டோவில் செல்லுங்கள். உறுதி செய்யப்பட்ட தொலைவு எதுவும் இல்லை; எனவே எந்த எண்ணையும் தோராயமாகக் கருதி, இருப்பிடத்தையும் அதன் தற்போதைய நிலையையும் அன்றைய நாளில் உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['nearby/anna-park', 'nearby/botanical-garden', 'itineraries/family-with-kids', 'visit/best-time', 'nearby/kiliyur-falls'],
  en: {
    title: 'Deer Park near Yercaud Lake: location, status and who it suits',
    description:
      'Deer Park appears in Yercaud lists but its current condition is not confirmed by an official source. What to check locally, how it fits a lake day, and when to skip it.',
    kicker: 'Nearby places',
    h1: 'Deer Park in the Yercaud hills: check before you go, not after',
    lead:
      'Deer Park is often listed among Yercaud’s smaller attractions, but no official source obtained here confirms that it is open, stocked or maintained today. This page is deliberately cautious: confirm locally before adding it to your day.',
    facts: [
      { label: 'Type', value: 'A small animal enclosure, not a large wildlife park' },
      { label: 'Current status', value: 'Not confirmed by an official source — check locally' },
      { label: 'Animals', value: 'Do not assume animals are present' },
      { label: 'Time needed', value: 'Short, and only if it is open when you call' }
    ],
    blocks: [
      { kind: 'h2', text: 'What and where it is' },
      {
        kind: 'p',
        text:
          'Deer Park is described in traveller listings as a small deer enclosure in the Yercaud hill area. It is not a large wildlife park and not a substitute for a national park. Because it appears mostly in third-party listings rather than on a current official page, treat its condition as unverified.'
      },
      {
        kind: 'note',
        text:
          'This page does not claim the park is open, closed, free or ticketed. Those details were not confirmed against a current official source, and inventing them would be worse than leaving them blank.'
      },
      { kind: 'h2', text: 'What to confirm before travelling' },
      {
        kind: 'table',
        caption: 'Ask these locally — none is confirmed here',
        head: ['Question', 'Why it matters'],
        rows: [
          ['Is it currently open?', 'Seasonal or maintenance closures are common for small sites'],
          ['Is there an entry fee?', 'Small sites often have a nominal gate charge'],
          ['Are animals present?', 'Enclosure populations change and are not guaranteed'],
          ['How long is the visit?', 'Sets how much of your day it absorbs']
        ]
      },
      { kind: 'h2', text: 'How it would fit into a lake day' },
      {
        kind: 'steps',
        items: [
          'Start at Yercaud Lake and finish the boat house first.',
          'Call or ask at your accommodation whether the site is open today.',
          'If it is open, treat it as a short stop on the way to another place, not a destination.',
          'If it is not open, fall back to Anna Park and the lakeside area instead.'
        ]
      },
      { kind: 'h2', text: 'Who it suits' },
      {
        kind: 'list',
        items: [
          'Families looking for a small, quick stop to break up a drive.',
          'Visitors already passing the area by vehicle — not worth a dedicated trip.',
          'Anyone expecting a zoo or safari: set expectations much lower.',
          'Travellers short on time: skip it and give the lake and viewpoints the time instead.'
        ]
      },
      { kind: 'h2', text: 'Sensible defaults' },
      {
        kind: 'list',
        items: [
          'Do not feed or approach animals; follow any staff instructions at the site.',
          'Take your rubbish away with you; the district runs a plastic-free programme.',
          'Keep the visit conditional — have a second stop ready in case it is closed.',
          'Do not treat a listing photo as proof of the current condition.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Whether the site is open that day; no current official source confirms its status.',
          'Whether there is any entry charge; the fee is unconfirmed here.',
          'Whether animals are actually present; do not assume they are.',
          'How long a visit takes, so you know how much of your day it absorbs.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Treating a listing or a photo as proof the park is open and stocked.',
          'Making it a dedicated destination instead of a brief stop on the way.',
          'Feeding or approaching any animals if you do visit.',
          'Leaving no fallback if the site turns out to be closed.'
        ]
      }
    ],
    faq: [
      {
        q: 'Is Deer Park open right now?',
        a: 'We could not confirm this from a current official source, so we do not state it either way. Ask locally on the day you plan to visit.'
      },
      {
        q: 'Is Deer Park worth a special trip?',
        a: 'On the evidence available, no. It is a small site that works as a brief stop if you are already nearby and it is open, rather than a reason to travel.'
      },
      {
        q: 'Are there entry fees?',
        a: 'Unconfirmed. Do not rely on any figure you see in a listing; check at the site.'
      },
      {
        q: 'What should I check before travelling to Deer Park?',
        a: 'Confirm whether it is open that day, whether there is an entry charge, and whether animals are present. None of these is confirmed here, so ask locally before you set out.'
      },
      {
        q: 'What should I do if Deer Park is not open?',
        a: 'Fall back to Anna Park and the lakeside area instead. Deer Park works only as a short stop on the way to another place, and only if it is open when you check.'
      }
    ],
    sourceIds: ['districtLake', 'districtPlaces', 'googleMaps', 'wikipediaYercaud']
  },
  ta: {
    title: 'ஏற்காடு ஏரிக்கு அருகில் மான் பூங்கா: இடம், நிலை, யாருக்கு ஏற்றது',
    description:
      'மான் பூங்கா ஏற்காடு பட்டியல்களில் இடம்பெறுகிறது; ஆனால் அதன் தற்போதைய நிலையை அதிகாரப்பூர்வ மூலம் உறுதிப்படுத்தவில்லை. உள்ளூரில் என்ன சரிபார்க்க வேண்டும், ஏரி பயணத்தில் எப்படி இணைப்பது, எப்போது தவிர்க்க வேண்டும்.',
    kicker: 'அருகிலுள்ள இடங்கள்',
    h1: 'ஏற்காடு மலைப்பகுதியில் மான் பூங்கா: செல்வதற்கு முன் சரிபாருங்கள்',
    lead:
      'ஏற்காட்டின் சிறிய சுற்றுலா இடங்களில் ஒன்றாக மான் பூங்கா அடிக்கடி பட்டியலிடப்படுகிறது; ஆனால் இன்று அது திறந்திருக்கிறதா, விலங்குகள் உள்ளனவா, பராமரிக்கப்படுகிறதா என்பதை இங்கு பயன்படுத்தப்பட்ட எந்த அதிகாரப்பூர்வ மூலமும் உறுதிப்படுத்தவில்லை. எனவே இந்தப் பக்கம் வேண்டுமென்றே எச்சரிக்கையாக உள்ளது: உங்கள் நாளில் சேர்ப்பதற்கு முன் உள்ளூரில் உறுதி செய்யுங்கள்.',
    facts: [
      { label: 'வகை', value: 'சிறிய விலங்கு அடைப்பு; பெரிய வனவிலங்குப் பூங்கா அல்ல' },
      { label: 'தற்போதைய நிலை', value: 'அதிகாரப்பூர்வ மூலத்தால் உறுதி செய்யப்படவில்லை — உள்ளூரில் சரிபாருங்கள்' },
      { label: 'விலங்குகள்', value: 'விலங்குகள் உள்ளன எனக் கருத வேண்டாம்' },
      { label: 'தேவைப்படும் நேரம்', value: 'குறுகியது; நீங்கள் அழைக்கும்போது திறந்திருந்தால் மட்டும்' }
    ],
    blocks: [
      { kind: 'h2', text: 'இது என்ன, எங்கே உள்ளது' },
      {
        kind: 'p',
        text:
          'பயணிகள் பட்டியல்களில் மான் பூங்கா, ஏற்காடு மலைப்பகுதியில் உள்ள ஒரு சிறிய மான் அடைப்பாக விவரிக்கப்படுகிறது. இது பெரிய வனவிலங்குப் பூங்கா அல்ல; தேசியப் பூங்காவுக்கு மாற்றும் அல்ல. இது தற்போதைய அதிகாரப்பூர்வப் பக்கத்தை விட பெரும்பாலும் வெளி பட்டியல்களில் இடம்பெறுவதால், அதன் நிலையை உறுதி செய்யப்படாததாகவே கருதுங்கள்.'
      },
      {
        kind: 'note',
        text:
          'இந்தப் பக்கம் பூங்கா திறந்திருக்கிறது, மூடப்பட்டிருக்கிறது, இலவசம் அல்லது கட்டணம் என்று எதையும் கூறவில்லை. அந்த விவரங்கள் தற்போதைய அதிகாரப்பூர்வ மூலத்துடன் உறுதிப்படுத்தப்படவில்லை; அவற்றைக் கற்பனை செய்வது காலியாக விடுவதை விட மோசம்.'
      },
      { kind: 'h2', text: 'புறப்படுவதற்கு முன் உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'table',
        caption: 'இவற்றை உள்ளூரில் கேளுங்கள் — இங்கு எதுவும் உறுதி செய்யப்படவில்லை',
        head: ['கேள்வி', 'ஏன் முக்கியம்'],
        rows: [
          ['இப்போது திறந்திருக்கிறதா?', 'சிறிய இடங்களில் பருவம் அல்லது பராமரிப்பு காரணமாக மூடல் வழக்கமானது'],
          ['நுழைவுக் கட்டணம் உண்டா?', 'சிறிய இடங்களில் சிறு வாசல் கட்டணம் இருக்கும்'],
          ['விலங்குகள் உள்ளனவா?', 'அடைப்புகளில் விலங்குகளின் எண்ணிக்கை மாறும்; உறுதி இல்லை'],
          ['வருகை எவ்வளவு நேரம்?', 'உங்கள் நாளில் இது எவ்வளவு எடுக்கும் என்பதைத் தீர்மானிக்கும்']
        ]
      },
      { kind: 'h2', text: 'ஏரி பயணத்தில் இது எப்படிப் பொருந்தும்' },
      {
        kind: 'steps',
        items: [
          'ஏற்காடு ஏரியில் தொடங்கி முதலில் படகு இல்லத்தை முடியுங்கள்.',
          'இன்று அந்த இடம் திறந்திருக்கிறதா என்பதை அழைத்தோ உங்கள் தங்குமிடத்திலோ கேளுங்கள்.',
          'திறந்திருந்தால், அதை ஒரு இலக்காக அல்ல, மற்றொரு இடத்திற்குச் செல்லும் வழியில் ஒரு குறுகிய நிறுத்தமாகக் கருதுங்கள்.',
          'திறக்கவில்லை எனில், மாற்றாக அண்ணா பூங்கா மற்றும் ஏரிக்கரைப் பகுதிக்குச் செல்லுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'யாருக்கு ஏற்றது' },
      {
        kind: 'list',
        items: [
          'பயணத்தை இடையில் பிரிக்க ஒரு சிறிய, விரைவான நிறுத்தம் தேடும் குடும்பங்கள்.',
          'ஏற்கனவே வாகனத்தில் அந்தப் பகுதியைக் கடப்பவர்கள் — தனிப் பயணமாக இது மதிப்புக்குரியது அல்ல.',
          'உயிரியல் பூங்கா அல்லது சபாரி எதிர்பார்ப்பவர்கள்: எதிர்பார்ப்பை மிகவும் குறைத்துக் கொள்ளுங்கள்.',
          'நேரம் குறைவான பயணிகள்: இதைத் தவிர்த்து, அந்த நேரத்தை ஏரிக்கும் காட்சி முனைகளுக்கும் தாருங்கள்.'
        ]
      },
      { kind: 'h2', text: 'நல்ல இயல்புநிலை முடிவுகள்' },
      {
        kind: 'list',
        items: [
          'விலங்குகளுக்கு உணவிடவோ அருகில் செல்லவோ வேண்டாம்; இடத்தில் உள்ள பணியாளர் வழிகாட்டுதலைப் பின்பற்றுங்கள்.',
          'கழிவுகளைத் திரும்பக் கொண்டு வாருங்கள்; மாவட்டம் நெகிழியில்லா திட்டத்தை நடத்துகிறது.',
          'வருகையை நிபந்தனைக்குட்பட்டதாக வையுங்கள் — மூடப்பட்டிருந்தால் செல்ல இரண்டாவது இடத்தைத் தயாராக வையுங்கள்.',
          'ஒரு பட்டியல் புகைப்படத்தை தற்போதைய நிலைக்கு சான்றாகக் கருத வேண்டாம்.'
        ]
      },
      { kind: 'h2', text: 'அன்றைய நாளில் உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'அந்த இடம் அன்று திறந்திருக்கிறதா; தற்போதைய அதிகாரப்பூர்வ மூலம் எதுவும் அதன் நிலையை உறுதி செய்யவில்லை.',
          'நுழைவுக் கட்டணம் ஏதேனும் உள்ளதா; இங்கு அந்தக் கட்டணம் உறுதி செய்யப்படவில்லை.',
          'விலங்குகள் உண்மையில் உள்ளனவா; அவை உள்ளன எனக் கருத வேண்டாம்.',
          'ஒரு வருகை எவ்வளவு நேரம் ஆகும்; உங்கள் நாளில் இது எவ்வளவு எடுக்கும் என்பதை அறிய.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'ஒரு பட்டியலையோ புகைப்படத்தையோ பூங்கா திறந்து விலங்குகள் உள்ளன என்பதற்கான சான்றாகக் கருதுவது.',
          'வழியில் ஒரு சிறு நிறுத்தமாகக் கருதாமல் அதை ஒரு தனி இலக்காக ஆக்குவது.',
          'சென்றால் விலங்குகளுக்கு உணவிடுவது அல்லது அவற்றை நெருங்குவது.',
          'அந்த இடம் மூடப்பட்டிருந்தால் செல்ல மாற்று இடம் எதுவும் வைக்காதது.'
        ]
      }
    ],
    faq: [
      {
        q: 'மான் பூங்கா இப்போது திறந்திருக்கிறதா?',
        a: 'தற்போதைய அதிகாரப்பூர்வ மூலத்திலிருந்து இதை உறுதிப்படுத்த முடியவில்லை; எனவே ஆம் அல்லது இல்லை எனக் கூறவில்லை. நீங்கள் செல்லத் திட்டமிட்ட நாளில் உள்ளூரில் கேளுங்கள்.'
      },
      {
        q: 'மான் பூங்கா தனிப் பயணத்திற்கு மதிப்புள்ளதா?',
        a: 'கிடைத்த தகவலின் அடிப்படையில் இல்லை. நீங்கள் ஏற்கனவே அருகில் இருந்து அது திறந்திருந்தால் ஒரு சிறு நிறுத்தமாகப் பொருந்தும்; பயணம் மேற்கொள்வதற்கான காரணமாக அல்ல.'
      },
      {
        q: 'நுழைவுக் கட்டணம் உள்ளதா?',
        a: 'உறுதி செய்யப்படவில்லை. பட்டியலில் காணும் எந்த எண்ணையும் நம்ப வேண்டாம்; இடத்திலேயே சரிபாருங்கள்.'
      },
      {
        q: 'மான் பூங்காவிற்குப் புறப்படுவதற்கு முன் நான் எதைச் சரிபார்க்க வேண்டும்?',
        a: 'அது அன்று திறந்திருக்கிறதா, நுழைவுக் கட்டணம் ஏதேனும் உள்ளதா, விலங்குகள் உள்ளனவா என்பவற்றை உறுதி செய்யுங்கள். இவை எதுவும் இங்கு உறுதி செய்யப்படவில்லை; எனவே புறப்படுவதற்கு முன் உள்ளூரில் கேளுங்கள்.'
      },
      {
        q: 'மான் பூங்கா திறக்கவில்லை என்றால் நான் என்ன செய்ய வேண்டும்?',
        a: 'மாற்றாக அண்ணா பூங்கா மற்றும் ஏரிக்கரைப் பகுதிக்குச் செல்லுங்கள். மான் பூங்கா மற்றொரு இடத்திற்குச் செல்லும் வழியில் ஒரு குறுகிய நிறுத்தமாக மட்டுமே பொருந்தும்; நீங்கள் சரிபார்க்கும்போது அது திறந்திருந்தால் மட்டும்.'
      }
    ],
    sourceIds: ['districtLake', 'districtPlaces', 'googleMaps', 'wikipediaYercaud']
  }
};

export default page;
