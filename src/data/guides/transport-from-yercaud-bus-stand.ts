import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'transport/from-yercaud-bus-stand',
  family: 'transport',
  priority: 'P0',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'This is the last leg of a trip whose base is Yercaud Lake & Boat House: from the Yercaud bus stand, cover the short final stretch to the lake and boat house on foot or in a local vehicle. The published distance of about 1–1.5 km is approximate, and the footpath, slope and vehicle availability all have to be confirmed on the day.',
    ta: 'இது ஏற்காடு ஏரி மற்றும் படகு இல்லத்தைத் தளமாகக் கொண்ட பயணத்தின் இறுதிப் பகுதி: ஏற்காடு பேருந்து நிலையத்திலிருந்து ஏரி மற்றும் படகு இல்லம் வரையிலான குறுகிய இறுதிப் பகுதியை நடந்தோ உள்ளூர் வாகனத்திலோ கடக்க வேண்டும். வெளியிடப்பட்ட சுமார் 1–1.5 கிமீ தொலைவு தோராயமானது; நடைபாதை, சரிவு, வாகனக் கிடைப்பு அனைத்தும் அன்று உறுதி செய்ய வேண்டியவை.'
  },
  related: ['transport/from-salem', 'transport/parking', 'visit/lakeside-walk', 'boating/guide'],
  en: {
    title: 'Yercaud bus stand to the lake: the short last leg on foot',
    description:
      'The last stretch from the Yercaud bus stand to the lake is only about 1–1.5 km, but nothing about it is guaranteed. Walk or ride, and what to check on arrival.',
    kicker: 'Getting there',
    h1: 'From Yercaud bus stand to the water: walk or ride the last kilometre',
    lead:
      'The climb is over, but the journey is not. Between the Yercaud bus stand and the lake there is still a final stretch. Because it is short, many people assume it is a simple walk; because nothing about it is guaranteed, that assumption is the one to test on the ground.',
    facts: [
      { label: 'Published distance', value: 'About 1–1.5 km (several sources — verify)' },
      { label: 'Walk or ride', value: 'Depends on luggage, weather and the day' },
      { label: 'Footpath', value: 'Not guaranteed — to be verified on site' },
      { label: 'Accessibility', value: 'Slope and step access unverified' }
    ],
    blocks: [
      { kind: 'h2', text: 'The leg everyone underestimates' },
      {
        kind: 'p',
        text:
          'The distance between the Yercaud bus stand and the lake is published at roughly 1–1.5 km across several sources. That is an approximate range, and it should be checked on the ground. Because the number is small, many visitors treat the stretch as a walk; there is no source here that guarantees it suits everyone.'
      },
      {
        kind: 'table',
        caption: 'The last leg in figures',
        head: ['Figure', 'What it covers', 'Status'],
        rows: [
          ['About 1–1.5 km', 'Lake area to the Yercaud bus stand', 'Several published values — verify on site'],
          ['About 30–35 km', 'Salem to Yercaud in total', 'Published range for the whole climb']
        ]
      },
      { kind: 'h2', text: 'Walk or ride: what decides it' },
      {
        kind: 'list',
        items: [
          'Light luggage, dry weather and daylight make walking the usual practical choice.',
          'Heavy luggage, rain or darkness can tip the decision towards a local vehicle.',
          'If you take a vehicle, agree the fare and a permitted drop-off point before you set off.',
          'If you walk, keep the return in mind and know how you will get back to the bus stand afterwards.'
        ]
      },
      { kind: 'h2', text: 'What is not guaranteed' },
      {
        kind: 'list',
        items: [
          'No source obtained here confirms a continuous, separate footpath along this stretch.',
          'The slope, any steps, and access for people with limited mobility are all to be verified on site.',
          'Do not assume a local vehicle is always available, especially late in the day.',
          'A safe, permitted parking or stopping point nearby cannot be assumed.'
        ]
      },
      {
        kind: 'note',
        text:
          'In short, this page guarantees nothing about this final stretch — the distance, the footpath, the slope and vehicle availability are all to be confirmed on the ground. Ask locally as you arrive and decide there.'
      },
      {
        kind: 'steps',
        items: [
          'Ask locally how far the lake is from the bus stand on the current layout.',
          'Check whether a continuous footpath actually runs along the stretch.',
          'Look at the slope and any steps before committing to walk with your group.',
          'If taking a vehicle, agree the fare and a permitted drop-off point first.',
          'Plan how you will get back to the bus stand afterwards.'
        ]
      },
      {
        kind: 'list',
        items: [
          'Assuming the short distance means an easy walk for everyone.',
          'Setting off with heavy luggage in the rain or after dark without a vehicle plan.',
          'Expecting a local vehicle to always be available, especially late in the day.',
          'Assuming there is a safe, permitted parking or stopping point nearby.',
          'Walking out without deciding how to return to the bus stand.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Confirm at the counter or with a local that the route you plan is open on the day.',
          'Ask locally on the day before walking with luggage, rather than deciding in advance.',
          'Check before you pay that the fare and the drop-off point are what was agreed.',
          'Do not assume the walk back to the bus stand will be easy once the light goes.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can we walk from the Yercaud bus stand to the lake?',
        a: 'The distance is published at about 1–1.5 km, so walking can be a practical choice. But there is no guarantee of a continuous footpath, a gentle slope or accessible steps. Decide based on your luggage, the weather and how steady your group is on foot.'
      },
      {
        q: 'Will we find a local vehicle?',
        a: 'This page does not guarantee one. If a vehicle is available, agree the fare and a permitted drop-off point before you set off; availability can be thinner in the evening.'
      },
      {
        q: 'Is this distance reliable?',
        a: 'It is an approximate published range drawn from several sources, and it can change with the current road layout, entry route and walking access. Confirming on the ground is the reliable route.'
      },
      {
        q: 'How long does the last stretch take?',
        a: 'This page gives no travel time, because the published distance is only about 1–1.5 km and the slope, footpath and traffic decide the rest. Confirm on the ground how long it takes for your group.'
      },
      {
        q: 'Can we walk it with children or older visitors?',
        a: 'The published distance is short, but the slope and any steps are unverified, so it may not suit everyone. Check the ground in person and decide, or take a local vehicle if one is available.'
      }
    ],
    sourceIds: ['districtLake', 'googleMaps', 'tnstc', 'openMeteo']
  },
  ta: {
    title: 'ஏற்காடு பேருந்து நிலையத்திலிருந்து ஏரி வரை: குறுகிய இறுதி நடை',
    description:
      'ஏற்காடு பேருந்து நிலையத்திலிருந்து ஏரி வரையிலான இறுதிப் பகுதி சுமார் 1–1.5 கிமீ மட்டுமே; ஆனால் அதில் எதுவும் உறுதி அல்ல. நடக்கலாமா, வாகனம் ஏறலாமா, வந்ததும் என்ன சரிபார்க்க வேண்டும்.',
    kicker: 'போக்குவரத்து',
    h1: 'ஏற்காடு பேருந்து நிலையத்திலிருந்து நீர் வரை: இறுதிக் கிலோமீட்டரை நடக்கலாமா, வாகனத்திலா',
    lead:
      'ஏற்றம் முடிந்தது, ஆனால் பயணம் முடியவில்லை. ஏற்காடு பேருந்து நிலையத்திற்கும் ஏரிக்கும் இடையே இன்னும் ஒரு இறுதிப் பகுதி உள்ளது. அது குறுகியதாக இருப்பதால் பலர் இதை ஒரு எளிய நடையாகவே கருதுகிறார்கள்; ஆனால் அதில் எதுவும் உறுதி அல்ல என்பதால், அந்தக் கருதுகோளைத்தான் இடத்தில் சோதிக்க வேண்டும்.',
    facts: [
      { label: 'வெளியிடப்பட்ட தொலைவு', value: 'சுமார் 1–1.5 கிமீ (பல மூலங்கள் — உறுதி செய்யுங்கள்)' },
      { label: 'நடை அல்லது வாகனம்', value: 'லக்கேஜ், வானிலை, அன்றைய நிலையைப் பொறுத்தது' },
      { label: 'நடைபாதை', value: 'உறுதி அல்ல — இடத்தில் சரிபார்க்க வேண்டியது' },
      { label: 'அணுகத்தகு தன்மை', value: 'சரிவும் படி அணுகலும் சரிபார்க்கப்படாதவை' }
    ],
    blocks: [
      { kind: 'h2', text: 'அனைவரும் குறைத்து மதிப்பிடும் பகுதி' },
      {
        kind: 'p',
        text:
          'ஏற்காடு பேருந்து நிலையத்திற்கும் ஏரிக்கும் இடையிலான தொலைவு பல மூலங்களில் ஏறக்குறைய 1–1.5 கிமீ என வெளியிடப்படுகிறது. அது ஒரு தோராயமான வரம்பு; அதை இடத்தில் சரிபார்க்க வேண்டும். எண் சிறியதாக இருப்பதால் பல பயணிகள் இதை ஒரு நடையாகக் கருதுகிறார்கள்; ஆனால் அது அனைவருக்கும் பொருந்தும் என்பதற்கு இங்கு எந்த மூலமும் உறுதி அளிக்கவில்லை.'
      },
      {
        kind: 'table',
        caption: 'இறுதிப் பகுதி எண்களில்',
        head: ['எண்', 'எதைக் குறிக்கிறது', 'நிலை'],
        rows: [
          ['சுமார் 1–1.5 கிமீ', 'ஏரிப் பகுதிக்கும் ஏற்காடு பேருந்து நிலையத்திற்கும் இடையே', 'பல வெளியிடப்பட்ட மதிப்புகள் — இடத்தில் உறுதி செய்யுங்கள்'],
          ['சுமார் 30–35 கிமீ', 'சேலம் முதல் ஏற்காடு வரை முழுவதும்', 'முழு ஏற்றத்திற்கான வெளியிடப்பட்ட வரம்பு']
        ]
      },
      { kind: 'h2', text: 'நடையா, வாகனமா: எது தீர்மானிக்கிறது' },
      {
        kind: 'list',
        items: [
          'இலகுவான லக்கேஜ், வறண்ட வானிலை, பகல் வெளிச்சம் எனில் நடப்பது பொதுவாக நடைமுறையான தேர்வு.',
          'கனமான லக்கேஜ், மழை அல்லது இருள் எனில் ஒரு உள்ளூர் வாகனத்தைத் தேர்ந்தெடுக்கத் தூண்டலாம்.',
          'வாகனத்தைத் தேர்ந்தெடுத்தால், புறப்படும் முன் கட்டணத்தையும் அனுமதிக்கப்பட்ட இறங்கும் இடத்தையும் ஏற்படுத்திக் கொள்ளுங்கள்.',
          'நடந்தால், திரும்பும் வழியையும், அதன் பின் பேருந்து நிலையத்திற்கு எப்படித் திரும்புவீர்கள் என்பதையும் மனதில் வையுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'எது உறுதி அல்ல' },
      {
        kind: 'list',
        items: [
          'இந்தப் பகுதியில் தொடர்ச்சியான, தனியான நடைபாதை உள்ளது என்பதற்கு இங்கு கிடைத்த எந்த மூலமும் உறுதி அளிக்கவில்லை.',
          'சரிவு, ஏதேனும் படிகள், நடக்கும் திறன் குறைவானவர்களுக்கான அணுகல் — இவை இடத்தில் சரிபார்க்க வேண்டியவை.',
          'உள்ளூர் வாகனம் எப்போதும் கிடைக்கும் எனக் கருத வேண்டாம், குறிப்பாக மாலை நேரத்தில்.',
          'அருகில் பாதுகாப்பான, அனுமதிக்கப்பட்ட நிறுத்துமிடம் உள்ளது எனக் கருத முடியாது.'
        ]
      },
      {
        kind: 'note',
        text:
          'சுருக்கமாக: இந்த இறுதிப் பகுதியைப் பற்றி இந்தப் பக்கம் எதையும் உறுதி அளிக்கவில்லை — தூரம், நடைபாதை, சரிவு, வாகனக் கிடைப்பு அனைத்தும் இடத்தில் உறுதி செய்ய வேண்டியவை. வந்ததும் உள்ளூரில் கேட்டு அங்கேயே முடிவு செய்யுங்கள்.'
      },
      {
        kind: 'steps',
        items: [
          'தற்போதைய சாலை அமைப்பில் ஏரி பேருந்து நிலையத்திலிருந்து எவ்வளவு தொலைவு என்பதை உள்ளூரில் கேளுங்கள்.',
          'இந்தப் பகுதியில் ஒரு தொடர்ச்சியான நடைபாதை உண்மையில் உள்ளதா என்பதைச் சரிபாருங்கள்.',
          'உங்கள் குழுவுடன் நடக்க முடிவு செய்யும் முன் சரிவையும் ஏதேனும் படிகளையும் பாருங்கள்.',
          'வாகனம் ஏறினால், முதலில் கட்டணத்தையும் அனுமதிக்கப்பட்ட இறங்கும் இடத்தையும் ஏற்படுத்திக் கொள்ளுங்கள்.',
          'அதன் பின் பேருந்து நிலையத்திற்கு எப்படித் திரும்புவீர்கள் என்பதைத் திட்டமிடுங்கள்.'
        ]
      },
      {
        kind: 'list',
        items: [
          'தொலைவு குறுகியது என்பதால் அது அனைவருக்கும் எளிய நடை எனக் கருதுவது.',
          'வாகனத் திட்டம் எதுவும் இல்லாமல், மழையிலோ இருளிலோ கனமான லக்கேஜுடன் புறப்படுவது.',
          'குறிப்பாக மாலை நேரத்தில், ஒரு உள்ளூர் வாகனம் எப்போதும் கிடைக்கும் என எதிர்பார்ப்பது.',
          'அருகில் பாதுகாப்பான, அனுமதிக்கப்பட்ட நிறுத்துமிடம் உள்ளது எனக் கருதுவது.',
          'பேருந்து நிலையத்திற்கு எப்படித் திரும்புவது என்பதை முடிவு செய்யாமல் புறப்படுவது.'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'நீங்கள் திட்டமிடும் வழி அன்று திறந்திருக்கிறதா என்பதை கவுண்டரிலோ உள்ளூரிலோ உறுதிப்படுத்துங்கள்.',
          'லக்கேஜுடன் நடக்கும் முன், முன்பே முடிவு செய்யாமல், அன்று உள்ளூரில் கேளுங்கள்.',
          'ஏற்பட்ட கட்டணமும் இறங்கும் இடமும் அதுவே என்பதை பணம் செலுத்தும் முன் சரிபாருங்கள்.',
          'வெளிச்சம் குறைந்தபின் பேருந்து நிலையத்திற்குத் திரும்பும் நடை எளிதாக இருக்கும் எனக் கருத வேண்டாம்.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஏற்காடு பேருந்து நிலையத்திலிருந்து ஏரிக்கு நடந்து செல்லலாமா?',
        a: 'தொலைவு சுமார் 1–1.5 கிமீ என வெளியிடப்படுகிறது; எனவே நடப்பது நடைமுறையான தேர்வாக இருக்கலாம். ஆனால் தொடர்ச்சியான நடைபாதை, மென்மையான சரிவு, அணுகத்தகு படிகள் எதற்கும் உறுதி இல்லை. லக்கேஜ், வானிலை, உங்கள் குழுவின் நடைநிலை ஆகியவற்றை வைத்து முடிவு செய்யுங்கள்.'
      },
      {
        q: 'உள்ளூர் வாகனம் கிடைக்குமா?',
        a: 'இந்தப் பக்கம் அதை உறுதி அளிக்கவில்லை. வாகனம் கிடைத்தால், புறப்படும் முன் கட்டணத்தையும் அனுமதிக்கப்பட்ட இறங்கும் இடத்தையும் ஏற்படுத்திக் கொள்ளுங்கள்; மாலை நேரத்தில் கிடைப்பது குறைவாக இருக்கலாம்.'
      },
      {
        q: 'இந்தத் தொலைவு நம்பகமானதா?',
        a: 'இது பல மூலங்களிலிருந்து வெளியிடப்பட்ட ஒரு தோராயமான வரம்பு; தற்போதைய சாலை அமைப்பு, நுழைவு வழி, நடை அணுகல் ஆகியவற்றைப் பொறுத்து மாறலாம். இடத்தில் உறுதி செய்வதே நம்பகமான வழி.'
      },
      {
        q: 'இறுதிப் பகுதிக்கு எவ்வளவு நேரம் ஆகும்?',
        a: 'இந்தப் பக்கம் பயணநேரத்தைத் தரவில்லை; ஏனெனில் வெளியிடப்பட்ட தொலைவு சுமார் 1–1.5 கிமீ மட்டுமே; மீதியைச் சரிவு, நடைபாதை, போக்குவரத்து ஆகியவை தீர்மானிக்கின்றன. உங்கள் குழுவுக்கு எவ்வளவு நேரம் ஆகும் என்பதை இடத்தில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'குழந்தைகளுடனோ முதியவர்களுடனோ நடந்து செல்லலாமா?',
        a: 'வெளியிடப்பட்ட தொலைவு குறுகியது; ஆனால் சரிவும் ஏதேனும் படிகளும் சரிபார்க்கப்படாதவை; எனவே அது அனைவருக்கும் பொருந்தாமல் இருக்கலாம். தரையை நேரில் சரிபார்த்து முடிவு செய்யுங்கள்; அல்லது உள்ளூர் வாகனம் கிடைத்தால் அதை எடுத்துக் கொள்ளுங்கள்.'
      }
    ],
    sourceIds: ['districtLake', 'googleMaps', 'tnstc', 'openMeteo']
  }
};

export default page;
