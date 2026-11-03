import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'visit/photo-spots',
  family: 'visit',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake',
  fromLake: {
    en: 'The photographable shoreline is right at Yercaud Lake & Boat House: from the boat-house area, walk along the open shore and into the adjoining parkland on foot, or take a short local ride to a documented hill viewpoint nearby. Distances to those viewpoints are approximate, so confirm them on the day.',
    ta: 'படமெடுக்கக்கூடிய கரைப்பகுதி ஏற்காடு ஏரி மற்றும் படகு இல்லத்திலேயே உள்ளது: படகு இல்லப் பகுதியிலிருந்து திறந்த கரையோரமாகவும் அதை ஒட்டிய பூங்கா நிலத்திலும் நடந்து செல்லுங்கள்; அல்லது அருகிலுள்ள ஆவணப்படுத்தப்பட்ட மலைக் காட்சி முனைக்குக் குறுகிய உள்ளூர் வாகனத்தில் செல்லுங்கள். அந்தக் காட்சி முனைகளுக்கான தொலைவுகள் தோராயமானவை; அன்று உறுதி செய்யுங்கள்.'
  },
  related: ['visit/best-time', 'visit/lakeside-walk', 'nearby/ladys-seat', 'nearby/pagoda-point', 'itineraries/lake-viewpoints-sunset'],
  en: {
    title: 'Where to photograph Yercaud Lake, and the light that suits',
    description:
      'General viewpoints and shoreline spots for photographing Yercaud Lake, how the light changes through the day, and the areas where photographs are not appropriate.',
    kicker: 'Visiting the lake',
    h1: 'Lake photography: general spots, and where not to shoot',
    lead:
      'Good lake photographs come from the light and the angle more than from any one hidden spot, so this page avoids quoting camera settings or inventing picture-perfect locations. It sets out the shoreline and viewpoints people generally use, how the light behaves, and where a camera should stay put.',
    facts: [
      { label: 'Best light (general)', value: 'Early and late, softer light' },
      { label: 'Mist', value: 'Common some mornings — weather-dependent' },
      { label: 'Park camera charge', value: 'Anna Park: ₹25 still / ₹50 video (district)' },
      { label: 'Drone use', value: 'Unverified — assume restricted' }
    ],
    blocks: [
      { kind: 'h2', text: 'Light makes the picture, not a secret spot' },
      {
        kind: 'p',
        text:
          'The lake looks different hour by hour. In a hill station the useful rule is simple: softer, lower light earlier and later usually reads better than hard midday sun, and mist can hide or flatter the view depending on the day. There is no setting on a camera that fixes a flat, misted lake, so choose the time first.'
      },
      {
        kind: 'list',
        items: [
          'Early: often the calmest water and the softest light, if the mist has lifted.',
          'Midday: bright and contrasty, with hard shadows across the water.',
          'Late afternoon to dusk: warmer light and longer reflections, but fading quickly.',
          'Mist and cloud: unpredictable; the same view can be clear minutes later.'
        ]
      },
      { kind: 'h2', text: 'General places people photograph from' },
      {
        kind: 'list',
        items: [
          'The open shoreline, where the water and the far bank both fit in one frame.',
          'The parkland beside the lake, for the water with trees and lawn in front.',
          'The documented hill viewpoints in the area, which look over the town and hills rather than the lake alone.',
          'The boat-house side, for the activity on the water — from a distance, so boarding is not interrupted.'
        ]
      },
      { kind: 'h2', text: 'Where photographs are not appropriate' },
      {
        kind: 'list',
        items: [
          'Do not photograph people without their agreement; the lakeside is a public space, not a studio.',
          'Respect any sign or staff instruction that marks an area off-limits or camera-free.',
          'Keep clear of the jetty during boarding rather than standing in the way for a shot.',
          'Treat drone use as restricted unless the local authority says otherwise; no source confirms it is allowed.',
          'Check each park’s own camera and video charges, which are separate from lake access.'
        ]
      },
      {
        kind: 'note',
        text:
          'No specific camera settings, focal lengths or guaranteed compositions are given here, because they depend on the day’s light and could not be verified. Work with what the light gives you and respect the space around you.'
      },
      {
        kind: 'table',
        caption: 'Light through the day at the lake',
        head: ['Time', 'Light and water', 'What it suits'],
        rows: [
          ['Early', 'Soft, and calm if the mist has lifted', 'Reflections and uncluttered water'],
          ['Midday', 'Bright and contrasty, with hard shadows', 'Bold shapes rather than subtle tones'],
          ['Late afternoon to dusk', 'Warmer light, longer reflections, fading fast', 'Warmer tones if you can move quickly'],
          ['Mist and cloud', 'Unpredictable; can clear in minutes', 'Waiting a little rather than leaving']
        ]
      },
      {
        kind: 'list',
        items: [
          'Chasing a secret spot instead of working with the light you have.',
          'Fixing your plan to one hour when the mist and cloud change quickly.',
          'Standing on the jetty during boarding for a shot and getting in the way.',
          'Photographing people without their agreement in a public space.',
          'Assuming drone use is allowed when no source confirms it.'
        ]
      },
      {
        kind: 'steps',
        items: [
          'Check the morning’s light and mist before choosing your time.',
          'Confirm each park’s separate camera and video charges.',
          'Look for any sign or staff instruction about camera-free areas.',
          'Ask locally before flying a drone.',
          'Keep clear of the jetty when boats are boarding.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Confirm on the day what the light and mist are doing, not what a plan assumed.',
          'Check before you pay that a park’s camera and video charges are as listed.',
          'Ask locally whether drone rules have changed before flying anything.',
          'Do not assume the shoreline is free of other visitors; expect to share the space.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Rearranging your whole day around one viewpoint instead of the available light.',
          'Overlooking a park’s separate camera charge until you are already at its gate.',
          'Blocking a walkway or jetty to frame a shot while others are passing.',
          'Assuming a clear sky when mist can alter the scene without warning.'
        ]
      }
    ],
    faq: [
      {
        q: 'What is the best time to photograph Yercaud Lake?',
        a: 'Generally earlier and later, when the light is softer, if the mist has lifted. Midday tends to be bright and contrasty. The weather changes quickly in the hills, so no time is guaranteed.'
      },
      {
        q: 'Can I fly a drone over the lake?',
        a: 'No source obtained confirms drone use is allowed, so treat it as restricted unless the local authority says otherwise. Ask locally before flying anything.'
      },
      {
        q: 'Is there a camera charge near the lake?',
        a: 'The lake shoreline itself has no camera charge in any source obtained. Anna Park beside the lake lists its own camera and video charges — ₹25 for a still camera and ₹50 for video — separate from lake access.'
      },
      {
        q: 'Is midday a bad time for lake photographs?',
        a: 'Not bad, just different. Midday tends to be bright and contrasty with hard shadows across the water, so it suits bold shapes rather than subtle tones. Earlier and later light is usually softer if you can choose.'
      },
      {
        q: 'Do I need permission to photograph the boat-house side?',
        a: 'Keep clear of the jetty while boats are boarding and respect any sign or staff instruction that marks a camera-free area. Do not photograph people without their agreement, because the lakeside is a public space rather than a studio.'
      }
    ],
    sourceIds: ['districtGallery', 'districtLake', 'googleMaps', 'tnTourismPagoda']
  },
  ta: {
    title: 'ஏற்காடு ஏரியை எங்கு படமெடுப்பது, எந்த ஒளி பொருத்தம்',
    description:
      'ஏற்காடு ஏரியைப் படமெடுக்கப் பயன்படும் பொதுவான காட்சி முனைகளும் கரைப் பகுதிகளும், நாள் முழுவதும் ஒளி எப்படி மாறுகிறது, மேலும் படமெடுக்கத் தகாத பகுதிகள்.',
    kicker: 'ஏரியைப் பார்வையிடுதல்',
    h1: 'ஏரிப் படமெடுப்பு: பொதுவான இடங்கள், படமெடுக்கத் தகாத இடங்கள்',
    lead:
      'நல்ல ஏரிப் படங்கள், ஒரு மறைவான இடத்தைவிட ஒளியிலிருந்தும் கோணத்திலிருந்துமே வருகின்றன; எனவே இந்தப் பக்கம் கேமரா அமைப்புகளைக் குறிப்பிடுவதையோ கற்பனைக் காட்சி இடங்களை உருவாக்குவதையோ தவிர்க்கிறது. மக்கள் பொதுவாகப் பயன்படுத்தும் கரைப் பகுதிகளையும் காட்சி முனைகளையும், ஒளி எப்படி நடக்கிறது என்பதையும், கேமரா எங்கே நிற்க வேண்டும் என்பதையும் தருகிறது.',
    facts: [
      { label: 'பொதுவான நல்ல ஒளி', value: 'அதிகாலையும் பிற்பகலும், மென்மையான ஒளி' },
      { label: 'மூடுபனி', value: 'சில நாட்கள் காலையில் பொதுவானது — வானிலையைப் பொறுத்தது' },
      { label: 'பூங்கா கேமரா கட்டணம்', value: 'அண்ணா பூங்கா: நிலைப்படம் ₹25 / காணொலி ₹50 (மாவட்டம்)' },
      { label: 'ஆளில்லா விமானம்', value: 'உறுதி செய்யப்படவில்லை — கட்டுப்பாடு உள்ளதாகக் கருதுங்கள்' }
    ],
    blocks: [
      { kind: 'h2', text: 'படத்தை உருவாக்குவது ஒளிதான், ஒரு ரகசிய இடம் அல்ல' },
      {
        kind: 'p',
        text:
          'ஏரி மணிநேரத்திற்கு மணி வேறுவிதமாகத் தெரியும். ஒரு மலைவாசஸ்தலத்தில் பயனுள்ள விதி எளியது: அதிகாலையிலும் பிற்பகலிலும் மென்மையான, தாழ்ந்த ஒளி பொதுவாகக் கடுமையான நண்பகல் வெயிலைவிட நன்றாகத் தெரியும்; மூடுபனி அந்த நாளைப் பொறுத்துக் காட்சியை மறைக்கலாம் அல்லது அழகாக்கலாம். சாகுபடியற்ற, மூடுபனி சூழ்ந்த ஏரியை எந்தக் கேமரா அமைப்பும் சரிசெய்யாது; எனவே முதலில் நேரத்தைத் தேர்ந்தெடுங்கள்.'
      },
      {
        kind: 'list',
        items: [
          'அதிகாலை: பொதுவாக அமைதியான நீரும் மென்மையான ஒளியும் — மூடுபனி விலகியிருந்தால்.',
          'நண்பகல்: பிரகாசமும் அதிக மாறுபாடும்; நீரின் மேல் கடுமையான நிழல்கள்.',
          'பிற்பகல் இறுதி முதல் அந்தி வரை: வெதுவெதுப்பான ஒளியும் நீண்ட பிரதிபலிப்புகளும்; ஆனால் விரைவில் மறையும்.',
          'மூடுபனியும் மேகமும்: கணிக்க முடியாதவை; அதே காட்சி சில நிமிடங்களில் தெளிவாகலாம்.'
        ]
      },
      { kind: 'h2', text: 'மக்கள் படமெடுக்கும் பொதுவான இடங்கள்' },
      {
        kind: 'list',
        items: [
          'திறந்த கரைப் பகுதி — நீரும் எதிர்க் கரையும் ஒரே சட்டகத்தில் அமையும் இடம்.',
          'ஏரிக்கு அருகிலுள்ள பூங்கா நிலம் — முன்னே மரங்களும் புல்வெளியும் பின்னே நீரும்.',
          'அப்பகுதியில் ஆவணப்படுத்தப்பட்ட மலைக் காட்சி முனைகள் — ஏரியை மட்டுமல்ல, நகரத்தையும் மலைகளையும் காட்டுபவை.',
          'படகு இல்லம் பக்கம் — நீரின் மேல் நடக்கும் செயல்பாட்டுக்காக, ஏற்றத்தை இடையூறு செய்யாத தூரத்திலிருந்து.'
        ]
      },
      { kind: 'h2', text: 'படமெடுக்கத் தகாத இடங்கள்' },
      {
        kind: 'list',
        items: [
          'மக்களின் ஒப்புதல் இல்லாமல் அவர்களைப் படமெடுக்க வேண்டாம்; ஏரிக்கரை ஒரு பொது இடம், ஒரு படப்பிடிப்புக் கூடம் அல்ல.',
          'தடைசெய்யப்பட்ட அல்லது கேமரா கூடாது என்று குறிக்கப்பட்ட பகுதியைப் பற்றிய எந்த அறிவிப்பையும், பணியாளர் அறிவுரையையும் மதியுங்கள்.',
          'படம் எடுப்பதற்காகப் படகுத் தளத்தின் வழியில் நிற்காமல், ஏற்றத்தின் போது விலகி இருங்கள்.',
          'உள்ளூர் அதிகாரம் வேறுவிதமாகச் சொல்லாத வரை ஆளில்லா விமானப் பயன்பாட்டைக் கட்டுப்படுத்தப்பட்டதாகக் கருதுங்கள்; அது அனுமதிக்கப்படுகிறது என எந்த மூலமும் உறுதி செய்யவில்லை.',
          'ஒவ்வொரு பூங்காவின் சொந்த கேமரா, காணொலி கட்டணங்களைச் சரிபாருங்கள்; அவை ஏரி அணுகலிலிருந்து தனித்தவை.'
        ]
      },
      {
        kind: 'note',
        text:
          'இங்கு குறிப்பிட்ட கேமரா அமைப்புகளோ, குவிய நீளங்களோ, உறுதியான காட்சிக் கூட்டமைப்புகளோ தரப்படவில்லை; ஏனெனில் அவை அன்றைய ஒளியைப் பொறுத்தவை, உறுதி செய்ய முடியாதவை. ஒளி தருவதை வைத்து வேலை செய்யுங்கள்; உங்களைச் சுற்றியுள்ள இடத்தை மதியுங்கள்.'
      },
      {
        kind: 'table',
        caption: 'ஏரியில் நாள் முழுவதும் ஒளி',
        head: ['நேரம்', 'ஒளியும் நீரும்', 'எதற்குப் பொருத்தம்'],
        rows: [
          ['அதிகாலை', 'மென்மையானது; மூடுபனி விலகியிருந்தால் அமைதியானது', 'பிரதிபலிப்புகள், குழப்பமில்லாத நீர்'],
          ['நண்பகல்', 'பிரகாசமும் அதிக மாறுபாடும்; கடுமையான நிழல்கள்', 'நுட்பமான நிறங்களைவிட தெளிவான வடிவங்கள்'],
          ['பிற்பகல் இறுதி முதல் அந்தி வரை', 'வெதுவெதுப்பான ஒளி, நீண்ட பிரதிபலிப்புகள், விரைவில் மறையும்', 'விரைவாக நகர முடிந்தால் வெதுவெதுப்பான நிறங்கள்'],
          ['மூடுபனியும் மேகமும்', 'கணிக்க முடியாதவை; சில நிமிடங்களில் தெளிவாகலாம்', 'வெளியேறுவதைவிட சற்று காத்திருக்கலாம்']
        ]
      },
      {
        kind: 'list',
        items: [
          'கிடைக்கும் ஒளியை வைத்து வேலை செய்யாமல், ஒரு ரகசிய இடத்தைத் தேடுவது.',
          'மூடுபனியும் மேகமும் விரைவாக மாறும்போது, திட்டத்தை ஒரே மணிநேரத்தில் நிரந்தரமாக வைப்பது.',
          'படம் எடுப்பதற்காக ஏற்றத்தின் போது படகுத் தளத்தின் மேல் நின்று வழியை மறைப்பது.',
          'ஒரு பொது இடத்தில் மக்களின் ஒப்புதல் இல்லாமல் அவர்களைப் படமெடுப்பது.',
          'எந்த மூலமும் உறுதி செய்யாதபோது ஆளில்லா விமானப் பயன்பாடு அனுமதிக்கப்படுகிறது எனக் கருதுவது.'
        ]
      },
      {
        kind: 'steps',
        items: [
          'நேரத்தைத் தேர்ந்தெடுப்பதற்கு முன் அன்றைய ஒளியையும் மூடுபனியையும் சரிபாருங்கள்.',
          'ஒவ்வொரு பூங்காவின் தனி கேமரா, காணொலி கட்டணங்களை உறுதி செய்யுங்கள்.',
          'கேமரா கூடாது என்ற பகுதிகள் பற்றிய எந்த அறிவிப்பையும், பணியாளர் அறிவுரையையும் பாருங்கள்.',
          'ஆளில்லா விமானம் இயக்குவதற்கு முன் உள்ளூரில் கேளுங்கள்.',
          'படகுகள் ஏறும் போது படகுத் தளத்தை விட்டு விலகி இருங்கள்.'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'ஒரு திட்டம் கருதியதை அல்ல, அன்று ஒளியும் மூடுபனியும் எப்படி இருக்கின்றன என்பதை உறுதிப்படுத்துங்கள்.',
          'ஒரு பூங்காவின் கேமரா, காணொலி கட்டணங்கள் பட்டியலிட்டபடியே உள்ளனவா என்பதை பணம் செலுத்தும் முன் சரிபாருங்கள்.',
          'எதையும் இயக்குவதற்கு முன் ஆளில்லா விமான விதிகள் மாறியுள்ளனவா என்பதை உள்ளூரில் கேளுங்கள்.',
          'கரையில் மற்ற பயணிகள் இல்லை எனக் கருத வேண்டாம்; இடத்தைப் பகிர்ந்து கொள்ள வேண்டியிருக்கும்.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'கிடைக்கும் ஒளிக்குப் பதிலாக ஒரே காட்சி முனையைச் சுற்றி முழு நாளையும் மாற்றியமைப்பது.',
          'ஒரு பூங்காவின் தனி கேமரா கட்டணத்தை, அதன் வாயிலுக்கு வந்தபின் கவனிப்பது.',
          'மற்றவர்கள் செல்லும்போது, படம் எடுப்பதற்காக ஒரு நடைபாதையையோ படகுத் தளத்தையோ தடுப்பது.',
          'வானம் தெளிவாக இருக்கும் எனக் கருதுவது; ஆனால் மூடுபனி விரைவாக வந்து காட்சியை மாற்றலாம்.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஏற்காடு ஏரியைப் படமெடுக்க சிறந்த நேரம் எது?',
        a: 'பொதுவாக அதிகாலையும் பிற்பகலும், ஒளி மென்மையாக இருக்கும்போது — மூடுபனி விலகியிருந்தால். நண்பகல் பொதுவாகப் பிரகாசமாகவும் அதிக மாறுபாட்டுடனும் இருக்கும். மலையில் வானிலை விரைவாக மாறும்; எனவே எந்த நேரமும் உறுதி இல்லை.'
      },
      {
        q: 'ஏரியின் மேல் ஆளில்லா விமானம் இயக்கலாமா?',
        a: 'ஆளில்லா விமானப் பயன்பாடு அனுமதிக்கப்படுகிறது என்பதைப் பெறப்பட்ட எந்த மூலமும் உறுதி செய்யவில்லை; எனவே உள்ளூர் அதிகாரம் வேறுவிதமாகச் சொல்லாத வரை அதைக் கட்டுப்படுத்தப்பட்டதாகக் கருதுங்கள். எதையும் இயக்குவதற்கு முன் உள்ளூரில் கேளுங்கள்.'
      },
      {
        q: 'ஏரி அருகில் கேமரா கட்டணம் உண்டா?',
        a: 'பெறப்பட்ட எந்த மூலத்திலும் ஏரிக்கரைக்குக் கேமரா கட்டணம் இல்லை. ஏரிக்கு அருகிலுள்ள அண்ணா பூங்கா தனிக் கேமரா, காணொலி கட்டணங்களைப் பட்டியலிடுகிறது — நிலைப்படக் கேமராவுக்கு ₹25, காணொலிக்கு ₹50 — ஏரி அணுகலிலிருந்து தனித்தவை.'
      },
      {
        q: 'நண்பகல் ஏரிப் படமெடுப்புக்கு மோசமான நேரமா?',
        a: 'மோசமானது அல்ல, வேறுபட்டது. நண்பகல் பொதுவாகப் பிரகாசமாகவும் அதிக மாறுபாட்டுடனும், நீரின் மேல் கடுமையான நிழல்களுடனும் இருக்கும்; எனவே அது நுட்பமான நிறங்களைவிட தெளிவான வடிவங்களுக்குப் பொருத்தம். தேர்வு செய்ய முடிந்தால் அதிகாலையும் பிற்பகலும் பொதுவாக மென்மையான ஒளி.'
      },
      {
        q: 'படகு இல்லம் பக்கத்தைப் படமெடுக்க அனுமதி தேவையா?',
        a: 'படகுகள் ஏறும் போது படகுத் தளத்தை விட்டு விலகி இருங்கள்; கேமரா கூடாது என்று குறிக்கப்பட்ட பகுதி பற்றிய எந்த அறிவிப்பையும், பணியாளர் அறிவுரையையும் மதியுங்கள். ஒரு பொது இடம் ஒரு படப்பிடிப்புக் கூடம் அல்ல என்பதால், மக்களின் ஒப்புதல் இல்லாமல் அவர்களைப் படமெடுக்க வேண்டாம்.'
      }
    ],
    sourceIds: ['districtGallery', 'districtLake', 'googleMaps', 'tnTourismPagoda']
  }
};

export default page;
