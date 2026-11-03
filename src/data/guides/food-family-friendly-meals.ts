import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'food/family-friendly-meals',
  family: 'food',
  priority: 'P2',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'The places listed for a family meal sit in the town or on approach roads rather than at the lake, so from the boat house plan a short drive or auto ride. The distance is approximate; confirm the route, seating and opening hours locally on the day.',
    ta: 'குடும்ப உணவுக்குப் பட்டியலிடப்பட்ட இடங்கள் ஏரிக்கு அருகில் அல்ல, நகரத்திலோ அணுகுச் சாலைகளிலோ உள்ளன; எனவே படகு இல்லத்திலிருந்து ஒரு குறுகிய வாகனம் அல்லது ஆட்டோவில் செல்லுங்கள். தொலைவு தோராயமானது; வழி, இருக்கை மற்றும் திறப்பு நேரங்களை அன்றைய நாளில் உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['food/restaurants-near-lake', 'food/vegetarian-near-lake', 'boating/with-kids', 'itineraries/family-with-kids', 'transport/parking'],
  en: {
    title: 'Family meals near Yercaud Lake: seating, toilets and sharing',
    description:
      'Practical questions for a family meal near the lake — seating, toilets, prams, sharing dishes and parking — with anything unverified marked so you can confirm it.',
    kicker: 'Food & drink',
    h1: 'Eating out with children around Yercaud Lake: what to ask',
    lead:
      'A listing tells you a place exists, what it sells and sometimes its hours. It almost never tells you whether there is a high chair, a toilet, or room for a pram. This page collects the questions worth asking before you sit down, and is clear about which answers we simply do not have.',
    facts: [
      { label: 'Verified for families', value: 'Nothing beyond the listings themselves' },
      { label: 'Seating', value: 'Not published for any named place' },
      { label: 'Toilets', value: 'Not mentioned in any listing used here' },
      { label: 'Parking near the lake', value: 'Limited; confirm on arrival' }
    ],
    blocks: [
      { kind: 'h2', text: 'What a family needs that a listing never shows' },
      {
        kind: 'p',
        text:
          'The places listed in Yercaud — the two Kaapi Stop branches, The Chutney and Moddys — are public listings of the fact that they trade. None of them says anything about seating room, toilets, nappy-changing space, high chairs or parking. Those are exactly the details a family with small children needs, so treat each one as unconfirmed until you ask.'
      },
      {
        kind: 'table',
        caption: 'Questions for a family meal — our checklist, not a set of verified answers',
        head: ['Question to ask', 'Why it matters', 'Who can answer'],
        rows: [
          ['Is there room for a pram or a high chair?', 'Seating layouts are not published for any listed place', 'Counter or staff'],
          ['Are there toilets on site?', 'None of the listings used here mentions toilets', 'Staff'],
          ['Can one dish be shared between two children?', 'Portion and plating policy varies by place', 'Staff'],
          ['Where can we park without blocking the road?', 'Parking near the lake shore is limited', 'Staff or local signage']
        ]
      },
      {
        kind: 'note',
        text:
          'Every answer above has to come from the place itself. Nothing here should be read as a confirmed facility — not seating, not toilets, not parking.'
      },
      { kind: 'h2', text: 'Eating with children, step by step' },
      {
        kind: 'steps',
        items: [
          'Decide on the meal and a rough time, so you are not searching with hungry children.',
          'Call ahead if a number is published to ask about seating and toilets.',
          'On arrival, look at the layout before committing; a quick glance beats a hopeful assumption.',
          'Order one or two shared items first, then add more once you see the portions.',
          'Keep a simple fallback: the lakeside and its open air need no table and no booking.'
        ]
      },
      { kind: 'h2', text: 'If a place does not suit you' },
      {
        kind: 'list',
        items: [
          'A lakeside walk keeps everyone occupied while you decide where to eat.',
          'Vegetarian tiffin is common here, so a simple meal is usually close by.',
          'Both Kaapi Stop branches are listed from 06:00, which helps with early-rising children.',
          'Confirm parking, seating and toilets on arrival; this page confirms none of them.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Whether the place has room for a pram or a high chair, which no listing here shows.',
          'Whether there are toilets on site; none of the listings used here mentions them.',
          'Whether one dish can be shared between two children, as portions and plating vary.',
          'Where you can park without blocking the road, since lakeside parking is limited.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Treating a listing as proof of child facilities; none of them confirms seating or toilets.',
          'Searching for a table with hungry children instead of deciding the meal and time first.',
          'Ordering a full round before you have seen the portion sizes.',
          'Forgetting the lakeside fallback, which needs no table and no booking.'
        ]
      }
    ],
    faq: [
      {
        q: 'Are these restaurants good for small children?',
        a: 'We cannot say. The listings confirm only that the places trade; they say nothing about seating, toilets or child facilities. Ask the place directly, and keep a fallback in mind.'
      },
      {
        q: 'Do any of them have high chairs or baby-changing facilities?',
        a: 'Not that we can verify. No listing used on this page mentions either, so assume they may not be available and ask before you rely on them.'
      },
      {
        q: 'Can we share dishes to keep the cost down?',
        a: 'That is a matter for the counter. Portion and plating policy is set by each place and is not published anywhere we can cite, so ask before ordering.'
      },
      {
        q: 'Should we call a place before bringing children?',
        a: 'Call ahead only if a number is published, and use the call to ask about seating and toilets. No listing used here publishes family facilities, so a call is the safer route than an assumption.'
      },
      {
        q: 'What is the safest plan if a place does not suit us?',
        a: 'Keep the lakeside as a fallback: the open air needs no table and no booking. You can also look for vegetarian tiffin, which is common here, or one of the two Kaapi Stop branches listed from 06:00 for early-rising children.'
      }
    ],
    sourceIds: ['kaapiStopListing', 'kaapiStopAdivaram', 'chutneyListing', 'moddysCafe', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு ஏரி அருகில் குடும்ப உணவு: இருக்கை, கழிப்பிடம், பகிர்வு',
    description:
      'ஏரி அருகில் குடும்ப உணவுக்கான நடைமுறைக் கேள்விகள் — இருக்கை, கழிப்பிடம், குழந்தை வண்டி, உணவு பகிர்வு, நிறுத்துமிடம் — உறுதி செய்யப்படாதவை குறிக்கப்பட்டுள்ளன.',
    kicker: 'உணவு & பானம்',
    h1: 'ஏற்காடு ஏரி அருகில் குழந்தைகளுடன் சாப்பிடுவது: எதைக் கேட்க வேண்டும்',
    lead:
      'ஒரு பட்டியல் ஒரு இடம் இருப்பதையும், அது என்ன விற்பதையும், சில நேரங்களில் அதன் நேரத்தையும் சொல்கிறது. ஆனால் குழந்தை நாற்காலி உள்ளதா, கழிப்பிடம் உள்ளதா, குழந்தை வண்டிக்கு இடம் உள்ளதா என்பதை அது ஏறக்குறைய ஒருபோதும் சொல்வதில்லை. அமர்வதற்கு முன் கேட்கத் தகுந்த கேள்விகளை இந்தப் பக்கம் தொகுக்கிறது; எந்தப் பதில்கள் எங்களிடம் இல்லை என்பதையும் தெளிவாகக் கூறுகிறது.',
    facts: [
      { label: 'குடும்பங்களுக்கு உறுதி செய்யப்பட்டது', value: 'பட்டியல்களைத் தவிர வேறு எதுவும் இல்லை' },
      { label: 'இருக்கை', value: 'பெயரிடப்பட்ட எந்த இடத்திற்கும் வெளியிடப்படவில்லை' },
      { label: 'கழிப்பிடம்', value: 'இங்கு பயன்படுத்தப்பட்ட எந்தப் பட்டியலிலும் குறிப்பிடப்படவில்லை' },
      { label: 'ஏரி அருகே நிறுத்துமிடம்', value: 'குறைவு; வந்து சேர்ந்ததும் உறுதி செய்யுங்கள்' }
    ],
    blocks: [
      { kind: 'h2', text: 'ஒரு பட்டியல் ஒருபோதும் காட்டாத குடும்பத் தேவைகள்' },
      {
        kind: 'p',
        text:
          'ஏற்காட்டில் பட்டியலிடப்பட்ட இடங்கள் — இரண்டு Kaapi Stop கிளைகள், The Chutney, Moddys — அவை வணிகம் நடத்துகின்றன என்பதற்கான பொது பட்டியல்களே. அவற்றில் எதுவும் இருக்கை அளவு, கழிப்பிடம், குழந்தைக்கான இடம், குழந்தை நாற்காலி அல்லது நிறுத்துமிடம் பற்றி எதுவும் சொல்லவில்லை. சிறு குழந்தைகள் உள்ள குடும்பத்திற்குத் தேவையானது துல்லியமாக அந்த விவரங்களே; எனவே கேட்கும் வரை ஒவ்வொன்றையும் உறுதி செய்யப்படாததாகக் கருதுங்கள்.'
      },
      {
        kind: 'table',
        caption: 'குடும்ப உணவுக்கான கேள்விகள் — இது எங்கள் சரிபார்ப்புப் பட்டியல், உறுதி செய்யப்பட்ட பதில்கள் அல்ல',
        head: ['கேட்க வேண்டிய கேள்வி', 'ஏன் முக்கியம்', 'யார் பதில் சொல்ல முடியும்'],
        rows: [
          ['குழந்தை வண்டிக்கோ குழந்தை நாற்காலிக்கோ இடம் உள்ளதா?', 'பட்டியலிடப்பட்ட எந்த இடத்திற்கும் இருக்கை அமைப்பு வெளியிடப்படவில்லை', 'கவுண்டர் அல்லது பணியாளர்'],
          ['இங்கே கழிப்பிடம் உள்ளதா?', 'இங்கு பயன்படுத்தப்பட்ட எந்தப் பட்டியலும் கழிப்பிடத்தைக் குறிப்பிடவில்லை', 'பணியாளர்'],
          ['ஒரு உணவை இரண்டு குழந்தைகள் பகிர்ந்து கொள்ளலாமா?', 'அளவும் பரிமாறும் முறையும் இடத்திற்கு இடம் மாறும்', 'பணியாளர்'],
          ['சாலையை மறிக்காமல் எங்கு நிறுத்தலாம்?', 'ஏரிக்கரை அருகில் நிறுத்துமிடம் குறைவு', 'பணியாளர் அல்லது உள்ளூர் அறிவிப்பு']
        ]
      },
      {
        kind: 'note',
        text:
          'மேலே உள்ள ஒவ்வொரு பதிலும் அந்த இடத்திடமிருந்தே வர வேண்டும். இங்கு எதையும் உறுதி செய்யப்பட்ட வசதியாகப் படிக்கக் கூடாது — இருக்கையோ, கழிப்பிடமோ, நிறுத்துமிடமோ அல்ல.'
      },
      { kind: 'h2', text: 'குழந்தைகளுடன் சாப்பிடுவது, படிப்படியாக' },
      {
        kind: 'steps',
        items: [
          'எந்த உணவு, தோராயமான நேரம் என்பதை முடிவு செய்யுங்கள்; பசியுள்ள குழந்தைகளுடன் தேடித் திரிய வேண்டாம்.',
          'ஒரு எண் வெளியிடப்பட்டிருந்தால், இருக்கை மற்றும் கழிப்பிடம் பற்றிக் கேட்க முன்பே தொலைபேசியில் அழையுங்கள்.',
          'வந்ததும், முடிவு எடுப்பதற்கு முன் அமைப்பைப் பாருங்கள்; ஒரு கணப் பார்வை நம்பிக்கையான ஊகத்தை விட மேல்.',
          'முதலில் ஒன்றிரண்டு பகிர்ந்து கொள்ளும் உணவுகளை ஆர்டர் செய்து, அளவைப் பார்த்த பின் மேலும் சேர்க்கவும்.',
          'ஒரு எளிய மாற்றுத் திட்டம் வையுங்கள்: ஏரிக்கரையும் அதன் திறந்தவெளியும் மேசையோ முன்பதிவோ தேவைப்படாது.'
        ]
      },
      { kind: 'h2', text: 'ஒரு இடம் உங்களுக்குப் பொருந்தவில்லை என்றால்' },
      {
        kind: 'list',
        items: [
          'எங்கு சாப்பிடுவது என முடிவு செய்யும் வரை ஏரிக்கரை நடை அனைவரையும் ஈடுபடுத்தும்.',
          'இங்கு சைவ டிபன் பொதுவானது; எனவே ஒரு எளிய உணவு பொதுவாக அருகிலேயே கிடைக்கும்.',
          'இரண்டு Kaapi Stop கிளைகளும் 06:00 முதல் பட்டியலிடப்பட்டுள்ளன; அதிகாலையில் எழும் குழந்தைகளுக்கு உதவும்.',
          'நிறுத்துமிடம், இருக்கை, கழிப்பிடம் ஆகியவற்றை வந்து சேர்ந்ததும் உறுதி செய்யுங்கள்; இந்தப் பக்கம் அவற்றில் எதையும் உறுதி செய்யவில்லை.'
        ]
      },
      { kind: 'h2', text: 'அன்றைய நாளில் உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'அந்த இடத்தில் குழந்தை வண்டிக்கோ குழந்தை நாற்காலிக்கோ இடம் உள்ளதா; இங்கு எந்தப் பட்டியலும் அதைக் காட்டவில்லை.',
          'இடத்தில் கழிப்பிடம் உள்ளதா; இங்கு பயன்படுத்தப்பட்ட எந்தப் பட்டியலும் அவற்றைக் குறிப்பிடவில்லை.',
          'ஒரு உணவை இரண்டு குழந்தைகள் பகிர்ந்து கொள்ளலாமா; அளவும் பரிமாறும் முறையும் மாறுபடும்.',
          'சாலையை மறிக்காமல் எங்கு நிறுத்தலாம்; ஏரிக்கரை அருகில் நிறுத்துமிடம் குறைவு.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'ஒரு பட்டியலைக் குழந்தை வசதிகளுக்கான சான்றாகக் கருதுவது; அவற்றில் எதுவும் இருக்கையையோ கழிப்பிடத்தையோ உறுதி செய்யவில்லை.',
          'உணவையும் நேரத்தையும் முதலில் முடிவு செய்யாமல், பசியுள்ள குழந்தைகளுடன் மேசையைத் தேடுவது.',
          'அளவுகளைப் பார்ப்பதற்கு முன் முழு ஆர்டரையும் செய்வது.',
          'மேசையோ முன்பதிவோ தேவைப்படாத ஏரிக்கரை மாற்றுத் திட்டத்தை மறந்துவிடுவது.'
        ]
      }
    ],
    faq: [
      {
        q: 'இந்த உணவகங்கள் சிறு குழந்தைகளுக்கு ஏற்றவையா?',
        a: 'சொல்ல முடியாது. பட்டியல்கள் அவை வணிகம் நடத்துகின்றன என்பதை மட்டுமே உறுதி செய்கின்றன; இருக்கை, கழிப்பிடம் அல்லது குழந்தை வசதிகள் பற்றி எதுவும் சொல்லவில்லை. அந்த இடத்திடம் நேரடியாகக் கேளுங்கள்; மனதில் ஒரு மாற்றுத் திட்டமும் வையுங்கள்.'
      },
      {
        q: 'இவற்றில் ஏதேனும் குழந்தை நாற்காலி அல்லது குழந்தை பராமரிப்பு அறையைக் கொண்டுள்ளதா?',
        a: 'எங்களால் உறுதி செய்ய முடியாது. இந்தப் பக்கத்தில் பயன்படுத்தப்பட்ட எந்தப் பட்டியலும் இவற்றைக் குறிப்பிடவில்லை; எனவே அவை இல்லாமல் இருக்கலாம் எனக் கருதி, நம்புவதற்கு முன் கேளுங்கள்.'
      },
      {
        q: 'செலவைக் குறைக்க உணவுகளைப் பகிர்ந்து கொள்ளலாமா?',
        a: 'அது கவுண்டரின் விஷயம். அளவும் பரிமாறும் முறையும் ஒவ்வொரு இடத்தால் தீர்மானிக்கப்படுகின்றன; நாங்கள் குறிப்பிடக்கூடிய எந்த மூலத்திலும் வெளியிடப்படவில்லை. எனவே ஆர்டர் செய்வதற்கு முன் கேளுங்கள்.'
      },
      {
        q: 'குழந்தைகளை அழைத்துச் செல்வதற்கு முன் ஒரு இடத்திற்குத் தொலைபேச வேண்டுமா?',
        a: 'ஒரு எண் வெளியிடப்பட்டிருந்தால் மட்டும் முன்பே அழையுங்கள்; அந்த அழைப்பை இருக்கை மற்றும் கழிப்பிடம் பற்றிக் கேட்கப் பயன்படுத்துங்கள். இங்கு பயன்படுத்தப்பட்ட எந்தப் பட்டியலும் குடும்ப வசதிகளை வெளியிடவில்லை; எனவே ஊகத்தை விட ஒரு அழைப்பே பாதுகாப்பான வழி.'
      },
      {
        q: 'ஒரு இடம் எங்களுக்குப் பொருந்தவில்லை எனில் பாதுகாப்பான திட்டம் என்ன?',
        a: 'ஏரிக்கரையை மாற்றுத் திட்டமாக வையுங்கள்: திறந்தவெளிக்கு மேசையோ முன்பதிவோ தேவை இல்லை. மேலும் இங்கு பொதுவான சைவ டிபனையோ, அதிகாலையில் எழும் குழந்தைகளுக்காக 06:00 முதல் பட்டியலிடப்பட்ட இரண்டு Kaapi Stop கிளைகளில் ஒன்றையோ பார்க்கலாம்.'
      }
    ],
    sourceIds: ['kaapiStopListing', 'kaapiStopAdivaram', 'chutneyListing', 'moddysCafe', 'googleMaps']
  }
};

export default page;
