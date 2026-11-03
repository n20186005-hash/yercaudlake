import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'transport/from-salem',
  family: 'transport',
  priority: 'P0',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'Treat Yercaud Lake & Boat House as the base at the top of the climb: from Salem, the trip ends at the Yercaud bus stand, and the last short stretch from there to the lake and boat house is walked or taken in a local vehicle. All distances and journey times are approximate and must be confirmed on the day.',
    ta: 'ஏற்காடு ஏரி மற்றும் படகு இல்லத்தையே ஏற்றத்தின் மேல் உள்ள தளமாகக் கருதுங்கள்: சேலத்திலிருந்து பயணம் ஏற்காடு பேருந்து நிலையத்தில் முடிகிறது; அங்கிருந்து ஏரி மற்றும் படகு இல்லம் வரையிலான குறுகிய இறுதிப் பகுதியை நடந்தோ உள்ளூர் வாகனத்திலோ கடக்க வேண்டும். அனைத்துத் தொலைவுகளும் பயணநேரங்களும் தோராயமானவை; அன்று உறுதி செய்ய வேண்டும்.'
  },
  related: ['transport/from-salem-junction', 'transport/from-yercaud-bus-stand', 'itineraries/one-day-from-lake', 'boating/timings'],
  en: {
    title: 'Salem to Yercaud Lake: driving and bus routes, step by step',
    description:
      'How to plan the Salem side of a Yercaud Lake trip — start points, the Adivaram ghat climb, the bus stand at the top, and checking the day’s services.',
    kicker: 'Getting there',
    h1: 'From Salem to the lake: start points, the ghat climb and the last stop',
    lead:
      'Salem is the usual gateway to Yercaud Lake, but the trip has three separate parts: a start point in Salem, the winding climb up the ghat road, and the short finish from the bus stand at the top to the water. Sorting those three parts out in advance is what makes the journey predictable.',
    facts: [
      { label: 'Railway approach', value: 'Salem Junction, about 35 km (district page)' },
      { label: 'Transfer point on the climb', value: 'Adivaram, at the foot of the ghat road' },
      { label: 'Services', value: 'Regular Salem–Yercaud buses (district page)' },
      { label: 'Timetable', value: 'Not fixed here — check on the day' }
    ],
    blocks: [
      { kind: 'h2', text: 'The two starting points in Salem' },
      {
        kind: 'p',
        text:
          'Travellers begin from one of two places in Salem. Yercaud services leave from the new bus stand; Salem Junction, the railway station, is where most train travellers arrive. The district lists Salem Junction as the rail approach to Yercaud at about 35 km, and describes regular bus services running between Salem and Yercaud. Neither the bus stand nor the station puts you at the lake — both are the first step, not the last.'
      },
      { kind: 'h2', text: 'The climb, and the Adivaram transfer' },
      {
        kind: 'p',
        text:
          'Between Salem and the hill town the road climbs a winding ghat section up the Shevaroy Hills — commonly published as SH188. Adivaram, at the foot of the ghat road, is the point most people mention in passing: it is where the climb begins, and where a service may already be filling up. No travel time can be promised here, because the climb depends on traffic, weather and how many stops the bus makes.'
      },
      {
        kind: 'table',
        caption: 'The main points on the Salem side, with published distances',
        head: ['Point', 'Published distance to Yercaud', 'What usually happens next'],
        rows: [
          ['Salem new bus stand', 'About 30–35 km (published range)', 'Board a Yercaud service; confirm the day’s departures'],
          ['Salem Junction (railway)', 'About 35 km (district page)', 'Reach the bus stand or arrange a vehicle first'],
          ['Adivaram (foot of the ghat)', 'On the climb, below the town', 'A brief pause; seats may be taken before you board']
        ]
      },
      { kind: 'h2', text: 'An ordered way to do it' },
      {
        kind: 'steps',
        items: [
          'Decide your start point: the bus stand if you came by bus, the railway station if you came by train.',
          'Get to the place where the Yercaud service actually leaves — do not assume a bus waits at the station entrance.',
          'Ride up the ghat road and get off at the Yercaud bus stand at the top.',
          'Cover the short last stretch from the bus stand to the lake on foot or in a local vehicle.',
          'Confirm your return time before you leave the bus stand, so the trip back is not a guess.'
        ]
      },
      {
        kind: 'note',
        text:
          'About the day’s services: this page publishes no timetable, because operators change departures with the season. The district’s festival page, for example, describes extra buses from the Salem new bus stand only during the May Summer Festival, running 05:00–22:00 for that period and bookable through the TNSTC online reservation system. That is a festival arrangement, not a year-round service. On an ordinary day, check the current departure time and boarding point with the operator or at the bus stand before you travel.'
      },
      {
        kind: 'list',
        items: [
          'The current departure time and boarding point for the Yercaud service.',
          'Whether extra festival buses are running, and only for the May Summer Festival period.',
          'The bus stand from which the service actually leaves.',
          'Your return trip, before you leave the bus stand at the top.',
          'The short stretch from the Yercaud bus stand to the lake, on foot or by local vehicle.'
        ]
      },
      {
        kind: 'list',
        items: [
          'Assuming a Yercaud bus waits at the railway station entrance.',
          'Treating the bus stand or the station as the lake itself rather than the first step.',
          'Expecting a fixed timetable, when departures change with the season.',
          'Relying on festival-only buses on an ordinary day.',
          'Leaving the return leg unplanned.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Where and when the Yercaud service loads on the day you travel.',
          'Which bus stand the hill service actually departs from.',
          'Whether any extra service is running, and for which dates.',
          'How you will return from the top before you set out.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Assuming a departure time that was valid on another day will hold on yours.',
          'Planning the climb without checking which bus stand the service uses.',
          'Treating the festival-only extra buses as a year-round service.',
          'Leaving the last short stretch from the bus stand to the lake unplanned.'
        ]
      }
    ],
    faq: [
      {
        q: 'Is there a direct bus from Salem to Yercaud Lake?',
        a: 'The district describes regular bus services between Salem and Yercaud, but the service ends at the town and the bus stand, not the lake itself. The last stretch to the water is short and is covered separately on the bus-stand page. Confirm the current boarding point and departure on the day.'
      },
      {
        q: 'Should I start from the bus stand or the railway station?',
        a: 'It depends how you arrive. If you come by train, Salem Junction is your start point and you reach the bus stand or a vehicle from there. The district puts Salem Junction about 35 km away; it does not promise a bus at the station entrance.'
      },
      {
        q: 'Is there a fixed timetable?',
        a: 'Not one this page can publish. The only official schedule obtained is a festival one — extra buses from the Salem new bus stand during the May Summer Festival. Check the current departure time with the operator or at the bus stand.'
      },
      {
        q: 'Are the festival buses available all year?',
        a: 'No. The district’s festival page describes extra buses from the Salem new bus stand only during the May Summer Festival, running 05:00–22:00 for that period and bookable through the TNSTC online reservation system. Outside the festival, check the current departure with the operator or at the bus stand.'
      },
      {
        q: 'How do I cover the last stretch from the bus stand to the lake?',
        a: 'The Yercaud service ends at the town and the bus stand, not the lake. The final stretch to the water is short and is covered separately on the bus-stand page, on foot or in a local vehicle. Confirm the current walking or vehicle options on arrival.'
      }
    ],
    sourceIds: ['districtLake', 'districtFestivalTransport', 'tnstc', 'googleMaps']
  },
  ta: {
    title: 'சேலம் முதல் ஏற்காடு ஏரி வரை: சொந்த வாகனம், பேருந்து வழி — படிநிலையாக',
    description:
      'சேலம் பக்கத்திலிருந்து ஏற்காடு ஏரி பயணத்தைத் திட்டமிடுங்கள் — தொடக்கப் புள்ளிகள், அடிவார மலைச்சாலை ஏற்றம், மேலே உள்ள பேருந்து நிலையம், அன்றைய சேவைகளைச் சரிபார்ப்பது.',
    kicker: 'போக்குவரத்து',
    h1: 'சேலம் முதல் ஏரி வரை: தொடக்கப் புள்ளிகள், மலைச்சாலை ஏற்றம், இறுதி நிறுத்தம்',
    lead:
      'ஏற்காடு ஏரிக்கு வழக்கமான வாயில் சேலம்தான்; ஆனால் பயணத்தில் மூன்று தனித்தனிப் பகுதிகள் உள்ளன — சேலத்தில் ஒரு தொடக்கப் புள்ளி, மலைச்சாலையில் மேல்நோக்கிய சுற்று ஏற்றம், மேலே உள்ள பேருந்து நிலையத்திலிருந்து ஏரி வரையிலான குறுகிய இறுதிப் பகுதி. இந்த மூன்றையும் முன்கூட்டியே தெளிவுபடுத்துவதே பயணத்தை ஊகிக்கக்கூடியதாக ஆக்குகிறது.',
    facts: [
      { label: 'ரயில் அணுகல்', value: 'சேலம் சந்திப்பு, சுமார் 35 கிமீ (மாவட்டப் பக்கம்)' },
      { label: 'ஏற்றத்தில் இணைப்பு', value: 'அடிவாரம், மலைச்சாலையின் கீழ்ப் பகுதி' },
      { label: 'சேவைகள்', value: 'சேலம்–ஏற்காடு வழக்கமான பேருந்துகள் (மாவட்டப் பக்கம்)' },
      { label: 'நேர அட்டவணை', value: 'இங்கு நிலையானது அல்ல — அன்று சரிபார்க்கவும்' }
    ],
    blocks: [
      { kind: 'h2', text: 'சேலத்தில் இரண்டு தொடக்கப் புள்ளிகள்' },
      {
        kind: 'p',
        text:
          'பயணிகள் சேலத்தில் இரண்டு இடங்களில் ஒன்றிலிருந்து புறப்படுகிறார்கள். ஏற்காடு சேவைகள் புதிய பேருந்து நிலையத்திலிருந்து புறப்படுகின்றன; ரயிலில் வருபவர்கள் பெரும்பாலும் வந்திறங்கும் இடம் சேலம் சந்திப்பு. சேலம் சந்திப்பை ஏற்காட்டுக்கான ரயில் அணுகலாகவும் அது சுமார் 35 கிமீ எனவும் மாவட்டம் குறிப்பிடுகிறது; சேலம்–ஏற்காடு இடையே வழக்கமான பேருந்து சேவைகள் இருப்பதாகவும் விவரிக்கிறது. ஆனால் பேருந்து நிலையமோ ரயில் நிலையமோ உங்களை ஏரிக்குக் கொண்டுவந்துவிடாது — இரண்டும் முதல் படி, இறுதிப் படி அல்ல.'
      },
      { kind: 'h2', text: 'ஏற்றமும் அடிவார இணைப்பும்' },
      {
        kind: 'p',
        text:
          'சேலத்திற்கும் மலை நகரத்திற்கும் இடையே சாலை, சேர்வராயன் மலைப்பகுதியில் சுற்றிச் சுற்றி ஏறும் மலைச்சாலைப் பகுதியாக இருக்கிறது — பொதுவாக SH188 எனக் குறிப்பிடப்படுகிறது. மலைச்சாலையின் கீழ்ப் பகுதியில் உள்ள அடிவாரம், பலர் பேச்சில் குறிப்பிடும் இடம்: ஏற்றம் தொடங்கும் இடம் அதுவே, அங்கேயே ஒரு சேவை நிரம்பத் தொடங்கியிருக்கலாம். போக்குவரத்து, வானிலை, பேருந்து எத்தனை நிறுத்தங்களில் நிற்கிறது ஆகியவற்றைப் பொறுத்து மாறுவதால், இந்தப் பக்கம் உறுதியான பயணநேரத்தைத் தர முடியாது.'
      },
      {
        kind: 'table',
        caption: 'சேலம் பக்கத்தின் முக்கியப் புள்ளிகள், வெளியிடப்பட்ட தொலைவுகளுடன்',
        head: ['புள்ளி', 'ஏற்காடு வரை வெளியிடப்பட்ட தொலைவு', 'பொதுவாக அடுத்தது என்ன'],
        rows: [
          ['சேலம் புதிய பேருந்து நிலையம்', 'சுமார் 30–35 கிமீ (வெளியிடப்பட்ட வரம்பு)', 'ஏற்காடு சேவையில் ஏறுங்கள்; அன்றைய புறப்புகளை உறுதி செய்யுங்கள்'],
          ['சேலம் சந்திப்பு (ரயில்)', 'சுமார் 35 கிமீ (மாவட்டப் பக்கம்)', 'முதலில் பேருந்து நிலையத்திற்கோ ஒரு வாகனத்திற்கோ செல்லுங்கள்'],
          ['அடிவாரம் (மலைச்சாலை அடி)', 'நகரத்திற்குக் கீழே, ஏற்றத்தில்', 'சிறு இடைவேளை; நீங்கள் ஏறும் முன் இருக்கைகள் நிரம்பியிருக்கலாம்']
        ]
      },
      { kind: 'h2', text: 'செய்வதற்கான ஒரு ஒழுங்கான வழி' },
      {
        kind: 'steps',
        items: [
          'உங்கள் தொடக்கப் புள்ளியை முடிவு செய்யுங்கள்: பேருந்தில் வந்தால் பேருந்து நிலையம், ரயிலில் வந்தால் ரயில் நிலையம்.',
          'ஏற்காடு சேவை உண்மையில் புறப்படும் இடத்திற்குச் செல்லுங்கள்; நிலைய நுழைவில் ஒரு பேருந்து காத்திருக்கும் எனக் கருத வேண்டாம்.',
          'மலைச்சாலையில் ஏறி, மேலே உள்ள ஏற்காடு பேருந்து நிலையத்தில் இறங்குங்கள்.',
          'பேருந்து நிலையத்திலிருந்து ஏரி வரையிலான குறுகிய இறுதிப் பகுதியை நடந்தோ உள்ளூர் வாகனத்திலோ கடந்து செல்லுங்கள்.',
          'பேருந்து நிலையத்தை விட்டு வெளியேறும் முன் திரும்பும் நேரத்தை உறுதி செய்யுங்கள்; அப்போது திரும்பும் பயணம் ஒரு ஊகமாக இருக்காது.'
        ]
      },
      {
        kind: 'note',
        text:
          'அன்றைய சேவைகளைப் பற்றி: இந்தப் பக்கம் நேர அட்டவணையை வெளியிடவில்லை, ஏனெனில் இயக்குநர்கள் பருவத்திற்கேற்ப புறப்புகளை மாற்றுகிறார்கள். உதாரணமாக, சேலம் புதிய பேருந்து நிலையத்திலிருந்து கூடுதல் பேருந்துகள் மே கோடை விழாவின் போது மட்டும் இயங்குவதாகவும், அந்தக் காலத்திற்கு 05:00–22:00 எனவும், TNSTC ஆன்லைன் முன்பதிவு மூலம் பதிவு செய்யலாம் எனவும் மாவட்ட விழாப் பக்கம் குறிப்பிடுகிறது. அது ஒரு விழா ஏற்பாடு, ஆண்டு முழுவதும் உள்ள சேவை அல்ல. சாதாரண நாளில், தற்போதைய புறப்பு நேரத்தையும் ஏறும் இடத்தையும் இயக்குநரிடமோ பேருந்து நிலையத்திலோ பயணத்திற்கு முன் சரிபாருங்கள்.'
      },
      {
        kind: 'list',
        items: [
          'ஏற்காடு சேவைக்கான தற்போதைய புறப்பு நேரமும் ஏறும் இடமும்.',
          'கூடுதல் விழா பேருந்துகள் இயங்குகிறதா, அவை மே கோடை விழா காலத்திற்கு மட்டுமே என்பது.',
          'சேவை உண்மையில் எந்தப் பேருந்து நிலையத்திலிருந்து புறப்படுகிறது என்பது.',
          'மேலே உள்ள பேருந்து நிலையத்தை விட்டு வெளியேறும் முன், உங்கள் திரும்பும் பயணம்.',
          'ஏற்காடு பேருந்து நிலையத்திலிருந்து ஏரி வரையிலான குறுகிய பகுதி, நடந்தோ உள்ளூர் வாகனத்திலோ.'
        ]
      },
      {
        kind: 'list',
        items: [
          'ரயில் நிலைய நுழைவில் ஒரு ஏற்காடு பேருந்து காத்திருக்கும் எனக் கருதுவது.',
          'பேருந்து நிலையத்தையோ ரயில் நிலையத்தையோ ஏரியாகவே, முதல் படியாக அல்லாமல், கருதுவது.',
          'பருவத்திற்கேற்ப புறப்புகள் மாறும்போது, ஒரு நிலையான நேர அட்டவணையை எதிர்பார்ப்பது.',
          'சாதாரண நாளில் விழாவுக்கு மட்டுமான பேருந்துகளை நம்புவது.',
          'திரும்பும் பகுதியைத் திட்டமிடாமல் விடுவது.'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'நீங்கள் பயணிக்கும் நாளில் ஏற்காடு சேவை எங்கே, எப்போது ஏறுகிறது.',
          'மலைச் சேவை உண்மையில் எந்தப் பேருந்து நிலையத்திலிருந்து புறப்படுகிறது.',
          'கூடுதல் சேவை ஏதேனும் இயங்குகிறதா, எந்தத் தேதிகளுக்கு.',
          'புறப்படும் முன், மேலிருந்து எப்படித் திரும்புவீர்கள்.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'வேறொரு நாளில் செல்லுபடியாகிய புறப்பு நேரம் உங்கள் நாளிலும் இருக்கும் எனக் கருதுவது.',
          'சேவை எந்தப் பேருந்து நிலையத்தைப் பயன்படுத்துகிறது எனப் பாராமல் ஏற்றத்தைத் திட்டமிடுவது.',
          'விழாவுக்கு மட்டுமான கூடுதல் பேருந்துகளை ஆண்டு முழுவதும் உள்ள சேவையாகக் கருதுவது.',
          'பேருந்து நிலையத்திலிருந்து ஏரி வரையிலான குறுகிய இறுதிப் பகுதியைத் திட்டமிடாமல் விடுவது.'
        ]
      }
    ],
    faq: [
      {
        q: 'சேலத்திலிருந்து ஏற்காடு ஏரிக்கு நேரடிப் பேருந்து உள்ளதா?',
        a: 'சேலம்–ஏற்காடு இடையே வழக்கமான பேருந்து சேவைகள் இருப்பதாக மாவட்டம் குறிப்பிடுகிறது; ஆனால் சேவை நகரத்திலும் பேருந்து நிலையத்திலும் முடிகிறது, ஏரியில் அல்ல. ஏரி வரையிலான இறுதிப் பகுதி குறுகியது; அது பேருந்து நிலையப் பக்கத்தில் தனியாக விவரிக்கப்பட்டுள்ளது. தற்போதைய ஏறும் இடத்தையும் புறப்பையும் அன்று உறுதி செய்யுங்கள்.'
      },
      {
        q: 'பேருந்து நிலையத்திலிருந்து தொடங்கலாமா, ரயில் நிலையத்திலிருந்து தொடங்கலாமா?',
        a: 'நீங்கள் எப்படி வருகிறீர்கள் என்பதைப் பொறுத்தது. ரயிலில் வந்தால் உங்கள் தொடக்கப் புள்ளி சேலம் சந்திப்பு; அங்கிருந்து பேருந்து நிலையத்திற்கோ ஒரு வாகனத்திற்கோ செல்ல வேண்டும். சேலம் சந்திப்பு சுமார் 35 கிமீ என மாவட்டம் குறிப்பிடுகிறது; நிலைய நுழைவில் ஒரு பேருந்து இருக்கும் என அது உறுதி அளிக்கவில்லை.'
      },
      {
        q: 'நிலையான நேர அட்டவணை உள்ளதா?',
        a: 'இந்தப் பக்கம் வெளியிடக்கூடிய அளவில் இல்லை. கிடைத்த ஒரே அதிகாரப்பூர்வ அட்டவணை ஒரு விழா அட்டவணை — மே கோடை விழாவின் போது சேலம் புதிய பேருந்து நிலையத்திலிருந்து கூடுதல் பேருந்துகள். தற்போதைய புறப்பு நேரத்தை இயக்குநரிடமோ பேருந்து நிலையத்திலோ சரிபாருங்கள்.'
      },
      {
        q: 'விழா பேருந்துகள் ஆண்டு முழுவதும் கிடைக்குமா?',
        a: 'இல்லை. சேலம் புதிய பேருந்து நிலையத்திலிருந்து கூடுதல் பேருந்துகள் மே கோடை விழாவின் போது மட்டும் இயங்குவதாகவும், அந்தக் காலத்திற்கு 05:00–22:00 எனவும், TNSTC ஆன்லைன் முன்பதிவு மூலம் பதிவு செய்யலாம் எனவும் மாவட்ட விழாப் பக்கம் குறிப்பிடுகிறது. விழாவுக்கு வெளியே, தற்போதைய புறப்பை இயக்குநரிடமோ பேருந்து நிலையத்திலோ சரிபாருங்கள்.'
      },
      {
        q: 'பேருந்து நிலையத்திலிருந்து ஏரி வரையிலான இறுதிப் பகுதியை எப்படிக் கடப்பது?',
        a: 'ஏற்காடு சேவை நகரத்திலும் பேருந்து நிலையத்திலும் முடிகிறது, ஏரியில் அல்ல. ஏரி வரையிலான இறுதிப் பகுதி குறுகியது; அது பேருந்து நிலையப் பக்கத்தில் தனியாக விவரிக்கப்பட்டுள்ளது — நடந்தோ உள்ளூர் வாகனத்திலோ. வந்ததும் தற்போதைய நடை அல்லது வாகன வழிகளை உறுதி செய்யுங்கள்.'
      }
    ],
    sourceIds: ['districtLake', 'districtFestivalTransport', 'tnstc', 'googleMaps']
  }
};

export default page;
