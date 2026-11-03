import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'itineraries/two-days-from-lake',
  family: 'itineraries',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'Both days are based at the Yercaud Lake & Boat House area: day one is a walk from the lake around the town circle, and day two is a vehicle run out to the hill-view side. Where you sleep decides how much of day one is spent in a vehicle. All distances and timings are approximate and should be confirmed on the day.',
    ta: 'இரண்டு நாட்களும் தங்குமிடமான ஏற்காடு ஏரி மற்றும் படகு இல்லப் பகுதியை மையமாகக் கொண்டவை: முதல் நாள் ஏரியிலிருந்து நகர வளையம் வரை நடை; இரண்டாம் நாள் மலைக்காட்சிப் பகுதிக்கு ஒரு வாகனச் சுற்று. எங்கே தங்குகிறீர்கள் என்பது முதல் நாளின் வாகன நேரத்தைத் தீர்மானிக்கும். இங்குள்ள தூரங்களும் நேரங்களும் தோராயமானவை; அன்று உறுதிப்படுத்த வேண்டும்.'
  },
  related: ['visit/best-time', 'nearby/rose-garden-silk-farm', 'nearby/pagoda-point', 'food/family-friendly-meals', 'transport/ghat-road-driving'],
  en: {
    title: 'Two days from Yercaud Lake: zones, where to stay, day two',
    description:
      'Two days at Yercaud Lake: how to split the area, where to base yourself, why day two changes direction, and how much time to leave for the ghat road.',
    kicker: 'Itineraries',
    h1: 'Two days based at the lake: split the area, not the clock',
    lead:
      'With two days you stop rushing and start choosing. The sensible split is by area, not by hour: one day for the lake and the town circle, one day for the hill-view side. Where you sleep decides how much of day one you spend in a vehicle.',
    facts: [
      { label: 'Suits', value: 'A relaxed overnight pair of days' },
      { label: 'Time budget (estimate)', value: 'Two half-to-full days around one night' },
      { label: 'Base', value: 'Near the lake or town centre for day one' },
      { label: 'Day two', value: 'Travel to a different side of the hills' }
    ],
    blocks: [
      { kind: 'h2', text: 'Day one: arrive at the lake while the day is fresh' },
      {
        kind: 'p',
        text:
          'Reach the lake in the morning of day one and use the boat counter before any queue builds — boats are normally described as pedal, rowing and motor, and both official lists are dated. If the wait is long, walk the shore and come back once rather than spending the whole first morning in line.'
      },
      { kind: 'h2', text: 'Where to base yourself decides day one' },
      {
        kind: 'list',
        items: [
          'Choose a base within walking reach of the lake if day one is to be unhurried.',
          'Check that eating options are near your base, so meals do not become drives.',
          'Keep the same base for both nights; moving hotels wastes a morning in repacking and travel.',
          'Confirm parking at the base before booking, especially for a weekend.'
        ]
      },
      {
        kind: 'table',
        caption: 'Two days split by area',
        head: ['Day', 'Area', 'Where to base yourself', 'Why'],
        rows: [
          ['Day one', 'Lake and town circle', 'Near the lake or town centre, so you can walk', 'Boarding, parks and gardens are close together'],
          ['Day two', 'Hill-view side to the east', 'Same base; travel out by vehicle', 'A second area, not a repeat of day one']
        ]
      },
      { kind: 'h2', text: 'Day two: change direction on purpose' },
      {
        kind: 'p',
        text:
          'Day two should not repeat day one. The hill-view side — Lady’s Seat, Pagoda Point about 5 km out, and Kiliyur Falls about 3 km out after the monsoon — is best kept whole for day two, reached in one vehicle run and finished in daylight. Take lunch in town between the two halves, and let day two be the earlier start if the weather looks better that morning; neither day should try to hold both the lake and the whole hill-view side.'
      },
      {
        kind: 'note',
        text:
          'If one day turns wet, swap it for the town side: cafes, covered stops and the lake in a break, and keep the viewpoints for the drier day. Leave a clear margin on the last day for the ghat road back to Salem, which is quoted at roughly 30–35 km and is slower than the distance suggests.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'That your base is within walking reach of the lake for day one.',
          'The wait at the boat counter on the morning you plan to ride.',
          'The weather for the day you have set aside for the hill-view side.',
          'A clear margin on the last day for the ghat road back down.'
        ]
      },
      {
        kind: 'note',
        text:
          'Every distance, timing and quotation on this page is a planning estimate; re-check the boat, the weather and the hillside roads on the day before you commit.'
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Making day two a repeat of day one instead of heading to the hill-view side.',
          'Changing hotels between nights and losing a morning to repacking.',
          'Booking a base far from the lake, so day one becomes a series of drives.',
          'Cramming both the lake and the whole hill-view side into a single day.'
        ]
      }
    ],
    faq: [
      {
        q: 'Should we change hotels between the two days?',
        a: 'No. One base for both nights is simpler and saves a morning. The hills are compact, so a single base still lets you reach both sides.'
      },
      {
        q: 'Is two days enough for the whole of Yercaud?',
        a: 'It is enough for the lake, the town circle and one hill-view run without rushing. More places are listed than two days can cover properly.'
      },
      {
        q: 'Which day for the boat?',
        a: 'Whichever morning starts drier and earlier. Take the boat on day one if the counter is calm; otherwise try once on day two rather than forcing either day.'
      },
      {
        q: 'How should we split the two days?',
        a: 'By area, not by hour: day one for the lake and the town circle, day two for the hill-view side to the east. Neither day should try to hold both.'
      },
      {
        q: 'What if one of the days is wet?',
        a: 'Swap that day for the town side — cafes, covered stops and the lake in a break — and keep the viewpoints for the drier day; leave a margin for the ghat road back to Salem.'
      }
    ],
    sourceIds: ['districtLake', 'districtPlaces', 'tnSericulture', 'googleMaps', 'openMeteo']
  },
  ta: {
    title: 'ஏற்காடு ஏரியிலிருந்து இரண்டு நாட்கள்: பகுதிகள், தங்குமிடம், இரண்டாம் நாள்',
    description:
      'ஏற்காடு ஏரியில் இரண்டு நாட்கள்: பகுதியை எப்படிப் பிரிப்பது, எங்கே தங்குவது, இரண்டாம் நாள் திசையை மாற்றுவது ஏன், மலைச் சாலைக்கு எவ்வளவு நேரம் வைப்பது.',
    kicker: 'பயணத் திட்டங்கள்',
    h1: 'ஏரியை மையமாகக் கொண்டு இரண்டு நாட்கள்: நேரத்தை அல்ல, பகுதியைப் பிரியுங்கள்',
    lead:
      'இரண்டு நாட்கள் கிடைத்தால் அவசரம் குறைந்து தேர்வு தொடங்குகிறது. சரியான பிரிவு நேரத்தின்படி அல்ல, பகுதியின்படி: ஒரு நாள் ஏரி மற்றும் நகர வளையத்திற்கு, ஒரு நாள் மலைக்காட்சிப் பகுதிக்கு. எங்கே தங்குகிறீர்கள் என்பதே முதல் நாளின் வாகன நேரத்தைத் தீர்மானிக்கும்.',
    facts: [
      { label: 'பொருத்தம்', value: 'ஓரிரவு தங்கி நிதானமாகச் செல்லும் இரண்டு நாட்கள்' },
      { label: 'நேரம் (கணிப்பு)', value: 'ஒரு இரவின் இரு பக்கமும் இரண்டு அரை–முழு நாட்கள்' },
      { label: 'தங்குமிடம்', value: 'முதல் நாளுக்கு ஏரி அல்லது நகர மையத்திற்கு அருகில்' },
      { label: 'இரண்டாம் நாள்', value: 'மலையின் வேறு பகுதிக்குச் செல்லுங்கள்' }
    ],
    blocks: [
      { kind: 'h2', text: 'முதல் நாள்: நாள் இளமையாக இருக்கும்போது ஏரிக்கு வாருங்கள்' },
      {
        kind: 'p',
        text:
          'முதல் நாள் காலையில் ஏரியை அடைந்து, வரிசை நீளும் முன் படகு கவுண்டரைப் பயன்படுத்துங்கள் — படகுகள் பொதுவாக மிதிபடகு, துடுப்புப் படகு, இயந்திரப் படகு எனக் குறிப்பிடப்படுகின்றன; இரண்டு அதிகாரப்பூர்வ பட்டியல்களும் தேதியுள்ளவை. காத்திருப்பு நீளமெனில், முதல் காலை முழுவதையும் வரிசையில் செலவிடாமல் கரையில் நடந்து ஒருமுறை திரும்பி வாருங்கள்.'
      },
      { kind: 'h2', text: 'எங்கே தங்குகிறீர்கள் என்பது முதல் நாளைத் தீர்மானிக்கும்' },
      {
        kind: 'list',
        items: [
          'முதல் நாள் அவசரமின்றி இருக்க வேண்டுமெனில் ஏரிக்கு நடக்கக்கூடிய தூரத்தில் தங்குமிடத்தைத் தேர்ந்தெடுங்கள்.',
          'உணவு வசதிகள் உங்கள் தங்குமிடத்திற்கு அருகில் உள்ளதா எனப் பாருங்கள்; உணவு ஒரு வாகனப் பயணமாக மாறக் கூடாது.',
          'இரண்டு இரவும் ஒரே தங்குமிடத்தில் இருங்கள்; ஹோட்டலை மாற்றினால் ஒரு காலை பொதி கட்டுவதிலும் பயணத்திலும் வீணாகும்.',
          'முன்பதிவுக்கு முன் தங்குமிடத்தில் நிறுத்த வசதியை உறுதி செய்யுங்கள், குறிப்பாக வார இறுதியில்.'
        ]
      },
      {
        kind: 'table',
        caption: 'பகுதியின்படி பிரிக்கப்பட்ட இரண்டு நாட்கள்',
        head: ['நாள்', 'பகுதி', 'எங்கே தங்குவது', 'ஏன்'],
        rows: [
          ['முதல் நாள்', 'ஏரி மற்றும் நகர வளையம்', 'ஏரி அல்லது நகர மையத்திற்கு அருகில் — நடந்து செல்ல', 'ஏறுமிடம், பூங்காக்கள், தோட்டங்கள் நெருக்கம்'],
          ['இரண்டாம் நாள்', 'கிழக்குப் பக்க மலைக்காட்சிப் பகுதி', 'அதே தங்குமிடம்; வாகனத்தில் செல்லுங்கள்', 'முதல் நாளின் மறுபடி அல்ல, வேறு பகுதி']
        ]
      },
      { kind: 'h2', text: 'இரண்டாம் நாள்: வேண்டுமென்றே திசையை மாற்றுங்கள்' },
      {
        kind: 'p',
        text:
          'இரண்டாம் நாள் முதல் நாளின் மறுபடியாக இருக்கக் கூடாது. மலைக்காட்சிப் பகுதி — லேடீஸ் சீட், சுமார் 5 கிமீ தொலைவில் பகோடா பாயிண்ட், பருவமழைக்குப் பின் சுமார் 3 கிமீ தொலைவில் கிளியூர் அருவி — இரண்டாம் நாளுக்கு முழுமையாக வைத்து, ஒரே வாகனச் சுற்றில் அடைந்து பகலிலேயே முடிப்பது நல்லது. இரு பகுதிகளுக்கு இடையே நகரத்தில் மதிய உணவை எடுத்துக்கொள்ளுங்கள்; அந்தக் காலை வானிலை சிறப்பாகத் தெரிந்தால் இரண்டாம் நாளைச் சற்று முன்னதாகவே தொடங்குங்கள். எந்த நாளும் ஏரியையும் முழு மலைக்காட்சிப் பகுதியையும் ஒன்றாகத் தாங்க முயற்சிக்கக் கூடாது.'
      },
      {
        kind: 'note',
        text:
          'ஒரு நாள் மழையாக மாறினால் அதை நகரப் பகுதிக்கு மாற்றுங்கள்: கஃபேக்கள், மூடிய நிறுத்தங்கள், இடைவேளையில் ஏரி; காட்சி முனைகளை வெயில் நாளுக்கு வைத்துக்கொள்ளுங்கள். கடைசி நாளில் சேலம் திரும்பும் மலைச் சாலைக்கு தெளிவான இடைவெளி வையுங்கள்; அது சுமார் 30–35 கிமீ எனக் குறிப்பிடப்படுகிறது, தொலைவு காட்டுவதை விட மெதுவானது.'
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'முதல் நாளுக்கு உங்கள் தங்குமிடம் ஏரிக்கு நடக்கக்கூடிய தூரத்தில் இருக்கிறதா.',
          'படகில் செல்லத் திட்டமிட்ட காலையில் கவுண்டரின் காத்திருப்பு.',
          'மலைக்காட்சிப் பகுதிக்கு ஒதுக்கிய நாளின் வானிலை.',
          'கடைசி நாளில் மலைச் சாலையிறங்கும் பயணத்திற்குத் தெளிவான இடைவெளி.'
        ]
      },
      {
        kind: 'note',
        text:
          'இந்தப் பக்கத்தில் உள்ள ஒவ்வொரு தூரமும், நேரமும், மேற்கோளும் ஒரு திட்டக் கணிப்பு; முடிவு செய்வதற்கு முன் அன்று படகு, வானிலை, மலைச் சாலைகளை மீண்டும் சரிபார்க்கவும்.'
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'மலைக்காட்சிப் பகுதிக்குச் செல்வதற்குப் பதிலாக, இரண்டாம் நாளை முதல் நாளின் மறுபடியாக ஆக்குவது.',
          'இரவுகளுக்கு இடையே ஹோட்டலை மாற்றி, ஒரு காலையைப் பொதி கட்டுவதில் இழப்பது.',
          'ஏரிக்குத் தொலைவில் தங்குமிடத்தை முன்பதிவு செய்து, முதல் நாளைத் தொடர்ச்சியான வாகனப் பயணங்களாக ஆக்குவது.',
          'ஏரியையும் முழு மலைக்காட்சிப் பகுதியையும் ஒரே நாளில் அடக்க முயற்சிப்பது.'
        ]
      }
    ],
    faq: [
      {
        q: 'இரண்டு நாட்களுக்கு இடையே ஹோட்டலை மாற்ற வேண்டுமா?',
        a: 'வேண்டாம். இரண்டு இரவும் ஒரே தங்குமிடம் எளிமையானது, ஒரு காலையைச் சேமிக்கும். மலைப் பகுதி சிறியது; ஒரே தங்குமிடத்திலிருந்தும் இரு பக்கங்களையும் அடையலாம்.'
      },
      {
        q: 'முழு ஏற்காட்டிற்கும் இரண்டு நாட்கள் போதுமா?',
        a: 'ஏரி, நகர வளையம், ஒரு மலைக்காட்சிச் சுற்று — இவற்றுக்கு அவசரமின்றிப் போதும். பட்டியலிடப்பட்ட இடங்கள் இரண்டு நாட்களில் சரியாக அடக்க முடியாத அளவு அதிகம்.'
      },
      {
        q: 'படகுக்கு எந்த நாள்?',
        a: 'வறண்டதாகவும் முன்னதாகவும் தொடங்கும் காலை எதுவோ அதுவே. கவுண்டர் அமைதியாக இருந்தால் முதல் நாளிலேயே படகை எடுங்கள்; இல்லையேல் இரண்டாம் நாளில் ஒருமுறை முயற்சி செய்யுங்கள், எந்த நாளையும் வலுக்கட்டாயமாக்க வேண்டாம்.'
      },
      {
        q: 'இரண்டு நாட்களை எப்படிப் பிரிக்க வேண்டும்?',
        a: 'நேரத்தின்படி அல்ல, பகுதியின்படி: முதல் நாள் ஏரி மற்றும் நகர வளையத்திற்கு, இரண்டாம் நாள் கிழக்குப் பக்க மலைக்காட்சிப் பகுதிக்கு. எந்த நாளும் இரண்டையும் தாங்க முயற்சிக்கக் கூடாது.'
      },
      {
        q: 'ஒரு நாள் மழையானால் என்ன செய்வது?',
        a: 'அந்த நாளை நகரப் பகுதிக்கு மாற்றுங்கள் — கஃபேக்கள், மூடிய நிறுத்தங்கள், இடைவேளையில் ஏரி; காட்சி முனைகளை வெயில் நாளுக்கு வைத்துக்கொள்ளுங்கள்; சேலம் திரும்பும் மலைச் சாலைக்கு இடைவெளி வையுங்கள்.'
      }
    ],
    sourceIds: ['districtLake', 'districtPlaces', 'tnSericulture', 'googleMaps', 'openMeteo']
  }
};

export default page;
