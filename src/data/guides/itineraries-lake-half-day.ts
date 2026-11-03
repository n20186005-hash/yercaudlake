import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'itineraries/lake-half-day',
  family: 'itineraries',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'This half day starts at the Yercaud Lake & Boat House itself, so there is no first hop to plan — arrive at the lake area and walk straight to the boat counter and the shore. Anna Park and Deer Park are reached on foot near the lake, and lunch in town is a short vehicle ride unless you are already on Lake Road. Treat every distance and timing here as approximate and confirm them on the day.',
    ta: 'இந்த அரை நாள் ஏற்காடு ஏரி மற்றும் படகு இல்லத்திலேயே தொடங்குகிறது; எனவே முதலில் செல்ல வேண்டிய தூரம் எதுவும் இல்லை — ஏரிப் பகுதியை அடைந்து நேராகப் படகு கவுண்டருக்கும் கரைக்கும் நடந்து செல்லுங்கள். அண்ணா பூங்காவும் மான் பூங்காவும் ஏரிக்கு அருகில் நடந்தே அடையலாம்; நகரத்தில் மதிய உணவு, நீங்கள் ஏற்கனவே லேக் ரோட்டில் இல்லையெனில், ஒரு குறுகிய வாகனப் பயணம். இங்குள்ள தூரங்களும் நேரங்களும் தோராயமானவை; அன்று உள்ளூரில் உறுதிப்படுத்த வேண்டும்.'
  },
  related: ['nearby/anna-park', 'boating/timings', 'food/lunch-after-boating', 'visit/best-time', 'nearby/deer-park'],
  en: {
    title: 'Half a day at Yercaud Lake: boat, one park and a rest',
    description:
      'Half a day at Yercaud Lake: arrive early, treat the boat as optional, add one park, break for lunch, and head back before the afternoon rush.',
    kicker: 'Itineraries',
    h1: 'A half day at the lake: lake, boat, one park, lunch',
    lead:
      'Half a day is enough for the lake, a boat attempt and one park — if you accept that the boat is optional and that the second park is not. The value here is in the order of the blocks and in deciding early what you will drop.',
    facts: [
      { label: 'Suits', value: 'Families and first-time visitors' },
      { label: 'Time budget (estimate)', value: 'Around three and a half to four hours' },
      { label: 'On foot', value: 'Lake, boat house, Anna Park and Deer Park' },
      { label: 'Needs a vehicle', value: 'Viewpoints and the falls' }
    ],
    blocks: [
      { kind: 'h2', text: 'Arrive in the first half of the morning' },
      {
        kind: 'p',
        text:
          'The lake listing shows general hours of about 09:00–18:00. Reach the lake in the first part of the morning so the boat counter and the shore are at their quietest; a half day planned from mid-morning onwards usually loses the boat to the queue. If your group is slow to start, keep the plan but expect to walk rather than ride.'
      },
      { kind: 'h2', text: 'Treat the boat as the flexible part' },
      {
        kind: 'steps',
        items: [
          'Ask at the counter what is running and how long the current wait is.',
          'If the wait is short, take the ride now; if not, walk the shore and try again once.',
          'Do not let a single long queue consume the whole block.',
          'If no boat suits your group, the walk and the park are the real half day.'
        ]
      },
      {
        kind: 'table',
        caption: 'Half-day blocks (estimates, not a timetable)',
        head: ['Block (estimate)', 'Half-day plan', 'Mode'],
        rows: [
          ['Just after opening', 'Reach the lake and read the boat counter first', 'On foot at the lake'],
          ['Late morning', 'Boat if one is running with a short wait; otherwise walk the shore', 'On foot'],
          ['Around midday', 'One park — Anna Park beside the lake, or Deer Park on the shore', 'On foot, short walk'],
          ['Early afternoon', 'Lunch in town, then leave', 'Short vehicle ride unless you are on Lake Road']
        ]
      },
      { kind: 'h2', text: 'One park, then lunch and a rest' },
      {
        kind: 'p',
        text:
          'Anna Park sits beside the lake, and the district listing gives dated entry figures (adult ₹15, child ₹10, camera ₹25, video camera ₹50); Deer Park and a recreation area are also described on the shore. Choose one, not both — together they push the half day into a full one and leave no room to rest. Take lunch after the water rather than before, since a meal first eats the quietest boating hours, and a town cafe is a reasonable closer.'
      },
      {
        kind: 'note',
        text:
          'If the weather turns, drop the park first and keep the lake and a covered lunch; boat operation itself cannot be assumed. Aim to leave by early afternoon so you are off the town roads before the busiest part of the day.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Whether the boat counter is running, and how long the current wait is.',
          'Which one park you will keep, and where your parking sits relative to it.',
          'Whether lunch in town needs a short vehicle ride or is on your walk back.',
          'The weather, since a wet afternoon changes which half you keep.'
        ]
      },
      {
        kind: 'note',
        text:
          'All distances, timings and the boat types quoted on this page are planning estimates; re-check them at the lake on the day, because queues, weather and what is actually operating can all change.'
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Planning both parks into a half day; pick one, or the half day becomes a full one.',
          'Eating a full meal first; it consumes the quietest boating hours.',
          'Letting one long queue take the whole block; walk the shore and try once more instead.',
          'Treating the viewpoints as part of the half day; they need a separate, vehicle-based outing.'
        ]
      }
    ],
    faq: [
      {
        q: 'Do we need to book a boat for a half day?',
        a: 'No booking is required. A district page states that online booking through TTDC runs, but counter tickets are the normal route and availability is decided on the day.'
      },
      {
        q: 'Which park should we pick?',
        a: 'Anna Park is right beside the lake and easiest to fold in; Deer Park is also on the shore. Pick the one nearest your parking, and do not plan both in a half day.'
      },
      {
        q: 'Is a half day enough for the viewpoints too?',
        a: 'No. The viewpoints are a separate, vehicle-based outing. Keep them for a full day or a second visit.'
      },
      {
        q: 'What time should we aim to reach the lake?',
        a: 'The general lake listing runs about 09:00–18:00, and the plan assumes you arrive in the first part of the morning for the quietest counter and shore. Treat that as a general figure and confirm it on the day.'
      },
      {
        q: 'What should we drop first if the half day runs late?',
        a: 'Drop the park first and keep the lake and a covered lunch; if the boat queue is long, abandon it after one attempt rather than letting it consume the half day.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'districtLake', 'ttdcBooking', 'googleMaps', 'chutneyListing']
  },
  ta: {
    title: 'ஏற்காடு ஏரியில் அரை நாள்: படகு, ஒரு பூங்கா, ஓய்வு',
    description:
      'ஏற்காடு ஏரியில் அரை நாள்: முன்னதாக வாருங்கள், படகை விருப்பத் தேர்வாகக் கருதுங்கள், ஒரு பூங்கா, மதிய உணவு, பிற்பகல் நெரிசலுக்கு முன் திரும்புங்கள்.',
    kicker: 'பயணத் திட்டங்கள்',
    h1: 'ஏரியில் அரை நாள்: ஏரி, படகு, ஒரு பூங்கா, மதிய உணவு',
    lead:
      'ஏரி, ஒரு படகு முயற்சி, ஒரு பூங்கா — இவற்றுக்கு அரை நாள் போதும்; படகு விருப்பத் தேர்வு என்பதையும், இரண்டாவது பூங்கா இல்லை என்பதையும் ஏற்றுக்கொண்டால் மட்டுமே. இங்கு மதிப்பு என்பது நேரப் பகுதிகளின் வரிசையிலும், எதை விடுவது என்பதை முன்கூட்டியே முடிவு செய்வதிலும்தான்.',
    facts: [
      { label: 'பொருத்தம்', value: 'குடும்பங்கள் மற்றும் முதல் முறை பயணிகள்' },
      { label: 'நேரம் (கணிப்பு)', value: 'சுமார் மூன்றரை முதல் நான்கு மணி வரை' },
      { label: 'நடந்து செல்லலாம்', value: 'ஏரி, படகு இல்லம், அண்ணா பூங்கா, மான் பூங்கா' },
      { label: 'வாகனம் தேவை', value: 'காட்சி முனைகள் மற்றும் அருவி' }
    ],
    blocks: [
      { kind: 'h2', text: 'காலையின் முதல் பாதியில் வாருங்கள்' },
      {
        kind: 'p',
        text:
          'ஏரியின் வரைபடப் பதிவில் பொதுவான நேரம் சுமார் 09:00–18:00 என உள்ளது. காலையின் முதல் பகுதியில் ஏரியை அடைந்தால் படகு கவுண்டரும் கரையும் மிக அமைதியாக இருக்கும்; பத்து மணிக்குப் பின் தொடங்கும் அரை நாள் திட்டத்தில் படகை வரிசையில் இழந்துவிடுவீர்கள். உங்கள் குழு தாமதமாகக் கிளம்பினாலும் திட்டத்தை வையுங்கள்; ஆனால் சவாரிக்குப் பதிலாக நடையையே எதிர்பாருங்கள்.'
      },
      { kind: 'h2', text: 'படகை நெகிழ்வான பகுதியாகக் கருதுங்கள்' },
      {
        kind: 'steps',
        items: [
          'எது இயங்குகிறது, தற்போதைய காத்திருப்பு எவ்வளவு எனக் கவுண்டரில் கேளுங்கள்.',
          'காத்திருப்பு குறுகியதெனில் இப்போதே சவாரி செய்யுங்கள்; இல்லையேல் கரையில் நடந்து ஒருமுறை மீண்டும் முயற்சி செய்யுங்கள்.',
          'ஒரு நீண்ட வரிசை முழு நேரப் பகுதியையும் விழுங்கவிடாதீர்கள்.',
          'உங்கள் குழுவிற்கு ஏற்ற படகு இல்லையெனில், நடையும் பூங்காவுமே உண்மையான அரை நாள்.'
        ]
      },
      {
        kind: 'table',
        caption: 'அரை நாள் நேரப் பகுதிகள் (கணிப்புகள், கால அட்டவணை அல்ல)',
        head: ['நேரப் பகுதி (கணிப்பு)', 'அரை நாள் திட்டம்', 'பயண முறை'],
        rows: [
          ['திறந்த உடனே', 'ஏரியை அடைந்து முதலில் படகு கவுண்டரைப் பாருங்கள்', 'ஏரியில் நடை'],
          ['காலை பிற்பகுதி', 'வரிசை குறுகியதாக இருந்து படகு இயங்கினால் சவாரி; இல்லையேல் கரையில் நடை', 'நடை'],
          ['நண்பகல் சுற்றி', 'ஒரு பூங்கா — ஏரிக்கு அருகிலுள்ள அண்ணா பூங்கா அல்லது கரையில் உள்ள மான் பூங்கா', 'நடை, குறுகிய தூரம்'],
          ['பிற்பகல் முதல் பகுதி', 'நகரத்தில் மதிய உணவு, பின் வெளியேறுங்கள்', 'லேக் ரோட்டில் இல்லையெனில் குறுகிய வாகனப் பயணம்']
        ]
      },
      { kind: 'h2', text: 'ஒரே பூங்கா, பின் மதிய உணவு மற்றும் ஓய்வு' },
      {
        kind: 'p',
        text:
          'அண்ணா பூங்கா ஏரிக்கு அருகிலேயே உள்ளது; மாவட்டப் பட்டியலில் பழைய தேதியுள்ள நுழைவுக் கட்டணங்கள் (பெரியவர் ₹15, குழந்தை ₹10, கேமரா ₹25, வீடியோ கேமரா ₹50) உள்ளன. மான் பூங்காவும் ஒரு பொழுதுபோக்குப் பகுதியும் கரையில் உள்ளதாகவும் குறிப்பிடப்படுகிறது. இரண்டில் ஒன்றைத் தேர்ந்தெடுங்கள், இரண்டையும் அல்ல: இரண்டும் சேர்ந்தால் அரை நாள் முழு நாளாகி, ஓய்வுக்கு இடமே இருக்காது. நீருக்குப் பின் மதிய உணவை எடுத்துக்கொள்ளுங்கள், முன்பு அல்ல — முதலில் சாப்பிட்டால் அமைதியான படகு நேரங்களை இழப்பீர்கள்; நகரக் கஃபே ஒரு நல்ல நிறைவு. ஏற்காட்டில் உள்ள வெளி மூல கஃபே பட்டியல்களை நேரில் உறுதி செய்ய வேண்டும், நேரங்கள் மாறலாம்.'
      },
      {
        kind: 'note',
        text:
          'வானிலை மாறினால் முதலில் பூங்காவை விட்டுவிட்டு ஏரியையும் மூடிய மதிய உணவையும் தக்கவைத்துக்கொள்ளுங்கள்; படகு இயங்கும் எனக் கருத முடியாது. நாளின் நெரிசலான பகுதிக்கு முன் நகரச் சாலைகளை விட்டு வெளியேற, பிற்பகல் முதல் பகுதியிலேயே கிளம்ப முயற்சி செய்யுங்கள்.'
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'படகு கவுண்டர் இயங்குகிறதா, தற்போதைய காத்திருப்பு எவ்வளவு.',
          'எந்த ஒரு பூங்காவை வைத்துக்கொள்வது, உங்கள் நிறுத்தம் அதற்கு எப்படி அமைந்துள்ளது.',
          'நகரத்தில் மதிய உணவுக்கு ஒரு குறுகிய வாகனப் பயணம் தேவையா, அல்லது திரும்பும் நடையில் உள்ளதா.',
          'வானிலை — ஈரமான பிற்பகல் எந்தப் பாதியை வைத்துக்கொள்வதை மாற்றும்.'
        ]
      },
      {
        kind: 'note',
        text:
          'இந்தப் பக்கத்தில் குறிப்பிடப்படும் தூரங்கள், நேரங்கள், படகு வகைகள் அனைத்தும் திட்டக் கணிப்புகள்; அன்று ஏரியில் மீண்டும் சரிபார்க்கவும் — வரிசைகள், வானிலை, உண்மையில் எது இயங்குகிறது என்பவை மாறலாம்.'
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'ஒரு அரை நாளில் இரண்டு பூங்காக்களையும் திட்டமிடுவது; ஒன்றைத் தேர்ந்தெடுங்கள்; இல்லையேல் அரை நாள் முழு நாளாகிவிடும்.',
          'முதலில் முழு உணவைச் சாப்பிடுவது; அது அமைதியான படகு நேரங்களை விழுங்கும்.',
          'ஒரு நீண்ட வரிசை முழு நேரப் பகுதியையும் எடுத்துக்கொள்ளவிடுவது; அதற்குப் பதிலாகக் கரையில் நடந்து ஒருமுறை மீண்டும் முயற்சி செய்யுங்கள்.',
          'காட்சி முனைகளை அரை நாளின் பகுதியாகக் கருதுவது; அவை தனி, வாகனம் சார்ந்த பயணம் தேவைப்படும்.'
        ]
      }
    ],
    faq: [
      {
        q: 'அரை நாளுக்கு படகை முன்பதிவு செய்ய வேண்டுமா?',
        a: 'முன்பதிவு கட்டாயம் இல்லை. TTDC வழியாக ஆன்லைன் முன்பதிவு இயங்குகிறது என்று ஒரு மாவட்டப் பக்கம் குறிப்பிடுகிறது; ஆனால் கவுண்டர் டிக்கெட்டே வழக்கமான வழி, கிடைப்பது அன்றைய நிலையைப் பொறுத்தது.'
      },
      {
        q: 'எந்தப் பூங்காவைத் தேர்ந்தெடுக்க வேண்டும்?',
        a: 'அண்ணா பூங்கா ஏரிக்கு அருகில் இருப்பதால் இணைப்பது எளிது; மான் பூங்காவும் கரையில் உள்ளது. உங்கள் நிறுத்தத்திற்கு அருகிலுள்ளதைத் தேர்ந்தெடுங்கள்; அரை நாளில் இரண்டையும் திட்டமிட வேண்டாம்.'
      },
      {
        q: 'காட்சி முனைகளுக்கும் அரை நாள் போதுமா?',
        a: 'போதாது. காட்சி முனைகள் வாகனம் சார்ந்த தனிப் பயணம். அவற்றை ஒரு முழு நாளுக்கோ இரண்டாம் வருகைக்கோ வைத்துக்கொள்ளுங்கள்.'
      },
      {
        q: 'எந்த நேரத்தில் ஏரியை அடைய முயற்சிக்க வேண்டும்?',
        a: 'ஏரியின் பொதுவான பதிவில் நேரம் சுமார் 09:00–18:00; கவுண்டரும் கரையும் அமைதியாக இருக்கக் காலையின் முதல் பகுதியில் வருவதாகத் திட்டம் கருதுகிறது. அதை ஒரு பொதுவான மதிப்பாகக் கருதி அன்று உறுதிப்படுத்துங்கள்.'
      },
      {
        q: 'அரை நாள் தாமதமானால் முதலில் எதை விட வேண்டும்?',
        a: 'முதலில் பூங்காவை விட்டுவிட்டு ஏரியையும் மூடிய மதிய உணவையும் தக்கவைத்துக்கொள்ளுங்கள்; படகு வரிசை நீளமெனில் ஒருமுறை முயற்சித்த பின் அதை விட்டுவிடுங்கள் — அது அரை நாளை விழுங்கக் கூடாது.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'districtLake', 'ttdcBooking', 'googleMaps', 'chutneyListing']
  }
};

export default page;
