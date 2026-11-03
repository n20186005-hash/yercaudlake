import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'transport/ghat-road-driving',
  family: 'transport',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'From Yercaud Lake & Boat House, the ghat road is the climb you would drive to leave or return to the hills, reached by heading out of the lake area towards the descending hill road. Treat the distance to the ghat section as approximate and confirm the route locally on the day.',
    ta: 'ஏற்காடு ஏரி & படகு இல்லத்திலிருந்து, மலைச்சாலை என்பது மலையிலிருந்து வெளியேற அல்லது திரும்ப வர நீங்கள் ஓட்டும் ஏற்றம்; ஏரிப் பகுதியிலிருந்து கீழிறங்கும் மலைச்சாலையை நோக்கிச் சென்று அடையலாம். மலைச்சாலைப் பகுதிக்கான தொலைவைத் தோராயமாகக் கருதி, அன்று வழியை உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['transport/from-salem', 'transport/bus-vs-taxi', 'itineraries/rainy-day', 'nearby/ladys-seat'],
  en: {
    title: 'Driving the Yercaud ghat road: bends, weather and checklists',
    description:
      'The climb to Yercaud is a winding ghat road. Sources disagree on the hairpin-bend count, so plan for the conditions — gradient, rain, fog and night — not a number.',
    kicker: 'Getting there',
    h1: 'The ghat road up to Yercaud: how to drive the climb safely',
    lead:
      'The road to Yercaud is a climbing hill road, and that is what should shape your plan — not a published number of bends. Sources differ on how many hairpin bends the road has, so treat any count as illustrative and prepare for gradient, weather and light instead.',
    facts: [
      { label: 'Road', value: 'Winding ghat section, commonly published as SH188' },
      { label: 'Hairpin bends', value: 'Figures differ between sources — unverified' },
      { label: 'Worst conditions', value: 'Rain, fog, and driving after dark' },
      { label: 'Fixed drive time', value: 'Not publishable — depends on conditions' }
    ],
    blocks: [
      { kind: 'h2', text: 'Expect the bends, whatever the count' },
      {
        kind: 'p',
        text:
          'The road from Salem climbs through the Shevaroy Hills as a winding ghat section, commonly published as SH188. Published bend counts do not agree. The Tamil Nadu Tourism page for Pagoda Point describes a view towards the ghat road with 21 hairpin bends, while the district trekking page gives about 10 hairpin bends for a guided walking trail. Those describe different things, and no verified count for the whole road today was obtained here.'
      },
      {
        kind: 'note',
        text:
          'Do not plan a drive around a bend number. Gradient, how sharp the turns are, rain and fog decide the drive far more than a count. Treat any figure you read as an illustrative description, not a measurement.'
      },
      { kind: 'h2', text: 'A driving checklist for the climb' },
      {
        kind: 'list',
        items: [
          'Give way to vehicles coming downhill; their control on the climb is more limited.',
          'Slow down and sound the horn at sharp bends where you cannot see ahead.',
          'In rain and fog, cut speed, switch on lights and pull over to wait if visibility drops.',
          'Where you can, avoid climbing the ghat road after dark.',
          'Check brakes, tyres and lights before you start the climb.',
          'On the descent, use the gears; do not ride the brakes continuously and overheat them.',
          'Stay patient and do not follow the vehicle ahead too closely.'
        ]
      },
      { kind: 'h2', text: 'Weather changes the road' },
      {
        kind: 'p',
        text:
          'Rain and fog cut visibility, and a wet surface makes the bends slippery again. The weather forecast on this site is generated from fixed lake coordinates; it does not establish road conditions. Check the local weather and the road situation separately before you set out.'
      },
      {
        kind: 'table',
        caption: 'Hairpin-bend figures as published, by source',
        head: ['Source', 'Figure', 'What it refers to'],
        rows: [
          ['Tamil Nadu Tourism, Pagoda Point', '21 hairpin bends', 'A view towards the ghat road'],
          ['District trekking page', 'About 10 hairpin bends', 'A guided walking trail, not the road'],
          ['District lake page', 'Not given as a figure', 'Uses general wording only']
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'The road and traffic situation for the climb, checked separately from a weather forecast.',
          'Local weather and visibility, since rain and fog change the drive.',
          'Whether you can complete the climb in daylight rather than after dark.',
          'Your vehicle’s brakes, tyres and lights before you start.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Planning the drive around a hairpin-bend number, which sources give differently.',
          'Treating a weather forecast from fixed lake coordinates as proof of road conditions.',
          'Riding the brakes continuously on the descent instead of using the gears.',
          'Setting out to climb the ghat road after dark where it can be avoided.'
        ]
      }
    ],
    faq: [
      {
        q: 'How many hairpin bends does the Yercaud road have?',
        a: 'Sources do not agree. The tourism page for Pagoda Point describes 21 hairpin bends in a view towards the ghat road, while the district trekking page gives about 10 for a guided walking trail. Neither is a verified count for the whole road today, so plan for the bend conditions rather than a number.'
      },
      {
        q: 'Is it safe to drive at night?',
        a: 'No source obtained here recommends the climb after dark. Rain and fog cut visibility, and the road is unlit in places. Where you can, drive the ghat road in daylight and treat a night drive as something to avoid.'
      },
      {
        q: 'What should I check before setting off?',
        a: 'Brakes, tyres and lights, fuel or charge, and the day’s weather. A forecast on this site is generated from fixed lake coordinates and does not prove road conditions, so also check locally before climbing.'
      },
      {
        q: 'Should I rely on the weather forecast to judge the road?',
        a: 'No. The forecast on this site is generated from fixed lake coordinates and does not establish road conditions. Check the local weather and the road situation separately before you set out.'
      },
      {
        q: 'What is the safest time to drive the climb?',
        a: 'No source obtained here recommends the climb after dark, and rain and fog cut visibility. Where you can, drive the ghat road in daylight rather than at night. Confirm conditions locally on the day.'
      }
    ],
    sourceIds: ['tnTourismPagoda', 'districtTrekking', 'districtLake', 'openMeteo']
  },
  ta: {
    title: 'ஏற்காடு மலைச்சாலை ஓட்டுதல்: வளைவுகள், வானிலை, சரிபார்ப்புப் பட்டியல்',
    description:
      'ஏற்காட்டுக்கு ஏறும் சாலை சுற்றிச் சுற்றும் மலைச்சாலை. முடிச்சு வளைவுகளின் எண்ணிக்கையில் மூலங்கள் ஒத்துப்போகவில்லை; எனவே ஒரு எண்ணை அல்ல, சரிவு, மழை, மூடுபனி, இரவு ஆகிய சூழல்களை மனதில் வையுங்கள்.',
    kicker: 'போக்குவரத்து',
    h1: 'ஏற்காடு வரை மலைச்சாலை: ஏற்றத்தைப் பாதுகாப்பாக ஓட்டுவது எப்படி',
    lead:
      'ஏற்காட்டுக்குச் செல்லும் சாலை ஒரு ஏறும் மலைச்சாலை; அதுவே உங்கள் திட்டத்தை வடிவமைக்க வேண்டும் — வெளியிடப்பட்ட வளைவு எண்ணிக்கை அல்ல. சாலையில் எத்தனை முடிச்சு வளைவுகள் உள்ளன என்பதில் மூலங்கள் வேறுபடுகின்றன; எனவே எந்த எண்ணையும் ஒரு விளக்கமான தகவலாகக் கருதி, சரிவு, வானிலை, வெளிச்சத்திற்குத் தயாராகுங்கள்.',
    facts: [
      { label: 'சாலை', value: 'சுற்றிச் சுற்றும் மலைச்சாலைப் பகுதி, பொதுவாக SH188' },
      { label: 'முடிச்சு வளைவுகள்', value: 'மூலங்களுக்கு இடையே எண் மாறுபடும் — உறுதி அல்ல' },
      { label: 'மோசமான சூழல்', value: 'மழை, மூடுபனி, இருளில் ஓட்டுதல்' },
      { label: 'நிலையான பயணநேரம்', value: 'வெளியிட முடியாது — சூழலைப் பொறுத்தது' }
    ],
    blocks: [
      { kind: 'h2', text: 'எண் எதுவாக இருந்தாலும் வளைவுகளை எதிர்பாருங்கள்' },
      {
        kind: 'p',
        text:
          'சேலத்திலிருந்து வரும் சாலை, சேர்வராயன் மலைப்பகுதியில் சுற்றிச் சுற்றி ஏறும் மலைச்சாலைப் பகுதியாக உள்ளது — பொதுவாக SH188 எனக் குறிப்பிடப்படுகிறது. வெளியிடப்பட்ட வளைவு எண்ணிக்கைகள் ஒத்துப்போகவில்லை. தமிழ்நாடு சுற்றுலாத் தளத்தின் பகோடா பாயிண்ட் பக்கம், மலைச்சாலையை நோக்கிய ஒரு காட்சியில் 21 முடிச்சு வளைவுகள் இருப்பதாகக் குறிப்பிடுகிறது; மாவட்டப் பாதயாத்திரைப் பக்கம் ஒரு வழிகாட்டப்பட்ட நடைப்பாதைக்கு சுமார் 10 முடிச்சு வளைவுகள் எனக் கூறுகிறது. இவை வெவ்வேறு விஷயங்களைக் குறிக்கின்றன; இன்றைய முழுச் சாலைக்கான உறுதியான எண் இங்கு கிடைக்கவில்லை.'
      },
      {
        kind: 'note',
        text:
          'ஒரு வளைவு எண்ணை வைத்து ஓட்டத்தைத் திட்டமிட வேண்டாம். சரிவு, வளைவுகளின் கூர்மை, மழை, மூடுபனி ஆகியவையே ஓட்டுதலை ஒரு எண்ணை விட மிக அதிகமாகத் தீர்மானிக்கின்றன. நீங்கள் படிக்கும் எந்த எண்ணையும் ஒரு விளக்கமான விவரிப்பாகவே கருதுங்கள், ஒரு அளவீடாக அல்ல.'
      },
      { kind: 'h2', text: 'ஏற்றத்திற்கான ஓட்டுதல் சரிபார்ப்புப் பட்டியல்' },
      {
        kind: 'list',
        items: [
          'கீழ்நோக்கி வரும் வாகனங்களுக்கு வழி விடுங்கள்; ஏற்றத்தில் அவற்றின் கட்டுப்பாடு மிகக் குறைவாக இருக்கும்.',
          'முன்னால் தெரியாத கூர்மையான வளைவுகளில் வேகத்தைக் குறைத்து ஒலி எழுப்புங்கள்.',
          'மழையிலும் மூடுபனியிலும் வேகத்தைக் குறைத்து, விளக்குகளை இயக்கி, பார்வை குறைந்தால் ஓரமாக நிறுத்திக் காத்திருங்கள்.',
          'முடிந்தவரை இருளில் மலைச்சாலையை ஏறுவதைத் தவிர்க்கவும்.',
          'ஏறத் தொடங்கும் முன் பிரேக், டயர் மற்றும் விளக்குகளைச் சரிபாருங்கள்.',
          'கீழிறங்கும்போது கியர்களைப் பயன்படுத்துங்கள்; தொடர்ந்து பிரேக்கை அழுத்தி வெப்பப்படுத்த வேண்டாம்.',
          'பொறுமையாக இருங்கள்; முன்னால் உள்ள வாகனத்தை மிக நெருக்கமாகப் பின்தொடர வேண்டாம்.'
        ]
      },
      { kind: 'h2', text: 'வானிலை சாலையை மாற்றுகிறது' },
      {
        kind: 'p',
        text:
          'மழையும் மூடுபனியும் பார்வையைக் குறைக்கின்றன; ஈரமான தளத்தில் வளைவுகள் மீண்டும் வழுக்கலாகின்றன. இந்தத் தளத்தின் வானிலை முன்னறிவிப்பு ஏரியின் நிலையான ஆயங்களிலிருந்து உருவாக்கப்படுகிறது; அது சாலை நிலையை உறுதிப்படுத்தாது. புறப்படும் முன் உள்ளூர் வானிலையையும் சாலை நிலையையும் தனித்தனியாகச் சரிபாருங்கள்.'
      },
      {
        kind: 'table',
        caption: 'முடிச்சு வளைவு எண்கள் — மூலம் வாரியாக, வெளியிடப்பட்டபடி',
        head: ['மூலம்', 'எண்', 'எதைக் குறிக்கிறது'],
        rows: [
          ['தமிழ்நாடு சுற்றுலா, பகோடா பாயிண்ட்', '21 முடிச்சு வளைவுகள்', 'மலைச்சாலையை நோக்கிய ஒரு காட்சி'],
          ['மாவட்டப் பாதயாத்திரைப் பக்கம்', 'சுமார் 10 முடிச்சு வளைவுகள்', 'ஒரு வழிகாட்டப்பட்ட நடைப்பாதை, சாலை அல்ல'],
          ['மாவட்ட ஏரிப் பக்கம்', 'எண்ணாகத் தரப்படவில்லை', 'பொதுச் சொற்களில் மட்டும்']
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'ஏற்றத்திற்கான சாலை மற்றும் போக்குவரத்து நிலை — வானிலை முன்னறிவிப்பிலிருந்து தனித்தனியாகச் சரிபார்க்கவும்.',
          'உள்ளூர் வானிலையும் பார்வைத் தெளிவும், ஏனெனில் மழையும் மூடுபனியும் ஓட்டுதலை மாற்றும்.',
          'இரவுக்குப் பதிலாக பகல் வெளிச்சத்தில் ஏற்றத்தை முடிக்க முடியுமா.',
          'தொடங்கும் முன் வாகனத்தின் பிரேக், டயர், விளக்குகள்.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'மூலங்கள் வெவ்வேறு எண் தரும் முடிச்சு வளைவு எண்ணிக்கையை வைத்து ஓட்டத்தைத் திட்டமிடுவது.',
          'ஏரியின் நிலையான ஆயங்களிலிருந்து உருவாகும் வானிலை முன்னறிவிப்பைச் சாலை நிலைக்கான ஆதாரமாகக் கருதுவது.',
          'கீழிறங்கும்போது கியர்களுக்குப் பதிலாக பிரேக்கைத் தொடர்ந்து அழுத்துவது.',
          'முடிந்தவரை தவிர்க்கக்கூடிய நிலையில் இருளில் மலைச்சாலையை ஏறப் புறப்படுவது.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஏற்காடு சாலையில் எத்தனை முடிச்சு வளைவுகள் உள்ளன?',
        a: 'மூலங்கள் ஒத்துப்போகவில்லை. பகோடா பாயிண்ட் பக்கம் மலைச்சாலையை நோக்கிய காட்சியில் 21 வளைவுகள் எனக் குறிப்பிடுகிறது; மாவட்டப் பாதயாத்திரைப் பக்கம் ஒரு நடைப்பாதைக்கு சுமார் 10 எனக் கூறுகிறது. இன்றைய முழுச் சாலைக்கான உறுதியான எண் இதுவல்ல; எனவே ஒரு எண்ணை அல்ல, வளைவுச் சூழல்களை மனதில் வைத்துத் திட்டமிடுங்கள்.'
      },
      {
        q: 'இரவில் ஓட்டுவது பாதுகாப்பானதா?',
        a: 'இருளில் ஏறுவதைப் பரிந்துரைக்கும் எந்த மூலமும் இங்கு கிடைக்கவில்லை. மழையும் மூடுபனியும் பார்வையைக் குறைக்கின்றன; சில இடங்களில் சாலை விளக்கு இல்லை. முடிந்தவரை பகல் வெளிச்சத்தில் மலைச்சாலையை ஓட்டுங்கள்; இரவு ஓட்டுதலைத் தவிர்க்க வேண்டிய ஒன்றாகக் கருதுங்கள்.'
      },
      {
        q: 'புறப்படும் முன் என்ன சரிபார்க்க வேண்டும்?',
        a: 'பிரேக், டயர், விளக்குகள், எரிபொருள் அல்லது சார்ஜ், அன்றைய வானிலை. இந்தத் தளத்தின் முன்னறிவிப்பு ஏரியின் நிலையான ஆயங்களிலிருந்து உருவாகிறது; அது சாலை நிலையை நிரூபிக்காது. எனவே ஏறும் முன் உள்ளூரிலும் சரிபாருங்கள்.'
      },
      {
        q: 'சாலை நிலையை மதிப்பிட வானிலை முன்னறிவிப்பையே நம்பலாமா?',
        a: 'இல்லை. இந்தத் தளத்தின் முன்னறிவிப்பு ஏரியின் நிலையான ஆயங்களிலிருந்து உருவாகிறது; அது சாலை நிலையை உறுதிப்படுத்தாது. புறப்படும் முன் உள்ளூர் வானிலையையும் சாலை நிலையையும் தனித்தனியாகச் சரிபாருங்கள்.'
      },
      {
        q: 'ஏற்றத்தை ஓட்டுவதற்கு மிகப் பாதுகாப்பான நேரம் எது?',
        a: 'இருளில் ஏறுவதைப் பரிந்துரைக்கும் எந்த மூலமும் இங்கு கிடைக்கவில்லை; மழையும் மூடுபனியும் பார்வையைக் குறைக்கின்றன. முடிந்தவரை இரவுக்குப் பதிலாக பகல் வெளிச்சத்தில் மலைச்சாலையை ஓட்டுங்கள். அன்று சூழலை உள்ளூரில் உறுதி செய்யுங்கள்.'
      }
    ],
    sourceIds: ['tnTourismPagoda', 'districtTrekking', 'districtLake', 'openMeteo']
  }
};

export default page;
