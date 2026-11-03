import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'boating/guide',
  family: 'boating',
  priority: 'P0',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'The boat house sits right on the Yercaud Lake shore, so from the lake entrance you can simply walk along the lakeside path to the boat-house counter and jetty — no vehicle is needed. The distance is approximate; confirm the counter and jetty location locally on the day, as signs and access can change.',
    ta: 'படகு இல்லம் ஏற்காடு ஏரிக்கரையிலேயே அமைந்துள்ளது; எனவே ஏரியின் நுழைவாயிலிலிருந்து ஏரிக்கரைப் பாதை வழியாக நடந்தே படகு இல்லக் கவுண்டரையும் படகுத் தளத்தையும் அடையலாம் — வாகனம் தேவையில்லை. தூரம் தோராயமானது; அன்று அடையாளப் பலகைகளும் அணுகலும் மாறலாம் என்பதால் கவுண்டரும் தளமும் இருக்கும் இடத்தை உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['boating/prices', 'boating/timings', 'boating/online-booking', 'boating/with-kids', 'visit/best-time'],
  en: {
    title: 'Yercaud Lake boating guide: boat types, boarding and how to choose',
    description:
      'What the TTDC boat house on Yercaud Lake normally offers — pedal, rowing and motor boats, how boarding and life jackets work, how to pick a boat for your group, and what to confirm before paying.',
    kicker: 'Boating',
    h1: 'Boating at Yercaud Lake: which boat, and how boarding works',
    lead:
      'The boat house is the landmark activity on the lakeside. Three boat families are normally described — pedal, rowing and motor. Published fares disagree with each other, so this page explains the choice and the boarding routine instead of promising a price.',
    facts: [
      { label: 'Operator', value: 'TTDC boat house (district statement)' },
      { label: 'Fleet described', value: '60 boats in three types' },
      { label: 'Boat families', value: 'Pedal · Rowing · Motor (+ aqua-cycle)' },
      { label: 'Fares', value: 'Sources differ — see the price page' }
    ],
    blocks: [
      { kind: 'h2', text: 'What is normally available' },
      {
        kind: 'p',
        text:
          'The Salem District boat-house page describes a TTDC-run boat house on the lake with 60 boats in three types: pedal boats, rowing boats and a motor boat. The TTDC booking portal lists the same families and adds an aqua-cycle, a pedal-driven craft.'
      },
      {
        kind: 'list',
        items: [
          'Pedal boat — the usual family choice; both the district page and the booking portal list two-seat and four-seat versions.',
          'Rowing boat — listed with three-seat and five-seat versions; you or a companion supplies the effort.',
          'Motor boat — listed as an eight-seat craft, the practical option for a larger group.',
          'Aqua-cycle — a pedal-driven craft that appears on the booking portal list.'
        ]
      },
      {
        kind: 'note',
        text:
          'Both lists are dated. Ask at the counter which boats are running on the day; weather and maintenance can take individual boats out of service.'
      },
      { kind: 'h2', text: 'How boarding normally works' },
      {
        kind: 'p',
        text: 'The routine described by official sources is short, and the safety steps are the ones worth remembering.'
      },
      {
        kind: 'steps',
        items: [
          'Buy a ticket at the boat-house counter, or reserve through the TTDC booking route if it is open for your date.',
          'Life jackets are described as being issued to passengers before boarding. Wear yours as staff direct.',
          'Wait for your turn at the jetty. Queue time grows through the middle of the day and at weekends.',
          'Board where staff indicate, stay seated as instructed, and come back to the jetty at the end of the ride.',
          'The district page also describes a rescue boat patrolling the lake while rides are running.'
        ]
      },
      { kind: 'h2', text: 'Choosing a boat for your group' },
      {
        kind: 'list',
        items: [
          'Small children: a pedal boat is the usual choice, and you should ask staff about minimum age and jacket sizes.',
          'Six or more people: the eight-seat motor boat carries everyone together instead of splitting your group across two pedal boats.',
          'Quiet and unhurried: a rowing boat is slow and undemanding, but somebody has to row.',
          'Short on time: a shorter ride on any type is usually enough to see the shore from the water.'
        ]
      },
      { kind: 'h2', text: 'What a boat ticket does not cover' },
      {
        kind: 'p',
        text:
          'A boat ride is not permission to swim, bathe or wade. Some third-party tourism pages mention fishing at Yercaud Lake; no district source obtained here confirms that it is currently permitted, so treat fishing as unverified until the boat house or the local authority says otherwise.'
      },
      { kind: 'h2', text: 'Questions worth asking at the counter' },
      {
        kind: 'list',
        items: [
          'Which boat types are running right now, and how long is the current wait?',
          'What is the total for my group size, and is a deposit taken for the boat?',
          'How long is the ride, and where does it start and finish?',
          'Are there life jackets in the sizes my group needs?'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Which boat types are running when you arrive, and how long the current wait is.',
          'The price for your group size and whether it is for the whole boat.',
          'The life-jacket sizes available, especially for children.',
          'Where the ride starts and finishes, and how long it lasts.',
          'Whether the ticket includes anything beyond the ride itself.'
        ]
      },
      {
        kind: 'table',
        caption: 'What you might ask versus what to check yourself',
        head: ['What you ask at the counter', 'What to check for yourself'],
        rows: [
          ['“Which boats are running?”', 'See which boats are actually at the jetty.'],
          ['“How long is the wait?”', 'Watch the queue move before you commit.'],
          ['“What does it cost?”', 'Confirm the price is for the whole boat, not per person.'],
          ['“Are jackets available?”', 'Check a jacket fastens and fits each passenger.']
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Assuming the fare you read online is the price at the counter for the whole boat.',
          'Choosing a boat type before checking how long the current wait is.',
          'Treating a boat ticket as permission to swim, bathe or fish.',
          'Rushing to board before confirming that a life jacket fits everyone in your group.'
        ]
      }
    ],
    faq: [
      {
        q: 'Do I need to book a boat in advance?',
        a: 'Not necessarily. The district page states that an online booking facility through TTDC is in operation, while walk-up tickets at the counter remain the normal route. Availability depends on the day, and a booking is not a guarantee of a specific boat until it is confirmed.'
      },
      {
        q: 'How long does a ride take?',
        a: 'No reliable current duration is published. Rides are short — a few tens of minutes depending on the type and the day — so treat any exact minute figure you see online as an estimate and ask at the counter.'
      },
      {
        q: 'Can we take food on board?',
        a: 'No official guidance was obtained. Ask at the counter, and keep the lake clean: Yercaud runs under a district plastic-free programme.'
      },
      {
        q: 'Which boat keeps a big group together?',
        a: 'The eight-seat motor boat is the one the lists describe as carrying a larger group together, so six or more people do not have to split across two pedal boats. Ask at the counter which types are running that day.'
      },
      {
        q: 'Can we fish from the boat?',
        a: 'No district source obtained for this page confirms that fishing at Yercaud Lake is currently permitted. Some third-party tourism pages mention it, so treat fishing as unverified and ask the boat house or the local authority before assuming it is allowed.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'districtLake', 'ttdcBooking', 'ttdcMain', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு ஏரி படகு சவாரி வழிகாட்டி: படகு வகைகள், ஏறும் முறை, தேர்வு செய்வது எப்படி',
    description:
      'ஏற்காடு ஏரியின் TTDC படகு இல்லத்தில் பொதுவாகக் கிடைக்கும் மிதிபடகு, துடுப்புப் படகு, இயந்திரப் படகு; ஏறும் முறை, உயிர்காப்பு உடை, உங்கள் குழுவிற்கு ஏற்ற படகு தேர்வு, கட்டணம் செலுத்தும் முன் உறுதி செய்ய வேண்டியவை.',
    kicker: 'படகு சவாரி',
    h1: 'ஏற்காடு ஏரியில் படகு சவாரி: எந்தப் படகு, ஏறுவது எப்படி',
    lead:
      'ஏரிக்கரையின் அடையாளமான அனுபவம் படகு இல்லம்தான். மிதிபடகு, துடுப்புப் படகு, இயந்திரப் படகு என மூன்று வகைகள் பொதுவாகக் குறிப்பிடப்படுகின்றன. வெளியிடப்பட்ட கட்டணங்கள் ஒன்றோடு ஒன்று ஒத்துப்போகவில்லை; எனவே இந்தப் பக்கம் விலையை உறுதி செய்யாமல், எந்தப் படகு உங்களுக்குப் பொருத்தம் மற்றும் ஏறும் முறையை விளக்குகிறது.',
    facts: [
      { label: 'நடத்துபவர்', value: 'TTDC படகு இல்லம் (மாவட்ட அறிக்கை)' },
      { label: 'குறிப்பிடப்படும் படகுகள்', value: '60 படகுகள், மூன்று வகை' },
      { label: 'படகு வகைகள்', value: 'மிதி · துடுப்பு · இயந்திரம் (+ அக்வா சைக்கிள்)' },
      { label: 'கட்டணம்', value: 'மூலங்கள் வேறுபடும் — கட்டணப் பக்கம் பார்க்கவும்' }
    ],
    blocks: [
      { kind: 'h2', text: 'பொதுவாக என்ன கிடைக்கிறது' },
      {
        kind: 'p',
        text:
          'சேலம் மாவட்டத்தின் படகு இல்லப் பக்கம், ஏரியில் TTDC நடத்தும் படகு இல்லம் ஒன்று இருப்பதாகவும், அங்கு மிதிபடகு, துடுப்புப் படகு, இயந்திரப் படகு என மூன்று வகையில் 60 படகுகள் இயங்குவதாகவும் குறிப்பிடுகிறது. TTDC முன்பதிவு தளம் இதே வகைகளுடன் அக்வா சைக்கிள் என்ற மிதி இயக்கப் படகையும் பட்டியலிடுகிறது.'
      },
      {
        kind: 'list',
        items: [
          'மிதிபடகு — குடும்பங்களின் வழக்கமான தேர்வு; இரண்டு இருக்கை மற்றும் நான்கு இருக்கை வடிவங்கள் மாவட்டப் பக்கம், முன்பதிவுத் தளம் இரண்டிலும் உள்ளன.',
          'துடுப்புப் படகு — மூன்று இருக்கை மற்றும் ஐந்து இருக்கை வடிவங்கள்; துடுப்பு போடுவது நீங்கள்தான்.',
          'இயந்திரப் படகு — எட்டு இருக்கை; பெரிய குழுவிற்கு ஏற்ற தேர்வு.',
          'அக்வா சைக்கிள் — முன்பதிவுத் தளப் பட்டியலில் உள்ள மிதி இயக்க வடிவம்.'
        ]
      },
      {
        kind: 'note',
        text:
          'இந்தப் பட்டியல்கள் இரண்டும் தேதியுள்ளவை. அன்று எந்தப் படகுகள் இயங்குகின்றன என்பதைக் கவுண்டரில் கேளுங்கள்; வானிலையும் பராமரிப்பும் சில படகுகளை நிறுத்தலாம்.'
      },
      { kind: 'h2', text: 'ஏறும் முறை பொதுவாக எப்படி இருக்கும்' },
      {
        kind: 'p',
        text: 'அதிகாரப்பூர்வ மூலங்கள் விவரிக்கும் முறை குறுகியது; நினைவில் வைக்க வேண்டியது பாதுகாப்பு படிகள்தான்.'
      },
      {
        kind: 'steps',
        items: [
          'படகு இல்லக் கவுண்டரில் டிக்கெட் வாங்குங்கள்; உங்கள் தேதிக்கு திறந்திருந்தால் TTDC முன்பதிவு வழியிலும் பதிவு செய்யலாம்.',
          'ஏறுவதற்கு முன் பயணிகளுக்கு உயிர்காப்பு உடை வழங்கப்படுவதாக மூலங்கள் குறிப்பிடுகின்றன. பணியாளர் சொல்லும் வழியில் அணியுங்கள்.',
          'படகுத் தளத்தில் உங்கள் முறைக்குக் காத்திருங்கள். நண்பகல் நேரத்திலும் வார இறுதியிலும் காத்திருப்பு நீளும்.',
          'பணியாளர் காட்டும் இடத்தில் ஏறுங்கள், சொன்னபடி அமருங்கள், சவாரி முடிந்ததும் தளத்திற்குத் திரும்புங்கள்.',
          'சவாரி நடக்கும் நேரத்தில் ஏரியில் ஒரு மீட்புப் படகு ரோந்து செல்வதாகவும் மாவட்டப் பக்கம் குறிப்பிடுகிறது.'
        ]
      },
      { kind: 'h2', text: 'உங்கள் குழுவிற்கு ஏற்ற படகு' },
      {
        kind: 'list',
        items: [
          'சிறு குழந்தைகள்: மிதிபடகு வழக்கமான தேர்வு. குறைந்தபட்ச வயது மற்றும் உயிர்காப்பு உடை அளவுகளைப் பணியாளரிடம் கேளுங்கள்.',
          'ஆறு பேருக்கு மேல்: எட்டு இருக்கை இயந்திரப் படகில் எல்லோரும் ஒன்றாகச் செல்லலாம்; இரண்டு மிதிபடகுகளாகப் பிரிக்க வேண்டியதில்லை.',
          'அமைதியும் அவசரமின்மையும்: துடுப்புப் படகு மெதுவானது, ஆனால் துடுப்பு போட வேண்டும்.',
          'நேரம் குறைவு: எந்த வகையிலும் ஒரு குறுகிய சவாரி, கரையை நீரிலிருந்து பார்ப்பதற்குப் போதுமானது.'
        ]
      },
      { kind: 'h2', text: 'படகு டிக்கெட்டில் அடங்காதவை' },
      {
        kind: 'p',
        text:
          'படகு சவாரி என்பது நீந்தவோ குளிக்கவோ நீரில் இறங்கவோ அனுமதி அல்ல. ஏற்காடு ஏரியில் மீன்பிடி உள்ளது என்று சில வெளி சுற்றுலாத் தளங்கள் குறிப்பிடுகின்றன; தற்போது அது அனுமதிக்கப்படுகிறது என்பதை இங்கு பயன்படுத்தப்பட்ட எந்த மாவட்ட மூலமும் உறுதிப்படுத்தவில்லை. எனவே படகு இல்லமோ உள்ளூர் அதிகாரமோ வேறு விதமாகச் சொல்லும் வரை மீன்பிடியை உறுதி செய்யப்படாத தகவலாகவே கருதுங்கள்.'
      },
      { kind: 'h2', text: 'கவுண்டரில் கேட்கத் தகுந்த கேள்விகள்' },
      {
        kind: 'list',
        items: [
          'இப்போது எந்தப் படகு வகைகள் இயங்குகின்றன, இப்போது எவ்வளவு காத்திருப்பு?',
          'என் குழு அளவுக்கு மொத்தக் கட்டணம் எவ்வளவு, படகுக்கு முன்பணம் ஏதும் உண்டா?',
          'சவாரி எவ்வளவு நேரம், எங்கிருந்து தொடங்கி எங்கு முடிகிறது?',
          'என் குழுவிற்குத் தேவையான அளவுகளில் உயிர்காப்பு உடைகள் உள்ளனவா?'
        ]
      },
      { kind: 'h2', text: 'அன்று உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'நீங்கள் வரும்போது எந்தப் படகு வகைகள் இயங்குகின்றன, இப்போது எவ்வளவு காத்திருப்பு.',
          'உங்கள் குழு அளவுக்கான விலை, அது முழுப் படகுக்கா.',
          'கிடைக்கும் உயிர்காப்பு உடை அளவுகள், குறிப்பாகக் குழந்தைகளுக்கு.',
          'சவாரி எங்கு தொடங்கி எங்கு முடிகிறது, எவ்வளவு நேரம் நீடிக்கிறது.',
          'டிக்கெட்டில் சவாரியைத் தவிர வேறு ஏதேனும் அடங்குகிறதா.'
        ]
      },
      {
        kind: 'table',
        caption: 'நீங்கள் கேட்பது, நீங்களே சரிபார்க்க வேண்டியது',
        head: ['கவுண்டரில் நீங்கள் கேட்பது', 'நீங்களே சரிபார்க்க வேண்டியது'],
        rows: [
          ['“எந்தப் படகுகள் இயங்குகின்றன?”', 'தளத்தில் உண்மையில் எந்தப் படகுகள் உள்ளன எனப் பாருங்கள்.'],
          ['“காத்திருப்பு எவ்வளவு?”', 'நீங்கள் சேர்வதற்கு முன் வரிசை நகர்வதைப் பாருங்கள்.'],
          ['“கட்டணம் என்ன?”', 'விலை ஒரு நபருக்கு அல்ல, முழுப் படகுக்கு என உறுதி செய்யுங்கள்.'],
          ['“உடைகள் உள்ளனவா?”', 'ஒவ்வொரு பயணிக்கும் உடை கட்டி இறுக்க முடிகிறதா எனப் பாருங்கள்.']
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'ஆன்லைனில் படித்த கட்டணமே கவுண்டரில் முழுப் படகுக்கான விலை என்று கருதுவது.',
          'இப்போதைய காத்திருப்பு எவ்வளவு எனப் பாராமல் ஒரு படகு வகையைத் தேர்ந்தெடுப்பது.',
          'படகு டிக்கெட் நீந்தவோ குளிக்கவோ மீன் பிடிக்கவோ அனுமதி தரும் என்று கருதுவது.',
          'உங்கள் குழுவில் உள்ள அனைவருக்கும் உயிர்காப்பு உடை பொருந்துகிறதா என உறுதி செய்யாமல் அவசரமாக ஏறுவது.'
        ]
      }
    ],
    faq: [
      {
        q: 'படகை முன்பதிவு செய்ய வேண்டுமா?',
        a: 'கட்டாயம் இல்லை. TTDC வழியாக ஆன்லைன் முன்பதிவு வசதி செயல்பாட்டில் இருப்பதாக மாவட்டப் பக்கம் குறிப்பிடுகிறது; கவுண்டரில் நேரடியாக டிக்கெட் வாங்குவதே வழக்கமான வழி. கிடைப்பது அன்றைய நிலையைப் பொறுத்தது; உறுதி செய்யப்படும் வரை முன்பதிவு ஒரு குறிப்பிட்ட படகிற்கான உறுதி அல்ல.'
      },
      {
        q: 'சவாரி எவ்வளவு நேரம் ஆகும்?',
        a: 'தற்போதைய நம்பகமான கால அளவு எதுவும் வெளியிடப்படவில்லை. படகு வகை மற்றும் அன்றைய நிலையைப் பொறுத்து சவாரி குறுகியதாக, சில பத்து நிமிடங்கள் அளவில் இருக்கும். ஆன்லைனில் காணும் துல்லியமான நிமிட எண்ணை மதிப்பீடாகக் கருதி கவுண்டரில் கேளுங்கள்.'
      },
      {
        q: 'படகில் உணவு எடுத்துச் செல்லலாமா?',
        a: 'அதிகாரப்பூர்வ வழிகாட்டுதல் எதுவும் கிடைக்கவில்லை. கவுண்டரில் கேளுங்கள்; ஏற்காடு மாவட்ட நெகிழியில்லா திட்டத்தின் கீழ் இயங்குவதால் ஏரியைச் சுத்தமாக வைத்திருங்கள்.'
      },
      {
        q: 'பெரிய குழுவை ஒன்றாகக் கொண்டு செல்லும் படகு எது?',
        a: 'எட்டு இருக்கை இயந்திரப் படகுதான் பெரிய குழுவை ஒன்றாகக் கொண்டு செல்வதாகப் பட்டியல்கள் குறிப்பிடுகின்றன; எனவே ஆறு அல்லது அதற்கு மேற்பட்டவர்கள் இரண்டு மிதிபடகுகளாகப் பிரிய வேண்டியதில்லை. அன்று எந்த வகைகள் இயங்குகின்றன எனக் கவுண்டரில் கேளுங்கள்.'
      },
      {
        q: 'படகில் இருந்து மீன் பிடிக்கலாமா?',
        a: 'ஏற்காடு ஏரியில் மீன்பிடி தற்போது அனுமதிக்கப்படுகிறது என்பதை இந்தப் பக்கத்திற்குப் பெறப்பட்ட எந்த மாவட்ட மூலமும் உறுதிப்படுத்தவில்லை. சில வெளி சுற்றுலாத் தளங்கள் அதைக் குறிப்பிடுகின்றன; எனவே அனுமதி உண்டு எனக் கருதும் முன் மீன்பிடியை உறுதி செய்யப்படாத தகவலாகக் கருதி படகு இல்லத்தையோ உள்ளூர் அதிகாரத்தையோ கேளுங்கள்.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'districtLake', 'ttdcBooking', 'ttdcMain', 'googleMaps']
  }
};

export default page;
