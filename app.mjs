import {filterComponents,stockLabel,csvExport,viewItems} from './catalogue.mjs?v=52486319a8c7';
import {icon,artwork,categoryIcons,heroArt} from './art.mjs?v=52486319a8c7';
const $=s=>document.querySelector(s);
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hydrateIcons=(root=document)=>root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
function readStorage(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
function writeStorage(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}}
let data,shown=[],toastTimer,openerId;
const stored=readStorage('hardware-library:saved',[]);
let saved=Array.isArray(stored)?stored.filter(x=>typeof x==='string'):[];
const params=new URLSearchParams(location.search);
const state={query:params.get('q')||'',category:params.get('category')||'',status:params.get('status')||'',scope:params.get('view')||'catalogue',sort:params.get('sort')||'featured',layout:readStorage('hardware-library:layout','grid')};
if(!['catalogue','references','saved'].includes(state.scope))state.scope='catalogue';
if(!['','recorded','incoming','unreconciled'].includes(state.status))state.status='';
if(!['featured','name','category'].includes(state.sort))state.sort='featured';
if(!['grid','list'].includes(state.layout))state.layout='grid';
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2600);}
function updateURL(){const url=new URL(location.href);for(const [key,value] of Object.entries({q:state.query,category:state.category,status:state.status,view:state.scope==='catalogue'?'':state.scope,sort:state.sort==='featured'?'':state.sort})){value?url.searchParams.set(key,value):url.searchParams.delete(key);}history.replaceState(null,'',url);}
function updateNavigation(){
 document.querySelectorAll('[data-scope]').forEach(b=>{const active=b.dataset.scope===state.scope;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active);});
 document.querySelectorAll('[data-category-filter]').forEach(b=>{const active=b.dataset.categoryFilter===state.category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active);});
 $('#saved-count').textContent=saved.length;
 $('#grid-view').setAttribute('aria-pressed',state.layout==='grid');$('#list-view').setAttribute('aria-pressed',state.layout==='list');
}
function render(){
 if(!data)return;
 const collection=viewItems(data.components,data.families,state.scope,saved);
 shown=filterComponents(collection,{...state,saved});
 const titles={catalogue:'The component collection',saved:'Your saved components',references:'The reference shelf'};
 const descriptions={catalogue:'Find a familiar part. Discover a new possibility.',saved:'A shortlist for your next idea. Saved in this browser.',references:'Parts and equipment with linked technical documents.'};
 $('#catalogue-title').textContent=state.category||titles[state.scope];$('#scope-description').textContent=descriptions[state.scope];
 $('#results').className=state.layout==='list'?'component-grid component-list':'component-grid';
 $('#results').innerHTML=shown.map(item=>`<article class="component-card" data-category="${escape(item.category)}"><div class="card-art">${artwork(item.category,item.id)}</div><button class="save-button" data-save="${item.id}" aria-label="${saved.includes(item.id)?'Unsave':'Save'} ${escape(item.name)}" aria-pressed="${saved.includes(item.id)}">${icon('bookmark')}</button><div class="card-body"><div class="card-category">${escape(item.category)}</div><h3 class="card-title"><button data-open="${item.id}">${escape(item.name)}</button></h3><p class="card-description">${escape(item.summary)}</p><div class="tags">${item.tags.map(tag=>`<span class="tag">${escape(tag)}</span>`).join('')}</div>${item.purchaseSource==='local'?'<p class="purchase-source-local">Bought locally</p>':''}${item.productLinks.some(link=>link.kind==='original')?`<a class="product-preview" href="${escape(item.productLinks.find(link=>link.kind==='original').url)}" target="_blank" rel="noopener noreferrer" aria-label="Original product page for ${escape(item.name)}"><span>Original product page</span>${icon('external')}</a>`:''}${item.contents?`<button class="contents-preview" data-open="${item.id}" aria-label="See what’s inside ${escape(item.name)}"><span>See what’s inside</span>${icon('arrow')}</button>`:''}<div class="card-footer"><span class="stock ${item.status}">${stockLabel(item)}</span><span class="doc-count">${icon('book')}${item.documents.length?`${item.documents.length} ref${item.documents.length===1?'':'s'}`:'Notes'}</span></div></div></article>`).join('');
 $('#result-count').innerHTML=`Showing <b>${shown.length}</b> of ${collection.length} hardware entries${state.scope==='saved'?' · Saved in this browser':''}`;
 const empty=shown.length===0;$('#empty').hidden=!empty;$('#results').hidden=empty;
 $('#empty h3').textContent=state.scope==='saved'&&!saved.length?'Your shortlist starts here':'No matching components';
 $('#empty p').textContent=state.scope==='saved'&&!saved.length?'Use the bookmark button on any component to keep it close.':'Try a model name, an interface like I²C, or a broader category.';
 $('#clear-filters').hidden=!(state.query||state.category||state.status||state.scope!=='catalogue');$('#export-button').disabled=empty;
 updateNavigation();updateURL();
}
function reset(){Object.assign(state,{query:'',category:'',status:'',scope:'catalogue'});$('#search').value='';$('#status').value='';render();}
function toggleSave(id){saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];const persisted=writeStorage('hardware-library:saved',saved);render();if($('#detail-dialog').open&&$('#detail-content [data-save]')){const b=$('#detail-content [data-save]');b.innerHTML=icon('bookmark')+(saved.includes(id)?'Saved to your shortlist':'Save to shortlist');b.setAttribute('aria-pressed',saved.includes(id));}toast(persisted?(saved.includes(id)?'Saved to your shortlist':'Removed from saved items'):'Saved for this visit; browser storage is unavailable');}
const number=n=>n==null?'Unknown':escape(n);
function contentsMarkup(contents){
 if(!contents)return '';
 const labels={complete:'Count fully itemized',partial:'Partial breakdown',unitemized:'Breakdown not recorded'};
 return `<section class="kit-contents" aria-labelledby="contents-title"><div class="contents-heading"><div><p class="contents-kicker">Inside the set</p><h3 id="contents-title">What’s inside</h3></div><span class="contents-total">${escape(contents.total.toLocaleString())}<small>advertised pieces</small></span></div><p class="contents-basis"><span class="contents-coverage">${labels[contents.coverage]}</span>${escape(contents.basis)}</p><table class="contents-table"><caption class="sr-only">Recorded contents and quantities per set</caption><thead><tr><th scope="col">Part</th><th scope="col">Size / detail</th><th scope="col">Qty</th></tr></thead><tbody>${contents.rows.map(row=>`<tr><th scope="row">${escape(row.part)}</th><td>${escape(row.detail)}</td><td class="contents-quantity">${row.quantity==null?'<span class="quantity-unknown">Not recorded</span>':escape(row.quantity)}</td></tr>`).join('')}</tbody></table>${contents.missing.length?`<div class="contents-gaps"><h4>Still to be recorded</h4><ul>${contents.missing.map(gap=>`<li>${escape(gap)}</li>`).join('')}</ul></div>`:''}<p class="contents-source">Quantities describe the purchased set, not current remaining stock. <a href="${escape(contents.sourceUrl)}" target="_blank" rel="noopener">Source notes · GitHub access required ${icon('external')}</a></p></section>`;
}
function productLinksMarkup(links,purchaseSource){
 const local=purchaseSource==='local';
 const original=links.filter(link=>link.kind==='original');
 return `<section class="product-links" aria-labelledby="product-links-title"><h3 id="product-links-title">${local?'Purchase source':'Original product links'}</h3>${local?'<p class="purchase-source-local">Bought locally</p>':!original.length?'<p class="product-link-missing">The original product URL has not been recovered from the available records.</p>':''}${links.map(link=>`<a class="product-link ${link.kind}" href="${escape(link.url)}" target="_blank" rel="noopener noreferrer"><span><strong>${escape(link.title)}</strong><small>${link.kind==='original'?'Original product listing':'Product reference · not the purchase source'}</small></span>${icon('external')}</a>${link.note?`<p class="product-link-note">${escape(link.note)}</p>`:''}`).join('')}${original.length?'<p class="product-link-caption">Recorded seller links. Check the selected variant and current availability on the seller’s page.</p>':''}</section>`;
}
function openDetail(id){
 const item=data.components.find(x=>x.id===id)||data.families.find(x=>x.id===id);if(!item)return;openerId=id;
 $('#detail-content').innerHTML=`<div class="detail-top"><div class="detail-art">${artwork(item.category,item.id)}</div><div><p class="card-category">${escape(item.category)}</p><h2 id="detail-title">${escape(item.name)}</h2></div></div><div class="detail-main"><p class="detail-summary">${escape(item.summary)}</p>${productLinksMarkup(item.productLinks,item.purchaseSource)}${contentsMarkup(item.contents)}<dl class="stock-grid"><div><dt>${item.status==='incoming'?'Incoming quantity':'Recorded remaining'}</dt><dd>${number(item.status==='incoming'?item.incoming:item.remaining)}${item.quantityBasis==='expected'?' <small>expected</small>':''}</dd></div><div><dt>Available to use</dt><dd>${number(item.available)}</dd></div><div><dt>Record date</dt><dd><small>${escape(formatDate(data.asOf))}</small></dd></div></dl><p class="detail-note">${escape(item.note)}</p><h3>Specifications & identity</h3><dl class="specs">${Object.entries(item.specs).map(([k,v])=>`<dt>${escape(k)}</dt><dd>${escape(v)}</dd>`).join('')}</dl><p class="detail-note">Product and archive references. These specifications do not establish a functional test of a particular unit.</p><h3>Technical references</h3>${item.documents.length?item.documents.map(doc=>`<a class="reference-link" href="${escape(doc.url)}" target="_blank" rel="noopener">${icon('book')}<span>${escape(doc.title)}</span><small>${doc.kind==='Archive'?'GitHub access required':'PDF'}</small>${icon('external')}</a>`).join(''):'<p class="detail-note">No exact technical document is linked yet. Identification notes remain available in the source record.</p>'}${item.links.map(link=>`<a class="reference-link" href="${escape(link.url)}" target="_blank" rel="noopener">${icon('external')}<span>${escape(link.title)}</span></a>`).join('')}<div class="detail-actions"><button class="primary-button" data-save="${id}" aria-pressed="${saved.includes(id)}">${icon('bookmark')}${saved.includes(id)?'Saved to your shortlist':'Save to shortlist'}</button><a href="${escape(item.recordUrl)}" target="_blank" rel="noopener">Full source record · GitHub access required</a></div><p class="detail-id">${escape(item.id)}</p></div>`;
 if(!$('#detail-dialog').open)$('#detail-dialog').showModal();$('#close-dialog').focus();$('#detail-content').scrollTop=0;
 const url=new URL(location.href);url.hash=id;history.replaceState(null,'',url);
}
function closeDialog(){if($('#detail-dialog').open)$('#detail-dialog').close();const url=new URL(location.href);url.hash='';history.replaceState(null,'',url);}
function formatDate(date){return new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(date+'T00:00:00Z'));}
hydrateIcons();$('#hero-art').innerHTML=heroArt();$('#search').value=state.query;$('#status').value=state.status;$('#sort').value=state.sort;
$('#search').addEventListener('input',e=>{state.query=e.target.value;render();});
$('#status').addEventListener('change',e=>{state.status=e.target.value;render();});
$('#sort').addEventListener('change',e=>{state.sort=e.target.value;render();});
$('#clear-filters').addEventListener('click',reset);$('#empty-reset').addEventListener('click',reset);$('#reload').addEventListener('click',()=>location.reload());
for(const mode of ['grid','list'])$(`#${mode}-view`).addEventListener('click',()=>{state.layout=mode;writeStorage('hardware-library:layout',mode);render();});
document.addEventListener('click',e=>{
 const save=e.target.closest('[data-save]');if(save){const id=save.dataset.save;const isDialog=Boolean(save.closest('dialog'));toggleSave(id);if(!isDialog){const replacement=document.querySelector(`[data-save="${id}"]`);if(replacement)replacement.focus();else $('#catalogue-title').setAttribute('tabindex','-1'),$('#catalogue-title').focus();}return;}
 const open=e.target.closest('[data-open]');if(open){openDetail(open.dataset.open);return;}
 const scope=e.target.closest('[data-scope]');if(scope){state.scope=scope.dataset.scope;state.category='';state.query='';state.status='';$('#search').value='';$('#status').value='';render();$('#catalogue').scrollIntoView({behavior:'instant'});}
 const category=e.target.closest('[data-category-filter]');if(category){state.category=state.category===category.dataset.categoryFilter?'':category.dataset.categoryFilter;render();$('#catalogue').scrollIntoView({behavior:'instant'});}
});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)&&!$('#detail-dialog').open){e.preventDefault();$('#search').focus();}if(e.key==='Escape'&&document.activeElement===$('#search')&&state.query){state.query='';$('#search').value='';render();}});
$('#detail-dialog').addEventListener('close',()=>{if(openerId){const opener=document.querySelector(`[data-open="${openerId}"]`);if(opener)opener.focus();else $('#search').focus();openerId=null;}});
$('#close-dialog').addEventListener('click',closeDialog);$('#detail-dialog').addEventListener('cancel',()=>{const url=new URL(location.href);url.hash='';history.replaceState(null,'',url);});
$('#detail-dialog').addEventListener('click',e=>{if(e.target===$('#detail-dialog')){const rect=e.target.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)closeDialog();}});
$('#export-button').addEventListener('click',()=>{const blob=new Blob([csvExport(shown)],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='hardware-library-'+data.asOf+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast(`Exported ${shown.length} hardware entries`);});
$('#about').addEventListener('click',()=>{$('#detail-content').innerHTML=`<div class="about-copy"><h2 id="detail-title">A library for the workbench.</h2><p>A shared collection of components, workshop tools and technical references. Each family has a stable identity, so knowledge can travel from one project to the next.</p><h3>Read the record with confidence</h3><p>“Recorded” is a ledger balance. “Expected” uses an advertised pack count. Neither means a part is free to use. “Unknown” means the current quantity or allocation has not been confirmed. Receipt, physical count and tested function are different evidence.</p><h3>Keep useful parts close</h3><p>Search by model, interface or specification. Bookmark a component to save it in this browser. Export the current results as CSV. Component details and filters have shareable URLs.</p><h3>About the sources</h3><p>This website uses a curated projection of the private library. Invoices, purchase costs, personal details, and project configuration are excluded. Full GitHub records require repository access. Vendor references may change; the dated archive remains in the source repository.</p><p>Illustrations are symbolic, not board photographs or wiring diagrams.</p></div>`;$('#detail-dialog').showModal();$('#close-dialog').focus();$('#detail-content').scrollTop=0;});
window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(data&&id&&id!=='catalogue')openDetail(id);else if($('#detail-dialog').open)closeDialog();});
try{
 const catalogueUrl=new URL('./data.json',import.meta.url);catalogueUrl.search=new URL(import.meta.url).search;
 const response=await fetch(catalogueUrl);if(!response.ok)throw new Error('Catalogue unavailable');data=await response.json();
 const categories=[...new Set(data.components.map(x=>x.category))];if(!categories.includes(state.category))state.category='';
 saved=saved.filter(id=>data.components.some(x=>x.id===id)||data.families.some(x=>x.id===id));
 $('#categories').innerHTML=categories.map(category=>`<button class="nav-button category-button" data-category-filter="${escape(category)}">${icon(categoryIcons[category])}${escape(category)}<span class="count">${data.components.filter(x=>x.category===category).length}</span></button>`).join('');
 $('#total-count').textContent=data.components.length;$('#hero-count').textContent=data.components.length;$('#snapshot-date').textContent='Snapshot · '+formatDate(data.asOf);$('#results').setAttribute('aria-busy','false');render();
 const deepLink=location.hash.slice(1);if(deepLink&&deepLink!=='catalogue')openDetail(deepLink);
}catch(error){$('#results').setAttribute('aria-busy','false');$('#load-error').hidden=false;$('#result-count').textContent='Collection unavailable';$('#export-button').disabled=true;}
