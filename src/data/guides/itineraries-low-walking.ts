import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'itineraries/low-walking',
  family: 'itineraries',
  priority: 'P2',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'This plan stays at the Yercaud Lake & Boat House area: arrive or be dropped as close to the lakeside as the venue allows, then keep to one short stretch near your parking. No first hop is needed if you are already at the lake. Accessibility, drop-off points and every distance here are unverified and must be confirmed locally on the day.',
    ta: 'இந்தத் திட்டம் ஏற்காடு ஏரி மற்றும் படகு இல்லப் பகுதியிலேயே இருக்கிறது: இடம் அனுமதிக்கும் அளவுக்கு ஏரிக்கரைக்கு அருகில் வாருங்கள் அல்லது இறங்குங்கள்; பின்னர் உங்கள் நிறுத்தத்திற்கு அருகிலுள்ள ஒரு குறுகிய பகுதியில் இருங்கள். நீங்கள் ஏற்கனவே ஏரியில் இருந்தால் முதலில் செல்ல வேண்டிய தூரம் இல்லை. அணுகல் தன்மை, இறங்குமிடங்கள், இங்குள்ள ஒவ்வொரு தூரமும் உறுதி செய்யப்படவில்லை; அன்று உள்ளூரில் உறுதிப்படுத்த வேண்டும்.'
  },
  related: ['visit/lakeside-walk', 'transport/parking', 'food/cafes-with-lake-views', 'itineraries/rainy-day', 'nearby/anna-park'],
  en: {
    title: 'Low-walking at Yercaud Lake: a rest-heavy, short-radius plan',
    description:
      'A low-walking plan for Yercaud Lake with frequent rests and short distances. Accessibility, ramps and seat counts here are all unverified — ask first.',
    kicker: 'Itineraries',
    h1: 'Low-walking at the lake: short distances and frequent rests',
    lead:
      'This plan assumes limited walking and a need to sit often. It stays within a short radius of one drop-off point and treats every step-free claim as unproven. Accessibility, ramp presence and the number of seats are all unverified; ask before you commit.',
    facts: [
      { label: 'Suits', value: 'Limited mobility, or walking with frequent rests' },
      { label: 'Time budget (estimate)', value: 'One to two hours, with rests built in' },
      { label: 'Keep to', value: 'One short lakeside stretch near your parking' },
      { label: 'Unverified', value: 'Step-free access, ramps and seat counts' }
    ],
    blocks: [
      { kind: 'h2', text: 'Arrive when the lakeside is quiet enough to sit' },
      {
        kind: 'p',
        text:
          'Come soon after the lake area opens — the general listing runs about 09:00–18:00 — so you have the best chance of finding a place to sit and the shortest distances to cover. A busy promenade leaves no room to rest, and an unplanned rest turns a short visit into an exhausting one.'
      },
      { kind: 'h2', text: 'The boat is optional, and boarding is the question' },
      {
        kind: 'list',
        items: [
          'Boats are normally described as pedal, rowing and motor types, but nothing in the sources here confirms step-free boarding.',
          'Ask whether there is a step-free route to the boarding point, and how many steps there are.',
          'Ask which boat type is easiest to board for someone with limited mobility.',
          'Ask about the wait, so you can decide to skip it rather than stand.',
          'Have a clear fallback: the lakeside view is enough without a ride.'
        ]
      },
      { kind: 'h2', text: 'Everything here is a short-radius stage' },
      {
        kind: 'table',
        caption: 'Short-radius stages — with the parts that need confirming',
        head: ['Stage', 'Low-walking option', 'What is unverified'],
        rows: [
          ['Arrival', 'Park or be dropped as close to the lakeside as the venue allows', 'Drop-off point, ramps and step-free access'],
          ['Lakeside', 'A short stretch with frequent sits', 'Number of seats and benches'],
          ['Boat', 'Only if boarding suits your group', 'Boarding steps and life-jacket sizes'],
          ['Beyond the lake', 'Use a vehicle rather than walking', 'Availability of accessible vehicles']
        ]
      },
      { kind: 'h2', text: 'Lunch and rest, close by' },
      {
        kind: 'note',
        text:
          'Plan lunch somewhere you can sit down near your base or the lake, rather than pressing on to a distant stop. To be explicit: the level of accessibility, the presence of ramps and the number of seats are all unverified here, so confirm them directly. If rain arrives, move to a covered cafe rather than a wet promenade, and go back early — a short, easy day is the whole point of this plan.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'The closest drop-off or parking point to the lakeside.',
          'Whether there is a step-free route to the boarding point, and how many steps there are.',
          'How many seats and benches lie along your short stretch.',
          'Whether an accessible vehicle is available for any leg beyond the lake.'
        ]
      },
      {
        kind: 'note',
        text:
          'Accessibility, ramps, seating and every distance on this page are unverified estimates; confirm them directly with staff and locally on the day.'
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Assuming a step-free route or ramps exist before asking; none is confirmed.',
          'Planning a long lakeside stretch with no guaranteed seat to rest on.',
          'Boarding a boat without first asking about the steps and the easiest boat type.',
          'Arriving at the busiest hour, when the promenade leaves no room to sit or turn.'
        ]
      }
    ],
    faq: [
      {
        q: 'Is the lakeside wheelchair-accessible?',
        a: 'We could not verify that. Surfaces, ramps, step-free entrances and boarding are all unconfirmed, so ask locally and plan around whatever you are told.'
      },
      {
        q: 'Are there places to sit?',
        a: 'Seating is unverified. Assume there may not be enough and plan short stretches with your own option to rest.'
      },
      {
        q: 'Can we still ride a boat?',
        a: 'Only if boarding suits your group; ask staff about steps and the easiest boat. Do not treat a ride as guaranteed.'
      },
      {
        q: 'How much walking does this plan involve?',
        a: 'It stays within a short radius of one drop-off point, over one short lakeside stretch near your parking, with rests built in. All distances and step-free claims are unverified, so confirm them locally.'
      },
      {
        q: 'What if there is nowhere to sit?',
        a: 'Seating is unverified, so assume there may not be enough and plan short stretches with your own option to rest; a busy promenade leaves no room to rest.'
      }
    ],
    sourceIds: ['googleMaps', 'districtLake', 'ttdcBooking', 'openMeteo']
  },
  ta: {
    title: 'ஏற்காடு ஏரியில் குறைந்த நடை: அடிக்கடி ஓய்வு, குறுகிய தூரத் திட்டம்',
    description:
      'ஏற்காடு ஏரிக்கான குறைந்த நடை திட்டம் — அடிக்கடி ஓய்வு, குறுகிய தூரங்கள். அணுகல், பாதைச் சரிவு, இருக்கைகளின் எண்ணிக்கை ஆகியவை உறுதி செய்யப்படவில்லை — முதலில் கேளுங்கள்.',
    kicker: 'பயணத் திட்டங்கள்',
    h1: 'ஏரியில் குறைந்த நடை: குறுகிய தூரங்கள், அடிக்கடி ஓய்வு',
    lead:
      'இந்தத் திட்டம் குறைந்த நடை மற்றும் அடிக்கடி அமரும் தேவையைக் கருதுகிறது. ஒரே இறங்குமிடத்திலிருந்து குறுகிய சுற்றளவுக்குள் இருக்கிறது; படியில்லாத அணுகல் எனும் எந்தக் கூற்றையும் நிரூபிக்கப்படாததாகக் கருதுகிறது. அணுகல் தன்மை, பாதைச் சரிவு இருக்கிறதா, இருக்கைகளின் எண்ணிக்கை — எதுவும் உறுதி செய்யப்படவில்லை; உறுதிப்படுத்திய பின் முடிவு செய்யுங்கள்.',
    facts: [
      { label: 'பொருத்தம்', value: 'குறைந்த நடைத்திறன், அல்லது அடிக்கடி ஓய்வுடன் நடப்பவர்கள்' },
      { label: 'நேரம் (கணிப்பு)', value: 'ஒன்று–இரண்டு மணி, ஓய்வுகள் உட்பட' },
      { label: 'இதற்குள் இருங்கள்', value: 'உங்கள் நிறுத்தத்திற்கு அருகிலுள்ள ஒரு குறுகிய ஏரிக்கரைப் பகுதி' },
      { label: 'உறுதி செய்யப்படாதவை', value: 'படியில்லாத அணுகல், பாதைச் சரிவு, இருக்கை எண்ணிக்கை' }
    ],
    blocks: [
      { kind: 'h2', text: 'ஏரிக்கரை அமரும் அளவுக்கு அமைதியாக இருக்கும்போது வாருங்கள்' },
      {
        kind: 'p',
        text:
          'ஏரிப் பகுதி திறந்த சற்று நேரத்தில் வாருங்கள் — பொதுவான பதிவில் நேரம் சுமார் 09:00–18:00 — அப்போது அமர ஒரு இடம் கிடைக்க வாய்ப்பு அதிகம், கடக்க வேண்டிய தூரமும் குறைவு. நெரிசலான நடைபாதையில் ஓய்வெடுக்க இடமிராது; திடீர் ஓய்வு ஒரு குறுகிய வருகையையே சோர்வான அனுபவமாக மாற்றிவிடும்.'
      },
      { kind: 'h2', text: 'படகு விருப்பத் தேர்வு; ஏறுவதே கேள்வி' },
      {
        kind: 'list',
        items: [
          'படகுகள் பொதுவாக மிதிபடகு, துடுப்புப் படகு, இயந்திரப் படகு எனக் குறிப்பிடப்படுகின்றன; ஆனால் இங்கு பெறப்பட்ட மூலங்களில் எதுவும் படியில்லாத ஏறுதலை உறுதிப்படுத்தவில்லை.',
          'படகேற்ற இடத்திற்குப் படியில்லாத வழி உள்ளதா, எத்தனை படிகள் எனக் கேளுங்கள்.',
          'குறைந்த நடைத்திறன் உள்ளவர்க்கு எந்தப் படகு வகை எளிதில் ஏறலாம் எனக் கேளுங்கள்.',
          'காத்திருப்பு நேரத்தைக் கேளுங்கள்; நிற்பதை விடத் தவிர்ப்பது நல்லது.',
          'தெளிவான மாற்றுத் திட்டம் வையுங்கள்: சவாரி இல்லாமலும் ஏரிக்காட்சி போதும்.'
        ]
      },
      { kind: 'h2', text: 'இங்குள்ள அனைத்தும் குறுகிய சுற்றளவு நிலைகள்' },
      {
        kind: 'table',
        caption: 'குறுகிய சுற்றளவு நிலைகள் — உறுதிப்படுத்த வேண்டிய பகுதிகளுடன்',
        head: ['நிலை', 'குறைந்த நடை தேர்வு', 'உறுதி செய்யப்படாதவை'],
        rows: [
          ['வருகை', 'இடம் அனுமதிக்கும் அளவுக்கு ஏரிக்கரைக்கு அருகில் நிறுத்துங்கள் / இறங்குங்கள்', 'இறங்குமிடம், பாதைச் சரிவு, படியில்லாத அணுகல்'],
          ['ஏரிக்கரை', 'அடிக்கடி அமர்ந்து குறுகிய தூரம்', 'இருக்கைகள், பெஞ்சுகளின் எண்ணிக்கை'],
          ['படகு', 'உங்கள் குழுவிற்கு ஏறுதல் பொருந்தினால் மட்டும்', 'படி ஏறுதல், உயிர்காப்பு உடை அளவுகள்'],
          ['ஏரிக்கு அப்பால்', 'நடப்பதற்குப் பதிலாக வாகனம் பயன்படுத்துங்கள்', 'அணுகல் வசதி உள்ள வாகனங்கள் கிடைப்பது']
        ]
      },
      { kind: 'h2', text: 'மதிய உணவும் ஓய்வும், அருகிலேயே' },
      {
        kind: 'note',
        text:
          'பாதி வழியில் நிற்காமல், உங்கள் தங்குமிடத்திற்கோ ஏரிக்கோ அருகில் அமர்ந்து சாப்பிடக்கூடிய இடத்தில் மதிய உணவைத் திட்டமிடுங்கள். தெளிவாகச் சொல்ல வேண்டுமெனில்: அணுகல் தன்மையின் அளவு, பாதைச் சரிவுகள் இருக்கின்றனவா, இருக்கைகளின் எண்ணிக்கை — இவை அனைத்தும் இங்கு உறுதி செய்யப்படவில்லை; எனவே நேரடியாக உறுதிப்படுத்துங்கள். மழை வந்தால் ஈரமான நடைபாதைக்குப் பதிலாக மூடிய ஒரு கஃபேக்குச் சென்று, முன்னதாகவே திரும்புங்கள் — குறுகிய, எளிய நாளே இந்தத் திட்டத்தின் நோக்கம்.'
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'ஏரிக்கரைக்கு மிக அருகிலுள்ள இறங்குமிடம் அல்லது நிறுத்தம்.',
          'படகேற்ற இடத்திற்குப் படியில்லாத வழி உள்ளதா, எத்தனை படிகள்.',
          'உங்கள் குறுகிய பகுதியில் எத்தனை இருக்கைகளும் பெஞ்சுகளும் உள்ளன.',
          'ஏரிக்கு அப்பால் செல்லும் எந்தக் கட்டத்திற்கும் அணுகல் வசதி உள்ள வாகனம் கிடைக்குமா.'
        ]
      },
      {
        kind: 'note',
        text:
          'அணுகல் தன்மை, பாதைச் சரிவுகள், இருக்கை வசதி, இந்தப் பக்கத்தின் ஒவ்வொரு தூரமும் உறுதி செய்யப்படாத கணிப்புகள்; அன்று பணியாளரிடமும் உள்ளூரிலும் நேரடியாக உறுதிப்படுத்துங்கள்.'
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'படியில்லாத வழியோ பாதைச் சரிவோ உள்ளது எனக் கேட்காமல் கருதுவது — எதுவும் உறுதி செய்யப்படவில்லை.',
          'ஓய்வெடுக்க உறுதியான இருக்கை இல்லாமல் ஒரு நீண்ட ஏரிக்கரைப் பகுதியைத் திட்டமிடுவது.',
          'படிகள் மற்றும் எளிதான படகு வகையை முதலில் கேட்காமல் படகில் ஏறுவது.',
          'நெரிசலான நேரத்தில் வருவது; அப்போது நடைபாதையில் அமரவோ திரும்பவோ இடமிராது.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஏரிக்கரை சக்கர நாற்காலிக்கு ஏற்றதா?',
        a: 'அதை உறுதி செய்ய முடியவில்லை. தரை, பாதைச் சரிவு, படியில்லாத நுழைவுகள், படகேற்றம் — அனைத்தும் உறுதிப்படுத்தப்படவில்லை; எனவே உள்ளூரில் கேட்டு, சொல்வதற்கேற்பத் திட்டமிடுங்கள்.'
      },
      {
        q: 'அமர இடங்கள் உள்ளனவா?',
        a: 'இருக்கை வசதி உறுதி செய்யப்படவில்லை. போதுமான இடம் இருக்காது எனக் கருதி, குறுகிய தூரங்களையும் உங்கள் சொந்த ஓய்வு வழியையும் திட்டமிடுங்கள்.'
      },
      {
        q: 'நாங்கள் இன்னும் படகில் செல்ல முடியுமா?',
        a: 'உங்கள் குழுவிற்கு ஏறுதல் பொருந்தினால் மட்டும்; படிகள் மற்றும் எளிதான படகு பற்றிப் பணியாளரிடம் கேளுங்கள். சவாரியை உறுதி எனக் கருத வேண்டாம்.'
      },
      {
        q: 'இந்தத் திட்டத்தில் எவ்வளவு நடை உள்ளது?',
        a: 'ஒரே இறங்குமிடத்திலிருந்து குறுகிய சுற்றளவுக்குள், உங்கள் நிறுத்தத்திற்கு அருகிலுள்ள ஒரு குறுகிய ஏரிக்கரைப் பகுதியில், ஓய்வுகள் உட்பட. தூரங்களும் படியில்லாத அணுகல் கூற்றுகளும் உறுதி செய்யப்படவில்லை; உள்ளூரில் உறுதிப்படுத்துங்கள்.'
      },
      {
        q: 'அமர இடமே இல்லையெனில் என்ன செய்வது?',
        a: 'இருக்கை வசதி உறுதி செய்யப்படவில்லை; போதுமான இடம் இருக்காது எனக் கருதி, குறுகிய தூரங்களையும் உங்கள் சொந்த ஓய்வு வழியையும் திட்டமிடுங்கள்; நெரிசலான நடைபாதையில் ஓய்வெடுக்க இடமிராது.'
      }
    ],
    sourceIds: ['googleMaps', 'districtLake', 'ttdcBooking', 'openMeteo']
  }
};

export default page;
