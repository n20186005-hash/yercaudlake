import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'boating/weekend-queues',
  family: 'boating',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Yercaud Lake Boat House',
  fromLake: {
    en: 'The boat house is on the Yercaud Lake shore; from the lake entrance you reach the counter and jetty on foot along the lakeside. The distance is approximate — confirm the counter and jetty location locally on the day, especially on busy days when paths and parking fill up.',
    ta: 'படகு இல்லம் ஏற்காடு ஏரிக்கரையில் உள்ளது; ஏரியின் நுழைவாயிலிருந்து ஏரிக்கரை வழியாக நடந்தே கவுண்டரையும் தளத்தையும் அடையலாம். தூரம் தோராயமானது — குறிப்பாக நெரிசலான நாட்களில் பாதைகளும் நிறுத்தமும் நிரம்பும் என்பதால், கவுண்டரும் தளமும் இருக்கும் இடத்தை அன்று உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['boating/guide', 'boating/timings', 'nearby/deer-park', 'itineraries/lake-in-one-hour', 'transport/parking'],
  en: {
    title: 'Yercaud boat house queues on weekends and holidays',
    description:
      'Weekend and festival queues at the Yercaud boat house build through the day. See how your arrival time affects the wait, and what to do when the line is too long.',
    kicker: 'Boating',
    h1: 'Weekend and holiday queues at the boat house: how to wait less',
    lead:
      'The ride is short, but the wait for it can take up a large share of a family stop at Yercaud Lake. No official source publishes queue times, so this page describes the pattern rather than promising a number, and sets out what to do when the line is longer than you want to stand in.',
    facts: [
      { label: 'Quietest window', value: 'Early, near opening — generally' },
      { label: 'Busiest window', value: 'Late morning to mid-afternoon' },
      { label: 'Peak days', value: 'Weekends and the May festival' },
      { label: 'Wait length', value: 'Varies — no published figure' }
    ],
    blocks: [
      { kind: 'h2', text: 'How the queue behaves through a busy day' },
      {
        kind: 'p',
        text:
          'On a busy day the line is rarely constant. It grows as day-trippers arrive, peaks in the middle of the day, and eases again later. Weekends and the May festival are when the whole lakeside is busiest, and a public holiday behaves like a weekend.'
      },
      {
        kind: 'list',
        items: [
          'Early, close to the listed opening time: usually the shortest line of the day.',
          'Late morning into the afternoon: the longest waits, as groups arrive together after travelling up.',
          'Late afternoon: crowds thin, but the day’s remaining window and boat availability become the limit.',
          'Festival days and long weekends: expect the pattern to be more extreme, with parking also harder.'
        ]
      },
      { kind: 'h2', text: 'Using the day’s rhythm to wait less' },
      {
        kind: 'steps',
        items: [
          'Aim to reach the boat house near the start of the listed window on a busy day.',
          'If you arrive at the peak, do the walk or a park first and come back later.',
          'Keep your group ready to board while you wait, so no time is lost at the counter.',
          'Ask staff for the current wait before joining, and decide whether it fits your plan.',
          'Leave the boat ride as the flexible item, not the fixed centre of the day.'
        ]
      },
      { kind: 'h2', text: 'When the queue is longer than you want to wait' },
      {
        kind: 'list',
        items: [
          'Walk the lakeside and take in the shore while it is quiet.',
          'Visit an adjoining park instead, then return when the line has eased.',
          'Move to a viewpoint and come back for a later slot if the day still allows it.',
          'Keep the boat ride for a weekday or an early start if your trip is flexible.',
          'Treat the boat ride as optional on the busiest days rather than forcing it.'
        ]
      },
      {
        kind: 'note',
        text:
          'The lakeside and the adjoining parks stay open whether or not you get on a boat, so a long queue does not have to end the visit. Re-check the day’s timings and the current wait at the counter before changing plans.'
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'The current wait before you join the line.',
          'How many boats are running, since the wait depends on it.',
          'Whether the day is a festival or public holiday, which behaves like a weekend and can be busier.',
          'Where the parking is, since it fills up early on peak days.',
          'Whether the lakeside parks are open if you decide to wait out the queue.'
        ]
      },
      {
        kind: 'table',
        caption: 'What you might assume versus what to check',
        head: ['What you might assume', 'What to check instead'],
        rows: [
          ['Afternoon means a shorter line', 'Watch the queue move; waits often peak late morning to mid-afternoon.'],
          ['A festival day is just a busy weekend', 'Treat festival days as busier still, with harder parking.'],
          ['Late afternoon is the calmest time', 'Crowds thin then, but the day’s remaining window becomes the limit.'],
          ['The queue is the same all day', 'The line grows, peaks and eases through the day.']
        ]
      },
      { kind: 'h2', text: 'Common mistakes to avoid' },
      {
        kind: 'list',
        items: [
          'Arriving at the busiest part of the day and assuming the wait will still be short.',
          'Joining the line without asking staff for the current wait.',
          'Treating a festival day as no busier than an ordinary weekend.',
          'Leaving no alternative plan, so a long queue ends the visit.'
        ]
      }
    ],
    faq: [
      {
        q: 'When is the Yercaud boat house least busy?',
        a: 'Generally early, close to the listed opening time, and on weekdays outside the May festival. No official source publishes queue lengths, so treat this as a general pattern to test on the day.'
      },
      {
        q: 'How long is the wait at weekends?',
        a: 'No published figure is available, and it varies with the crowd, the weather and how many boats are running. Ask staff for the current wait before you join the line.'
      },
      {
        q: 'What can we do if the boat queue is too long?',
        a: 'The lakeside, adjoining parks and nearby viewpoints stay open. You can walk the shore, visit a park, or come back later; the boat ride can also be left for a weekday or an early slot.'
      },
      {
        q: 'Should we skip boating on a festival day?',
        a: 'Not necessarily, but festival days are the busiest, so treat the boat ride as an optional item rather than forcing it. The lakeside and adjoining parks stay open, so a long queue does not have to end the visit.'
      },
      {
        q: 'Does arriving early guarantee a short wait?',
        a: 'No timing guarantees a wait. Early, close to the listed opening time, is generally the shortest line of the day, but the wait varies with the crowd and how many boats are running, so ask staff for the current wait.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'googleMaps', 'ttdcBooking', 'districtFestivalTransport']
  },
  ta: {
    title: 'வார இறுதி, விடுமுறை நாட்களில் ஏற்காடு படகு இல்ல வரிசை',
    description:
      'வார இறுதி மற்றும் விழா நாட்களில் ஏற்காடு படகு இல்ல வரிசை நாள் முழுவதும் நீளும். நீங்கள் வரும் நேரம் காத்திருப்பை எப்படிப் பாதிக்கிறது, வரிசை மிக நீளும்போது என்ன செய்வது என்பதைப் பாருங்கள்.',
    kicker: 'படகு சவாரி',
    h1: 'வார இறுதி, விடுமுறை வரிசை: குறைவாகக் காத்திருக்க என்ன செய்வது',
    lead:
      'சவாரி குறுகியது; ஆனால் ஏற்காடு ஏரியில் ஒரு குடும்ப நிறுத்தத்தின் பெரும் பங்கை அதற்கான காத்திருப்பே எடுத்துக்கொள்ளலாம். அதிகாரப்பூர்வ மூலம் எதுவும் வரிசை நேரங்களை வெளியிடவில்லை; எனவே இந்தப் பக்கம் ஒரு எண்ணை உறுதி செய்யாமல் போக்கை விவரிக்கிறது, மேலும் நிற்க விருப்பமில்லாத அளவுக்கு வரிசை நீண்டால் என்ன செய்வது என்பதைத் தருகிறது.',
    facts: [
      { label: 'அமைதியான நேரம்', value: 'பொதுவாக, திறக்கும் நேரத்திற்கு அருகில் அதிகாலை' },
      { label: 'நெரிசலான நேரம்', value: 'பிற்பகல் முதல் நண்பகல் வரை' },
      { label: 'உச்ச நாட்கள்', value: 'வார இறுதி மற்றும் மே மாத விழா' },
      { label: 'காத்திருப்பு', value: 'மாறுபடும் — வெளியிடப்பட்ட எண் இல்லை' }
    ],
    blocks: [
      { kind: 'h2', text: 'நெரிசலான நாளில் வரிசை எப்படி நடக்கிறது' },
      {
        kind: 'p',
        text:
          'நெரிசலான நாளில் வரிசை எப்போதும் ஒரே மாதிரி இருக்காது. ஒரு நாள் பயணிகள் வரும்போது அது வளரும், பகல் நடுவில் உச்சத்தை அடையும், பின்னர் மெல்லக் குறையும். வார இறுதியும் மே மாத விழாவும் ஏரிக்கரை முழுவதும் மிக நெரிசலாக இருக்கும் நேரம்; பொது விடுமுறை நாளும் வார இறுதி போலவே நடக்கும்.'
      },
      {
        kind: 'list',
        items: [
          'அதிகாலை, பட்டியலிடப்பட்ட திறப்பு நேரத்திற்கு அருகில்: பொதுவாக நாளின் மிகக் குறுகிய வரிசை.',
          'பிற்பகல் முதல் நண்பகல் வரை: மலை ஏறி வந்த குழுக்கள் ஒன்றாகச் சேர்வதால் மிக நீண்ட காத்திருப்பு.',
          'பிற்பகல் இறுதியில்: கூட்டம் குறையும்; ஆனால் நாளின் எஞ்சிய நேரமும் படகு கிடைப்பும் எல்லையாகும்.',
          'விழா நாட்களும் நீண்ட வார இறுதிகளும்: போக்கு மேலும் தீவிரமாக இருக்கும்; நிறுத்தமும் கடினமாகும்.'
        ]
      },
      { kind: 'h2', text: 'நாளின் போக்கைப் பயன்படுத்திக் குறைவாகக் காத்திருப்பது' },
      {
        kind: 'steps',
        items: [
          'நெரிசலான நாளில், பட்டியலிடப்பட்ட நேரச் சாளரத்தின் தொடக்கத்தில் படகு இல்லத்தை அடைய முயலுங்கள்.',
          'உச்ச நேரத்தில் வந்தால், முதலில் நடை அல்லது ஒரு பூங்காவை முடித்துவிட்டுப் பின்னர் திரும்புங்கள்.',
          'காத்திருக்கும்போதே உங்கள் குழு ஏறத் தயாராக இருக்கட்டும்; கவுண்டரில் நேரம் வீணாகக் கூடாது.',
          'வரிசையில் சேர்வதற்கு முன் இப்போதைய காத்திருப்பைப் பணியாளரிடம் கேட்டு, அது உங்கள் திட்டத்திற்குப் பொருந்துகிறதா என முடிவு செய்யுங்கள்.',
          'படகு சவாரியை நாளின் நிலையான மையமாக அல்ல, நெகிழ்வான ஒன்றாக வையுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'நிற்க விருப்பமில்லாத அளவுக்கு வரிசை நீளும்போது' },
      {
        kind: 'list',
        items: [
          'ஏரிக்கரையில் நடந்து, அமைதியாக இருக்கும்போது கரையை ரசியுங்கள்.',
          'அதற்குப் பதிலாக அருகிலுள்ள பூங்காவுக்குச் சென்று, வரிசை குறைந்தபின் திரும்புங்கள்.',
          'நாள் இன்னும் அனுமதித்தால், ஒரு காட்சி முனைக்குச் சென்று பிறகு ஒரு நேரத்திற்குத் திரும்புங்கள்.',
          'பயணம் நெகிழ்வானதெனில், படகு சவாரியை வாரநாளுக்கோ அதிகாலைக்கோ ஒதுக்குங்கள்.',
          'மிக நெரிசலான நாட்களில் படகு சவாரியை வலுக்கட்டாயமாகச் செய்யாமல், விருப்பத் தேர்வாகக் கருதுங்கள்.'
        ]
      },
      {
        kind: 'note',
        text:
          'படகில் ஏறினாலும் ஏறாவிட்டாலும் ஏரிக்கரையும் அருகிலுள்ள பூங்காக்களும் திறந்தே இருக்கும்; எனவே நீண்ட வரிசை வருகையை முடித்துவிட வேண்டியதில்லை. திட்டத்தை மாற்றும் முன் அன்றைய நேரங்களையும் இப்போதைய காத்திருப்பையும் கவுண்டரில் மீண்டும் சரிபாருங்கள்.'
      },
      { kind: 'h2', text: 'அன்று உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'வரிசையில் சேர்வதற்கு முன் இப்போதைய காத்திருப்பு.',
          'எத்தனை படகுகள் இயங்குகின்றன — காத்திருப்பு அதைப் பொறுத்தது.',
          'அந்த நாள் விழாவா அல்லது பொது விடுமுறையா — அது வார இறுதி போலவே நடந்து, மேலும் நெரிசலாகலாம்.',
          'நிறுத்தம் எங்கே — உச்ச நாட்களில் அது முன்பே நிரம்பும்.',
          'வரிசையைக் காத்திருக்கத் தீர்மானித்தால் ஏரிக்கரைப் பூங்காக்கள் திறந்திருக்கின்றனவா.'
        ]
      },
      {
        kind: 'table',
        caption: 'நீங்கள் கருதலாம் ஒன்று, அதற்குப் பதிலாகச் சரிபார்க்க வேண்டியது',
        head: ['நீங்கள் கருதலாம்', 'அதற்குப் பதிலாகச் சரிபார்க்க வேண்டியது'],
        rows: [
          ['பிற்பகலில் வரிசை குறுகியதாகும்', 'வரிசை நகர்வதைப் பாருங்கள்; காத்திருப்பு பெரும்பாலும் பிற்பகல் முதல் நண்பகல் வரை உச்சத்தில் இருக்கும்.'],
          ['விழா நாள் என்பது நெரிசலான வார இறுதி போலவே', 'விழா நாட்களை இன்னும் நெரிசலானதாகவும், நிறுத்தம் மேலும் கடினமானதாகவும் கருதுங்கள்.'],
          ['பிற்பகல் இறுதியே அமைதியான நேரம்', 'அப்போது கூட்டம் குறையும்; ஆனால் நாளின் எஞ்சிய நேரமே எல்லையாகும்.'],
          ['வரிசை நாள் முழுவதும் ஒரே மாதிரி', 'வரிசை நாள் முழுவதும் வளர்ந்து, உச்சத்தை அடைந்து, மெல்லக் குறையும்.']
        ]
      },
      { kind: 'h2', text: 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' },
      {
        kind: 'list',
        items: [
          'நாளின் மிக நெரிசலான நேரத்தில் வந்து, காத்திருப்பு இன்னும் குறுகியதாக இருக்கும் என்று கருதுவது.',
          'இப்போதைய காத்திருப்பைப் பணியாளரிடம் கேட்காமல் வரிசையில் சேர்வது.',
          'விழா நாளைச் சாதாரண வார இறுதியைவிட நெரிசல் குறைவு எனக் கருதுவது.',
          'மாற்றுத் திட்டம் எதுவும் வைக்காமல், நீண்ட வரிசையே வருகையை முடித்து விடுவது.'
        ]
      }
    ],
    faq: [
      {
        q: 'ஏற்காடு படகு இல்லம் எப்போது குறைவான நெரிசலாக இருக்கும்?',
        a: 'பொதுவாக அதிகாலை, பட்டியலிடப்பட்ட திறப்பு நேரத்திற்கு அருகில், மே மாத விழாவைத் தவிர்த்த வாரநாட்களில். அதிகாரப்பூர்வ மூலம் எதுவும் வரிசை நீளங்களை வெளியிடவில்லை; எனவே இதை அன்று சோதிக்க வேண்டிய பொதுப் போக்காகக் கருதுங்கள்.'
      },
      {
        q: 'வார இறுதியில் காத்திருப்பு எவ்வளவு?',
        a: 'வெளியிடப்பட்ட எண் எதுவும் கிடைக்கவில்லை; அது கூட்டம், வானிலை, இயங்கும் படகுகளின் எண்ணிக்கையைப் பொறுத்து மாறும். வரிசையில் சேரும் முன் இப்போதைய காத்திருப்பைப் பணியாளரிடம் கேளுங்கள்.'
      },
      {
        q: 'படகு வரிசை மிக நீளமாக இருந்தால் என்ன செய்யலாம்?',
        a: 'ஏரிக்கரை, அருகிலுள்ள பூங்காக்கள், காட்சி முனைகள் திறந்தே இருக்கும். கரையில் நடக்கலாம், ஒரு பூங்காவுக்குச் செல்லலாம், அல்லது பிறகு திரும்பலாம்; படகு சவாரியை வாரநாளுக்கோ அதிகாலை நேரத்திற்கோ ஒதுக்கலாம்.'
      },
      {
        q: 'விழா நாளில் படகு சவாரியைத் தவிர்க்க வேண்டுமா?',
        a: 'கட்டாயம் இல்லை; ஆனால் விழா நாட்களே மிக நெரிசலானவை, எனவே படகு சவாரியை வலுக்கட்டாயமாகச் செய்யாமல் விருப்பத் தேர்வாகக் கருதுங்கள். ஏரிக்கரையும் அருகிலுள்ள பூங்காக்களும் திறந்தே இருக்கும்; எனவே நீண்ட வரிசை வருகையை முடித்துவிட வேண்டியதில்லை.'
      },
      {
        q: 'முன்பே வந்தால் குறுகிய காத்திருப்பு உறுதியா?',
        a: 'எந்த நேரமும் காத்திருப்பை உறுதி செய்யாது. பட்டியலிடப்பட்ட திறப்பு நேரத்திற்கு அருகில் அதிகாலையில் வருவது பொதுவாக நாளின் மிகக் குறுகிய வரிசை; ஆனால் கூட்டம் மற்றும் இயங்கும் படகுகளின் எண்ணிக்கையைப் பொறுத்து காத்திருப்பு மாறும்; எனவே இப்போதைய காத்திருப்பைப் பணியாளரிடம் கேளுங்கள்.'
      }
    ],
    sourceIds: ['districtBoatHouse', 'googleMaps', 'ttdcBooking', 'districtFestivalTransport']
  }
};

export default page;
