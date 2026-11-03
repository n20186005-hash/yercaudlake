import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'visit/best-time',
  family: 'visit',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake',
  fromLake: {
    en: 'This page is about the lake itself, so if you are already at Yercaud Lake & Boat House you are standing in the place it describes and no travel is needed. Days, seasons and conditions vary, so treat any timing as approximate and confirm it on the day.',
    ta: 'இந்தப் பக்கம் ஏரியைப் பற்றியதே; எனவே நீங்கள் ஏற்காடு ஏரி மற்றும் படகு இல்லத்தில் இருந்தால், இது விவரிக்கும் இடத்திலேயே நீங்கள் இருக்கிறீர்கள்; எந்தப் பயணமும் தேவையில்லை. நாட்களும் பருவங்களும் நிலைகளும் மாறுபடும்; எனவே எந்த நேரக் கணிப்பையும் தோராயமாகக் கருதி அன்று உறுதி செய்யுங்கள்.'
  },
  related: ['visit/lakeside-walk', 'visit/photo-spots', 'transport/ghat-road-driving', 'itineraries/rainy-day', 'nearby/kiliyur-falls'],
  en: {
    title: 'Yercaud Lake: when to visit and what each season is like',
    description:
      'What to weigh when choosing when to visit Yercaud Lake — heat, rain, mist and the water itself. One table maps each season to typical weather and what suits it.',
    kicker: 'Visiting the lake',
    h1: 'Choosing a time for the lake: season, weather and comfort',
    lead:
      'Yercaud sits at about 1,515 m, so the shelf is cooler than Salem below, but no month comes with a guarantee. The honest approach is to weigh what you want from the visit — a boat ride, a walk, a view — against the season and the day’s forecast, and to keep your plan adjustable.',
    facts: [
      { label: 'Altitude', value: 'About 1,515 m (district page)' },
      { label: 'Wettest periods', value: 'South-west and north-east monsoon' },
      { label: 'Busiest period', value: 'May Summer Festival' },
      { label: 'Weather source', value: 'Open-Meteo forecast (this site)' }
    ],
    blocks: [
      { kind: 'h2', text: 'There is no single best month' },
      {
        kind: 'p',
        text:
          'Each season trades one comfort for another: cool air for mist, dry ground for heat, rain-fed greenery for slippery paths. The table below describes what each period is generally like; it is a guide for planning, not a promise about any particular month or day.'
      },
      {
        kind: 'table',
        caption: 'Seasons at Yercaud Lake: typical weather and what suits it',
        head: ['Season', 'Typical weather', 'What suits it'],
        rows: [
          ['December–February', 'Cool, often misty mornings', 'Walking, viewpoints, unhurried sightseeing'],
          ['March–May', 'Warmer and drier; festival crowds in May', 'Early starts; the May festival programme'],
          ['June–September', 'Frequent rain and wind; often inside cloud', 'Waterfalls and greenery; flexible plans'],
          ['October–November', 'Heavier, thundery spells', 'Post-rain greenery; check conditions daily']
        ]
      },
      {
        kind: 'note',
        text:
          'A forecast, however good, does not establish that boats are running, that the water level is right or that a trail is open. Treat weather data as one input, not as a promise about the day.'
      },
      { kind: 'h2', text: 'Weather, water and the boat ride' },
      {
        kind: 'p',
        text:
          'The boat house is on an open lake, so wind and rain matter more there than in a sheltered park. A warm, still morning is generally the friendliest window; after heavy rain the lake can look full and fine while service is paused for safety. Warmth of the air says little about the water, and the water temperature is not published for swimming — and swimming is not part of a boat ticket anyway.'
      },
      { kind: 'h2', text: 'What to check on the day' },
      {
        kind: 'list',
        items: [
          'The day’s forecast for the lake, not for Salem town below.',
          'Whether the boat house is operating, at the counter or on the TTDC portal.',
          'Rain in the last day or two, which affects paths, steps and viewpoints.',
          'Mist timing: it can clear late and return early, so build in slack.',
          'Your own group — small children and older visitors feel the cold mornings most.'
        ]
      },
      {
        kind: 'list',
        items: [
          'Assuming the best month guarantees a good day — the day’s weather still decides.',
          'Planning for Salem’s weather while ignoring the cooler, mistier shelf at 1,515 m.',
          'Fixing every activity to one time slot instead of leaving room to move things around.',
          'Forgetting that boats can pause for wind or rain even when the shore stays open.',
          'Arriving in the May festival week expecting quiet weekdays, when crowds are at their peak.'
        ]
      },
      {
        kind: 'steps',
        items: [
          'Pick the season that matches what you want — walking, a boat ride or a view.',
          'Check the lake’s own forecast, not Salem’s, a day or two before.',
          'Confirm boating status at the boat house.',
          'Leave one flexible slot in the plan for a weather change.',
          'Re-check conditions on the morning itself before you commit.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Treating a good forecast as confirmation that boats are running.',
          'Settling on a date before knowing what you actually want from the visit.',
          'Ignoring how quickly mist can return after a clear morning.',
          'Planning a rigid schedule that leaves no room to wait out a shower.'
        ]
      }
    ],
    faq: [
      {
        q: 'What is the best time of year to visit Yercaud Lake?',
        a: 'There is no single best month. Cool, misty mornings and post-monsoon greenery suit walking and viewpoints; warmer, drier months suit early starts. Pick the season that matches what you want to do and check the day’s forecast.'
      },
      {
        q: 'Does rain stop the boating?',
        a: 'It can. Wind, rain or low visibility on the lake can pause rides even when the shore stays open. A forecast does not confirm whether boats are running; ask at the boat house.'
      },
      {
        q: 'When is the lake most crowded?',
        a: 'The May Summer Festival and weekends bring the largest crowds, with parking and boat queues at their hardest. Weekdays outside the festival are generally quieter, though no day is guaranteed.'
      },
      {
        q: 'Which season is best for a boat ride specifically?',
        a: 'Warmer, still mornings are generally the friendliest for time on the water, and the driest months suit them best. But wind and rain can pause rides at any time of year, and a forecast does not confirm that boats are running, so check at the boat house.'
      },
      {
        q: 'Does mist make the lake not worth visiting?',
        a: 'No. Mist is common on some mornings and can clear late or return early; it hides the far bank one minute and lifts the next. Build slack into the plan and treat mist as part of the hill weather rather than a reason to stay away.'
      }
    ],
    sourceIds: ['openMeteo', 'districtLake', 'tnTourismBrochure', 'wikipediaYercaud', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு ஏரி: எப்போது செல்வது, ஒவ்வொரு பருவமும் எப்படி இருக்கும்',
    description:
      'ஏற்காடு ஏரிக்கு எப்போது செல்வது எனத் தேர்ந்தெடுக்கும்போது வெப்பம், மழை, மூடுபனி, நீர் ஆகியவற்றை எப்படி எடைபோடுவது. ஒவ்வொரு பருவத்தையும் அதன் பொதுவான வானிலையுடனும் அதற்குப் பொருத்தமான செயலுடனும் ஒரு அட்டவணை காட்டுகிறது.',
    kicker: 'ஏரியைப் பார்வையிடுதல்',
    h1: 'ஏரிக்கு ஒரு நேரத்தைத் தேர்வு செய்வது: பருவம், வானிலை, வசதி',
    lead:
      'ஏற்காடு சுமார் 1,515 மீ உயரத்தில் அமைந்துள்ளது; எனவே கீழே உள்ள சேலத்தைவிட மேட்டுப்பகுதி குளிர்ச்சியானது. ஆனால் எந்த மாதமும் உறுதியுடன் வரவில்லை. நேர்மையான அணுகுமுறை என்பது, படகு சவாரி, நடை, காட்சி — உங்கள் வருகையிலிருந்து என்ன வேண்டும் என்பதைப் பருவத்துடனும் அன்றைய முன்னறிவிப்புடனும் எடைபோட்டு, திட்டத்தை மாற்றக்கூடியதாக வைத்திருப்பதே.',
    facts: [
      { label: 'உயரம்', value: 'சுமார் 1,515 மீ (மாவட்டப் பக்கம்)' },
      { label: 'அதிக மழை காலங்கள்', value: 'தென்மேற்கு மற்றும் வடகிழக்கு பருவமழை' },
      { label: 'அதிக கூட்டம்', value: 'மே மாத கோடை விழா' },
      { label: 'வானிலை மூலம்', value: 'Open-Meteo முன்னறிவிப்பு (இந்தத் தளம்)' }
    ],
    blocks: [
      { kind: 'h2', text: 'ஒரே ஒரு சிறந்த மாதம் என்பது இல்லை' },
      {
        kind: 'p',
        text:
          'ஒவ்வொரு பருவமும் ஒரு வசதிக்கு ஈடாக இன்னொன்றைத் தருகிறது: குளிர்ந்த காற்றுக்கு மூடுபனி, வறண்ட தரைக்கு வெப்பம், மழையால் வளர்ந்த பசுமைக்கு வழுக்கும் பாதைகள். கீழே உள்ள அட்டவணை ஒவ்வொரு காலமும் பொதுவாக எப்படி இருக்கும் என்பதை விவரிக்கிறது; இது திட்டமிடுதலுக்கான வழிகாட்டி, குறிப்பிட்ட ஒரு மாதம் அல்லது நாள் பற்றிய உறுதி அல்ல.'
      },
      {
        kind: 'table',
        caption: 'ஏற்காடு ஏரியின் பருவங்கள்: பொதுவான வானிலை மற்றும் அதற்குப் பொருத்தமானது',
        head: ['பருவம்', 'பொதுவான வானிலை', 'எதற்குப் பொருத்தம்'],
        rows: [
          ['டிசம்பர்–பிப்ரவரி', 'குளிர், பல நாட்கள் மூடுபனி காலை', 'நடை, காட்சி முனைகள், அவசரமில்லாத பார்வை'],
          ['மார்ச்–மே', 'வெப்பம், வறட்சி; மேயில் விழா கூட்டம்', 'அதிகாலைத் தொடக்கம்; மே விழா நிகழ்ச்சிகள்'],
          ['ஜூன்–செப்டம்பர்', 'அடிக்கடி மழையும் காற்றும்; பல நேரம் மேகத்துக்குள்', 'அருவிகள், பசுமை; நெகிழ்வான திட்டங்கள்'],
          ['அக்டோபர்–நவம்பர்', 'கனமான, இடியுடன் கூடிய மழை', 'மழைக்குப் பின் பசுமை; தினமும் நிலையைச் சரிபார்க்கவும்']
        ]
      },
      {
        kind: 'note',
        text:
          'எவ்வளவு நல்ல முன்னறிவிப்பாக இருந்தாலும், படகுகள் இயங்குகின்றன, நீர்மட்டம் சரியாக உள்ளது அல்லது பாதை திறந்திருக்கிறது என்பதை அது உறுதி செய்யாது. வானிலைத் தகவலை ஒரு உள்ளீடாகவே கருதுங்கள்; அந்த நாள் பற்றிய உறுதியாக அல்ல.'
      },
      { kind: 'h2', text: 'வானிலை, நீர் மற்றும் படகு சவாரி' },
      {
        kind: 'p',
        text:
          'படகு இல்லம் திறந்த ஏரியில் இருப்பதால், பாதுகாப்பான பூங்காவைவிட அங்கு காற்றும் மழையும் அதிகம் முக்கியம். வெப்பமான, அமைதியான காலை பொதுவாக மிகவும் ஏற்ற நேரம்; கனமழைக்குப் பின் ஏரி நிறைந்து நன்றாகத் தோன்றலாம், ஆனால் பாதுகாப்புக்காகச் சேவை நிறுத்தப்பட்டிருக்கலாம். காற்றின் வெப்பம் நீரைப் பற்றி எதுவும் சொல்லாது; நீச்சலுக்கான நீர் வெப்பநிலை வெளியிடப்படவில்லை — மேலும் நீச்சல் படகு டிக்கெட்டின் ஒரு பகுதியே அல்ல.'
      },
      { kind: 'h2', text: 'அன்று சரிபார்க்க வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'கீழே உள்ள சேலம் நகரத்திற்கு அல்ல, ஏரிக்கான அன்றைய முன்னறிவிப்பை.',
          'படகு இல்லம் இயங்குகிறதா — கவுண்டரிலோ TTDC தளத்திலோ.',
          'கடந்த ஒன்றிரண்டு நாட்களின் மழை, பாதைகள், படிகள், காட்சி முனைகளைப் பாதிக்கும்.',
          'மூடுபனியின் நேரம்: தாமதமாக விலகி, முன்பே திரும்பலாம்; எனவே இடைவெளி வையுங்கள்.',
          'உங்கள் குழுவைப் பொறுத்தது — சிறு குழந்தைகளும் முதியவர்களும் குளிர்ந்த காலைகளை அதிகம் உணர்வார்கள்.'
        ]
      },
      {
        kind: 'list',
        items: [
          'சிறந்த மாதம் ஒரு நல்ல நாளை உறுதி அளிக்கும் எனக் கருதுவது — அந்த நாளின் வானிலையே இன்னும் தீர்மானிக்கிறது.',
          'சுமார் 1,515 மீ உயரத்தில் உள்ள குளிர்ந்த, மூடுபனி சூழ்ந்த மேட்டைக் கவனிக்காமல், சேலத்தின் வானிலைக்கு மட்டும் திட்டமிடுவது.',
          'விஷயங்களை நகர்த்த இடம் விடாமல், ஒவ்வொரு செயலையும் ஒரே நேரப் பகுதியில் நிரந்தரமாக வைப்பது.',
          'கரை திறந்திருந்தாலும் காற்றோ மழையோ படகுகளை நிறுத்தலாம் என்பதை மறப்பது.',
          'மே விழா வாரத்தில் வந்து அமைதியான வாரநாட்களை எதிர்பார்ப்பது; அப்போதுதான் கூட்டம் உச்சத்தில் இருக்கும்.'
        ]
      },
      {
        kind: 'steps',
        items: [
          'உங்களுக்கு என்ன வேண்டும் — நடை, படகு சவாரி அல்லது காட்சி — அதற்குப் பொருந்தும் பருவத்தைத் தேர்ந்தெடுங்கள்.',
          'ஒன்றிரண்டு நாட்களுக்கு முன், சேலம் அல்ல, ஏரிக்கான முன்னறிவிப்பைச் சரிபாருங்கள்.',
          'படகு இல்லத்தில் படகு இயங்குகிறதா என்பதை உறுதி செய்யுங்கள்.',
          'வானிலை மாறுவதற்காகத் திட்டத்தில் ஒரு நெகிழ்வான நேரப் பகுதியை வையுங்கள்.',
          'முடிவு செய்யும் முன், அந்தக் காலையிலேயே நிலைகளை மீண்டும் சரிபாருங்கள்.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'நல்ல முன்னறிவிப்பை, படகுகள் இயங்குகின்றன என்பதற்கான உறுதியாகக் கருதுவது.',
          'வருகையிலிருந்து உண்மையில் என்ன வேண்டும் என்பதை அறியாமல் ஒரு தேதியை உறுதி செய்வது.',
          'தெளிவான காலைக்குப் பின் மூடுபனி எவ்வளவு விரைவாகத் திரும்பலாம் என்பதைப் புறக்கணிப்பது.',
          'மழைக்காகக் காத்திருக்க இடம் விடாத, மாற்ற முடியாத கெட்டிப்பட்ட அட்டவணையைத் திட்டமிடுவது.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஏற்காடு ஏரிக்குச் செல்ல ஆண்டின் சிறந்த காலம் எது?',
        a: 'ஒரே ஒரு சிறந்த மாதம் இல்லை. குளிர்ந்த, மூடுபனி காலைகளும் பருவமழைக்குப் பின் பசுமையும் நடைக்கும் காட்சி முனைகளுக்கும் பொருத்தம்; வெப்பமான, வறண்ட மாதங்கள் அதிகாலைத் தொடக்கத்திற்குப் பொருத்தம். உங்கள் நோக்கத்திற்குப் பொருந்தும் பருவத்தைத் தேர்ந்து, அன்றைய முன்னறிவிப்பைச் சரிபாருங்கள்.'
      },
      {
        q: 'மழை படகு சவாரியை நிறுத்துமா?',
        a: 'நிறுத்தலாம். கரை திறந்திருந்தாலும் ஏரியின் மேல் காற்று, மழை அல்லது குறைந்த தெளிவு சவாரியை நிறுத்தலாம். முன்னறிவிப்பு படகுகள் இயங்குகிறதா என்பதை உறுதி செய்யாது; படகு இல்லத்தில் கேளுங்கள்.'
      },
      {
        q: 'ஏரியில் எப்போது அதிக கூட்டம் இருக்கும்?',
        a: 'மே மாத கோடை விழாவும் வார இறுதிகளும் மிகப் பெரிய கூட்டத்தைக் கொண்டுவரும்; நிறுத்தமும் படகு வரிசையும் அப்போது மிகக் கடினம். விழாவைத் தவிர்த்த வாரநாட்கள் பொதுவாக அமைதி; ஆனால் எந்த நாளும் உறுதி இல்லை.'
      },
      {
        q: 'குறிப்பாகப் படகு சவாரிக்கு எந்தப் பருவம் சிறந்தது?',
        a: 'நீரில் நேரம் செலவிட வெதுவெதுப்பான, அமைதியான காலைகள் பொதுவாக மிகவும் ஏற்றவை; வறண்ட மாதங்கள் அவற்றுக்குப் பொருத்தம். ஆனால் ஆண்டின் எந்தக் காலத்திலும் காற்றோ மழையோ சவாரியை நிறுத்தலாம்; மேலும் முன்னறிவிப்பு படகுகள் இயங்குகிறதா என்பதை உறுதி செய்யாது; எனவே படகு இல்லத்தில் சரிபாருங்கள்.'
      },
      {
        q: 'மூடுபனி இருந்தால் ஏரியைப் பார்க்கத் தகாதா?',
        a: 'இல்லை. சில நாட்கள் காலையில் மூடுபனி பொதுவானது; அது தாமதமாக விலகலாம் அல்லது முன்பே திரும்பலாம். ஒரு நிமிடம் எதிர்க் கரையை மறைக்கும், அடுத்த நிமிடம் விலகும். திட்டத்தில் இடைவெளி வையுங்கள்; மூடுபனியை மலை வானிலையின் ஒரு பகுதியாகவே கருதுங்கள், வெளியே இருக்கக் காரணமாக அல்ல.'
      }
    ],
    sourceIds: ['openMeteo', 'districtLake', 'tnTourismBrochure', 'wikipediaYercaud', 'googleMaps']
  }
};

export default page;
