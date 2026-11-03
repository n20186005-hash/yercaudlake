import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'itineraries/family-with-kids',
  family: 'itineraries',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'This plan starts at the Yercaud Lake & Boat House on foot, and Anna Park beside the lake and Deer Park on the shore are both reachable from the lake. Anything beyond that — a viewpoint or the falls — needs a vehicle, which is why this plan leaves it out. All timings are estimates to confirm on the day.',
    ta: 'இந்தத் திட்டம் ஏற்காடு ஏரி மற்றும் படகு இல்லத்தில் நடந்தே தொடங்குகிறது; ஏரிக்கு அருகிலுள்ள அண்ணா பூங்காவும் கரையில் உள்ள மான் பூங்காவும் ஏரியிலிருந்து அடையலாம். அதற்கு அப்பால் உள்ள எதுவும் — ஒரு காட்சி முனையோ அருவியோ — வாகனம் தேவைப்படும்; அதனால்தான் இந்தத் திட்டம் அவற்றை விட்டுவிடுகிறது. இங்குள்ள நேரங்கள் அனைத்தும் கணிப்புகள்; அன்று உறுதிப்படுத்த வேண்டும்.'
  },
  related: ['boating/with-kids', 'nearby/anna-park', 'food/family-friendly-meals', 'visit/lakeside-walk', 'nearby/deer-park'],
  en: {
    title: 'Yercaud Lake with kids: a slow plan that avoids meltdowns',
    description:
      'A kid-paced plan for Yercaud Lake: arrival timing, feeds, the nap window, one park rather than three, a toilet reality check and an early return.',
    kicker: 'Itineraries',
    h1: 'The lake with young children: a slow, flexible plan',
    lead:
      'Children set the pace, not the map. The plan that works at Yercaud Lake is short, fed and rested: one area, one boat attempt, one park, and a return before everyone is tired. Everything here is a planning estimate, not a schedule.',
    facts: [
      { label: 'Suits', value: 'Families with babies and younger children' },
      { label: 'Time budget (estimate)', value: 'Two to three hours at the lake, plus a meal' },
      { label: 'On foot', value: 'Lake, Anna Park and Deer Park sit together' },
      { label: 'Check first', value: 'Toilets and changing facilities are unverified' }
    ],
    blocks: [
      { kind: 'h2', text: 'Start early, and attempt the boat first' },
      {
        kind: 'p',
        text:
          'Reach the lake soon after it opens — the general listing is about 09:00–18:00 — while children are fresh and the counter is calm. Do the boat attempt here: boats are normally described in pedal, rowing and motor types, but which run and how long the wait is can only be asked on the day.'
      },
      {
        kind: 'steps',
        items: [
          'Ask at the counter for the current wait and the smallest suitable boat.',
          'Set a limit: if the wait is longer than your children can hold, walk instead.',
          'Don’t split the group across two boats if everyone can fit in one.',
          'Keep the ride short and end it while it is still fun.'
        ]
      },
      { kind: 'h2', text: 'A rhythm that leaves room for rest' },
      {
        kind: 'table',
        caption: 'A child-paced outline (estimates, adjust freely)',
        head: ['Part of the day', 'With young children', 'Reality check'],
        rows: [
          ['Early morning', 'Arrive and try the boat while everyone is fresh', 'Queue length is unknown until you ask'],
          ['Mid-morning', 'A snack and one park — pick one, not both', 'Toilets and baby-change facilities are unverified'],
          ['Noon', 'Lunch, then head back for the nap', 'A long list of stops defeats young children']
        ]
      },
      { kind: 'h2', text: 'Feeding, naps and a single park' },
      {
        kind: 'list',
        items: [
          'Plan feeds and snacks before hunger turns into a meltdown, not after.',
          'Protect one nap window; a skipped nap costs the whole afternoon.',
          'Treat toilets as unverified — ask locally and carry what you need, including bags for waste.',
          'Anna Park sits beside the lake and Deer Park is on the shore: both are walkable, so choose one. A viewpoint or the falls needs a vehicle and a longer, less forgiving block — leave that for a trip without young children.'
        ]
      },
      {
        kind: 'note',
        text:
          'If it rains, move straight to a covered cafe or back to your base rather than pushing on; boat operation cannot be assumed in any case. Return before the nap window closes or the day turns fussy — an early, calm exit beats a late, tired one.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'The wait at the boat counter, and the smallest boat that suits your group.',
          'Whether toilets and baby-change facilities are available where you stop.',
          'Which single park you will keep, and how far it is from your parking.',
          'The weather, since rain means a covered stop rather than the promenade.'
        ]
      },
      {
        kind: 'note',
        text:
          'The timings and facilities on this page are estimates and unverified; ask locally at the lake on the day, as queues, toilets and what is operating can change.'
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Building a long list of stops; young children do better with one area and one park.',
          'Planning feeds and snacks after hunger sets in, rather than before a meltdown.',
          'Assuming toilets or baby-change facilities; ask locally and carry what you need, including bags for waste.',
          'Skipping the nap window or pushing past it; an early, calm exit beats a tired one.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can young children ride the boats?',
        a: 'Age and eligibility rules are set on the day. Ask staff about minimum age, life-jacket sizes and whether your group can share one boat, and accept that a ride may not be available.'
      },
      {
        q: 'Are there toilets at the lake?',
        a: 'These pages could not verify toilet or baby-change facilities. Ask locally before you rely on them, and carry what you need.'
      },
      {
        q: 'How long should we stay?',
        a: 'Two to three hours at the lake plus a meal is a realistic estimate for younger children, shortened freely for weather, queues and naps.'
      },
      {
        q: 'What is the first thing to do with young children?',
        a: 'Reach the lake soon after it opens and attempt the boat first, while the children are fresh and the counter is calm.'
      },
      {
        q: 'What should we skip with young children?',
        a: 'Skip a viewpoint or the falls: both need a vehicle and a longer, less forgiving block, and are better left for a trip without young children. Also pick one park, not both.'
      }
    ],
    sourceIds: ['districtLake', 'districtBoatHouse', 'ttdcBooking', 'yercaudRestaurants', 'moddysCafe']
  },
  ta: {
    title: 'குழந்தைகளுடன் ஏற்காடு ஏரி: சோர்வைத் தவிர்க்கும் மெதுவான திட்டம்',
    description:
      'குழந்தைகளின் வேகத்திற்கேற்ற ஏற்காடு ஏரி திட்டம்: வரும் நேரம், உணவு, தூக்க நேரம், மூன்றுக்குப் பதிலாக ஒரு பூங்கா, கழிப்பிட உண்மைச் சரிபார்ப்பு, முன்னதாகத் திரும்புதல்.',
    kicker: 'பயணத் திட்டங்கள்',
    h1: 'சிறு குழந்தைகளுடன் ஏரி: மெதுவான, நெகிழ்வான திட்டம்',
    lead:
      'வேகத்தை நிர்ணயிப்பது வரைபடம் அல்ல, குழந்தைகள்தான். ஏற்காடு ஏரியில் வேலை செய்யும் திட்டம் குறுகியது, உணவும் ஓய்வும் கொண்டது: ஒரு பகுதி, ஒரு படகு முயற்சி, ஒரு பூங்கா, எல்லோரும் சோர்வதற்கு முன் திரும்புதல். இங்குள்ள அனைத்தும் திட்டக் கணிப்புகளே, கால அட்டவணை அல்ல.',
    facts: [
      { label: 'பொருத்தம்', value: 'கைக்குழந்தைகள் மற்றும் சிறு குழந்தைகள் உள்ள குடும்பங்கள்' },
      { label: 'நேரம் (கணிப்பு)', value: 'ஏரியில் இரண்டு–மூன்று மணி, உணவுடன்' },
      { label: 'நடந்து செல்லலாம்', value: 'ஏரி, அண்ணா பூங்கா, மான் பூங்கா அருகருகே' },
      { label: 'முதலில் சரிபார்க்கவும்', value: 'கழிப்பிடம், உடை மாற்றும் வசதி உறுதி செய்யப்படவில்லை' }
    ],
    blocks: [
      { kind: 'h2', text: 'முன்னதாகத் தொடங்குங்கள், முதலில் படகை முயற்சி செய்யுங்கள்' },
      {
        kind: 'p',
        text:
          'திறந்த சற்று நேரத்தில் ஏரியை அடையுங்கள் — பொதுவான பதிவில் நேரம் சுமார் 09:00–18:00 — குழந்தைகள் சுறுசுறுப்பாகவும் கவுண்டர் அமைதியாகவும் இருக்கும்போது. படகு முயற்சியை இங்கே செய்யுங்கள்: படகுகள் பொதுவாக மிதிபடகு, துடுப்புப் படகு, இயந்திரப் படகு எனக் குறிப்பிடப்படுகின்றன; ஆனால் அன்று எது இயங்குகிறது, காத்திருப்பு எவ்வளவு என்பதை அன்றுதான் கேட்க முடியும்.'
      },
      {
        kind: 'steps',
        items: [
          'தற்போதைய காத்திருப்பையும் குழந்தைகளுக்குப் பொருத்தமான சிறிய படகையும் கவுண்டரில் கேளுங்கள்.',
          'ஒரு வரம்பை வையுங்கள்: குழந்தைகள் தாங்கும் அளவுக்கு மேல் வரிசை நீண்டால், நடையைத் தேர்ந்தெடுங்கள்.',
          'எல்லோரும் ஒரே படகில் ஏற முடிந்தால் இரண்டு படகுகளாகப் பிரிக்க வேண்டாம்.',
          'சவாரியைக் குறுகியதாக வைத்து, இன்னும் வேடிக்கையாக இருக்கும்போதே முடியுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'ஓய்வுக்கு இடம் தரும் ஒரு தாளம்' },
      {
        kind: 'table',
        caption: 'குழந்தைகளின் வேகத்திற்கான ஒரு சுருக்கம் (கணிப்புகள், தாராளமாக மாற்றுங்கள்)',
        head: ['நாளின் பகுதி', 'சிறு குழந்தைகளுடன்', 'உண்மைச் சரிபார்ப்பு'],
        rows: [
          ['காலை முதல் பகுதி', 'எல்லோரும் சுறுசுறுப்பாக இருக்கும்போது வந்து படகை முயற்சி செய்யுங்கள்', 'காத்திருப்பின் நீளம் கேட்கும் வரை தெரியாது'],
          ['காலை நடுப்பகுதி', 'ஒரு சிற்றுண்டியும் ஒரு பூங்காவும் — இரண்டையும் அல்ல', 'கழிப்பிடம், குழந்தை உடை மாற்றும் வசதி உறுதி செய்யப்படவில்லை'],
          ['நண்பகல்', 'மதிய உணவு, பின் தூக்கத்திற்காகத் திரும்புங்கள்', 'நீண்ட நிறுத்தப் பட்டியல் சிறு குழந்தைகளைத் தோற்கடிக்கும்']
        ]
      },
      { kind: 'h2', text: 'உணவு, தூக்கம் மற்றும் ஒரே பூங்கா' },
      {
        kind: 'list',
        items: [
          'பசி சோர்வாக மாறும் முன் உணவையும் சிற்றுண்டியையும் திட்டமிடுங்கள், அதன் பின் அல்ல.',
          'ஒரு தூக்க நேரத்தைப் பாதுகாங்கள்; தவறிய தூக்கம் முழு பிற்பகலையும் பறிக்கும்.',
          'கழிப்பிடத்தை உறுதி செய்யப்படாததாகக் கருதுங்கள் — உள்ளூரில் கேளுங்கள்; கழிவுக்கான பைகள் உட்பட தேவையானதை எடுத்துச் செல்லுங்கள்.',
          'அண்ணா பூங்கா ஏரிக்கு அருகிலும், மான் பூங்கா கரையிலும் உள்ளன: இரண்டும் நடக்கக்கூடியவை, எனவே ஒன்றைத் தேர்ந்தெடுங்கள். ஒரு காட்சி முனையோ அருவியோ வாகனமும் நீண்ட, கடினமான நேரப் பகுதியும் தேவைப்படும் — அதைச் சிறு குழந்தைகள் இல்லாத பயணத்திற்கு வைத்துக்கொள்ளுங்கள்.'
        ]
      },
      {
        kind: 'note',
        text:
          'மழை பெய்தால், தொடர்ந்து முயற்சிக்காமல் நேராக ஒரு மூடிய கஃபேக்கோ உங்கள் தங்குமிடத்திற்கோ செல்லுங்கள்; எப்படியும் படகு இயங்கும் எனக் கருத முடியாது. தூக்க நேரம் முடிவதற்கு முன் அல்லது நாள் சிடுசிடுப்பாக மாறும் முன் திரும்புங்கள் — தாமதமான சோர்வான வெளியேற்றத்தை விட முன்னதான அமைதியான வெளியேற்றம் சிறந்தது.'
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'படகு கவுண்டரின் காத்திருப்பு, உங்கள் குழுவிற்குப் பொருத்தமான சிறிய படகு.',
          'நீங்கள் நிற்கும் இடத்தில் கழிப்பிடமும் குழந்தை உடை மாற்றும் வசதியும் உள்ளதா.',
          'எந்த ஒரு பூங்காவை வைத்துக்கொள்வது, அது உங்கள் நிறுத்தத்திலிருந்து எவ்வளவு தொலைவு.',
          'வானிலை — மழை என்றால் நடைபாதை அல்ல, மூடிய ஒரு நிறுத்தம்.'
        ]
      },
      {
        kind: 'note',
        text:
          'இந்தப் பக்கத்தில் உள்ள நேரங்களும் வசதிகளும் கணிப்புகள், உறுதி செய்யப்படாதவை; அன்று ஏரியில் உள்ளூரில் கேளுங்கள் — வரிசைகள், கழிப்பிடங்கள், எது இயங்குகிறது என்பவை மாறலாம்.'
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'நீண்ட நிறுத்தப் பட்டியலை அமைப்பது; சிறு குழந்தைகளுக்கு ஒரு பகுதியும் ஒரு பூங்காவும் நல்லது.',
          'பசி சோர்வாக மாறிய பின் உணவையும் சிற்றுண்டியையும் திட்டமிடுவது, அதற்கு முன்பு அல்ல.',
          'கழிப்பிடமோ குழந்தை உடை மாற்றும் வசதியோ இருப்பதாகக் கருதுவது; உள்ளூரில் கேளுங்கள்; கழிவுக்கான பைகள் உட்பட தேவையானதை எடுத்துச் செல்லுங்கள்.',
          'தூக்க நேரத்தைத் தவிர்ப்பது அல்லது அதைத் தாண்டிச் செல்வது; சோர்வான வெளியேற்றத்தை விட முன்னதான அமைதியான வெளியேற்றம் சிறந்தது.'
        ]
      }
    ],
    faq: [
      {
        q: 'சிறு குழந்தைகள் படகில் ஏறலாமா?',
        a: 'வயது மற்றும் தகுதி விதிகள் அன்று நிர்ணயிக்கப்படுகின்றன. குறைந்தபட்ச வயது, உயிர்காப்பு உடை அளவுகள், உங்கள் குழு ஒரே படகில் செல்ல முடியுமா என்பதைப் பணியாளரிடம் கேளுங்கள்; சவாரி கிடைக்காமல் போகலாம் என்பதையும் ஏற்றுக்கொள்ளுங்கள்.'
      },
      {
        q: 'ஏரியில் கழிப்பிடம் உள்ளதா?',
        a: 'இந்தப் பக்கங்கள் கழிப்பிடம் அல்லது குழந்தை உடை மாற்றும் வசதியை உறுதி செய்ய முடியவில்லை. அவற்றை நம்புவதற்கு முன் உள்ளூரில் கேளுங்கள்; தேவையானதை எடுத்துச் செல்லுங்கள்.'
      },
      {
        q: 'எவ்வளவு நேரம் தங்கலாம்?',
        a: 'சிறு குழந்தைகளுக்கு ஏரியில் இரண்டு–மூன்று மணி மற்றும் ஒரு உணவு என்பது நடைமுறைக் கணிப்பு; வானிலை, வரிசை, தூக்கம் ஆகியவற்றுக்காகத் தாராளமாகக் குறைத்துக்கொள்ளுங்கள்.'
      },
      {
        q: 'சிறு குழந்தைகளுடன் முதலில் என்ன செய்ய வேண்டும்?',
        a: 'திறந்த சற்று நேரத்தில் ஏரியை அடைந்து, குழந்தைகள் சுறுசுறுப்பாகவும் கவுண்டர் அமைதியாகவும் இருக்கும்போது முதலில் படகை முயற்சி செய்யுங்கள்.'
      },
      {
        q: 'சிறு குழந்தைகளுடன் எதைத் தவிர்க்க வேண்டும்?',
        a: 'ஒரு காட்சி முனையையோ அருவியையோ தவிர்க்கவும்: இரண்டுக்கும் வாகனமும் நீண்ட, கடினமான நேரப் பகுதியும் தேவை; சிறு குழந்தைகள் இல்லாத பயணத்திற்கு வைத்துக்கொள்வது நல்லது. மேலும் ஒரு பூங்காவை மட்டும் தேர்ந்தெடுங்கள், இரண்டையும் அல்ல.'
      }
    ],
    sourceIds: ['districtLake', 'districtBoatHouse', 'ttdcBooking', 'yercaudRestaurants', 'moddysCafe']
  }
};

export default page;
