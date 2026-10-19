const normalize=text=>text.normalize('NFKC').toLowerCase().replace(/wi[-\s]?fi/g,'wifi');
export function viewItems(components,families,scope,saved) {
  return scope==='saved' ? [...components,...families.filter(family=>saved.includes(family.id)&&!components.some(item=>item.id===family.id))] : components;
}
export function filterComponents(items, {query='', category='', status='', scope='catalogue', saved=[], sort='featured'}={}) {
  const terms=normalize(query).trim().split(/\s+/).filter(Boolean);
  const filtered=items.filter(item => (!category || item.category===category)
    && (!status || item.status===status)
    && (scope!=='saved' || saved.includes(item.id))
    && (scope!=='references' || item.documents.length>0)
    && terms.every(term => normalize([item.id,item.name,item.summary,...item.tags,...Object.entries(item.specs).flat()].join(' ')).includes(term)));
  if(sort==='name') filtered.sort((a,b)=>a.name.localeCompare(b.name));
  if(sort==='category') filtered.sort((a,b)=>a.category.localeCompare(b.category)||a.name.localeCompare(b.name));
  return filtered;
}
export function stockLabel(item) {
  if(item.status==='incoming') return 'Awaiting delivery';
  if(item.remaining==null) return 'Count unconfirmed';
  return `${item.remaining} ${item.quantityBasis==='expected'?'expected':'recorded'}`;
}
export function csvExport(items) {
  const cell=value=>'"'+String(value??'Unknown').replace(/^[=+@\-\t\r]/,"'$&").replaceAll('"','""')+'"';
  const rows=[['Component ID','Name','Category','Record status','Recorded remaining','Available quantity','Quantity basis'],
    ...items.map(x=>[x.id,x.name,x.category,stockLabel(x),x.remaining,x.available,x.quantityBasis??'Unreconciled'])];
  return '\uFEFF'+rows.map(row=>row.map(cell).join(',')).join('\r\n');
}
