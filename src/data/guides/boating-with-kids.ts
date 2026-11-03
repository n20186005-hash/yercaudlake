import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'boating/with-kids',
  family: 'boating',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'The boat house is on the Yercaud Lake shore; from the lake entrance you reach it on foot along the lakeside, which is easier with children than a vehicle ride. The distance is approximate — confirm the counter and jetty location locally on the day.',
    ta: 'படகு இல்லம் ஏற்காடு ஏரிக்கரையில் உள்ளது; ஏரியின் நுழைவாயிலிருந்து ஏரிக்கரை வழியாக நடந்தே செல்வது, குழந்தைகளுடன் செல்ல வாகனப் பயணத்தைவிட எளிது. தூரம் தோராயமானது — கவுண்டரும் தளமும் இருக்கும் இடத்தை அன்று உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['boating/guide', 'boating/prices', 'nearby/anna-park', 'itineraries/family-with-kids', 'food/family-friendly-meals'],
  en: {
    title: 'Yercaud boating with young kids: what to check before boarding',
    description:
      'Boating on Yercaud Lake with young children: choosing a steady boat, matching life jackets to their size, and the safety checks a parent should confirm.',
    kicker: 'Boating',
    h1: 'Taking young children on a Yercaud boat: a parent’s checklist',
    lead:
      'A boat ride is usually the highlight of a family trip to Yercaud Lake, and for small children it is also the part that needs the most care. The district page says life jackets are issued to passengers, but nothing about minimum ages or children’s jacket sizes is published, so a parent has to close those gaps at the counter.',
    facts: [
      { label: 'Usual family boat', value: 'Pedal boat (two- or four-seat)' },
      { label: 'Life jackets', value: 'Issued to passengers (district page)' },
      { label: 'Minimum age', value: 'Unconfirmed — ask staff' },
      { label: 'Children’s jacket sizes', value: 'Check availability at the counter' }
    ],
    blocks: [
      { kind: 'h2', text: 'Start with the boat, not the ride length' },
      {
        kind: 'p',
        text:
          'For a family with small children the priority is a stable, controllable boat over a long or fast one. The pedal boat is the usual choice, and its two- or four-seat versions keep a small group together. Anything that adds speed or requires skill makes the trip harder to manage with a child on board.'
      },
      {
        kind: 'list',
        items: [
          'A pedal boat keeps both hands free and moves slowly, which suits a child who needs attention.',
          'A four-seat pedal boat holds a family together instead of splitting you across two boats.',
          'A rowing boat needs someone to row, so a parent cannot both row and watch a child.',
          'Ask which boat types are running and which one staff suggest for a family with young children.'
        ]
      },
      { kind: 'h2', text: 'Life jackets: the one item to check first' },
      {
        kind: 'p',
        text:
          'Official sources describe life jackets being issued to passengers before boarding. That says nothing about sizes, so for children the jacket fit is the thing to settle before anyone steps onto the jetty. A jacket that cannot be tightened to a child is not protection.'
      },
      {
        kind: 'list',
        items: [
          'Ask whether there is a jacket that actually fits each child, not just a jacket in general.',
          'Check that it fastens and tightens fully and cannot lift over the child’s head.',
          'Put the jacket on before boarding and keep it on for the whole ride, as staff direct.',
          'If no suitable size exists on the day, wait or skip the ride rather than go without.'
        ]
      },
      { kind: 'h2', text: 'A parent’s checklist at the counter' },
      {
        kind: 'steps',
        items: [
          'Confirm whether there is a minimum age or height for children on the boats.',
          'Confirm the jacket sizes available and whether they fit your children.',
          'Ask how children are counted for the fare and for seats.',
          'Keep the child seated and inside the boat for the whole ride; no reaching over the side.',
          'Agree on the plan in advance, so nobody stands or shifts weight at the wrong moment.'
        ]
      },
      { kind: 'h2', text: 'What parents ask versus what to check' },
      {
        kind: 'table',
        caption: 'Questions to raise, and what to check yourself',
        head: ['What you ask staff', 'What to check for yourself'],
        rows: [
          ['Is there a minimum age?', 'Whether staff give a clear answer for your child.'],
          ['Are child-sized jackets available?', 'Whether a jacket fastens and cannot lift over the head.'],
          ['How are children counted for the fare?', 'Whether a young child needs a paid seat.'],
          ['Which boat suits a family?', 'Whether the boat is steady enough for you to manage a child.']
        ]
      },
      {
        kind: 'list',
        items: [
          'Boarding without first checking that a jacket actually fits each child.',
          'Choosing a faster or row-yourself boat that leaves no free hand to watch a child.',
          'Letting a child stand or reach over the side during the ride.',
          'Treating a long ride as better; a short, steady ride is easier with young children.'
        ]
      },
      {
        kind: 'note',
        text:
          'If no jacket on the day fits a child, wait or skip the ride rather than board without one; the safest choice is the boat you can manage with a child aboard.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Whether the day’s boats are running before you count on a ride.',
          'The current wait for a boat, which changes as the day goes on.',
          'Where boarding happens and where your family should wait.',
          'Whether the jetty and boarding point look manageable with young children once you are there.'
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Assuming a suitable child-sized life jacket will be available without asking at the counter.',
          'Planning a long or fast ride when a short, steady one is easier to manage with a child.',
          'Splitting the family across two boats when one steady boat would keep everyone together.',
          'Boarding without agreeing who watches the child, so attention is split during the ride.'
        ]
      }
    ],
    faq: [
      {
        q: 'Is there a minimum age for boating?',
        a: 'No minimum age was obtained from an official source. Ask staff at the counter before buying; if a child is too young for a safe jacket fit, the answer is likely to be no.'
      },
      {
        q: 'Are child-sized life jackets available?',
        a: 'The district page only says jackets are issued to passengers; it does not mention sizes. Check at the counter whether a jacket fits each child, and be prepared to skip the ride if it does not.'
      },
      {
        q: 'Should we take a motor boat with young children?',
        a: 'A pedal boat is the steadier, more controllable choice for a family with small children. Ask staff which type they suggest for your group; the safer option is the one you can manage, not the fastest.'
      },
      {
        q: 'What should we do if no life jacket fits our child?',
        a: 'The safer choice is to wait or skip the ride rather than board without a suitable jacket. A jacket that cannot be tightened to a child is not protection, so ask staff whether another size is available on the day.'
      },
      {
        q: 'Is a pedal boat a good choice for a young child?',
        a: 'The pedal boat is the usual family choice: it is slow and steady and keeps both hands free to watch a child. Ask staff whether a minimum-age or height rule applies before buying, since none is published.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'ttdcBooking', 'googleMaps', 'districtLake']
  },
  ta: {
    title: 'சிறு குழந்தைகளுடன் ஏற்காடு படகு சவாரி: ஏறும் முன் சரிபார்க்க வேண்டியவை',
    description:
      'சிறு குழந்தைகளுடன் ஏற்காடு ஏரியில் படகு சவாரி — அமைதியான படகைத் தேர்வு செய்வது, குழந்தைகளின் அளவுக்கு உயிர்காப்பு உடை பொருத்துவது, மற்றும் பெற்றோர் நேரில் உறுதி செய்ய வேண்டிய பாதுகாப்பு அம்சங்கள்.',
    kicker: 'படகு சவாரி',
    h1: 'சிறு குழந்தைகளை ஏற்காடு படகில் அழைத்துச் செல்வது: பெற்றோருக்கான சரிபார்ப்புப் பட்டியல்',
    lead:
      'ஏற்காடு ஏரிக்கான குடும்பப் பயணத்தின் முக்கிய அனுபவம் பொதுவாகப் படகு சவாரிதான்; சிறு குழந்தைகளுக்கு அதுவே அதிக கவனம் தேவைப்படும் பகுதியும். பயணிகளுக்கு உயிர்காப்பு உடை வழங்கப்படுவதாக மாவட்டப் பக்கம் கூறுகிறது; ஆனால் குறைந்தபட்ச வயது அல்லது குழந்தைகளின் உடை அளவு பற்றி எதுவும் வெளியிடப்படவில்லை. எனவே அந்த இடைவெளிகளைப் பெற்றோர் கவுண்டரில் நிரப்ப வேண்டும்.',
    facts: [
      { label: 'வழக்கமான குடும்பப் படகு', value: 'மிதிபடகு (இரண்டு அல்லது நான்கு இருக்கை)' },
      { label: 'உயிர்காப்பு உடை', value: 'பயணிகளுக்கு வழங்கப்படுகிறது (மாவட்டப் பக்கம்)' },
      { label: 'குறைந்தபட்ச வயது', value: 'உறுதி செய்யப்படவில்லை — பணியாளரிடம் கேளுங்கள்' },
      { label: 'குழந்தைகளின் உடை அளவு', value: 'கவுண்டரில் கிடைப்பதைச் சரிபாருங்கள்' }
    ],
    blocks: [
      { kind: 'h2', text: 'சவாரி நீளத்தை அல்ல, படகை முதலில் பாருங்கள்' },
      {
        kind: 'p',
        text:
          'சிறு குழந்தைகள் உள்ள குடும்பத்திற்கு நீண்ட அல்லது வேகமான படகைவிட நிலையான, கட்டுப்படுத்தக்கூடிய படகே முக்கியம். மிதிபடகுதான் வழக்கமான தேர்வு; அதன் இரண்டு அல்லது நான்கு இருக்கை வடிவங்கள் சிறு குழுவை ஒன்றாக வைத்திருக்கும். வேகத்தைக் கூட்டும் அல்லது திறமை கேட்கும் எதுவும், குழந்தையுடன் பயணத்தைக் கையாளக் கடினமாக்கும்.'
      },
      {
        kind: 'list',
        items: [
          'மிதிபடகில் இரு கைகளும் சுதந்திரமாக இருக்கும்; மெதுவாக நகர்கிறது — கவனம் தேவைப்படும் குழந்தைக்கு இது பொருத்தம்.',
          'நான்கு இருக்கை மிதிபடகு குடும்பத்தை ஒன்றாக வைத்திருக்கும்; இரண்டு படகுகளாகப் பிரிக்க வேண்டியதில்லை.',
          'துடுப்புப் படகில் யாராவது துடுப்பு போட வேண்டும்; அப்போது பெற்றோரால் துடுப்பு போட்டுக்கொண்டே குழந்தையைக் கவனிக்க முடியாது.',
          'எந்தப் படகு வகைகள் இயங்குகின்றன, சிறு குழந்தைகள் உள்ள குடும்பத்திற்கு எதைப் பணியாளர் பரிந்துரைக்கிறார் எனக் கேளுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'உயிர்காப்பு உடை: முதலில் சரிபார்க்க வேண்டிய ஒன்று' },
      {
        kind: 'p',
        text:
          'ஏறுவதற்கு முன் பயணிகளுக்கு உயிர்காப்பு உடை வழங்கப்படுவதாக அதிகாரப்பூர்வ மூலங்கள் கூறுகின்றன. அது அளவுகள் பற்றி எதுவும் சொல்லவில்லை; எனவே குழந்தைகளைப் பொறுத்தவரை, யாரும் தளத்தில் ஏறுவதற்கு முன் உடையின் பொருத்தம் தீர்மானிக்கப்பட வேண்டிய விஷயம். குழந்தைக்கு இறுக்கமாகக் கட்ட முடியாத உடை பாதுகாப்பு அல்ல.'
      },
      {
        kind: 'list',
        items: [
          'பொதுவாக ஒரு உடை உள்ளதா என்பதல்ல — ஒவ்வொரு குழந்தைக்கும் பொருந்தும் உடை உள்ளதா எனக் கேளுங்கள்.',
          'அது முழுவதும் கட்டி இறுக்க முடிகிறதா, குழந்தையின் தலைக்கு மேல் தூக்கிச் செல்ல முடியாதபடி இருக்கிறதா எனப் பாருங்கள்.',
          'ஏறுவதற்கு முன் உடையை அணியுங்கள், பணியாளர் சொல்லும் வழியில் முழுச் சவாரிக்கும் அணிந்திருங்கள்.',
          'அன்று பொருத்தமான அளவு இல்லாவிட்டால், உடை இல்லாமல் செல்வதற்குப் பதிலாகக் காத்திருங்கள் அல்லது சவாரியைத் தவிர்த்து விடுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'கவுண்டரில் பெற்றோருக்கான சரிபார்ப்புப் பட்டியல்' },
      {
        kind: 'steps',
        items: [
          'படகுகளில் குழந்தைகளுக்குக் குறைந்தபட்ச வயது அல்லது உயரம் ஏதேனும் உள்ளதா என உறுதி செய்யுங்கள்.',
          'கிடைக்கும் உடை அளவுகளும், அவை உங்கள் குழந்தைகளுக்குப் பொருந்துகின்றனவா என்பதையும் உறுதி செய்யுங்கள்.',
          'குழந்தைகள் கட்டணத்திற்கும் இருக்கைக்கும் எப்படிக் கணக்கிடப்படுகிறார்கள் எனக் கேளுங்கள்.',
          'முழுச் சவாரிக்கும் குழந்தையை இருக்கையில், படகுக்குள் வைத்திருங்கள்; பக்கவாட்டில் கை நீட்ட வேண்டாம்.',
          'தவறான தருணத்தில் யாரும் எழுந்து நிற்காமல், எடையை நகர்த்தாமல் இருக்க முன்கூட்டியே திட்டத்தை ஒப்புக்கொள்ளுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'பெற்றோர் கேட்பது, நீங்களே சரிபார்க்க வேண்டியது' },
      {
        kind: 'table',
        caption: 'எழுப்ப வேண்டிய கேள்விகள், நீங்களே சரிபார்க்க வேண்டியவை',
        head: ['பணியாளரிடம் நீங்கள் கேட்பது', 'நீங்களே சரிபார்க்க வேண்டியது'],
        rows: [
          ['குறைந்தபட்ச வயது உண்டா?', 'உங்கள் குழந்தைக்குப் பணியாளர் தெளிவான பதில் தருகிறாரா.'],
          ['குழந்தை அளவு உடைகள் உள்ளனவா?', 'உடை கட்டி, தலைக்கு மேல் தூக்க முடியாதபடி இருக்கிறதா.'],
          ['குழந்தைகள் கட்டணத்திற்கு எப்படிக் கணக்கிடப்படுகிறார்கள்?', 'சிறு குழந்தைக்குக் கட்டண இருக்கை தேவையா.'],
          ['எந்தப் படகு குடும்பத்திற்குப் பொருத்தம்?', 'குழந்தையைக் கவனிக்கும் அளவுக்குப் படகு நிலையாக உள்ளதா.']
        ]
      },
      {
        kind: 'list',
        items: [
          'ஒவ்வொரு குழந்தைக்கும் உடை உண்மையில் பொருந்துகிறதா எனப் பார்க்காமல் ஏறுவது.',
          'குழந்தையைக் கவனிக்க ஒரு கையும் சுதந்திரமில்லாத வேகமான அல்லது துடுப்புப் படகைத் தேர்ந்தெடுப்பது.',
          'சவாரியின்போது குழந்தை எழுந்து நிற்கவோ பக்கவாட்டில் கை நீட்டவோ விடுவது.',
          'நீண்ட சவாரியே சிறந்தது எனக் கருதுவது; சிறு குழந்தைகளுடன் குறுகிய, நிலையான சவாரியே எளிது.'
        ]
      },
      {
        kind: 'note',
        text:
          'அன்று எந்த உடையும் ஒரு குழந்தைக்குப் பொருந்தவில்லை எனில், உடை இல்லாமல் ஏறுவதற்குப் பதிலாகக் காத்திருங்கள் அல்லது சவாரியைத் தவிர்த்து விடுங்கள்; குழந்தையுடன் உங்களால் கையாளக்கூடிய படகே மிகப் பாதுகாப்பானது.'
      },
      { kind: 'h2', text: 'அன்று உறுதிப்படுத்த வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'அன்று படகுகள் இயங்குகின்றனவா என்பதை, சவாரியை நம்புவதற்கு முன் உறுதி செய்யுங்கள்.',
          'இப்போதைய படகுக் காத்திருப்பு — நாள் செல்லச் செல்ல அது மாறும்.',
          'ஏறுவது எங்கே, உங்கள் குடும்பம் எங்கே காத்திருக்க வேண்டும்.',
          'நீங்கள் அங்கு சென்ற பின், தளமும் ஏறும் இடமும் சிறு குழந்தைகளுடன் கையாளக்கூடியதாக உள்ளதா.'
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'கவுண்டரில் கேட்காமல், பொருத்தமான குழந்தை அளவு உயிர்காப்பு உடை கிடைக்கும் என்று கருதுவது.',
          'குழந்தையுடன் கையாள எளிதான குறுகிய, நிலையான சவாரிக்குப் பதிலாக நீண்ட அல்லது வேகமான சவாரியைத் திட்டமிடுவது.',
          'ஒரு நிலையான படகே குடும்பத்தை ஒன்றாக வைத்திருக்கும் போது, இரண்டு படகுகளாகப் பிரிவது.',
          'சவாரியின்போது குழந்தையை யார் கவனிப்பது என ஒப்புக்கொள்ளாமல் ஏறுவது; கவனம் பிரிந்துவிடும்.'
        ]
      }
    ],
    faq: [
      {
        q: 'படகு சவாரிக்குக் குறைந்தபட்ச வயது உண்டா?',
        a: 'அதிகாரப்பூர்வ மூலத்திலிருந்து குறைந்தபட்ச வயது எதுவும் பெறப்படவில்லை. வாங்கும் முன் கவுண்டரில் பணியாளரிடம் கேளுங்கள்; பாதுகாப்பான உடை பொருத்தத்திற்குக் குழந்தை மிகச் சிறியதாக இருந்தால், பதில் இல்லை என்பதாகவே இருக்கும்.'
      },
      {
        q: 'குழந்தைகளின் அளவுக்கு உயிர்காப்பு உடைகள் கிடைக்குமா?',
        a: 'பயணிகளுக்கு உடை வழங்கப்படுகிறது என்பதை மட்டுமே மாவட்டப் பக்கம் கூறுகிறது; அளவுகளைக் குறிப்பிடவில்லை. ஒவ்வொரு குழந்தைக்கும் உடை பொருந்துகிறதா எனக் கவுண்டரில் சரிபார்த்து, பொருந்தவில்லை எனில் சவாரியைத் தவிர்க்கத் தயாராக இருங்கள்.'
      },
      {
        q: 'சிறு குழந்தைகளுடன் இயந்திரப் படகு எடுக்கலாமா?',
        a: 'சிறு குழந்தைகள் உள்ள குடும்பத்திற்கு மிதிபடகே மேலும் நிலையான, கட்டுப்படுத்தக்கூடிய தேர்வு. உங்கள் குழுவுக்கு எந்த வகையைப் பரிந்துரைக்கிறார் எனப் பணியாளரிடம் கேளுங்கள்; பாதுகாப்பானது என்பது வேகமானது அல்ல, உங்களால் கையாளக்கூடியதே.'
      },
      {
        q: 'எங்கள் குழந்தைக்கு எந்த உயிர்காப்பு உடையும் பொருந்தவில்லை எனில் என்ன செய்ய வேண்டும்?',
        a: 'பொருத்தமான உடை இல்லாமல் ஏறுவதைவிடக் காத்திருப்பதோ சவாரியைத் தவிர்ப்பதோ பாதுகாப்பானது. குழந்தைக்கு இறுக்கமாகக் கட்ட முடியாத உடை பாதுகாப்பு அல்ல; எனவே அன்று வேறு அளவு உள்ளதா எனப் பணியாளரிடம் கேளுங்கள்.'
      },
      {
        q: 'சிறு குழந்தைக்கு மிதிபடகு நல்ல தேர்வா?',
        a: 'மிதிபடகுதான் வழக்கமான குடும்பத் தேர்வு: அது மெதுவாகவும் நிலையாகவும் இருக்கும்; குழந்தையைக் கவனிக்க இரு கைகளும் சுதந்திரமாக இருக்கும். வெளியிடப்படாத குறைந்தபட்ச வயது அல்லது உயரம் விதி ஏதேனும் உள்ளதா என வாங்கும் முன் பணியாளரிடம் கேளுங்கள்.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'ttdcBooking', 'googleMaps', 'districtLake']
  }
};

export default page;
