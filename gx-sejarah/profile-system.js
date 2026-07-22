(function(){
  const KEY='gxSejarahStudentProfileV22';
  const defaults={name:'Pelajar',xp:0,level:1,title:'Novis Sejarah',badges:[],items:[],stats:{questions:0,correct:0,wrong:0,hints:0,bossWins:0,rpgDocs:0},updatedAt:null};
  const titles=['Novis Sejarah','Penjaga Fakta','Pemburu Huraian','Wira Melaka','Panglima Kedaulatan','Legenda Sejarah'];
  function read(){try{return Object.assign({},defaults,JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){return {...defaults}}}
  function levelFor(xp){return Math.max(1,Math.floor(Math.sqrt(Math.max(0,xp)/100))+1)}
  function titleFor(level){return titles[Math.min(titles.length-1,Math.floor((level-1)/2))]}
  function unique(a){return [...new Set(a.filter(Boolean))]}
  function migrate(){const p=read();
    try{const r=JSON.parse(localStorage.getItem('gxSejarahRPG')||'null');if(r){p.xp=Math.max(p.xp,Number(r.xp)||0);p.stats.rpgDocs=Math.max(p.stats.rpgDocs||0,(r.done||[]).length);p.items=unique([...(p.items||[]),...(r.done||[]).map(id=>({palace:'Piagam Kedaulatan',hall:'Surat Pentadbiran',court:'Naskhah Undang-undang',port:'Peta Laluan Dagang',village:'Ikrar Taat Setia'}[id]))]);}}
    catch(e){}
    try{const b=JSON.parse(localStorage.getItem('gxSejarahBossReward')||'null');if(b){p.xp=Math.max(p.xp,(Number(p.xp)||0)+500);p.stats.bossWins=Math.max(1,p.stats.bossWins||0);p.items=unique([...(p.items||[]),b.reward]);localStorage.removeItem('gxSejarahBossReward');}}
    catch(e){}
    try{const records=JSON.parse(localStorage.getItem('gxSejarahRecords')||'[]');if(records.length){const latest=records[0];p.name=latest.name||p.name;p.stats.correct=Math.max(p.stats.correct||0,Number(latest.correct)||0);p.stats.wrong=Math.max(p.stats.wrong||0,Number(latest.wrong)||0);p.stats.hints=Math.max(p.stats.hints||0,Number(latest.hints)||0);p.stats.questions=Math.max(p.stats.questions||0,(Number(latest.correct)||0)+(Number(latest.wrong)||0));}}
    catch(e){}
    const badges=[];
    if((p.stats.questions||0)>=1)badges.push('Langkah Pertama');
    if((p.stats.correct||0)>=10)badges.push('Pemburu Fakta');
    if((p.stats.correct||0)>=30)badges.push('Ahli Struktur');
    if((p.stats.rpgDocs||0)>=5)badges.push('Pengumpul Dokumen');
    if((p.stats.bossWins||0)>=1)badges.push('Penewas Maharaja');
    if((p.stats.hints||0)===0&&(p.stats.questions||0)>=10)badges.push('Tanpa Bantuan');
    p.badges=unique([...(p.badges||[]),...badges]);p.level=levelFor(p.xp);p.title=titleFor(p.level);p.updatedAt=new Date().toISOString();localStorage.setItem(KEY,JSON.stringify(p));return p;
  }
  function addXP(amount,reason){const p=migrate();p.xp=Math.max(0,(Number(p.xp)||0)+(Number(amount)||0));p.level=levelFor(p.xp);p.title=titleFor(p.level);p.updatedAt=new Date().toISOString();localStorage.setItem(KEY,JSON.stringify(p));return {profile:p,reason};}
  function setName(name){const p=migrate();p.name=(name||'Pelajar').trim()||'Pelajar';localStorage.setItem(KEY,JSON.stringify(p));return p;}
  window.GX_PROFILE={read:migrate,addXP,setName,levelFor,titleFor};
})();