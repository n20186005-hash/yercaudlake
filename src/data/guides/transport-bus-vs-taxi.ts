import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'transport/bus-vs-taxi',
  family: 'transport',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'From Yercaud Lake & Boat House, the bus stand and any taxi or hired-car pick-up are reached by a short ride or walk out of the lake area into town. Distances are approximate, so confirm the boarding point and the meeting place locally on the day.',
    ta: 'ஏற்காடு ஏரி & படகு இல்லத்திலிருந்து, பேருந்து நிலையமும் டாக்சி அல்லது வாடகை வாகன ஏறும் இடமும் ஏரிப் பகுதியிலிருந்து நகரத்திற்குள் ஒரு குறுகிய வாகனப் பயணம் அல்லது நடையில் அடையலாம். தொலைவுகள் தோராயமானவை; எனவே ஏறும் இடத்தையும் சந்திக்கும் இடத்தையும் அன்று உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['transport/from-salem', 'transport/from-bengaluru', 'transport/parking', 'itineraries/car-free', 'visit/best-time'],
  en: {
    title: 'Bus, taxi or your own car to Yercaud Lake: how to choose',
    description:
      'Bus, hired car or self-drive each suit a different trip. One table sets out who each fits, the trade-offs and what to confirm — with no recommendation either way.',
    kicker: 'Getting there',
    h1: 'Reaching the lake by bus, hired car or self-drive',
    lead:
      'There are three ordinary ways to reach Yercaud Lake: a regular bus, a hired car or taxi, and your own vehicle. Each suits a different kind of trip. This page does not rank them; it only sets out who each fits, what it costs you, and what to confirm before you decide.',
    facts: [
      { label: 'Bus', value: 'Regular Salem–Yercaud services (district page)' },
      { label: 'Hired car / taxi', value: 'Door-to-door, subject to the ghat road' },
      { label: 'Self-drive', value: 'Most flexible, most responsibility' },
      { label: 'Parking', value: 'Not guaranteed at the lake' }
    ],
    blocks: [
      { kind: 'h2', text: 'Three ways, three different trips' },
      {
        kind: 'p',
        text:
          'A regular bus is the district-described service between Salem and Yercaud. A hired car or taxi is arranged door-to-door. Self-drive is your own vehicle over the same climb. None is better than the others; they simply trade flexibility against effort in different ways, and the table below sets that out without a preference.'
      },
      {
        kind: 'table',
        caption: 'The three ways compared, by fit',
        head: ['Option', 'Suits who', 'Upside', 'Trade-off', 'Confirm'],
        rows: [
          ['Bus', 'Travellers without a vehicle, keeping costs down', 'A regular service between Salem and Yercaud, per the district', 'Starts and ends at the bus stand; you cover the last leg yourself', 'The day’s departure time and boarding point'],
          ['Hired car / taxi', 'Groups, families, people with luggage', 'Door-to-door; it can wait or return', 'Fare and route are arranged, not fixed here', 'Provider, fare and a permitted drop-off'],
          ['Self-drive', 'Drivers comfortable on a ghat road', 'Your own pace and stops', 'You handle the climb, weather and parking', 'Route, brake and tyre condition, parking plan']
        ]
      },
      { kind: 'h2', text: 'What no option removes' },
      {
        kind: 'list',
        items: [
          'The ghat climb is common to all three; it does not change with your choice.',
          'No guaranteed parking beside the lake exists for any option.',
          'Availability depends on the day, and arriving earlier tends to shorten the wait.',
          'Whether you walk or ride the last stretch is your decision, whichever way you arrive.'
        ]
      },
      { kind: 'h2', text: 'How to decide without a ranking' },
      {
        kind: 'p',
        text:
          'Decide from the shape of your trip: do you have luggage, are you willing to drive a hill road, how many are travelling, and how much time do you have. No option is “best”; each fits a certain kind of journey. Ask each operator for the current fare and arrangement.'
      },
      {
        kind: 'note',
        text:
          'This page offers no commercial recommendation and no ranking. None of the three is better than the others; fare, availability and arrangements change with the day. Confirm directly before you choose.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'The day’s bus departure time and boarding point from the bus stand.',
          'The hired car’s or taxi’s current fare and a permitted drop-off near the lake.',
          'The return meeting point and time, if the vehicle is to come back.',
          'The parking situation, which is not guaranteed for any option.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Assuming one option is always cheaper, since no current fares are published here.',
          'Leaving the fare and the drop-off point unarranged with a hired car.',
          'Forgetting that the last stretch from the bus stand is covered by you.',
          'Expecting a guaranteed parking space beside the lake whichever way you arrive.'
        ]
      }
    ],
    faq: [
      {
        q: 'Which option is cheapest?',
        a: 'No current fares were obtained, so no cost comparison can be made here. Ask each operator for today’s fare, and note that a bus ticket and a hired car cover different parts of the same trip.'
      },
      {
        q: 'Can a hired car take us all the way to the lake?',
        a: 'A vehicle can reach the lake area, but the permitted drop-off and the return meeting point should be agreed in advance, and parking is not guaranteed. Confirm with the provider and locally on arrival.'
      },
      {
        q: 'Do I need my own vehicle?',
        a: 'No. The district describes regular bus services between Salem and Yercaud, and the bus stand to the lake is a short final leg. A vehicle mainly changes how much of the last stretch you cover yourself.'
      },
      {
        q: 'What should I agree with a hired car before the trip?',
        a: 'Agree the fare, a permitted drop-off near the lake, and the return meeting point and time. A vehicle can reach the lake area, but parking is not guaranteed, so settle where it will wait or return. Confirm the day’s arrangement directly with the provider.'
      },
      {
        q: 'Where does the bus leave me, and how do I reach the lake from there?',
        a: 'The district describes the bus service as running between Salem and Yercaud, and it starts and ends at the bus stand. From there the lake is a short final leg you cover yourself, on foot or by a short ride. Confirm the distance and the way locally on the day.'
      }
    ],
    sourceIds: ['districtLake', 'districtFestivalTransport', 'tnstc', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு ஏரிக்கு பேருந்தா, டாக்சியா, சொந்த வாகனமா: எப்படித் தேர்வு',
    description:
      'பேருந்து, வாடகை வாகனம், சொந்த வாகனம் — ஒவ்வொன்றும் வெவ்வேறு பயணத்திற்குப் பொருத்தம். யாருக்கு ஏற்றது, நன்மை, இழப்பு, உறுதி செய்ய வேண்டியவை ஒரே அட்டவணையில்; எந்தப் பரிந்துரையும் இல்லை.',
    kicker: 'போக்குவரத்து',
    h1: 'பேருந்து, வாடகை வாகனம் அல்லது சொந்த ஓட்டுதல் மூலம் ஏரிக்கு வருவது',
    lead:
      'ஏற்காடு ஏரிக்கு வர மூன்று வழக்கமான வழிகள் உள்ளன: ஒரு வழக்கமான பேருந்து, ஒரு வாடகை வாகனம் அல்லது டாக்சி, மற்றும் உங்கள் சொந்த வாகனம். ஒவ்வொன்றும் வெவ்வேறு வகைப் பயணத்திற்குப் பொருத்தம். இந்தப் பக்கம் அவற்றைத் தரவரிசைப்படுத்தவில்லை; ஒவ்வொன்றும் யாருக்குப் பொருத்தம், என்ன இழப்பு, முடிவு செய்யும் முன் என்ன உறுதி செய்ய வேண்டும் என்பதை மட்டும் தருகிறது.',
    facts: [
      { label: 'பேருந்து', value: 'சேலம்–ஏற்காடு வழக்கமான சேவை (மாவட்டப் பக்கம்)' },
      { label: 'வாடகை வாகனம் / டாக்சி', value: 'வீடு வரை, மலைச்சாலையைப் பொறுத்தது' },
      { label: 'சொந்த வாகனம்', value: 'அதிக சுதந்திரம், அதிக பொறுப்பு' },
      { label: 'பார்க்கிங்', value: 'ஏரியில் உறுதி அல்ல' }
    ],
    blocks: [
      { kind: 'h2', text: 'மூன்று வழிகள், மூன்று வெவ்வேறு பயணங்கள்' },
      {
        kind: 'p',
        text:
          'வழக்கமான பேருந்து என்பது சேலம்–ஏற்காடு இடையே மாவட்டம் விவரிக்கும் சேவை. வாடகை வாகனம் அல்லது டாக்சி வீடு வரை ஏற்பாடு செய்யப்படுகிறது. சொந்த வாகனம் என்பது அதே ஏற்றத்தை உங்கள் சொந்த வாகனத்தில் கடப்பது. எதுவும் மற்றவற்றை விட மேலானது அல்ல; அவை வெவ்வேறு வழிகளில் சுதந்திரத்திற்கும் உழைப்பிற்கும் இடையே பரிமாற்றம் செய்கின்றன; கீழே உள்ள அட்டவணை அதை எந்த விருப்பமும் இல்லாமல் தருகிறது.'
      },
      {
        kind: 'table',
        caption: 'மூன்று வழிகளின் ஒப்பீடு, பொருத்தத்தின்படி',
        head: ['வழி', 'யாருக்குப் பொருத்தம்', 'நன்மை', 'இழப்பு', 'உறுதி செய்ய வேண்டியவை'],
        rows: [
          ['பேருந்து', 'வாகனம் இல்லாத, செலவைக் கட்டுப்படுத்த விரும்பும் பயணிகள்', 'சேலம்–ஏற்காடு இடையே வழக்கமான சேவை என மாவட்டம் குறிப்பிடுகிறது', 'பேருந்து நிலையத்தில் தொடங்கி முடிகிறது; இறுதிப் பகுதியை நீங்களே கடக்க வேண்டும்', 'அன்றைய புறப்பு நேரமும் ஏறும் இடமும்'],
          ['வாடகை வாகனம் / டாக்சி', 'குழுக்கள், குடும்பங்கள், லக்கேஜ் உள்ளவர்கள்', 'வீடு வரை; காத்திருக்கவோ திரும்பவோ இயலும்', 'கட்டணமும் வழியும் ஏற்பாட்டின்படி; இங்கு நிலையானது அல்ல', 'வழங்குநர், கட்டணம், அனுமதிக்கப்பட்ட இறங்கும் இடம்'],
          ['சொந்த வாகனம்', 'மலைச்சாலையில் ஓட்டப் பழக்கமுள்ள ஓட்டுநர்கள்', 'உங்கள் வேகத்திலும் நிறுத்தங்களிலும் செல்லலாம்', 'ஏற்றம், வானிலை, பார்க்கிங் ஆகியவற்றை நீங்களே கையாள வேண்டும்', 'வழி, பிரேக்–டயர் நிலை, பார்க்கிங் திட்டம்']
        ]
      },
      { kind: 'h2', text: 'எந்த வழியும் நீக்காதவை' },
      {
        kind: 'list',
        items: [
          'மலைச்சாலை ஏற்றம் மூன்று வழிக்கும் பொதுவானது; அது உங்கள் தேர்வுடன் மாறாது.',
          'ஏரிக்கு அருகில் உறுதியான பார்க்கிங் எந்த வழிக்கும் இல்லை.',
          'கிடைப்பது அன்றைய நிலையைப் பொறுத்தது; முன்னதாக வந்தால் காத்திருப்பு குறையும்.',
          'இறுதிப் பகுதியை நடப்பதா, வாகனத்தில் செல்வதா என்பது எப்படி வந்தாலும் உங்கள் முடிவே.'
        ]
      },
      { kind: 'h2', text: 'தரவரிசை இல்லாமல் எப்படி முடிவு செய்வது' },
      {
        kind: 'p',
        text:
          'உங்கள் பயணத்தின் தன்மையை வைத்து முடிவு செய்யுங்கள்: லக்கேஜ் இருக்கிறதா, மலைச்சாலையை ஓட்ட விருப்பம் இருக்கிறதா, எத்தனை பேர் பயணம் செய்கிறீர்கள், எவ்வளவு நேரம் உள்ளது. எந்த வழியும் “மேலானது” அல்ல; ஒவ்வொன்றும் ஒரு குறிப்பிட்ட வகைப் பயணத்திற்குப் பொருத்தம். தற்போதைய கட்டணத்தையும் ஏற்பாட்டையும் ஒவ்வொரு வழங்குநரிடமும் கேளுங்கள்.'
      },
      {
        kind: 'note',
        text:
          'இந்தப் பக்கம் வணிகப் பரிந்துரையையோ தரவரிசையையோ தரவில்லை. மூன்றில் எதுவும் மற்றவற்றை விட மேலானது அல்ல; கட்டணம், கிடைப்பு, ஏற்பாடு ஆகியவை அன்றைய நிலையைப் பொறுத்து மாறும். தேர்வு செய்யும் முன் நேரடியாக உறுதி செய்யுங்கள்.'
      },
      { kind: 'h2', text: 'அன்று உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'பேருந்து நிலையத்திலிருந்து அன்றைய புறப்பு நேரமும் ஏறும் இடமும்.',
          'வாடகை வாகனம் அல்லது டாக்சியின் தற்போதைய கட்டணமும் ஏரி அருகில் அனுமதிக்கப்பட்ட இறங்கும் இடமும்.',
          'வாகனம் திரும்பி வர வேண்டுமெனில் திரும்பச் சந்திக்கும் இடமும் நேரமும்.',
          'எந்த வழிக்கும் உறுதி அளிக்கப்படாத பார்க்கிங் நிலை.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'ஒரு வழி எப்போதும் மலிவானது எனக் கருதுவது — தற்போதைய கட்டணங்கள் எதுவும் இங்கு வெளியிடப்படவில்லை.',
          'வாடகை வாகனத்துடன் கட்டணத்தையும் இறங்கும் இடத்தையும் ஏற்படுத்தாமல் விட்டுவிடுவது.',
          'பேருந்து நிலையத்திலிருந்து இறுதிப் பகுதியை நீங்களே கடக்க வேண்டும் என்பதை மறப்பது.',
          'எப்படி வந்தாலும் ஏரிக்கு அருகில் உறுதியான பார்க்கிங் இடம் இருக்கும் என எதிர்பார்ப்பது.'
        ]
      }
    ],
    faq: [
      {
        q: 'எந்த வழி மலிவானது?',
        a: 'தற்போதைய கட்டணங்கள் எதுவும் கிடைக்கவில்லை; எனவே இங்கு செலவை ஒப்பிட முடியாது. ஒவ்வொரு வழங்குநரிடமும் இன்றைய கட்டணத்தைக் கேளுங்கள்; பேருந்து டிக்கெட்டும் வாடகை வாகனமும் ஒரே பயணத்தின் வெவ்வேறு பகுதிகளை உள்ளடக்குகின்றன.'
      },
      {
        q: 'வாடகை வாகனம் ஏரி வரை செல்லுமா?',
        a: 'ஒரு வாகனம் ஏரிப் பகுதிக்குச் செல்ல முடியும்; ஆனால் அனுமதிக்கப்பட்ட இறங்கும் இடமும் திரும்பச் சந்திக்கும் இடமும் முன்கூட்டியே ஏற்படுத்திக் கொள்ள வேண்டும், பார்க்கிங் உறுதி அல்ல. வழங்குநரிடமும் வந்ததும் உள்ளூரிலும் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'சொந்த வாகனம் கட்டாயமா?',
        a: 'இல்லை. சேலம்–ஏற்காடு இடையே வழக்கமான பேருந்து சேவை இருப்பதாக மாவட்டம் குறிப்பிடுகிறது; பேருந்து நிலையத்திலிருந்து ஏரி ஒரு குறுகிய இறுதிப் பகுதி. வாகனம் இருந்தால், இறுதிப் பகுதியில் எவ்வளவு தூரம் நீங்களே கடப்பீர்கள் என்பது மட்டுமே மாறும்.'
      },
      {
        q: 'பயணத்திற்கு முன் வாடகை வாகனத்துடன் என்ன ஏற்படுத்த வேண்டும்?',
        a: 'கட்டணம், ஏரி அருகில் அனுமதிக்கப்பட்ட இறங்கும் இடம், மற்றும் திரும்பச் சந்திக்கும் இடமும் நேரமும் ஆகியவற்றை ஏற்படுத்துங்கள். ஒரு வாகனம் ஏரிப் பகுதிக்குச் செல்ல முடியும்; ஆனால் பார்க்கிங் உறுதி அல்ல; எனவே அது எங்கே காத்திருக்கும் அல்லது திரும்பும் என்பதை முடிவு செய்யுங்கள். அன்றைய ஏற்பாட்டை வழங்குநரிடம் நேரடியாக உறுதி செய்யுங்கள்.'
      },
      {
        q: 'பேருந்து என்னை எங்கே இறக்கும், அங்கிருந்து ஏரிக்கு எப்படிச் செல்வது?',
        a: 'சேலம்–ஏற்காடு இடையே பேருந்து சேவை இருப்பதாக மாவட்டம் குறிப்பிடுகிறது; அது பேருந்து நிலையத்தில் தொடங்கி முடிகிறது. அங்கிருந்து ஏரி ஒரு குறுகிய இறுதிப் பகுதி; அதை நடந்தோ ஒரு குறுகிய வாகனப் பயணத்திலோ நீங்களே கடக்க வேண்டும். தொலைவையும் வழியையும் அன்று உள்ளூரில் உறுதி செய்யுங்கள்.'
      }
    ],
    sourceIds: ['districtLake', 'districtFestivalTransport', 'tnstc', 'googleMaps']
  }
};

export default page;
