import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'itineraries/lake-in-one-hour',
  family: 'itineraries',
  priority: 'P2',
  lastChecked: '2 November 2026',
  fromLake: {
    en: 'This plan begins at Yercaud Lake & Boat House itself, on Lake Road in the town centre. Everything in the one-hour visit happens within the lake area, so no transport is needed once you arrive; getting to the lake from elsewhere in Yercaud is by road, and distances in listings vary, so confirm the travel time on the day.',
    ta: 'இந்தத் திட்டம் ஏற்காடு ஏரி & படகு இல்லத்திலேயே, நகர மையத்தில் உள்ள லேக் ரோட்டில் தொடங்குகிறது. ஒரு மணி நேர வருகையில் உள்ள அனைத்தும் ஏரிப் பகுதிக்குள் நடப்பதால், வந்ததும் போக்குவரத்து தேவையில்லை; ஏற்காட்டின் மற்ற இடங்களிலிருந்து ஏரிக்கு வருவது சாலை வழியாகவே; பட்டியல்களில் தொலைவுகள் வேறுபடுகின்றன; எனவே பயண நேரத்தை அன்று உறுதி செய்யுங்கள்.'
  },
  related: ['visit/lakeside-walk', 'boating/timings', 'food/snacks-tea-after-lake', 'transport/parking'],
  en: {
    title: 'One hour at Yercaud Lake: the one thing worth doing',
    description:
      'Only an hour at Yercaud Lake? Here is the single thing worth your time, what to skip entirely, and how to leave on schedule. No boat ride is promised.',
    kicker: 'Itineraries',
    h1: 'One hour at the lake: what to do, what to give up',
    lead:
      'An hour is the shortest visit the lakeside rewards. On that budget the honest advice is to pick one thing and protect it, not to run between gates. This page sets out the single best use of sixty minutes, and everything you should drop to keep it.',
    facts: [
      { label: 'Suits', value: 'A quick stop on a longer drive' },
      { label: 'Time budget (estimate)', value: 'About one hour at the lake' },
      { label: 'Give up', value: 'Parks, viewpoints and the falls' },
      { label: 'If it rains', value: 'Shelter in town; drop the lake' }
    ],
    blocks: [
      { kind: 'h2', text: 'Arrive early, or accept a thin hour' },
      {
        kind: 'p',
        text:
          'The lake area listing shows general hours of about 09:00–18:00 and the boat house sits on Lake Road. Coming in the first hour or two after opening gives you the quietest lakeside and the shortest boat queue; by late morning the promenade is busiest and an hour stops being enough. If you cannot arrive early, still come — just give up any hope of a boat.'
      },
      { kind: 'h2', text: 'The one thing worth the hour: a lakeside walk' },
      {
        kind: 'list',
        items: [
          'Walk one stretch of the shore rather than trying to complete a full loop — the lake is described as the only natural lake among South Indian hill-station lakes.',
          'Give the water view your time; that view, with the boat house and the parks around the shore, is the reason the stop exists.',
          'Keep children beside you and inside the railings on the promenade.'
        ]
      },
      {
        kind: 'table',
        caption: 'One hour measured against three nearby extras',
        head: ['Extra', 'Time on its own', 'Verdict for a one-hour visit'],
        rows: [
          ['Anna Park next to the lake', 'A stop in its own right', 'Drop it — the entry fee buys a visit you cannot finish'],
          ['A hill viewpoint (about 5 km)', 'Vehicle each way plus viewing', 'Drop it — the drive alone eats the hour'],
          ['Kiliyur Falls (about 3 km)', 'Road trip plus a walk down', 'Drop it — this is a half-day on its own']
        ]
      },
      { kind: 'h2', text: 'Lunch, rest and the boat queue' },
      {
        kind: 'p',
        text:
          'There is no room for a meal inside an hour — at most a quick drink from a kiosk, or a cafe in town afterwards. Ask the counter for the current wait before paying for anything: if it is short a ride can still fit, but never start one you cannot finish inside your hour. If rain arrives, the walk is pointless and the boat house may not run, so move inside to a cafe or shop.'
      },
      {
        kind: 'note',
        text:
          'A boat ride is not promised in a one-hour plan, and a forecast proves nothing about operation — decide on what you can see. Keep a ten-minute buffer to walk back to your vehicle, and leave when the hour is up, not when the lake feels finished.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'The boat house queue and whether a boat is running before you pay for anything.',
          'Current lake-area hours, which the listing gives as roughly 09:00–18:00 but may vary.',
          'Whether rain is expected, since a wet hour is better spent in a town cafe.',
          'That you can walk back to your vehicle inside the last ten minutes.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Starting a boat ride you cannot finish inside your hour once the queue is counted.',
          'Trying to fit a sit-down meal into a one-hour plan, when at most a quick drink will do.',
          'Treating a weather forecast as proof that boats are running.',
          'Adding a park or a viewpoint, whose entry or drive alone uses up the hour.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can I do the boat and the walk in an hour?',
        a: 'Only if the queue is short and a boat is running. The walk alone fills an hour comfortably. Decide at the counter, not in advance.'
      },
      {
        q: 'Is an hour enough with children?',
        a: 'For a lakeside walk, yes, if you keep everyone together and skip the parks. For a boat ride and a park as well, no — plan a longer visit.'
      },
      {
        q: 'What if the lake area is shut?',
        a: 'The lakeside is part of the town, so ask locally what is open. If the boat house is closed, the walk and a cafe stop are the fallback.'
      },
      {
        q: 'Do we need a vehicle for a one-hour lake visit?',
        a: 'No. The one-hour plan stays inside the lake area, so nothing is gained by moving the vehicle. If you came from elsewhere in Yercaud, arrange your onward trip before you start.'
      },
      {
        q: 'Are there facilities at Yercaud Lake?',
        a: 'No verified list of facilities such as toilets, drinking water or shops inside the lake area was obtained for this page. Do not assume them; check on arrival and carry what you need.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'ttdcBooking', 'googleMaps', 'openMeteo']
  },
  ta: {
    title: 'ஏற்காடு ஏரியில் ஒரு மணி நேரம்: மதிப்புள்ள ஒரே விஷயம்',
    description:
      'ஏற்காடு ஏரியில் ஒரு மணி நேரம் மட்டுமே உள்ளதா? அந்த நேரத்திற்கு மதிப்புள்ள ஒரே விஷயம், முழுவதுமாகத் தவிர்க்க வேண்டியவை, நேரத்திற்கு வெளியேறுவது எப்படி. படகு சவாரி உறுதி அல்ல.',
    kicker: 'பயணத் திட்டங்கள்',
    h1: 'ஏரியில் ஒரு மணி நேரம்: என்ன செய்வது, என்ன தவிர்ப்பது',
    lead:
      'ஒரு மணி நேரம் என்பது ஏரிக்கரை தரும் மிகக் குறுகிய பயணம். அந்த நேரத்திற்கு நேர்மையான ஆலோசனை — ஒரே ஒரு விஷயத்தைத் தேர்ந்து அதைப் பாதுகாப்பது; வாயில்களுக்கு இடையே ஓடுவது அல்ல. அறுபது நிமிடங்களின் சிறந்த பயன்பாடும், விட்டுவிட வேண்டியவையும் இந்தப் பக்கத்தில் உள்ளன.',
    facts: [
      { label: 'பொருத்தம்', value: 'நீண்ட பயணத்தில் ஒரு குறுகிய நிறுத்தம்' },
      { label: 'நேரம் (கணிப்பு)', value: 'ஏரியில் ஏறக்குறைய ஒரு மணி நேரம்' },
      { label: 'விட்டுவிட வேண்டியவை', value: 'பூங்காக்கள், காட்சி முனைகள், அருவி' },
      { label: 'மழை பெய்தால்', value: 'நகரத்தில் தங்குங்கள்; ஏரியைத் தவிர்க்கவும்' }
    ],
    blocks: [
      { kind: 'h2', text: 'முன்னதாக வாருங்கள், இல்லையேல் குறுகிய நேரத்தை ஏற்றுக்கொள்ளுங்கள்' },
      {
        kind: 'p',
        text:
          'ஏரிப் பகுதியின் வரைபடப் பதிவில் பொதுவான நேரம் சுமார் 09:00–18:00 எனவும், படகு இல்லம் லேக் ரோட்டில் இருப்பதாகவும் உள்ளது. திறந்த பின் முதல் ஒன்றிரண்டு மணி நேரத்தில் வந்தால் ஏரிக்கரை அமைதியாகவும் படகு வரிசை குறுகியதாகவும் இருக்கும்; பிற்பகல் ஆகஆக நடைபாதை நெரிசலாகும், ஒரு மணி நேரம் போதாது. முன்னதாக வர முடியாவிட்டாலும் வாருங்கள்; ஆனால் படகு கிடைக்கும் என்ற எதிர்பார்ப்பை மட்டும் விட்டுவிடுங்கள்.'
      },
      { kind: 'h2', text: 'ஒரு மணி நேரத்திற்கு மதிப்புள்ள ஒரே விஷயம்: ஏரிக்கரை நடை' },
      {
        kind: 'list',
        items: [
          'முழுச் சுற்றையும் முடிக்க முயற்சிக்காமல் கரையின் ஒரு பகுதியில் மட்டும் நடங்கள் — தென்னிந்திய மலைவாசஸ்தல ஏரிகளில் இயற்கை ஏரி என்ற தனித்துவம் இதற்கு உண்டு.',
          'நீரின் மேல் பார்வைக்கு நேரம் ஒதுக்குங்கள்; கரையைச் சுற்றியுள்ள படகு இல்லமும் பூங்காக்களும் சேர்ந்த அந்தக் காட்சியே இந்த நிறுத்தத்தின் காரணம்.',
          'நடைபாதையில் குழந்தைகளை உங்கள் அருகிலும் தடுப்புக்கு உள்ளேயும் வையுங்கள்.'
        ]
      },
      {
        kind: 'table',
        caption: 'ஒரு மணி நேரம் — அருகிலுள்ள மூன்று கூடுதல் இடங்கள்',
        head: ['கூடுதல் இடம்', 'தனியாக எடுக்கும் நேரம்', 'ஒரு மணி நேரத்திற்கான முடிவு'],
        rows: [
          ['ஏரிக்கு அருகிலுள்ள அண்ணா பூங்கா', 'தனியான ஒரு நிறுத்தம்', 'விட்டுவிடுங்கள் — நுழைவுக் கட்டணம் முடிக்க முடியாத பயணத்தை வாங்கித் தரும்'],
          ['ஒரு மலைக் காட்சி முனை (சுமார் 5 கிமீ)', 'இரு வழி வாகனம் மற்றும் பார்வை', 'விட்டுவிடுங்கள் — வாகனப் பயணமே மணி நேரத்தை விழுங்கும்'],
          ['கிளியூர் அருவி (சுமார் 3 கிமீ)', 'சாலைப் பயணம் மற்றும் கீழ்நோக்கிய நடை', 'விட்டுவிடுங்கள் — இது தனியாக ஒரு அரை நாள்']
        ]
      },
      { kind: 'h2', text: 'மதிய உணவு, ஓய்வு மற்றும் படகு காத்திருப்பு' },
      {
        kind: 'p',
        text:
          'ஒரு மணி நேரத்திற்குள் ஒரு முழு உணவுக்கு இடமில்லை — அதிகபட்சம் ஒரு கடையில் குறுகிய பானம் அல்லது அதன் பின் நகரத்தில் ஒரு கஃபே. எதற்கும் பணம் செலுத்தும் முன் கவுண்டரில் தற்போதைய காத்திருப்பைக் கேளுங்கள்: குறுகியதெனில் சவாரி பொருந்தலாம்; ஆனால் உங்கள் மணி நேரத்திற்குள் முடிக்க முடியாத சவாரியைத் தொடங்க வேண்டாம். மழை வந்தால் சுற்று நடையில் அர்த்தமில்லை; படகு இல்லமும் இயங்காமல் போகலாம் — எனவே ஒரு கஃபே அல்லது கடைக்குள் செல்லுங்கள்.'
      },
      {
        kind: 'note',
        text:
          'ஒரு மணி நேரத் திட்டத்தில் படகு சவாரி உறுதி அல்ல; முன்னறிவிப்பு படகு இயக்கத்தை நிரூபிக்காது — கண்ணால் பார்ப்பதை வைத்து முடிவு செய்யுங்கள். வாகனத்திற்குத் திரும்ப நடக்க பத்து நிமிட இடைவெளியை வைத்திருங்கள்; ஏரி முடிந்தபோது அல்ல, மணி நேரம் முடிந்தபோது வெளியேறுங்கள்.'
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'எதற்கும் பணம் செலுத்தும் முன் படகு இல்ல வரிசையும் படகு இயங்குகிறதா என்பதும்.',
          'தற்போதைய ஏரிப் பகுதி நேரம்; பட்டியல் சுமார் 09:00–18:00 எனக் கூறினாலும் மாறலாம்.',
          'மழை எதிர்பார்க்கப்படுகிறதா; ஈரமான ஒரு மணி நேரத்தை நகரக் கஃபேயில் செலவிடுவது நல்லது.',
          'கடைசி பத்து நிமிடங்களுக்குள் வாகனத்திற்குத் திரும்ப நடக்க முடியுமா.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'வரிசை சேர்ந்ததும், உங்கள் ஒரு மணி நேரத்திற்குள் முடிக்க முடியாத படகு சவாரியைத் தொடங்குவது.',
          'ஒரு மணி நேரத் திட்டத்திற்குள் அமர்ந்து சாப்பிடும் உணவை அடக்க முயற்சிப்பது; அதிகபட்சம் ஒரு குறுகிய பானம் போதும்.',
          'வானிலை முன்னறிவிப்பைப் படகுகள் இயங்குவதற்கான உறுதியாகக் கருதுவது.',
          'நுழைவுக் கட்டணமோ வாகனப் பயணமோ மணி நேரத்தையே எடுத்துவிடும் ஒரு பூங்காவையோ காட்சி முனையையோ சேர்ப்பது.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஒரு மணி நேரத்தில் படகும் நடையும் இரண்டையும் செய்ய முடியுமா?',
        a: 'வரிசை குறுகியதாகவும் படகு இயங்கிக்கொண்டிருந்தாலும் மட்டுமே. நடை மட்டும் ஒரு மணி நேரத்தை நிறைவாக நிரப்பும். முடிவைக் கவுண்டரில் எடுங்கள், முன்கூட்டியே அல்ல.'
      },
      {
        q: 'குழந்தைகளுடன் ஒரு மணி நேரம் போதுமா?',
        a: 'ஏரிக்கரை நடைக்கு, எல்லோரையும் ஒன்றாக வைத்து பூங்காக்களைத் தவிர்த்தால் போதும். படகு சவாரியும் ஒரு பூங்காவும் சேர்த்தால் போதாது — நீண்ட பயணத்தைத் திட்டமிடுங்கள்.'
      },
      {
        q: 'ஏரிப் பகுதி மூடப்பட்டிருந்தால் என்ன செய்வது?',
        a: 'ஏரிக்கரை நகரத்தின் ஒரு பகுதி; எனவே எது திறந்திருக்கிறது என்பதை உள்ளூரில் கேளுங்கள். படகு இல்லம் மூடப்பட்டிருந்தால், நடையும் ஒரு கஃபே நிறுத்தமும் மாற்றுத் திட்டம்.'
      },
      {
        q: 'ஒரு மணி நேர ஏரி வருகைக்கு வாகனம் தேவையா?',
        a: 'இல்லை. ஒரு மணி நேரத் திட்டம் ஏரிப் பகுதிக்குள்ளேயே இருக்கிறது; எனவே வாகனத்தை நகர்த்துவதால் பயனில்லை. ஏற்காட்டின் மற்ற இடத்திலிருந்து வந்திருந்தால், தொடங்குவதற்கு முன் அடுத்த பயணத்தை ஏற்பாடு செய்யுங்கள்.'
      },
      {
        q: 'ஏற்காடு ஏரியில் வசதிகள் உள்ளதா?',
        a: 'இந்தப் பக்கத்திற்கு, ஏரிப் பகுதிக்குள் கழிப்பறை, குடிநீர், கடைகள் போன்ற வசதிகள் இருப்பதற்கான உறுதி செய்யப்பட்ட பட்டியல் கிடைக்கவில்லை. இருப்பதாகக் கருத வேண்டாம்; வந்ததும் சரிபார்த்து, தேவையானதை எடுத்துச் செல்லுங்கள்.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'ttdcBooking', 'googleMaps', 'openMeteo']
  }
};

export default page;
