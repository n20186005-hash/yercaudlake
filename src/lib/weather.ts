// Validated model and localized rendering shared by the native endpoint, build snapshot and client refresh.
export const WMO: Record<number, { t: string; i: string }> = {
  0: { t: 'வானம் தெளிவு', i: '☀️' },
  1: { t: 'பெரும்பாலும் தெளிவு', i: '🌤️' },
  2: { t: 'ஓரளவு மேகம்', i: '⛅' },
  3: { t: 'மேகமூட்டம்', i: '☁️' },
  45: { t: 'மூடுபனி', i: '🌫️' },
  48: { t: 'பனிமூட்டம்', i: '🌫️' },
  51: { t: 'லேசான தூறல்', i: '🌦️' },
  53: { t: 'தூறல்', i: '🌧️' },
  55: { t: 'அடர்ந்த தூறல்', i: '🌧️' },
  56: { t: 'உறைபனி தூறல்', i: '🌧️' },
  57: { t: 'உறைபனி தூறல்', i: '🌧️' },
  61: { t: 'லேசான மழை', i: '🌦️' },
  63: { t: 'மிதமான மழை', i: '🌧️' },
  65: { t: 'பலத்த மழை', i: '🌧️' },
  66: { t: 'உறைபனி மழை', i: '🌧️' },
  67: { t: 'உறைபனி மழை', i: '🌧️' },
  71: { t: 'லேசான பனி', i: '🌨️' },
  73: { t: 'மிதமான பனி', i: '🌨️' },
  75: { t: 'பனிப்பொழிவு', i: '❄️' },
  77: { t: 'பனித்துகள்', i: '❄️' },
  80: { t: 'லேசான மழை பொழிவு', i: '🌦️' },
  81: { t: 'மழை பொழிவு', i: '🌧️' },
  82: { t: 'பலத்த மழை பொழிவு', i: '🌧️' },
  85: { t: 'பனி மழை', i: '🌨️' },
  86: { t: 'பனி மழை', i: '🌨️' },
  95: { t: 'இடியுடன் கூடிய மழை', i: '⛈️' },
  96: { t: 'இடி & ஆலங்கட்டி', i: '⛈️' },
  99: { t: 'இடி & ஆலங்கட்டி', i: '⛈️' }
};

const WMO_EN: Record<string, string> = {
  '0': 'Clear',
  '1': 'Mainly clear',
  '2': 'Partly cloudy',
  '3': 'Overcast',
  '45': 'Fog',
  '48': 'Rime fog',
  '51': 'Light drizzle',
  '53': 'Drizzle',
  '55': 'Dense drizzle',
  '56': 'Light freezing drizzle',
  '57': 'Dense freezing drizzle',
  '61': 'Light rain',
  '63': 'Rain',
  '65': 'Heavy rain',
  '66': 'Light freezing rain',
  '67': 'Heavy freezing rain',
  '71': 'Light snow',
  '73': 'Snow',
  '75': 'Heavy snow',
  '77': 'Snow grains',
  '80': 'Light rain showers',
  '81': 'Rain showers',
  '82': 'Violent rain showers',
  '85': 'Snow showers',
  '86': 'Heavy snow showers',
  '95': 'Thunderstorm',
  '96': 'Thunderstorm with hail',
  '99': 'Severe thunderstorm with hail'
};
export type Locale='ta'|'en';
export const LAT=11.7841942,LON=78.2082454;
export const WX_URL=`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&timezone=Asia%2FKolkata&wind_speed_unit=kmh&forecast_days=7`;
export const TIMEZONE='Asia/Kolkata', OFFSET=19800, TTL=600000, DEADLINE=4500;
export interface Forecast {timezone:string;utc_offset_seconds:number;current:{time:string;temperature_2m:number;apparent_temperature:number;relative_humidity_2m:number;weather_code:number;wind_speed_10m:number};daily:{time:string[];weather_code:number[];temperature_2m_max:number[];temperature_2m_min:number[];precipitation_probability_max:(number|null)[];uv_index_max:(number|null)[]}}
export function validateWeather(data:unknown,now=Date.now()):Forecast {
 const d=data as Forecast,c=d?.current,x=d?.daily;const n=(v:unknown,lo:number,hi:number)=>typeof v==='number'&&Number.isFinite(v)&&v>=lo&&v<=hi;
 const today=new Date(now+OFFSET*1000).toISOString().slice(0,10);
 if(d?.timezone!==TIMEZONE||d.utc_offset_seconds!==OFFSET||!c||!x||typeof c.time!=='string'||!/^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):[0-5]\d$/.test(c.time))throw Error('Incomplete forecast');
 const age=now-Date.parse(c.time+'+05:30');if(!Number.isFinite(age)||age>10800000||age< -900000||c.time.slice(0,10)!==today)throw Error('Stale forecast');
 for(const [key,lo,hi]of [['temperature_2m',-100,65],['apparent_temperature',-120,80],['relative_humidity_2m',0,100],['wind_speed_10m',0,500]]as const)if(!n(c[key],lo,hi))throw Error('Invalid current number');
 const code=(v:unknown)=>typeof v==='number'&&Object.hasOwn(WMO_EN,v);if(!code(c.weather_code))throw Error('Invalid WMO');
 for(const key of ['time','weather_code','temperature_2m_max','temperature_2m_min','precipitation_probability_max','uv_index_max']as const)if(!Array.isArray(x[key])||x[key].length!==7)throw Error('Incomplete seven days');
 for(let i=0;i<7;i++){const day=new Date(Date.parse(today+'T00:00Z')+i*86400000).toISOString().slice(0,10);if(x.time[i]!==day||!code(x.weather_code[i]))throw Error('Invalid forecast date/code');if(!n(x.temperature_2m_max[i],-100,65)||!n(x.temperature_2m_min[i],-100,65)||x.temperature_2m_min[i]>x.temperature_2m_max[i])throw Error('Invalid temperature');if(x.precipitation_probability_max[i]!==null&&!n(x.precipitation_probability_max[i],0,100))throw Error('Invalid probability');if(x.uv_index_max[i]!==null&&!n(x.uv_index_max[i],0,30))throw Error('Invalid UV');}
 return d;
}

const esc=(v:unknown)=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export function codeInfo(c:number,locale:Locale='ta'){return {t:locale==='en'?WMO_EN[c]??'Variable weather':WMO[c]?.t??'மாறுபட்ட வானிலை',i:WMO[c]?.i??'☁️'};}
export function kmhToBeaufort(kmh:number){return [1,6,12,20,29,39,50,62,75,89,103,118,Infinity].findIndex(n=>kmh<n);}
export function fmtC(n:number){return Math.round(n)+'°';}
const num=(n:number|null)=>n===null?'—':String(Math.round(n));
export function dayLabel(day:string,locale:Locale='ta'){const date=new Date(day+'T12:00Z'),tag=locale==='en'?'en-IN':'ta-IN';return {d:new Intl.DateTimeFormat(tag,{weekday:'short',timeZone:'UTC'}).format(date),m:new Intl.DateTimeFormat(tag,{day:'numeric',month:'short',timeZone:'UTC'}).format(date)};}
export interface Advice{outfit:string[];plan:string[];items:string[];risk:string|null;locale:Locale}
export function buildAdvice(input:Forecast,locale:Locale='ta'):Advice{
 const d=validateWeather(input),c=d.current,x=d.daily,en=locale==='en',outfit:string[]=[],plan:string[]=[],items:string[]=[],code=c.weather_code,pop=x.precipitation_probability_max[0],uv=x.uv_index_max[0];let risk:string|null=null;
 if([95,96,99].includes(code))risk=en?'Thunderstorms in the model: seek substantial shelter; avoid isolated trees, exposed hills and the water. Follow staff and official warnings.':'மாடலில் இடி மழை: உறுதியான கட்டிடத்தில் தஞ்சம் புகுங்கள்; தனி மரம், திறந்த மலைப்பகுதி மற்றும் நீரிலிருந்து விலகுங்கள். பணியாளர் மற்றும் அதிகாரப்பூர்வ எச்சரிக்கைகளைப் பின்பற்றுங்கள்.';
 else if([65,67,82].includes(code))risk=en?'Heavy rain in the model: wet paths and steps can be slippery. This is not an official closure notice.':'மாடலில் பலத்த மழை: ஈரமான பாதை மற்றும் படிகளில் வழுக்கலாம். இது அதிகாரப்பூர்வ மூடல் அறிவிப்பு அல்ல.';
 else if(c.wind_speed_10m>=50)risk=en?'Strong wind: avoid exposed edges and follow local instructions. The forecast does not establish whether boats are operating.':'பலத்த காற்று: திறந்த விளிம்புகளைத் தவிர்த்து உள்ளூர் அறிவுரையைப் பின்பற்றுங்கள். படகு இயங்குவதை முன்னறிவிப்பு உறுதி செய்யாது.';
 if(pop!==null&&pop>=40)outfit.push(en?'Rain probability is elevated; bring rain protection. Probability is not rainfall intensity.':'மழை வாய்ப்பு அதிகம்; மழைப் பாதுகாப்பு எடுத்துச் செல்லுங்கள். வாய்ப்பு சதவீதம் மழையின் தீவிரம் அல்ல.');
 if(uv!==null&&uv>=6)outfit.push(en?'High daily UV maximum: use sun protection even when cloudy.':'நாளின் அதிகபட்ச UV உயர்வாக உள்ளது; மேகமிருந்தாலும் வெயில் பாதுகாப்பு பயன்படுத்துங்கள்.');
 if(x.temperature_2m_max[0]>=35)outfit.push(en?'Warm conditions: carry water and shorten exposed walks as needed.':'வெப்பமான நிலை: தண்ணீர் எடுத்துச் சென்று தேவைக்கேற்ப வெயிலில் நடப்பதைக் குறையுங்கள்.');
 else if(x.temperature_2m_min[0]<=18)outfit.push(en?'Bring an extra layer for cooler periods.':'குளிரான நேரத்திற்குக் கூடுதல் மேலாடை எடுத்துச் செல்லுங்கள்.');
 if(!outfit.length)outfit.push(en?'Choose clothing and rest breaks for the actual conditions.':'உண்மையான நிலைக்கு ஏற்ற உடை மற்றும் ஓய்வைத் திட்டமிடுங்கள்.');
 if([51,53,55,56,57,61,63,65,66,67,80,81,82].includes(code))plan.push(en?'Rain is indicated: assess wet paths and use suitable footwear.':'மழை காட்டப்படுகிறது; ஈரப்பாதைகளைப் பார்த்து பொருத்தமான காலணி அணியுங்கள்.');
 if([45,48].includes(code))plan.push(en?'Fog may reduce visibility; adjust viewpoints and road travel to actual conditions.':'மூடுபனி பார்வையைக் குறைக்கலாம்; காட்சிமுனை மற்றும் சாலைப் பயணத்தை உண்மையான நிலைக்கேற்ப மாற்றுங்கள்.');
 plan.push(en?'Confirm boat availability and safety instructions directly with the boat house. A forecast is not permission to boat, swim or enter a waterfall route.':'படகு கிடைப்பதும் பாதுகாப்பு அறிவுரையும் படகு இல்லத்திலேயே உறுதி செய்யுங்கள். முன்னறிவிப்பு படகு, நீச்சல் அல்லது அருவிப் பாதைக்கான அனுமதி அல்ல.');
 items.push(en?'Carry water and suitable walking shoes.':'தண்ணீர் மற்றும் பொருத்தமான நடை காலணி எடுத்துச் செல்லுங்கள்.');
 return {outfit,plan,items,risk,locale};
}
function block(title:string,arr:string[]){return `<div class="min-w-0 rounded-2xl bg-white/10 p-5"><h3 class="font-extrabold text-[#f4d98d]">${esc(title)}</h3><ul class="mt-3 space-y-2 text-sm leading-7 text-white/85">${arr.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`;}
export function renderAdvice(a:Advice){const en=a.locale==='en';return (a.risk?`<div class="mb-5 rounded-2xl bg-[#7a1f2b]/40 p-5"><p>${esc(a.risk)}</p></div>`:'')+`<div class="grid min-w-0 gap-5 md:grid-cols-3">${block(en?'Clothing':'உடை',a.outfit)}${block(en?'Visit planning':'பயணத் திட்டம்',a.plan)}${block(en?'Bring along':'எடுத்துச் செல்ல',a.items)}</div><p class="mt-5 text-xs leading-6 text-white/55">${en?'Model-derived suggestions, not an official warning or an operating notice.':'மாடலில் இருந்து பெறப்பட்ட ஆலோசனை; அதிகாரப்பூர்வ எச்சரிக்கையோ இயக்க அறிவிப்போ அல்ல.'}</p>`;}
export function renderCurrent(input:Forecast,locale:Locale='ta'){const d=validateWeather(input),c=d.current,en=locale==='en',ci=codeInfo(c.weather_code,locale),pop=d.daily.precipitation_probability_max[0];return `<div class="flex h-full min-w-0 flex-col justify-between gap-6"><div class="flex flex-wrap items-center gap-5"><span class="text-6xl" aria-hidden="true">${ci.i}</span><div><div class="text-5xl font-black">${fmtC(c.temperature_2m)}C</div><p class="mt-1 font-extrabold text-[#f4d98d]">${esc(ci.t)}</p></div></div><dl class="grid min-w-0 grid-cols-2 gap-3 text-sm">${[[en?'Feels like':'உணர்வு',fmtC(c.apparent_temperature)+'C'],[en?'Humidity':'ஈரப்பதம்',num(c.relative_humidity_2m)+'%'],[en?'Wind':'காற்று',num(c.wind_speed_10m)+' km/h · '+(en?'Beaufort ':'நிலை ')+kmhToBeaufort(c.wind_speed_10m)],[en?'Rain probability':'மழை வாய்ப்பு',num(pop)+(pop===null?'':'%')]].map(([label,value])=>`<div class="min-w-0 rounded-2xl bg-white/10 p-3"><dt class="text-white/60">${label}</dt><dd class="mt-1 font-black">${value}</dd></div>`).join('')}</dl></div>`;}
export function renderDays(input:Forecast,locale:Locale='ta'){const d=validateWeather(input),x=d.daily,en=locale==='en';return x.time.map((day,i)=>{const label=dayLabel(day,locale),ci=codeInfo(x.weather_code[i],locale),pop=x.precipitation_probability_max[i],uv=x.uv_index_max[i];return `<div class="min-w-0 rounded-2xl bg-white/10 p-4 text-center ring-1 ring-white/15"><p class="font-extrabold text-[#f4d98d]">${label.d}</p><p class="text-xs text-white/55">${label.m}</p><div class="my-3 text-3xl" aria-hidden="true">${ci.i}</div><p class="text-sm leading-6 text-white/80">${esc(ci.t)}</p><p class="mt-2 font-black">${fmtC(x.temperature_2m_max[i])} / ${fmtC(x.temperature_2m_min[i])}</p><p class="mt-1 text-xs text-[#a9e0f2]">${en?'Rain probability':'மழை வாய்ப்பு'}: ${num(pop)}${pop===null?'':'%'}</p><p class="text-xs text-white/55">${en?'Daily UV max':'நாள் UV அதிகபட்சம்'}: ${num(uv)}</p></div>`;}).join('');}
export async function fetchWeather():Promise<Forecast>{const controller=new AbortController();let timer:ReturnType<typeof setTimeout>|undefined;try{return await Promise.race([(async()=>{const res=await fetch(WX_URL,{signal:controller.signal});if(!res.ok)throw Error('Weather HTTP');const data=validateWeather(await res.json());if(controller.signal.aborted)throw Error('Weather deadline');return data;})(),new Promise<Forecast>((_,reject)=>timer=setTimeout(()=>{controller.abort();reject(Error('Weather deadline'));},DEADLINE))]);}finally{clearTimeout(timer);}}
let cached:{at:number;data:Forecast}|undefined;
export async function getWeather():Promise<Forecast|null>{try{if(cached&&Date.now()-cached.at>=0&&Date.now()-cached.at<TTL)return validateWeather(cached.data);const data=await fetchWeather();cached={at:Date.now(),data};return data;}catch{return null;}}
