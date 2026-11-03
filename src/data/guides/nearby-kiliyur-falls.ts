import type { GuidePage } from './types';

const page: GuidePage = {
  slug: 'nearby/kiliyur-falls',
  family: 'nearby',
  priority: 'P1',
  lastChecked: '2 November 2026',
  mapsQuery: 'Kiliyur Falls Yercaud',
  fromLake: {
    en: 'The district page puts Kiliyur Falls roughly 3 km from Yercaud Lake, and most visitors cover that road section from the lake or the town by vehicle or auto, then continue on foot. The distance is approximate; confirm the path and the water situation locally on the day.',
    ta: 'மாவட்டப் பக்கம் கிளியூர் அருவியை ஏற்காடு ஏரியிலிருந்து ஏறக்குறைய 3 கிமீ தொலைவில் குறிப்பிடுகிறது; பெரும்பாலான பயணிகள் அந்தச் சாலைப் பகுதியை ஏரியிலிருந்தோ நகரத்திலிருந்தோ வாகனம் அல்லது ஆட்டோவில் கடந்து, பின்னர் நடந்து செல்கிறார்கள். தொலைவு தோராயமானது; பாதை நிலையையும் நீர்வரத்தையும் அன்றைய நாளில் உள்ளூரில் உறுதி செய்யுங்கள்.'
  },
  related: ['nearby/ladys-seat', 'nearby/anna-park', 'itineraries/one-day-from-lake', 'visit/best-time', 'itineraries/rainy-day'],
  en: {
    title: 'Kiliyur Falls from Yercaud Lake: route, trail conditions and visit plan',
    description:
      'Planning Kiliyur Falls from Yercaud Lake — the district’s roughly 3 km distance, why the final stretch on foot decides the trip, the post-monsoon season, and the conditions that should keep you at the lake instead.',
    kicker: 'Nearby places',
    h1: 'Kiliyur Falls from Yercaud Lake: route, trail and when to skip it',
    lead:
      'The district tourism page puts Kiliyur Falls about 3 km from Yercaud Lake and recommends visiting after the south-west or north-east monsoon. The distance is the easy part. What decides whether the trip is worth it is the state of the last stretch on foot, and how much water is coming down.',
    facts: [
      { label: 'District distance', value: 'About 3 km from the lake' },
      { label: 'Recommended season', value: 'After the south-west or north-east monsoon' },
      { label: 'Final approach', value: 'Short steep descent on foot — condition varies' },
      { label: 'Facilities', value: 'Check locally; do not assume food, water or toilets' }
    ],
    blocks: [
      { kind: 'h2', text: 'Where it is and how people get there' },
      {
        kind: 'p',
        text:
          'The district page places Kiliyur Falls roughly 3 km from Yercaud Lake and lists a contact number for the falls. Most visitors cover the road section from the lake or the town centre in a few minutes by vehicle, then continue on foot.'
      },
      {
        kind: 'note',
        text:
          'Travelling without your own vehicle means arranging the return trip as well. Do not assume mobile coverage or available taxis near the falls, especially late in the day.'
      },
      { kind: 'h2', text: 'The part that decides the visit: the final stretch' },
      {
        kind: 'p',
        text:
          'Beyond the road, the last section to the viewing area is described in published accounts as a steep, rough descent on foot with steps. That description varies with season and maintenance, and it is the single most important thing to check locally before you set out.'
      },
      {
        kind: 'list',
        items: [
          'Ask at your accommodation or in town whether the path is currently open and passable.',
          'Expect uneven ground on the way down, and a climb on the way back.',
          'Wear footwear with grip; smooth soles and wet rock after rain are a poor combination.',
          'Skip it if you have limited mobility, very young children, or anyone unsteady on steps.'
        ]
      },
      { kind: 'h2', text: 'Season and water' },
      {
        kind: 'p',
        text:
          'The district guidance is to visit after the south-west or north-east monsoon. Outside those periods the falls can be thin or effectively dry, and rain elsewhere in the hills does not automatically mean flow at the falls.'
      },
      {
        kind: 'list',
        items: [
          'Immediately after good monsoon rain is the most likely window for a strong flow.',
          'During and just after heavy rain the descent is at its most slippery and the water at its least predictable.',
          'In the dry months treat it as a forest walk with a view, and decide whether that is still worth the trip.'
        ]
      },
      { kind: 'h2', text: 'How it fits into a lake day' },
      {
        kind: 'p',
        text:
          'Because Kiliyur Falls is close to town, it can be paired with a lake visit rather than replacing it. The usual order is the lake and boat house first, while the day is cooler and jetty queues are shorter, then the falls afterwards. The reverse also works if the morning is wet and you want the trail while it is quiet.'
      },
      {
        kind: 'steps',
        items: [
          'Start at Yercaud Lake and finish the boat house while you are fresh.',
          'Confirm the path and the water situation before committing to the falls.',
          'Allow time for the descent, the return climb and a break.',
          'Keep the plan reversible: if the path is closed, the lake, Anna Park and the viewpoints are still open.'
        ]
      },
      { kind: 'h2', text: 'Before you set out' },
      {
        kind: 'list',
        items: [
          'Parking near the falls is limited, and visitor reports describe crowding in season.',
          'Do not assume drinking water, food or toilets; carry what you need and take rubbish back with you.',
          'Do not enter the water. Rocks and pools below a waterfall are not a bathing area.',
          'Note the time you need to be back before light fades.'
        ]
      },
      { kind: 'h2', text: 'What to confirm on the day' },
      {
        kind: 'list',
        items: [
          'Whether the path is currently open and passable, asked locally before you set out.',
          'Whether there is any flow at the falls, which depends on the season.',
          'The parking situation near the falls if you are driving.',
          'The time you need to be back before light fades.'
        ]
      },
      { kind: 'h2', text: 'Conditions and pitfalls at a glance' },
      {
        kind: 'table',
        caption: 'Check these before committing to the falls — none is guaranteed here',
        head: ['Check', 'Why it decides the trip'],
        rows: [
          ['Path that day', 'The final descent is described as steep and rough, and varies with season and maintenance'],
          ['Water flow', 'Outside the post-monsoon period the falls can be thin or effectively dry'],
          ['Footwear and group', 'Steps, wet rock and smooth soles are a poor combination'],
          ['Return trip', 'Without your own vehicle, the trip back has to be arranged in advance']
        ]
      }
    ],
    faq: [
      {
        q: 'Can we walk all the way from Yercaud Lake to Kiliyur Falls?',
        a: 'Published accounts describe the final approach on foot rather than a continuous pedestrian route from the lake. Treat the road section as a vehicle or auto-rickshaw trip, and confirm the walking part locally.'
      },
      {
        q: 'Is Kiliyur Falls worth visiting in summer?',
        a: 'It depends entirely on the water. The district recommends the post-monsoon period, and outside it the falls can be dry. Go for the walk and the forest surroundings if that is enough for you.'
      },
      {
        q: 'Is it suitable for children?',
        a: 'Not always. The final descent is described as steep and rough. Assess your group’s footwear, ages and steadiness, and turn back without hesitation if anyone is uncomfortable.'
      },
      {
        q: 'What should I confirm before setting out for Kiliyur Falls?',
        a: 'Confirm that the path is currently open and passable, the water flow for the season, your return arrangement, and the parking situation. All of these are checked locally, and none is guaranteed here.'
      },
      {
        q: 'How do we get back from the falls without our own vehicle?',
        a: 'Arrange the return trip as well as the outward one, and do not assume mobile coverage or available taxis near the falls, especially late in the day. Plan the return before you leave.'
      }
    ],
    sourceIds: ['districtLake', 'districtGallery', 'tnTourismBrochure', 'googleMaps']
  },
  ta: {
    title: 'ஏற்காடு ஏரியிலிருந்து கிளியூர் அருவி: வழி, பாதை நிலை மற்றும் பயணத் திட்டம்',
    description:
      'ஏற்காடு ஏரியிலிருந்து கிளியூர் அருவிக்குச் செல்வதைத் திட்டமிடுதல் — மாவட்டப் பக்கம் குறிப்பிடும் சுமார் 3 கிமீ தொலைவு, இறுதி நடைப்பகுதியே பயணத்தைத் தீர்மானிப்பது ஏன், பருவமழைக்குப் பின் செல்வது, மற்றும் ஏரியிலேயே தங்க வேண்டிய சூழல்கள்.',
    kicker: 'அருகிலுள்ள இடங்கள்',
    h1: 'ஏற்காடு ஏரியிலிருந்து கிளியூர் அருவி: வழி, பாதை மற்றும் தவிர்க்க வேண்டிய நேரம்',
    lead:
      'கிளியூர் அருவி ஏற்காடு ஏரியிலிருந்து சுமார் 3 கிமீ தொலைவில் இருப்பதாக மாவட்டச் சுற்றுலாத் தளம் குறிப்பிடுகிறது; தென்மேற்கு அல்லது வடகிழக்கு பருவமழைக்குப் பிறகு செல்வது நல்லது எனவும் பரிந்துரைக்கிறது. தொலைவு எளிய விஷயம். பயணம் பயனுள்ளதா என்பதைத் தீர்மானிப்பது இறுதி நடைப்பகுதியின் நிலையும், அருவியில் எவ்வளவு தண்ணீர் விழுகிறது என்பதும்தான்.',
    facts: [
      { label: 'மாவட்டத் தொலைவு', value: 'ஏரியிலிருந்து சுமார் 3 கிமீ' },
      { label: 'பரிந்துரைக்கப்படும் காலம்', value: 'தென்மேற்கு / வடகிழக்கு பருவமழைக்குப் பிறகு' },
      { label: 'இறுதி அணுகல்', value: 'குறுகிய செங்குத்தான நடை — நிலை மாறுபடும்' },
      { label: 'வசதிகள்', value: 'உள்ளூரில் உறுதி செய்யுங்கள்; உணவு, தண்ணீர், கழிப்பிடம் உறுதி அல்ல' }
    ],
    blocks: [
      { kind: 'h2', text: 'எங்கே உள்ளது, எப்படிச் செல்கிறார்கள்' },
      {
        kind: 'p',
        text:
          'கிளியூர் அருவி ஏற்காடு ஏரியிலிருந்து ஏறக்குறைய 3 கிமீ தொலைவில் இருப்பதாக மாவட்டப் பக்கம் குறிப்பிட்டு, அருவிக்கான தொடர்பு எண்ணையும் தருகிறது. பெரும்பாலான பயணிகள் ஏரியிலிருந்தோ நகர மையத்திலிருந்தோ சாலைப் பகுதியை வாகனத்தில் சில நிமிடங்களில் கடந்து, பின்னர் நடந்து செல்கிறார்கள்.'
      },
      {
        kind: 'note',
        text:
          'சொந்த வாகனம் இல்லாமல் சென்றால் திரும்பும் வழியையும் முன்பே ஏற்பாடு செய்யுங்கள். அருவி அருகில் கைபேசி சிக்னலோ கிடைக்கும் ஆட்டோவோ இருக்கும் எனக் கருத வேண்டாம், குறிப்பாக மாலை நேரத்தில்.'
      },
      { kind: 'h2', text: 'பயணத்தைத் தீர்மானிக்கும் பகுதி: இறுதி நடை' },
      {
        kind: 'p',
        text:
          'சாலைக்கு அப்பால், காட்சிப் பகுதிக்குச் செல்லும் இறுதிப் பகுதி, வெளியிடப்பட்ட விவரணைகளில் செங்குத்தான, சொரசொரப்பான, படிகளைக் கொண்ட கீழ்நோக்கிய நடையாக விவரிக்கப்படுகிறது. அந்த விவரம் பருவம் மற்றும் பராமரிப்பைப் பொறுத்து மாறும்; புறப்படுவதற்கு முன் உள்ளூரில் உறுதி செய்ய வேண்டிய மிக முக்கியமான விஷயம் இதுவே.'
      },
      {
        kind: 'list',
        items: [
          'பாதை இப்போது திறந்திருக்கிறதா, நடக்கக்கூடியதா என்பதை உங்கள் தங்குமிடத்திலோ நகரத்திலோ கேளுங்கள்.',
          'இறங்கும் வழியில் சமமற்ற தரை; திரும்பும் வழியில் ஏற்றம் இருக்கும் என எதிர்பாருங்கள்.',
          'பிடி உள்ள காலணி அணியுங்கள்; மழைக்குப் பின் ஈரமான பாறையும் வழுக்கும் அடிப் பாதமும் மோசமான கலவை.',
          'நடக்கும் திறன் குறைவு, மிகச் சிறு குழந்தைகள், படிகளில் நிலைதடுமாறுபவர்கள் இருந்தால் இந்தப் பயணத்தைத் தவிர்க்கவும்.'
        ]
      },
      { kind: 'h2', text: 'பருவம் மற்றும் நீர்' },
      {
        kind: 'p',
        text:
          'தென்மேற்கு அல்லது வடகிழக்கு பருவமழைக்குப் பிறகு செல்வதே மாவட்ட வழிகாட்டுதல். அந்தக் காலங்களுக்கு வெளியே அருவி மெலிந்தோ கிட்டத்தட்ட வறண்டோ இருக்கலாம்; மலைப்பகுதியில் வேறு இடங்களில் மழை பெய்திருந்தாலும் அருவியில் நீர்வரத்து இருக்கும் என்று அர்த்தமில்லை.'
      },
      {
        kind: 'list',
        items: [
          'நல்ல பருவமழைக்குப் பின் உடனடியான காலம் வலுவான நீர்வரத்துக்கு வாய்ப்புள்ள நேரம்.',
          'கனமழையின் போதும் அதற்குப் பின் உடனடியாகவும் இறங்கும் வழி மிக வழுக்கலாகவும் நீரோட்டம் மிகக் கணிக்க முடியாததாகவும் இருக்கும்.',
          'வறண்ட மாதங்களில் இதை ஒரு காட்சியுடன் கூடிய காட்டு நடையாகக் கருதி, அதுவே போதுமா என முடிவு செய்யுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'ஏரி பயணத்துடன் இதை எப்படி இணைப்பது' },
      {
        kind: 'p',
        text:
          'கிளியூர் அருவி நகரத்திற்கு அருகில் இருப்பதால், ஏரி பயணத்தை விட்டுவிட்டு அல்ல, அதனுடன் இணைத்துச் செல்லலாம். வழக்கமான வரிசை: நாள் குளிர்ச்சியாகவும் படகுத் தள வரிசை குறைவாகவும் இருக்கும் நேரத்தில் முதலில் ஏரியும் படகு இல்லமும், பின்னர் அருவி. காலை மழையாக இருந்து பாதை அமைதியாக இருக்க வேண்டும் எனில் இதன் தலைகீழ் வரிசையும் வேலை செய்யும்.'
      },
      {
        kind: 'steps',
        items: [
          'ஏற்காடு ஏரியில் தொடங்கி, உடல் சுறுசுறுப்பாக இருக்கும்போதே படகு இல்லத்தை முடியுங்கள்.',
          'அருவிக்குச் செல்வதை உறுதி செய்யும் முன் பாதை நிலையையும் நீர்வரத்தையும் உறுதி செய்யுங்கள்.',
          'இறங்கும் வழி, திரும்பும் ஏற்றம், ஓய்வு ஆகியவற்றுக்கு நேரம் வையுங்கள்.',
          'திட்டத்தை மாற்றக்கூடியதாக வையுங்கள்: பாதை மூடப்பட்டிருந்தால் ஏரி, அண்ணா பூங்கா, காட்சி முனைகள் திறந்தே இருக்கும்.'
        ]
      },
      { kind: 'h2', text: 'புறப்படும் முன்' },
      {
        kind: 'list',
        items: [
          'அருவி அருகில் நிறுத்துமிடம் குறைவு; பருவ காலத்தில் நெரிசல் இருப்பதாகப் பயணிகள் குறிப்பிடுகின்றனர்.',
          'குடிநீர், உணவு, கழிப்பிடம் இருக்கும் எனக் கருத வேண்டாம்; தேவையானதை எடுத்துச் சென்று கழிவுகளைத் திரும்பக் கொண்டு வாருங்கள்.',
          'நீரில் இறங்க வேண்டாம். அருவிக்குக் கீழே உள்ள பாறைகளும் குட்டைகளும் குளிக்கும் இடம் அல்ல.',
          'வெளிச்சம் குறையும் முன் திரும்ப வேண்டிய நேரத்தைக் குறித்து வையுங்கள்.'
        ]
      },
      { kind: 'h2', text: 'அன்றைய நாளில் உறுதி செய்ய வேண்டியவை' },
      {
        kind: 'list',
        items: [
          'பாதை இப்போது திறந்திருக்கிறதா, நடக்கக்கூடியதா என்பதைப் புறப்படுவதற்கு முன் உள்ளூரில் கேளுங்கள்.',
          'பருவத்தைப் பொறுத்து அருவியில் நீர்வரத்து உள்ளதா என்பதை உறுதி செய்யுங்கள்.',
          'நீங்களே வாகனத்தில் சென்றால் அருவி அருகில் நிறுத்துமிட நிலை.',
          'வெளிச்சம் குறையும் முன் திரும்ப வேண்டிய நேரம்.'
        ]
      },
      { kind: 'h2', text: 'நிலைமைகளும் கவனிக்க வேண்டியவையும் ஒரு பார்வையில்' },
      {
        kind: 'table',
        caption: 'அருவிக்குச் செல்வதை உறுதி செய்யும் முன் இவற்றைச் சரிபாருங்கள் — இவற்றில் எதுவும் இங்கு உறுதி அல்ல',
        head: ['சரிபார்ப்பு', 'ஏன் பயணத்தைத் தீர்மானிக்கிறது'],
        rows: [
          ['அன்றைய பாதை நிலை', 'இறுதி இறங்கு வழி செங்குத்தானதும் சொரசொரப்பானதும்; பருவம் மற்றும் பராமரிப்புக்கேற்ப மாறும்'],
          ['நீர்வரத்து', 'பருவமழைக்குப் பின் வாய்ப்புள்ள காலம்; வறண்ட மாதங்களில் மெலிந்தோ வறண்டோ இருக்கலாம்'],
          ['காலணி மற்றும் குழு', 'படிகளும் ஈரமான பாறையும் பிடியைக் கோரும்; யாரேனும் நிலைதடுமாறினால் தவிர்க்கவும்'],
          ['திரும்பும் பயணம்', 'சொந்த வாகனம் இல்லாவிட்டால் திரும்பும் வழியை முன்பே ஏற்பாடு செய்யுங்கள்']
        ]
      }
    ],
    faq: [
      {
        q: 'ஏற்காடு ஏரியிலிருந்து கிளியூர் அருவி வரை முழுவதும் நடந்து செல்லலாமா?',
        a: 'ஏரியிலிருந்து தொடர்ச்சியான நடைபாதை உள்ளது என்பதற்குப் பதிலாக, இறுதி அணுகல் நடையாக இருப்பதாகவே வெளியிடப்பட்ட விவரணைகள் குறிப்பிடுகின்றன. சாலைப் பகுதியை வாகனம் அல்லது ஆட்டோவில் கடப்பதாகக் கருதி, நடைப்பகுதியை உள்ளூரில் உறுதி செய்யுங்கள்.'
      },
      {
        q: 'கோடையில் கிளியூர் அருவிக்குச் செல்வது பயனுள்ளதா?',
        a: 'அது முழுவதும் நீர்வரத்தைப் பொறுத்தது. பருவமழைக்குப் பின் செல்வதே மாவட்டப் பரிந்துரை; அதற்கு வெளியே அருவி வறண்டிருக்கலாம். நடையும் காட்டுச் சூழலும் உங்களுக்குப் போதுமானதெனில் அதற்காகவே செல்லலாம்.'
      },
      {
        q: 'குழந்தைகளுடன் செல்ல ஏற்றதா?',
        a: 'எப்போதும் இல்லை. இறுதி இறங்கு வழி செங்குத்தானதும் சொரசொரப்பானதும் என விவரிக்கப்படுகிறது. உங்கள் குழுவின் காலணி, வயது, நடைநிலைத்தன்மையை மதிப்பிட்டு, யாருக்கும் சிரமமாக இருந்தால் தயங்காமல் திரும்புங்கள்.'
      },
      {
        q: 'கிளியூர் அருவிக்குப் புறப்படும் முன் நான் எதை உறுதி செய்ய வேண்டும்?',
        a: 'பாதை இப்போது திறந்திருக்கிறதா, நடக்கக்கூடியதா; பருவத்திற்கேற்ப நீர்வரத்து; திரும்பும் ஏற்பாடு; நிறுத்துமிட நிலை ஆகியவற்றை உறுதி செய்யுங்கள். இவை அனைத்தும் உள்ளூரில் சரிபார்க்கப்படுபவை; எதுவும் இங்கு உறுதி அல்ல.'
      },
      {
        q: 'சொந்த வாகனம் இல்லாமல் அருவியிலிருந்து எப்படித் திரும்புவது?',
        a: 'செல்லும் வழியுடன் திரும்பும் வழியையும் முன்பே ஏற்பாடு செய்யுங்கள்; அருவி அருகில் கைபேசி சிக்னலோ கிடைக்கும் ஆட்டோவோ இருக்கும் எனக் கருத வேண்டாம், குறிப்பாக மாலை நேரத்தில். புறப்படுவதற்கு முன் திரும்பும் வழியைத் திட்டமிடுங்கள்.'
      }
    ],
    sourceIds: ['districtLake', 'districtGallery', 'tnTourismBrochure', 'googleMaps']
  }
};

export default page;
