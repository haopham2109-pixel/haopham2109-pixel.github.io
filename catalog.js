
(function(){
  'use strict';
  const area=document.body.dataset.area;
  const catalog=window.PORTFOLIO_CATALOG||{};
  const item=catalog[area];
  if(!item){document.querySelector('#project-list').textContent='No projects available.';return;}
  const theme=document.querySelector('#theme');
  function setTheme(t){
    document.documentElement.dataset.theme=t;
    theme.setAttribute('aria-label','Switch to '+(t==='dark'?'light':'dark')+' theme');
    try{localStorage.setItem('pkh-theme-v2',t)}catch(e){}
  }
  try{const chosen=localStorage.getItem('pkh-theme-v2');if(chosen==='light'||chosen==='dark')setTheme(chosen)}catch(e){}
  theme.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
  const el=document.querySelector('#project-list');
  // Trusted content below comes from the project owner's local catalog-data.js.
  function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  const html=item.projects.map(p=>`
  <article class="project" id="${escapeHtml(p.id)}">
    <div class="project-top"><span class="category">${escapeHtml(p.category)}</span><span class="status">${escapeHtml(p.status)}</span></div>
    <h3>${escapeHtml(p.title)}</h3>
    <p>${escapeHtml(p.desc)}</p>
    <div class="system">Linked system: <strong>${escapeHtml(p.system)}</strong></div>
    <div class="tags">${p.tags.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
    <details><summary>Technical scope & publication status</summary><ul>${p.points.map(v=>`<li>${escapeHtml(v)}</li>`).join('')}</ul></details>
    <div class="related">${p.related.length?'<small>Related workstream</small>':''}${p.related.map(r=>`<a href="${escapeHtml(r[1])}">${escapeHtml(r[0])} ↗</a>`).join('')}${p.url?`<a href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">View public GitHub repository ↗</a>`:''}</div>
  </article>`).join('');
  el.innerHTML=html||'<div class="empty">Project information will be added after verification.</div>';
  document.querySelector('#count').textContent=String(item.projects.length)+' project '+(item.projects.length===1?'entry':'entries');
})();
