(function(){
  const KEY='gxSejarahV09Progress';
  const safeParse=v=>{try{return JSON.parse(v)}catch(e){return null}};
  function snapshot(){
    if(typeof state==='undefined'||!state.name)return null;
    return {
      version:'1.0',name:state.name,mode:state.mode,route:state.route,
      sessions:Object.fromEntries(Object.entries(state.sessions||{}).map(([k,v])=>[k,(v||[]).map(q=>q.id)])),
      score:state.score,max:state.max,hp:state.hp,hints:state.hints,hintsUsed:state.hintsUsed,
      wrong:[...(state.wrong||[])],correct:state.correct,completed:[...(state.completed||[])],
      correctionMode:!!state.correctionMode,corrected:[...(state.corrected||[])],savedAt:new Date().toISOString()
    };
  }
  function save(){const data=snapshot();if(data)localStorage.setItem(KEY,JSON.stringify(data))}
  function clear(){localStorage.removeItem(KEY)}
  function availableFor(name){const d=safeParse(localStorage.getItem(KEY));return d&&d.name&&d.name.trim().toLowerCase()===name.trim().toLowerCase()?d:null}
  function num(value,fallback){const n=Number(value);return Number.isFinite(n)?n:fallback}
  function restore(data){
    if(!data||typeof BANK==='undefined')return false;
    const byId=new Map(BANK.map(q=>[q.id,q]));
    state.name=data.name||state.name;state.mode=data.mode||'standard';state.route=data.route||'1.1';
    state.sessions={};Object.entries(data.sessions||{}).forEach(([r,ids])=>state.sessions[r]=(ids||[]).map(id=>byId.get(id)).filter(Boolean));
    state.score=num(data.score,0);state.max=num(data.max,0);state.hp=num(data.hp,100);state.hints=num(data.hints,3);
    state.hintsUsed=num(data.hintsUsed,0);state.wrong=[...(data.wrong||[])];state.correct=num(data.correct,0);state.completed=[...(data.completed||[])];
    state.correctionMode=!!data.correctionMode;state.corrected=[...(data.corrected||[])];state.selected=[];state.list=[];state.i=0;
    if(!Object.keys(state.sessions).length)makeSessions();hud();renderMap();return true;
  }
  document.addEventListener('DOMContentLoaded',()=>{
    const start=$('startBtn'),name=$('name'),restart=$('restart');
    if(!start||!name)return;
    const resume=document.createElement('button');resume.id='resumeBtn';resume.className='btn secondary hidden';resume.textContent='继续上次进度';start.insertAdjacentElement('afterend',resume);
    const note=document.createElement('div');note.id='saveNote';note.className='small';note.style.marginTop='10px';start.parentElement.appendChild(note);
    function inspect(){const d=availableFor(name.value);resume.classList.toggle('hidden',!d);note.textContent=d?`找到 ${d.name} 的存档 · ${new Date(d.savedAt).toLocaleString()}`:''}
    name.addEventListener('input',inspect);inspect();
    resume.addEventListener('click',()=>{const d=availableFor(name.value);if(d)restore(d)});
    const oldStart=start.onclick;start.onclick=()=>{clear();if(oldStart)oldStart();setTimeout(save,0)};
    if(restart){const oldRestart=restart.onclick;restart.onclick=()=>{clear();if(oldRestart)oldRestart();else location.reload()}}
    ['click','change'].forEach(evt=>document.addEventListener(evt,e=>{if(e.target&&['checkBtn','nextBtn','hintBtn','backMap','retryWrong'].includes(e.target.id))setTimeout(save,50)}));
    const guard=document.createElement('script');guard.src='score-integrity.js?v=1.0';document.body.appendChild(guard);
    window.addEventListener('beforeunload',save);setInterval(save,5000);
  });
  window.GX_PROGRESS={save,clear,restore,availableFor};
})();