import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'boating/online-booking',
  family: 'boating',
  priority: 'P0',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'The TTDC boat house is on the Yercaud Lake shore, so if you have already reached the lake you can walk along the lakeside to the counter and jetty; no vehicle is needed. The distance is approximate — confirm the counter location locally on the day, and check the TTDC portal before travelling.',
    ta: 'TTDC படகு இல்லம் ஏற்காடு ஏரிக்கரையில் உள்ளது; நீங்கள் ஏரியை அடைந்துவிட்டால் ஏரிக்கரை வழியாக நடந்தே கவுண்டரையும் தளத்தையும் அடையலாம், வாகனம் தேவையில்லை. தூரம் தோராயமானது — கவுண்டரின் இடத்தை அன்று உள்ளூரில் உறுதி செய்யுங்கள்; புறப்படும் முன் TTDC தளத்தையும் பாருங்கள்.'
  },
  related: ['boating/guide', 'boating/prices', 'boating/timings', 'transport/from-salem', 'itineraries/lake-half-day'],
  en: {
    title: 'Yercaud boat house online booking vs buying at the counter',
    description:
      'TTDC lists an online booking route for Yercaud boating, but it is not a counter ticket. See what a reservation can and cannot promise, and what to verify yourself.',
    kicker: 'Boating',
    h1: 'Booking a boat online: what it does and does not guarantee',
    lead:
      'The district boat-house page states that an online booking facility through TTDC is in operation, and the TTDC booking portal is the listing behind it. Walk-up tickets at the counter remain the normal route. The two are not the same transaction, and picking one changes what you are promised.',
    facts: [
      { label: 'Online route', value: 'TTDC booking portal (read 2 Nov 2026)' },
      { label: 'Counter tickets', value: 'Still the normal walk-up route' },
      { label: 'Slot times', value: 'Unconfirmed — check the portal' },
      { label: 'Cancellation policy', value: 'To be verified on the portal' }
    ],
    blocks: [
      { kind: 'h2', text: 'Two ways to get a boat on Yercaud Lake' },
      {
        kind: 'p',
        text:
          'An online reservation and a counter ticket both end with you on a boat, but they protect you differently. An online route is worth the effort when you are travelling far and want some assurance before the day; a counter ticket keeps you flexible and costs nothing if plans change.'
      },
      {
        kind: 'list',
        items: [
          'Online: reserve through the TTDC portal before the day, if it is open for your date.',
          'Counter: buy on arrival; nothing is committed in advance, and the queue decides your wait.',
          'The district page names TTDC for online booking. No other booking route is confirmed here.'
        ]
      },
      { kind: 'h2', text: 'What a reservation can and cannot promise' },
      {
        kind: 'list',
        items: [
          'Can promise: that a booking exists on the operator’s system, under its terms.',
          'Can promise: to hold a place or a stated slot, if the portal says so for your date.',
          'Cannot promise: that weather, water level or maintenance will not pause service.',
          'Cannot promise: a specific boat type, a particular boat or an exact departure minute.',
          'Cannot promise: that a printed price is the day’s counter price — see the price page.'
        ]
      },
      { kind: 'h2', text: 'Checking slots and the cancellation policy' },
      {
        kind: 'p',
        text:
          'Slot availability, how far ahead you can book and cancellation terms are set by the operator and shown, if at all, on the booking portal. No cancellation or refund policy was obtained for this page, so treat cancellation as to be verified: open the portal for your date, read the terms before paying, and confirm at the boat house.'
      },
      {
        kind: 'note',
        text:
          'Keep a copy of any confirmation and its terms. If the portal is unclear for your date, the safest fallback is a walk-up ticket, accepting that you may have to wait.'
      },
      { kind: 'h2', text: 'Online booking and a counter ticket, side by side' },
      {
        kind: 'table',
        caption: 'What each route can and cannot do',
        head: ['Question', 'Online booking', 'Counter ticket'],
        rows: [
          ['Holds a place in advance?', 'Yes, if the portal states a slot for your date', 'No — the queue decides your wait'],
          ['Promises a specific boat?', 'No', 'No'],
          ['Promises a specific departure minute?', 'No', 'No'],
          ['Costs you if plans change?', 'Depends on the operator’s terms — read them', 'None — you simply do not buy'],
          ['Overrides weather or maintenance?', 'No', 'No']
        ]
      },
      {
        kind: 'list',
        items: [
          'Open the TTDC portal for your exact date before deciding.',
          'Read the terms before paying, and keep a copy of any confirmation.',
          'If the portal is unclear for your date, the walk-up counter ticket is the safer fallback.',
          'No cancellation or refund policy was obtained for this page — treat it as to be verified.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'That the booking you made online is still valid for your date when you reach the counter.',
          'Whether weather, water level or maintenance has paused service, which a booking cannot override.',
          'That the amount you were shown online matches what the counter asks for your group.',
          'Where the jetty is and what time you should reach it for your slot.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Assuming an online booking guarantees a particular boat or an exact departure minute.',
          'Paying for a slot before reading the cancellation terms shown on the portal.',
          'Arriving on a reservation and not checking in at the counter.',
          'Expecting a booking to override weather, water level or maintenance.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can I book Yercaud boating online?',
        a: 'The district boat-house page states an online booking facility through TTDC is in operation, and the TTDC booking portal lists the boat house. Walk-up tickets at the counter remain the normal route; confirm the portal is open for your date before relying on it.'
      },
      {
        q: 'Does an online booking guarantee a boat?',
        a: 'It confirms a booking on the operator’s system under its terms, but it cannot override weather, water conditions or maintenance, and it may not lock a specific boat or departure minute. Read the terms shown.'
      },
      {
        q: 'What is the cancellation policy?',
        a: 'No cancellation or refund policy was obtained for this page, so treat it as to be verified. Check the terms on the TTDC portal before paying, and confirm at the boat house.'
      },
      {
        q: 'Which route should I choose if my plans might change?',
        a: 'A counter ticket keeps you flexible: nothing is committed in advance and costs nothing if plans change. An online booking is worth the effort mainly when you are travelling far and want some assurance before the day, and its cancellation terms should be read first.'
      },
      {
        q: 'Where do I read the booking terms for my date?',
        a: 'Slot availability, how far ahead you can book and cancellation terms are set by the operator and shown, if at all, on the TTDC booking portal. Open it for your date and read the terms before paying, then confirm at the boat house.'
      }
    ],
    sourceIds: ['ttdcBooking', 'districtBoatHouse', 'ttdcMain', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு படகு இல்ல ஆன்லைன் முன்பதிவு, கவுண்டரில் வாங்குவதற்கு எதிராக',
    description:
      'ஏற்காடு படகு சவாரிக்கு TTDC ஆன்லைன் முன்பதிவு வழியைக் குறிப்பிடுகிறது; ஆனால் அது கவுண்டர் டிக்கெட் அல்ல. முன்பதிவு என்ன உறுதி தரும், தராது, நீங்களே என்ன சரிபார்க்க வேண்டும் என்பதைப் பாருங்கள்.',
    kicker: 'படகு சவாரி',
    h1: 'படகை ஆன்லைனில் முன்பதிவு செய்வது: அது தரும் உறுதி, தராத உறுதி',
    lead:
      'TTDC வழியாக ஆன்லைன் முன்பதிவு வசதி செயல்பாட்டில் இருப்பதாக மாவட்டப் படகு இல்லப் பக்கம் குறிப்பிடுகிறது; அதன் பின்னணியில் உள்ள பட்டியல்தான் TTDC முன்பதிவுத் தளம். கவுண்டரில் நேரடியாக டிக்கெட் வாங்குவதே வழக்கமான வழி. இரண்டும் ஒரே பரிவர்த்தனை அல்ல; ஒன்றைத் தேர்ந்தெடுப்பது உங்களுக்குத் தரப்படும் உறுதியை மாற்றுகிறது.',
    facts: [
      { label: 'ஆன்லைன் வழி', value: 'TTDC முன்பதிவுத் தளம் (2 நவ 2026-ல் படித்தது)' },
      { label: 'கவுண்டர் டிக்கெட்', value: 'இன்னும் வழக்கமான நேரடி வழி' },
      { label: 'நேர இடங்கள்', value: 'உறுதி செய்யப்படவில்லை — தளத்தில் பாருங்கள்' },
      { label: 'ரத்துக் கொள்கை', value: 'தளத்தில் உறுதி செய்ய வேண்டும்' }
    ],
    blocks: [
      { kind: 'h2', text: 'ஏற்காடு ஏரியில் படகு பெற இரண்டு வழிகள்' },
      {
        kind: 'p',
        text:
          'ஆன்லைன் முன்பதிவும் கவுண்டர் டிக்கெட்டும் இறுதியில் உங்களைப் படகில் ஏற்றும்; ஆனால் அவை வெவ்வேறு வகையில் உங்களைப் பாதுகாக்கின்றன. தூரத்திலிருந்து பயணம் செய்து, நாளுக்கு முன்பே சிறிது உறுதி வேண்டும் எனில் ஆன்லைன் வழி பயனுள்ளது; திட்டம் மாறினால் இழப்பு இல்லாமல் நெகிழ்வாக இருக்க வேண்டும் எனில் கவுண்டர் டிக்கெட்.'
      },
      {
        kind: 'list',
        items: [
          'ஆன்லைன்: உங்கள் தேதிக்குத் திறந்திருந்தால், நாளுக்கு முன்பே TTDC தளத்தில் முன்பதிவு செய்யுங்கள்.',
          'கவுண்டர்: வந்ததும் வாங்குங்கள்; முன்கூட்டியே எதுவும் உறுதி செய்யப்படாது; காத்திருப்பை வரிசையே தீர்மானிக்கும்.',
          'ஆன்லைன் முன்பதிவுக்கு மாவட்டப் பக்கம் TTDC-ஐக் குறிப்பிடுகிறது. இங்கு வேறு எந்த முன்பதிவு வழியும் உறுதி செய்யப்படவில்லை.'
        ]
      },
      { kind: 'h2', text: 'ஒரு முன்பதிவு தரக்கூடிய உறுதியும் தர முடியாததும்' },
      {
        kind: 'list',
        items: [
          'தரக்கூடியது: நடத்துபவரின் அமைப்பில், அதன் நிபந்தனைகளின்படி ஒரு முன்பதிவு உள்ளது என்பதை.',
          'தரக்கூடியது: தளம் உங்கள் தேதிக்கு அப்படிச் சொன்னால், வரிசையில் ஒரு இடத்தையோ குறிப்பிட்ட நேரத்தையோ தக்க வைப்பதை.',
          'தர முடியாதது: வானிலை, நீர்மட்டம் அல்லது பராமரிப்பு சேவையை நிறுத்தாது என்பதை.',
          'தர முடியாதது: குறிப்பிட்ட படகு வகை, ஒரு குறிப்பிட்ட படகு அல்லது துல்லியமான கிளம்பும் நிமிடத்தை.',
          'தர முடியாதது: அச்சிடப்பட்ட விலையே அன்றைய கவுண்டர் விலை என்பதை — கட்டணப் பக்கத்தைப் பாருங்கள்.'
        ]
      },
      { kind: 'h2', text: 'நேர இடங்களையும் ரத்துக் கொள்கையையும் சரிபார்த்தல்' },
      {
        kind: 'p',
        text:
          'நேர இடக் கிடைப்பு, எவ்வளவு முன்பே முன்பதிவு செய்யலாம், ரத்து நிபந்தனைகள் ஆகியவற்றை நடத்துபவர் நிர்ணயிக்கிறார்; அவை முன்பதிவுத் தளத்தில், இருந்தால், காட்டப்படும். இந்தப் பக்கத்திற்கு ரத்து அல்லது பணத்திருப்பக் கொள்கை எதுவும் பெறப்படவில்லை; எனவே ரத்தை உறுதி செய்ய வேண்டிய தகவலாகக் கருதுங்கள்: உங்கள் தேதிக்கான தளத்தைத் திறந்து, செலுத்தும் முன் நிபந்தனைகளைப் படித்து, படகு இல்லத்தில் உறுதி செய்யுங்கள்.'
      },
      {
        kind: 'note',
        text:
          'எந்த உறுதிப்படுத்தலின் நகலையும் அதன் நிபந்தனைகளையும் வைத்திருங்கள். உங்கள் தேதிக்கு தளம் தெளிவாக இல்லாவிட்டால், மிகப் பாதுகாப்பான மாற்று நேரடிக் கவுண்டர் டிக்கெட்; காத்திருக்க வேண்டியிருக்கலாம் என்பதை ஏற்றுக்கொள்ளுங்கள்.'
      },
      { kind: 'h2', text: 'ஆன்லைன் முன்பதிவும் கவுண்டர் டிக்கெட்டும், அருகருகே' },
      {
        kind: 'table',
        caption: 'ஒவ்வொரு வழியும் செய்யக்கூடியதும் செய்ய முடியாததும்',
        head: ['கேள்வி', 'ஆன்லைன் முன்பதிவு', 'கவுண்டர் டிக்கெட்'],
        rows: [
          ['முன்கூட்டியே இடத்தைத் தக்க வைக்குமா?', 'ஆம், உங்கள் தேதிக்கு தளம் ஒரு நேரத்தைக் காட்டினால்', 'இல்லை — காத்திருப்பை வரிசையே தீர்மானிக்கும்'],
          ['குறிப்பிட்ட படகை உறுதி தருமா?', 'இல்லை', 'இல்லை'],
          ['குறிப்பிட்ட கிளம்பும் நிமிடத்தை உறுதி தருமா?', 'இல்லை', 'இல்லை'],
          ['திட்டம் மாறினால் இழப்பு உண்டா?', 'நடத்துபவரின் நிபந்தனைகளைப் பொறுத்தது — படியுங்கள்', 'இல்லை — நீங்கள் வாங்காமல் விடுவதே'],
          ['வானிலை அல்லது பராமரிப்பை மீறுமா?', 'இல்லை', 'இல்லை']
        ]
      },
      {
        kind: 'list',
        items: [
          'முடிவு செய்வதற்கு முன் உங்கள் சரியான தேதிக்கான TTDC தளத்தைத் திறந்து பாருங்கள்.',
          'செலுத்தும் முன் நிபந்தனைகளைப் படித்து, எந்த உறுதிப்படுத்தலின் நகலையும் வைத்திருங்கள்.',
          'உங்கள் தேதிக்கு தளம் தெளிவாக இல்லாவிட்டால், நேரடிக் கவுண்டர் டிக்கெட்டே பாதுகாப்பான மாற்று.',
          'இந்தப் பக்கத்திற்கு ரத்து அல்லது பணத்திருப்பக் கொள்கை எதுவும் பெறப்படவில்லை — உறுதி செய்ய வேண்டியதாகக் கருதுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'நீங்கள் ஆன்லைனில் செய்த முன்பதிவு, கவுண்டரை அடையும்போது உங்கள் தேதிக்கு இன்னும் செல்லுபடியாகிறதா.',
          'வானிலை, நீர்மட்டம் அல்லது பராமரிப்பு சேவையை நிறுத்தியுள்ளதா — அதை முன்பதிவால் மீற முடியாது.',
          'ஆன்லைனில் காட்டப்பட்ட தொகை, உங்கள் குழுவுக்குக் கவுண்டர் கேட்பதற்குப் பொருந்துகிறதா.',
          'படகுத் தளம் எங்கே, உங்கள் நேரத்திற்கு எப்போது அதை அடைய வேண்டும்.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'ஆன்லைன் முன்பதிவு ஒரு குறிப்பிட்ட படகையோ துல்லியமான கிளம்பும் நிமிடத்தையோ உறுதி தரும் என்று கருதுவது.',
          'தளத்தில் காட்டப்படும் ரத்து நிபந்தனைகளைப் படிக்காமல் ஒரு நேரத்திற்குப் பணம் செலுத்துவது.',
          'முன்பதிவு இருந்தும் கவுண்டரில் சரிபார்க்காமல் விடுவது.',
          'முன்பதிவு வானிலை, நீர்மட்டம் அல்லது பராமரிப்பை மீறும் என்று எதிர்பார்ப்பது.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஏற்காடு படகு சவாரியை ஆன்லைனில் முன்பதிவு செய்யலாமா?',
        a: 'TTDC வழியாக ஆன்லைன் முன்பதிவு வசதி செயல்பாட்டில் இருப்பதாக மாவட்டப் படகு இல்லப் பக்கம் குறிப்பிடுகிறது; TTDC முன்பதிவுத் தளம் படகு இல்லத்தைப் பட்டியலிடுகிறது. கவுண்டரில் நேரடி டிக்கெட் வாங்குவதே வழக்கமான வழி; அதை நம்புவதற்கு முன் உங்கள் தேதிக்குத் தளம் திறந்திருக்கிறதா என உறுதி செய்யுங்கள்.'
      },
      {
        q: 'ஆன்லைன் முன்பதிவு படகை உறுதி தருமா?',
        a: 'அது நடத்துபவரின் அமைப்பில், நிபந்தனைகளின்படி ஒரு முன்பதிவை உறுதி செய்யும்; ஆனால் வானிலை, நீர் நிலை அல்லது பராமரிப்பை மீற முடியாது; குறிப்பிட்ட படகையோ கிளம்பும் நிமிடத்தையோ உறுதி செய்யாமல் போகலாம். காட்டப்படும் நிபந்தனைகளைப் படியுங்கள்.'
      },
      {
        q: 'ரத்துக் கொள்கை என்ன?',
        a: 'இந்தப் பக்கத்திற்கு ரத்து அல்லது பணத்திருப்பக் கொள்கை எதுவும் பெறப்படவில்லை; எனவே அதை உறுதி செய்ய வேண்டிய தகவலாகக் கருதுங்கள். செலுத்தும் முன் TTDC தளத்தின் நிபந்தனைகளைச் சரிபார்த்து, படகு இல்லத்தில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'என் திட்டம் மாறலாம் எனில் எந்த வழியைத் தேர்ந்தெடுக்க வேண்டும்?',
        a: 'கவுண்டர் டிக்கெட் உங்களை நெகிழ்வாக வைத்திருக்கும்: முன்கூட்டியே எதுவும் உறுதி செய்யப்படாது; திட்டம் மாறினால் இழப்பு இல்லை. தூரத்திலிருந்து பயணம் செய்து, நாளுக்கு முன்பே சிறிது உறுதி வேண்டும் எனில் ஆன்லைன் முன்பதிவு பயனுள்ளது; அதன் ரத்து நிபந்தனைகளை முதலில் படிக்க வேண்டும்.'
      },
      {
        q: 'என் தேதிக்கான முன்பதிவு நிபந்தனைகளை எங்கே படிக்க வேண்டும்?',
        a: 'நேர இடக் கிடைப்பு, எவ்வளவு முன்பே முன்பதிவு செய்யலாம், ரத்து நிபந்தனைகள் ஆகியவற்றை நடத்துபவர் நிர்ணயிக்கிறார்; அவை TTDC முன்பதிவுத் தளத்தில், இருந்தால், காட்டப்படும். உங்கள் தேதிக்கான தளத்தைத் திறந்து, செலுத்தும் முன் நிபந்தனைகளைப் படித்து, படகு இல்லத்தில் உறுதி செய்யுங்கள்.'
      }
    ],
    sourceIds: ['ttdcBooking', 'districtBoatHouse', 'ttdcMain', 'googleMaps']
  }
};

export default page;
