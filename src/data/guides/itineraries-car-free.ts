import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'itineraries/car-free',
  family: 'itineraries',
  priority: 'P2',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'This car-free day is based at the Yercaud Lake & Boat House: the first stop is on foot at the lake itself, and the town centre for meals is a short local ride or a walk unless you are already on Lake Road. Everything further out needs a hired ride, and anyone staying close to the lake can simply start on the shore. Distances and timings are approximate; confirm your ride back on the day.',
    ta: 'இந்த வாகனம் இல்லாத நாள் ஏற்காடு ஏரி மற்றும் படகு இல்லத்தை மையமாகக் கொண்டது: முதல் நிறுத்தம் ஏரியிலேயே நடந்து செல்வது; உணவுக்கான நகர மையம், நீங்கள் ஏற்கனவே லேக் ரோட்டில் இல்லாவிட்டால், ஒரு குறுகிய உள்ளூர் வாகனம் அல்லது நடை. அதற்கு அப்பால் உள்ள எதற்கும் வாடகை வாகனம் தேவை; ஏரிக்கு அருகில் தங்குபவர்கள் கரையிலேயே தொடங்கலாம். தூரங்களும் நேரங்களும் தோராயமானவை; அன்று திரும்பும் வாகனத்தை உறுதிப்படுத்த வேண்டும்.'
  },
  related: ['transport/from-yercaud-bus-stand', 'transport/bus-vs-taxi', 'nearby/pagoda-point', 'food/breakfast-before-boating', 'visit/lakeside-walk'],
  en: {
    title: 'Yercaud Lake without a car: walking plus short local rides',
    description:
      'Touring Yercaud Lake without your own car: walking distances, short local rides, and the one rule about securing your ride back before you go far.',
    kicker: 'Itineraries',
    h1: 'At the lake without a car: walk, then hire short rides',
    lead:
      'Without a car the lake area is still an easy day, because several stops sit within walking reach. The skill is choosing when to walk and when to pay for a short ride — and, before you go far, making sure a ride will bring you back. Distances here are commonly published values and should be confirmed locally.',
    facts: [
      { label: 'Suits', value: 'Visitors arriving by bus or on foot' },
      { label: 'Time budget (estimate)', value: 'A relaxed half day around the lake' },
      { label: 'Walkable', value: 'Lake, Anna Park and Deer Park' },
      { label: 'Rule', value: 'Secure your ride back before you go far' }
    ],
    blocks: [
      { kind: 'h2', text: 'Get to the lake, then read the boat counter' },
      {
        kind: 'p',
        text:
          'The lake is close to the town and bus stand — distances are commonly quoted at roughly 1–1.5 km, so confirm the walk or take a short local ride. Arriving by local transport can put you at the lake at a good hour, so use that early arrival for the boat: ask the counter for the current wait before you commit the morning to it.'
      },
      { kind: 'h2', text: 'What you can walk to, and what you cannot' },
      {
        kind: 'list',
        items: [
          'Walk: the lake, its promenade, Anna Park beside it and Deer Park on the shore.',
          'Walk with a short ride: the town centre for meals and a cafe.',
          'Hire a ride: the hill viewpoints, the Rose Garden and Silk Farm, and Kiliyur Falls.',
          'Do not attempt the viewpoint side on foot; the distances and gradients do not suit it.'
        ]
      },
      { kind: 'h2', text: 'Each leg of a car-free day' },
      {
        kind: 'table',
        caption: 'Car-free legs (with the reality check for each)',
        head: ['Leg', 'How to travel', 'Reality check'],
        rows: [
          ['Bus stand or town to the lake', 'Local bus, auto-rickshaw or a short walk', 'Distance is often quoted at about 1–1.5 km; confirm it'],
          ['Lake to Anna Park or Deer Park', 'On foot', 'Walkable; entrances are separate'],
          ['Lake to a viewpoint', 'A hired auto-rickshaw or taxi', 'Agree the return fare and time, not just the drop'],
          ['Return at the end of the day', 'Pre-arranged vehicle or the last town bus', 'Do not rely on finding a ride at a remote point']
        ]
      },
      { kind: 'h2', text: 'Eat and rest where the rides are easy' },
      {
        kind: 'note',
        text:
          'Take lunch in the town centre rather than at a remote stop, so that a ride is easy to find and you are not stranded after a meal; a town cafe also gives a warm place to rest between the walking parts. The one rule for a car-free day: settle the return before you leave for anywhere far — agree the fare and the pickup time with the same driver, or confirm the last town bus, and do not assume mobile coverage or available autos at a remote viewpoint. If rain sets in, cut the distant legs first and stay near the town and the lake.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'That the walk from the bus stand or town to the lake matches your ability — quoted distances are approximate, so check on the spot or take a short ride.',
          'The return fare and pickup time for any hired ride to a viewpoint, agreed with the same driver before you set off.',
          'The timing of the last town bus if you plan to travel back by public transport.',
          'The condition of the distant legs — if rain sets in, keep to the lake and town where rides are easy.'
        ]
      },
      {
        kind: 'note',
        text:
          'All timings and legs here are estimates and were accurate to the best of our knowledge at the time of checking; services, waits and road conditions change, so confirm the details locally on the day before you rely on them.'
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Setting off for a viewpoint without settling the return fare and pickup time with the same driver.',
          'Assuming mobile coverage or an available auto at a remote point; arrange your return ahead instead.',
          'Leaving the last town bus to chance; confirm its timing before you rely on it.',
          'Attempting the viewpoint side on foot; the distances and gradients do not suit it.'
        ]
      }
    ],
    faq: [
      {
        q: 'How far is the lake from the bus stand?',
        a: 'Commonly published figures are around 1–1.5 km, but they are approximations. Confirm locally, and take a short ride if walking with luggage.'
      },
      {
        q: 'Can we reach the viewpoints without a car?',
        a: 'Not on foot. Hire an auto-rickshaw or taxi, agree the return fare in advance, and keep the driver’s number.'
      },
      {
        q: 'Are local rides available all day?',
        a: 'Availability varies, and it is thinnest at remote points late in the day. Arrange your return ahead rather than hoping for a passing vehicle.'
      },
      {
        q: 'What should we settle before leaving the lake for a viewpoint?',
        a: 'Agree the return fare and the pickup time with the same driver, and keep their number. If you plan to return by bus instead, confirm the last town bus timing before you go.'
      },
      {
        q: 'Which parts can we do entirely on foot?',
        a: 'The lake, its promenade, Anna Park beside it and Deer Park on the shore are walkable. The town centre for meals is a short ride or a walk; the viewpoints, Rose Garden and Silk Farm, and Kiliyur Falls need a hired ride.'
      }
    ],
    sourceIds: ['tnstc', 'districtLake', 'googleMaps', 'kaapiStopAdivaram', 'districtFestivalTransport']
  },
  ta: {
    title: 'சொந்த வாகனம் இல்லாமல் ஏற்காடு ஏரி: நடை மற்றும் குறுகிய உள்ளூர் வாகனங்கள்',
    description:
      'சொந்த வாகனம் இல்லாமல் ஏற்காடு ஏரியைச் சுற்றுதல்: நடைத் தூரங்கள், குறுகிய உள்ளூர் வாகனங்கள், தொலைவுக்குச் செல்வதற்கு முன் திரும்பும் வாகனத்தை உறுதி செய்யும் ஒரே விதி.',
    kicker: 'பயணத் திட்டங்கள்',
    h1: 'வாகனம் இல்லாமல் ஏரியில்: நடங்கள், பின் குறுகிய வாகனங்களை வாடகைக்கு எடுங்கள்',
    lead:
      'சொந்த வாகனம் இல்லாமலும் ஏரிப் பகுதி எளிய ஒரு நாள்; பல நிறுத்தங்கள் நடக்கக்கூடிய தூரத்தில் உள்ளன. எப்போது நடப்பது, எப்போது ஒரு குறுகிய வாகனத்திற்குப் பணம் செலுத்துவது என்பதைத் தேர்ந்தெடுப்பதே திறமை — மேலும் தொலைவுக்குச் செல்வதற்கு முன், உங்களைத் திரும்பக் கொண்டு வரும் வாகனம் இருக்கும் என்பதை உறுதி செய்வதே. இங்குள்ள தூரங்கள் பொதுவாக வெளியிடப்படும் மதிப்புகள்; உள்ளூரில் உறுதிப்படுத்த வேண்டும்.',
    facts: [
      { label: 'பொருத்தம்', value: 'பேருந்தில் அல்லது நடந்தே வரும் பயணிகள்' },
      { label: 'நேரம் (கணிப்பு)', value: 'ஏரியைச் சுற்றி நிதானமான ஒரு அரை நாள்' },
      { label: 'நடந்து செல்லலாம்', value: 'ஏரி, அண்ணா பூங்கா, மான் பூங்கா' },
      { label: 'விதி', value: 'தொலைவுக்குச் செல்வதற்கு முன் திரும்பும் வாகனத்தை உறுதி செய்யுங்கள்' }
    ],
    blocks: [
      { kind: 'h2', text: 'ஏரியை அடையுங்கள், பின் படகு கவுண்டரைப் பாருங்கள்' },
      {
        kind: 'p',
        text:
          'ஏரி நகரத்திற்கும் பேருந்து நிலையத்திற்கும் அருகில் உள்ளது — தூரம் பொதுவாக சுமார் 1–1.5 கிமீ எனக் குறிப்பிடப்படுகிறது; எனவே நடையை உறுதிப்படுத்துங்கள் அல்லது ஒரு குறுகிய உள்ளூர் வாகனத்தைப் பயன்படுத்துங்கள். உள்ளூர் போக்குவரத்தில் வந்தால் ஏரியை நல்ல நேரத்தில் அடையலாம்; அந்த முன்னதான வருகையைப் படகுக்குப் பயன்படுத்துங்கள்: காலையை அதற்கு ஒதுக்குவதற்கு முன் கவுண்டரில் தற்போதைய காத்திருப்பைக் கேளுங்கள்.'
      },
      { kind: 'h2', text: 'நடந்து செல்லக்கூடியவை, முடியாதவை' },
      {
        kind: 'list',
        items: [
          'நடை: ஏரி, அதன் நடைபாதை, அருகிலுள்ள அண்ணா பூங்கா, கரையில் உள்ள மான் பூங்கா.',
          'நடை + குறுகிய வாகனம்: உணவு மற்றும் கஃபேக்களுக்கு நகர மையம்.',
          'வாடகை வாகனம்: மலைக் காட்சி முனைகள், ரோஜா தோட்டம் மற்றும் பட்டுப் பண்ணை, கிளியூர் அருவி.',
          'காட்சி முனைப் பகுதியை நடந்து செல்ல முயற்சிக்க வேண்டாம்; தூரங்களும் சரிவுகளும் அதற்குப் பொருந்தாது.'
        ]
      },
      { kind: 'h2', text: 'வாகனம் இல்லாத நாளின் ஒவ்வொரு கட்டம்' },
      {
        kind: 'table',
        caption: 'வாகனம் இல்லாத கட்டங்கள் (ஒவ்வொன்றுக்கும் உண்மைச் சரிபார்ப்புடன்)',
        head: ['கட்டம்', 'செல்லும் முறை', 'உண்மைச் சரிபார்ப்பு'],
        rows: [
          ['பேருந்து நிலையம் / நகரத்திலிருந்து ஏரி', 'உள்ளூர் பேருந்து, ஆட்டோ அல்லது குறுகிய நடை', 'தூரம் பொதுவாக சுமார் 1–1.5 கிமீ எனக் குறிப்பிடப்படுகிறது; உறுதி செய்யுங்கள்'],
          ['ஏரியிலிருந்து அண்ணா பூங்கா அல்லது மான் பூங்கா', 'நடை', 'நடக்கக்கூடியது; நுழைவுகள் தனித்தனி'],
          ['ஏரியிலிருந்து ஒரு காட்சி முனை', 'வாடகை ஆட்டோ அல்லது டாக்சி', 'இறங்குமிடம் மட்டுமல்ல, திரும்பும் கட்டணமும் நேரமும் ஒப்புக்கொள்ளுங்கள்'],
          ['நாள் முடிவில் திரும்புதல்', 'முன்பே ஏற்பாடு செய்த வாகனம் அல்லது கடைசி நகரப் பேருந்து', 'தொலைவில் உள்ள இடத்தில் வாகனம் கிடைக்கும் என நம்ப வேண்டாம்']
        ]
      },
      { kind: 'h2', text: 'வாகனம் எளிதில் கிடைக்கும் இடத்தில் உண்ணுங்கள், ஓய்வெடுங்கள்' },
      {
        kind: 'note',
        text:
          'தொலைவில் உள்ள நிறுத்தத்தில் அல்ல, நகர மையத்தில் மதிய உணவை எடுத்துக்கொள்ளுங்கள்; அப்போது வாகனம் எளிதில் கிடைக்கும், உணவுக்குப் பின் சிக்கிக்கொள்ள மாட்டீர்கள்; நகரக் கஃபே நடைப் பகுதிகளுக்கு இடையே ஓய்வெடுக்க ஒரு சூடான இடத்தையும் தரும். வாகனம் இல்லாத நாளின் ஒரே விதி: தொலைவில் எங்கும் கிளம்புவதற்கு முன் திரும்பும் வழியை முடிவு செய்யுங்கள் — அதே ஓட்டுநரிடம் கட்டணத்தையும் ஏற்றும் நேரத்தையும் ஒப்புக்கொள்ளுங்கள், அல்லது கடைசி நகரப் பேருந்தை உறுதி செய்யுங்கள்; தொலைவில் உள்ள காட்சி முனையில் கைபேசி சிக்னலோ கிடைக்கும் ஆட்டோவோ இருக்கும் எனக் கருத வேண்டாம். மழை தொடங்கினால் முதலில் தொலைவுக் கட்டங்களைக் குறைத்து, நகரத்திற்கும் ஏரிக்கும் அருகில் இருங்கள்.'
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'பேருந்து நிலையம் அல்லது நகரத்திலிருந்து ஏரிக்கு நடக்கும் தூரம் உங்கள் திறனுக்குப் பொருந்துகிறதா — குறிப்பிடப்படும் தூரங்கள் தோராயமானவை; எனவே அங்கேயே சரிபார்த்து, தேவையெனில் ஒரு குறுகிய வாகனத்தைப் பயன்படுத்துங்கள்.',
          'ஒரு காட்சி முனைக்குச் செல்லும் வாடகை வாகனத்திற்கான திரும்பும் கட்டணமும் ஏற்றும் நேரமும் — கிளம்புவதற்கு முன் அதே ஓட்டுநரிடம் ஒப்புக்கொள்ளுங்கள்.',
          'பொதுப் போக்குவரத்தில் திரும்பத் திட்டமிட்டால், கடைசி நகரப் பேருந்தின் நேரம்.',
          'தொலைவுக் கட்டங்களின் நிலை — மழை தொடங்கினால், வாகனம் எளிதில் கிடைக்கும் ஏரி மற்றும் நகரத்திற்கே வரம்பிடுங்கள்.'
        ]
      },
      {
        kind: 'note',
        text:
          'இங்குள்ள அனைத்து நேரங்களும் கட்டங்களும் கணிப்புகளே; சரிபார்த்த நேரத்தில் எங்களுக்குத் தெரிந்தவரை அவை துல்லியமானவை. சேவைகள், காத்திருப்புகள், சாலை நிலைகள் மாறலாம்; எனவே அவற்றை நம்புவதற்கு முன் அன்று உள்ளூரில் விவரங்களை உறுதிப்படுத்துங்கள்.'
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'அதே ஓட்டுநரிடம் திரும்பும் கட்டணத்தையும் ஏற்றும் நேரத்தையும் முடிவு செய்யாமல் ஒரு காட்சி முனைக்குக் கிளம்புவது.',
          'தொலைவில் உள்ள இடத்தில் கைபேசி சிக்னலோ கிடைக்கும் ஆட்டோவோ இருக்கும் எனக் கருதுவது; அதற்குப் பதிலாகத் திரும்பும் வழியை முன்கூட்டியே ஏற்பாடு செய்யுங்கள்.',
          'கடைசி நகரப் பேருந்தைத் தற்செயலுக்கு விடுவது; அதை நம்புவதற்கு முன் நேரத்தை உறுதி செய்யுங்கள்.',
          'காட்சி முனைப் பகுதியை நடந்து செல்ல முயற்சிப்பது; தூரங்களும் சரிவுகளும் அதற்குப் பொருந்தாது.'
        ]
      }
    ],
    faq: [
      {
        q: 'பேருந்து நிலையத்திலிருந்து ஏரி எவ்வளவு தொலைவு?',
        a: 'பொதுவாக வெளியிடப்படும் மதிப்புகள் சுமார் 1–1.5 கிமீ; ஆனால் அவை தோராயங்கள். உள்ளூரில் உறுதி செய்யுங்கள்; சாமான்களுடன் நடப்பதெனில் ஒரு குறுகிய வாகனத்தைப் பயன்படுத்துங்கள்.'
      },
      {
        q: 'வாகனம் இல்லாமல் காட்சி முனைகளை அடைய முடியுமா?',
        a: 'நடந்து முடியாது. ஆட்டோ அல்லது டாக்சியை வாடகைக்கு எடுத்து, திரும்பும் கட்டணத்தை முன்கூட்டியே ஒப்புக்கொள்ளுங்கள்; ஓட்டுநரின் எண்ணை வைத்திருங்கள்.'
      },
      {
        q: 'உள்ளூர் வாகனங்கள் நாள் முழுவதும் கிடைக்குமா?',
        a: 'கிடைப்பது மாறுபடும்; தொலைவில் உள்ள இடங்களில் நாளின் இறுதியில் மிகக் குறைவு. வழியில் வரும் வாகனத்தை எதிர்பார்க்காமல், திரும்பும் வழியை முன்கூட்டியே ஏற்பாடு செய்யுங்கள்.'
      },
      {
        q: 'ஒரு காட்சி முனைக்கு ஏரியிலிருந்து கிளம்புவதற்கு முன் எதை முடிவு செய்ய வேண்டும்?',
        a: 'திரும்பும் கட்டணத்தையும் ஏற்றும் நேரத்தையும் அதே ஓட்டுநரிடம் ஒப்புக்கொண்டு, அவரின் எண்ணை வைத்திருங்கள். அதற்குப் பதிலாகப் பேருந்தில் திரும்பத் திட்டமிட்டால், கிளம்புவதற்கு முன் கடைசி நகரப் பேருந்தின் நேரத்தை உறுதி செய்யுங்கள்.'
      },
      {
        q: 'எந்தப் பகுதிகளை முழுவதுமாக நடந்தே செய்யலாம்?',
        a: 'ஏரி, அதன் நடைபாதை, அருகிலுள்ள அண்ணா பூங்கா, கரையில் உள்ள மான் பூங்கா ஆகியவை நடக்கக்கூடியவை. உணவுக்கான நகர மையம் ஒரு குறுகிய வாகனம் அல்லது நடை; காட்சி முனைகள், ரோஜா தோட்டம் மற்றும் பட்டுப் பண்ணை, கிளியூர் அருவி ஆகியவற்றுக்கு வாடகை வாகனம் தேவை.'
      }
    ],
    sourceIds: ['tnstc', 'districtLake', 'googleMaps', 'kaapiStopAdivaram', 'districtFestivalTransport']
  }
};

export default page;
