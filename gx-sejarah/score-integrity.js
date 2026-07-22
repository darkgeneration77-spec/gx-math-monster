(function(){
  document.addEventListener('DOMContentLoaded',()=>{
    const btn=document.getElementById('checkBtn');
    if(!btn||typeof check!=='function')return;
    const original=check;
    function countedIds(){return new Set([...(state.completed||[]),...(state.wrong||[]),...(state.corrected||[])]);}
    btn.onclick=()=>{
      const q=typeof current==='function'?current():null;
      if(!q)return original();
      const before=Number(state.max)||0;
      const already=countedIds().has(q.id)||state.correctionMode;
      original();
      if(already)state.max=before;
      if(window.GX_PROGRESS)window.GX_PROGRESS.save();
    };
  });
})();