import {validateWeather,renderCurrent,renderDays,renderAdvice,buildAdvice,type Forecast,type Locale,TTL} from './weather';
export function initWeather(){
 const current=document.getElementById('wx-current'),days=document.getElementById('wx-days'),advice=document.getElementById('wx-advice'),note=document.getElementById('wx-note');if(!current||!days||!advice||!note)return;
 const locale:Locale=document.documentElement.lang.startsWith('en')?'en':'ta',en=locale==='en',key='yercaud-weather-v1';let shown=false;
 const render=(input:unknown,cached=false)=>{const data=validateWeather(input);current.innerHTML=renderCurrent(data,locale);days.innerHTML=renderDays(data,locale);advice.innerHTML=renderAdvice(buildAdvice(data,locale));note.textContent=(en?'Provider time: ':'முன்னறிவிப்பு நேரம்: ')+data.current.time.replace('T',' ')+' · Asia/Kolkata (UTC+5:30)'+(cached?(en?' · recent saved forecast':' · அண்மையில் சேமித்த முன்னறிவிப்பு'):'');shown=true;};
 try{render(JSON.parse(document.getElementById('weather-init')?.textContent||'null'));}catch{current.innerHTML='<p>'+(en?'Loading forecast…':'முன்னறிவிப்பு ஏற்றப்படுகிறது…')+'</p>';days.innerHTML='';advice.innerHTML='';note.textContent='';}
 const controller=new AbortController();let timer:ReturnType<typeof setTimeout>;
 Promise.race([(async()=>{const response=await fetch('/api/weather',{signal:controller.signal});if(!response.ok)throw Error('Weather HTTP');const data:Forecast=validateWeather(await response.json());if(controller.signal.aborted)throw Error('Deadline');render(data);try{localStorage.setItem(key,JSON.stringify({at:Date.now(),data}));}catch{}})(),new Promise((_,reject)=>timer=setTimeout(()=>{controller.abort();reject(Error('Deadline'));},6500))]).catch(()=>{
  if(!shown)try{const saved=JSON.parse(localStorage.getItem(key)||'null'),age=Date.now()-saved?.at;if(Number.isFinite(age)&&age>=0&&age<TTL)render(saved.data,true);}catch{}
  const text=en?'Refresh unavailable. Check official weather advice and boat-house instructions; this forecast does not confirm access.':'புதுப்பிப்பு கிடைக்கவில்லை. அதிகாரப்பூர்வ வானிலை மற்றும் படகு இல்ல அறிவுரையைப் பாருங்கள்; முன்னறிவிப்பு அணுகலை உறுதி செய்யாது.';
  if(shown)note.textContent+=' · '+text;else{current.innerHTML='<p>'+text+'</p>';days.innerHTML='';advice.innerHTML='';note.textContent='';}
 }).finally(()=>clearTimeout(timer));
}
