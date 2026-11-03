import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'nearby/ladys-seat',
  family: 'nearby',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: "Lady's Seat Yercaud",
  fromLake: {
    en: "From the Yercaud Lake & Boat House area you reach Lady's Seat by a short vehicle or auto-rickshaw ride out of the town centre along the viewpoint road — a climbing, curving route rather than a level walk. The distance is approximate and varies between listings; confirm the travel time and your return transport locally on the day.",
    ta: 'ஏற்காடு ஏரி & படகு இல்லப் பகுதியிலிருந்து லேடீஸ் சீட்டிற்கு, நகர மையத்திலிருந்து வெளியேறும் காட்சி முனைச் சாலை வழியாக ஒரு குறுகிய வாகனம் அல்லது ஆட்டோ பயணத்தில் செல்லலாம்; இது சமதளமான நடை அல்ல, ஏறி வளைந்து செல்லும் வழி. தொலைவு தோராயமானது; பயண நேரத்தையும் திரும்பும் வாகனத்தையும் அன்று உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['nearby/gents-childrens-seat', 'nearby/pagoda-point', 'nearby/rose-garden-silk-farm', 'itineraries/lake-viewpoints-sunset', 'transport/parking'],
  en: {
    title: "Lady's Seat from Yercaud Lake: route, timing and sunset plan",
    description:
      "Lady's Seat is a cliff-side viewpoint on the road out of Yercaud. How far it is from the lake, why light matters more than arrival time, and how to plan the return in the dark.",
    kicker: 'Nearby places',
    h1: "Getting to Lady's Seat from Yercaud Lake: a viewpoint built around the light",
    lead:
      "Lady's Seat is the best-known of the Yercaud viewpoints, on the cliff edge of the ghat side. The trip is short from the lake, but what makes or breaks it is the light — and how you get back once the sun has gone.",
    facts: [
      { label: 'Type', value: 'Cliff-side viewpoint with a wide valley view' },
      { label: 'From the lake', value: 'Short vehicle ride out of town' },
      { label: 'Best light', value: 'Late afternoon towards sunset' },
      { label: 'Return', value: 'Plan transport before dark — confirm it, do not assume it' }
    ],
    blocks: [
      { kind: 'h2', text: 'What Lady’s Seat is' },
      {
        kind: 'p',
        text:
          'Lady’s Seat is a viewpoint on the cliff edge of the Yercaud hills, looking out over the valley and the ghat road below. It is one of the standard stops on a Yercaud sightseeing loop and is usually paired with the nearby Gent’s Seat and Children’s Seat viewpoints.'
      },
      { kind: 'h2', text: 'Getting there from the lake' },
      {
        kind: 'p',
        text:
          'The viewpoints sit on the road out of the town centre, beyond the lake area. Most visitors reach them by vehicle or auto-rickshaw rather than on foot, because the road climbs and curves.'
      },
      {
        kind: 'table',
        caption: 'Planning the trip from the lake',
        head: ['Question', 'Practical answer'],
        rows: [
          ['How to get there', 'Vehicle or auto-rickshaw from the lake area'],
          ['On foot?', 'Possible for confident walkers, but the road climbs and curves'],
          ['When to go', 'Late afternoon, so the light is soft and the valley is visible'],
          ['Return trip', 'Arrange it in advance; do not rely on finding a ride after sunset']
        ]
      },
      {
        kind: 'note',
        text:
          'Do not treat the exact road distance as fixed. Published figures for Yercaud viewpoints vary, and the useful number is the travel time on the day, not a figure from a listing.'
      },
      { kind: 'h2', text: 'Why the light decides the visit' },
      {
        kind: 'p',
        text:
          'A cliff viewpoint depends on visibility. On a clear evening the valley and the winding road below are the point of the trip. In mist or low cloud — common in the hills — you can arrive to a white wall, with nothing to see.'
      },
      {
        kind: 'list',
        items: [
          'Late afternoon gives warmer light and a better chance of a clear valley.',
          'Midday light is harsh and the view flatter.',
          'Mist and cloud can close the view at any time of day.',
          'Sunset is popular, so expect other visitors and traffic at the same time.'
        ]
      },
      { kind: 'h2', text: 'A sensible plan' },
      {
        kind: 'steps',
        items: [
          'Start at Yercaud Lake and finish the boat house while the day is still bright.',
          'Head to the viewpoints in the late afternoon, after any rain has cleared.',
          'Check the view before committing — if it is misty, wait briefly or move on.',
          'Leave before full dark, with your return transport already arranged.',
          'If you are staying in town, combine the return with a meal rather than a second trip.'
        ]
      },
      { kind: 'h2', text: 'Safety and courtesy' },
      {
        kind: 'list',
        items: [
          'Stay behind any barrier or railing at the cliff edge; do not step onto loose rock.',
          'Supervise children closely — these are unguarded drops, not a fenced park.',
          'Do not block the road when parking; space at viewpoints is limited.',
          'Take your rubbish away; the district runs a plastic-free programme.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Whether the sky is clear enough for a valley view, or the ridge is sitting in mist.',
          'That your return vehicle is arranged, since rides thin out after sunset.',
          'Where stopping and parking are permitted along the viewpoint road.',
          'That you have a torch or phone light for the walk back to the vehicle after dusk.'
        ]
      }
    ],
    faq: [
      {
        q: 'Is Lady’s Seat worth visiting at sunset?',
        a: 'Yes, if the sky is clear — the valley view in soft light is the reason to go. If it is misty, the view can disappear entirely, so keep the plan flexible.'
      },
      {
        q: 'Can we walk from Yercaud Lake to Lady’s Seat?',
        a: 'It is a climbing, curving road rather than a level walk. Confident walkers can do it in daylight, but most visitors take a vehicle, and you should arrange the return trip rather than assume a ride will be available.'
      },
      {
        q: 'How long should we allow?',
        a: 'The visit itself is short — you look, take photographs and leave. Allow more for the travel out and back than for the stop itself.'
      },
      {
        q: 'Is there an entry fee at the viewpoints?',
        a: 'No verified current entry fee for these viewpoints was obtained. Treat any charge you are asked for as something to confirm locally, and do not assume one published figure covers all three stops.'
      },
      {
        q: 'What should we carry for an evening visit?',
        a: 'Plan for a short walk on uneven ground at the cliff edge: sturdy footwear, a light layer for the evening chill, and a torch or phone light for the return after dusk. Keep to any barrier or railing.'
      }
    ],
    sourceIds: ['districtLake', 'districtPlaces', 'tnTourismBrochure', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு ஏரியிலிருந்து லேடீஸ் சீட்: வழி, நேரம், சூரிய அஸ்தமனத் திட்டம்',
    description:
      'லேடீஸ் சீட் ஏற்காட்டிலிருந்து வெளியேறும் சாலையில் உள்ள பாறை முனைக் காட்சி இடம். ஏரியிலிருந்து எவ்வளவு தொலைவு, அடையும் நேரத்தை விட வெளிச்சம் ஏன் முக்கியம், இருளில் திரும்பும் வழியை எப்படித் திட்டமிடுவது.',
    kicker: 'அருகிலுள்ள இடங்கள்',
    h1: 'ஏற்காடு ஏரியிலிருந்து லேடீஸ் சீட்டிற்குச் செல்வது: வெளிச்சத்தை மையமாகக் கொண்ட காட்சி இடம்',
    lead:
      'ஏற்காடு காட்சி முனைகளில் மிகவும் அறியப்பட்டது லேடீஸ் சீட்; இது மலைச் சரிவின் பாறை விளிம்பில் அமைந்துள்ளது. ஏரியிலிருந்து பயணம் குறுகியது; ஆனால் இதை வெற்றியாகவோ தோல்வியாகவோ தீர்மானிப்பது வெளிச்சமும், சூரியன் மறைந்த பிறகு நீங்கள் எப்படித் திரும்புகிறீர்கள் என்பதும்தான்.',
    facts: [
      { label: 'வகை', value: 'பரந்த பள்ளத்தாக்குக் காட்சியுடன் பாறை முனைக் காட்சி இடம்' },
      { label: 'ஏரியிலிருந்து', value: 'நகரத்திலிருந்து வெளியேறும் குறுகிய வாகனப் பயணம்' },
      { label: 'சிறந்த வெளிச்சம்', value: 'பிற்பகல் தாமதம் முதல் சூரிய அஸ்தமனம் வரை' },
      { label: 'திரும்பும் வழி', value: 'இருளுக்கு முன் போக்குவரத்தை உறுதி செய்யுங்கள் — கருத வேண்டாம்' }
    ],
    blocks: [
      { kind: 'h2', text: 'லேடீஸ் சீட் என்பது என்ன' },
      {
        kind: 'p',
        text:
          'லேடீஸ் சீட், ஏற்காடு மலைப்பகுதியின் பாறை விளிம்பில் அமைந்த ஒரு காட்சி இடம்; இது கீழே உள்ள பள்ளத்தாக்கையும் மலைச் சாலையையும் நோக்கியிருக்கிறது. இது ஏற்காடு சுற்றுலாச் சுற்றின் வழக்கமான நிறுத்தங்களில் ஒன்று; பொதுவாக அருகிலுள்ள ஜென்ட்ஸ் சீட் மற்றும் சில்ட்ரன்ஸ் சீட் காட்சி முனைகளுடன் இணைக்கப்படுகிறது.'
      },
      { kind: 'h2', text: 'ஏரியிலிருந்து அங்கு செல்வது' },
      {
        kind: 'p',
        text:
          'இந்தக் காட்சி முனைகள் ஏரிப் பகுதிக்கு அப்பால், நகர மையத்திலிருந்து வெளியேறும் சாலையில் உள்ளன. சாலை ஏறி வளைவதால், பெரும்பாலான பயணிகள் நடந்து செல்வதற்குப் பதிலாக வாகனம் அல்லது ஆட்டோவில் செல்கிறார்கள்.'
      },
      {
        kind: 'table',
        caption: 'ஏரியிலிருந்து பயணத்தைத் திட்டமிடுதல்',
        head: ['கேள்வி', 'நடைமுறைப் பதில்'],
        rows: [
          ['எப்படிச் செல்வது', 'ஏரிப் பகுதியிலிருந்து வாகனம் அல்லது ஆட்டோ'],
          ['நடந்து செல்லலாமா?', 'நம்பிக்கையுள்ள நடைபயணிகளுக்குச் சாத்தியம்; ஆனால் சாலை ஏறி வளைகிறது'],
          ['எப்போது செல்வது', 'பிற்பகல் தாமதம்; வெளிச்சம் மென்மையாகவும் பள்ளத்தாக்கு தெரியும்படியும் இருக்கும்'],
          ['திரும்பும் பயணம்', 'முன்பே ஏற்பாடு செய்யுங்கள்; சூரிய அஸ்தமனத்திற்குப் பின் வாகனம் கிடைக்கும் எனக் கருத வேண்டாம்']
        ]
      },
      {
        kind: 'note',
        text:
          'சாலைத் தொலைவின் துல்லியமான எண்ணை நிலையானதாகக் கருத வேண்டாம். ஏற்காடு காட்சி முனைகளுக்கான வெளியிடப்பட்ட எண்கள் வேறுபடுகின்றன; பயனுள்ள எண் என்பது அன்றைய பயண நேரமே, பட்டியலின் எண் அல்ல.'
      },
      { kind: 'h2', text: 'வெளிச்சம் ஏன் வருகையைத் தீர்மானிக்கிறது' },
      {
        kind: 'p',
        text:
          'பாறை முனைக் காட்சி இடம் பார்வைத் தெளிவைப் பொறுத்தது. தெளிவான மாலையில் கீழே உள்ள பள்ளத்தாக்கும் வளைந்து செல்லும் சாலையும் பயணத்தின் நோக்கம். மலைப்பகுதியில் பொதுவான பனிமூட்டம் அல்லது தாழ்வான மேகம் இருந்தால், எதையும் பார்க்க முடியாமல் வெண்மையான திரை ஒன்றே கிடைக்கலாம்.'
      },
      {
        kind: 'list',
        items: [
          'பிற்பகல் தாமதம் வெதுவெதுப்பான வெளிச்சத்தையும் தெளிவான பள்ளத்தாக்குக்கான வாய்ப்பையும் தரும்.',
          'நண்பகல் வெளிச்சம் கடுமையானது; காட்சி தட்டையாகத் தோன்றும்.',
          'பனிமூட்டமும் மேகமும் நாளின் எந்த நேரத்திலும் காட்சியை மறைக்கலாம்.',
          'சூரிய அஸ்தமனம் பிரபலமானது; எனவே அதே நேரத்தில் மற்ற பயணிகளும் போக்குவரத்தும் இருக்கும்.'
        ]
      },
      { kind: 'h2', text: 'நல்ல திட்டம்' },
      {
        kind: 'steps',
        items: [
          'ஏற்காடு ஏரியில் தொடங்கி, நாள் இன்னும் வெளிச்சமாக இருக்கும்போதே படகு இல்லத்தை முடியுங்கள்.',
          'மழை விலகிய பின் பிற்பகல் தாமதத்தில் காட்சி முனைகளுக்குச் செல்லுங்கள்.',
          'செல்வதை உறுதி செய்யும் முன் காட்சியைப் பாருங்கள் — பனிமூட்டமாக இருந்தால் சிறிது காத்திருங்கள் அல்லது தொடருங்கள்.',
          'முழு இருளுக்கு முன் புறப்படுங்கள்; திரும்பும் போக்குவரத்தை ஏற்கனவே ஏற்பாடு செய்து வையுங்கள்.',
          'நகரத்தில் தங்கியிருந்தால், திரும்பும் வழியில் இரண்டாவது பயணத்திற்குப் பதிலாக உணவுடன் இணையுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'பாதுகாப்பும் பண்பும்' },
      {
        kind: 'list',
        items: [
          'பாறை விளிம்பில் உள்ள தடுப்பு அல்லது கம்பி அருகிலேயே நில்லுங்கள்; தளர்வான பாறையில் கால் வைக்க வேண்டாம்.',
          'குழந்தைகளை மிகக் கவனமாக மேற்பார்வை செய்யுங்கள் — இவை வேலி அமைக்கப்படாத செங்குத்தான இறக்கங்கள், பூங்கா அல்ல.',
          'நிறுத்தும்போது சாலையை மறிக்க வேண்டாம்; காட்சி முனைகளில் இடம் குறைவு.',
          'கழிவுகளைத் திரும்பக் கொண்டு வாருங்கள்; மாவட்டம் நெகிழியில்லா திட்டத்தை நடத்துகிறது.'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'பள்ளத்தாக்குக் காட்சிக்கு வானம் போதுமான தெளிவாக உள்ளதா, அல்லது முகட்டு பனிமூட்டத்தில் உள்ளதா.',
          'சூரிய அஸ்தமனத்திற்குப் பின் வாகனங்கள் குறைந்துவிடும் என்பதால், திரும்பும் வாகனம் ஏற்பாடு செய்யப்பட்டுள்ளதா.',
          'காட்சி முனைச் சாலையில் எங்கே நிறுத்தவும் பார்க்கிங் செய்யவும் அனுமதி உள்ளது.',
          'இருள் படிந்த பின் வாகனத்திற்கு நடந்து செல்ல ஒரு டார்ச் அல்லது மொபைல் வெளிச்சம் உள்ளதா.'
        ]
      }
    ],
    faq: [
      {
        q: 'சூரிய அஸ்தமன நேரத்தில் லேடீஸ் சீட் செல்வது மதிப்புள்ளதா?',
        a: 'வானம் தெளிவாக இருந்தால் ஆம் — மென்மையான வெளிச்சத்தில் பள்ளத்தாக்குக் காட்சியே செல்வதற்கான காரணம். பனிமூட்டமாக இருந்தால் காட்சி முழுவதுமாக மறையலாம்; எனவே திட்டத்தை மாற்றக்கூடியதாக வையுங்கள்.'
      },
      {
        q: 'ஏற்காடு ஏரியிலிருந்து லேடீஸ் சீட்டிற்கு நடந்து செல்லலாமா?',
        a: 'இது சமதளமான நடை அல்ல, ஏறி வளைந்து செல்லும் சாலை. நம்பிக்கையுள்ள நடைபயணிகள் பகல் நேரத்தில் செல்லலாம்; ஆனால் பெரும்பாலானோர் வாகனத்தில் செல்கிறார்கள், திரும்பும் பயணத்தைக் கருதாமல் முன்பே ஏற்பாடு செய்யுங்கள்.'
      },
      {
        q: 'எவ்வளவு நேரம் ஒதுக்க வேண்டும்?',
        a: 'வருகை குறுகியது — பார்த்து, புகைப்படம் எடுத்து, புறப்படுவீர்கள். நிறுத்தத்தை விட வெளியே சென்று திரும்பும் பயணத்திற்கு அதிக நேரம் ஒதுக்குங்கள்.'
      },
      {
        q: 'காட்சி முனைகளில் நுழைவுக் கட்டணம் உள்ளதா?',
        a: 'இந்தக் காட்சி முனைகளுக்கான தற்போதைய நுழைவுக் கட்டணம் எதுவும் உறுதி செய்யப்படவில்லை. கேட்கப்படும் கட்டணத்தை உள்ளூரில் உறுதி செய்ய வேண்டியதாகக் கருதுங்கள்; ஒரு வெளியிடப்பட்ட எண் மூன்று நிறுத்தங்களுக்கும் பொருந்தும் எனக் கருத வேண்டாம்.'
      },
      {
        q: 'மாலை வருகைக்கு என்ன எடுத்துச் செல்ல வேண்டும்?',
        a: 'பாறை விளிம்பில் சமமற்ற தரையில் ஒரு குறுகிய நடைக்குத் தயாராகுங்கள்: உறுதியான காலணி, மாலைக் குளிருக்கு ஒரு மெல்லிய அங்கி, இருள் படிந்த பின் திரும்ப ஒரு டார்ச் அல்லது மொபைல் வெளிச்சம். தடுப்பு அல்லது கம்பிக்குள் இருங்கள்.'
      }
    ],
    sourceIds: ['districtLake', 'districtPlaces', 'tnTourismBrochure', 'googleMaps']
  }
};

export default page;
