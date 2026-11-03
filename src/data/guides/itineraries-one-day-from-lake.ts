import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'itineraries/one-day-from-lake',
  family: 'itineraries',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'This day begins at the Yercaud Lake & Boat House, with the town circle kept mostly on foot around the lake; the hill-view circle then needs a short vehicle run out of town. Distances and timings here are approximate — confirm them on the day.',
    ta: 'இந்த நாள் ஏற்காடு ஏரி மற்றும் படகு இல்லத்தில் தொடங்குகிறது; நகர வளையம் பெரும்பாலும் ஏரியைச் சுற்றி நடந்தே இருக்கும்; பின் மலைக்காட்சி வளையத்திற்கு நகரத்தை விட்டு ஒரு குறுகிய வாகனப் பயணம் தேவை. இங்குள்ள தூரங்களும் நேரங்களும் தோராயமானவை — அன்று உறுதிப்படுத்த வேண்டும்.'
  },
  related: ['nearby/pagoda-point', 'nearby/ladys-seat', 'transport/from-yercaud-bus-stand', 'boating/timings', 'food/lunch-after-boating'],
  en: {
    title: 'A day around Yercaud Lake: town circle and hill-view circle',
    description:
      'A full day from Yercaud Lake split into a walkable town circle and a hill-view circle, with rough time blocks, one lunch stop and a wet-weather cut.',
    kicker: 'Itineraries',
    h1: 'One day from the lake: two circles, not one long list',
    lead:
      'A day at Yercaud splits cleanly into two circles: a town circle around the lake and gardens, and a hill-view circle reached by vehicle. Trying to do every listed place in one day is the mistake; choosing the order of two circles is the plan.',
    facts: [
      { label: 'Suits', value: 'A single unhurried full day' },
      { label: 'Time budget (estimate)', value: 'One full day, morning to late afternoon' },
      { label: 'Walkable circle', value: 'Lake, gardens and the temple end of town' },
      { label: 'Vehicle circle', value: 'Pagoda Point, Lady’s Seat and the falls' }
    ],
    blocks: [
      { kind: 'h2', text: 'Anchor the day at the lake, early' },
      {
        kind: 'p',
        text:
          'Start at the lake while you are fresh and the counter is quiet; the general listing runs about 09:00–18:00. Use this first window for the boat: ask the wait at the counter, and if a queue has already built, walk the shore and move on rather than losing the whole morning to it.'
      },
      { kind: 'h2', text: 'The town circle comes first, mostly on foot' },
      {
        kind: 'list',
        items: [
          'Anna Park sits right beside the lake and is the easiest stop to fold in.',
          'The Botanical Survey of India garden and the Horticultural Farm sit within town and need only a short drive between them.',
          'The Rose Garden and Silk Farm are listed about 2 km from town — a short ride, not a walk.',
          'The Shevarayan cave temple is listed with hours of about 6am–8pm; check before you go.'
        ]
      },
      {
        kind: 'table',
        caption: 'One day split into two vehicle-and-walk circles',
        head: ['Circle', 'What is in it', 'Getting around', 'Rough block'],
        rows: [
          ['Town circle', 'Lake, boat house, Anna Park, Botanical Garden, Rose Garden and Silk Farm', 'Mostly on foot near the lake; short drives between the gardens', 'Morning to around midday'],
          ['Hill-view circle', 'Pagoda Point (about 5 km), Lady’s Seat, Kiliyur Falls (about 3 km)', 'Vehicle throughout', 'Afternoon, weather permitting']
        ]
      },
      { kind: 'h2', text: 'Lunch, then the hill-view circle' },
      {
        kind: 'p',
        text:
          'Break for lunch in town around midday — a proper sit-down meal belongs between the two circles, not inside either one. Then switch to the vehicle circle: Pagoda Point is listed about 5 km from town with a view over Salem and the ghat road, Lady’s Seat is a natural rock viewpoint, and Kiliyur Falls is about 3 km out and only worth it after the monsoon.'
      },
      {
        kind: 'note',
        text:
          'If the weather closes in, drop the entire hill-view circle first — the hairpin route and the falls trail are the parts most affected by rain and cloud. Keep the town circle and lunch, and head back before dusk; do not start a viewpoint run you cannot finish in daylight.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Which of the two circles you will actually run, before you set off.',
          'Whether the hill-view drive is clear of cloud and rain.',
          'The Shevarayan temple hours and the wait at the boat counter.',
          'Where you will stop for the midday meal between the circles.'
        ]
      },
      {
        kind: 'note',
        text:
          'The distances, hours and time blocks on this page are estimates; confirm them at the lake and in town on the day, since weather, queues and opening can all change.'
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Trying to cover every listed place in one day instead of running two circles.',
          'Crossing back and forth between the two circles and losing the morning to travel.',
          'Placing a sit-down lunch inside one of the circles instead of between them.',
          'Starting the hill-view drive late and finishing it after dark.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can we see everything listed in one day?',
        a: 'No. The list is longer than one day can honestly hold. Run the town circle and one or two hill-view stops, and leave the rest for a second visit.'
      },
      {
        q: 'Do we need a vehicle for the whole day?',
        a: 'Not for the morning. The lake and its immediate parks are walkable. You will need a vehicle for the hill-view circle, the Rose Garden and Silk Farm, and the falls.'
      },
      {
        q: 'What if we only have the afternoon?',
        a: 'Then do the hill-view circle if the weather is clear and skip the town circle, or stay at the lake and its park and skip the viewpoints entirely.'
      },
      {
        q: 'Which circle should we do first?',
        a: 'The town circle first, in the morning, while the lake counter is still quiet; the hill-view circle follows in the afternoon, weather permitting.'
      },
      {
        q: 'What if it rains on the day?',
        a: 'Drop the whole hill-view circle first — the hairpin route and the falls trail are the parts most affected by rain and cloud — and keep the town circle and lunch.'
      }
    ],
    sourceIds: ['districtLake', 'districtPlaces', 'tnTourismPagoda', 'googleMaps', 'ttdcBooking']
  },
  ta: {
    title: 'ஏற்காடு ஏரியைச் சுற்றி ஒரு நாள்: நகர வளையம், மலைக்காட்சி வளையம்',
    description:
      'ஏற்காடு ஏரியிலிருந்து ஒரு முழு நாள் — நடக்கக்கூடிய நகர வளையமாகவும், வாகனம் தேவைப்படும் மலைக்காட்சி வளையமாகவும் பிரித்து, தோராயமான நேரப் பகுதிகள், ஒரு மதிய உணவு, மழைக்கான குறைப்பு.',
    kicker: 'பயணத் திட்டங்கள்',
    h1: 'ஏரியிலிருந்து ஒரு நாள்: ஒரு நீண்ட பட்டியல் அல்ல, இரண்டு வளையங்கள்',
    lead:
      'ஏற்காட்டில் ஒரு நாள் தெளிவாக இரண்டு வளையங்களாகப் பிரிகிறது: ஏரியையும் தோட்டங்களையும் சுற்றியுள்ள நகர வளையம், வாகனத்தில் அடையக்கூடிய மலைக்காட்சி வளையம். பட்டியலில் உள்ள எல்லா இடங்களையும் ஒரே நாளில் பார்க்க முயற்சிப்பதே தவறு; இரண்டு வளையங்களின் வரிசையைத் தேர்வதே திட்டம்.',
    facts: [
      { label: 'பொருத்தம்', value: 'அவசரமில்லாத ஒரே முழு நாள்' },
      { label: 'நேரம் (கணிப்பு)', value: 'காலை முதல் பிற்பகல் வரை ஒரு முழு நாள்' },
      { label: 'நடக்கக்கூடிய வளையம்', value: 'ஏரி, தோட்டங்கள், நகரின் கோயில் பகுதி' },
      { label: 'வாகன வளையம்', value: 'பகோடா பாயிண்ட், லேடீஸ் சீட், அருவி' }
    ],
    blocks: [
      { kind: 'h2', text: 'நாளை ஏரியில், முன்னதாகவே தொடங்குங்கள்' },
      {
        kind: 'p',
        text:
          'உடல் சுறுசுறுப்பாகவும் கவுண்டர் அமைதியாகவும் இருக்கும்போது ஏரியில் தொடங்குங்கள்; பொதுவான பதிவில் நேரம் சுமார் 09:00–18:00. இந்த முதல் நேரப் பகுதியைப் படகுக்குப் பயன்படுத்துங்கள்: கவுண்டரில் காத்திருப்பைக் கேளுங்கள்; ஏற்கனவே வரிசை நீண்டிருந்தால் கரையில் நடந்துவிட்டு அடுத்ததற்குச் செல்லுங்கள் — முழு காலையையும் அதில் இழக்க வேண்டாம்.'
      },
      { kind: 'h2', text: 'நகர வளையம் முதலில், பெரும்பாலும் நடந்தே' },
      {
        kind: 'list',
        items: [
          'அண்ணா பூங்கா ஏரிக்கு அருகிலேயே உள்ளது; இணைப்பதற்கு எளிய நிறுத்தம்.',
          'இந்திய தாவரவியல் ஆய்வுத் தோட்டமும் தோட்டக்கலைப் பண்ணையும் நகரத்திற்குள்; இவற்றுக்கு இடையே குறுகிய வாகனப் பயணம் மட்டுமே தேவை.',
          'ரோஜா தோட்டமும் பட்டுப் பண்ணையும் நகரத்திலிருந்து சுமார் 2 கிமீ எனப் பட்டியலிடப்பட்டுள்ளன — நடையல்ல, குறுகிய வாகனப் பயணம்.',
          'சேர்வராயன் குகைக் கோயிலுக்கு சுமார் காலை 6 – இரவு 8 என நேரம் பட்டியலிடப்பட்டுள்ளது; செல்வதற்கு முன் உறுதி செய்யுங்கள்.'
        ]
      },
      {
        kind: 'table',
        caption: 'ஒரு நாள் — நடை மற்றும் வாகனம் கலந்த இரண்டு வளையங்கள்',
        head: ['வளையம்', 'அதில் உள்ளவை', 'செல்லும் முறை', 'தோராயமான நேரம்'],
        rows: [
          ['நகர வளையம்', 'ஏரி, படகு இல்லம், அண்ணா பூங்கா, தாவரவியல் தோட்டம், ரோஜா தோட்டம், பட்டுப் பண்ணை', 'ஏரி அருகில் பெரும்பாலும் நடை; தோட்டங்களுக்கு இடையே குறுகிய வாகனம்', 'காலை முதல் நண்பகல் வரை'],
          ['மலைக்காட்சி வளையம்', 'பகோடா பாயிண்ட் (சுமார் 5 கிமீ), லேடீஸ் சீட், கிளியூர் அருவி (சுமார் 3 கிமீ)', 'முழுவதும் வாகனம்', 'பிற்பகல், வானிலை அனுமதித்தால்']
        ]
      },
      { kind: 'h2', text: 'மதிய உணவு, பின் மலைக்காட்சி வளையம்' },
      {
        kind: 'p',
        text:
          'நண்பகலில் நகரத்தில் மதிய உணவிற்கு இடைவேளை எடுங்கள் — ஒரு முழு உணவு இரண்டு வளையங்களுக்கு இடையில் இருக்க வேண்டும், எதற்குள்ளும் அல்ல. பின் வாகன வளையத்திற்கு மாறுங்கள்: பகோடா பாயிண்ட் நகரத்திலிருந்து சுமார் 5 கிமீ, சேலம் நகரத்தையும் மலைச் சாலையையும் காணும் காட்சியுடன்; லேடீஸ் சீட் இயற்கைப் பாறைக் காட்சிமுனை; கிளியூர் அருவி சுமார் 3 கிமீ தொலைவில், பருவமழைக்குப் பின் மட்டுமே பொருத்தம்.'
      },
      {
        kind: 'note',
        text:
          'வானிலை மோசமானால் முதலில் முழு மலைக்காட்சி வளையத்தையும் விட்டுவிடுங்கள் — மழையும் மேகமும் அதிகம் பாதிக்கும் பகுதி அந்த முடிச்சு சாலையும் அருவிப் பாதையும்தான். நகர வளையத்தையும் மதிய உணவையும் தக்கவைத்து, இருள் வருவதற்கு முன் திரும்புங்கள்; பகலில் முடிக்க முடியாத காட்சிமுனை சுற்றைத் தொடங்க வேண்டாம்.'
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'கிளம்புவதற்கு முன், இரண்டு வளையங்களில் எதை உண்மையில் செய்வது.',
          'மலைக்காட்சிப் பயணம் மேகமும் மழையும் இல்லாமல் தெளிவாக உள்ளதா.',
          'சேர்வராயன் கோயில் நேரங்கள் மற்றும் படகு கவுண்டரின் காத்திருப்பு.',
          'இரு வளையங்களுக்கு இடையே மதிய உணவுக்கு எங்கு நிற்பது.'
        ]
      },
      {
        kind: 'note',
        text:
          'இந்தப் பக்கத்தில் குறிப்பிடப்படும் தூரங்கள், நேரங்கள், நேரப் பகுதிகள் அனைத்தும் கணிப்புகள்; அன்று ஏரியிலும் நகரத்திலும் உறுதிப்படுத்துங்கள் — வானிலை, வரிசைகள், திறப்பு ஆகியவை மாறலாம்.'
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'இரண்டு வளையங்களைச் செய்வதற்குப் பதிலாக, பட்டியலில் உள்ள ஒவ்வொரு இடத்தையும் ஒரே நாளில் அடக்க முயற்சிப்பது.',
          'இரண்டு வளையங்களுக்கும் இடையே முன்னும் பின்னும் சென்று, காலையைப் பயணத்தில் இழப்பது.',
          'அமர்ந்து சாப்பிடும் மதிய உணவை வளையங்களுக்கு இடையில் அல்லாமல் ஒரு வளையத்திற்குள் வைப்பது.',
          'மலைக்காட்சிப் பயணத்தைத் தாமதமாகத் தொடங்கி இருளுக்குப் பின் முடிப்பது.'
        ]
      }
    ],
    faq: [
      {
        q: 'பட்டியலில் உள்ள எல்லாவற்றையும் ஒரே நாளில் பார்க்க முடியுமா?',
        a: 'முடியாது. பட்டியல் ஒரு நாளில் நேர்மையாக அடக்க முடியாத அளவு நீளமானது. நகர வளையத்தையும் ஒன்றிரண்டு மலைக்காட்சி நிறுத்தங்களையும் முடித்துவிட்டு, மீதியை இரண்டாம் வருகைக்கு வையுங்கள்.'
      },
      {
        q: 'நாள் முழுவதும் வாகனம் தேவையா?',
        a: 'காலைக்குத் தேவையில்லை. ஏரியும் அதை ஒட்டிய பூங்காக்களும் நடக்கக்கூடியவை. மலைக்காட்சி வளையம், ரோஜா தோட்டம் மற்றும் பட்டுப் பண்ணை, அருவி ஆகியவற்றுக்கு வாகனம் தேவை.'
      },
      {
        q: 'பிற்பகல் மட்டுமே இருந்தால் என்ன செய்வது?',
        a: 'வானிலை தெளிவாக இருந்தால் மலைக்காட்சி வளையத்தைச் செய்துவிட்டு நகர வளையத்தைத் தவிர்க்கவும்; இல்லையேல் ஏரியிலும் அதன் பூங்காவிலும் தங்கி காட்சி முனைகளை முழுவதுமாகத் தவிர்க்கவும்.'
      },
      {
        q: 'எந்த வளையத்தை முதலில் செய்ய வேண்டும்?',
        a: 'முதலில் நகர வளையம் — காலையில், ஏரிக் கவுண்டர் இன்னும் அமைதியாக இருக்கும்போது; பின் வானிலை அனுமதித்தால் பிற்பகலில் மலைக்காட்சி வளையம்.'
      },
      {
        q: 'அன்று மழை பெய்தால் என்ன செய்வது?',
        a: 'முதலில் முழு மலைக்காட்சி வளையத்தையும் விடுங்கள் — மழையும் மேகமும் அதிகம் பாதிக்கும் பகுதி அந்த முடிச்சு சாலையும் அருவிப் பாதையும்தான்; நகர வளையத்தையும் மதிய உணவையும் தக்கவைத்துக்கொள்ளுங்கள்.'
      }
    ],
    sourceIds: ['districtLake', 'districtPlaces', 'tnTourismPagoda', 'googleMaps', 'ttdcBooking']
  }
};

export default page;
