import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'nearby/anna-park',
  family: 'nearby',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Anna Park Yercaud',
  fromLake: {
    en: 'Anna Park adjoins the Yercaud Lake area, so it can be reached on foot from the boat house side of the lake rather than by vehicle. The walking distance is not verified, so treat it as approximate and confirm the gate location locally on the day.',
    ta: 'அண்ணா பூங்கா ஏற்காடு ஏரிப் பகுதியை ஒட்டி அமைந்துள்ளதால், படகு இல்லத்தின் பக்கத்திலிருந்து வாகனம் இல்லாமல் நடந்தே செல்லலாம். நடைத் தொலைவு உறுதி செய்யப்படவில்லை; எனவே அதைத் தோராயமாகக் கருதி, வாசல் இருப்பிடத்தை அன்றைய நாளில் உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['nearby/kiliyur-falls', 'nearby/ladys-seat', 'visit/lakeside-walk', 'itineraries/family-with-kids', 'food/lunch-after-boating'],
  en: {
    title: 'Anna Park at Yercaud Lake: entry, timings and how to pair it',
    description:
      'Anna Park sits beside the Yercaud Lake area and is a separate stop from the boat house. What the district page lists, how to pair the two, and what to confirm at the gate.',
    kicker: 'Nearby places',
    h1: 'Anna Park next to Yercaud Lake: a short stop worth pairing with the boat house',
    lead:
      'Anna Park is the garden immediately associated with the Yercaud Lake area. It is a separate visit from the boat house with its own gate, so plan it as a second stop rather than something included in a boat ticket.',
    facts: [
      { label: 'Relation to the lake', value: 'Beside the lake area, separate entry' },
      { label: 'Listed entry', value: 'Small fee on the undated district page — confirm at the gate' },
      { label: 'Best for', value: 'Families and children; a shaded, level stop' },
      { label: 'Time needed', value: 'Short — under an hour for most visitors' }
    ],
    blocks: [
      { kind: 'h2', text: 'Where Anna Park is in the lake area' },
      {
        kind: 'p',
        text:
          'The district tourism page lists Anna Park as one of the places around Yercaud Lake, and it is usually described as adjoining the lake area. It is not part of the boat house, and a boat ticket does not include it. Treat it as its own small visit.'
      },
      { kind: 'h2', text: 'Entry and what the district page lists' },
      {
        kind: 'p',
        text:
          'The Yercaud tourist-place page on the district site gives a small entry fee for the park. That page carries older, undated figures, so the numbers below are background rather than today’s confirmed price.'
      },
      {
        kind: 'table',
        caption: 'Older undated district figures — confirm at the gate',
        head: ['Item', 'Figure on the district page'],
        rows: [
          ['Adult entry', 'A small fee per adult'],
          ['Child entry', 'A reduced fee per child'],
          ['Boat-house entry', 'Not included; sold separately'],
          ['Day of visit', 'Daylight hours only']
        ]
      },
      {
        kind: 'note',
        text:
          'Because the district figures are undated, check the current ticket at the gate before you count on it. Do not assume the park and the boat house share one ticket.'
      },
      { kind: 'h2', text: 'Pairing Anna Park with the boat house' },
      {
        kind: 'steps',
        items: [
          'Do the boat house first while the day is cooler and the jetty queue is shorter.',
          'Walk to the Anna Park gate and check its entry and closing time.',
          'Spend a short, level stretch inside — this is a garden stop, not a trek.',
          'Finish with a lakeside walk or a meal in town before you leave the area.'
        ]
      },
      { kind: 'h2', text: 'Who it suits, and who it does not' },
      {
        kind: 'list',
        items: [
          'Families with small children: a level, contained space close to the lake.',
          'Visitors with limited walking: a short stop rather than a long circuit.',
          'Anyone expecting a large attraction: set expectations — this is a small adjoining garden.',
          'Travellers short on time: it can be dropped with little loss; the lake is the main draw.'
        ]
      },
      { kind: 'h2', text: 'Practical points before you go' },
      {
        kind: 'list',
        items: [
          'Confirm the opening window on the day; garden hours can change with season and maintenance.',
          'Keep the area clean. Yercaud runs under a district plastic-free programme.',
          'Do not enter planted beds or water features.',
          'If you are heading on to Kiliyur Falls afterwards, check the trail conditions first.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'The current entry fee at the gate; the district figures are undated.',
          'The closing time, since garden hours can change with season and maintenance.',
          'That the park and the boat house do not share one ticket.',
          'The trail conditions for Kiliyur Falls if you plan to head there afterwards.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Assuming the boat-house ticket also covers the park; it does not.',
          'Counting on the undated district figures as today’s price.',
          'Treating it as a large attraction rather than a small adjoining garden.',
          'Losing time here when the lake is the main draw and you are short on time.'
        ]
      }
    ],
    faq: [
      {
        q: 'Is Anna Park included in the boat-house ticket?',
        a: 'No. The park has its own entry, separate from the boat house. Boat tickets cover the ride itself.'
      },
      {
        q: 'How long should we allow for Anna Park?',
        a: 'Most visitors treat it as a short stop of well under an hour. It pairs naturally with the lake and the boat house rather than filling a half day on its own.'
      },
      {
        q: 'Is it suitable for very young children?',
        a: 'It is generally easier than a hill trail because it is a small, level area. Still confirm the gate timings and supervise children around any water feature.'
      },
      {
        q: 'Do I need a vehicle to reach Anna Park from the lake?',
        a: 'No. Because it adjoins the lake area, it can be reached on foot from the lakeside. The exact distance is not verified, so confirm the gate location on the day.'
      },
      {
        q: 'What should I check at the gate?',
        a: 'Check the current entry fee, the closing time and that the park is open that day. The district figures are undated, so do not count on them as today’s price, and remember the boat-house ticket does not include the park.'
      }
    ],
    sourceIds: ['districtLake', 'districtPlaces', 'districtGallery', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு ஏரி அண்ணா பூங்கா: நுழைவு, நேரம், இணைத்துச் செல்வது எப்படி',
    description:
      'அண்ணா பூங்கா ஏற்காடு ஏரிப் பகுதியை ஒட்டி அமைந்துள்ளது; படகு இல்லத்திலிருந்து தனி நுழைவு. மாவட்டப் பக்கம் குறிப்பிடுவது என்ன, இரண்டையும் எப்படி இணைப்பது, வாசலில் என்ன உறுதி செய்ய வேண்டும்.',
    kicker: 'அருகிலுள்ள இடங்கள்',
    h1: 'ஏற்காடு ஏரிக்கு அருகிலுள்ள அண்ணா பூங்கா: படகு இல்லத்துடன் இணைக்கத் தகுந்த குறுகிய நிறுத்தம்',
    lead:
      'அண்ணா பூங்கா ஏற்காடு ஏரிப் பகுதியுடன் தொடர்புடைய தோட்டம். இது படகு இல்லத்திலிருந்து தனியான நுழைவைக் கொண்ட தனி வருகை; எனவே படகு டிக்கெட்டில் அடங்கியது எனக் கருதாமல் இரண்டாவது நிறுத்தமாகத் திட்டமிடுங்கள்.',
    facts: [
      { label: 'ஏரியுடன் தொடர்பு', value: 'ஏரிப் பகுதியை ஒட்டி, தனி நுழைவு' },
      { label: 'பட்டியலிடப்பட்ட நுழைவு', value: 'தேதியற்ற மாவட்டப் பக்கத்தில் சிறு கட்டணம் — வாசலில் உறுதி செய்யுங்கள்' },
      { label: 'யாருக்கு ஏற்றது', value: 'குடும்பங்கள், குழந்தைகள்; நிழலான, சமதள நிறுத்தம்' },
      { label: 'தேவைப்படும் நேரம்', value: 'குறுகியது — பெரும்பாலானோருக்கு ஒரு மணி நேரத்திற்குள்' }
    ],
    blocks: [
      { kind: 'h2', text: 'ஏரிப் பகுதியில் அண்ணா பூங்கா எங்கே உள்ளது' },
      {
        kind: 'p',
        text:
          'ஏற்காடு ஏரியைச் சுற்றியுள்ள இடங்களில் ஒன்றாக மாவட்டச் சுற்றுலாத் தளம் அண்ணா பூங்காவைப் பட்டியலிடுகிறது; பொதுவாக இது ஏரிப் பகுதியை ஒட்டி இருப்பதாகக் குறிப்பிடப்படுகிறது. இது படகு இல்லத்தின் பகுதி அல்ல; படகு டிக்கெட்டில் இது அடங்காது. இதை ஒரு தனிச் சிறு வருகையாகக் கருதுங்கள்.'
      },
      { kind: 'h2', text: 'நுழைவு மற்றும் மாவட்டப் பக்கம் குறிப்பிடுவது' },
      {
        kind: 'p',
        text:
          'மாவட்டத் தளத்தின் ஏற்காடு சுற்றுலா இடப் பக்கம் பூங்காவிற்கு ஒரு சிறு நுழைவுக் கட்டணத்தைத் தருகிறது. அந்தப் பக்கம் பழைய, தேதியற்ற எண்களைக் கொண்டது; எனவே கீழே உள்ளவை இன்றைய உறுதி செய்யப்பட்ட விலை அல்ல, பின்னணித் தகவல் மட்டுமே.'
      },
      {
        kind: 'table',
        caption: 'தேதியற்ற பழைய மாவட்ட எண்கள் — வாசலில் உறுதி செய்யுங்கள்',
        head: ['விவரம்', 'மாவட்டப் பக்கத்தில் உள்ளது'],
        rows: [
          ['பெரியவர் நுழைவு', 'ஒரு பெரியவருக்குச் சிறு கட்டணம்'],
          ['குழந்தை நுழைவு', 'குழந்தைக்குக் குறைந்த கட்டணம்'],
          ['படகு இல்ல நுழைவு', 'அடங்காது; தனியாக வாங்க வேண்டும்'],
          ['வருகை நாள்', 'பகல் நேரம் மட்டும்']
        ]
      },
      {
        kind: 'note',
        text:
          'மாவட்ட எண்கள் தேதியற்றவை என்பதால், அவற்றை நம்புவதற்கு முன் வாசலில் தற்போதைய டிக்கெட்டைச் சரிபாருங்கள். பூங்காவும் படகு இல்லமும் ஒரே டிக்கெட் எனக் கருத வேண்டாம்.'
      },
      { kind: 'h2', text: 'அண்ணா பூங்காவை படகு இல்லத்துடன் இணைப்பது' },
      {
        kind: 'steps',
        items: [
          'நாள் குளிர்ச்சியாகவும் படகுத் தள வரிசை குறைவாகவும் இருக்கும்போது முதலில் படகு இல்லத்தை முடியுங்கள்.',
          'அண்ணா பூங்கா வாசலுக்கு நடந்து சென்று நுழைவு மற்றும் மூடும் நேரத்தைச் சரிபாருங்கள்.',
          'உள்ளே சமதளமான ஒரு குறுகிய நேரத்தைச் செலவிடுங்கள் — இது ஒரு தோட்ட நிறுத்தம், நடைப்பயிற்சி அல்ல.',
          'பகுதியை விட்டு வெளியேறும் முன் ஏரிக்கரை நடை அல்லது நகரத்தில் உணவுடன் முடியுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'யாருக்கு ஏற்றது, யாருக்கு அல்ல' },
      {
        kind: 'list',
        items: [
          'சிறு குழந்தைகள் உள்ள குடும்பங்கள்: ஏரிக்கு அருகில் சமதளமான, சுற்றிலும் எல்லை உள்ள இடம்.',
          'நடக்கும் திறன் குறைவானவர்கள்: நீண்ட சுற்று அல்ல, குறுகிய நிறுத்தம்.',
          'பெரிய அம்சத்தை எதிர்பார்ப்பவர்கள்: எதிர்பார்ப்பைச் சரிசெய்யுங்கள் — இது ஒட்டியுள்ள சிறு தோட்டம்.',
          'நேரம் குறைவான பயணிகள்: இதை விட்டுவிட்டாலும் பெரிய இழப்பில்லை; ஏரியே முக்கிய அம்சம்.'
        ]
      },
      { kind: 'h2', text: 'செல்வதற்கு முன் நடைமுறைக் குறிப்புகள்' },
      {
        kind: 'list',
        items: [
          'அன்றைய திறக்கும் நேரத்தை உறுதி செய்யுங்கள்; பருவம் மற்றும் பராமரிப்புக்கேற்ப தோட்ட நேரம் மாறலாம்.',
          'பகுதியைச் சுத்தமாக வையுங்கள். ஏற்காடு மாவட்ட நெகிழியில்லா திட்டத்தின் கீழ் இயங்குகிறது.',
          'நடப்பட்ட பாத்திகளிலோ நீர் அமைப்புகளிலோ இறங்க வேண்டாம்.',
          'பின்னர் கிளியூர் அருவிக்குச் செல்வதாக இருந்தால், முதலில் பாதை நிலையைச் சரிபாருங்கள்.'
        ]
      },
      { kind: 'h2', text: 'அன்றைய நாளில் உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'வாசலில் தற்போதைய நுழைவுக் கட்டணம்; மாவட்ட எண்கள் தேதியற்றவை.',
          'மூடும் நேரம்; பருவம் மற்றும் பராமரிப்புக்கேற்ப தோட்ட நேரம் மாறலாம்.',
          'பூங்காவும் படகு இல்லமும் ஒரே டிக்கெட் அல்ல என்பதை.',
          'பின்னர் கிளியூர் அருவிக்குச் செல்லத் திட்டமிட்டால் அந்தப் பாதையின் நிலை.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'படகு இல்ல டிக்கெட் பூங்காவையும் உள்ளடக்கும் எனக் கருதுவது; அது அடங்காது.',
          'தேதியற்ற மாவட்ட எண்களை இன்றைய விலையாக நம்புவது.',
          'இதை ஒட்டியுள்ள சிறு தோட்டமாகக் கருதாமல் பெரிய அம்சமாகக் கருதுவது.',
          'ஏரியே முக்கிய அம்சமாக இருக்கும்போதும், நேரம் குறைவாக இருக்கும்போதும் இங்கு நேரத்தை இழப்பது.'
        ]
      }
    ],
    faq: [
      {
        q: 'அண்ணா பூங்கா படகு இல்ல டிக்கெட்டில் அடங்குமா?',
        a: 'இல்லை. பூங்காவிற்குத் தனி நுழைவு உண்டு; அது படகு இல்லத்திலிருந்து வேறு. படகு டிக்கெட் சவாரிக்கு மட்டுமே.'
      },
      {
        q: 'அண்ணா பூங்காவிற்கு எவ்வளவு நேரம் ஒதுக்க வேண்டும்?',
        a: 'பெரும்பாலான பயணிகள் இதை ஒரு மணி நேரத்திற்குள் முடியும் குறுகிய நிறுத்தமாகக் கருதுகிறார்கள். இது அரை நாளை நிரப்புவதற்கல்ல, ஏரி மற்றும் படகு இல்லத்துடன் இயற்கையாக இணைகிறது.'
      },
      {
        q: 'மிகச் சிறு குழந்தைகளுடன் செல்ல ஏற்றதா?',
        a: 'மலைப் பாதையை விட இது பொதுவாக எளிது, ஏனெனில் இது சிறிய, சமதளமான பகுதி. இருந்தாலும் வாசல் நேரங்களை உறுதி செய்து, நீர் அமைப்புகள் அருகில் குழந்தைகளைக் கவனத்துடன் பார்த்துக் கொள்ளுங்கள்.'
      },
      {
        q: 'ஏரியிலிருந்து அண்ணா பூங்காவை அடைய வாகனம் தேவையா?',
        a: 'இல்லை. இது ஏரிப் பகுதியை ஒட்டி அமைந்துள்ளதால், ஏரிக்கரையிலிருந்து நடந்தே அடையலாம். சரியான தொலைவு உறுதி செய்யப்படவில்லை; எனவே வாசல் இருப்பிடத்தை அன்றைய நாளில் உள்ளூரில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'வாசலில் நான் என்ன சரிபார்க்க வேண்டும்?',
        a: 'தற்போதைய நுழைவுக் கட்டணம், மூடும் நேரம், அன்று பூங்கா திறந்திருக்கிறதா என்பவற்றைச் சரிபாருங்கள். மாவட்ட எண்கள் தேதியற்றவை; எனவே அவற்றை இன்றைய விலையாக நம்ப வேண்டாம்; மேலும் படகு இல்ல டிக்கெட்டில் பூங்கா அடங்காது என்பதை நினைவில் வையுங்கள்.'
      }
    ],
    sourceIds: ['districtLake', 'districtPlaces', 'districtGallery', 'googleMaps']
  }
};

export default page;
