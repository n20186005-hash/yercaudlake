import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'itineraries/lake-viewpoints-sunset',
  family: 'itineraries',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'The afternoon starts at the Yercaud Lake & Boat House, then moves to the viewpoints by vehicle — both Lady’s Seat and Pagoda Point sit away from the lake, so neither is a walk. Distances and timings here are approximate; confirm the viewing conditions and your return on the day.',
    ta: 'இந்தப் பிற்பகல் ஏற்காடு ஏரி மற்றும் படகு இல்லத்தில் தொடங்கி, பின் வாகனத்தில் காட்சி முனைகளுக்குச் செல்கிறது — லேடீஸ் சீட்டும் பகோடா பாயிண்டும் ஏரியிலிருந்து தொலைவில் உள்ளன; இரண்டுமே நடந்து செல்லக்கூடியவை அல்ல. இங்குள்ள தூரங்களும் நேரங்களும் தோராயமானவை; அன்று காட்சி நிலையையும் திரும்பும் வழியையும் உறுதிப்படுத்த வேண்டும்.'
  },
  related: ['visit/photo-spots', 'nearby/ladys-seat', 'nearby/pagoda-point', 'transport/ghat-road-driving', 'food/snacks-tea-after-lake'],
  en: {
    title: 'Yercaud Lake to sunset viewpoints: an afternoon that ends early',
    description:
      'An afternoon-to-sunset route past Yercaud Lake viewpoints: which viewpoint to keep, which to drop, and the rule for returning before dark.',
    kicker: 'Itineraries',
    h1: 'From the lake to sunset: viewpoints, and a rule to leave before dark',
    lead:
      'This is a late-start plan: a short lake stop, then a vehicle run to the viewpoints for the best light of the day. There is one firm rule and one honest warning — leave the viewpoint while it is still light, and do not expect a boat at sunset, because one is not promised.',
    facts: [
      { label: 'Suits', value: 'Photographers and late risers' },
      { label: 'Time budget (estimate)', value: 'Early afternoon to just before dusk' },
      { label: 'Needs a vehicle', value: 'Lady’s Seat and Pagoda Point' },
      { label: 'Do not assume', value: 'A sunset boat, or a clear view' }
    ],
    blocks: [
      { kind: 'h2', text: 'Start at the lake, but do the boat now, not later' },
      {
        kind: 'p',
        text:
          'Give the lake a short look early in the afternoon and, if you want a boat at all, attempt it here and now. The general listing runs about 09:00–18:00, and a sunset boat is not something to plan for — operation is not guaranteed at any hour, and least of all late in the day. Treat the lake as a brief stop before the viewpoints.'
      },
      { kind: 'h2', text: 'Choose one viewpoint, not three' },
      {
        kind: 'list',
        items: [
          'The two named hill viewpoints are a distance apart: Lady’s Seat is a natural rock viewpoint, and Pagoda Point is listed about 5 km from town on the eastern side, looking over Salem and the winding ghat road.',
          'Both sit away from the lake, so reaching either needs a vehicle — do not walk.',
          'Pick one as your sunset stop and commit early; trying for both in the golden hour means arriving at neither in good light.',
          'Keep your vehicle close, agree the departure time, and have a plan B if cloud rolls in — a return to the lake or a town cafe.'
        ]
      },
      { kind: 'h2', text: 'An afternoon-to-sunset outline' },
      {
        kind: 'table',
        caption: 'Afternoon to sunset (estimates, move earlier if the sky turns early)',
        head: ['Block (estimate)', 'What to do', 'Trade-off'],
        rows: [
          ['Early afternoon', 'Short lake stop; take any boat now if you want one at all', 'A sunset boat is not promised'],
          ['Mid-afternoon', 'Drive to one viewpoint — Lady’s Seat or Pagoda Point, not both', 'Each viewpoint costs travel time'],
          ['Late afternoon', 'Stay for the light with the vehicle close by', 'Cloud or haze can cancel the view'],
          ['Before dark', 'Leave the viewpoint and start back', 'Hill roads after dark are the real risk']
        ]
      },
      { kind: 'h2', text: 'Eat and rest before the drive' },
      {
        kind: 'note',
        text:
          'Take a late lunch or a snack before you leave the lake so you are not hungry on a cold hillside at dusk. The return rule is firm: begin the drive back before dark, because the hill roads are the part you cannot see through. If the weather clouds over, the view disappears entirely — accept it, drop the viewpoint and return early rather than waiting for a sunset that may never show.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Which single viewpoint you will commit to for the sunset stop.',
          'Whether cloud or haze has already closed the view.',
          'The departure time, and that your vehicle is close by.',
          'That you can begin the drive back while it is still light.'
        ]
      },
      {
        kind: 'note',
        text:
          'The timings, distances and view conditions on this page are estimates; confirm the light, the weather and your return on the day, as cloud can cancel a view without warning.'
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Trying for two viewpoints in the golden hour and arriving at neither in good light.',
          'Waiting past dark on a cloudy evening for a sunset that may never appear.',
          'Planning a boat for sunset, when operation is not guaranteed late in the day.',
          'Walking to Lady’s Seat or Pagoda Point; both sit away from the lake and need a vehicle.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can we take a boat at sunset?',
        a: 'Do not plan for it. Boat operation is not guaranteed at any hour, and least of all late. If a ride matters, take it in the afternoon at the counter.'
      },
      {
        q: 'Which viewpoint is best?',
        a: 'Both are valid; the point is to pick one. Lady’s Seat is a natural rock viewpoint and Pagoda Point is about 5 km out. One good viewpoint beats arriving at two in the dark.'
      },
      {
        q: 'Is it safe to drive back after sunset?',
        a: 'Begin the return before dark. The ghat road is slower than the distance suggests and harder to judge in low light or rain.'
      },
      {
        q: 'Should we visit both viewpoints?',
        a: 'No — pick one as your sunset stop and commit early; trying for both in the golden hour means arriving at neither in good light.'
      },
      {
        q: 'What if the sky clouds over?',
        a: 'Accept it, drop the viewpoint and return early rather than waiting for a sunset that may never show; a return to the lake or a town cafe is the fallback.'
      }
    ],
    sourceIds: ['tnTourismPagoda', 'districtLake', 'ttdcBooking', 'openMeteo', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு ஏரியிலிருந்து சூரிய அஸ்தமனக் காட்சி முனைகள்: முன்னதாக முடியும் பிற்பகல்',
    description:
      'ஏற்காடு ஏரிக் காட்சி முனைகள் வழியாகப் பிற்பகல் முதல் அஸ்தமனம் வரை: எந்தக் காட்சி முனையை வைத்துக்கொள்வது, எதை விடுவது, இருளுக்கு முன் திரும்ப வேண்டிய விதி.',
    kicker: 'பயணத் திட்டங்கள்',
    h1: 'ஏரியிலிருந்து அஸ்தமனம் வரை: காட்சி முனைகள், இருளுக்கு முன் கிளம்ப வேண்டிய விதி',
    lead:
      'இது தாமதமாகத் தொடங்கும் திட்டம்: ஒரு குறுகிய ஏரி நிறுத்தம், பின் நாளின் சிறந்த வெளிச்சத்திற்காகக் காட்சி முனைகளுக்கு ஒரு வாகனச் சுற்று. ஒரு உறுதியான விதியும் ஒரு நேர்மையான எச்சரிக்கையும் உண்டு — வெளிச்சம் இருக்கும்போதே காட்சி முனையை விட்டு வெளியேறுங்கள்; அஸ்தமனத்தில் படகு எதிர்பார்க்க வேண்டாம், அது உறுதி அல்ல.',
    facts: [
      { label: 'பொருத்தம்', value: 'புகைப்படக் கலைஞர்கள் மற்றும் தாமதமாக எழுபவர்கள்' },
      { label: 'நேரம் (கணிப்பு)', value: 'பிற்பகல் முதல் இருள் வரை' },
      { label: 'வாகனம் தேவை', value: 'லேடீஸ் சீட் மற்றும் பகோடா பாயிண்ட்' },
      { label: 'கருத வேண்டாம்', value: 'அஸ்தமனப் படகு, அல்லது தெளிவான காட்சி' }
    ],
    blocks: [
      { kind: 'h2', text: 'ஏரியில் தொடங்குங்கள், ஆனால் படகை இப்போதே, பின்னர் அல்ல' },
      {
        kind: 'p',
        text:
          'பிற்பகல் முதலில் ஏரிக்கு ஒரு குறுகிய பார்வை கொடுங்கள்; படகு வேண்டுமானால், அதை இங்கே இப்போதே முயற்சி செய்யுங்கள். பொதுவான பதிவில் நேரம் சுமார் 09:00–18:00; அஸ்தமனப் படகைத் திட்டமிடக் கூடாது — எந்த நேரத்திலும் இயக்கம் உறுதி அல்ல, குறிப்பாக நாளின் இறுதியில். ஏரியைக் காட்சி முனைகளுக்கு முன் ஒரு குறுகிய நிறுத்தமாகக் கருதுங்கள்.'
      },
      { kind: 'h2', text: 'ஒரு காட்சி முனையைத் தேர்ந்தெடுங்கள், மூன்றை அல்ல' },
      {
        kind: 'list',
        items: [
          'குறிப்பிடப்படும் இரு மலைக் காட்சி முனைகளும் ஒன்றிலிருந்து ஒன்று தொலைவில் உள்ளன: லேடீஸ் சீட் இயற்கைப் பாறைக் காட்சிமுனை; பகோடா பாயிண்ட் நகரத்திலிருந்து சுமார் 5 கிமீ தொலைவில், மலையின் கிழக்குப் பக்கத்தில், சேலம் நகரத்தையும் முடிச்சு மலைச் சாலையையும் காணும் காட்சியுடன் உள்ளது.',
          'இரண்டுமே ஏரியிலிருந்து தொலைவில் உள்ளன; எனவே எதை அடையவும் ஒரு வாகனம் தேவை — நடந்து செல்ல வேண்டாம்.',
          'ஒன்றை அஸ்தமன நிறுத்தமாகத் தேர்ந்து முன்கூட்டியே முடிவு செய்யுங்கள்; பொன்னிற நேரத்தில் இரண்டையும் முயன்றால், எதிலும் நல்ல வெளிச்சத்தில் சேர முடியாது.',
          'வாகனத்தை அருகில் வைத்து, கிளம்பும் நேரத்தை முன்கூட்டியே ஒப்புக்கொள்ளுங்கள்; மேகம் சூழ்ந்தால் மாற்றுத் திட்டம் வையுங்கள் — ஏரிக்குத் திரும்புவது அல்லது ஒரு நகரக் கஃபே.'
        ]
      },
      { kind: 'h2', text: 'பிற்பகல் முதல் அஸ்தமனம் வரையிலான ஒரு சுருக்கம்' },
      {
        kind: 'table',
        caption: 'பிற்பகல் முதல் அஸ்தமனம் வரை (கணிப்புகள்; வானம் முன்னதாக இருளினால் இன்னும் முன்னதாக நகர்த்துங்கள்)',
        head: ['நேரப் பகுதி (கணிப்பு)', 'செய்ய வேண்டியது', 'சமநிலை இழப்பு'],
        rows: [
          ['பிற்பகல் முதல் பகுதி', 'குறுகிய ஏரி நிறுத்தம்; படகு வேண்டுமானால் இப்போதே எடுங்கள்', 'அஸ்தமனப் படகு உறுதி அல்ல'],
          ['பிற்பகல் நடுப்பகுதி', 'ஒரு காட்சி முனைக்குச் செல்லுங்கள் — லேடீஸ் சீட் அல்லது பகோடா பாயிண்ட், இரண்டும் அல்ல', 'ஒவ்வொரு காட்சி முனையும் பயண நேரம் எடுக்கும்'],
          ['பிற்பகல் பிற்பகுதி', 'வாகனம் அருகில் இருக்க, வெளிச்சத்திற்காகத் தங்குங்கள்', 'மேகமோ மூடுபனியோ காட்சியை அழிக்கலாம்'],
          ['இருளுக்கு முன்', 'காட்சி முனையை விட்டு, திரும்பத் தொடங்குங்கள்', 'இருளுக்குப் பின் மலைச் சாலையே உண்மையான ஆபத்து']
        ]
      },
      { kind: 'h2', text: 'பயணத்திற்கு முன் உணவும் ஓய்வும்' },
      {
        kind: 'note',
        text:
          'ஏரியை விட்டு வெளியேறும் முன் ஒரு தாமதமான மதிய உணவையோ சிற்றுண்டியையோ எடுத்துக்கொள்ளுங்கள்; குளிர்ந்த மலைச் சரிவில் இருளில் பசியுடன் இருக்க வேண்டாம். திரும்பும் விதி உறுதியானது: இருளுக்கு முன் திரும்பும் பயணத்தைத் தொடங்குங்கள்; ஏனெனில் மலைச் சாலைகள்தான் உங்களால் பார்க்க முடியாத பகுதி. வானிலை மேகமூட்டமாக மாறினால் காட்சி முழுவதுமாக மறைந்துவிடும் — அதை ஏற்றுக்கொண்டு, காட்சி முனையை விட்டுவிட்டு, ஒருவேளை வராமலே போகும் அஸ்தமனத்திற்காகக் காத்திராமல் முன்னதாகத் திரும்புங்கள்.'
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'அஸ்தமன நிறுத்தத்திற்கு நீங்கள் முடிவு செய்யும் அந்த ஒரு காட்சி முனை.',
          'மேகமோ மூடுபனியோ ஏற்கனவே காட்சியை மறைத்துவிட்டதா.',
          'கிளம்பும் நேரம், உங்கள் வாகனம் அருகில் உள்ளதா.',
          'இன்னும் வெளிச்சம் இருக்கும்போதே திரும்பும் பயணத்தைத் தொடங்க முடியுமா.'
        ]
      },
      {
        kind: 'note',
        text:
          'இந்தப் பக்கத்தில் உள்ள நேரங்கள், தூரங்கள், காட்சி நிலைமைகள் கணிப்புகள்; அன்று வெளிச்சம், வானிலை, திரும்பும் வழியை உறுதிப்படுத்துங்கள் — மேகம் எச்சரிக்கை இல்லாமல் காட்சியை அழிக்கலாம்.'
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'பொன்னிற நேரத்தில் இரண்டு காட்சி முனைகளை முயன்று, எதிலும் நல்ல வெளிச்சத்தில் சேராதது.',
          'வராமலே போகும் அஸ்தமனத்திற்காக, மேகமூட்டமான மாலையில் இருளுக்குப் பின் காத்திருப்பது.',
          'அஸ்தமனத்திற்குப் படகைத் திட்டமிடுவது; நாளின் இறுதியில் இயக்கம் உறுதி அல்ல.',
          'லேடீஸ் சீட் அல்லது பகோடா பாயிண்டிற்கு நடந்து செல்வது; இரண்டுமே ஏரியிலிருந்து தொலைவில், வாகனம் தேவை.'
        ]
      }
    ],
    faq: [
      {
        q: 'அஸ்தமனத்தில் படகு சவாரி செய்ய முடியுமா?',
        a: 'அதற்காகத் திட்டமிட வேண்டாம். எந்த நேரத்திலும் படகு இயக்கம் உறுதி அல்ல, குறிப்பாக நாளின் இறுதியில். சவாரி முக்கியமெனில் பிற்பகலில் கவுண்டரில் எடுத்துக்கொள்ளுங்கள்.'
      },
      {
        q: 'எந்தக் காட்சி முனை சிறந்தது?',
        a: 'இரண்டுமே பொருத்தமானவை; முக்கியமானது ஒன்றைத் தேர்ந்தெடுப்பதே. லேடீஸ் சீட் இயற்கைப் பாறைக் காட்சிமுனை; பகோடா பாயிண்ட் சுமார் 5 கிமீ தொலைவில். ஒரு நல்ல காட்சி முனை, இருளில் இரண்டை அடைவதை விடச் சிறந்தது.'
      },
      {
        q: 'அஸ்தமனத்திற்குப் பின் திரும்பிச் செல்வது பாதுகாப்பானதா?',
        a: 'இருளுக்கு முன் திரும்பத் தொடங்குங்கள். மலைச் சாலை தொலைவு காட்டுவதை விட மெதுவானது; மங்கிய வெளிச்சத்திலோ மழையிலோ மதிப்பிடுவது கடினம்.'
      },
      {
        q: 'இரண்டு காட்சி முனைகளுக்கும் செல்ல வேண்டுமா?',
        a: 'இல்லை — ஒன்றை அஸ்தமன நிறுத்தமாகத் தேர்ந்து முன்கூட்டியே முடிவு செய்யுங்கள்; பொன்னிற நேரத்தில் இரண்டையும் முயன்றால், எதிலும் நல்ல வெளிச்சத்தில் சேர முடியாது.'
      },
      {
        q: 'வானம் மேகமூட்டமானால் என்ன செய்வது?',
        a: 'அதை ஏற்றுக்கொண்டு, காட்சி முனையை விட்டுவிட்டு, ஒருவேளை வராமலே போகும் அஸ்தமனத்திற்காகக் காத்திராமல் முன்னதாகத் திரும்புங்கள்; ஏரிக்குத் திரும்புவதோ ஒரு நகரக் கஃபேயோ மாற்றுத் திட்டம்.'
      }
    ],
    sourceIds: ['tnTourismPagoda', 'districtLake', 'ttdcBooking', 'openMeteo', 'googleMaps']
  }
};

export default page;
