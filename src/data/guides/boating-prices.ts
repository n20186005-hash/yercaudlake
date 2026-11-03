import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'boating/prices',
  family: 'boating',
  priority: 'P0',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'The boat-house counter is on the Yercaud Lake shore, a short walk along the lakeside from the lake entrance; no vehicle ride is needed once you are at the lake. The distance is approximate, so confirm the counter’s exact position locally on the day.',
    ta: 'படகு இல்லக் கவுண்டர் ஏற்காடு ஏரிக்கரையில் உள்ளது; ஏரியின் நுழைவாயிலிருந்து ஏரிக்கரை வழியாகச் சிறிது நடந்தால் போதும், ஏரிக்கு வந்தபின் வாகனம் தேவையில்லை. தூரம் தோராயமானது; எனவே கவுண்டரின் துல்லியமான இடத்தை அன்று உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['boating/guide', 'boating/timings', 'boating/online-booking', 'transport/parking', 'itineraries/lake-half-day'],
  en: {
    title: 'Yercaud boat house prices: why published fares disagree',
    description:
      'Three public price lists for Yercaud Lake boating disagree, and charging is usually per boat. Compare the dated figures and know what to confirm before you pay.',
    kicker: 'Boating',
    h1: 'Boat house fares: per boat, deposits and what to ask',
    lead:
      'Published fares for boating on Yercaud Lake come from at least three dated sources and disagree with each other. This page sets them side by side, explains why a ticket is usually priced per boat, and lists what to confirm at the counter before you pay.',
    facts: [
      { label: 'Charging basis', value: 'Usually per boat, by seat count' },
      { label: 'District page (2024–25)', value: '₹200–₹700 by boat type' },
      { label: 'Older district page', value: '₹80 / ₹110 / ₹320 (undated)' },
      { label: 'TTDC portal (2026)', value: '₹300–₹800 by boat type' }
    ],
    blocks: [
      { kind: 'h2', text: 'Three public lists, three different totals' },
      {
        kind: 'p',
        text:
          'At least three public price lists for boating on Yercaud Lake are in circulation, and they do not agree. The Salem District boat-house page carries one set from the 2024–2025 Summer Festival cycle; an older, undated district page carries another; and the TTDC booking portal shows a third, higher set. None of these is a confirmed counter price for the day you visit.'
      },
      {
        kind: 'table',
        caption: 'Published fares by boat type, as written in each source',
        head: ['Boat', 'Seats', 'District page (2024–25)', 'TTDC portal (read 2026)'],
        rows: [
          ['Pedal', '2', '₹200', '₹500'],
          ['Pedal', '4', '₹300', '₹700'],
          ['Rowing', '3', '₹200', '₹300'],
          ['Rowing', '5', '₹300', '₹400'],
          ['Motor', '8', '₹700', '₹800']
        ]
      },
      {
        kind: 'note',
        text:
          'The older, undated district page gives a third set — roughly ₹80 for two passengers, ₹110 for four and ₹320 for eight — without naming the boat type. Treat every figure above as dated, not as today’s counter price.'
      },
      { kind: 'h2', text: 'Charging is normally per boat, not per person' },
      {
        kind: 'p',
        text:
          'Each list prices a boat by its seat count — two, three, four, five or eight — rather than quoting a per-head rate. That pattern points to one price for the whole boat, whatever the size of your group up to the seat limit. Confirm the basis at the counter before paying, because the wording on a ticket can change what the number means.'
      },
      { kind: 'h2', text: 'What to confirm before you pay' },
      {
        kind: 'list',
        items: [
          'Which boat types are actually running today, and the price for each.',
          'Whether the price is for the whole boat or per passenger.',
          'Whether a deposit is taken and how it is returned.',
          'How children are counted, and whether a small child takes a seat.',
          'What the ticket includes and how long the ride lasts.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid when paying' },
      {
        kind: 'list',
        items: [
          'Reading one published fare as today’s counter price — the lists are dated.',
          'Assuming the price is per person when the lists price a boat by seat count.',
          'Not asking whether a deposit is taken, or how it is returned.',
          'Forgetting to ask whether a young child takes a paid seat.',
          'Paying before confirming which boats are actually running.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'steps',
        items: [
          'Ask the price for each boat type running that day.',
          'Confirm whether the price is for the whole boat or per passenger.',
          'Ask about any deposit and how it is returned.',
          'Check how children are counted and whether they need a seat.',
          'Get the ride duration and what the ticket includes before paying.'
        ]
      }
    ],
    faq: [
      {
        q: 'Why do the published fares differ so much?',
        a: 'They are dated snapshots taken at different times and by different bodies. The district page belongs to a festival cycle, the older district page has no date, and the TTDC portal is a booking listing. None is guaranteed to match the day you visit.'
      },
      {
        q: 'Is boating charged per boat or per person?',
        a: 'The published lists price a boat by its seat count, which points to a single price per boat. Confirm at the counter, since a ticket or a notice can set the basis differently on the day.'
      },
      {
        q: 'Do children pay?',
        a: 'No official rule was obtained on how children are counted or priced. Ask at the counter before paying, and check whether a young child needs their own seat.'
      },
      {
        q: 'Why is the TTDC portal fare higher than the district page?',
        a: 'They are dated snapshots taken at different times by different bodies: the district page belongs to a festival cycle, while the TTDC portal is a booking listing that shows a higher set. Neither is guaranteed to be the counter price on the day you visit.'
      },
      {
        q: 'Do we have to pay a deposit for the boat?',
        a: 'No source obtained for this page states a deposit rule. Whether a deposit is taken, and how it is returned, is one of the things to confirm at the counter before you pay.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'districtLake', 'ttdcBooking', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு படகு இல்லக் கட்டணங்கள்: வெளியிடப்பட்ட விலைகள் ஏன் ஒத்துப்போகவில்லை',
    description:
      'ஏற்காடு ஏரிப் படகு சவாரிக்கு மூன்று பொதுக் கட்டணப் பட்டியல்கள் ஒத்துப்போகவில்லை; பொதுவாக முழுப் படகுக்கே கட்டணம். தேதியுள்ள எண்களை ஒப்பிட்டு, செலுத்தும் முன் உறுதி செய்ய வேண்டியவற்றைத் தெரிந்துகொள்ளுங்கள்.',
    kicker: 'படகு சவாரி',
    h1: 'படகு இல்லக் கட்டணம்: படகு வாரியாக, முன்பணம் மற்றும் கேட்க வேண்டியவை',
    lead:
      'ஏற்காடு ஏரிப் படகு சவாரிக்கான வெளியிடப்பட்ட கட்டணங்கள் குறைந்தது மூன்று தேதியுள்ள மூலங்களிலிருந்து வருகின்றன; அவை ஒன்றோடு ஒன்று ஒத்துப்போகவில்லை. இந்தப் பக்கம் அவற்றை அருகருகே வைத்து, டிக்கெட் பொதுவாக முழுப் படகுக்கே கணக்கிடப்படுவது ஏன் என்பதை விளக்கி, செலுத்தும் முன் கவுண்டரில் உறுதி செய்ய வேண்டியவற்றைத் தருகிறது.',
    facts: [
      { label: 'கட்டண முறை', value: 'பொதுவாக இருக்கை எண்ணிக்கை வாரியாக, முழுப் படகுக்கு' },
      { label: 'மாவட்டப் பக்கம் (2024–25)', value: 'படகு வகைக்கு ₹200–₹700' },
      { label: 'பழைய மாவட்டப் பக்கம்', value: '₹80 / ₹110 / ₹320 (தேதியில்லாதது)' },
      { label: 'TTDC தளம் (2026)', value: 'படகு வகைக்கு ₹300–₹800' }
    ],
    blocks: [
      { kind: 'h2', text: 'மூன்று பொதுப் பட்டியல்கள், மூன்று வெவ்வேறு மொத்தங்கள்' },
      {
        kind: 'p',
        text:
          'ஏற்காடு ஏரிப் படகு சவாரிக்கு குறைந்தது மூன்று பொதுக் கட்டணப் பட்டியல்கள் வழக்கத்தில் உள்ளன; அவை ஒத்துப்போகவில்லை. சேலம் மாவட்டப் படகு இல்லப் பக்கம் 2024–2025 கோடை விழா சுழற்சியின் ஒரு தொகுப்பைத் தருகிறது; பழைய, தேதியில்லாத மாவட்டச் சுற்றுலாப் பக்கம் இன்னொன்றைத் தருகிறது; TTDC முன்பதிவுத் தளம் மூன்றாவதாக, அதிகமான ஒன்றைக் காட்டுகிறது. இவை எதுவும் நீங்கள் செல்லும் நாளின் உறுதி செய்யப்பட்ட கவுண்டர் விலை அல்ல.'
      },
      {
        kind: 'table',
        caption: 'ஒவ்வொரு மூலத்திலும் எழுதப்பட்டுள்ளபடி, படகு வகை வாரியான கட்டணங்கள்',
        head: ['படகு', 'இருக்கைகள்', 'மாவட்டப் பக்கம் (2024–25)', 'TTDC தளம் (2026-ல் படித்தது)'],
        rows: [
          ['மிதிபடகு', '2', '₹200', '₹500'],
          ['மிதிபடகு', '4', '₹300', '₹700'],
          ['துடுப்புப் படகு', '3', '₹200', '₹300'],
          ['துடுப்புப் படகு', '5', '₹300', '₹400'],
          ['இயந்திரப் படகு', '8', '₹700', '₹800']
        ]
      },
      {
        kind: 'note',
        text:
          'பழைய, தேதியில்லாத மாவட்டப் பக்கம் மூன்றாவது தொகுப்பைத் தருகிறது — இரண்டு பேருக்கு ஏறக்குறைய ₹80, நால்வருக்கு ₹110, எட்டு பேருக்கு ₹320 — படகு வகையைக் குறிப்பிடாமல். மேலே உள்ள ஒவ்வொரு எண்ணையும் தேதியுள்ள தகவலாகவே கருதுங்கள்; இன்றைய கவுண்டர் விலையாக அல்ல.'
      },
      { kind: 'h2', text: 'கட்டணம் பொதுவாக முழுப் படகுக்கே, ஒரு நபருக்கு அல்ல' },
      {
        kind: 'p',
        text:
          'ஒவ்வொரு பட்டியலும் ஒரு படகை அதன் இருக்கை எண்ணிக்கைப்படி — இரண்டு, மூன்று, நான்கு, ஐந்து அல்லது எட்டு — விலை நிர்ணயிக்கிறது; ஒரு நபருக்கான விகிதத்தைத் தரவில்லை. இந்த முறை, இருக்கை எல்லைக்குள் உங்கள் குழு எத்தனை பேராக இருந்தாலும் முழுப் படகுக்கும் ஒரே விலை என்பதைக் காட்டுகிறது. செலுத்தும் முன் கவுண்டரில் இந்த அடிப்படையை உறுதி செய்யுங்கள்; ஏனெனில் டிக்கெட்டின் வாசகம் அந்த எண்ணின் பொருளை மாற்றலாம்.'
      },
      { kind: 'h2', text: 'செலுத்தும் முன் உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'இன்று உண்மையில் எந்தப் படகு வகைகள் இயங்குகின்றன, ஒவ்வொன்றின் விலை என்ன.',
          'விலை முழுப் படகுக்கா அல்லது ஒரு பயணிக்கா.',
          'முன்பணம் ஏதேனும் வாங்கப்படுகிறதா, அது எப்படித் திரும்பத் தரப்படுகிறது.',
          'குழந்தைகள் எப்படிக் கணக்கிடப்படுகிறார்கள், சிறு குழந்தைக்குத் தனி இருக்கை தேவையா.',
          'டிக்கெட்டில் என்ன அடங்கும், சவாரி எவ்வளவு நேரம் நீடிக்கும்.'
        ]
      },
      { kind: 'h2', text: 'செலுத்தும்போது தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'ஒரு வெளியிடப்பட்ட கட்டணத்தையே இன்றைய கவுண்டர் விலையாகப் படிப்பது — அந்தப் பட்டியல்கள் தேதியுள்ளவை.',
          'பட்டியல்கள் இருக்கை எண்ணிக்கைப்படி முழுப் படகை விலை நிர்ணயிக்கும்போது, விலை ஒரு நபருக்கு எனக் கருதுவது.',
          'முன்பணம் வாங்கப்படுகிறதா, அது எப்படித் திரும்பத் தரப்படுகிறது எனக் கேட்காதது.',
          'சிறு குழந்தைக்குக் கட்டண இருக்கை தேவையா எனக் கேட்க மறப்பது.',
          'உண்மையில் எந்தப் படகுகள் இயங்குகின்றன என உறுதி செய்யாமல் பணம் செலுத்துவது.'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'steps',
        items: [
          'அன்று இயங்கும் ஒவ்வொரு படகு வகைக்கும் விலையைக் கேளுங்கள்.',
          'விலை முழுப் படகுக்கா அல்லது ஒரு பயணிக்கா என உறுதி செய்யுங்கள்.',
          'முன்பணம் ஏதேனும் உள்ளதா, அது எப்படித் திரும்பத் தரப்படுகிறது எனக் கேளுங்கள்.',
          'குழந்தைகள் எப்படிக் கணக்கிடப்படுகிறார்கள், அவர்களுக்கு இருக்கை தேவையா எனச் சரிபாருங்கள்.',
          'செலுத்தும் முன் சவாரி நேரத்தையும் டிக்கெட்டில் அடங்குவதையும் தெரிந்துகொள்ளுங்கள்.'
        ]
      }
    ],
    faq: [
      {
        q: 'வெளியிடப்பட்ட கட்டணங்கள் ஏன் இவ்வளவு வேறுபடுகின்றன?',
        a: 'அவை வெவ்வேறு காலங்களில், வெவ்வேறு அமைப்புகளால் எடுக்கப்பட்ட தேதியுள்ள படங்கள். மாவட்டப் பக்கம் ஒரு விழா சுழற்சியைச் சேர்ந்தது; பழைய மாவட்டப் பக்கத்திற்குத் தேதி இல்லை; TTDC தளம் ஒரு முன்பதிவுப் பட்டியல். நீங்கள் செல்லும் நாளுடன் எதுவும் ஒத்துப்போகும் என உறுதி இல்லை.'
      },
      {
        q: 'படகுக் கட்டணம் முழுப் படகுக்கா அல்லது ஒரு நபருக்கா?',
        a: 'வெளியிடப்பட்ட பட்டியல்கள் ஒரு படகை அதன் இருக்கை எண்ணிக்கைப்படி விலை நிர்ணயிக்கின்றன; இது முழுப் படகுக்கு ஒரே விலை என்பதைக் காட்டுகிறது. ஆனால் டிக்கெட் அல்லது அறிவிப்பு அன்று வேறு அடிப்படையை வைக்கலாம்; கவுண்டரில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'குழந்தைகள் கட்டணம் செலுத்த வேண்டுமா?',
        a: 'குழந்தைகள் எப்படிக் கணக்கிடப்படுகிறார்கள், எப்படிக் கட்டணம் விதிக்கப்படுகிறார்கள் என்பதற்கான அதிகாரப்பூர்வ விதி எதுவும் கிடைக்கவில்லை. செலுத்தும் முன் கவுண்டரில் கேளுங்கள்; சிறு குழந்தைக்குத் தனி இருக்கை தேவையா என்பதையும் சரிபாருங்கள்.'
      },
      {
        q: 'TTDC தளக் கட்டணம் மாவட்டப் பக்கத்தைவிட அதிகமாக இருப்பது ஏன்?',
        a: 'அவை வெவ்வேறு காலங்களில், வெவ்வேறு அமைப்புகளால் எடுக்கப்பட்ட தேதியுள்ள படங்கள்: மாவட்டப் பக்கம் ஒரு விழா சுழற்சியைச் சேர்ந்தது; TTDC தளம் அதிகமான தொகுப்பைக் காட்டும் ஒரு முன்பதிவுப் பட்டியல். நீங்கள் செல்லும் நாளின் கவுண்டர் விலையாக எதுவும் உறுதி இல்லை.'
      },
      {
        q: 'படகுக்கு முன்பணம் செலுத்த வேண்டுமா?',
        a: 'இந்தப் பக்கத்திற்கு எந்த மூலமும் முன்பண விதியைக் குறிப்பிடவில்லை. முன்பணம் வாங்கப்படுகிறதா, அது எப்படித் திரும்பத் தரப்படுகிறது என்பது நீங்கள் செலுத்தும் முன் கவுண்டரில் உறுதி செய்ய வேண்டியவற்றில் ஒன்று.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'districtLake', 'ttdcBooking', 'googleMaps']
  }
};

export default page;
