// Symbolic vector illustrations, not photographs or wiring diagrams.
export function icon(name) {
 const paths={grid:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',bookmark:'M6 3h12v18l-6-4-6 4z',book:'M3 4h6l3 2 3-2h6v15h-6l-3 2-3-2H3z M12 6v15',search:'M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m5-2 6 6',arrow:'M4 12h16m-6-6 6 6-6 6',external:'M14 3h7v7m0-7L10 14 M10 3H3v18h18v-7',box:'m3 7 9-5 9 5v10l-9 5-9-5z M3 7l9 5 9-5 M12 12v10',layers:'m2 8 10-6 10 6-10 6z M2 13l10 6 10-6 M2 18l10 6 10-6',code:'m8 6-6 6 6 6m8-12 6 6-6 6m-3-16-2 20',download:'M12 3v12m-5-5 5 5 5-5 M3 16v5h18v-5',list:'M8 5h13M8 12h13M8 19h13M3 5h1M3 12h1M3 19h1',info:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M12 11v6m0-10v1',close:'m6 6 12 12M6 18 18 6',chip:'M6 6h12v12H6z M9 1v5m6-5v5M9 18v5m6-5v5M1 9h5m-5 6h5m12-6h5m-5 6h5',sensor:'M12 12v9M7 7a7 7 0 0 0 0 10m10-10a7 7 0 0 1 0 10M3 3a13 13 0 0 0 0 18M21 3a13 13 0 0 1 0 18',display:'M2 3h20v14H2z M12 17v5m-5 0h10',power:'m13 2-9 12h7l-1 8 10-12h-8z',tool:'m14 4 6-2-2 6-4 1-9 12-3-3 11-10z',printer:'M5 3h14v18H5z M5 8h14M12 8v5m-3 4h6',wifi:'M2 7a16 16 0 0 1 20 0M5 11a11 11 0 0 1 14 0M8 15a6 6 0 0 1 8 0M12 19h.01',github:'M9 19c-5 1-5-2-7-2m14 6v-4c0-1-.3-2-1-2 4-.5 7-2 7-7 0-2-.5-3-2-4 0-1 0-3-1-4-2 0-3 1-4 2-2-.5-4-.5-6 0-1-1-2-2-4-2-1 1-1 3-1 4-1.5 1-2 2-2 4 0 5 3 6.5 7 7-.7 0-1 1-1 2v4',check:'m4 12 5 5L20 6'};
 return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${(paths[name]||paths.chip).split(' M').map((d,i)=>`<path d="${i?'M':''}${d}"/>`).join('')}</svg>`;
}
export const categoryIcons={'Compute':'chip','Sensors':'sensor','Displays':'display','Power':'power','Fabrication':'printer','Workshop':'tool','Accessories':'layers','Connected devices':'wifi','Fasteners':'tool','Cables & connectors':'layers','Prototyping':'chip'};

// Original component silhouettes; illustrative geometry, never a pin/wiring diagram.
const caMetal='#b9c5cb', caEdge='#4f616a', caBlack='#303c43';
const caSocket=(x,y,female=false)=>`<g transform="translate(${x} ${y})"><rect width="12" height="27" rx="2" fill="${caBlack}"/><path d="M3 3v17" stroke="#58656b" stroke-width="2"/>${female?'<rect x="3" y="0" width="6" height="5" fill="#10191e" stroke="#9ca7a7" stroke-width="1"/>':'<path d="M6 -14V0" stroke="#d7b76a" stroke-width="4"/><path d="M5 -13V-1" stroke="#f5df9f"/>'}</g>`;
const caClip=(color)=>`<g transform="rotate(-16 71 38)"><path d="M39 26h32l17 10-17 11H39z" fill="${color}" stroke="${caEdge}" stroke-width="1.2"/><path d="m40 27 21 2-5 15H39" fill="#ffffff" opacity=".15"/><path d="m71 31 25 3 17 6-3 5-14-4-25 1z" fill="${caMetal}" stroke="${caEdge}" stroke-width="1.2"/><path d="m82 42 4-3 4 3 4-3 4 3 4-2" stroke="#61717a" stroke-width="1.4"/><circle cx="76" cy="37" r="3" fill="#e5edef" stroke="${caEdge}"/><path d="M39 31v12" stroke="${color}" stroke-width="6"/><path d="m76 33 19 3" stroke="#eff4f4" stroke-width="2"/></g>`;
const caHoles=(x,y,cols,rows,step=7)=>Array.from({length:rows},(_,r)=>Array.from({length:cols},(_,c)=>`<circle cx="${x+c*step}" cy="${y+r*step}" r="1.55" fill="#58676a"/>`).join('')).join('');
const cableProfiles={
 'aliexpress-prototyping-stock--resistors-th':['resistors',{}],
 'aliexpress-prototyping-stock--resistors-smd':['smd-resistors',{}],
 'aliexpress-prototyping-stock--capacitors':['capacitors',{}],
 'aliexpress-prototyping-stock--usb-breakouts':['usb-breakout',{}],
 'aliexpress-prototyping-stock--copper-boards':['copper-board',{}],
 'aliexpress-prototyping-stock--blue-pcb-79':['perfboard',{color:'#247db0',width:117,height:92}],
 'aliexpress-prototyping-stock--blue-pcb-37':['perfboard',{color:'#247db0',width:57,height:116}],
 'tools-and-consumables--silicone-wire':['wire-coil',{color:'#d3554d'}],
 'tools-and-consumables--hookup-wire':['hookup-wire',{}],
 'tools-and-consumables--ribbon-cable':['ribbon',{}],
 'tools-and-consumables--dupont-set':['dupont',{female:false}],
 'tools-and-consumables--ff-jumpers':['dupont',{female:true}],
 'tools-and-consumables--alligator-male':['alligator',{female:false}],
 'tools-and-consumables--alligator-female':['alligator',{female:true}],
 'tools-and-consumables--male-headers':['header',{female:false}],
 'tools-and-consumables--female-headers':['header',{female:true}],
 'tools-and-consumables--angle-header':['header',{angle:true}],
 'tools-and-consumables--usb-data-cables':['usb-cable',{}],
 'tools-and-consumables--heatshrink-4':['heatshrink',{size:16}],
 'tools-and-consumables--heatshrink-25':['heatshrink',{size:10}],
 'tools-and-consumables--perfboard-57':['perfboard',{color:'#b48a4e',width:89,height:115}],
 'tools-and-consumables--perfboard-68':['perfboard',{color:'#bd9153',width:106,height:127}],
 'tools-and-consumables--perfboard-37':['perfboard',{color:'#b48a4e',width:57,height:116}],
 'tools-and-consumables--breadboard-mini':['breadboard',{mini:true}],
 'tools-and-consumables--breadboard-830':['breadboard',{mini:false}],
 'tools-and-consumables--u-jumpers':['u-jumpers',{}],
 'tools-and-consumables--ft232rl':['serial-adapter',{}],
};
const cableDrawings={
 alligator:o=>`<path d="M39 36C13 81 48 131 100 132s82-25 86-45" stroke="#bf4d45" stroke-width="5" fill="none"/><path d="M51 66C21 96 65 116 119 112s51-29 52-58" stroke="#34434b" stroke-width="5" fill="none"/>${caClip('#cf534a')}<g transform="translate(11 36)">${caClip('#34434b')}</g><g transform="translate(180 53) rotate(12)">${caSocket(0,0,o.female)}</g><g transform="translate(161 28) rotate(-7)">${caSocket(0,0,o.female)}</g>`,
 dupont:o=>['#d95b4c','#e1b84c','#38899e','#424b53'].map((c,i)=>`<g transform="translate(${i*18} 0)"><path d="M58 42C24 126 125 153 128 70" stroke="${c}" stroke-width="4" fill="none"/><g transform="translate(52 18) rotate(9)">${caSocket(0,0,o.female)}</g><g transform="translate(123 41) rotate(-5)">${caSocket(0,0,true)}</g></g>`).join(''),
 'usb-cable':()=>`<path d="M71 56C33 113 82 150 135 132S179 87 175 57" stroke="#34414b" stroke-width="9" fill="none"/><path d="M71 56C33 113 82 150 135 132S179 87 175 57" stroke="#6e7c84" stroke-width="2" fill="none"/><g transform="rotate(13 73 39)"><rect x="57" y="30" width="30" height="35" rx="5" fill="#3f4b53"/><rect x="60" y="12" width="24" height="23" rx="2" fill="#c6d0d5" stroke="${caEdge}"/><path d="M65 19h5v5h-5zm10 0h5v5h-5z" fill="#55636e"/></g><g transform="rotate(-12 175 46)"><rect x="161" y="38" width="27" height="29" rx="5" fill="#3f4b53"/><rect x="163" y="25" width="23" height="17" rx="8" fill="#c6d0d5" stroke="${caEdge}"/><rect x="168" y="29" width="13" height="5" rx="2.5" fill="#25313a"/></g>`,
 ribbon:()=>`<g transform="rotate(-13 120 80)">${['#754e39','#c64b45','#e08d40','#dfc65b','#6b9d73','#478bb7','#8a6998','#969fa6','#e1e6e4','#3f4b54'].map((c,i)=>`<path d="M${72+i*8} 35c-20 51 9 50 0 89" stroke="${c}" stroke-width="7.5" fill="none"/><path d="M${72+i*8} 22v14m0 88v13" stroke="#bcbfbd" stroke-width="3"/>`).join('')}</g>`,
 header:o=>`<g transform="rotate(-23 120 80)"><path d="M40 81 191 69v24L40 105z" fill="#26343e" stroke="#41525d"/><path d="M40 81 51 71l151-12-11 10z" fill="#505e66"/>${Array.from({length:10},(_,i)=>{const x=49+i*15;return o.female?`<path d="m${x} ${79-i*1.2} 5-4 5 1-5 5z" fill="#111b22" stroke="#78868a"/>`:`<path d="M${x+3} ${77-i*1.2}v-23${o.angle?'h15':''}" stroke="#d8bb6c" stroke-width="4"/><path d="M${x+3} ${101-i*1.2}v16" stroke="#d8bb6c" stroke-width="3"/>`;}).join('')}</g>`,
 heatshrink:o=>`<g transform="rotate(-28 120 80)">${[0,1,2,3].map((n)=>`<g transform="translate(${64+n*27} ${n%2*9})"><rect y="28" width="${o.size}" height="102" fill="#303b43"/><path d="M3 31v94" stroke="#65727a" stroke-width="2"/><ellipse cx="${o.size/2}" cy="28" rx="${o.size/2}" ry="3" fill="#19242c" stroke="#68767e"/><ellipse cx="${o.size/2}" cy="130" rx="${o.size/2}" ry="3" fill="#35434b"/></g>`).join('')}</g>`,
 'wire-coil':o=>`<g transform="rotate(-12 120 80)">${[0,1,2,3].map(n=>`<ellipse cx="115" cy="83" rx="${47+n*4}" ry="${29+n*4}" fill="none" stroke="${n%2?o.color:'#ee8a78'}" stroke-width="5"/>`).join('')}<path d="M169 94c20-8 33-6 24-34" stroke="${o.color}" stroke-width="5" fill="none"/><path d="M193 60v-12" stroke="#c68b53" stroke-width="3"/><path d="M61 78C42 85 39 76 38 61" stroke="${o.color}" stroke-width="5" fill="none"/><path d="M38 61v-13" stroke="#c68b53" stroke-width="3"/><rect x="102" y="39" width="20" height="88" rx="3" fill="#e5e0cf" opacity=".9"/></g>`,
 'hookup-wire':()=>['#cc5e4d','#397c9b','#6b9a73'].map((c,i)=>`<g transform="translate(${i*24} 0)"><path d="M68 40c-43 34 48 48 27 83" fill="none" stroke="${c}" stroke-width="5"/><path d="M68 40v-16m27 99v14" stroke="#bd8f59" stroke-width="3"/></g>`).join(''),
 perfboard:o=>`<g transform="rotate(-12 120 80)"><rect x="${120-o.width/2}" y="${80-o.height/2}" width="${o.width}" height="${o.height}" rx="3" fill="${o.color}" stroke="#49666c" stroke-width="1.2"/>${Array.from({length:Math.floor((o.height-16)/7)},(_,r)=>Array.from({length:Math.floor((o.width-12)/7)},(_,c)=>`<circle cx="${126-o.width/2+c*7}" cy="${88-o.height/2+r*7}" r="1.8" fill="#d8bd7a"/><circle cx="${126-o.width/2+c*7}" cy="${88-o.height/2+r*7}" r=".7" fill="#4d6669"/>`).join('')).join('')}</g>`,
 'copper-board':()=>`<g transform="rotate(-13 120 80)"><path d="M48 38h140v94H48z" fill="#795b43" stroke="#634b39"/><path d="M44 32h140v94H44z" fill="#c18a59" stroke="#9b693f"/><path d="M47 35h134v4H47z" fill="#e3b384"/><path d="m49 119 129-80" stroke="#d4a06b" stroke-width="34" opacity=".28"/></g>`,
 breadboard:o=>{const w=o.mini?112:180,x=120-w/2;return `<g transform="rotate(-10 120 80)"><rect x="${x}" y="43" width="${w}" height="83" rx="6" fill="#bfc8c6"/><rect x="${x}" y="37" width="${w}" height="83" rx="6" fill="#f0f0e8" stroke="#aab6b5"/><path d="M${x+9} 78h${w-18}" stroke="#a1aaa8" stroke-width="5"/>${caHoles(x+12,49,Math.floor((w-20)/7),4,7)}${caHoles(x+12,89,Math.floor((w-20)/7),3,7)}${o.mini?'':`<path d="M${x+8} 43h${w-16}" stroke="#ca6860"/><path d="M${x+8} 114h${w-16}" stroke="#6598b4"/>`}</g>`;},
 'u-jumpers':()=>`<g transform="rotate(-13 120 80)">${['#d06452','#e0b952','#6e9d68','#438caf','#8a729b','#b18b60'].map((c,i)=>`<path d="M${40+i*25} ${105-i*7}v-26q0-4 4-4h${8+i*2}q4 0 4 4v26" stroke="${c}" stroke-width="4" fill="none"/><path d="M${40+i*25} ${105-i*7}v14m${16+i*2} -14v14" stroke="#abb6bc" stroke-width="2"/>`).join('')}</g>`,
 resistors:()=>[0,1,2].map((n)=>`<g transform="translate(${n*19} ${n*25}) rotate(-18 100 47)"><path d="M43 45h37m43 0h45" stroke="#9ca9af" stroke-width="2"/><rect x="77" y="35" width="49" height="20" rx="9" fill="#d8c59a" stroke="#a18e68"/>${['#856543','#3b4247','#cc5d45','#b69b51'].map((c,i)=>`<path d="M${85+i*10} 36v18" stroke="${c}" stroke-width="4"/>`).join('')}</g>`).join(''),
 'smd-resistors':()=>`<g transform="rotate(-14 120 80)">${[0,1,2].map(n=>`<g transform="translate(0 ${n*32})"><rect x="44" y="29" width="150" height="27" rx="2" fill="#e4ddc8" stroke="#bbb5a3"/>${[0,1,2,3,4].map(i=>`<circle cx="${52+i*32}" cy="34" r="2" fill="#b2a891"/><rect x="${61+i*26}" y="39" width="15" height="10" rx="1" fill="#303e46"/><path d="M${62+i*26} 39v10m13-10v10" stroke="#c3ccd0" stroke-width="3"/>`).join('')}</g>`).join('')}</g>`,
 capacitors:()=>[0,1,2,3].map((n)=>`<g transform="translate(${48+n*40} ${34+n%2*17}) rotate(${n*4-8})"><path d="M8 62v28m14-28v20" stroke="#a6b1b6" stroke-width="2"/><rect width="30" height="66" rx="5" fill="${n%2?'#3c5773':'#306c8b'}" stroke="#2e4658"/><path d="M5 9v49" stroke="#779dad" stroke-width="4"/><ellipse cx="15" cy="3" rx="15" ry="5" fill="#c7d1d0" stroke="#6d858d"/><path d="m9 0 12 6m0-6L9 6" stroke="#8a9d9f"/><path d="M25 13v40" stroke="#d0dde0" stroke-width="5"/></g>`).join(''),
 'usb-breakout':()=>`<g transform="rotate(-15 120 80)"><rect x="65" y="40" width="110" height="87" rx="5" fill="#b94e48" stroke="#7e3434"/><rect x="94" y="24" width="52" height="46" rx="7" fill="#b9c4c9" stroke="#5b707b" stroke-width="2"/><rect x="102" y="27" width="36" height="11" rx="5" fill="#303f48"/><path d="M101 45h37" stroke="#e4ebec" stroke-width="3"/>${Array.from({length:6},(_,i)=>`<circle cx="${80+i*16}" cy="112" r="4" fill="#cbb16c"/><circle cx="${80+i*16}" cy="112" r="1.8" fill="#713a36"/>`).join('')}<circle cx="77" cy="54" r="5" fill="#d1b97b"/><circle cx="163" cy="54" r="5" fill="#d1b97b"/></g>`,
 'serial-adapter':()=>`<g transform="rotate(-14 120 80)"><rect x="57" y="41" width="126" height="80" rx="4" fill="#b84f48" stroke="#7c3e3b"/><rect x="48" y="57" width="35" height="41" rx="4" fill="#c2cdd1" stroke="#536b77"/><path d="M49 63h12v28H49" fill="#3d4c54"/><rect x="100" y="61" width="36" height="31" fill="#303d46"/>${Array.from({length:5},(_,i)=>`<path d="M${103+i*7} 56v5m0 31v6" stroke="#bfc6c5" stroke-width="3"/><path d="M176 ${49+i*13}h20" stroke="#ceb06b" stroke-width="4"/>`).join('')}<rect x="146" y="62" width="18" height="30" fill="#354553"/><circle cx="88" cy="107" r="3" fill="#87b56e"/></g>`,
};

// Product silhouettes are illustrative, not board layouts or electrical references.
// XIAO Plus is shown from its pad side to distinguish its expanded SMD layout.
const elRect=(x,y,w,h,fill,rx=1,stroke='#344451',sw=.9)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const elCircle=(x,y,r,fill,stroke='#344451',sw=.8)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const elPath=(d,stroke='#344451',sw=1.1,fill='none')=>`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`;
const elGroup=(s,angle=-7)=>`<g transform="rotate(${angle} 120 82)">${s}</g>`;
const elPads=(x,y,n,step=11,vertical=false)=>Array.from({length:n},(_,i)=>elRect(x+(vertical?0:i*step),y+(vertical?i*step:0),vertical?8:6,vertical?6:8,'#d9bd78',1,'#a78d50',.6)+elCircle(x+(vertical?4:i*step+3),y+(vertical?i*step+3:4),1.5,'#344451','none')).join('');
const elChip=(x,y,w,h)=>elRect(x-2,y+3,w+4,h-6,'#b6bdbe',0,'none')+elRect(x+3,y-2,w-6,h+4,'#b6bdbe',0,'none')+elRect(x,y,w,h,'#27323b',1.5)+elPath(`M${x+4} ${y+4}h${w-8}`,'#64717a',.8)+elCircle(x+4,y+h-4,1,'#80909a','none');
const elSmd=(x,y,w=10)=>elRect(x,y,w,4,'#c3c0ad',.5,'#dde4e3',1.6);
const elUsb=(x,y,w=29)=>elRect(x,y,w,21,'#b4bec4',3)+elRect(x+1.6,y+1.5,w-3.2,15,'#e7ebed',2,'#76858d',.6)+elRect(x+4,y+3,w-8,5,'#263944',2,'none')+elPath(`M${x+4} ${y+18}h${w-8}`,'#7f8b91',.7);
const elHole=(x,y)=>elCircle(x,y,4,'#d9b970','#8c854e',.6)+elCircle(x,y,2.4,'#f6f5f1','#344451',.6);
const elScreen=(x,y,w,h,tone='blue')=>{
 const bg=tone==='paper'?'#eae9df':tone==='white'?'#10191f':'#101c2a';
 const fg=tone==='paper'?'#485455':tone==='white'?'#dce8e9':'#79ccf4';
 return elRect(x,y,w,h,bg,1.4,'#1c2932',.8)+elPath(`M${x+8} ${y+9}h${Math.round(w*.4)}M${x+8} ${y+15}h${Math.round(w*.26)}`,fg,1.8)+elPath(`M${x+8} ${y+h-10}h${w-16}`,fg,.6)+elPath(`m${x+9} ${y+h-15} ${w*.14} -${h*.16} ${w*.14} ${h*.07} ${w*.16} -${h*.26} ${w*.14} ${h*.12} ${w*.15} -${h*.1}`,fg,1.4)+elPath(`M${x+2} ${y+2}h${w-4}`,'#ffffff',.5);
};
const electronicsProfiles={
 'xiao-esp32s3-seeed':['elXiao',{}],
 'xiao-esp32s3-plus-seeed':['elXiao',{plus:true}],
 'raspberry-pi-5':['elPi',{}],
 'esp32-devkit-7semi--devkit-e':['elDevkit',{}],
 'esp32-devkit-7semi--devkit-ue':['elDevkit',{external:true}],
 'tools-and-consumables--esp8266':['elEsp8266',{}],
 'hlk-ld2450-radar':['elLd2450',{}],
 'hlk-ld2410c-radar':['elLd2410',{}],
 'sht41-7semi':['elSht41',{}],
 'bh1750-gy302-lux':['elBh1750',{}],
 'dht22-am2302':['elDht22',{}],
 'waveshare-213-epaper-hat-plus':['elEpaper',{}],
 'waveshare-101-dsi-lcd-c':['elLcd',{}],
 'oled-displays--oled13':['elOled',{size:'large'}],
 'oled-displays--oled096-direct':['elOled',{}],
 'oled-displays--oled096-amazon':['elOled',{}],
 'aliexpress-displays--oled-091':['elOled',{size:'wide',tone:'white'}],
 'aliexpress-displays--ips-19':['elIps',{}],
 'aliexpress-displays--esp32-tft32':['elTftBoard',{}],
 'wly104050-lipo':['elLipo',{}],
 'tp4056-charger':['elCharger',{}],
 'tools-and-consumables--ams1117':['elRegulator',{}],
};
const electronicsDrawings={
 elXiao:(o={})=>{
  let s=elRect(77,29,86,108,'#202e35',9)+elRect(80,31,80,103,'#27343b',7,'#5b656a',.6)+elPads(74,42,7,13,true)+elPads(158,42,7,13,true)+elUsb(101,24,38);
  if(o.plus){
   s+=elRect(92,56,56,30,'#d0ae62',2,'#917640',.7)+elRect(96,60,48,22,'#bb984e',1,'#e3cd8f',.7);
   s+=Array.from({length:3},(_,r)=>Array.from({length:4},(_,c)=>elRect(94+c*13,93+r*11,8,6,'#d9bd78',1,'#9d844a',.5)).join('')).join('');
   s+=elChip(85,53,9,12)+elSmd(145,90,8)+elSmd(145,100,8)+elPath('M85 121v-25h6M153 71v13h-5','#64716b',.7);
  }else{
   s+=elRect(90,64,60,49,'#aab4ba',2)+elRect(92,66,56,44,'#d7dce0',1,'#f7f8f8',.8)+elPath('M99 76h42M99 81h24M99 99h31','#82919b',1)+elCircle(94,124,6,'#d8d9cb','#8d999d')+elCircle(94,124,2.2,'#bb9651','#f3e5bb')+elChip(119,120,22,10)+elSmd(86,51,7)+elSmd(146,51,7);
  }
  return elGroup(s,-8);
 },
 elPi:()=>elGroup(elRect(37,36,166,99,'#287b53',6)+elPath('M43 42h154v86H43z','#76a284',.7)+[ [45,44],[188,44],[45,126],[188,126] ].map(p=>elHole(...p)).join('')+elRect(55,40,109,12,'#242e33',1)+Array.from({length:18},(_,i)=>elRect(58+i*5.7,42,2.7,2.2,'#c8aa65',0,'none')+elRect(58+i*5.7,47,2.7,2.2,'#c8aa65',0,'none')).join('')+elChip(82,69,35,32)+elRect(85,71,29,26,'#b9bec4',2,'#e1e3e2')+elChip(129,65,20,25)+elChip(130,102,18,17)+elRect(173,52,35,30,'#c0c7ca',2)+elRect(178,57,30,20,'#64717b',1)+elRect(174,87,34,35,'#bbc3c9',2)+elRect(180,92,27,11,'#4784b8',1)+elRect(180,106,27,11,'#4784b8',1)+elUsb(49,119,22)+elRect(82,128,21,10,'#c3c7ca',1)+elRect(112,128,21,10,'#c3c7ca',1)+elRect(63,72,9,36,'#e6e5db',1)+elRect(155,94,8,32,'#e6e5db',1)+elSmd(92,113,15)+elSmd(63,58,12),-5),
 elDevkit:(o={})=>{
  let s=elRect(83,23,74,120,'#242e34',4)+elPads(78,31,10,11,true)+elPads(154,31,10,11,true)+elRect(94,27,52,65,'#286153',2);
  s+=o.external?elRect(97,30,45,12,'#263a35',1)+elCircle(136,34,4,'#d7c597','#7b7d74')+elCircle(136,34,1.4,'#9d7138'):elPath('M100 31h10v7h8v-7h9v7h9v-7','#d0b362',2.2);
  s+=elRect(96,46,48,43,'#b0b8bb',2)+elRect(98,48,44,38,'#d7dce0',1,'#edf1f1',.7)+elPath('M103 60h33M103 65h24M103 77h27','#81909a',1)+elChip(109,99,18,15)+elUsb(107,124,26)+elRect(90,119,10,9,'#a7adb0',1)+elCircle(95,123,2.6,'#27313a')+elRect(139,119,10,9,'#a7adb0',1)+elCircle(144,123,2.6,'#27313a')+elSmd(90,99,8)+elSmd(138,101,8);
  return elGroup(s,-8);
 },
 elEsp8266:()=>elGroup(elRect(80,29,80,108,'#1d3338',3)+elPads(76,56,8,10,true)+elPads(157,56,8,10,true)+elPath('M89 39h14v13h13V39h13v13h14V39h9','#c2a15d',3)+elRect(87,63,66,61,'#a9b4ba',2)+elRect(89,65,62,56,'#d5dce0',1,'#edf1f2',.8)+elPath('M99 78h43M99 84h32M99 104h37','#7e8d96',1.1)+elPads(90,131,6,10,false),-8),
 elLd2450:()=>elGroup(elRect(31,57,178,58,'#275d88',4)+elRect(34,60,172,52,'#286a96',3,'#5793b3',.7)+[64,119,174].map(x=>elRect(x-19,67,38,29,'#d4b96d',1,'#e9d798',.6)+elPath(`M${x-11} 89V74h22v15`,'#b39551',.8)).join('')+elRect(84,105,72,12,'#f0e8d8',1)+Array.from({length:4},(_,i)=>elRect(92+i*17,114,3,15,'#c3a66b',0,'#927a48',.5)).join('')+elCircle(38,65,2.6,'#c6bb86')+elCircle(201,106,2.6,'#c6bb86'),-8),
 elLd2410:()=>elGroup(elRect(66,37,108,91,'#246c98',6)+elRect(76,59,87,43,'#ccb769',1,'#e0ce94')+elPath('M82 65h22v19H91v-9h-9zM137 65h22v10h-10v9h-12z','#a88b41',.7,'#ad974d')+elPath('M92 83v12h55V82','#917939',1.1)+elChip(109,91,25,23)+elPads(88,44,5,14)+elSmd(78,113,12)+elSmd(143,111,13)+elPath('M80 123h20M143 122h19','#e0e4d8',.8),-8),
 elSht41:()=>elGroup(elRect(73,40,95,93,'#33383d',4)+elHole(82,49)+elHole(159,49)+elRect(77,76,19,15,'#e7e4d9',2)+elRect(145,76,19,15,'#e7e4d9',2)+elRect(80,80,12,7,'#7f8584',1)+elRect(148,80,12,7,'#7f8584',1)+elRect(111,65,19,20,'#c3c8bd',2)+elRect(116,70,9,9,'#5f695c',1,'#e1e4d7')+elSmd(109,98,10)+elSmd(129,98,10)+elPath('M103 61h34M103 91h34','#5d6869',.9)+elPads(86,122,5,16),-8),
 elBh1750:()=>elGroup(elRect(83,28,75,107,'#206d9c',3)+elHole(95,40)+elHole(146,40)+elChip(111,66,20,14)+elPath('M103 70h-8v18h49V69h-7M101 60h38','#3a99bf',1)+elSmd(111,48,18)+elSmd(93,100,11)+elSmd(110,100,11)+elSmd(128,100,11)+elChip(140,98,9,13)+elPads(88,125,5,15),-8),
 elDht22:()=>elGroup(elRect(86,89,69,43,'#266849',3)+elRect(88,28,65,87,'#dfe5e3',6)+elRect(91,30,59,80,'#f2f3ed',4,'#bbc5c3',.7)+Array.from({length:7},(_,r)=>elRect(98,41+r*8,45,3.3,'#a0aba9',1.3,'none')+elPath(`M100 ${42+r*8}h41`,'#697978',.6)).join('')+elPath('M120 34v70','#e7ece8',4)+elCircle(120,106,2,'#9faaa5')+elPads(100,128,3,17)+Array.from({length:3},(_,i)=>elRect(102+i*17,135,3,10,'#bfa36a',0,'#8f7b52',.5)).join(''),-7),
 elEpaper:()=>elGroup(elRect(29,41,182,91,'#2a343c',4)+[ [36,49],[204,49],[36,124],[204,124] ].map(p=>elHole(...p)).join('')+elRect(47,45,147,13,'#181f25',1)+Array.from({length:20},(_,i)=>elRect(50+i*7,48,2.1,6,'#c4ab68',0,'none')).join('')+elRect(47,62,148,60,'#afafa3',2)+elScreen(50,65,142,54,'paper')+elRect(170,110,19,7,'#333d3a',1,'none'),-7),
 elLcd:()=>elGroup(elRect(26,31,188,109,'#222e37',6)+elRect(30,35,180,100,'#414d55',3)+elRect(34,39,172,92,'#173d4e',2,'#0e202b',.8)+elPath('M35 129V40h171','#93b7c1',.6)+elPath('M35 111 85 64 122 89 157 49 205 94V130H35z','none',0,'#225269')+elPath('M35 126 102 88 143 113 174 88 205 109v21H35z','none',0,'#366f7f')+elCircle(177,60,9,'#b7d2ce','none')+elRect(48,48,61,4,'#d3e3df',2,'none')+elRect(48,57,38,2,'#91b6bb',1,'none')+elCircle(120,137,1,'#73858d','none'),-5),
 elOled:(o={})=>{
  const wide=o.size==='wide',large=o.size==='large';
  const x=wide?45:large?55:65,y=wide?57:large?32:38,w=wide?150:large?130:110,h=wide?62:large?103:94;
  let s=elRect(x,y,w,h,'#256b99',3)+[ [x+6,y+7],[x+w-6,y+7],[x+6,y+h-6],[x+w-6,y+h-6] ].map(p=>elHole(...p)).join('');
  s+=elRect(x+12,y+12,w-24,h-28,'#151d23',1)+(wide?elRect(x+16,y+16,w-32,h-36,'#10191f',1)+elPath(`M${x+23} ${y+24}h36M${x+23} ${y+31}h23`,'#dce8e9',1.7)+elPath(`m${x+71} ${y+36} 12 -7 11 3 13 -9 12 5`,'#dce8e9',1.3):elScreen(x+16,y+16,w-32,h-36,o.tone||'blue'));
  s+=elPads(102,y-8,4,11)+elRect(x+w*.32,y+h-14,w*.36,7,'#bd8b48',1,'#d6b66c',.6);
  return elGroup(s,-7);
 },
 elIps:()=>elGroup(elRect(79,26,82,112,'#24343b',3)+elRect(85,32,70,96,'#111d27',2)+elRect(88,35,64,90,'#235265',2,'#78a0aa',.5)+elPath('M90 93 111 57 132 82 150 60v63H90z','none',0,'#548b91')+elPath('M90 113 116 86 150 106v17H90z','none',0,'#7aafa5')+elCircle(137,49,6,'#d8cfaa','none')+elRect(104,138,32,9,'#c79750',1,'#98703c',.8)+elPath('M109 139v7m5-7v7m5-7v7m5-7v7m5-7v7','#efd195',1),-7),
 elTftBoard:()=>elGroup(elRect(57,26,126,113,'#d0ad3d',4)+elRect(59,28,122,107,'#e3c558',3,'#f1d877',.7)+[ [63,33],[177,33],[63,130],[177,130] ].map(p=>elHole(...p)).join('')+elRect(70,34,100,97,'#20292d',2)+elRect(74,38,92,89,'#223e4e',1)+elPath('M76 103 105 70 126 88 145 55 165 85v40H76z','none',0,'#3a6e7d')+elPath('M76 120 112 96 139 113 165 92v33H76z','none',0,'#7ca197')+elCircle(148,52,7,'#d4c69a','none')+elUsb(54,56,13)+elRect(54,97,14,15,'#bfc6ca',2)+elRect(169,107,13,10,'#b9b9a5',1)+elPath('M77 45h32M77 49h21','#adcbd0',1.2),-7),
 elLipo:()=>elGroup(elPath('M78 47C66 26 88 19 104 25M91 47C85 29 109 22 124 27','#26323c',3)+elPath('M78 47C66 26 88 19 104 25','#c55043',2.4)+elRect(102,20,24,12,'#ede5d5',2)+elRect(68,43,105,94,'#bdc6ca',5)+elPath('M69 46h103v87H69z','#8c999e',.6,'#dbe0df')+elPath('M71 50 92 60h74M74 130h92M72 54v73','#f7f8f4',2)+elRect(68,43,105,10,'#c7a65d',2,'#aa8b4e',.6)+elRect(77,73,82,43,'#e7e9df',1,'#b5beb8',.7)+elPath('M86 83h55M86 91h43M86 105h27','#87928f',1.5)+elPath('M168 57v70l-6 6','#a5b2b4',1.2),-8),
 elCharger:()=>elGroup(elRect(55,49,131,68,'#266a96',4)+elRect(58,52,125,62,'#2a7ba7',2,'#659cb5',.7)+elUsb(48,68,30)+elChip(107,66,26,27)+elSmd(88,58,12)+elSmd(88,100,12)+elSmd(142,61,10)+elSmd(143,98,10)+elRect(86,78,6,5,'#de7661',1,'#daccc1',1)+elRect(86,89,6,5,'#78a994',1,'#daccc1',1)+elPads(166,60,4,12,true)+elPath('M99 70h7M137 81h23M99 103h27v-8','#66b2ce',1),-8),
 elRegulator:()=>elGroup(elRect(54,52,132,65,'#267bb0',4)+elRect(58,55,124,59,'#378dbb',2,'#6bb4d0',.6)+elRect(105,64,29,25,'#b6c0c3',1)+elRect(111,79,20,24,'#293640',2)+elRect(110,102,3,9,'#c4c7c1',0)+elRect(120,102,3,9,'#c4c7c1',0)+elRect(130,102,3,9,'#c4c7c1',0)+elSmd(83,72,14)+elSmd(148,87,14)+elPads(65,64,3,17,true)+elPads(170,64,3,17,true)+elPath('M82 61h13v8M143 106h18V87','#8ac5d5',1.1),-8),
};

// Item-specific cutout artwork, 240 × 164. Generic illustrations are identified by hardware type.
const wsOutline='#263c46', wsSteel='#c5d0d5', wsDark='#273941';
const wsPath=(d,fill,extra='')=>`<path d="${d}" ${extra.includes('fill="')?'':`fill="${fill}"`} ${extra.includes('stroke="')?'':`stroke="${wsOutline}"`} ${extra.includes('stroke-width="')?'':'stroke-width="1.5"'} stroke-linejoin="round" ${extra}/>`;
const wsRect=(x,y,w,h,fill,r=3,extra='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" ${extra.includes('stroke="')?'':`stroke="${wsOutline}"`} ${extra.includes('stroke-width="')?'':'stroke-width="1.5"'} ${extra}/>`;
const wsLine=(x1,y1,x2,y2,c='#70848d',sw=1.3)=>`<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${c}" stroke-width="${sw}" fill="none" stroke-linecap="round"/>`;
const wsCircle=(x,y,r,fill,extra='')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${wsOutline}" stroke-width="1.5" ${extra}/>`;
const wsText=(x,y,s,size=7,c='#eaf3f4',extra='')=>`<text x="${x}" y="${y}" fill="${c}" font-family="Arial,sans-serif" font-size="${size}" ${extra}>${s}</text>`;
const wsScrew=(x,y)=>wsCircle(x,y,2.3,'#8ea0a8')+wsLine(x-1,y+1,x+1,y-1,'#3a4b55',1);
const wsCord=(d)=>`<path d="${d}" stroke="#29353d" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
const wsTweezers=(x,y,angle=0,color='#b9c8cf',curved=false)=>`<g transform="translate(${x} ${y}) rotate(${angle})">${wsPath(curved?'M0 0Q8 -4 14 0L16 72Q16 84 7 91L0 96L2 87L5 78L4 19L0 10L-4 19L-4 78L-1 87L0 96L-7 91Q-16 84 -16 72L-14 0Q-8 -4 0 0Z':'M0 0Q7 -4 11 2L9 77L0 102L2 77L3 18L0 13L-3 18L-2 77L0 102L-9 77L-11 2Q-7 -4 0 0Z',color)}${wsLine(-6,7,-5,65,color==='#25333b'?'#60717a':'#eef3f5',1.5)}</g>`;
const wsBraid=(o={})=>`<g transform="translate(0 3)">${wsPath('M133 111Q167 109 184 123L197 122L189 132Q164 119 133 122Z','#c38e50')}${Array.from({length:10},(_,i)=>wsLine(143+i*4,114+i*.45,140+i*4,123+i*.45,'#e8bc7e',.8)).join('')}${wsCircle(108,80,47,o.color||'#e8b337')}${wsCircle(108,80,34,'#f2e8cc')}${wsCircle(108,80,12,'#f7faf9')}${wsCircle(108,80,4,'#798a90')}${wsPath('M70 56A44 44 0 0 1 145 57L133 64A29 29 0 0 0 83 65Z',o.accent||'#344958')}${wsText(108,108,o.label||'DESOLDERING WICK',6.1,'#3a474b','text-anchor="middle"')}${wsText(108,119,o.width||'',7,'#3a474b','text-anchor="middle"')}</g>`;
const workshopProfiles={
 'cilicant-silica-gel-5g':['wsDesiccant',{}],
 'lifelong-lletk09':['wsPrecisionKit',{}],
 'yihua-workshop-tools--8858':['wsHotAir',{}],
 'yihua-workshop-tools--929':['wsDesolder',{}],
 'yihua-workshop-tools--948':['wsFan',{}],
 'aliexpress-prototyping-stock--dc-meter':['wsDcMeter',{}],
 'aliexpress-prototyping-stock--electrician-pliers':['wsPliers',{color:'#d4a22e',strip:true}],
 'aliexpress-prototyping-stock--universal-pliers':['wsPliers',{color:'#4c8294'}],
 'aliexpress-prototyping-stock--silver-tweezers':['wsTweezers',{color:'#bdc9ce'}],
 'aliexpress-prototyping-stock--cosmetic-tweezers':['wsTweezers',{color:'#c3ccd1',count:3}],
 'aliexpress-prototyping-stock--mechanic-tweezers':['wsTweezers',{color:'#687782',curved:true}],
 'aliexpress-prototyping-stock--braid-15':['wsBraid',{color:'#4b8cc2',accent:'#244c72',label:'MECHANIC SR20',width:'1.5 mm'}],
 'aliexpress-prototyping-stock--braid-35':['wsBraid',{color:'#4b8cc2',accent:'#244c72',label:'MECHANIC SR20',width:'3.5 mm'}],
 'aliexpress-prototyping-stock--adhesive-tape':['wsTape',{}],
 'tools-and-consumables--caliper':['wsCaliper',{}],
 'tools-and-consumables--multimeter':['wsMultimeter',{}],
 'tools-and-consumables--noel-iron':['wsIron',{}],
 'tools-and-consumables--iron-stand':['wsIronStand',{}],
 'tools-and-consumables--yihua-tips':['wsTips',{count:3}],
 'tools-and-consumables--bakon-tip':['wsTips',{count:1}],
 'tools-and-consumables--solder-wire':['wsSolder',{}],
 'tools-and-consumables--noel-wick':['wsBraid',{color:'#b94d35',accent:'#692f2c',label:'NOEL'}],
 'tools-and-consumables--relife-wick':['wsBraid',{color:'#e9c348',accent:'#b24432',label:'RELIFE RL-20B',width:'2.0 mm'}],
 'tools-and-consumables--flux':['wsFlux',{}],
 'tools-and-consumables--stripper':['wsPliers',{color:'#e14b3c',strip:true}],
 'tools-and-consumables--tip-refresher':['wsTin',{}],
 'tools-and-consumables--solder-pad':['wsMat',{color:'#5a9da9',pad:true}],
 'tools-and-consumables--yh08c':['wsTipCleaner',{color:'#294d73'}],
 'tools-and-consumables--steel-tip-cleaner':['wsTipCleaner',{color:'#bbc7cc',steel:true}],
 'tools-and-consumables--magnifier':['wsMagnifier',{}],
 'tools-and-consumables--pcb-ruler':['wsRuler',{}],
 'tools-and-consumables--cutting-mat':['wsMat',{color:'#2f7e69'}],
 'tools-and-consumables--tip-holder':['wsTipHolder',{}],
 'tools-and-consumables--sponges-small':['wsSponges',{small:true}],
 'tools-and-consumables--sponges-large':['wsSponges',{}],
 'tools-and-consumables--bosch-drill':['wsDrill',{}],
 'tools-and-consumables--bosch-xline':['wsBitCase',{drill:true}],
 'tools-and-consumables--bosch-bits':['wsBitCase',{}],
 'tools-and-consumables--blackdecker-kit':['wsToolkit',{}],
 'tools-and-consumables--needle-files':['wsFiles',{}],
 'tools-and-consumables--themisto-tweezers':['wsTweezers',{count:5,color:'#25333b'}],
 'tools-and-consumables--quarant-ipa':['wsBottle',{type:'ipa'}],
 'tools-and-consumables--local-ipa':['wsBottle',{type:'spray'}],
 'tools-and-consumables--cotton-swabs':['wsSwabs',{}],
 'tools-and-consumables--foam-swabs':['wsSwabs',{foam:true}],
 'tools-and-consumables--cleanroom-wipes':['wsWipes',{}],
 'tools-and-consumables--glue-remover':['wsBottle',{type:'glue'}],
 'tools-and-consumables--dispenser':['wsBottle',{type:'dispenser'}],
 'tools-and-consumables--repair-brush':['wsBrush',{}]
};
const workshopDrawings={
 wsDesiccant:()=>`${wsPath('M50 36L174 30L189 127L63 136Z','#e7eeea')}${wsPath('M54 42L173 36L183 121L68 130Z','#f7faf6')}${wsLine(53,47,174,41,'#95aaa4',2)}${[[83,69,-10],[126,60,8],[113,105,-4]].map(([x,y,a])=>`<g transform="translate(${x} ${y}) rotate(${a})">${wsRect(-22,-18,45,35,'#f2e9d1',2)}${wsLine(-17,-12,18,-12,'#b8b297',1)}${wsLine(-17,11,18,11,'#b8b297',1)}${[-9,0,9].map(dx=>wsCircle(dx,-3,2,'#d89c47','stroke-width=".5"')).join('')}${wsText(0,7,'SILICA GEL',4.6,'#4e655d','text-anchor="middle"')}</g>`).join('')}${wsText(124,28,'5 g SACHETS',7,'#526b62','text-anchor="middle"')}`,
 wsPrecisionKit:()=>`${wsRect(37,27,164,108,'#344854',7)}${wsRect(43,33,152,96,'#b8c9cb',4)}${wsRect(49,39,103,83,'#dce5e3',3)}${Array.from({length:3},(_,r)=>Array.from({length:8},(_,c)=>`${wsRect(55+c*12,47+r*24,6,13,'#8b9ca2',1)}${wsLine(58+c*12,44+r*24,58+c*12,48+r*24,'#f5f7f4',2)}`).join('')).join('')}${wsRect(166,68,13,47,'#2b414d',4)}${wsRect(164,103,17,10,'#5d8fa2',3)}${wsLine(172,44,172,68,'#a9b9c1',4)}${wsCircle(172,118,7,'#5d8fa2')}${wsCord('M55 140C82 153 132 138 160 145')}${wsRect(47,136,11,6,'#a7b9c2',1)}${wsRect(158,141,18,6,'#a7b9c2',1)}${wsText(119,24,'PRECISION SET',7,'#526b75','text-anchor="middle"')}`,
 wsCaliper:()=>`<g transform="rotate(-13 120 82)">${wsRect(33,64,172,13,'#becbd1',1)}${wsRect(36,64,164,3,'#eef3f3',1)}${Array.from({length:31},(_,i)=>wsLine(44+i*5,69,44+i*5,i%5===0?76:73,'#465a64',.8)).join('')}${wsPath('M48 63L48 32L57 30L57 64M48 76L48 120L67 104L67 78','#b8c6cd')}${wsPath('M105 62L105 31L97 36L97 62M107 78L107 119L87 101L87 78','#becbd1')}${wsRect(82,57,51,33,'#273d49',3)}${wsRect(89,61,36,14,'#b3c4b4',1)}${wsText(93,72,'0.00',11,'#273b38')}${wsCircle(91,82,2.7,'#d84c40')}${wsCircle(105,82,2.7,'#d5ab42')}${wsCircle(119,82,2.7,'#408cbb')}${wsRect(105,90,18,5,'#8c9da4',1)}${wsLine(202,67,214,67,'#a4b4ba',3)}</g>`,
 wsMultimeter:()=>`${wsCord('M88 129C56 140 34 120 48 105S52 71 43 67')}${wsCord('M143 130C170 145 197 129 185 103S188 73 200 68')}${wsPath('M200 68L203 42','#d74f3b','stroke-width="4"')}${wsPath('M43 67L38 43','#29383f','stroke-width="4"')}${wsLine(202,42,204,31,'#b6c4ca',2)}${wsLine(38,43,36,32,'#b6c4ca',2)}${wsRect(72,24,89,114,'#d9ad39',12)}${wsRect(80,30,73,100,'#303b40',8)}${wsRect(88,38,58,27,'#b7c4b0',3)}${wsText(95,57,'0.00',18,'#29413d')}${wsCircle(117,96,22,'#202c34')}${wsCircle(117,96,15,'#46545c')}${wsPath('M113 100L113 85L119 83L121 101Z','#9ba9ac')}${[0,1,2,3,4,5,6,7].map(i=>{let a=i*Math.PI/4;return wsLine(117+26*Math.sin(a),96+26*Math.cos(a),117+29*Math.sin(a),96+29*Math.cos(a),'#c4d0d0',1.3)}).join('')}${wsCircle(96,123,3,'#18252d')}${wsCircle(117,123,3,'#18252d')}${wsCircle(139,123,3,'#cf5244')}`,
 wsDcMeter:()=>`${wsPath('M43 49L183 37L199 48L199 116L59 128L43 116Z','#232e35')}${wsPath('M43 49L183 37L183 106L43 118Z','#3f505b')}${wsRect(54,55,118,51,'#0d2533',3,'transform="rotate(-5 113 80)"')}${wsText(65,75,'12.00 V',16,'#65d2db')}${wsText(65,94,'0.00 A',12,'#a5c0c8')}${wsScrew(49,54)}${wsScrew(177,43)}${wsScrew(49,111)}${wsScrew(177,102)}${wsCircle(190,69,3,'#8ca1a6')}${wsCircle(190,87,3,'#8ca1a6')}`,
 wsHotAir:()=>`<g transform="rotate(-16 120 80)">${wsCord('M68 108C43 114 35 126 47 137')}${wsPath('M56 68Q54 54 70 52L145 52Q160 52 166 63L176 87Q169 102 153 104L76 104Q58 104 56 91Z','#317da7')}${wsPath('M164 63L193 65L207 72L207 84L178 89Z','#b3c3cd')}${wsRect(191,68,18,15,'#c8d3d8',2)}${wsPath('M207 71L215 73L215 80L207 83Z','#374d58')}${wsRect(79,60,61,25,'#1e303e',5)}${wsRect(85,65,34,14,'#193745',2)}${wsText(88,76,'350',11,'#b9d5b9')}${wsCircle(128,70,3,'#cf4c40')}${wsCircle(128,78,2,'#a9bdc6')}${wsPath('M74 102L66 124L83 124L92 104','#2c3e48')}${[0,1,2,3,4].map(i=>wsLine(61+i*4,68,61+i*4,86,'#183d57',1.5)).join('')}${wsLine(84,91,148,91,'#65a6c7',2)}</g>`,
 wsDesolder:()=>`<g transform="rotate(-24 120 85)">${wsCord('M53 105C30 114 34 128 46 135')}${wsRect(58,65,73,31,'#387fb1',10)}${wsRect(52,68,17,25,'#255d88',5)}${wsPath('M125 69L161 70L161 90L125 92Z','#b8c6cf')}${wsPath('M159 72L189 75L200 80L189 86L159 88Z','#d8e0e4')}${wsPath('M200 78L213 79L213 82L200 83Z','#8199a4')}${wsRect(89,50,19,18,'#244d68',4)}${wsRect(83,48,31,6,'#2a4252',3)}${wsRect(60,56,6,10,'#b9c9ce',1)}${wsPath('M63 56L63 43L43 43L43 48L57 48L57 56','#bcc9d0')}${wsLine(73,76,119,76,'#72b0ce',2)}${wsText(79,89,'YIHUA',7)}</g>`,
 wsFan:()=>`${wsCord('M166 125C188 139 208 133 209 121')}${wsPath('M77 121L65 139L174 139L162 121Z','#354e60')}${wsRect(62,29,117,99,'#397da5',9)}${wsPath('M179 35L190 42L190 119L179 128Z','#285e80')}${wsRect(71,38,99,79,'#1c2c36',5)}${Array.from({length:12},(_,i)=>wsLine(76,44+i*6,166,44+i*6,'#526974',1)).join('')}${Array.from({length:16},(_,i)=>wsLine(77+i*5.7,42,77+i*5.7,111,'#3a505d',.8)).join('')}${wsCircle(120,77,29,'#1c2d36','fill-opacity=".18"')}${wsCircle(120,77,8,'#425967')}${wsScrew(68,35)}${wsScrew(173,35)}${wsScrew(68,122)}${wsScrew(173,122)}${wsRect(181,76,6,13,'#1c2d36',1)}`,
 wsIron:()=>`<g transform="rotate(-28 120 83)">${wsCord('M49 99C29 106 37 130 53 132')}${wsPath('M49 72L111 72Q122 72 125 83Q122 95 111 95L49 95Q40 84 49 72Z','#216d91')}${wsRect(53,75,34,17,'#303d42',6)}${[0,1,2,3,4].map(i=>wsLine(56+i*5,77,56+i*5,90,'#71848a',1)).join('')}${wsRect(92,76,21,12,'#1d3945',2)}${wsText(94,85,'350',7,'#bbd6ca')}${wsPath('M123 77L155 77L155 90L123 90Z','#b8c7ce')}${[0,1,2].map(i=>wsLine(132+i*7,78,132+i*7,89,'#546b77',1)).join('')}${wsPath('M155 79L186 80L206 84L186 87L155 88Z','#d5dddf')}${wsPath('M187 80L206 84L187 87Z','#7d929d')}</g>`,
 wsIronStand:()=>`${wsPath('M61 112L156 105L187 126L90 138L61 127Z','#3b4b52')}${wsPath('M61 112L156 105L187 119L90 131Z','#687c84')}${wsRect(72,113,41,15,'#cfb545',2,'transform="rotate(-5 92 120)"')}${wsPath('M137 110L140 88L150 79L155 108','#617780','stroke-width="3"')}${wsPath('M143 88C127 83 114 62 124 50C133 38 155 48 157 60C160 73 137 84 128 69C119 53 145 43 155 58C164 72 140 87 131 72C121 55 146 47 157 62C164 74 151 85 143 88','#aab9bf','fill="none" stroke-width="4"')}`,
 wsTips:(o)=>`${(o.count===1?[0]:[-1,0,1]).map((n,i)=>{const tip=o.count===1||i===0?'M-6 -12L-4 -31L0 -56L4 -31L6 -12Z':i===1?'M-6 -12L-4 -39Q0 -51 4 -39L6 -12Z':'M-7 -12L-7 -43L7 -55L7 -12Z';return `<g transform="translate(${120+n*41} 82) rotate(${n*13})">${wsPath('M-8 43L-8 -14L8 -14L8 43Z','#bdccd2')}${wsRect(-8,24,16,19,'#d8e1e4',2)}${wsPath(tip,'#bdccd2')}${wsLine(-5,18,-5,-10,'#edf3f4',2)}${wsPath(o.count===1||i===0?'M-2 -43L0 -56L2 -43Z':i===1?'M-3 -40Q0 -49 3 -40Z':'M-7 -43L7 -55L7 -44Z','#738792')}</g>`}).join('')}`,

 wsSolder:()=>`${wsPath('M151 107C175 103 179 123 197 118L211 112','none','stroke="#9facb3" stroke-width="3"')}${wsPath('M75 53L148 49L158 113L87 121Z','#6d818e')}${wsPath('M80 58L147 55L153 104L87 111Z','#c4ced3')}${Array.from({length:14},(_,i)=>wsLine(82+i*.5,60+i*3.2,147+i*.4,57+i*3.2,'#edf2f3',1.3)).join('')}${wsPath('M67 47Q102 30 144 40L151 53Q111 45 75 62Z','#25699a')}${wsPath('M78 109Q116 95 159 104L162 119Q121 131 86 126Z','#317eaf')}${wsPath('M87 41Q111 34 133 39L133 47Q109 43 88 51Z','#153b54')}`,
 wsBraid,
 wsTape:()=>`${wsPath('M72 57C83 30 166 25 182 61L182 102C168 137 80 137 66 104L66 66Z','#b5a588')}${wsPath('M74 59C82 38 164 36 176 62C188 89 75 97 70 70Z','#d8c8a8')}${wsPath('M94 60C103 48 148 46 159 60C166 75 98 81 94 64Z','#f6f0df')}${wsPath('M94 62Q122 43 159 60L159 73Q124 90 94 75Z','#938574')}${wsPath('M69 98Q89 127 153 115L184 130L158 140Q76 140 66 110Z','#c6b697')}${wsLine(79,96,79,107,'#e3d8c0',2)}`,
 wsFlux:()=>`<g transform="rotate(-25 120 80)">${wsRect(61,69,101,25,'#e6e7c8',3)}${wsRect(81,69,60,25,'#7c8b55',1)}${wsText(87,84,'MECHANIC',8,'#f3f2dc')}${wsRect(55,64,8,35,'#dce1d1',1)}${wsRect(35,75,20,13,'#c3cec5',1)}${wsRect(29,68,7,28,'#d4dcd5',2)}${wsPath('M162 74L178 78L183 83L178 87L162 89Z','#d8ddcf')}${wsPath('M182 80L210 83L182 85Z','#aebdbb')}${wsRect(204,80,11,6,'#d6dcd5',2)}</g>`,
 wsTin:()=>`${wsPath('M77 67L169 67L169 113C167 132 80 132 77 113Z','#4a5c64')}${wsPath('M80 84L166 84L166 113Q120 132 80 113Z','#9dbeaa')}${wsText(122,101,'TIP',11,'#2f4d45','text-anchor="middle"')}${wsText(122,114,'REFRESHER',7,'#2f4d45','text-anchor="middle"')}${wsPath('M75 65C75 40 170 40 171 65C171 89 75 89 75 65Z','#b7c4c8')}${wsPath('M84 64C84 48 162 48 162 64C162 81 84 81 84 64Z','#5c6258')}${Array.from({length:12},(_,i)=>wsCircle(93+(i%4)*18,59+Math.floor(i/4)*6,1.2,'#b3b699')).join('')}`,
 wsTipCleaner:(o)=>`${wsPath('M76 81Q76 44 120 43Q165 44 165 81L176 116Q161 138 84 129L67 116Z',o.color)}${wsPath('M76 79C79 51 163 51 165 79C162 103 78 104 76 79Z',o.steel?'#a9bac2':'#1d3d5c')}${wsPath('M84 78C87 57 155 58 157 78C155 97 86 98 84 78Z','#bd8e39')}${Array.from({length:15},(_,i)=>`<path d="M${91+(i%5)*12} ${68+Math.floor(i/5)*8}q-9 8 0 12q10-9 0-12" stroke="${i%2?'#e5c668':'#8a6428'}" fill="none" stroke-width="2.2"/>`).join('')}${wsLine(83,105,83,117,o.steel?'#e4ecef':'#5684a4',2)}`,
 wsMat:(o)=>`${wsPath('M43 46L185 34L209 120L62 136L36 63Z',o.color)}${wsPath('M45 51L182 40L201 115L65 129Z',o.color,'stroke="#a4c9bc" stroke-width=".7"')}${o.pad?`${[0,1,2].map(i=>wsRect(58+i*41,48-i*3.4,33,17,'#4a8997',2)).join('')}${wsPath('M64 79L179 69L190 112L77 124Z','#71b0bc','stroke="#46818b"')}${Array.from({length:12},(_,i)=>wsCircle(69+i*8.5,75-i*.7,1.4,'#3e7886')).join('')}`:`${Array.from({length:15},(_,i)=>wsLine(53+i*9,50-i*.75,72+i*9,125-i*.85,'#96c9b5',.65)).join('')}${Array.from({length:9},(_,i)=>wsLine(45+i*2.3,55+i*8,186+i*2.1,43+i*8,'#96c9b5',.65)).join('')}${wsPath('M69 123L186 48M57 67L192 109','none','stroke="#c1d7ad" stroke-width=".8"')}`}`,
 wsRuler:()=>`<g transform="rotate(-18 120 84)">${wsRect(31,61,179,45,'#236b61',3)}${wsRect(36,65,169,37,'#2f8272',1,'stroke="#d4b861"')}${Array.from({length:34},(_,i)=>wsLine(39+i*4.8,65,39+i*4.8,i%5===0?77:71,'#e7d796',.9)).join('')}${Array.from({length:30},(_,i)=>wsCircle(44+i*5.2,92,1.3,'#d7c98b')).join('')}${[3,5,7].map((r,i)=>wsCircle(140+i*24,84,r,'#173f3a')).join('')}${wsText(47,88,'PCB RULER',7,'#e7db9c')}${wsText(170,101,'15 cm',5,'#e7db9c')}</g>`,
 wsTipHolder:()=>`${wsPath('M53 98L177 87L198 122L71 139L53 125Z','#344752')}${wsPath('M53 98L177 87L198 115L71 131Z','#596c77')}${Array.from({length:5},(_,i)=>`${wsCircle(78+i*24,110-i*2.1,6,'#1f303a')}${wsPath(`M${75+i*24} ${107-i*2.1}l-6 -43l5 -15l5 15l1 42Z`,'#b6c7d0')}${wsLine(72+i*24,67-i*.3,75+i*24,99-i*2,'#e3edf0',1)}`).join('')}`,
 wsSponges:(o)=>`${[2,1,0].map((n)=>{let x=63+n*8,y=61-n*8,w=o.small?98:119;return `${wsPath(`M${x} ${y}L${x+w} ${y-7}L${x+w+9} ${y+43}L${x+9} ${y+54}Z`,'#d9b54d')}${wsPath(`M${x} ${y}L${x+w} ${y-7}L${x+w+6} ${y+36}L${x+6} ${y+46}Z`,'#edcf68')}${Array.from({length:20},(_,i)=>wsCircle(x+11+(i%5)*17,y+5+Math.floor(i/5)*9-(i%5)*1.2,1.2,'#c7a140')).join('')}`}).join('')}`,
 wsDrill:()=>`${wsPath('M76 49Q73 33 92 30L149 32L173 43L174 69L152 81L120 77L113 111L80 111L87 70Z','#246b8a')}${wsPath('M91 68L119 73L108 116L82 112Z','#1e3541')}${wsPath('M83 111L111 114L129 123L125 138L69 138L65 124Z','#253b47')}${wsPath('M68 124L126 126L125 138L69 138Z','#153043')}${wsPath('M148 39L171 43L174 68L150 74Z','#1e3341')}${wsRect(173,44,19,23,'#526777',3)}${wsRect(191,48,12,15,'#263e4c',2)}${wsPath('M203 54L216 56L203 59Z','#bccbd0')}${wsRect(121,37,26,20,'#d9e2e3',2)}${wsText(123,50,'BOSCH',6,'#bd3e32')}${wsRect(106,78,10,13,'#bf4539',3)}${[0,1,2,3,4].map(i=>wsLine(80+i*5,42,80+i*5,54,'#143c50',1.6)).join('')}${wsLine(84,119,107,121,'#d74539',3)}`,
 wsBitCase:(o)=>`${wsPath('M49 38L184 30L193 87L57 98Z','#294e5e')}${wsPath('M55 42L180 36L186 82L62 91Z','#d0dbcf','fill-opacity=".65"')}${wsPath('M57 98L193 87L205 126L66 139L51 128Z','#245d66')}${wsPath('M64 101L189 93L197 121L70 132Z','#1f3942')}${(o.drill?Array.from({length:13},(_,i)=>{let x=67+i*8.5;return wsLine(x,83-i*.55,x-5,51+(i%5)*3,'#a3b4b9',2)+wsLine(x-2,69-i*.55,x-4,61+(i%4)*2,'#eef2ec',.8)}):Array.from({length:15},(_,i)=>{let x=66+i*7.7;return wsRect(x,49+(i%2)*14,4,19,['#be433e','#e1b248','#55a36f','#4c7ab7'][i%4],1)+wsLine(x+2,48+(i%2)*14,x+2,43+(i%2)*14,'#bfcbd0',2)})).join('')}${Array.from({length:13},(_,i)=>wsRect(72+i*8.4,105-i*.65,5,16,'#9daeb4',1)).join('')}${wsRect(109,128,42,7,'#bd4032',2)}${wsText(130,134,'BOSCH',5,'#fff','text-anchor="middle"')}`,
 wsToolkit:()=>`${wsPath('M34 34L201 32L201 86L37 88Z','#263742')}${wsRect(42,39,151,42,'#354753',4)}${wsPath('M37 88L201 86L211 132L38 137L29 126Z','#263742')}${wsPath('M40 94L195 93L201 126L43 131Z','#374a55')}${wsRect(87,24,63,10,'#e7ae35',4)}${wsRect(98,27,42,5,'#2f424b',2)}${wsRect(48,46,61,10,'#e2ac37',3)}${wsRect(71,42,9,30,'#aabac0',2)}${wsPath('M126 45L131 60L127 73M140 45L134 60L138 73','none','stroke="#e1ad3c" stroke-width="5"')}${wsCircle(133,60,4,'#a4b6be')}${[0,1,2,3].map(i=>wsRect(151+i*9,46,5,25,'#a5b6bf',1)).join('')}${[0,1,2].map(i=>wsRect(53+i*26,101,16,20,'#d6a336',3)).join('')}${[0,1,2,3,4,5].map(i=>wsCircle(139+i*9,110,3,'#a7bbc5')).join('')}${wsRect(91,130,49,9,'#e5af3a',2)}${wsText(115,136,'BLACK+DECKER',4.8,'#283b43','text-anchor="middle"')}`,
 wsFiles:()=>`${Array.from({length:6},(_,i)=>`<g transform="translate(${63+i*23} ${42+(i%2)*5}) rotate(${(i-2.5)*5})">${wsPath('M-3 0L0 -15L3 0L2 56L-2 56Z','#8f9fa6')}${Array.from({length:12},(_,j)=>wsLine(-2,3+j*4,2,j*4,'#c7d0d2',.6)).join('')}${wsRect(-6,54,12,37,'#daa934',5)}${wsRect(-4,62,8,24,'#2d3b43',3)}</g>`).join('')}`,
 wsTweezers:(o)=>o.count===5?[-2,-1,0,1,2].map((n)=>wsTweezers(120+n*32,37+Math.abs(n)*5,n*9,o.color,n===2)).join(''):o.count===3?[-1,0,1].map(n=>wsTweezers(120+n*47,32+Math.abs(n)*6,n*12,o.color)).join(''):wsTweezers(120,29,30,o.color,o.curved),
 wsPliers:(o)=>`<g transform="rotate(-11 120 83)">${wsPath(o.strip?'M111 74L95 56L94 28L106 29L117 53L124 53L135 29L146 28L145 56L130 74Z':'M111 74L98 53L98 26L108 28L118 54L123 54L133 28L143 26L143 53L130 74Z','#b5c4cc')}${o.strip?`${wsPath('M102 43L113 49L117 61L110 58Z','#536c79')}${[0,1,2].map(i=>wsCircle(109+i*5,61+i*2,2.2,'#536b77')).join('')}`:wsLine(112,34,121,61,'#edf1f2',1.5)}${wsCircle(120,77,12,'#b4c3cc')}${wsCircle(120,77,4,'#637b88')}${wsPath('M110 85L100 111L85 137Q73 140 75 127L96 86Z',o.color)}${wsPath('M130 85L140 111L154 137Q167 140 165 127L144 86Z',o.color)}${wsLine(99,101,85,128,'#243a46',5)}${wsLine(141,100,155,128,'#243a46',5)}${wsLine(101,91,96,105,'#f2c96b',1.2)}</g>`,
 wsMagnifier:()=>`${wsPath('M64 121L137 117L158 132L80 140Z','#394e59')}${wsLine(104,120,109,84,'#82949c',6)}${wsLine(110,85,153,62,'#9eb0b7',5)}${wsCircle(109,84,6,'#526974')}${wsCircle(153,62,5,'#526974')}${wsLine(109,96,65,76,'#9caeb6',4)}${wsLine(65,76,48,85,'#657d89',3)}${wsPath('M41 81L58 82L55 91L42 94Z','#a6b7be')}${wsLine(129,103,180,91,'#8b9fa8',4)}${wsPath('M177 86L194 86L194 96L180 98Z','#a6b7be')}${wsCircle(153,47,31,'#dce7e7','fill-opacity=".8"')}${wsCircle(153,47,25,'#dff3f3','fill-opacity=".65"')}${wsPath('M137 36Q145 25 160 28','none','stroke="#fff" stroke-width="4"')}${wsLine(173,72,186,90,'#2d4350',7)}`,
 wsBottle:(o)=>{let type=o.type;return type==='spray'?`${wsPath('M91 62L90 77Q73 84 73 101L73 130Q120 141 167 130L167 101Q167 84 149 77L149 62Z','#62a67f','fill-opacity=".85"')}${wsRect(93,53,53,17,'#3b775a',4)}${wsPath('M98 53L98 34L134 30L163 36L163 47L136 46L129 56Z','#e2e6d8')}${wsPath('M138 47L148 48L141 70L135 72Z','#c6d2c7')}${wsLine(87,94,87,124,'#a7d8b9',4)}`:type==='dispenser'?`${wsPath('M87 66Q77 69 77 83L77 131Q121 142 165 131L165 83Q165 70 155 66Z','#2f80b6')}${wsRect(91,54,60,17,'#3077a1',5)}${wsPath('M108 54L113 32L127 32L132 54Z','#afc6bd')}${wsRect(110,23,20,16,'#e6c342',3)}${wsLine(86,85,86,126,'#70b4db',4)}`:`${wsPath('M90 52L90 66Q77 73 77 87L77 132Q120 143 163 132L163 87Q163 73 149 66L149 52Z',type==='ipa'?'#d4e4e8':'#d9e4df','fill-opacity=".9"')}${wsRect(88,36,62,21,type==='ipa'?'#e9f0ec':'#c74639',5)}${wsLine(94,42,144,42,type==='ipa'?'#b8caca':'#e97c66',2)}${wsRect(83,82,74,41,type==='ipa'?'#eff3ee':'#eee7cf',2,'stroke="#a0b3b3"')}${wsText(120,96,type==='ipa'?'QUARANT':'GLUE',9,'#3d655d','text-anchor="middle"')}${wsText(120,110,type==='ipa'?'99.9% IPA':'REMOVER',8,'#3d655d','text-anchor="middle"')}${wsLine(83,73,83,78,'#fff',3)}`;},
 wsSwabs:(o)=>`${wsRect(67,52,105,83,'#d5e6df',8,'fill-opacity=".7"')}${wsPath('M67 71L172 71L172 125Q116 142 67 125Z',o.foam?'#4c8c94':'#d0aece','fill-opacity=".8"')}${[0,1,2,3,4,5,6].map(i=>`<g transform="rotate(${(i-3)*5} ${88+i*11} 80)">${wsLine(88+i*11,30+i%2*6,88+i*11,120,o.foam?'#77af96':'#f0eee4',3)}${wsRect(84+i*11,24+i%2*6,8,o.foam?19:16,o.foam?'#b0cfb3':'#f6f4e9',4,'stroke="#9eada4"')}${o.foam?'':wsRect(84+i*11,112,8,16,'#f6f4e9',4,'stroke="#9eada4"')}</g>`).join('')}${wsRect(76,91,87,27,'#edf1e9',3,'stroke="#b3c7bf"')}${wsText(120,108,o.foam?'FOAM SWABS':'COTTON SWABS',7.8,'#3c6665','text-anchor="middle"')}`,
 wsWipes:()=>`${[3,2,1,0].map(n=>wsPath(`M${54+n*3} ${62+n*4}L${152+n*3} ${49+n*4}L${188+n*3} ${108+n*4}L${84+n*3} ${127+n*4}Z`,'#e5eeed','stroke="#91a6aa"')).join('')}${wsPath('M54 62L152 49L188 108L84 127Z','#f4f7f2','stroke="#a5b5b7"')}${wsPath('M78 76L148 65L172 102L99 115Z','#ecf1ea','stroke="#c9d5d3"')}${wsLine(84,89,160,77,'#d8e2df',.7)}`,
 wsBrush:()=>`<g transform="rotate(-26 120 85)">${wsRect(68,76,103,15,'#2b76a0',7)}${wsPath('M60 72L80 74L80 94L60 96Z','#2c536d')}${wsPath('M40 69L62 72L62 96L40 100Z','#44525a')}${Array.from({length:9},(_,i)=>wsLine(42+i*2.1,72,42+i*2.1,97,'#92a0a3',.7)).join('')}${wsPath('M170 75L188 71L192 95L170 91Z','#2c536d')}${wsPath('M187 71L206 66L211 100L192 95Z','#465259')}${Array.from({length:9},(_,i)=>wsLine(190+i*2,72-i*.2,195+i*1.8,96+i*.1,'#87979b',.7)).join('')}${wsText(106,86,'BS-02',7,'#d9edf4')}${wsLine(86,79,153,79,'#67a4c2',1.5)}</g>`
};

// Cutout illustrations: product-family appearance; never dimensions or verified contents.
const acPath=(d,fill,stroke='#495057',w=1.1)=>`<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" stroke-linejoin="round"/>`;
const acRect=(x,y,w,h,r,fill,stroke='#495057',sw=1.1)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const acCircle=(x,y,r,fill,stroke='#495057',sw=1.1)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const acEllipse=(x,y,rx,ry,fill,stroke='#495057',sw=1.1)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const acGroup=(x,y,s,rot,inner)=>`<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})">${inner}</g>`;
const acText=(x,y,s,text,color='#647078')=>`<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${s}" fill="${color}">${text}</text>`;
const acThreads=(x,y,w,h,color)=>Array.from({length:Math.floor(h/5)},(_,i)=>acPath(`M${x} ${y+4+i*5}l${w} -3`,'none',color,.8)).join('');
function acScrew({black=false,white=false,countersunk=false,length=52}={}){
 const body=white?'#e8e7de':black?'#34383a':'#b9c1c5',light=white?'#fafaf2':black?'#53585a':'#e7ebed',edge=white?'#9caaa9':black?'#202426':'#68757c';
 return acPath(`M-7 1h14v${length}l-3 5h-8l-3-5Z`,body,edge)+acThreads(-7,7,14,length-8,edge)+(countersunk?acPath('M-16-7h32L7 5H-7Z',body,edge)+acEllipse(0,-7,16,4,light,edge):acRect(-16,-10,32,14,5,body,edge)+acEllipse(0,-9,16,5,light,edge))+acPath('M-9-9H9M0-12v6','none',edge,1.5)+acPath(`M-4 9v${length-16}`,'none',light,.7);
}
function acNut({black=false,white=false,washer=false}={}){
 const edge=white?'#9caaa9':black?'#202426':'#6b757a',body=white?'#e8e7de':black?'#363b3e':'#bdc6ca',light=white?'#fafaf2':black?'#555c5f':'#e4e9eb';
 return washer?acEllipse(0,0,17,12,light,edge)+acEllipse(0,0,8,5,'#78868c',edge):acPath('M-17-6-9-15H9L17-6v17L8 20H-9l-8-9Z',body,edge)+acPath('M-17-6-9-15H9L17-6 8 3H-9Z',light,edge)+acEllipse(0,-6,7,5,'#13191c',edge)+acPath('M-9 3v17M8 3v17','none',edge,.8);
}
function acInsert({short=false,standard=false}={}){
 const h=short?24:39;
 return acPath(`M-18 0h36v${h}c-5 8-31 8-36 0Z`,'#bd903e','#80602c')+acEllipse(0,h,18,7,'#ab7b30','#80602c')+Array.from({length:8},(_,i)=>acPath(`M${-15+i*4} 4l${standard?0:5} ${h-5}`,'none','#f1cc79',1.5)).join('')+acPath(`M-18 ${h/2}h36`,'none','#8e672b',2)+acEllipse(0,0,18,8,'#e4bd66','#80602c')+acEllipse(0,0,9,4.4,'#4b3824','#80602c')+acPath('M-7 1Q0-3 7 1','none','#b88c44',1);
}
function acBox(o){
 const brass=o.contents==='inserts',black=o.black;
 let items='';
 for(let r=0;r<2;r++)for(let c=0;c<4;c++){
 const inner=brass?acInsert({short:r===0}):c===3?acNut({black,washer:r===1}):acScrew({black,countersunk:o.countersunk,length:24+c*6});
 items+=acGroup(61+c*39,64+r*37,brass?.36:.34,brass?0:18+c*9,inner);
 }
 return acGroup(0,8,1,0,acRect(39,38,165,92,6,'#e8eff0','#8f9fa5')+acRect(44,43,155,81,3,'#f8faf9','#c0ccce')+acPath('M83 43v81M122 43v81M161 43v81M44 84h155','none','#adbdc2',1.5)+items+acPath('M40 39v-7c0-7 7-11 13-11h136c7 0 13 4 13 11v7','none','#c0cdd1',3)+acRect(103,125,32,9,2,'#9eacb1','#839197'))+acGroup(67,115,o.size==='M4'?.77:o.size==='M2.5'?.55:.62,-23,brass?acInsert({short:false}):acScrew({black,countersunk:o.countersunk,length:35}))+acGroup(175,124,.68,17,brass?acInsert({short:true}):acNut({black}));
}
const accessoryProfiles={
 'bambu-x2d-combo-eu':['acPrinter',{}],
 'esp32-devkit-7semi--ufl-external-antenna':['acAntenna',{type:'whip'}],
 'bambu-filaments--pla-glow':['acSpool',{color:'#dbed82',material:'PLA Glow'}],
 'bambu-filaments--pla-beige':['acSpool',{color:'#ceb99b',material:'PLA'}],
 'bambu-filaments--pla-gray':['acSpool',{color:'#919b9f',material:'PLA'}],
 'bambu-filaments--pla-black':['acSpool',{color:'#30363a',material:'PLA Basic'}],
 'bambu-filaments--pla-blue':['acSpool',{color:'#3c6dbc',material:'PLA Basic'}],
 'bambu-filaments--pla-gold':['acSpool',{color:'#c3a352',material:'PLA Basic'}],
 'bambu-filaments--pla-bambu-green':['acSpool',{color:'#53a956',material:'PLA Basic'}],
 'bambu-filaments--pla-indigo-purple':['acSpool',{color:'#6d528e',material:'PLA Basic'}],
 'bambu-filaments--pla-matte-dark-red':['acSpool',{color:'#963f43',material:'PLA Matte'}],
 'bambu-filaments--asa-white':['acSpool',{color:'#e9ece8',material:'ASA'}],
 'bambu-filaments--petg-clear':['acSpool',{color:'#cbdcde',material:'PETG',refill:true}],
 'bambu-filaments--petg-hf-red':['acSpool',{color:'#bc3538',material:'PETG HF'}],
 'bambu-filaments--petg-hf-yellow':['acSpool',{color:'#f1cc27',material:'PETG HF'}],
 'bambu-filaments--petg-hf-orange':['acSpool',{color:'#ee7e2e',material:'PETG HF'}],
 'bambu-filaments--petg-hf-white':['acSpool',{color:'#e9ece8',material:'PETG HF'}],
 'bambu-filaments--petg-hf-black':['acSpool',{color:'#353a3c',material:'PETG HF'}],
 'aliexpress-prototyping-stock--heat-inserts':['acBox',{contents:'inserts'}],
 'aliexpress-prototyping-stock--screw-kit':['acBox',{}],
 'aliexpress-prototyping-stock--nylon-kit':['acBox',{black:true}],
 'tools-and-consumables--ss304-m2-5-pan':['acBox',{size:'M2.5'}],
 'tools-and-consumables--ss304-m3-pan':['acBox',{size:'M3'}],
 'tools-and-consumables--ss304-m4-pan':['acBox',{size:'M4'}],
 'tools-and-consumables--ss304-m3-countersunk':['acBox',{countersunk:true}],
 'tools-and-consumables--m3-6-slant-inserts':['acInserts',{}],
 'tools-and-consumables--m3-4-slant-inserts':['acInserts',{short:true}],
 'tools-and-consumables--m3-4-standard-insert':['acInserts',{short:true,standard:true,single:true}],
 'tools-and-consumables--nylon-m3-5-bolts':['acBolts',{}],
 'tools-and-consumables--nylon-m3-nuts':['acNuts',{}],
 'tools-and-consumables--nylon-m3-9-standoffs':['acStandoffs',{}],
 'tools-and-consumables--pcb-antenna':['acAntenna',{type:'pcb'}],
 'tools-and-consumables--lexar-reader':['acReader',{}],
 'tools-and-consumables--sandisk-microsd':['acMicroSD',{}],
 'input-controls--ky040':['acEncoder',{}],
 'input-controls--red-buttons':['acButton',{}],
 'input-controls--micro-buttons':['acTactiles',{}],
 'seeed-a02-antenna':['acAntenna',{type:'fpc'}],
 'seeed-xiao-heatsink':['acHeatsink',{}],
 'netgear-orbi-rbr50--router':['acOrbi',{}],
 'netgear-orbi-rbr50--satellites':['acOrbi',{pair:true}],
 'wiz-neo-b22--neo-b22':['acBulb',{base:'b22'}],
 'wiz-neo-b22--additional-bulbs':['acBulb',{}],
 'tuya-amazon-basics-bulbs':['acBulb',{}],
 'qubo-smart-devices--plugs':['acPlug',{}],
 'qubo-smart-devices--bulbs':['acBulb',{}],
};
const accessoryDrawings={
 acBox,
 acInserts:o=>o.single?acGroup(120,66,1.65,-10,acInsert(o)):acGroup(82,55,1.3,-12,acInsert(o))+acGroup(151,84,1.15,13,acInsert(o)),
 acBolts:()=>acGroup(88,50,1.15,-24,acScrew({white:true,length:25}))+acGroup(155,54,1,22,acScrew({white:true,length:25})),
 acNuts:()=>acGroup(87,69,1.35,-15,acNut({white:true}))+acGroup(151,94,1.5,16,acNut({white:true}))+acGroup(150,48,.8,-17,acNut({white:true})),
 acStandoffs:()=>[[-20,0],[31,14]].map(([x,y],i)=>acGroup(99+x,40+y,1.18,i?18:-16,acPath('M-13 0-6-7H7l8 7v58l-8 7H-6l-7-7Z','#34393c','#20272a')+acPath('M-13 0-6 7H7l8-7M-6 7v58M7 7v58','none','#60676b',1)+acEllipse(1,0,6,3,'#11181b','#78838a')+acEllipse(1,61,5,2,'#11181b','#78838a'))).join(''),
 acAntenna:o=>o.type==='whip'?acPath('M106 103C58 123 57 145 132 139S187 112 161 108','none','#202527',3)+acGroup(122,78,1,30,acRect(-7,-58,14,72,7,'#252a2e','#171d20')+acPath('M-3-49v46','none','#545b5e',1.5)+acRect(-10,11,20,17,3,'#353b3f','#1d2428')+acRect(-7,27,14,15,1,'#c6a14f','#927333')+acThreads(-7,28,14,14,'#80642f'))+acGroup(160,105,1,-22,acRect(-4,-4,8,8,1,'#c7ad73','#8a7649')+acCircle(0,0,1.4,'#e8d79f','#7f6531')):acPath('M133 79C185 80 202 118 172 132S97 123 91 129','none','#272c30',2.4)+acGroup(o.type==='fpc'?111:111,66,1,-12,o.type==='fpc'?acRect(-65,-15,130,30,2,'#252927','#171d1a')+acPath('M-55-8h38V7H6V-8h47M29-8v15h24','none','#b9a76f',2)+acRect(-7,9,17,8,1,'#d5c185','#99804b'):acRect(-59,-18,118,36,2,'#1d362a','#13261e')+acPath('M-48-8h17V8h16V-8H1V8h16V-8h31M-48 8v-16','none','#d4b166',4)+acRect(48,-7,9,15,1,'#b99c54','#7b6633'))+acGroup(88,130,1,-10,acRect(-4,-4,8,8,1,'#c7ad73','#8a7649')+acCircle(0,0,1.4,'#e8d79f','#7f6531')),
 acReader:()=>acGroup(120,82,1,-17,acRect(-67,-31,132,69,12,'#aab4bc','#626f78')+acPath('M-61-25H54c6 0 9 3 9 7','none','#e5ebee',2)+acRect(-15,-48,31,19,4,'#dce2e7','#68747b')+acRect(-10,-46,21,4,2,'#3d464e','#3d464e')+acRect(-47,-3,65,6,2,'#232c33','#5f6d76')+acRect(27,-3,23,5,1,'#232c33','#5f6d76')+acText(-45,24,10,'Lexar','#414d57')),
 acMicroSD:()=>acGroup(120,81,1,-12,acPath('M-37-57H19L38-38v94h-76v-99h8v-14Z','#242829','#121718')+acPath('M-32-49H15l14 15v33h-61Z','#b8292e','#8d2429')+acText(-26,-26,11,'SanDisk','#fff')+acText(-26,-12,8,'Ultra','#fff')+acText(-26,23,18,'256','#ebeded')+acText(10,23,7,'GB','#ebeded')+acPath('M-27 41h48','none','#81898a',1)+Array.from({length:8},(_,i)=>acRect(-30+i*8,-56,5,10,.5,'#c6a559','#9b7c3d',.6)).join('')),
 acEncoder:()=>acGroup(120,82,.91,-10,acRect(-43,-12,86,60,3,'#1d503e','#12352b')+Array.from({length:5},(_,i)=>acRect(-31+i*15,45,7,17,1,'#c9b176','#806a3c',.7)).join('')+acRect(-26,-29,52,35,2,'#acb2b0','#5d696a')+acPath('M-28-17h56M-18-29v12M18-29v12','none','#dde1dd',1)+acCircle(0,-17,21,'#646b6d','#30383d')+acRect(-9,-54,18,39,2,'#d8d9d3','#747e7e')+acPath('M-6-49v25M-2-49v25M2-49v25M6-49v25','none','#8c9693',1)+acCircle(-33,36,3,'#d9d0a5','#77937c')+acCircle(33,36,3,'#d9d0a5','#77937c')+acText(-31,23,7,'KY-040','#d8e0d4')),
 acButton:()=>acGroup(120,78,1.25,-15,acPath('M-19 21v28m38-28v28','none','#9ba5aa',4)+acRect(-25,-8,50,38,5,'#2e3235','#171c20')+acEllipse(0,-8,30,12,'#515659','#222a30')+acRect(-24,-31,48,25,8,'#c52a2b','#7d1e22')+acEllipse(0,-29,24,10,'#e44943','#7d1e22')+acPath('M-15-32c8-4 20-4 27 0','none','#ff9a8d',1.5)),
 acTactiles:()=>[[79,54,.9,0],[157,54,.85,12],[80,115,.62,-8],[161,115,.63,7]].map(([x,y,s,r],i)=>acGroup(x,y,s,r,acPath('M-23-12h-7v8h10m43-8h7v8H20M-23 15h-7v8h10m43-8h7v8H20','none','#aab0b1',3)+acRect(-25,-18,50,48,3,'#2f3538','#1d2429')+acRect(-22,-17,44,39,2,'#d3d7d5','#788185')+acCircle(0,2,i===1?8:12,'#373e41','#1c252a')+acCircle(-15,-10,2,'#909c9d','#69777b')+acCircle(15,16,2,'#909c9d','#69777b'))).join(''),
 acHeatsink:()=>acGroup(120,87,1,-17,acPath('M-58 20 28 39 65 8-20-12Z','#646d73','#343e45')+acPath('M-58 20v10l86 19V39M28 39l37-31v11L28 49','#a1a8ad','#465159')+Array.from({length:8},(_,i)=>{let x=-54+i*11;return acPath(`M${x} 17v-39l35-27v38l-35 28Z`,'#c8cfd2','#5c686e')+acPath(`M${x} -22l5 1 35-27-5-1Z`,'#eff2f2','#6c787e',.8)+acPath(`M${x+5} -21v39l35-28v-38Z`,'#9ca7ae','#5c686e',.8)}).join('')),
 acOrbi:o=>{const unit=acPath('M-39 36V-38c0-26 78-26 78 0v74c0 22-78 22-78 0Z','#edf0ed','#9aa5aa')+acEllipse(0,-38,39,16,'#e3eae6','#9aa5aa')+acPath('M-34-40c8-15 60-15 68 0','none','#88c9d3',2)+acPath('M-31-22v50','none','#fff',3)+acText(-18,27,10,'orbi','#afb7b6')+acPath('M-29 43q29 9 58 0','none','#c5ceca',1);return o.pair?acGroup(82,78,.83,-4,unit)+acGroup(159,92,.82,5,unit):acGroup(120,83,1,0,unit)},
 acBulb:o=>acGroup(120,84,.85,-13,acPath('M-27 12c-3-18-18-28-18-48 0-24 20-39 45-39s45 15 45 39c0 20-15 30-18 48Z','#eff1e9','#adb5b2')+acPath('M-35-48c9-17 36-20 51-10','none','#fff',3)+acPath('M-27 12h54l-8 29h-38Z','#e1e5de','#a7b0ad')+acPath('M-21 21h42M-19 31h38','none','#c2cbc5',1)+acRect(-18,40,36,23,3,'#b5bbb9','#6d7878')+(o.base==='b22'?acPath('M-18 46h-8v6h8M18 46h8v6h-8','#aab2af','#74817e')+acPath('M-12 63v5h8v-5M5 63v5h8v-5','#8e9693','#677370'):acPath('M-18 47h36M-18 54h36','none','#e5e8e5',1.3))),
 acPlug:()=>acGroup(120,81,1,-13,acPath('M-31-36v-19m62 19v-19','none','#abb2ad',7)+acRect(-44,-38,88,94,15,'#edf0e9','#a3aeaa')+acPath('M-35-28v69','none','#fff',3)+acCircle(0,-6,9,'#cad1c8','#a0aaa6')+acCircle(-18,19,5,'#545e5b','#89958c')+acCircle(18,19,5,'#545e5b','#89958c')+acRect(-4,-15,8,18,3,'#505b56','#939c95')+acCircle(25,-23,3,'#90b5a1','#7c9c89')+acPath('M-18 43h36','none','#d0d7cd',1.2)),
 acSpool:o=>{
 const ring=acEllipse(0,0,47,57,o.color,'#737c7d')+Array.from({length:7},(_,i)=>`<ellipse cx="0" cy="0" rx="${21+i*3.6}" ry="${27+i*4.1}" fill="none" stroke="${o.color==='#353a3c'?'#697173':'#edf0e5'}" stroke-opacity=".45" stroke-width="1"/>`).join('')+acEllipse(0,0,16,20,'#fafaf5','#727c7d');
 return acGroup(120,83,1,-12,o.refill?acEllipse(10,0,48,56,'#b4cacc','#7f9697')+ring+acPath('M-8-54h15v25H-8ZM-8 28H7v26H-8Z','#edeae0','#9daba8')+acPath('M-41-25l13 8M29 24l12 8','none','#f8faf7',2):acEllipse(13,0,50,60,'#bbc2bf','#788281')+acPath('M0-52 14-52v104H0Z',o.color,'#7c8886')+acEllipse(0,0,50,60,'#e0e4db','#84918c')+ring+acEllipse(0,0,22,28,'#e0e4db','#84918c')+acEllipse(0,0,12,16,'#52605d','#6c7770')+acPath('M-32-35l6-8M-39 0h-5M-31 35l6 8M31-35l-6-8M39 0h5M31 35l-6 8','none','#f4f5f0',3)+acRect(-25,30,50,13,2,'#f1f1e7','#abb5a8',.7)+acText(-21,39,7,o.material,'#58665d'));
 },
 acPrinter:()=>acGroup(119,96,.84,0,acPath('M-76-36-59-49H74L91-36V51H-76Z','#b0b8b6','#535e60')+acPath('M-76-36H73v87H-76Z','#d5dcd6','#717c7b')+acPath('M73-36l18-13v87L73 51Z','#9ca7a2','#535e60')+acRect(-66,-27,126,66,3,'#233237','#4f6062')+acPath('M-56-17H49M-1-17V-3','none','#8a9b97',4)+acRect(-10,-7,20,15,3,'#b5c0b7','#72827e')+acPath('M-49 28H43L30 16h-66Z','#788e85','#9db1a4')+acPath('M-61-22l40 58M-34-23l39 59','none','#657a7a',1)+acRect(19,42,36,10,2,'#253f43','#647d7b')+acRect(-60,-42,33,9,2,'#333e3c','#69756e')+acPath('M-62-53v-26c0-13 110-13 110 0v26Z','#aebbb4','#596b63')+acEllipse(-7,-80,55,11,'#d0d9ce','#718579')+[-41,-18,5,28].map((x,i)=>acEllipse(x,-68,11,19,['#858b85','#bcb6a4','#b5b2a4','#909b91'][i],'#657166')+acEllipse(x,-68,4,8,'#65756c','#b4c3b6')).join('')+acPath('M-61-78v23H48v-23','none','#e1e6dc',1.4)+acPath('M-51-53H38','none','#6c8075',2)),
};


// Exact supplier variants share a drawing only when their physical form matches.
const supplyProfiles = {"onlyscrews-workshop-supplies--pu-gloves":["gloves",{}],"onlyscrews-workshop-supplies--prima-goggles":["goggles",{}],"onlyscrews-workshop-supplies--spring-10-20-1p2":["spring",{"diameter":10.0,"length":20.0,"wire":1.2}],"onlyscrews-workshop-supplies--spring-8-15-1":["spring",{"diameter":8.0,"length":15.0,"wire":1.0}],"onlyscrews-workshop-supplies--spring-6-15-0p8":["spring",{"diameter":6.0,"length":15.0,"wire":0.8}],"onlyscrews-workshop-supplies--spring-5-10-0p6":["spring",{"diameter":5.0,"length":10.0,"wire":0.6}],"onlyscrews-workshop-supplies--spring-4-10-0p5":["spring",{"diameter":4.0,"length":10.0,"wire":0.5}],"onlyscrews-workshop-supplies--cable-tie-3p6-300":["cable-ties",{}],"onlyscrews-workshop-supplies--cable-tie-3p6-250":["cable-ties",{}],"onlyscrews-workshop-supplies--cable-tie-3p6-200":["cable-ties",{}],"onlyscrews-workshop-supplies--cable-tie-3p6-150":["cable-ties",{}],"onlyscrews-workshop-supplies--cable-tie-2p5-100":["cable-ties",{}],"onlyscrews-workshop-supplies--magnet-bar-10-10-2":["bar-magnets",{}],"onlyscrews-workshop-supplies--magnet-bar-20-10-2":["bar-magnets",{}],"onlyscrews-workshop-supplies--magnet-bar-10-5-2":["bar-magnets",{}],"onlyscrews-workshop-supplies--magnet-disc-4-2":["disc-magnets",{}],"onlyscrews-workshop-supplies--magnet-disc-5-3":["disc-magnets",{}],"onlyscrews-workshop-supplies--magnet-disc-10-2":["disc-magnets",{}],"onlyscrews-workshop-supplies--magnet-disc-8-3":["disc-magnets",{}],"onlyscrews-workshop-supplies--magnet-disc-6-3":["disc-magnets",{}]};
const supplyDrawings = {
 'spring':o=>{
  const width=30+o.diameter*3, height=45+o.length*2;
  return `<g transform="translate(120 84) rotate(-16)"><ellipse cx="0" cy="${-height/2}" rx="${width/2}" ry="8" fill="none" stroke="#657780" stroke-width="6"/>${Array.from({length:7},(_,i)=>`<path d="M${-width/2} ${-height/2+i*height/7}c0 20 ${width} 20 ${width} 0" fill="none" stroke="#adbcc3" stroke-width="${3+o.wire}"/><path d="M${-width/2} ${-height/2+i*height/7}c0 20 ${width} 20 ${width} 0" fill="none" stroke="#e9eff0" stroke-width="1.2"/>`).join('')}<ellipse cx="0" cy="${height/2}" rx="${width/2}" ry="8" fill="none" stroke="#7f929b" stroke-width="5"/></g>`;
 },
 'cable-ties':o=>[[-22,-8,-12],[14,8,12]].map(([x,y,a])=>`<g transform="translate(${120+x} ${82+y}) rotate(${a})"><path d="M-9 47V-47H9V47L0 58Z" fill="#e4e9e6" stroke="#94a6a5" stroke-width="1.2"/>${Array.from({length:13},(_,i)=>`<path d="M-5 ${-35+i*6}H5" stroke="#bdc9c5"/>`).join('')}<rect x="-16" y="-57" width="32" height="20" rx="3" fill="#f0f3ee" stroke="#93a6a3"/><path d="M-8-48H8" stroke="#6c817f" stroke-width="4"/></g>`).join(''),
 'bar-magnets':o=>[[-25,-8],[23,20]].map(([x,y])=>`<g transform="translate(${120+x} ${79+y}) rotate(-17)"><path d="M-40-20H40V15H-40Z" fill="#c7d2d5" stroke="#758b94"/><path d="M-40 15H40L49 6V-29L40-20V15" fill="#8fa3ac" stroke="#667e88"/><path d="M-40-20-31-29H49L40-20Z" fill="#edf2f1" stroke="#879da5"/><path d="M-33-11H31" stroke="#f4f7f4" stroke-width="3"/></g>`).join(''),
 'disc-magnets':o=>[[-26,-8],[26,23]].map(([x,y])=>`<g transform="translate(${120+x} ${76+y}) rotate(-15)"><path d="M-35-8V9c0 24 70 24 70 0V-8" fill="#8fa4ac" stroke="#6a818b"/><ellipse cy="-8" rx="35" ry="18" fill="#d5dfe0" stroke="#7b939d"/><path d="M-25-12c8-10 32-12 47-3" fill="none" stroke="#f4f7f4" stroke-width="3"/></g>`).join(''),
 'goggles':()=>`<path d="M44 72C51 31 190 31 198 72" fill="none" stroke="#596e7b" stroke-width="9"/><path d="M42 67Q75 50 109 65H131Q165 50 198 67L191 108Q156 126 128 102H111Q81 126 48 108Z" fill="#dce8ed" fill-opacity=".8" stroke="#7f99a7" stroke-width="5"/><path d="M58 74Q77 66 99 74M143 74Q166 65 184 74" fill="none" stroke="#f5f8f7" stroke-width="6"/><path d="M110 99Q120 83 130 99" fill="none" stroke="#718b9b" stroke-width="4"/>`,
 'gloves':()=>`<g transform="translate(83 81) rotate(-15)"><path d="M-26 47V9L-39-8Q-42-20-33-21L-20-9V-43Q-18-54-10-45V-13L-8-53Q-4-63 2-53V-14L7-49Q12-58 16-48V-12L21-37Q28-45 31-34V15Q28 34 20 47Z" fill="#303a40" stroke="#202c34" stroke-width="2"/><path d="M-26 39H21V58H-26Z" fill="#636f76" stroke="#35434c"/><path d="M-17-11V24M-5-10V27M7-9V26M18-7V22" stroke="#52616a" stroke-width="2"/></g><g transform="translate(156 85) rotate(12)"><path d="M-26 47V9L-39-8Q-42-20-33-21L-20-9V-43Q-18-54-10-45V-13L-8-53Q-4-63 2-53V-14L7-49Q12-58 16-48V-12L21-37Q28-45 31-34V15Q28 34 20 47Z" fill="#3d474e" stroke="#202c34" stroke-width="2"/><path d="M-26 39H21V58H-26Z" fill="#6d787e" stroke="#35434c"/></g>`,
};

const componentProfiles = {...cableProfiles, ...electronicsProfiles, ...workshopProfiles, ...accessoryProfiles, ...supplyProfiles};
const componentDrawings = {...cableDrawings, ...electronicsDrawings, ...workshopDrawings, ...accessoryDrawings, ...supplyDrawings};
// Explicit identity selection prevents unrelated parts sharing a category placeholder.
export function artworkProfile(id) { return componentProfiles[id] || null; }
export function artwork(_category, id='') {
 const profile=artworkProfile(id);
 const drawing=profile && componentDrawings[profile[0]];
 const body=drawing ? drawing(profile[1] || {}) : '<rect x="75" y="34" width="90" height="94" rx="6" fill="#e7ecef" stroke="#a7b5bd" stroke-width="1.5" stroke-dasharray="5 5"/><path d="M101 65h38m-38 12h29m-29 12h34" stroke="#acb9bf" stroke-width="3"/>';
 return `<svg viewBox="0 0 240 164" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-artwork="${drawing?profile[0]:'unidentified'}"><ellipse cx="120" cy="147" rx="65" ry="5" fill="#234761" opacity=".07"/>${body}</svg>`;
}
