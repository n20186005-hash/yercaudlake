import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'food/restaurants-near-lake',
  family: 'food',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'From Yercaud Lake & Boat House, the listed places sit in the town or on approach roads rather than beside the water, so reaching them means a walk or a short ride out of the lake area towards the town. The distance to each is approximate, so confirm the address and the route locally on the day.',
    ta: 'ஏற்காடு ஏரி & படகு இல்லத்திலிருந்து, பட்டியலிடப்பட்ட இடங்கள் நீர்நிலையை ஒட்டி அல்ல, நகரத்திலோ அணுகுச் சாலைகளிலோ உள்ளன; எனவே அவற்றை அடைய ஏரிப் பகுதியிலிருந்து நகரத்தை நோக்கி நடந்தோ ஒரு குறுகிய வாகனப் பயணத்திலோ செல்ல வேண்டும். ஒவ்வொன்றுக்கும் தொலைவு தோராயமானது; எனவே முகவரியையும் வழியையும் அன்று உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['food/vegetarian-near-lake', 'food/lunch-after-boating', 'boating/timings', 'itineraries/lake-half-day'],
  en: {
    title: 'Restaurants near Yercaud Lake: where to eat by area and meal',
    description:
      'A dated, neutral list of places in and around Yercaud — the area each sits in, the hours published, the meal it suits, and what to confirm first.',
    kicker: 'Food & drink',
    h1: 'Eating near Yercaud Lake: a plain list, by area and meal time',
    lead:
      'This site does not rank restaurants and takes no payment from any of them. What follows is a checklist of places that appear in dated third-party listings, grouped by where they sit in relation to the boat house and by the meal they are normally used for. Every address, hour and price should be confirmed before you travel.',
    facts: [
      { label: 'List basis', value: 'Third-party listings, read 2 Nov 2026' },
      { label: 'Addresses seen', value: 'Two Kaapi Stop branches; Moddys (per listing)' },
      { label: 'Not confirmed', value: 'The Lake Cafe — address, hours, menu' },
      { label: 'Our position', value: 'No ranking, no endorsement' }
    ],
    blocks: [
      { kind: 'h2', text: 'How this list is arranged' },
      {
        kind: 'p',
        text:
          'This is an independent guide, not a ranking. Nothing here is paid for and no place is put above another. The listings are grouped by where they sit relative to the boat house and by the meal they are normally used for, so you can pick one that fits the way your day is running.'
      },
      {
        kind: 'table',
        caption: 'Places listed in or near Yercaud — third-party data, read 2 November 2026',
        head: ['Name', 'Area or address listed', 'Hours listed', 'Suits', 'Needs checking'],
        rows: [
          [
            'The Chutney',
            'Yercaud — exact address not verified',
            'Not published',
            'Breakfast, lunch, dinner and snacks (its menu lists all four)',
            'Address, hours and today’s prices'
          ],
          [
            'Kaapi Stop (Kiliyur Falls Road)',
            'Sunny Brook Estate, Kiliyur Falls Road',
            '06:00–21:00',
            'Early breakfast, snacks, coffee',
            'Whether those hours still apply'
          ],
          [
            'Kaapi Stop (Adivaram Road)',
            'Adivaram Road, near the foot of the ghat road',
            '06:00–21:00',
            'Breakfast on the way up or down the hill',
            'Counter details and seating'
          ],
          [
            'Moddys Chocolates and Cafe',
            'No 1, Hospital Road, Shevaroys complex, Lovers Lane, Yercaud 636601',
            '09:00–21:30',
            'Coffee, chocolate, light snacks',
            'Menu and seating'
          ],
          ['JOJO MOMOS', 'Yercaud — exact address not verified', 'Not published', 'Snacks', 'Address and hours'],
          [
            'The Lake Cafe',
            'Appears only in an aggregator list (about 7.5 km from the town centre there)',
            'Not verified',
            'Unknown',
            'Address, hours and menu — treat as unconfirmed'
          ]
        ]
      },
      {
        kind: 'note',
        text:
          'Every row above comes from a third-party listing read on 2 November 2026. Hours and distances on such lists go out of date, and none of these places has confirmed its details with this site. Phone ahead or check on arrival before you set out.'
      },
      { kind: 'h2', text: 'Choosing by meal time' },
      {
        kind: 'list',
        items: [
          'Early start: a listed 06:00 opening makes either Kaapi Stop branch the practical option before a morning boat ride.',
          'Mid-morning or lunch: The Chutney lists breakfast, lunch, dinner and snacks on one menu, but its hours are not published.',
          'Afternoon: Moddys (coffee and chocolate, 09:00–21:30 listed) or a Kaapi Stop branch for a lighter stop.',
          'On the way up or down the ghat: the Adivaram Road branch sits near the foot of the hill road, so it suits a break before or after the climb.'
        ]
      },
      { kind: 'h2', text: 'Before you go' },
      {
        kind: 'list',
        items: [
          'Confirm the address and hours yourself; the listings used here may be stale.',
          'Ask whether a place is serving the meal you have in mind, not just whether it is open.',
          'This page does not promise a lake view, parking or seating in any place.',
          'Keep the plan flexible — the lake, its shore and its viewpoints need no booking.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'The address and the current opening hours, since the listings used here may be stale.',
          'Whether the place is serving the meal you have in mind, not just whether it is open.',
          'The price charged today, which the listing flags as needing checking.',
          'Whether a phone number is published, so you can check before setting out.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Assuming a listed place is beside the lake, which the listings do not show.',
          'Treating a listed opening time as today’s opening time.',
          'Travelling for The Lake Cafe alone, since its details are unconfirmed.',
          'Expecting parking or seating to be available without checking.'
        ]
      }
    ],
    faq: [
      {
        q: 'Are any of these places actually beside the lake?',
        a: 'That cannot be confirmed from the listings used here. The lake sits on Lake to Ladies Seat Road; the places above are listed in the town or on approach roads. Ask on arrival whether a given place looks over the water.'
      },
      {
        q: 'Why do you not rank them?',
        a: 'This is an independent, non-commercial guide. We only list what dated third-party sources show and mark what is unverified, so you can decide for yourself rather than follow a ranking.'
      },
      {
        q: 'Can I book a table?',
        a: 'Nothing in the listings used here shows a booking system, so assume walk-in service. Only one listing carries a phone number, so confirm by phone where a place publishes one.'
      },
      {
        q: 'Which listed places show opening hours, and which do not?',
        a: 'From the listings read on 2 November 2026, both Kaapi Stop branches show 06:00–21:00 and Moddys shows 09:00–21:30. The Chutney, JOJO MOMOS and The Lake Cafe show no hours. Confirm any hour directly before you travel.'
      },
      {
        q: 'What should I check before choosing a place for a meal?',
        a: 'Confirm the address, the current hours and whether the place is serving the meal you want, not just whether it is open. The listings here are third-party entries read on 2 November 2026 and may be stale, so check before you set out.'
      }
    ],
    sourceIds: ['chutneyListing', 'kaapiStopListing', 'yercaudRestaurants', 'moddysCafe', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு ஏரி அருகில் உணவகங்கள்: பகுதி மற்றும் உணவு நேரப்படி எங்கு சாப்பிடலாம்',
    description:
      'ஏற்காட்டிலும் அதைச் சுற்றியும் பட்டியலிடப்பட்ட இடங்களின் தேதியுள்ள, நடுநிலையான பட்டியல் — ஒவ்வொன்றும் எந்தப் பகுதியில் உள்ளது, வெளியிடப்பட்ட நேரம், எந்த உணவுக்கு ஏற்றது, செல்வதற்கு முன் உறுதி செய்ய வேண்டியவை.',
    kicker: 'உணவு & பானம்',
    h1: 'ஏற்காடு ஏரி அருகில் சாப்பிடுவது: பகுதி மற்றும் நேரப்படி ஒரு எளிய பட்டியல்',
    lead:
      'இந்தத் தளம் உணவகங்களைத் தரவரிசைப்படுத்துவதில்லை; எந்த உணவகத்திடமிருந்தும் பணம் பெறுவதில்லை. கீழே உள்ளது, தேதியுள்ள வெளி மூலப் பட்டியல்களில் இடம்பெறும் இடங்களின் சரிபார்ப்புப் பட்டியல். படகு இல்லத்தைப் பொறுத்து அவை எங்கே அமைந்துள்ளன, பொதுவாக எந்த உணவுக்குப் பயன்படுகின்றன என்பதன் அடிப்படையில் தொகுக்கப்பட்டுள்ளன. ஒவ்வொரு முகவரி, நேரம், விலையையும் புறப்படும் முன் உறுதி செய்யுங்கள்.',
    facts: [
      { label: 'பட்டியலின் அடிப்படை', value: 'வெளி மூலப் பட்டியல்கள், 2 நவம்பர் 2026 அன்று படிக்கப்பட்டது' },
      { label: 'கிடைத்த முகவரிகள்', value: 'இரண்டு Kaapi Stop கிளைகள்; Moddys (பட்டியலின்படி)' },
      { label: 'உறுதி செய்யப்படாதது', value: 'The Lake Cafe — முகவரி, நேரம், மெனு' },
      { label: 'எங்கள் நிலைப்பாடு', value: 'தரவரிசை இல்லை, பரிந்துரை இல்லை' }
    ],
    blocks: [
      { kind: 'h2', text: 'இந்தப் பட்டியல் எப்படித் தொகுக்கப்பட்டுள்ளது' },
      {
        kind: 'p',
        text:
          'இது ஒரு சுயாதீன வழிகாட்டி, தரவரிசை அல்ல. இங்கு எதற்கும் பணம் கொடுக்கப்படவில்லை; எந்த இடமும் மற்றொன்றை விட மேலானதாக வைக்கப்படவில்லை. படகு இல்லத்தைப் பொறுத்து அவை எங்கே அமைந்துள்ளன, பொதுவாக எந்த உணவுக்குப் பயன்படுகின்றன என்பதன் அடிப்படையில் பட்டியல்கள் தொகுக்கப்பட்டுள்ளன; அதனால் உங்கள் நாளின் போக்கிற்குப் பொருந்துவதைத் தேர்ந்தெடுக்கலாம்.'
      },
      {
        kind: 'table',
        caption: 'ஏற்காட்டிலும் அதைச் சுற்றியும் பட்டியலிடப்பட்ட இடங்கள் — வெளி மூலத் தரவு, 2 நவம்பர் 2026 அன்று படிக்கப்பட்டது',
        head: ['பெயர்', 'பட்டியலிடப்பட்ட பகுதி / முகவரி', 'பட்டியலிடப்பட்ட நேரம்', 'எந்த உணவுக்கு ஏற்றது', 'உறுதி செய்ய வேண்டியவை'],
        rows: [
          [
            'The Chutney',
            'ஏற்காடு — சரியான முகவரி உறுதி செய்யப்படவில்லை',
            'வெளியிடப்படவில்லை',
            'காலை, மதியம், இரவு உணவு மற்றும் சிற்றுண்டி (நான்கும் அதன் மெனுவில்)',
            'முகவரி, நேரம் மற்றும் இன்றைய விலை'
          ],
          [
            'Kaapi Stop (கிளியூர் அருவி சாலை)',
            'Sunny Brook Estate, கிளியூர் அருவி சாலை',
            '06:00–21:00',
            'அதிகாலை காலை உணவு, சிற்றுண்டி, காபி',
            'இந்த நேரம் இப்போதும் பொருந்துகிறதா'
          ],
          [
            'Kaapi Stop (அடிவாரம் சாலை)',
            'அடிவாரம் சாலை, மலைச்சாலையின் அடிவாரம் அருகில்',
            '06:00–21:00',
            'மேலேறும் / இறங்கும் வழியில் காலை உணவு',
            'கவுண்டர் விவரங்களும் இருக்கை வசதியும்'
          ],
          [
            'Moddys Chocolates and Cafe',
            'No 1, Hospital Road, Shevaroys complex, Lovers Lane, ஏற்காடு 636601',
            '09:00–21:30',
            'காபி, சாக்லேட், இலகுவான சிற்றுண்டி',
            'மெனு மற்றும் இருக்கை வசதி'
          ],
          ['JOJO MOMOS', 'ஏற்காடு — சரியான முகவரி உறுதி செய்யப்படவில்லை', 'வெளியிடப்படவில்லை', 'சிற்றுண்டி', 'முகவரி மற்றும் நேரம்'],
          [
            'The Lake Cafe',
            'ஒரு தொகுப்புப் பட்டியலில் மட்டுமே உள்ளது (அங்கு நகர மையத்திலிருந்து சுமார் 7.5 கிமீ எனக் காட்டப்பட்டுள்ளது)',
            'உறுதிப்படுத்தப்படவில்லை',
            'தெரியவில்லை',
            'முகவரி, நேரம், மெனு — உறுதி செய்யப்படாததாகக் கருதுங்கள்'
          ]
        ]
      },
      {
        kind: 'note',
        text:
          'மேலே உள்ள ஒவ்வொரு வரிசையும் 2 நவம்பர் 2026 அன்று படிக்கப்பட்ட வெளி மூலப் பட்டியலிலிருந்து எடுக்கப்பட்டது. அத்தகைய பட்டியல்களில் உள்ள நேரமும் தொலைவும் காலாவதியாகும்; மேலும் இந்த இடங்களில் எதுவும் தன் விவரங்களை இந்தத் தளத்துடன் உறுதி செய்யவில்லை. புறப்படும் முன் தொலைபேசியில் கேளுங்கள் அல்லது வந்து சேர்ந்ததும் சரிபாருங்கள்.'
      },
      { kind: 'h2', text: 'உணவு நேரப்படி தேர்வு செய்வது' },
      {
        kind: 'list',
        items: [
          'அதிகாலை புறப்பாடு: 06:00 திறப்பு எனப் பட்டியலிடப்பட்டிருப்பதால், காலைப் படகு சவாரிக்கு முன் எந்த Kaapi Stop கிளையும் நடைமுறைத் தேர்வு.',
          'நண்பகலுக்கு முன் அல்லது மதிய உணவு: The Chutney ஒரே மெனுவில் காலை, மதியம், இரவு உணவு, சிற்றுண்டி எனப் பட்டியலிடுகிறது; ஆனால் அதன் நேரம் வெளியிடப்படவில்லை.',
          'பிற்பகல்: Moddys (காபி, சாக்லேட், 09:00–21:30 எனப் பட்டியலிடப்பட்டது) அல்லது இலகுவான நிற்கைக்கு ஒரு Kaapi Stop கிளை.',
          'மலைச்சாலையில் ஏறும் / இறங்கும் வழி: அடிவாரம் சாலைக் கிளை மலைச்சாலையின் அடிவாரம் அருகில் இருப்பதால், ஏற்றத்திற்கு முன் அல்லது பின் ஒரு இடைவேளைக்கு ஏற்றது.'
        ]
      },
      { kind: 'h2', text: 'புறப்படும் முன்' },
      {
        kind: 'list',
        items: [
          'முகவரியையும் நேரத்தையும் நீங்களே உறுதி செய்யுங்கள்; இங்கு பயன்படுத்தப்பட்ட பட்டியல்கள் பழையதாக இருக்கலாம்.',
          'ஒரு இடம் திறந்திருக்கிறதா என்பதை மட்டுமல்ல, நீங்கள் நினைக்கும் உணவு அங்கு கிடைக்கிறதா என்பதையும் கேளுங்கள்.',
          'எந்த இடத்திலும் ஏரிக் காட்சி, நிறுத்துமிடம் அல்லது இருக்கை வசதியை இந்தப் பக்கம் உறுதி அளிக்காது.',
          'திட்டத்தை நெகிழ்வாக வையுங்கள் — ஏரிக்கும் அதன் கரைக்கும் காட்சி முனைகளுக்கும் முன்பதிவு தேவை இல்லை.'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'முகவரியும் தற்போதைய திறந்திருக்கும் நேரமும் — இங்கு பயன்படுத்தப்பட்ட பட்டியல்கள் பழையதாக இருக்கலாம்.',
          'ஒரு இடம் திறந்திருக்கிறதா என்பதை மட்டுமல்ல, நீங்கள் நினைக்கும் உணவு அங்கு கிடைக்கிறதா என்பதையும்.',
          'இன்று வசூலிக்கப்படும் விலை — பட்டியல் அதைச் சரிபார்க்க வேண்டியதாகக் குறிக்கிறது.',
          'புறப்படும் முன் சரிபார்க்க ஒரு தொலைபேசி எண் வெளியிடப்பட்டுள்ளதா.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'பட்டியலிடப்பட்ட ஒரு இடம் ஏரிக்கு அருகில் உள்ளது எனக் கருதுவது — பட்டியல்கள் அதைக் காட்டவில்லை.',
          'பட்டியலிடப்பட்ட ஒரு திறப்பு நேரத்தையே இன்றைய திறப்பு நேரமாகக் கருதுவது.',
          'The Lake Cafe க்காக மட்டும் பயணம் செய்வது — அதன் விவரங்கள் உறுதி செய்யப்படவில்லை.',
          'சரிபார்க்காமல் நிறுத்துமிடமோ இருக்கை வசதியோ கிடைக்கும் என எதிர்பார்ப்பது.'
        ]
      }
    ],
    faq: [
      {
        q: 'இவற்றில் ஏதேனும் ஏரிக்கு அருகிலேயே உள்ளதா?',
        a: 'இங்கு பயன்படுத்தப்பட்ட பட்டியல்களிலிருந்து அதை உறுதி செய்ய முடியாது. ஏரி Lake to Ladies Seat Road இல் உள்ளது; மேலே உள்ள இடங்கள் நகரத்திலோ அணுகுச் சாலைகளிலோ பட்டியலிடப்பட்டுள்ளன. ஒரு குறிப்பிட்ட இடம் நீர்நிலையைப் பார்க்கிறதா என்பதை வந்து சேர்ந்ததும் கேளுங்கள்.'
      },
      {
        q: 'இவற்றை நீங்கள் தரவரிசைப்படுத்தாதது ஏன்?',
        a: 'இது ஒரு சுயாதீன, வணிக நோக்கற்ற வழிகாட்டி. தேதியுள்ள வெளி மூலங்கள் காட்டுவதை மட்டுமே நாங்கள் பட்டியலிட்டு, உறுதி செய்யப்படாததை அப்படியே குறிக்கிறோம்; அதனால் தரவரிசையைப் பின்பற்றாமல் நீங்களே முடிவு செய்யலாம்.'
      },
      {
        q: 'மேசையை முன்பதிவு செய்யலாமா?',
        a: 'இங்கு பயன்படுத்தப்பட்ட பட்டியல்களில் முன்பதிவு முறை எதுவும் காட்டப்படவில்லை; எனவே நேரடி வருகைச் சேவை எனக் கருதுங்கள். ஒரு பட்டியலில் மட்டுமே தொலைபேசி எண் உள்ளது; ஒரு இடம் எண்ணை வெளியிட்டால் தொலைபேசியில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'எந்த இடங்கள் திறப்பு நேரத்தைக் காட்டுகின்றன, எவை காட்டவில்லை?',
        a: '2 நவம்பர் 2026 அன்று படிக்கப்பட்ட பட்டியல்களின்படி, இரு Kaapi Stop கிளைகளும் 06:00–21:00 எனக் காட்டுகின்றன; Moddys 09:00–21:30 எனக் காட்டுகிறது. The Chutney, JOJO MOMOS, The Lake Cafe ஆகியவை நேரம் எதையும் காட்டவில்லை. புறப்படும் முன் எந்த நேரத்தையும் நேரடியாக உறுதி செய்யுங்கள்.'
      },
      {
        q: 'ஒரு உணவுக்கு இடத்தைத் தேர்ந்தெடுப்பதற்கு முன் என்ன சரிபார்க்க வேண்டும்?',
        a: 'முகவரி, தற்போதைய நேரம், மற்றும் அது திறந்திருக்கிறதா என்பதை மட்டுமல்ல நீங்கள் விரும்பும் உணவு அங்கு கிடைக்கிறதா என்பதையும் உறுதி செய்யுங்கள். இங்குள்ள பட்டியல்கள் 2 நவம்பர் 2026 அன்று படிக்கப்பட்ட வெளி மூலப் பதிவுகள்; பழையதாக இருக்கலாம்; எனவே புறப்படும் முன் சரிபாருங்கள்.'
      }
    ],
    sourceIds: ['chutneyListing', 'kaapiStopListing', 'yercaudRestaurants', 'moddysCafe', 'googleMaps']
  }
};

export default page;
