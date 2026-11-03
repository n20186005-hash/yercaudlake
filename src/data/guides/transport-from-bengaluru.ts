import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'transport/from-bengaluru',
  family: 'transport',
  priority: 'P2',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'On this page the lake is your starting point on the way home to Bengaluru: leave the lake area first, then descend the ghat road and head out through Salem. The drive is long and any distance is approximate, so confirm the route and timings on the day.',
    ta: 'இந்தப் பக்கத்தில், பெங்களூருக்குத் திரும்பும் வழியில் ஏரியே உங்கள் தொடக்கப் புள்ளி: முதலில் ஏரிப் பகுதியிலிருந்து புறப்பட்டு, மலைச்சாலையில் இறங்கி சேலம் வழியாக வெளியேறுங்கள். பயணம் நீளமானது, எந்தத் தொலைவும் தோராயமானது; எனவே வழியையும் நேரங்களையும் அன்று உறுதி செய்யுங்கள்.'
  },
  related: ['transport/from-salem', 'transport/ghat-road-driving', 'itineraries/two-days-from-lake', 'visit/best-time'],
  en: {
    title: 'Bengaluru to Yercaud Lake: a weekend with the lake first',
    description:
      'Coming from Bengaluru for a weekend, the lake works best as your first stop. Distance figures vary, so plan arrival and the return rather than a fixed schedule.',
    kicker: 'Getting there',
    h1: 'Bengaluru to the lake: make the water your first stop',
    lead:
      'On a weekend trip from Bengaluru, trying to collect every sight on the way leaves too little for the lake. Putting the lake and boat house first is the practical order. This page is about that order, the range of distance figures in circulation, and how to manage the drive home.',
    facts: [
      { label: 'Road distance (published)', value: 'About 215–230 km, route-dependent' },
      { label: 'Air distance (official)', value: 'Bengaluru airport 250 km (district page)' },
      { label: 'First stop', value: 'The lake and boat house' },
      { label: 'Trains and fares', value: 'Not given — verify before you travel' }
    ],
    blocks: [
      { kind: 'h2', text: 'Why the lake goes first' },
      {
        kind: 'p',
        text:
          'Arriving from Bengaluru, most of the day is already spent on the road. If the lake is saved for the end, it tends to get whatever time is left. Basing the plan on the lake and boat house first — while the day is cooler and queues are shorter — leaves the parks and viewpoints to fit in afterwards. This is a plan order, not a guarantee of any service.'
      },
      { kind: 'h2', text: 'The distance depends on the route' },
      {
        kind: 'p',
        text:
          'Published road distances from Bengaluru to Yercaud cluster around 215–230 km, and they vary with the route you take. The only official figure obtained is different in kind: the district gives 250 km to Bengaluru airport. That is an air distance to the airport, not a road route to the lake, so the two figures should not be mixed.'
      },
      {
        kind: 'table',
        caption: 'Bengaluru to Yercaud: two published ways of measuring it',
        head: ['Measure', 'Figure', 'What it means'],
        rows: [
          ['Road distance (published range)', 'About 215–230 km', 'Varies with the route you take'],
          ['Air distance (official)', '250 km to Bengaluru airport', 'The district’s figure; not a road route']
        ]
      },
      { kind: 'h2', text: 'On arrival, and the trip home' },
      {
        kind: 'steps',
        items: [
          'Reach the lake area first and settle parking or your drop-off before anything else.',
          'Do the boat house while the queue is shortest, then the lakeside walk.',
          'Set a firm departure time for the drive home before you start sightseeing.',
          'Aim to leave the hills well before dark, because the ghat road is hardest after nightfall.',
          'Leave buffer for the climb down and for traffic on the way out of Salem.'
        ]
      },
      {
        kind: 'note',
        text:
          'This page gives no train numbers, fares or departure times; they change and cannot be promised here. Check the live services before you travel, and treat the road distance as a range rather than a single number.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Your departure time from the lake, set before you start sightseeing.',
          'The route and its distance, which varies and is published only as a range.',
          'The state of the ghat road for the descent, checked separately from a forecast.',
          'The traffic situation on the way out through Salem.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Treating the district’s 250 km airport figure as a road distance to the lake.',
          'Planning a single-day return, which leaves very little time at the lake.',
          'Starting sightseeing before fixing a firm time to leave for home.',
          'Aiming to descend the ghat road after dark instead of leaving the hills earlier.'
        ]
      }
    ],
    faq: [
      {
        q: 'How far is Bengaluru from Yercaud Lake?',
        a: 'Published road distances cluster around 215–230 km and vary with the route, while the district gives 250 km only as the distance to Bengaluru airport. Neither is a door-to-door figure for the lake, so plan on a range rather than one number.'
      },
      {
        q: 'Can I do it as a day trip?',
        a: 'A one-day return leaves very little time at the lake and means driving the ghat road in both directions. If you can, stay a night so the lake is your first stop rather than a rushed break in a long drive.'
      },
      {
        q: 'What should I do first on arrival?',
        a: 'Go to the lake and boat house first, while the day is cooler and queues are shorter, and keep the parks and viewpoints for afterwards. Set your return time before you start.'
      },
      {
        q: 'Does the 250 km official figure mean the road to the lake is 250 km?',
        a: 'No. The district’s 250 km is the air distance to Bengaluru airport, not a road route to the lake. Published road distances cluster around 215–230 km and vary with the route, so plan on a range rather than either figure.'
      },
      {
        q: 'What is the best order once I arrive from Bengaluru?',
        a: 'Go to the lake and boat house first, while the day is cooler and queues are shorter, then keep the parks and viewpoints for afterwards. Set a firm return time before you start sightseeing. This is a plan order, not a guarantee of any service.'
      }
    ],
    sourceIds: ['districtLake', 'openMeteo', 'googleMaps', 'wikipediaYercaud']
  },
  ta: {
    title: 'பெங்களூரு முதல் ஏற்காடு ஏரி வரை: ஏரியை முதலில் வைத்த ஒரு வார இறுதி',
    description:
      'பெங்களூருவிலிருந்து ஒரு வார இறுதிக்கு வரும்போது, ஏரியை முதல் நிறுத்தமாக வைப்பது நடைமுறை. தொலைவு எண்கள் மாறுபடும்; எனவே நிலையான அட்டவணையை விட வருகை மற்றும் திரும்பும் பயணத்தைத் திட்டமிடுங்கள்.',
    kicker: 'போக்குவரத்து',
    h1: 'பெங்களூருவிலிருந்து ஏரி வரை: நீரை முதல் நிறுத்தமாக ஆக்குங்கள்',
    lead:
      'பெங்களூருவிலிருந்து ஒரு வார இறுதிப் பயணமாக வரும்போது, வழியில் எல்லா இடங்களையும் சேர்க்க முயன்றால் ஏரிக்கு மிகக் குறைவே மிஞ்சும். ஏரியையும் படகு இல்லத்தையும் முதல் நிறுத்தமாக வைப்பதே நடைமுறையான வரிசை. இந்தப் பக்கம் அந்த வரிசை, புழக்கத்தில் உள்ள தொலைவு எண்களின் வரம்பு, மற்றும் திரும்பும் பயணத்தை எப்படி நிர்வகிப்பது என்பதைப் பற்றியது.',
    facts: [
      { label: 'சாலைத் தொலைவு (வெளியிடப்பட்டது)', value: 'சுமார் 215–230 கிமீ, வழியைப் பொறுத்து' },
      { label: 'வான்வழித் தொலைவு (அதிகாரப்பூர்வம்)', value: 'பெங்களூரு விமான நிலையம் 250 கிமீ (மாவட்டப் பக்கம்)' },
      { label: 'முதல் நிறுத்தம்', value: 'ஏரி மற்றும் படகு இல்லம்' },
      { label: 'ரயில்களும் கட்டணமும்', value: 'தரப்படவில்லை — பயணத்திற்கு முன் சரிபார்க்கவும்' }
    ],
    blocks: [
      { kind: 'h2', text: 'ஏரியே ஏன் முதலில்' },
      {
        kind: 'p',
        text:
          'பெங்களூருவிலிருந்து வந்து சேரும் போது, நாளின் பெரும் பகுதி ஏற்கனவே சாலையில் கழிந்திருக்கும். ஏரியை இறுதிக்கு வைத்தால், மிஞ்சும் நேரமே அதற்குக் கிடைக்கும். நாள் இன்னும் குளிர்ச்சியாகவும் வரிசை குறுகியதாகவும் இருக்கும் போதே ஏரியையும் படகு இல்லத்தையும் முதல் நிறுத்தமாக வைத்துத் திட்டமிட்டால், பூங்காக்களையும் காட்சி முனைகளையும் அதன் பின் சேர்த்துக் கொள்ளலாம். இது ஒரு திட்ட வரிசை; எந்தச் சேவைக்கும் உறுதி அல்ல.'
      },
      { kind: 'h2', text: 'தொலைவு வழியைப் பொறுத்தது' },
      {
        kind: 'p',
        text:
          'பெங்களூருவிலிருந்து ஏற்காட்டுக்கான வெளியிடப்பட்ட சாலைத் தொலைவுகள் சுமார் 215–230 கிமீ அளவில் குவிகின்றன; நீங்கள் தேர்ந்தெடுக்கும் வழியைப் பொறுத்து மாறும். கிடைத்த ஒரே அதிகாரப்பூர்வ எண் வேறுவகையானது: மாவட்டம் பெங்களூரு விமான நிலையத்திற்கு 250 கிமீ எனத் தருகிறது. அது விமான நிலையத்திற்கான வான்வழித் தொலைவு, ஏரிக்கான சாலை வழி அல்ல; எனவே இரண்டு எண்களையும் கலக்கக் கூடாது.'
      },
      {
        kind: 'table',
        caption: 'பெங்களூரு–ஏற்காடு: வெளியிடப்பட்ட இரண்டு அளவுகள்',
        head: ['அளவு', 'எண்', 'எதைக் குறிக்கிறது'],
        rows: [
          ['சாலைத் தொலைவு (வெளியிடப்பட்ட வரம்பு)', 'சுமார் 215–230 கிமீ', 'நீங்கள் தேர்ந்தெடுக்கும் வழியைப் பொறுத்து மாறும்'],
          ['வான்வழித் தொலைவு (அதிகாரப்பூர்வம்)', 'பெங்களூரு விமான நிலையம் 250 கிமீ', 'மாவட்டத்தின் எண்; சாலை வழி அல்ல']
        ]
      },
      { kind: 'h2', text: 'வந்ததும், திரும்பும் பயணமும்' },
      {
        kind: 'steps',
        items: [
          'முதலில் ஏரிப் பகுதிக்குச் சென்று, எதற்கும் முன் பார்க்கிங் அல்லது இறங்கும் இடத்தை ஏற்படுத்திக் கொள்ளுங்கள்.',
          'வரிசை மிகக் குறுகியதாக இருக்கும்போதே படகு இல்லத்தை முடியுங்கள்; பின்னர் ஏரிக்கரை நடை.',
          'பார்வையிடத் தொடங்கும் முன், திரும்பிச் செல்வதற்கான ஒரு உறுதியான நேரத்தை முடிவு செய்யுங்கள்.',
          'இருள் வருவதற்கு நன்கு முன்பே மலையிலிருந்து புறப்பட முயலுங்கள்; மலைச்சாலை இரவில் மிகக் கடினம்.',
          'கீழிறங்கும் ஏற்றத்திற்கும், சேலம் வழியாக வெளியேறும் போக்குவரத்திற்கும் கூடுதல் நேரம் வையுங்கள்.'
        ]
      },
      {
        kind: 'note',
        text:
          'இந்தப் பக்கம் ரயில் எண்களையோ கட்டணத்தையோ புறப்பு நேரங்களையோ தரவில்லை; அவை மாறக்கூடியவை, இங்கு உறுதி அளிக்க முடியாது. பயணத்திற்கு முன் தற்போதைய சேவைகளைச் சரிபாருங்கள்; சாலைத் தொலைவையும் ஒரு வரம்பாகவே கருதுங்கள், ஒரே எண்ணாக அல்ல.'
      },
      { kind: 'h2', text: 'அன்று உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'பார்வையிடத் தொடங்கும் முன் முடிவு செய்யப்பட்ட, ஏரியிலிருந்து உங்கள் புறப்பு நேரம்.',
          'வழியும் அதன் தொலைவும் — அது மாறுபடும்; வரம்பாக மட்டுமே வெளியிடப்பட்டுள்ளது.',
          'கீழிறங்குவதற்கான மலைச்சாலையின் நிலை — முன்னறிவிப்பிலிருந்து தனித்தனியாகச் சரிபார்க்கவும்.',
          'சேலம் வழியாக வெளியேறும் போக்குவரத்து நிலை.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'மாவட்டம் தரும் 250 கிமீ விமான நிலைய எண்ணை ஏரிக்கான சாலைத் தொலைவாகக் கருதுவது.',
          'ஒரே நாளில் சென்று திரும்பத் திட்டமிடுவது — அது ஏரியில் மிகக் குறைந்த நேரத்தையே விட்டுச் செல்லும்.',
          'வீட்டிற்குப் புறப்பட ஒரு உறுதியான நேரத்தை முடிவு செய்யும் முன் பார்வையிடத் தொடங்குவது.',
          'மலையிலிருந்து முன்னதாகப் புறப்படாமல் இருளில் மலைச்சாலையில் இறங்க முயல்வது.'
        ]
      }
    ],
    faq: [
      {
        q: 'பெங்களூருவிலிருந்து ஏற்காடு ஏரி எவ்வளவு தொலைவு?',
        a: 'வெளியிடப்பட்ட சாலைத் தொலைவுகள் சுமார் 215–230 கிமீ அளவில் குவிகின்றன; வழியைப் பொறுத்து மாறும். மாவட்டம் தரும் 250 கிமீ என்பது பெங்களூரு விமான நிலையத்திற்கான தொலைவு மட்டுமே. இரண்டும் ஏரி வரையிலான நேரடி அளவு அல்ல; ஒரே எண்ணை விட ஒரு வரம்பையே நம்புங்கள்.'
      },
      {
        q: 'ஒரே நாளில் சென்று திரும்ப முடியுமா?',
        a: 'ஒரே நாள் சென்று திரும்பினால் ஏரியில் மிகக் குறைந்த நேரமே கிடைக்கும்; மேலும் இரு வழியும் மலைச்சாலையை ஓட்ட வேண்டியிருக்கும். முடிந்தால் ஒரு இரவு தங்குங்கள்; அப்போது ஏரி ஒரு நீண்ட பயணத்தில் அவசர இடைவேளையாக அல்ல, முதல் நிறுத்தமாக இருக்கும்.'
      },
      {
        q: 'வந்ததும் முதலில் என்ன செய்ய வேண்டும்?',
        a: 'முதலில் ஏரியையும் படகு இல்லத்தையும் செல்லுங்கள்; நாள் குளிர்ச்சியாகவும் வரிசை குறுகியதாகவும் இருக்கும். பூங்காக்களையும் காட்சி முனைகளையும் அதன் பிறகு வையுங்கள். புறப்படும் முன் திரும்பும் நேரத்தை முடிவு செய்யுங்கள்.'
      },
      {
        q: '250 கிமீ அதிகாரப்பூர்வ எண் என்பது ஏரிக்கான சாலை 250 கிமீ என்பதா?',
        a: 'இல்லை. மாவட்டத்தின் 250 கிமீ என்பது பெங்களூரு விமான நிலையத்திற்கான வான்வழித் தொலைவு, ஏரிக்கான சாலை வழி அல்ல. வெளியிடப்பட்ட சாலைத் தொலைவுகள் சுமார் 215–230 கிமீ அளவில் குவிந்து வழியைப் பொறுத்து மாறும்; எனவே எந்த எண்ணையும் விட ஒரு வரம்பையே நம்புங்கள்.'
      },
      {
        q: 'பெங்களூருவிலிருந்து வந்ததும் சிறந்த வரிசை என்ன?',
        a: 'நாள் இன்னும் குளிர்ச்சியாகவும் வரிசை குறுகியதாகவும் இருக்கும்போதே முதலில் ஏரியையும் படகு இல்லத்தையும் செல்லுங்கள்; பூங்காக்களையும் காட்சி முனைகளையும் அதன் பிறகு வையுங்கள். பார்வையிடத் தொடங்கும் முன் திரும்பும் நேரத்தை உறுதியாக முடிவு செய்யுங்கள். இது ஒரு திட்ட வரிசை; எந்தச் சேவைக்கும் உறுதி அல்ல.'
      }
    ],
    sourceIds: ['districtLake', 'openMeteo', 'googleMaps', 'wikipediaYercaud']
  }
};

export default page;
