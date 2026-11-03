import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'food/lunch-after-boating',
  family: 'food',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'The listed places for lunch sit in the town centre or on approach roads rather than at the water’s edge, so from the boat house plan a short drive or auto ride. The distance is approximate; confirm the route and each place’s opening hours locally on the day.',
    ta: 'மதிய உணவுக்கான பட்டியலிடப்பட்ட இடங்கள் நீரின் ஓரத்தில் அல்ல, நகர மையத்திலோ அணுகுச் சாலைகளிலோ உள்ளன; எனவே படகு இல்லத்திலிருந்து ஒரு குறுகிய வாகனம் அல்லது ஆட்டோவில் செல்லுங்கள். தொலைவு தோராயமானது; வழியையும் ஒவ்வொரு இடத்தின் திறப்பு நேரத்தையும் அன்றைய நாளில் உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['food/restaurants-near-lake', 'food/family-friendly-meals', 'boating/timings', 'itineraries/lake-half-day', 'nearby/anna-park'],
  en: {
    title: 'Lunch after boating at Yercaud Lake: timing and what follows',
    description:
      'The ride is short, so lunch lands around midday. This page covers the timing window, getting from the jetty to the town, and the nearby stops that follow.',
    kicker: 'Food & drink',
    h1: 'Where to go for lunch once the boat ride is over',
    lead:
      'A boat ride is a short, self-contained outing, so by late morning you are usually done and thinking about lunch. This page is about the gap between the jetty and a table — how to time it, where to head, and what can fill an afternoon afterwards.',
    facts: [
      { label: 'Boat house listed hours', value: '09:00–18:00 (TTDC booking portal)' },
      { label: 'Lunch window', value: 'Roughly 12:30–14:00 (our estimate)' },
      { label: 'To the town centre', value: 'A short drive or auto from the lake' },
      { label: 'Afternoon add-ons', value: 'Distances from the district page below' }
    ],
    blocks: [
      { kind: 'h2', text: 'When lunch lands after a boat ride' },
      {
        kind: 'p',
        text:
          'The boat house is listed from 09:00 and a ride is short, so most visitors are off the water well before noon. That leaves an unhurried gap to walk the shore, and then lunch in the town centre around the middle of the day.'
      },
      { kind: 'h2', text: 'One way to lay out the middle of the day' },
      {
        kind: 'table',
        caption: 'A suggested shape for the day — times are our estimate, open hours are per a dated listing',
        head: ['Time (approx)', 'What fits', 'Where'],
        rows: [
          ['09:00–11:00', 'Boat ride and jetty time', 'Boat house, lakeside'],
          ['11:00–12:00', 'Lakeside walk; Anna Park is next to the lake', 'Lake to Ladies Seat Road'],
          ['12:30–14:00', 'Lunch', 'Town centre — confirm the place and its hours'],
          [
            '14:00 onwards',
            'A viewpoint or the falls',
            'Pagoda Point (5 km), Kiliyur Falls (3 km), Silk Farm and Rose Garden (2 km)'
          ]
        ]
      },
      {
        kind: 'note',
        text:
          'The distances in the last row come from the dated district tourism page, and the timings are our own estimate. Neither is a live schedule; check the day’s conditions before committing.'
      },
      { kind: 'h2', text: 'Getting from the jetty to a table, and what can follow' },
      {
        kind: 'steps',
        items: [
          'Finish the ride and walk the shore while it is still cool; the walk itself needs no booking.',
          'Decide whether you are eating in the town centre or on a road out of it, then travel by your own vehicle or a local auto.',
          'Confirm the place is open and serving lunch before you sit down; not every listed place publishes its hours.',
          'Leave room in the afternoon — the lake is the fixed point, everything else is optional.',
          'Carry water and keep waste with you; Yercaud runs under a district plastic-free programme.'
        ]
      },
      {
        kind: 'list',
        items: [
          'Anna Park, next to the lake, is listed at ₹15 for adults and ₹10 for children.',
          'Pagoda Point is listed 5 km from town; Kiliyur Falls about 3 km from the lake.',
          'The Silk Farm and Rose Garden are listed about 2 km from town.',
          'Shevarayan Temple is listed open 6am–8pm, useful for a late-afternoon stop.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Whether the place you pick is open and serving lunch that day; not every listed place publishes its hours.',
          'The travel time from the jetty to the town centre or to the approach road you choose.',
          'Any afternoon stop you plan to add, since the district distances are approximate.',
          'Parking near the lake if you intend to return there later in the day.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Treating the suggested day shape as a fixed timetable; the times are our own estimate.',
          'Assuming a table right at the lake; the listings put places in town or on approach roads.',
          'Leaving no room in the afternoon, when the lake is the fixed point and the rest is optional.',
          'Leaving waste behind; Yercaud runs under a district plastic-free programme.'
        ]
      }
    ],
    faq: [
      {
        q: 'How long after the boat ride should I wait before lunch?',
        a: 'There is no rule. A ride is short, so you can walk the shore for an hour and then eat. If you want a calmer table, going a little before the usual lunch rush is the easier choice.'
      },
      {
        q: 'Are the after-lunch distances exact?',
        a: 'No. They are taken from a dated district tourism page and are approximate. Treat them as a rough guide and confirm locally.'
      },
      {
        q: 'Is there a place to eat right at the lake?',
        a: 'That cannot be confirmed. The listings we can reach place cafes and restaurants in the town or on approach roads, so plan on a short trip rather than a table at the water’s edge.'
      },
      {
        q: 'What should I confirm before lunch?',
        a: 'Confirm that the place you choose is open and serving lunch, and allow travel time from the jetty to the town centre or approach road. Not every listed place publishes its hours, so a quick check saves a wasted trip.'
      },
      {
        q: 'Can I add a viewpoint or the falls after lunch?',
        a: 'Yes. The district distances list Pagoda Point, Kiliyur Falls and the Silk Farm and Rose Garden as afternoon options, but they are approximate, so check the day’s conditions before committing.'
      }
    ],
    sourceIds: ['chutneyListing', 'kaapiStopListing', 'ttdcBooking', 'districtLake', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு ஏரியில் படகு சவாரிக்குப் பின் மதிய உணவு: நேரமும் அதன் பின் என்ன',
    description:
      'சவாரி குறுகியது என்பதால் மதிய உணவு நண்பகலில் வரும். தளத்திலிருந்து நகரத்திற்குச் செல்வது, நேர இடைவெளி, அதன் பின் அருகிலுள்ள இடங்கள் ஆகியவற்றை இந்தப் பக்கம் பார்க்கிறது.',
    kicker: 'உணவு & பானம்',
    h1: 'படகு சவாரி முடிந்ததும் மதிய உணவுக்கு எங்கு செல்வது',
    lead:
      'படகு சவாரி என்பது குறுகிய, தன்னிறைவான அனுபவம்; எனவே முற்பகல் முடிவதற்குள் பொதுவாக முடிந்து, மதிய உணவைப் பற்றி யோசிப்பீர்கள். இந்தப் பக்கம் படகுத் தளத்திற்கும் ஒரு மேசைக்கும் இடையிலான இடைவெளியைப் பற்றியது — அதை எப்படி நேரப்படுத்துவது, எங்கு செல்வது, அதன் பின் மதியப் பொழுதை எப்படி நிரப்புவது.',
    facts: [
      { label: 'படகு இல்ல நேரம்', value: '09:00–18:00 (TTDC முன்பதிவுத் தளம்)' },
      { label: 'மதிய உணவு நேரம்', value: 'சுமார் 12:30–14:00 (எங்கள் மதிப்பீடு)' },
      { label: 'நகர மையத்திற்கு', value: 'ஏரியிலிருந்து குறுகிய வாகனம் அல்லது ஆட்டோ' },
      { label: 'மதியப் பொழுது கூடுதல்கள்', value: 'கீழே மாவட்டப் பக்கத்தின்படி தொலைவுகள்' }
    ],
    blocks: [
      { kind: 'h2', text: 'படகு சவாரிக்குப் பின் மதிய உணவு எப்போது வரும்' },
      {
        kind: 'p',
        text:
          'படகு இல்லம் 09:00 முதல் எனப் பட்டியலிடப்பட்டுள்ளது; சவாரியும் குறுகியது; எனவே பெரும்பாலான பயணிகள் நண்பகலுக்கு முன்பே நீரிலிருந்து இறங்கிவிடுவார்கள். அதனால் கரையில் நிதானமாக நடக்க ஒரு இடைவெளியும், பிறகு நண்பகலில் நகர மையத்தில் மதிய உணவும் அமையும்.'
      },
      { kind: 'h2', text: 'நாளின் நடுப்பகுதியை அமைக்க ஒரு வழி' },
      {
        kind: 'table',
        caption: 'நாளுக்கான ஒரு பரிந்துரை வடிவம் — நேரங்கள் எங்கள் மதிப்பீடு; திறப்பு நேரங்கள் தேதியுள்ள பட்டியலின்படி',
        head: ['நேரம் (தோராயம்)', 'என்ன பொருந்தும்', 'எங்கே'],
        rows: [
          ['09:00–11:00', 'படகு சவாரி மற்றும் தள நேரம்', 'படகு இல்லம், ஏரிக்கரை'],
          ['11:00–12:00', 'ஏரிக்கரை நடை; அண்ணா பூங்கா ஏரிக்கு அடுத்து', 'Lake to Ladies Seat Road'],
          ['12:30–14:00', 'மதிய உணவு', 'நகர மையம் — இடத்தையும் அதன் நேரத்தையும் உறுதி செய்யுங்கள்'],
          [
            '14:00 முதல்',
            'ஒரு காட்சி முனை அல்லது அருவி',
            'பகோடா பாயிண்ட் (5 கிமீ), கிளியூர் அருவி (3 கிமீ), பட்டு பண்ணை மற்றும் ரோஜாத் தோட்டம் (2 கிமீ)'
          ]
        ]
      },
      {
        kind: 'note',
        text:
          'கடைசி வரிசையில் உள்ள தொலைவுகள் தேதியுள்ள மாவட்டச் சுற்றுலாத் தளத்திலிருந்து வந்தவை; நேரங்கள் எங்கள் சொந்த மதிப்பீடு. இரண்டுமே நேரடி அட்டவணை அல்ல; முடிவு செய்வதற்கு முன் அன்றைய நிலையைச் சரிபாருங்கள்.'
      },
      { kind: 'h2', text: 'படகுத் தளத்திலிருந்து ஒரு மேசை வரை, அதன் பின் என்ன செய்யலாம்' },
      {
        kind: 'steps',
        items: [
          'சவாரியை முடித்து, இன்னும் குளிர்ச்சியாக இருக்கும்போதே கரையில் நடங்கள்; நடைக்கு முன்பதிவு தேவை இல்லை.',
          'நகர மையத்திலா அல்லது அதிலிருந்து வெளியேறும் சாலையிலா சாப்பிடுவது என முடிவு செய்து, சொந்த வாகனத்திலோ உள்ளூர் ஆட்டோவிலோ செல்லுங்கள்.',
          'அமர்வதற்கு முன் அந்த இடம் திறந்திருக்கிறதா, மதிய உணவு அளிக்கிறதா என உறுதி செய்யுங்கள்; பட்டியலிடப்பட்ட எல்லா இடங்களும் தங்கள் நேரத்தை வெளியிடுவதில்லை.',
          'மதியப் பொழுதில் இடம் வையுங்கள் — ஏரி நிலையான புள்ளி, மற்றதெல்லாம் விருப்பம்.',
          'தண்ணீரை எடுத்துச் சென்று கழிவுகளை உங்களுடனே வையுங்கள்; ஏற்காடு மாவட்ட நெகிழியில்லா திட்டத்தின் கீழ் இயங்குகிறது.'
        ]
      },
      {
        kind: 'list',
        items: [
          'ஏரிக்கு அடுத்துள்ள அண்ணா பூங்கா, பெரியவர்களுக்கு ₹15, குழந்தைகளுக்கு ₹10 எனப் பட்டியலிடப்பட்டுள்ளது.',
          'பகோடா பாயிண்ட் நகரத்திலிருந்து 5 கிமீ; கிளியூர் அருவி ஏரியிலிருந்து சுமார் 3 கிமீ எனப் பட்டியலிடப்பட்டுள்ளது.',
          'பட்டு பண்ணையும் ரோஜாத் தோட்டமும் நகரத்திலிருந்து சுமார் 2 கிமீ எனப் பட்டியலிடப்பட்டுள்ளன.',
          'சேர்வராயன் கோயில் காலை 6 முதல் இரவு 8 வரை திறந்திருக்கும் எனப் பட்டியலிடப்பட்டுள்ளது; பிற்பகல் நிற்கைக்கு உதவும்.'
        ]
      },
      { kind: 'h2', text: 'அன்றைய நாளில் உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'நீங்கள் தேர்ந்தெடுக்கும் இடம் அன்று திறந்து மதிய உணவு அளிக்கிறதா; பட்டியலிடப்பட்ட எல்லா இடங்களும் தங்கள் நேரத்தை வெளியிடுவதில்லை.',
          'படகுத் தளத்திலிருந்து நகர மையம் அல்லது நீங்கள் தேர்ந்தெடுக்கும் அணுகுச் சாலைக்கான பயண நேரம்.',
          'சேர்க்கத் திட்டமிடும் எந்த மதிய நிற்கையும், ஏனெனில் மாவட்டத் தொலைவுகள் தோராயமானவை.',
          'பிற்பகல் மீண்டும் ஏரிக்குத் திரும்பினால் அங்குள்ள நிறுத்துமிட நிலை.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'பரிந்துரைக்கப்பட்ட நாள் வடிவத்தை நிலையான அட்டவணையாகக் கருதுவது; நேரங்கள் எங்கள் சொந்த மதிப்பீடு.',
          'ஏரிக்கு அருகிலேயே மேசை கிடைக்கும் எனக் கருதுவது; பட்டியல்கள் இடங்களை நகரத்திலோ அணுகுச் சாலைகளிலோ வைக்கின்றன.',
          'மதியப் பொழுதில் இடம் விடாமல் இருப்பது; ஏரி நிலையான புள்ளி, மற்றதெல்லாம் விருப்பம்.',
          'கழிவுகளை விட்டுவிட்டுச் செல்வது; ஏற்காடு மாவட்ட நெகிழியில்லா திட்டத்தின் கீழ் இயங்குகிறது.'
        ]
      }
    ],
    faq: [
      {
        q: 'படகு சவாரிக்குப் பின் மதிய உணவுக்கு எவ்வளவு நேரம் கழித்துச் செல்ல வேண்டும்?',
        a: 'எந்த விதியும் இல்லை. சவாரி குறுகியது; எனவே ஒரு மணி நேரம் கரையில் நடந்து பிறகு சாப்பிடலாம். அமைதியான மேசை வேண்டுமெனில், வழக்கமான மதிய நெரிசலுக்குச் சற்று முன்பே செல்வதே எளிதான தேர்வு.'
      },
      {
        q: 'மதிய உணவுக்குப் பின் சொல்லப்பட்ட தொலைவுகள் துல்லியமானவையா?',
        a: 'இல்லை. அவை தேதியுள்ள மாவட்டச் சுற்றுலாத் தளத்திலிருந்து எடுக்கப்பட்ட தோராயமானவை. அவற்றை ஒரு கருத்துப் புள்ளியாகக் கருதி உள்ளூரில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'ஏரிக்கு அருகிலேயே சாப்பிட இடம் உள்ளதா?',
        a: 'அதை உறுதி செய்ய முடியாது. எங்களால் அணுகக்கூடிய பட்டியல்கள் கஃபேக்களையும் உணவகங்களையும் நகரத்திலோ அணுகுச் சாலைகளிலோ வைக்கின்றன; எனவே நீரின் ஓரத்தில் ஒரு மேசையை எதிர்பார்க்காமல், ஒரு குறுகிய பயணத்திற்குத் திட்டமிடுங்கள்.'
      },
      {
        q: 'மதிய உணவுக்கு முன் நான் எதை உறுதி செய்ய வேண்டும்?',
        a: 'நீங்கள் தேர்ந்தெடுக்கும் இடம் திறந்து மதிய உணவு அளிக்கிறதா என்பதை உறுதி செய்து, படகுத் தளத்திலிருந்து நகர மையம் அல்லது அணுகுச் சாலைக்கான பயண நேரத்தை ஒதுக்குங்கள். பட்டியலிடப்பட்ட எல்லா இடங்களும் நேரங்களை வெளியிடுவதில்லை; ஒரு விரைவான சரிபார்ப்பு வீணான பயணத்தைத் தவிர்க்கும்.'
      },
      {
        q: 'மதிய உணவுக்குப் பின் ஒரு காட்சி முனையையோ அருவியையோ சேர்க்கலாமா?',
        a: 'ஆம். பகோடா பாயிண்ட், கிளியூர் அருவி, பட்டு பண்ணை மற்றும் ரோஜாத் தோட்டம் ஆகியவற்றை மதிய விருப்பங்களாக மாவட்டத் தொலைவுகள் பட்டியலிடுகின்றன; ஆனால் அவை தோராயமானவை; எனவே முடிவு செய்வதற்கு முன் அன்றைய நிலையைச் சரிபாருங்கள்.'
      }
    ],
    sourceIds: ['chutneyListing', 'kaapiStopListing', 'ttdcBooking', 'districtLake', 'googleMaps']
  }
};

export default page;
