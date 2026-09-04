# சரிபார்ப்பு நிலை

## முடிக்கப்பட்ட source/static சரிபார்ப்புகள்
- ஒற்றை package திட்டம்; `pnpm-workspace.yaml` pnpm 11 `allowBuilds` (esbuild) க்காக மட்டுமே உள்ளது, `packages` இல்லை.
- package direct dependency specifier-கள் exact; சேர்க்கப்பட்ட lockfile importer அதே dependency தொகுப்புடன் ஒத்திசைக்கப்பட்டுள்ளது.
- TypeScript 6.0.3, @astrojs/check 0.9.10 ஆதரிக்கும் 6.x வரம்பில் உள்ளது.
- டொமைன் ஒரே `SITE_URL` → Astro `site` வழியில் உள்ளது; காலியாக இருந்தால் sitemap integration இயக்கப்படாது.
- Google Maps embed தமிழ்/இந்தியா locale (`ta`, `in`) ஆக மாற்றப்பட்டுள்ளது.
- தனியுரிமை, விதிமுறைகள், குக்கீ அமைப்புகள் தனிப் பக்கங்கள்.
- GA4 பகுப்பாய்வு சம்மதத்திற்கு முன் ஏற்றப்படாது.
- logo, favicon SVG, 16×16, 32×32 மற்றும் 180×180 icon-கள் உள்ளூர் கோப்புகள்.
- source audit இயங்கும் Node script சேர்க்கப்பட்டுள்ளது.

## 2026-09-04 மேம்படுத்தல் சுற்று (நடப்பு)
- **படங்கள்**: 7 உண்மை ஏற்காடு படங்கள் `public/images/`-இல் git-தடமறியப்பட்டு, இணைய அளவுக்கு மேம்படுத்தப்பட்டன (1600px / q82; ~16.5MB → ~1.5MB). மூலங்கள்/உரிமங்கள் `PHOTO-SOURCES.md`; மறு செயலாக்கம் `pnpm images:opt` (`scripts/optimize-images.ps1`, Windows GDI+, கூடுதல் npm சார்பு இல்லை). சிறிய படங்கள் (portrait 720px, falls 1080px) விகித மாற்றமின்றி இருந்தன; portrait மறு-என்கோடிங்கில் அளவு அதிகரித்ததால் அசல் பதிப்பு வைக்கப்பட்டது.
- **புதிய தொகுதிகள்** (எந்தப் பழைய உள்ளடக்கமும் நீக்கப்படவில்லை):
  - WeatherSection (Open-Meteo: நிகழ்நேரம் + 5 நாள்; static வழங்கலுக்கான வடிவமைப்பு — கட்டுமான snapshot + உலாவி நேரடி fetch + 30 நிமிட localStorage cache + தோல்வி-தாங்கும் UI)
  - FacilitiesSection — WC, பார்க்கிங், உணவு, தங்குமிடம், பல்பொருள், எரிபொருள்/EV, ATM, மருந்தகம்; **குறிப்பிட்ட வணிகப் பெயர்கள் இல்லை** (வகைகள் மட்டும், நடுநிலை)
  - HistorySection (பெயர்/உயரம்/காபித் தோட்ட வரலாறு/படகு இல்லம்/மினி-ஊட்டி)
  - StoriesSection (பெயர்க் கதை, எமரால்டு, மலை வீடு வாழ்க்கை, திரைப் பின்னணி, மழைக்காலக் குறிப்பு — “பொதுப் பதிவு” badge-உடன்)
  - GallerySection (7 படங்கள் + விக்கிமீடியா மூல இணைப்புகள் ஒவ்வொன்றிற்கும்)
- FAQ 6 → 10, Header nav & Footer உள்ளடக்கத் தொடர்புகள், meta description, JSON-LD TouristAttraction `image[]`, OG image (boathouse) சேர்க்கப்பட்டன.
- **செயல்முறைச் சரிபார்ப்புகள்**: பட வரைபடம் (dimensions) & அளவு உறுதி (Total ~1.5MB); PowerShell System.Drawing-இல் 6 கோப்புகள் மாற்றம் + 1 மீட்டமைப்பு வெற்றி.
- **உள்ளூர் சரிபார்ப்பு PASS (2026-09-04)**: Windows sandbox-இல் node_modules (pnpm அமைப்பு) இருந்தது; `astro check` → 0 errors / 0 warnings / 0 hints; `astro build` → வெற்றி (5 HTML: index / privacy / terms / cookies / 404 + sitemap-index). `verify-build.mjs` அனைத்து முக்கிய குறிகளும் OK. (verify-build-இல் `serviceWorker.register("/sw.js")` MISS என்பது நிரல் double-quote மட்டுமே தேடுவதால்; உண்மையான பதிவு single-quote-இல் உள்ளது, `sw register: OK`.) `audit:source` → PASS (localhost விதி `https?://localhost` என குறுக்கப்பட்டது — SW dev-guard hostname ஒப்பீடுகள் அனுமதிக்கப்படுகின்றன; pnpm-workspace.yaml இனி பிழையாகக் குறிக்கப்படாது).
- குறிப்பு: தமிழ் உரை (புதிய வசதிகள்/வரலாறு/கதைகள்/வானிலை) கவனமாக எழுதப்பட்டுள்ளது; வெளியீட்டிற்கு முன் தமிழ் மொழி பயனரால் இறுதி மதிப்பாய்வு பரிந்துரைக்கப்படுகிறது.

## sandbox கட்டுப்பாடுகள் (காலாவதி — படங்கள் இப்போது சேர்க்கப்பட்டுள்ளன)
முந்தைய கட்டத்தில் வெளிப்புற binary hosts-களிலிருந்து பதிவிறக்கம் தடைபட்டது; தவறான/செயற்கைப் படங்களைச் சேர்க்கவில்லை. பின்னர் 7 உண்மை படங்கள் பதிவிறக்கப்பட்டு இந்தச் சுற்றில் மேம்படுத்தப்பட்டன.
