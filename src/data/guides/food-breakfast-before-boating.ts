import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'food/breakfast-before-boating',
  family: 'food',
  priority: 'P2',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'The listed early breakfast stops sit away from the boat house itself, so from the lake plan a short drive or auto ride along the lake and town roads rather than a walk from the jetty. The distance is approximate, so confirm the route and the opening time locally on the day.',
    ta: 'பட்டியலிடப்பட்ட அதிகாலை உணவு நிற்கைகள் படகு இல்லத்தை ஒட்டி அல்ல; எனவே ஏரியிலிருந்து தளத்திலிருந்து நடப்பதற்குப் பதிலாக, ஏரி மற்றும் நகரச் சாலைகள் வழியாக ஒரு குறுகிய வாகனம் அல்லது ஆட்டோவில் செல்லுங்கள். தொலைவு தோராயமானது; எனவே வழியையும் திறப்பு நேரத்தையும் அன்றைய நாளில் உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['food/restaurants-near-lake', 'food/lunch-after-boating', 'boating/timings', 'transport/parking', 'itineraries/lake-in-one-hour'],
  en: {
    title: 'Breakfast before boating at Yercaud: early openings and timing',
    description:
      'The boat house is listed from 09:00, so an early breakfast is the practical move. Here is what opens at 06:00, how long to allow, and how to reach the jetty.',
    kicker: 'Food & drink',
    h1: 'Eating early before the Yercaud boat house opens: a simple plan',
    lead:
      'The boat house is listed from 09:00, so an early breakfast is the move that keeps your morning ahead of the queue. Two branches of the same cafe are listed from 06:00. Beyond that, opening times are not published, so the plan below uses what is verified and marks the rest for confirmation.',
    facts: [
      { label: 'Earliest listed opening', value: '06:00 (both Kaapi Stop branches)' },
      { label: 'Boat house hours listed', value: '09:00–18:00 (TTDC booking portal)' },
      { label: 'Time to allow', value: 'About 30–45 minutes (our estimate)' },
      { label: 'Not verified', value: 'The Chutney opening time' }
    ],
    blocks: [
      { kind: 'h2', text: 'Why breakfast runs earlier than the boats' },
      {
        kind: 'p',
        text:
          'The boat house counter is listed to open at 09:00, and queues build through the middle of the day. Eating before that window means you reach the jetty early and avoid eating into the cooler morning. The catch is that few places publish an opening time, so a clear early option matters.'
      },
      {
        kind: 'note',
        text:
          'A listed 06:00 opening is a third-party entry read on 2 November 2026, not a promise for your date. Phrase it as "listed from 06:00" and confirm before you rely on it.'
      },
      { kind: 'h2', text: 'Where the early options are' },
      {
        kind: 'table',
        caption: 'Early breakfast options before the boat house — third-party data, read 2 November 2026',
        head: ['Stop', 'Opening listed', 'Time to allow', 'Then to the boat house'],
        rows: [
          ['Kaapi Stop (Kiliyur Falls Road)', '06:00', 'About 30–45 min (our estimate)', 'Short drive or auto to the lakeside'],
          ['Kaapi Stop (Adivaram Road)', '06:00', 'About 30–45 min (our estimate)', 'Best before the climb up; it sits near the hill foot'],
          ['The Chutney', 'Not published', 'Not published', 'Breakfast tiffin is listed, so confirm it opens early']
        ]
      },
      { kind: 'h2', text: 'A simple morning plan, and if you would rather eat later' },
      {
        kind: 'steps',
        items: [
          'Eat first, near where you are staying or parked; either listed 06:00 option works before the boats start.',
          'Allow about 30–45 minutes for the meal — this is our estimate, not a published figure.',
          'Leave in time to reach the lake before 09:00, when the boat house is listed to open.',
          'Take a short drive or auto to the lake on Lake to Ladies Seat Road; parking near the shore is limited.',
          'Buy the boat ticket at the counter, or reserve through the TTDC route if it is open for your date.'
        ]
      },
      {
        kind: 'list',
        items: [
          'The Chutney lists breakfast items, but its hours are not published — confirm before relying on it for an early meal.',
          'A later breakfast means a later start, and the boat queue lengthens through the middle of the day.',
          'Nothing here is confirmed for your travel date; a 06:00 listing does not guarantee a 06:00 counter.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Whether each Kaapi Stop branch is still opening at 06:00 on your date; the 06:00 figure is a dated listing, not a promise.',
          'Whether The Chutney is serving breakfast that morning, since its hours are not published.',
          'The boat house counter’s actual opening time before you plan around 09:00.',
          'The route from your breakfast stop to the lakeside, including where you can park.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Reading a 06:00 listing as a guaranteed 06:00 counter; phrase it as "listed from 06:00".',
          'Eating too late and reaching the jetty once the queue has already formed.',
          'Expecting food at the boat house itself; no food service is confirmed there.',
          'Heading out without water, even though the morning is cooler.'
        ]
      }
    ],
    faq: [
      {
        q: 'What time should I eat if I want to boat first?',
        a: 'Aim to finish breakfast before 09:00, when the boat house is listed to open. The two Kaapi Stop branches are listed from 06:00, which leaves a comfortable margin for the meal and the trip to the lake.'
      },
      {
        q: 'How long does breakfast take?',
        a: 'No published figure exists. Allow about 30–45 minutes as our own estimate, then add travel time to the lakeside.'
      },
      {
        q: 'Can I eat at the boat house itself?',
        a: 'No food service is confirmed at the boat house. Plan to eat before you go, and carry water with you.'
      },
      {
        q: 'What should I confirm before an early breakfast?',
        a: 'Confirm that the Kaapi Stop branch really is opening at 06:00 on your date, that The Chutney is serving that morning, and the boat house counter’s actual opening time. All of these are dated listings rather than promises.'
      },
      {
        q: 'Is it better to eat near the lake or where I am staying?',
        a: 'The listed early options sit away from the boat house, so either eating where you are staying or using one of the two listed 06:00 branches works. Whichever you choose, allow travel time to reach the lakeside before 09:00.'
      }
    ],
    sourceIds: ['kaapiStopListing', 'kaapiStopAdivaram', 'chutneyListing', 'ttdcBooking', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காட்டில் படகு சவாரிக்கு முன் காலை உணவு: அதிகாலை திறப்பும் நேரமும்',
    description:
      'படகு இல்லம் 09:00 முதல் எனப் பட்டியலிடப்பட்டுள்ளதால், அதிகாலை காலை உணவே நடைமுறைத் தேர்வு. 06:00 முதல் என்ன திறக்கிறது, எவ்வளவு நேரம் ஒதுக்குவது, படகுத் தளத்தை எப்படி அடைவது.',
    kicker: 'உணவு & பானம்',
    h1: 'ஏற்காடு படகு இல்லம் திறப்பதற்கு முன் சாப்பிடுவது: ஒரு எளிய திட்டம்',
    lead:
      'படகு இல்லம் 09:00 முதல் எனப் பட்டியலிடப்பட்டுள்ளதால், வரிசைக்கு முன்னேற காலை உணவை அதிகாலையில் முடிப்பதே சரியான நடவடிக்கை. ஒரே கஃபேயின் இரண்டு கிளைகள் 06:00 முதல் எனப் பட்டியலிடப்பட்டுள்ளன. அதற்கு அப்பால் திறப்பு நேரங்கள் வெளியிடப்படவில்லை; எனவே கீழே உள்ள திட்டம் உறுதி செய்யப்பட்டதைப் பயன்படுத்தி, மற்றதை உறுதி செய்ய வேண்டியதாகக் குறிக்கிறது.',
    facts: [
      { label: 'மிக அதிகாலை திறப்பு', value: '06:00 (இரண்டு Kaapi Stop கிளைகளும்)' },
      { label: 'படகு இல்ல நேரம்', value: '09:00–18:00 (TTDC முன்பதிவுத் தளம்)' },
      { label: 'ஒதுக்க வேண்டிய நேரம்', value: 'சுமார் 30–45 நிமிடங்கள் (எங்கள் மதிப்பீடு)' },
      { label: 'உறுதி செய்யப்படாதது', value: 'The Chutney திறப்பு நேரம்' }
    ],
    blocks: [
      { kind: 'h2', text: 'படகுகளை விட காலை உணவு ஏன் முந்துகிறது' },
      {
        kind: 'p',
        text:
          'படகு இல்லக் கவுண்டர் 09:00 முதல் திறக்கும் எனப் பட்டியலிடப்பட்டுள்ளது; நண்பகல் நேரத்தில் வரிசைகள் நீளும். அந்த நேரத்திற்கு முன் சாப்பிடுவதால், நீங்கள் தளத்தை முன்கூட்டியே அடைந்து, குளிர்ச்சியான காலைப் பொழுதை இழக்காமல் பயன்படுத்தலாம். சிக்கல் என்னவென்றால், சில இடங்களே திறப்பு நேரத்தை வெளியிடுகின்றன; எனவே ஒரு தெளிவான அதிகாலைத் தேர்வு முக்கியம்.'
      },
      {
        kind: 'note',
        text:
          'பட்டியலிடப்பட்ட 06:00 திறப்பு என்பது 2 நவம்பர் 2026 அன்று படிக்கப்பட்ட வெளி மூலப் பதிவு; உங்கள் தேதிக்கான உறுதி அல்ல. "06:00 முதல் எனப் பட்டியலிடப்பட்டுள்ளது" எனக் கூறி, அதை நம்புவதற்கு முன் உறுதி செய்யுங்கள்.'
      },
      { kind: 'h2', text: 'அதிகாலைத் தேர்வுகள் எங்கே இருக்கின்றன' },
      {
        kind: 'table',
        caption: 'படகு இல்லத்திற்கு முன் அதிகாலை காலை உணவுத் தேர்வுகள் — வெளி மூலத் தரவு, 2 நவம்பர் 2026 அன்று படிக்கப்பட்டது',
        head: ['நிற்கை', 'பட்டியலிடப்பட்ட திறப்பு', 'ஒதுக்க வேண்டிய நேரம்', 'பின்னர் படகு இல்லம் வரை'],
        rows: [
          ['Kaapi Stop (கிளியூர் அருவி சாலை)', '06:00', 'சுமார் 30–45 நிமிடம் (எங்கள் மதிப்பீடு)', 'ஏரிக்கரைக்கு குறுகிய வாகனம் அல்லது ஆட்டோ'],
          ['Kaapi Stop (அடிவாரம் சாலை)', '06:00', 'சுமார் 30–45 நிமிடம் (எங்கள் மதிப்பீடு)', 'மேலேறும் முன் சிறந்தது; மலையடிவாரம் அருகில் உள்ளது'],
          ['The Chutney', 'வெளியிடப்படவில்லை', 'வெளியிடப்படவில்லை', 'காலை டிபன் பட்டியலிடப்பட்டுள்ளது; அது அதிகாலையில் திறக்கிறதா என உறுதி செய்யுங்கள்']
        ]
      },
      { kind: 'h2', text: 'ஒரு எளிய காலைத் திட்டம், பின்னர் சாப்பிட விரும்பினால்' },
      {
        kind: 'steps',
        items: [
          'நீங்கள் தங்கியிருக்கும் அல்லது வாகனம் நிறுத்தியுள்ள இடத்திற்கு அருகிலேயே முதலில் சாப்பிடுங்கள்; படகுகள் தொடங்குவதற்கு முன் 06:00 திறப்பு எனப் பட்டியலிடப்பட்ட எந்தத் தேர்வும் பொருந்தும்.',
          'உணவுக்கு சுமார் 30–45 நிமிடங்கள் ஒதுக்குங்கள் — இது எங்கள் மதிப்பீடு, வெளியிடப்பட்ட எண் அல்ல.',
          'படகு இல்லம் 09:00 முதல் திறக்கும் எனப் பட்டியலிடப்பட்டிருப்பதால், அதற்கு முன் ஏரியை அடையும்படி புறப்படுங்கள்.',
          'Lake to Ladies Seat Road இல் உள்ள ஏரிக்கு குறுகிய வாகனம் அல்லது ஆட்டோவில் செல்லுங்கள்; கரை அருகில் நிறுத்துமிடம் குறைவு.',
          'படகு இல்லக் கவுண்டரில் டிக்கெட் வாங்குங்கள்; உங்கள் தேதிக்குத் திறந்திருந்தால் TTDC வழியிலும் பதிவு செய்யலாம்.'
        ]
      },
      {
        kind: 'list',
        items: [
          'The Chutney காலை உணவு வகைகளைப் பட்டியலிடுகிறது; ஆனால் அதன் நேரம் வெளியிடப்படவில்லை — அதிகாலை உணவுக்கு அதை நம்புவதற்கு முன் உறுதி செய்யுங்கள்.',
          'தாமதமான காலை உணவு என்பது தாமதமான புறப்பாடு; நண்பகல் நேரத்தில் படகு வரிசை நீளும்.',
          'உங்கள் பயணத் தேதிக்கு இங்கு எதுவும் உறுதி செய்யப்படவில்லை; 06:00 எனப் பட்டியலிடப்பட்டிருந்தாலும் 06:00 கவுண்டர் உறுதி அல்ல.'
        ]
      },
      { kind: 'h2', text: 'அன்றைய நாளில் உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'ஒவ்வொரு Kaapi Stop கிளையும் உங்கள் தேதியில் 06:00 மணிக்குத் திறக்கிறதா; 06:00 என்பது தேதியுள்ள பட்டியல், உறுதிமொழி அல்ல.',
          'The Chutney அன்று காலை உணவு அளிக்கிறதா; அதன் நேரம் வெளியிடப்படவில்லை.',
          '09:00ஐ மையமாகக் கொள்ளும் முன் படகு இல்லக் கவுண்டரின் உண்மையான திறப்பு நேரம்.',
          'உங்கள் காலை உணவு நிற்கையிலிருந்து ஏரிக்கரைக்கான வழி, எங்கு நிறுத்தலாம் என்பது உட்பட.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          '06:00 எனப் பட்டியலிடப்பட்டுள்ளதை உறுதியான 06:00 கவுண்டராகப் படிப்பது; "06:00 முதல் எனப் பட்டியலிடப்பட்டுள்ளது" எனக் கூறுங்கள்.',
          'தாமதமாகச் சாப்பிட்டு, வரிசை ஏற்கனவே நீண்ட பின் தளத்தை அடைவது.',
          'படகு இல்லத்திலேயே உணவு கிடைக்கும் என எதிர்பார்ப்பது; அங்கு உணவுச் சேவை உறுதி செய்யப்படவில்லை.',
          'காலை குளிர்ச்சியாக இருந்தாலும் தண்ணீர் எடுத்துச் செல்லாமல் புறப்படுவது.'
        ]
      }
    ],
    faq: [
      {
        q: 'முதலில் படகு சவாரி செய்ய வேண்டுமெனில் எத்தனை மணிக்குச் சாப்பிட வேண்டும்?',
        a: 'படகு இல்லம் 09:00 முதல் திறக்கும் எனப் பட்டியலிடப்பட்டுள்ளதால், அதற்கு முன் காலை உணவை முடிக்க இலக்கு வையுங்கள். இரண்டு Kaapi Stop கிளைகளும் 06:00 முதல் பட்டியலிடப்பட்டுள்ளதால், உணவுக்கும் ஏரிக்குச் செல்வதற்கும் வசதியான இடைவெளி கிடைக்கும்.'
      },
      {
        q: 'காலை உணவு எவ்வளவு நேரம் ஆகும்?',
        a: 'வெளியிடப்பட்ட எண் எதுவும் இல்லை. எங்கள் சொந்த மதிப்பீடாக சுமார் 30–45 நிமிடங்கள் ஒதுக்கி, பிறகு ஏரிக்கரைக்குச் செல்லும் நேரத்தையும் சேர்க்கவும்.'
      },
      {
        q: 'படகு இல்லத்திலேயே சாப்பிடலாமா?',
        a: 'படகு இல்லத்தில் உணவுச் சேவை எதுவும் உறுதி செய்யப்படவில்லை. செல்வதற்கு முன் சாப்பிட்டு, தண்ணீரை எடுத்துச் செல்லுங்கள்.'
      },
      {
        q: 'அதிகாலை உணவுக்கு முன் நான் எதை உறுதி செய்ய வேண்டும்?',
        a: 'Kaapi Stop கிளை உண்மையிலேயே உங்கள் தேதியில் 06:00 மணிக்குத் திறக்கிறதா, The Chutney அன்று காலை உணவு அளிக்கிறதா, மேலும் படகு இல்லக் கவுண்டரின் உண்மையான திறப்பு நேரம் என்ன என்பதை உறுதி செய்யுங்கள். இவை அனைத்தும் தேதியுள்ள பட்டியல்களே, உறுதிமொழிகள் அல்ல.'
      },
      {
        q: 'ஏரிக்கு அருகிலா அல்லது நான் தங்கியிருக்கும் இடத்திலா சாப்பிடுவது நல்லது?',
        a: 'பட்டியலிடப்பட்ட அதிகாலைத் தேர்வுகள் படகு இல்லத்தை ஒட்டி அல்ல; எனவே நீங்கள் தங்கியிருக்கும் இடத்திலோ அல்லது 06:00 எனப் பட்டியலிடப்பட்ட இரண்டு கிளைகளில் ஒன்றையோ பயன்படுத்தலாம். எதைத் தேர்ந்தாலும், 09:00க்கு முன் ஏரிக்கரையை அடையும் பயண நேரத்தை ஒதுக்குங்கள்.'
      }
    ],
    sourceIds: ['kaapiStopListing', 'kaapiStopAdivaram', 'chutneyListing', 'ttdcBooking', 'googleMaps']
  }
};

export default page;
