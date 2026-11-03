import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'itineraries/rainy-day',
  family: 'itineraries',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'This wet-weather plan assumes you start near the Yercaud Lake & Boat House and then move by short vehicle hops into town, or stay put at a covered stop. Nothing beyond the lake should be attempted on foot in rain. All distances and timings are approximate, and what is open must be confirmed locally on the day.',
    ta: 'இந்த ஈரமான வானிலைத் திட்டம் ஏற்காடு ஏரி மற்றும் படகு இல்லத்திற்கு அருகில் தொடங்கி, குறுகிய வாகனத் தூரங்களில் நகரத்திற்குச் செல்வதாகவோ, அல்லது ஒரு மூடிய நிறுத்தத்தில் தங்குவதாகவோ கருதுகிறது. மழையில் ஏரிக்கு அப்பால் எதையும் நடந்து முயற்சிக்கக் கூடாது. இங்குள்ள தூரங்களும் நேரங்களும் தோராயமானவை; எது திறந்திருக்கிறது என்பதை அன்று உள்ளூரில் உறுதிப்படுத்த வேண்டும்.'
  },
  related: ['food/cafes-with-lake-views', 'visit/lake-nature-history', 'transport/ghat-road-driving', 'nearby/botanical-garden', 'food/snacks-tea-after-lake'],
  en: {
    title: 'Yercaud Lake on a rainy day: a wet-weather back-up plan',
    description:
      'When it rains at Yercaud Lake and boats or trails stop, here is the town-and-cafe back-up, how to move by short vehicle hops, and when to leave.',
    kicker: 'Itineraries',
    h1: 'A rainy day at the lake: the town-and-cafe back-up',
    lead:
      'Rain changes the plan, not the day. This page assumes the boats may not run and the trails may be shut, and builds a low-risk alternative around town, covered stops and short vehicle hops. A forecast shows weather at the lake’s coordinates; it proves nothing about boat operation or trail access.',
    facts: [
      { label: 'Suits', value: 'Wet days, when boats and trails may stop' },
      { label: 'Time budget (estimate)', value: 'A half day, indoors and dry' },
      { label: 'Assume', value: 'No boat and no trail, then improvise' },
      { label: 'Keep', value: 'Town, cafes and short, covered stops' }
    ],
    blocks: [
      { kind: 'h2', text: 'Check the weather, then check what is actually open' },
      {
        kind: 'p',
        text:
          'Look at the forecast before you leave, but treat it as a hint only — it is generated for the lake’s fixed coordinates and cannot tell you whether boats are running or whether a path is walkable. On a wet day, start by asking locally what is open before you travel anywhere far.'
      },
      { kind: 'h2', text: 'Assume the outdoor plan is off' },
      {
        kind: 'list',
        items: [
          'Do not build the day around a boat ride; it may not operate in rain.',
          'Do not build the day around Kiliyur Falls, whose trail is often affected after rain.',
          'Do not build the day around a hill viewpoint; cloud can erase the view and the hairpin drive is worse wet.',
          'Keep the lake itself as a short, covered look rather than a full circuit.'
        ]
      },
      { kind: 'h2', text: 'If this stops, do this instead' },
      {
        kind: 'table',
        caption: 'Wet-weather back-ups',
        head: ['If this stops', 'Back-up', 'Mode'],
        rows: [
          ['Boats stop running', 'A lake view from a cafe or a covered spot in town', 'Short vehicle ride to town'],
          ['Trails and the falls shut', 'A short town stop paired with a meal', 'Short vehicle hops'],
          ['Hill viewpoints are in cloud', 'Skip the hairpin drive entirely', 'Stay in town']
        ]
      },
      { kind: 'h2', text: 'Make the meal the centre of the day' },
      {
        kind: 'note',
        text:
          'On a wet day a long, warm lunch is the reliable stop, and a short, covered town stop can fill the time around it — keep the whole day within a small radius so an unexpected downpour means a short dash, not a long walk. Yercaud has cafes and eateries listed by third-party directories — for example one on Adivaram Road near the foot of the ghat road and one on Kiliyur Falls Road, both listed about 06:00–21:00, and a chocolate cafe on Hospital Road listed about 09:00–21:30. These were read on 2 November 2026 and must be confirmed on site, as hours and availability change. Leave a margin before dark: the ghat road down to Salem, quoted at roughly 30–35 km, is slower and less forgiving in rain, so confirm your return before you settle somewhere far from your base.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Whether the boats are running — ask at the counter, do not assume from a forecast.',
          'Whether the trails and the falls are open after rain.',
          'Which cafe or covered town stop is open that day.',
          'The state of the ghat road down to Salem before you leave.'
        ]
      },
      {
        kind: 'note',
        text:
          'The forecast, hours and quotations on this page are hints and estimates only; confirm what is open and what is running locally on the day.'
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Building the whole day around a boat ride or the falls, which rain can stop.',
          'Reading a forecast as proof that boats are running or trails are open.',
          'Attempting the lake circuit, the falls trail or any long walk in the rain.',
          'Leaving a stop far from your base late, with no margin for the wet ghat road.'
        ]
      }
    ],
    faq: [
      {
        q: 'Does the boat house run in the rain?',
        a: 'You cannot assume it does. Weather can suspend rides; check at the counter or locally on the day rather than planning around a ride.'
      },
      {
        q: 'What is there to do indoors?',
        a: 'A meal and a covered town stop are the reliable options. Cafes and eateries are listed by third-party directories but must be confirmed on site.'
      },
      {
        q: 'Should we skip the lake altogether?',
        a: 'Not necessarily — a short, covered look at the lake fits a wet day. What you should skip is a long circuit, a boat ride and any viewpoint in cloud.'
      },
      {
        q: 'How do we decide once it starts raining?',
        a: 'Start by asking locally what is open before travelling anywhere far; treat the forecast as a hint only, since it cannot tell you whether boats are running or paths are walkable.'
      },
      {
        q: 'When should we leave?',
        a: 'Leave a margin before dark: the ghat road down to Salem is slower and less forgiving in rain, so confirm your return before you settle somewhere far from your base.'
      }
    ],
    sourceIds: ['openMeteo', 'districtLake', 'chutneyListing', 'moddysCafe', 'googleMaps']
  },
  ta: {
    title: 'மழை நாளில் ஏற்காடு ஏரி: ஈரமான வானிலைக்கான மாற்றுத் திட்டம்',
    description:
      'ஏற்காடு ஏரியில் மழை பெய்து படகுகளோ பாதைகளோ நின்றால், நகரம் மற்றும் கஃபே சார்ந்த மாற்றுத் திட்டம், குறுகிய வாகனத் தூரங்கள், எப்போது கிளம்புவது.',
    kicker: 'பயணத் திட்டங்கள்',
    h1: 'ஏரியில் ஒரு மழை நாள்: நகரம் மற்றும் கஃபே மாற்றுத் திட்டம்',
    lead:
      'மழை திட்டத்தை மாற்றும், நாளை அல்ல. படகுகள் இயங்காமல் போகலாம், பாதைகள் மூடப்படலாம் எனக் கருதி, நகரம், மூடிய நிறுத்தங்கள், குறுகிய வாகனத் தூரங்களைச் சுற்றி ஒரு குறைந்த ஆபத்து மாற்றுத் திட்டம் இந்தப் பக்கத்தில் உள்ளது. முன்னறிவிப்பு ஏரியின் நிலையான ஆயத்தொலைவுக்கான வானிலையைக் காட்டுகிறது; அது படகு இயக்கத்தையோ பாதை அணுகலையோ நிரூபிக்காது.',
    facts: [
      { label: 'பொருத்தம்', value: 'படகுகளும் பாதைகளும் நிற்கக்கூடிய ஈரமான நாட்கள்' },
      { label: 'நேரம் (கணிப்பு)', value: 'உள்ளரங்கில், வறண்ட ஒரு அரை நாள்' },
      { label: 'கருதுங்கள்', value: 'படகு இல்லை, பாதை இல்லை — பின்னர் சரிசெய்யுங்கள்' },
      { label: 'தக்கவைக்கவும்', value: 'நகரம், கஃபேக்கள், குறுகிய மூடிய நிறுத்தங்கள்' }
    ],
    blocks: [
      { kind: 'h2', text: 'வானிலையைப் பாருங்கள், பின்னர் உண்மையில் எது திறந்திருக்கிறது என்பதைப் பாருங்கள்' },
      {
        kind: 'p',
        text:
          'கிளம்பும் முன் முன்னறிவிப்பைப் பாருங்கள்; ஆனால் அதை ஒரு குறிப்பாக மட்டுமே கருதுங்கள் — அது ஏரியின் நிலையான ஆயத்தொலைவுக்காக உருவாக்கப்படுகிறது; படகுகள் இயங்குகின்றனவா, பாதை நடக்கக்கூடியதா என்பதை அது சொல்ல முடியாது. ஈரமான நாளில், எங்கும் தொலைவில் செல்வதற்கு முன் உள்ளூரில் எது திறந்திருக்கிறது எனக் கேட்டுத் தொடங்குங்கள்.'
      },
      { kind: 'h2', text: 'வெளிப்புறத் திட்டம் இல்லை என்றே கருதுங்கள்' },
      {
        kind: 'list',
        items: [
          'நாளை படகு சவாரியைச் சுற்றிக் கட்ட வேண்டாம்; மழையில் அது இயங்காமல் போகலாம்.',
          'நாளை கிளியூர் அருவியைச் சுற்றிக் கட்ட வேண்டாம்; மழைக்குப் பின் அதன் பாதை பெரும்பாலும் பாதிக்கப்படும்.',
          'நாளை ஒரு மலைக் காட்சி முனையைச் சுற்றிக் கட்ட வேண்டாம்; மேகம் காட்சியை அழிக்கும், ஈரத்தில் முடிச்சு சாலை மோசம்.',
          'ஏரியையே முழுச் சுற்றாக அல்ல, ஒரு குறுகிய மூடிய பார்வையாக வையுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'இது நின்றால், அதற்குப் பதிலாக இதைச் செய்யுங்கள்' },
      {
        kind: 'table',
        caption: 'ஈரமான வானிலைக்கான மாற்றுத் திட்டங்கள்',
        head: ['இது நின்றால்', 'மாற்றுத் திட்டம்', 'பயண முறை'],
        rows: [
          ['படகுகள் இயங்காமல் நின்றால்', 'ஒரு கஃபேயிலிருந்தோ நகரத்தில் ஒரு மூடிய இடத்திலிருந்தோ ஏரிக்காட்சி', 'நகரத்திற்குக் குறுகிய வாகனப் பயணம்'],
          ['பாதைகளும் அருவியும் மூடப்பட்டால்', 'ஒரு குறுகிய நகர நிறுத்தம் ஒரு உணவுடன்', 'குறுகிய வாகனத் தூரங்கள்'],
          ['மலைக் காட்சி முனைகள் மேகத்தில் இருந்தால்', 'முடிச்சு சாலைப் பயணத்தையே தவிர்க்கவும்', 'நகரத்திலேயே இருங்கள்']
        ]
      },
      { kind: 'h2', text: 'உணவையே நாளின் மையமாக்குங்கள்' },
      {
        kind: 'note',
        text:
          'ஈரமான நாளில் ஒரு நீண்ட, சூடான மதிய உணவே நம்பகமான நிறுத்தம்; அதைச் சுற்றி ஒரு குறுகிய மூடிய நகர நிறுத்தத்தால் நேரத்தை நிரப்பலாம் — எதிர்பாராத பெருமழை வந்தால் ஒரு நீண்ட நடையாக அல்ல, ஒரு குறுகிய ஓட்டமாக இருக்கும்படி முழு நாளையும் ஒரு சிறிய சுற்றளவுக்குள் வையுங்கள். ஏற்காட்டில் வெளி மூல பட்டியல்களில் கஃபேக்களும் உணவகங்களும் உள்ளன — எடுத்துக்காட்டாக, மலைச் சாலையின் அடிவாரத்திற்கு அருகிலுள்ள அடிவாரம் சாலையில் ஒன்று, கிளியூர் அருவி சாலையில் ஒன்று (இரண்டும் சுமார் 06:00–21:00 எனப் பட்டியலிடப்பட்டுள்ளன), மற்றும் ஹாஸ்பிடல் சாலையில் ஒரு சாக்லேட் கஃபே (சுமார் 09:00–21:30). இவை 2 நவம்பர் 2026 அன்று படிக்கப்பட்ட வெளி மூலப் பட்டியல்கள்; நேரங்களும் கிடைப்பும் மாறலாம் என்பதால் நேரில் உறுதிப்படுத்த வேண்டும். இருளுக்கு முன் ஓர் இடைவெளி வையுங்கள்: சேலம் செல்லும் மலைச் சாலை சுமார் 30–35 கிமீ எனக் குறிப்பிடப்படுகிறது; மழையில் அது மெதுவானதும் கடினமானதும் — எனவே உங்கள் தங்குமிடத்திலிருந்து தொலைவில் தங்குவதற்கு முன் திரும்பும் வழியை உறுதி செய்யுங்கள்.'
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'படகுகள் இயங்குகின்றனவா — கவுண்டரில் கேளுங்கள்; முன்னறிவிப்பை வைத்து எதையும் கருத வேண்டாம்.',
          'மழைக்குப் பின் பாதைகளும் அருவியும் திறந்திருக்கின்றனவா.',
          'அன்று எந்தக் கஃபே அல்லது மூடிய நகர நிறுத்தம் திறந்திருக்கிறது.',
          'கிளம்புவதற்கு முன் சேலம் செல்லும் மலைச் சாலையின் நிலை.'
        ]
      },
      {
        kind: 'note',
        text:
          'இந்தப் பக்கத்தில் உள்ள முன்னறிவிப்பு, நேரங்கள், மேற்கோள்கள் குறிப்புகளும் கணிப்புகளும் மட்டுமே; அன்று எது திறந்திருக்கிறது, எது இயங்குகிறது என்பதை உள்ளூரில் உறுதிப்படுத்துங்கள்.'
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'மழை நிறுத்தக்கூடிய ஒரு படகு சவாரியையோ அருவியையோ சுற்றி முழு நாளையும் கட்டுவது.',
          'படகுகள் இயங்குகின்றன அல்லது பாதைகள் திறந்திருக்கின்றன என்பதற்கான உறுதியாக முன்னறிவிப்பைப் படிப்பது.',
          'மழையில் ஏரிச் சுற்றையோ அருவிப் பாதையையோ அல்லது எந்த நீண்ட நடையையோ முயற்சிப்பது.',
          'ஈரமான மலைச் சாலைக்கு இடைவெளி இல்லாமல், தங்குமிடத்திலிருந்து தொலைவில் தாமதமாகக் கிளம்புவது.'
        ]
      }
    ],
    faq: [
      {
        q: 'மழையில் படகு இல்லம் இயங்குமா?',
        a: 'இயங்கும் எனக் கருத முடியாது. வானிலை சவாரிகளை நிறுத்தலாம்; சவாரியைச் சுற்றித் திட்டமிடாமல் அன்று கவுண்டரில் அல்லது உள்ளூரில் சரிபார்க்கவும்.'
      },
      {
        q: 'உள்ளரங்கில் என்ன செய்யலாம்?',
        a: 'ஒரு உணவும் ஒரு மூடிய நகர நிறுத்தமும் நம்பகமான தேர்வுகள். கஃபேக்களும் உணவகங்களும் வெளி மூலப் பட்டியல்களில் உள்ளன; ஆனால் நேரில் உறுதிப்படுத்த வேண்டும்.'
      },
      {
        q: 'ஏரியையே முழுவதுமாகத் தவிர்க்க வேண்டுமா?',
        a: 'அவசியமில்லை — ஈரமான நாளுக்கு ஏரியை ஒரு குறுகிய, மூடிய பார்வையாகப் பார்க்கலாம். தவிர்க்க வேண்டியவை: நீண்ட சுற்று, படகு சவாரி, மேகத்தில் உள்ள எந்தக் காட்சி முனையும்.'
      },
      {
        q: 'மழை தொடங்கியதும் எப்படி முடிவு செய்வது?',
        a: 'எங்கும் தொலைவில் செல்வதற்கு முன் உள்ளூரில் எது திறந்திருக்கிறது எனக் கேட்டுத் தொடங்குங்கள்; முன்னறிவிப்பை ஒரு குறிப்பாக மட்டுமே கருதுங்கள் — படகுகள் இயங்குகின்றனவா, பாதை நடக்கக்கூடியதா என்பதை அது சொல்ல முடியாது.'
      },
      {
        q: 'எப்போது கிளம்ப வேண்டும்?',
        a: 'இருளுக்கு முன் ஓர் இடைவெளி வையுங்கள்: சேலம் செல்லும் மலைச் சாலை மழையில் மெதுவானதும் கடினமானதும்; உங்கள் தங்குமிடத்திலிருந்து தொலைவில் தங்குவதற்கு முன் திரும்பும் வழியை உறுதி செய்யுங்கள்.'
      }
    ],
    sourceIds: ['openMeteo', 'districtLake', 'chutneyListing', 'moddysCafe', 'googleMaps']
  }
};

export default page;
