import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'food/cafes-with-lake-views',
  family: 'food',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'From Yercaud Lake & Boat House, the listed cafes sit in the town or on approach roads rather than on the lakeshore, so reaching them means a walk or a short ride out of the lake area towards the town. The distance to each is approximate, and the lakeside walk is right there; confirm the route and the view locally on the day.',
    ta: 'ஏற்காடு ஏரி & படகு இல்லத்திலிருந்து, பட்டியலிடப்பட்ட கஃபேக்கள் ஏரிக்கரையில் அல்ல, நகரத்திலோ அணுகுச் சாலைகளிலோ உள்ளன; எனவே அவற்றை அடைய ஏரிப் பகுதியிலிருந்து நகரத்தை நோக்கி நடந்தோ ஒரு குறுகிய வாகனப் பயணத்திலோ செல்ல வேண்டும். ஒவ்வொன்றுக்கும் தொலைவு தோராயமானது; நீரையே பார்க்க வேண்டுமெனில் ஏரிக்கரை நடை அங்கேயே உள்ளது. வழியையும் காட்சியையும் அன்று உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['food/restaurants-near-lake', 'food/snacks-tea-after-lake', 'visit/lakeside-walk', 'visit/photo-spots'],
  en: {
    title: 'Cafes with a lake view at Yercaud: what is real and what is not',
    description:
      'Cafes are listed in Yercaud, but a lake view is not. This page separates what the listings confirm from what only an on-site look can settle, including The Lake Cafe.',
    kicker: 'Food & drink',
    h1: 'Do Yercaud cafes really have a lake view? What to check',
    lead:
      'A lake view is the thing people are really asking for, and it is the thing the listings cannot prove. The cafes named below are listed in or near Yercaud, but not one of those listings confirms a view over the water. Treat "lake view" as something you establish with your own eyes, on the day.',
    facts: [
      { label: 'What is listed', value: 'Cafes in the town and on approach roads' },
      { label: 'What is not listed', value: 'A confirmed view of the lake' },
      { label: 'Named but unconfirmed', value: 'The Lake Cafe — see below' },
      { label: 'Source basis', value: 'Third-party listings, read 2 Nov 2026' }
    ],
    blocks: [
      { kind: 'h2', text: 'The honest position on "lake view"' },
      {
        kind: 'p',
        text:
          'The lake stands on Lake to Ladies Seat Road, and the boat house is the activity on its shore. The cafes that appear in the listings we can reach sit in the town centre or on roads leading out of it. Nothing in those listings states that any of them looks over the lake, and a name alone is not evidence.'
      },
      { kind: 'h2', text: 'What the listings actually say' },
      {
        kind: 'table',
        caption: 'Cafes listed in or near Yercaud, against the "lake view" claim — third-party data, read 2 November 2026',
        head: ['Cafe', 'Area listed', 'Hours listed', 'Lake view status'],
        rows: [
          [
            'Kaapi Stop (Kiliyur Falls Road)',
            'Sunny Brook Estate, Kiliyur Falls Road',
            '06:00–21:00',
            'Not stated — check on site'
          ],
          [
            'Kaapi Stop (Adivaram Road)',
            'Adivaram Road, near the foot of the ghat road',
            '06:00–21:00',
            'Not stated — near the hill foot, not the lake'
          ],
          ['Moddys Chocolates and Cafe', 'No 1, Hospital Road, Lovers Lane, Yercaud 636601', '09:00–21:30', 'Not stated — listed in the town'],
          ['The Lake Cafe', 'Only in an aggregator list, which places it about 7.5 km from the town centre', 'Not verified', 'Unknown — name only, details unconfirmed']
        ]
      },
      {
        kind: 'note',
        text:
          'A cafe called after the lake is not the same as a cafe facing it. Confirm the view, the hours and whether it is even open before you build a plan around it.'
      },
      { kind: 'h2', text: 'The Lake Cafe, and how to get the view you want' },
      {
        kind: 'p',
        text:
          'The Lake Cafe appears only in an aggregator restaurant list. Its address, opening hours and menu cannot be verified from any source we can reach, and the distance the aggregator shows is its own estimate. Until someone confirms it, plan as if it may not exist in the form you expect, and do not travel across the hills for it alone.'
      },
      {
        kind: 'steps',
        items: [
          'Decide whether you want the view or the coffee; the two may be in different places.',
          'For the water itself, walk the lakeside instead — the shore and the viewpoints need no purchase.',
          'If you want both, ask a listed cafe directly whether any seating faces the lake.',
          'Go and look before ordering, then stay only if the setting is what you had in mind.',
          'Keep expectations dated: any view claim from a listing or a photo may be years old.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Whether any listed cafe actually has seating that faces the lake.',
          'The current hours, which the listings give for some places and not others.',
          'Whether the place is open at all, before you build a plan around it.',
          'The address, which the listings do not confirm for a lake-front position.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Reading a cafe’s name as proof of a lake view.',
          'Travelling across the hills for The Lake Cafe alone, given its unconfirmed details.',
          'Trusting a view claim from a listing or a photo, which may be years old.',
          'Assuming the lakeside view needs a purchase — the shore and viewpoints are open.'
        ]
      }
    ],
    faq: [
      {
        q: 'Is there a cafe that definitely overlooks Yercaud Lake?',
        a: 'We could not confirm one from the sources used here. The named cafes are listed in the town or on approach roads, and the one called The Lake Cafe has no verifiable address, hours or menu. Ask locally and look before committing.'
      },
      {
        q: 'Why include a place you cannot confirm?',
        a: 'Because it keeps appearing in lists, and a visitor will meet the name anyway. We list it with the problem stated plainly rather than leave it looking verified.'
      },
      {
        q: 'How reliable are the listed hours?',
        a: 'They are third-party entries read on 2 November 2026 and may be stale. Treat them as a starting point and confirm before you travel.'
      },
      {
        q: 'Which cafes show hours in the listings, and which do not?',
        a: 'From the listings read on 2 November 2026, both Kaapi Stop branches show 06:00–21:00 and Moddys shows 09:00–21:30. The Lake Cafe shows no verified hours. Treat all of them as a starting point and confirm before you travel.'
      },
      {
        q: 'Should I travel across the hills just for The Lake Cafe?',
        a: 'Its address, hours and menu cannot be verified from any source used here, so do not build a trip around it alone. If you do go, confirm it is open and check the view on site before committing. The lakeside walk needs no purchase.'
      }
    ],
    sourceIds: ['tripRestaurants', 'kaapiStopListing', 'moddysCafe', 'yercaudRestaurants']
  },
  ta: {
    title: 'ஏற்காட்டில் ஏரிக் காட்சி கொண்ட கஃபேக்கள்: எது உண்மை, எது இல்லை',
    description:
      'ஏற்காட்டில் கஃபேக்கள் பட்டியலிடப்பட்டுள்ளன; ஆனால் ஏரிக் காட்சி அல்ல. பட்டியல்கள் உறுதி செய்வதையும், நேரில் பார்த்தால்தான் தெரியும் விஷயத்தையும் இந்தப் பக்கம் பிரிக்கிறது; The Lake Cafe உட்பட.',
    kicker: 'உணவு & பானம்',
    h1: 'ஏற்காடு கஃபேக்களில் உண்மையில் ஏரிக் காட்சி உண்டா? சரிபார்க்க வேண்டியவை',
    lead:
      'மக்கள் உண்மையில் கேட்பது ஏரிக் காட்சிதான்; ஆனால் பட்டியல்களால் அதை நிரூபிக்க முடியாது. கீழே பெயரிடப்பட்ட கஃபேக்கள் ஏற்காட்டிலோ அதன் அணுகுச் சாலைகளிலோ பட்டியலிடப்பட்டுள்ளன; ஆனால் அவற்றில் எந்தப் பட்டியலும் நீர்நிலையை நோக்கிய காட்சியை உறுதி செய்யவில்லை. "ஏரிக் காட்சி" என்பதை அன்று உங்கள் கண்ணால் தான் உறுதி செய்ய வேண்டும்.',
    facts: [
      { label: 'பட்டியலிடப்பட்டிருப்பது', value: 'நகரத்திலும் அணுகுச் சாலைகளிலும் உள்ள கஃபேக்கள்' },
      { label: 'பட்டியலிடப்படாதது', value: 'உறுதி செய்யப்பட்ட ஏரிக் காட்சி' },
      { label: 'பெயர் மட்டும், உறுதியற்றது', value: 'The Lake Cafe — கீழே பார்க்கவும்' },
      { label: 'மூல அடிப்படை', value: 'வெளி மூலப் பட்டியல்கள், 2 நவம்பர் 2026 அன்று படிக்கப்பட்டது' }
    ],
    blocks: [
      { kind: 'h2', text: '"ஏரிக் காட்சி" பற்றிய நேர்மையான நிலைப்பாடு' },
      {
        kind: 'p',
        text:
          'ஏரி Lake to Ladies Seat Road இல் உள்ளது; அதன் கரையின் அடையாளச் செயல்பாடு படகு இல்லம். எங்களால் அணுகக்கூடிய பட்டியல்களில் தோன்றும் கஃபேக்கள் நகர மையத்திலோ அதிலிருந்து வெளியேறும் சாலைகளிலோ உள்ளன. அவற்றில் ஏதேனும் ஏரியை நோக்குகிறது என எந்தப் பட்டியலும் குறிப்பிடவில்லை; ஒரு பெயர் மட்டும் ஆதாரம் அல்ல.'
      },
      { kind: 'h2', text: 'பட்டியல்கள் உண்மையில் என்ன சொல்கின்றன' },
      {
        kind: 'table',
        caption: '"ஏரிக் காட்சி" கூற்றுக்கு எதிராக ஏற்காட்டிலும் அதைச் சுற்றியும் பட்டியலிடப்பட்ட கஃபேக்கள் — வெளி மூலத் தரவு, 2 நவம்பர் 2026 அன்று படிக்கப்பட்டது',
        head: ['கஃபே', 'பட்டியலிடப்பட்ட பகுதி', 'பட்டியலிடப்பட்ட நேரம்', 'ஏரிக் காட்சி நிலை'],
        rows: [
          [
            'Kaapi Stop (கிளியூர் அருவி சாலை)',
            'Sunny Brook Estate, கிளியூர் அருவி சாலை',
            '06:00–21:00',
            'குறிப்பிடப்படவில்லை — நேரில் சரிபாருங்கள்'
          ],
          [
            'Kaapi Stop (அடிவாரம் சாலை)',
            'அடிவாரம் சாலை, மலைச்சாலையின் அடிவாரம் அருகில்',
            '06:00–21:00',
            'குறிப்பிடப்படவில்லை — மலையடிவாரம் அருகில், ஏரி அல்ல'
          ],
          ['Moddys Chocolates and Cafe', 'No 1, Hospital Road, Lovers Lane, ஏற்காடு 636601', '09:00–21:30', 'குறிப்பிடப்படவில்லை — நகரத்தில் பட்டியலிடப்பட்டது'],
          ['The Lake Cafe', 'ஒரு தொகுப்புப் பட்டியலில் மட்டுமே; அங்கு நகர மையத்திலிருந்து சுமார் 7.5 கிமீ எனக் காட்டப்பட்டுள்ளது', 'உறுதிப்படுத்தப்படவில்லை', 'தெரியவில்லை — பெயர் மட்டுமே, விவரங்கள் உறுதியற்றவை']
        ]
      },
      {
        kind: 'note',
        text:
          'ஏரியின் பெயரால் அமைந்த கஃபே என்பது ஏரியை நோக்கிய கஃபே என்பது அல்ல. ஒரு திட்டத்தை அதைச் சுற்றி அமைப்பதற்கு முன் காட்சியையும், நேரத்தையும், அது திறந்திருக்கிறதா என்பதையும் உறுதி செய்யுங்கள்.'
      },
      { kind: 'h2', text: 'The Lake Cafe, மற்றும் நீங்கள் விரும்பும் காட்சியைப் பெறுவது எப்படி' },
      {
        kind: 'p',
        text:
          'The Lake Cafe ஒரு தொகுப்பு உணவகப் பட்டியலில் மட்டுமே தோன்றுகிறது. அதன் முகவரி, திறந்திருக்கும் நேரம், மெனு எதையும் எங்களால் அணுகக்கூடிய எந்த மூலத்திலிருந்தும் உறுதி செய்ய முடியவில்லை; தொகுப்புப் பட்டியல் காட்டும் தொலைவு அதன் சொந்த மதிப்பீடே. யாரேனும் உறுதி செய்யும் வரை, அது நீங்கள் எதிர்பார்க்கும் வடிவத்தில் இல்லாமல் இருக்கலாம் எனக் கருதி, அதற்காக மட்டும் மலைகளைக் கடந்து செல்ல வேண்டாம்.'
      },
      {
        kind: 'steps',
        items: [
          'உங்களுக்கு வேண்டியது காட்சியா அல்லது காபியா என்பதை முதலில் தீர்மானியுங்கள்; இரண்டும் வெவ்வேறு இடங்களில் இருக்கலாம்.',
          'நீரையே பார்க்க வேண்டுமெனில் ஏரிக்கரையில் நடந்து செல்லுங்கள் — கரைக்கும் காட்சி முனைகளுக்கும் எதையும் வாங்க வேண்டியதில்லை.',
          'இரண்டையும் வேண்டுமெனில், பட்டியலிடப்பட்ட கஃபேயிடம் ஏரியை நோக்கிய இருக்கை ஏதேனும் உள்ளதா என நேரடியாகக் கேளுங்கள்.',
          'ஆர்டர் செய்வதற்கு முன் சென்று பாருங்கள்; சூழல் நீங்கள் எண்ணியதாக இருந்தால் மட்டுமே தங்குங்கள்.',
          'எதிர்பார்ப்புகளுக்குத் தேதி வையுங்கள்: பட்டியலிலோ புகைப்படத்திலோ உள்ள காட்சிக் கூற்று பல ஆண்டுகள் பழையதாக இருக்கலாம்.'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'பட்டியலிடப்பட்ட ஏதேனும் கஃபே உண்மையில் ஏரியை நோக்கிய இருக்கை வசதி கொண்டுள்ளதா.',
          'தற்போதைய நேரம் — பட்டியல்கள் சில இடங்களுக்குத் தருகின்றன, சிலவற்றுக்குத் தரவில்லை.',
          'அந்த இடம் திறந்திருக்கிறதா என்பதை முன்பே உறுதி செய்வது, அதைச் சுற்றி ஒரு திட்டத்தை அமைப்பதற்கு முன்.',
          'முகவரி — ஏரிக்கு முன்னால் உள்ள நிலையைப் பட்டியல்கள் உறுதி செய்யவில்லை.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'ஒரு கஃபேயின் பெயரையே ஏரிக் காட்சிக்கான ஆதாரமாகப் படிப்பது.',
          'உறுதி செய்யப்படாத விவரங்களைக் கொண்ட The Lake Cafe க்காக மட்டும் மலைகளைக் கடந்து பயணம் செய்வது.',
          'பட்டியலிலோ புகைப்படத்திலோ உள்ள காட்சிக் கூற்றை நம்புவது — அது பல ஆண்டுகள் பழையதாக இருக்கலாம்.',
          'ஏரிக்கரைக் காட்சிக்கு ஒரு வாங்குதல் தேவை எனக் கருதுவது — கரையும் காட்சி முனைகளும் திறந்தவையே.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஏற்காடு ஏரியை நிச்சயமாக நோக்கும் ஒரு கஃபே உள்ளதா?',
        a: 'இங்கு பயன்படுத்தப்பட்ட மூலங்களிலிருந்து அதை உறுதி செய்ய முடியவில்லை. பெயரிடப்பட்ட கஃபேக்கள் நகரத்திலோ அணுகுச் சாலைகளிலோ பட்டியலிடப்பட்டுள்ளன; The Lake Cafe என்பதற்கு உறுதி செய்யக்கூடிய முகவரி, நேரம், மெனு இல்லை. உள்ளூரில் கேட்டு, முடிவு செய்வதற்கு முன் பாருங்கள்.'
      },
      {
        q: 'உறுதி செய்ய முடியாத ஒரு இடத்தை ஏன் சேர்க்கிறீர்கள்?',
        a: 'அது பட்டியல்களில் தொடர்ந்து தோன்றுவதால், பயணிகள் அந்தப் பெயரை எப்படியும் சந்திப்பார்கள். உறுதி செய்யப்பட்டதாகத் தெரியவிடாமல், சிக்கலை வெளிப்படையாகக் குறிப்பிட்டே நாங்கள் அதைப் பட்டியலிடுகிறோம்.'
      },
      {
        q: 'பட்டியலிடப்பட்ட நேரங்கள் எவ்வளவு நம்பகமானவை?',
        a: 'அவை 2 நவம்பர் 2026 அன்று படிக்கப்பட்ட வெளி மூலப் பதிவுகள்; காலாவதியாகியிருக்கலாம். அவற்றை ஒரு தொடக்கப் புள்ளியாகக் கருதி, புறப்படும் முன் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'பட்டியல்களில் எந்தக் கஃபேக்கள் நேரத்தைக் காட்டுகின்றன, எவை காட்டவில்லை?',
        a: '2 நவம்பர் 2026 அன்று படிக்கப்பட்ட பட்டியல்களின்படி, இரு Kaapi Stop கிளைகளும் 06:00–21:00 எனக் காட்டுகின்றன; Moddys 09:00–21:30 எனக் காட்டுகிறது. The Lake Cafe உறுதி செய்யப்பட்ட நேரம் எதையும் காட்டவில்லை. அனைத்தையும் ஒரு தொடக்கப் புள்ளியாகக் கருதி, புறப்படும் முன் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'The Lake Cafe க்காக மட்டும் மலைகளைக் கடந்து செல்லலாமா?',
        a: 'அதன் முகவரி, நேரம், மெனு எதையும் இங்கு பயன்படுத்தப்பட்ட எந்த மூலத்திலிருந்தும் உறுதி செய்ய முடியவில்லை; எனவே அதற்காக மட்டும் ஒரு பயணத்தை அமைக்க வேண்டாம். சென்றாலும், அது திறந்திருக்கிறதா என்பதை உறுதி செய்து, முடிவு செய்வதற்கு முன் நேரில் காட்சியைப் பாருங்கள். ஏரிக்கரை நடைக்கு எதையும் வாங்க வேண்டியதில்லை.'
      }
    ],
    sourceIds: ['tripRestaurants', 'kaapiStopListing', 'moddysCafe', 'yercaudRestaurants']
  }
};

export default page;
