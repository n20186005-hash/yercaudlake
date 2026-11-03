// Shared source registry for every guide page.
// Keeping sources in one place means one label, one URL and one date per source,
// so no page can quietly re-word or re-date the same reference. Reader-facing
// text is bilingual so Tamil pages never fall back to English commentary.
import type { GuideSource } from './types';

export const SOURCES: Record<string, GuideSource> = {
  districtBoatHouse: {
    label: {
      en: 'Salem District — Boat House page',
      ta: 'சேலம் மாவட்டம் — படகு இல்லப் பக்கம்'
    },
    url: 'https://salem.nic.in/boat-house-yercaud-2024/',
    date: {
      en: 'District page from the 2024–2025 Summer Festival cycle (Tamil)',
      ta: '2024–2025 கோடை விழாக் காலத்திய மாவட்டப் பக்கம் (தமிழ்)'
    },
    note: {
      en: 'States that TTDC runs the boat house, lists 60 boats in three types with ₹200 / ₹300 / ₹700 fares, life jackets for passengers, a patrol boat, and an online-booking facility through TTDC. A dated statement, not today’s confirmed counter fare.',
      ta: 'TTDC படகு இல்லத்தை நடத்துகிறது எனக் கூறுகிறது; மூன்று வகைகளில் 60 படகுகள், ₹200 / ₹300 / ₹700 கட்டணங்கள், பயணிகளுக்கு உயிர்க் காப்புச் சட்டைகள், ஒரு ரோந்துப் படகு, மேலும் TTDC வழியாக ஆன்லைன் முன்பதிவு வசதி ஆகியவற்றைப் பட்டியலிடுகிறது. இது ஒரு தேதியிட்ட அறிக்கை; இன்றைய உறுதிசெய்யப்பட்ட நேரடிக் கட்டணம் அல்ல.'
    }
  },
  districtLake: {
    label: {
      en: 'Salem District — Yercaud tourist place page',
      ta: 'சேலம் மாவட்டம் — ஏற்காடு சுற்றுலாத் தலப் பக்கம்'
    },
    url: 'https://salem.nic.in/tourist-place/images-of-yercaudlake/',
    date: {
      en: 'Undated district page carrying older figures',
      ta: 'பழைய எண்ணிக்கைகளைக் கொண்ட, தேதியிடப்படாத மாவட்டப் பக்கம்'
    },
    note: {
      en: 'Place list, geography and travel notes for Yercaud, plus older boating, park and temple timings. Used as dated background only.',
      ta: 'ஏற்காட்டின் இடப் பட்டியல், புவியியல் மற்றும் பயணக் குறிப்புகள், மேலும் பழைய படகு, பூங்கா மற்றும் கோயில் நேரங்கள். தேதியிட்ட பின்னணித் தகவலாக மட்டுமே பயன்படுத்தப்பட்டது.'
    }
  },
  districtGallery: {
    label: {
      en: 'Salem District — Yercaud Lake photo gallery',
      ta: 'சேலம் மாவட்டம் — ஏற்காடு ஏரி புகைப்படத் தொகுப்பு'
    },
    url: 'https://salem.nic.in/gallery/yercaudlake/',
    date: {
      en: 'District administration gallery',
      ta: 'மாவட்ட நிர்வாகத் தொகுப்பு'
    },
    note: {
      en: 'Official photographs of the lake area published by the district.',
      ta: 'மாவட்ட நிர்வாகம் வெளியிட்ட ஏரிப் பகுதியின் அதிகாரப்பூர்வ புகைப்படங்கள்.'
    }
  },
  districtPlaces: {
    label: {
      en: 'Salem District — key tourist places in Yercaud',
      ta: 'சேலம் மாவட்டம் — ஏற்காட்டின் முக்கிய சுற்றுலாத் தலங்கள்'
    },
    url: 'https://salem.nic.in/yercaud-tourist-places-salem/',
    date: {
      en: 'District listing for the Summer Festival cycle',
      ta: 'கோடை விழாக் காலத்திற்கான மாவட்டப் பட்டியல்'
    },
    note: {
      en: 'District list of Yercaud places used in festival transport arrangements.',
      ta: 'விழா போக்குவரத்து ஏற்பாடுகளில் பயன்படுத்தப்பட்ட ஏற்காடு இடங்களின் மாவட்டப் பட்டியல்.'
    }
  },
  districtFestivalTransport: {
    label: {
      en: 'Salem District — Summer Festival bus information',
      ta: 'சேலம் மாவட்டம் — கோடை விழா பேருந்து தகவல்'
    },
    url: 'https://salem.nic.in/yercaud-summer-festival-2024/transport-facility-information/',
    date: {
      en: '48th Yercaud Summer Festival, 23–29 May 2025',
      ta: '48-ஆவது ஏற்காடு கோடை விழா, 23–29 மே 2025'
    },
    note: {
      en: 'Festival-era arrangements: extra buses from Salem new bus stand, a ₹300 package bus leaving around 08:00 and 08:30 visiting eleven listed places, and booking through TNSTC online reservation. Not a year-round timetable.',
      ta: 'விழாக் கால ஏற்பாடுகள்: சேலம் புதிய பேருந்து நிலையத்திலிருந்து கூடுதல் பேருந்துகள், காலை 08:00 மற்றும் 08:30 வாக்கில் புறப்பட்டு, பட்டியலிடப்பட்ட பதினொரு இடங்களுக்குச் செல்லும் ₹300 தொகுப்புப் பேருந்து, மேலும் TNSTC ஆன்லைன் முன்பதிவு வழியாக முன்பதிவு. இது ஆண்டு முழுவதும் உள்ள அட்டவணை அல்ல.'
    }
  },
  districtFestival: {
    label: {
      en: 'Salem District — Yercaud Summer Festival pages',
      ta: 'சேலம் மாவட்டம் — ஏற்காடு கோடை விழாப் பக்கங்கள்'
    },
    url: 'https://salem.nic.in/yercaud-summer-festival-2024/',
    date: {
      en: 'Festival cycle pages (2024–2025)',
      ta: 'விழாக் காலப் பக்கங்கள் (2024–2025)'
    },
    note: {
      en: 'District pages for festival parking, drinking water, mobile toilets and helplines. These are seasonal arrangements and should not be read as year-round services.',
      ta: 'விழா வாகன நிறுத்தம், குடிநீர், நகரும் கழிப்பிடங்கள் மற்றும் உதவி எண்களுக்கான மாவட்டப் பக்கங்கள். இவை பருவகால ஏற்பாடுகள்; ஆண்டு முழுவதும் உள்ள சேவைகளாகக் கருதக் கூடாது.'
    }
  },
  districtTrekking: {
    label: {
      en: 'Salem District — trekking route page',
      ta: 'சேலம் மாவட்டம் — மலையேற்ற வழிப் பக்கம்'
    },
    url: 'https://salem.nic.in/trekking-route-tamil-2024/',
    date: {
      en: '47th Summer Festival event page (2025)',
      ta: '47-ஆவது கோடை விழா நிகழ்வுப் பக்கம் (2025)'
    },
    note: {
      en: 'Describes a roughly 5 km guided hill trail with about ten hairpin bends through reserved forest, run as a festival event with an age band for participants. It is an organised event, not a year-round open trail.',
      ta: 'காப்புக் காட்டின் வழியாக, ஏறக்குறைய பத்து முடிச்சு வளைவுகளுடன், சுமார் 5 கிமீ நீளமுள்ள வழிகாட்டப்பட்ட மலைப் பாதையை விவரிக்கிறது; பங்கேற்பாளர்களுக்கு வயது வரம்புடன் விழா நிகழ்வாக நடத்தப்படுகிறது. இது ஒரு ஒழுங்கமைக்கப்பட்ட நிகழ்வு; ஆண்டு முழுவதும் திறந்திருக்கும் பாதை அல்ல.'
    }
  },
  tnstc: {
    label: {
      en: 'TNSTC — online reservation system',
      ta: 'TNSTC — ஆன்லைன் முன்பதிவு அமைப்பு'
    },
    url: 'https://www.tnstc.in/OTRSOnline/',
    date: {
      en: 'Service reachable at the time of writing',
      ta: 'எழுதும் நேரத்தில் சேவை அணுகக்கூடியதாக இருந்தது'
    },
    note: {
      en: 'State transport online booking, named by the district for festival package-bus reservations.',
      ta: 'விழா தொகுப்புப் பேருந்து முன்பதிவுகளுக்காக மாவட்ட நிர்வாகம் குறிப்பிட்ட அரசு போக்குவரத்து ஆன்லைன் முன்பதிவு.'
    }
  },
  ttdcBooking: {
    label: {
      en: 'TTDC — Yercaud Boat House boat list',
      ta: 'TTDC — ஏற்காடு படகு இல்லப் படகுப் பட்டியல்'
    },
    url: 'https://www.ttdcbooking.com/item/boat/21',
    date: {
      en: 'Read 2 November 2026',
      ta: '2 நவம்பர் 2026 அன்று படிக்கப்பட்டது'
    },
    note: {
      en: 'TTDC booking portal entry for Yercaud Boat House: address 122, Lake Road, Yercaud 636602, a 09:00–18:00 listing, and boat types from ₹300 (pedal, rowing, motor and an aqua-cycle) with higher published rates than the district page.',
      ta: 'ஏற்காடு படகு இல்லத்திற்கான TTDC முன்பதிவு இணையதளப் பதிவு: முகவரி 122, ஏரிச் சாலை, ஏற்காடு 636602; 09:00–18:00 என்ற பட்டியல்; ₹300 முதல் படகு வகைகள் (மிதி, துடுப்பு, மோட்டார் மற்றும் அக்வா-சைக்கிள்); மாவட்டப் பக்கத்தை விட அதிகமான வெளியிடப்பட்ட கட்டணங்கள்.'
    }
  },
  ttdcMain: {
    label: {
      en: 'TTDC — Tamil Nadu Tourism Development Corporation',
      ta: 'TTDC — தமிழ்நாடு சுற்றுலா வளர்ச்சிக் கழகம்'
    },
    url: 'https://ttdc.in/',
    date: {
      en: 'Read 2 November 2026',
      ta: '2 நவம்பர் 2026 அன்று படிக்கப்பட்டது'
    },
    note: {
      en: 'The district boat page directs visitors to TTDC for online boat booking.',
      ta: 'ஆன்லைன் படகு முன்பதிவுக்காக மாவட்டப் படகுப் பக்கம் பார்வையாளர்களை TTDC-க்கு வழிமாற்றுகிறது.'
    }
  },
  tnTourismPagoda: {
    label: {
      en: 'Tamil Nadu Tourism — Pagoda Point',
      ta: 'தமிழ்நாடு சுற்றுலா — பகோடா பாயின்ட்'
    },
    url: 'https://www.tamilnadutourism.tn.gov.in/destinations/pagoda-point-yercaud',
    date: {
      en: 'State tourism destination page, read 2 November 2026',
      ta: 'மாநில சுற்றுலா தலப் பக்கம், 2 நவம்பர் 2026 அன்று படிக்கப்பட்டது'
    },
    note: {
      en: 'Describes Pagoda Point on the eastern side of the Yercaud hills, with a view over Salem town and towards the winding ghat road, described there as 21 hairpin bends.',
      ta: 'ஏற்காடு மலைகளின் கிழக்குப் பகுதியில் உள்ள பகோடா பாயின்ட்டை விவரிக்கிறது; சேலம் நகரத்தின் மீதும், அங்கு 21 முடிச்சு வளைவுகள் என விவரிக்கப்படும் வளைந்த மலைச் சாலையின் திசையிலும் காட்சி உள்ளது.'
    }
  },
  tnTourismBrochure: {
    label: {
      en: 'Tamil Nadu Tourism — Salem district e-brochure',
      ta: 'தமிழ்நாடு சுற்றுலா — சேலம் மாவட்ட மின்னணு சுற்றுலாக் கையேடு'
    },
    url: 'https://www.tamilnadutourism.tn.gov.in/img/ebrochure/Salem.pdf',
    date: {
      en: 'State tourism brochure',
      ta: 'மாநில சுற்றுலாக் கையேடு'
    },
    note: {
      en: 'Background on Yercaud wildlife and on the May Summer Festival, including flower shows and boat races.',
      ta: 'ஏற்காட்டு வனவிலங்கு மற்றும் மே கோடை விழா பற்றிய பின்னணி; மலர் கண்காட்சிகள் மற்றும் படகுப் போட்டிகள் உட்பட.'
    }
  },
  tnSericulture: {
    label: {
      en: 'Department of Sericulture — Seritourism centre',
      ta: 'பட்டு வளர்ச்சித் துறை — பட்டுச் சுற்றுலா மையம்'
    },
    url: 'https://tnsericulture.tn.gov.in/seritourism',
    date: {
      en: 'State department page, read 2 November 2026',
      ta: 'மாநிலத் துறைப் பக்கம், 2 நவம்பர் 2026 அன்று படிக்கப்பட்டது'
    },
    note: {
      en: 'Places the Seritourism centre at the Government Silk Farm, between the Rose Garden and the Lady’s Seat viewpoint, showing mulberry cultivation, silkworm rearing, reeling, twisting and weaving.',
      ta: 'பட்டுச் சுற்றுலா மையத்தை, ரோஸ் கார்டன் மற்றும் லேடீஸ் சீட் காட்சி முனைக்கு இடையே உள்ள அரசுப் பட்டுப் பண்ணையில் அமைக்கிறது; மல்பெரி சாகுபடி, பட்டுப்புழு வளர்ப்பு, நூல் எடுத்தல், முறுக்குதல் மற்றும் நெசவு ஆகியவற்றைக் காட்டுகிறது.'
    }
  },
  ministryTourism: {
    label: {
      en: 'Ministry of Tourism, India',
      ta: 'இந்திய சுற்றுலா அமைச்சகம்'
    },
    url: 'https://tourism.gov.in/',
    date: {
      en: 'Central government gateway',
      ta: 'மத்திய அரசு நுழைவாயில்'
    },
    note: {
      en: 'Union tourism ministry website.',
      ta: 'மத்திய சுற்றுலா அமைச்சகத்தின் இணையதளம்.'
    }
  },
  tnGov: {
    label: {
      en: 'Government of Tamil Nadu',
      ta: 'தமிழ்நாடு அரசு'
    },
    url: 'https://www.tn.gov.in/',
    date: {
      en: 'State government gateway',
      ta: 'மாநில அரசு நுழைவாயில்'
    },
    note: {
      en: 'Official state government website.',
      ta: 'அதிகாரப்பூர்வ மாநில அரசு இணையதளம்.'
    }
  },
  googleMaps: {
    label: {
      en: 'Yercaud Lake & Boat House — place listing',
      ta: 'ஏற்காடு ஏரி & படகு இல்லம் — இடப் பட்டியல்'
    },
    url: 'https://maps.app.goo.gl/DnvJDBDKXe8s1Rmi9',
    date: {
      en: 'Listing snapshot checked 25 October 2026',
      ta: '25 அக்டோபர் 2026 அன்று சரிபார்க்கப்பட்ட பட்டியல் நிலை'
    },
    note: {
      en: 'Source of the address on Lake to Ladies Seat Road, Yercaud 636602, the 4.1 rating snapshot and the general 09:00–18:00 hours that appear on the home pages. Aggregator data, not an operator notice.',
      ta: 'ஏரிச் சாலை முதல் லேடீஸ் சீட் சாலை, ஏற்காடு 636602 என்ற முகவரிக்கும், 4.1 மதிப்பீட்டு நிலைக்கும், முகப்புப் பக்கங்களில் தோன்றும் பொதுவான 09:00–18:00 நேரங்களுக்கும் ஆதாரம். இது திரட்டித் தரவு; நடத்துநரின் அறிவிப்பு அல்ல.'
    }
  },
  wikipediaYercaud: {
    label: {
      en: 'Yercaud — Wikipedia',
      ta: 'ஏற்காடு — விக்கிப்பீடியா'
    },
    url: 'https://en.wikipedia.org/wiki/Yercaud',
    date: {
      en: 'Reference article',
      ta: 'குறிப்புக் கட்டுரை'
    },
    note: {
      en: 'General geography and history background only.',
      ta: 'பொதுவான புவியியல் மற்றும் வரலாற்றுப் பின்னணி மட்டுமே.'
    }
  },
  openMeteo: {
    label: {
      en: 'Open-Meteo — weather model used by this site',
      ta: 'Open-Meteo — இந்தத் தளம் பயன்படுத்தும் வானிலை மாதிரி'
    },
    url: 'https://open-meteo.com/',
    date: {
      en: 'Model data, refreshed continuously',
      ta: 'மாதிரித் தரவு, தொடர்ந்து புதுப்பிக்கப்படுகிறது'
    },
    note: {
      en: 'Fixed lake coordinates are used, not device location. A forecast does not establish boat operation, water level or trail access.',
      ta: 'சாதனத்தின் இருப்பிடம் அல்ல; நிலையான ஏரி ஆயத்தொலைவுகள் பயன்படுத்தப்படுகின்றன. ஒரு முன்னறிவிப்பு படகு இயக்கம், நீர்மட்டம் அல்லது பாதை அணுகலை உறுதிப்படுத்தாது.'
    }
  },
  chutneyListing: {
    label: {
      en: 'The Chutney — third-party menu listing',
      ta: 'The Chutney — மூன்றாம் தரப்பு மெனுப் பட்டியல்'
    },
    url: 'https://menuthere.com/thechutney',
    date: {
      en: 'Read 2 November 2026',
      ta: '2 நவம்பர் 2026 அன்று படிக்கப்பட்டது'
    },
    note: {
      en: 'Indicative Yercaud breakfast and tiffin items with prices (for example idly ₹60, plain dosa ₹80). A third-party listing, not the restaurant’s own confirmation.',
      ta: 'கட்டணங்களுடன் கூடிய ஏற்காடு காலை உணவு மற்றும் டிபன் பொருட்களின் குறிப்பு விலைப் பட்டியல் (எடுத்துக்காட்டாக இட்லி ₹60, பிளெயின் தோசை ₹80). இது ஒரு மூன்றாம் தரப்புப் பட்டியல்; உணவகத்தின் சொந்த உறுதிப்படுத்தல் அல்ல.'
    }
  },
  kaapiStopListing: {
    label: {
      en: 'Kaapi Stop (Kiliyur Falls Road) — third-party listing',
      ta: 'Kaapi Stop (கிளியூர் அருவிச் சாலை) — மூன்றாம் தரப்புப் பட்டியல்'
    },
    url: 'https://restaurant-guru.in/Kaapi-Stop-Yercaud-Yercaud',
    date: {
      en: 'Read 2 November 2026',
      ta: '2 நவம்பர் 2026 அன்று படிக்கப்பட்டது'
    },
    note: {
      en: 'Lists an address at Sunny Brook Estate on Kiliyur Falls Road, a 06:00–21:00 opening window and phone +91 96062 99999. Confirm current hours before travelling.',
      ta: 'கிளியூர் அருவிச் சாலையில் Sunny Brook Estate என்ற முகவரி, 06:00–21:00 திறப்பு நேரம் மற்றும் தொலைபேசி +91 96062 99999 ஆகியவற்றைப் பட்டியலிடுகிறது. புறப்படும் முன் தற்போதைய நேரங்களை உறுதிப்படுத்துங்கள்.'
    }
  },
  kaapiStopAdivaram: {
    label: {
      en: 'Kaapi Stop (Adivaram Road) — third-party listing',
      ta: 'Kaapi Stop (அடிவாரம் சாலை) — மூன்றாம் தரப்புப் பட்டியல்'
    },
    url: 'https://restaurant-guru.in/Kaapi-Stop-Salem-Tamil-Nadu',
    date: {
      en: 'Read 2 November 2026',
      ta: '2 நவம்பர் 2026 அன்று படிக்கப்பட்டது'
    },
    note: {
      en: 'Listing for a second Kaapi Stop on Adivaram Road near the foot of the ghat road, with a 06:00–21:00 window and vegetarian options.',
      ta: 'மலைச் சாலையின் அடிவாரத்திற்கு அருகே அடிவாரம் சாலையில் உள்ள இரண்டாவது Kaapi Stop-க்கான பட்டியல்; 06:00–21:00 திறப்பு நேரம் மற்றும் சைவ விருப்பங்களுடன்.'
    }
  },
  yercaudRestaurants: {
    label: {
      en: 'Yercaud restaurant directory listing',
      ta: 'ஏற்காடு உணவக அடைவுப் பட்டியல்'
    },
    url: 'https://things.in/india/yercaud/restaurants',
    date: {
      en: 'Read 2 November 2026',
      ta: '2 நவம்பர் 2026 அன்று படிக்கப்பட்டது'
    },
    note: {
      en: 'Third-party directory used to confirm that named Yercaud places such as JOJO MOMOS exist. No ranking or endorsement is implied.',
      ta: 'JOJO MOMOS போன்ற பெயரிடப்பட்ட ஏற்காடு இடங்கள் உள்ளன என்பதை உறுதிப்படுத்தப் பயன்படுத்தப்பட்ட மூன்றாம் தரப்பு அடைவு. எந்தத் தரவரிசையோ ஆதரவோ குறிக்கப்படவில்லை.'
    }
  },
  moddysCafe: {
    label: {
      en: 'Moddys Chocolates and Cafe — business page',
      ta: 'Moddys Chocolates and Cafe — வணிகப் பக்கம்'
    },
    url: 'https://moddys-chocolates-and-cafe.placejoys.com/',
    date: {
      en: 'Read 2 November 2026',
      ta: '2 நவம்பர் 2026 அன்று படிக்கப்பட்டது'
    },
    note: {
      en: 'Lists No 1, Hospital Road, Shevaroys complex, Lovers Lane, Yercaud 636601, with a 09:00–21:30 window.',
      ta: 'No 1, Hospital Road, Shevaroys complex, Lovers Lane, ஏற்காடு 636601 என்ற முகவரியை, 09:00–21:30 திறப்பு நேரத்துடன் பட்டியலிடுகிறது.'
    }
  },
  tripRestaurants: {
    label: {
      en: 'Yercaud restaurant aggregator page',
      ta: 'ஏற்காடு உணவகத் திரட்டிப் பக்கம்'
    },
    url: 'https://www.trip.com/restaurant/salem-15338/openTimeType-7/',
    date: {
      en: 'Read 2 November 2026',
      ta: '2 நவம்பர் 2026 அன்று படிக்கப்பட்டது'
    },
    note: {
      en: 'Aggregator list used only to check that a named place is still listed in or near Yercaud. Distances shown there are approximate.',
      ta: 'பெயரிடப்பட்ட ஒரு இடம் ஏற்காட்டில் அல்லது அதற்கு அருகில் இன்னும் பட்டியலிடப்பட்டுள்ளதா என்பதை மட்டும் சரிபார்க்கப் பயன்படுத்தப்பட்ட திரட்டிப் பட்டியல். அங்கு காட்டப்படும் தொலைவுகள் தோராயமானவை.'
    }
  }
};

export function resolveSources(ids: string[]): GuideSource[] {
  return ids.map((id) => {
    const source = SOURCES[id];
    if (!source) throw new Error(`Unknown guide source id: ${id}`);
    return source;
  });
}
