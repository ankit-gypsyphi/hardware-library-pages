// Symbolic vector illustrations, not photographs or wiring diagrams.
export function icon(name) {
 const paths={grid:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',bookmark:'M6 3h12v18l-6-4-6 4z',book:'M3 4h6l3 2 3-2h6v15h-6l-3 2-3-2H3z M12 6v15',search:'M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m5-2 6 6',arrow:'M4 12h16m-6-6 6 6-6 6',external:'M14 3h7v7m0-7L10 14 M10 3H3v18h18v-7',box:'m3 7 9-5 9 5v10l-9 5-9-5z M3 7l9 5 9-5 M12 12v10',layers:'m2 8 10-6 10 6-10 6z M2 13l10 6 10-6 M2 18l10 6 10-6',code:'m8 6-6 6 6 6m8-12 6 6-6 6m-3-16-2 20',download:'M12 3v12m-5-5 5 5 5-5 M3 16v5h18v-5',list:'M8 5h13M8 12h13M8 19h13M3 5h1M3 12h1M3 19h1',info:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M12 11v6m0-10v1',close:'m6 6 12 12M6 18 18 6',chip:'M6 6h12v12H6z M9 1v5m6-5v5M9 18v5m6-5v5M1 9h5m-5 6h5m12-6h5m-5 6h5',sensor:'M12 12v9M7 7a7 7 0 0 0 0 10m10-10a7 7 0 0 1 0 10M3 3a13 13 0 0 0 0 18M21 3a13 13 0 0 1 0 18',display:'M2 3h20v14H2z M12 17v5m-5 0h10',power:'m13 2-9 12h7l-1 8 10-12h-8z',tool:'m14 4 6-2-2 6-4 1-9 12-3-3 11-10z',printer:'M5 3h14v18H5z M5 8h14M12 8v5m-3 4h6',wifi:'M2 7a16 16 0 0 1 20 0M5 11a11 11 0 0 1 14 0M8 15a6 6 0 0 1 8 0M12 19h.01',github:'M9 19c-5 1-5-2-7-2m14 6v-4c0-1-.3-2-1-2 4-.5 7-2 7-7 0-2-.5-3-2-4 0-1 0-3-1-4-2 0-3 1-4 2-2-.5-4-.5-6 0-1-1-2-2-4-2-1 1-1 3-1 4-1.5 1-2 2-2 4 0 5 3 6.5 7 7-.7 0-1 1-1 2v4',check:'m4 12 5 5L20 6'};
 return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${(paths[name]||paths.chip).split(' M').map((d,i)=>`<path d="${i?'M':''}${d}"/>`).join('')}</svg>`;
}
export const categoryIcons={'Controllers & computing':'chip','Sensors & input':'sensor','Wiring & connections':'layers','Components & prototyping':'chip','Mechanical hardware':'tool','3D printing':'printer','Soldering & rework':'tool','Tools & workshop':'tool','Smart home & networking':'wifi','Compute':'chip','Sensors':'sensor','Displays':'display','Power':'power','Fabrication':'printer','Workshop':'tool','Accessories':'layers','Connected devices':'wifi','Fasteners':'tool','Cables & connectors':'layers','Prototyping':'chip'};

// Original component silhouettes; illustrative geometry, never a pin/wiring diagram.
const caMetal='#b9c5cb', caEdge='#4f616a', caBlack='#303c43';
const caSocket=(x,y,female=false)=>`<g transform="translate(${x} ${y})"><rect width="12" height="27" rx="2" fill="${caBlack}"/><path d="M3 3v17" stroke="#58656b" stroke-width="2"/>${female?'<rect x="3" y="0" width="6" height="5" fill="#10191e" stroke="#9ca7a7" stroke-width="1"/>':'<path d="M6 -14V0" stroke="#d7b76a" stroke-width="4"/><path d="M5 -13V-1" stroke="#f5df9f"/>'}</g>`;
const caClip=(color)=>`<g transform="rotate(-16 71 38)"><path d="M39 26h32l17 10-17 11H39z" fill="${color}" stroke="${caEdge}" stroke-width="1.2"/><path d="m40 27 21 2-5 15H39" fill="#ffffff" opacity=".15"/><path d="m71 31 25 3 17 6-3 5-14-4-25 1z" fill="${caMetal}" stroke="${caEdge}" stroke-width="1.2"/><path d="m82 42 4-3 4 3 4-3 4 3 4-2" stroke="#61717a" stroke-width="1.4"/><circle cx="76" cy="37" r="3" fill="#e5edef" stroke="${caEdge}"/><path d="M39 31v12" stroke="${color}" stroke-width="6"/><path d="m76 33 19 3" stroke="#eff4f4" stroke-width="2"/></g>`;
const caHoles=(x,y,cols,rows,step=7)=>Array.from({length:rows},(_,r)=>Array.from({length:cols},(_,c)=>`<circle cx="${x+c*step}" cy="${y+r*step}" r="1.55" fill="#58676a"/>`).join('')).join('');
const cableProfiles={
 'zh-04y-4pin-cable':['zhHarness',{}],
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
 zhHarness:()=>`<g transform="rotate(-10 120 82)">${['#687c80','#a6b3ac','#879797','#c6cec6'].map((c,i)=>`<path d="M${93+i*14} 62C${72+i*16} 100 ${106+i*15} 108 ${91+i*17} 135" stroke="${c}" stroke-width="4" fill="none"/><path d="M${91+i*17} 135v10" stroke="#c7bc95" stroke-width="2"/>`).join('')}<rect x="78" y="24" width="78" height="42" rx="4" fill="#e5e6dc" stroke="#73858a" stroke-width="1.5"/><rect x="91" y="19" width="51" height="9" rx="2" fill="#cbd0c7" stroke="#73858a"/>${[0,1,2,3].map(i=>`<rect x="${86+i*17}" y="33" width="12" height="15" rx="1.5" fill="#475a61"/><path d="M${92+i*17} 38v6" stroke="#cdb77d" stroke-width="2"/>`).join('')}<path d="M82 54h69" stroke="#b0bbb5" stroke-width="2"/></g>`,
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
 'robodo-ttp223b-touch-sensor':['ttp223bTouch',{}],
 'robodo-sg90-micro-servo':['sg90Servo',{}],
 'mpu9250-imu-module':['mpu9250Module',{}],
 'arduino-starter-kit-uno-r3':['arduinoStarterBox',{}],
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
 'bonka-1000mah-1s-lipo':['bonkaLipo',{capacity:'1000'}],
 'bonka-1500mah-1s-lipo':['bonkaLipo',{capacity:'1500'}],
 'tp4056-charger':['elCharger',{}],
 'tools-and-consumables--ams1117':['elRegulator',{}],
};
const electronicsDrawings={
 ttp223bTouch:()=>elGroup(
  elRect(63,25,119,119,'#245c7b',1,'#20445b',1.4)+
  [[72,34],[173,34],[72,135],[173,135]].map(([x,y])=>elHole(x,y)).join('')+
  elRect(58,62,17,39,'#27343e',1)+[0,1,2].map(i=>elPath(`M40 ${69+i*12}H63`,'#c8c1a3',3)).join('')+
  elChip(82,55,14,24)+elSmd(80,91,11)+elSmd(82,104,9)+
  elRect(81,118,10,6,'#b5ce83',1,'#d5e1ba',1)+
  [30,25,20,15,10,5].map(r=>elCircle(139,83,r,'none','#e8e6d3',1.6)).join('')+
  elCircle(139,83,1.5,'#e8e6d3','none')+
  elPath('M105 47v73M107 47h12M107 119h12','#b9d5d9',.8)+
  `<text x="124" y="134" text-anchor="middle" fill="#e0eceb" font-family="Arial,sans-serif" font-size="8">TTP223B</text>`,-11),
 // Listing-matched silhouettes; supplied accessories and live function are unverified.
 sg90Servo:()=>elGroup(
  ['#8c5038','#ce493d','#e3a534'].map((c,i)=>elPath(`M148 ${111+i*4}C208 ${133+i*2} 208 ${67+i*3} ${188+i*3} 37C${161+i*3} 2 ${149+i*3} 41 ${172+i*3} 43L199 ${31+i*4}`,c,3.7)).join('')+
  elRect(194,24,26,19,'#242c31',2)+[0,1,2].map(i=>elRect(212,27+i*5,5,3,'#d2c6a1',0,'none')).join('')+
  elPath('M65 60L80 49H152V126L139 138H65Z','#164582',1.3,'#174a9a')+
  elRect(65,60,74,78,'#235cba',2,'#163b78',1.4)+
  elPath('M69 64H134V132H69Z','#467bba',1,'#2f6fc4')+
  elRect(70,39,68,26,'#2864bd',2,'#164582',1.2)+
  elPath('M70 39L83 31H149L138 39Z','#164582',1,'#3876c8')+
  elRect(48,61,112,9,'#2252a2',1,'#163b78',1)+
  elCircle(57,65,3,'#182f56')+elCircle(151,65,3,'#182f56')+
  elCircle(113,34,14,'#1b4893')+elRect(108,20,10,16,'#edece2',1,'#adb6b8',.8)+
  elPath('M74 72v54M132 73v51','#78a4d2',1.3)+
  elRect(79,83,51,42,'#303426',0,'#d2c794',1)+
  `<text x="104" y="97" text-anchor="middle" fill="#e7e1b8" font-family="Arial,sans-serif" font-size="8">MICRO SERVO</text><text x="104" y="111" text-anchor="middle" fill="#e7e1b8" font-family="Arial,sans-serif" font-size="12" font-weight="700">SG90</text><text x="104" y="121" text-anchor="middle" fill="#e7e1b8" font-family="Arial,sans-serif" font-size="7">9g</text>`,-8),
 mpu9250Module:()=>elGroup(
  elRect(33,34,174,103,'#2057b5',2,'#173b7c',1.3)+
  elPath('M37 38H203V133H37Z','#5c8cce',.8)+
  Array.from({length:10},(_,i)=>elCircle(45+i*16.6,45,5,'#d2b574','#a2864b',.7)+elCircle(45+i*16.6,45,3.2,'#263a54','none')).join('')+
  elHole(49,120)+elHole(191,120)+
  [0,1,2].map(i=>elPath(`M${55+i*8} 56v${29+i*8}h${46-i*8}M${181-i*8} 57v${28+i*8}h-${41-i*8}`,'#3879c9',1.2)).join('')+
  elChip(106,72,28,28)+elRect(162,79,25,16,'#28313a',1)+
  [[72,69],[85,69],[73,99],[87,99],[144,75],[144,104],[171,62]].map(([x,y])=>elSmd(x,y,8)).join('')+
  elRect(105,109,31,10,'#c3bb91',1,'#dce0cf',1)+
  `<text x="120" y="130" text-anchor="middle" fill="#e6edf0" font-family="Arial,sans-serif" font-size="9" font-weight="700">MPU-9250/6500</text>`,-8),
 // Back-panel packaging from the owner photo; the enclosed components are unverified.
 arduinoStarterBox:()=>elGroup(
  elPath('M27 32H202L214 43V133H39L27 122Z','#8f654d',1.3,'#ac4632')+
  elRect(27,28,175,96,'#e9e6d9',2,'#b8b2a1',1.2)+
  elPath('M30 31H199M30 31V120','#f8f5e9',1.8)+
  `<text x="37" y="45" fill="#716e60" font-family="Arial,sans-serif" font-size="10" font-weight="700">ARDUINO STARTER KIT</text>
   <text x="37" y="56" fill="#a35c47" font-family="Arial,sans-serif" font-size="6">15 PROJECTS · UNO R3</text>`+
  Array.from({length:7},(_,i)=>elPath(`M37 ${65+i*5}h${58-i%3*7}M113 ${65+i*5}h${35-i%2*5}M157 ${65+i*5}h${31-i%3*4}`,'#999787',1.4)).join('')+
  elRect(36,106,112,11,'#817e6b',0,'none')+
  `<text x="40" y="114" fill="#f5f0df" font-family="Arial,sans-serif" font-size="7" font-weight="700">ARDUINO.CC/STARTERKIT</text>`+
  elPath('M165 124q14-24 28 0','#bbb6a5',.9)+
  elPath('M39 124v9M202 32v92l12 9','#793c2d',1),-6),
 bonkaLipo:o=>elGroup(elRect(65,43,110,96,'#b8c4c8',5)+elRect(69,46,102,89,'#dce1df',3)+elRect(65,43,110,10,'#b8a46c',2)+elPath('M84 43C69 18 95 16 103 26M98 43C92 22 117 20 124 28','#586c72',3)+elRect(77,65,86,58,'#314b50',3)+`<text x="120" y="82" text-anchor="middle" fill="#e0e7de" font-family="Arial,sans-serif" font-size="11" font-weight="700">BONKA</text><text x="120" y="101" text-anchor="middle" fill="#e0e7de" font-family="Arial,sans-serif" font-size="15" font-weight="700">${o.capacity}</text><text x="120" y="115" text-anchor="middle" fill="#c5d4ce" font-family="Arial,sans-serif" font-size="9">mAh · 1S · 3.7 V</text>`+elPath('M72 56v72M168 56v72','#f1f3eb',2),-8),
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
 'aliexpress-prototyping-stock--screw-kit':['roundScrewTray',{}],
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
 roundScrewTray:()=>acEllipse(120,97,71,49,'#bdc7cb','#819299',2)+acEllipse(120,82,71,49,'#e4e9e8','#a4b3b7',2)+Array.from({length:12},(_,i)=>{
  const a=i*Math.PI/6,x=120+Math.cos(a)*66,y=82+Math.sin(a)*44;
  const hardware=i<2?acNut({}):acScrew({length:28+(i%4)*6});
  return acPath(`M120 82L${x} ${y}`,'none','#a4b2b5',1.4)+acGroup(120+Math.cos(a+.25)*43,82+Math.sin(a+.25)*28,.28,i*30,hardware);
 }).join('')+acEllipse(120,82,13,9,'#e7ebea','#8fa1a7',1.5)+acCircle(120,82,3,'#8b9da4','#6e838b'),
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

const intakeProfiles = {"onlyscrews-workshop-supplies--m2-washer": ["intakeNuts", {"washer": true}], "onlyscrews-workshop-supplies--m2-nut": ["intakeNuts", {"washer": false}], "onlyscrews-workshop-supplies--m2-pan-4": ["intakeScrews", {"length": 4}], "onlyscrews-workshop-supplies--m2-pan-5": ["intakeScrews", {"length": 5}], "onlyscrews-workshop-supplies--m2-pan-6": ["intakeScrews", {"length": 6}], "onlyscrews-workshop-supplies--m2-pan-8": ["intakeScrews", {"length": 8}], "onlyscrews-workshop-supplies--m2-pan-10": ["intakeScrews", {"length": 10}], "onlyscrews-workshop-supplies--m2-pan-12": ["intakeScrews", {"length": 12}], "onlyscrews-workshop-supplies--m2-pan-16": ["intakeScrews", {"length": 16}], "onlyscrews-workshop-supplies--m2-pan-20": ["intakeScrews", {"length": 20}], "tools-and-consumables--amicitools-insert-tips": ["insertTips", {"brass": true}], "tools-and-consumables--serplex-insert-tips": ["insertTips", {"brass": false}], "tools-and-consumables--amicisense-hygrometer": ["hygrometer", {}], "tools-and-consumables--build-plate-glue": ["glueStick", {}], "tools-and-consumables--serplex-electric-vacuum": ["vacuumKit", {"electric": true}], "tools-and-consumables--serplex-manual-vacuum": ["vacuumKit", {"electric": false}], "tools-and-consumables--sunkizzrs-deburring": ["deburring", {}], "tools-and-consumables--aptechdeals-glue-gun": ["glueGun", {}]};
accessoryProfiles["bambu-filaments--pla-jade-white"] = ["acSpool", {color:"#f1f0e6",material:"PLA Basic"}];
// Original silhouettes for the newly recorded workshop tools; not photographs or pack counts.
const intakeDrawings = {
 intakeScrews:o=>acGroup(92,44,1,-23,acScrew({length:20+o.length*2.5}))+acGroup(159,55,.8,23,acScrew({length:20+o.length*2.5})),
 intakeNuts:o=>acGroup(88,77,1.4,-12,acNut({washer:o.washer}))+acGroup(156,99,1.2,16,acNut({washer:o.washer})),
 insertTips:o=>acRect(44,42,151,87,7,'#283b43','#657f88')+acRect(50,48,139,74,3,'#1c2b31','#3e5862')+Array.from({length:5},(_,i)=>{
  const x=64+i*27,w=7+i*1.5;
  return acRect(x-7,57,16,49,3,'#17262c','#40545d')+acPath(`M${x-w/2} 59h${w}v25h3v15h-3v10h-${w}V99h-3V84h3Z`,o.brass?'#c6a353':'#b6c5cd',o.brass?'#81652f':'#657d87')+acEllipse(x,59,w/2,2,'#f0dab0','#9b7b3b');
 }).join('')+acText(72,138,7,o.brass?'BRASS INSERT TIPS':'HEAT-SET TIPS'),
 hygrometer:()=>acRect(55,39,130,86,10,'#e1e4de','#8e9b97',2)+acRect(65,49,109,58,4,'#aebdad','#7b8e7d')+acText(74,77,22,'26.8','#344d43')+acText(146,66,7,'°C','#344d43')+acText(109,98,16,'48%','#344d43')+acPath('M76 116h20m9 0h20m9 0h20','none','#94a19a',2)+acPath('M184 68c30 0 21 38 35 38','none','#444e50',2)+acRect(210,98,9,21,4,'#e0e3dd','#8b9a94'),
 glueStick:()=>acGroup(110,84,1,-15,acRect(-23,-50,46,96,7,'#d7e2d7','#768d80')+acRect(-23,-50,46,24,5,'#7aaa74','#526e4f')+acRect(-21,-21,42,44,2,'#eef0e6','#a3b5a3')+acText(-15,-4,9,'BUILD')+acText(-15,10,9,'GLUE')+acRect(-23,39,46,12,3,'#8eaf87','#6b8765')),
 vacuumKit:o=>{
  const bags=acPath('M39 43h93l5 88H34Z','#dae6df','#809c95',1.5)+acPath('M42 50h85M42 55h85','none','#779d8c',2)+acPath('M43 66h78v53H41Z','#c5d8ce','#9ab4a8',1)+acCircle(103,86,10,'#a7c6bc','#6c9185')+acCircle(103,86,4,'#dcece4','#6c9185')+acEllipse(73,94,21,21,'#aabdb3','#7b9a8b')+acEllipse(73,94,10,11,'#d6e3da','#7b9a8b');
  const pump=o.electric?acGroup(175,85,1,15,acRect(-17,-47,34,79,13,'#344e61','#233c4d')+acEllipse(0,-46,15,5,'#7891a0','#38586a')+acRect(-8,31,16,18,4,'#acbbc1','#627e8e')+acCircle(0,-16,6,'#9cb7aa','#638779')+acPath('M-7 10H7','none','#8aa7b3',2)):acGroup(173,82,1,-15,acRect(-12,-26,24,61,6,'#e0e6e4','#7e9694')+acRect(-5,-49,10,24,1,'#91a5a8','#5c777b')+acRect(-23,-57,46,12,5,'#4787a2','#2d637a')+acRect(-16,31,32,14,3,'#4787a2','#2d637a'));
  return bags+pump;
 },
 deburring:()=>acGroup(110,93,1,-35,acRect(-19,-41,38,91,10,'#397dac','#285775')+acRect(-14,-30,28,64,5,'#4995c7','#2e6c96')+acPath('M-9-19v40M0-21v45M9-19v40','none','#82b3cd',2)+acRect(-11,-50,22,17,3,'#afbfc8','#647c89')+acPath('M0-51v-22c0-14 22-17 24-2 1 7-6 12-12 9','none','#c1cdd1',6))+[0,1,2].map(i=>acPath(`M${167+i*10} 112v-27c0-8 12-10 14-2`,'none','#a8bac3',3)).join(''),
 glueGun:()=>acPath('M51 57h103l22 12-6 30h-41l-11 36H87l9-44H53Z','#3584ad','#255a77',2)+acPath('M69 64h62l-4 21H72Z','#65a4c2','#347b9f')+acPath('M168 69l28 11-27 7Z','#bac7cd','#6d8591')+acPath('M131 96l-6 18h-16l6-23Z','#e6a33d','#ae7328',2)+acRect(26,61,42,12,5,'#e2e9d7','#9cac9a')+acPath('M64 95l-10 33h26','none','#a9bac2',3)+acPath('M91 134c-21 3-18 12-32 12','none','#45585f',3)+acPath('M134 66h13m-16 7h13m-16 7h13','none','#256383',2),
};

const componentProfiles = { ...intakeProfiles,...cableProfiles, ...electronicsProfiles, ...workshopProfiles, ...accessoryProfiles, ...supplyProfiles};
const componentDrawings = { ...intakeDrawings,...cableDrawings, ...electronicsDrawings, ...workshopDrawings, ...accessoryDrawings, ...supplyDrawings};
// Explicit identity selection prevents unrelated parts sharing a category placeholder.
export function artworkProfile(id) { return componentProfiles[id] || null; }
export function artwork(_category, id='') {
 const profile=artworkProfile(id);
 const drawing=profile && componentDrawings[profile[0]];
 const body=drawing ? drawing(profile[1] || {}) : '<rect x="75" y="34" width="90" height="94" rx="6" fill="#e7ecef" stroke="#a7b5bd" stroke-width="1.5" stroke-dasharray="5 5"/><path d="M101 65h38m-38 12h29m-29 12h34" stroke="#acb9bf" stroke-width="3"/>';
 return `<svg viewBox="0 0 240 164" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-artwork="${drawing?profile[0]:'unidentified'}"><ellipse cx="120" cy="147" rx="65" ry="5" fill="#234761" opacity=".07"/>${body}</svg>`;
}

// Arduino kit identification references; source/limits: component illustration-reference-2026-11-20.json.
export const kitPartProfiles = [
 {
  "key": "book",
  "part": "Projects book",
  "detailMatch": null,
  "kind": "book",
  "w": 150,
  "h": 210,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Printed projects book; illustrated cover is representative."
 },
 {
  "key": "uno",
  "part": "Arduino UNO Rev. 3",
  "detailMatch": null,
  "kind": "uno",
  "w": 68.6,
  "h": 53.4,
  "measured": false,
  "dimensioned": true,
  "size": "68.6 × 53.4 mm board",
  "source": "https://store.arduino.cc/products/arduino-uno-rev3",
  "hint": "Teal board, long socketed chip, square USB-B port and black barrel jack."
 },
 {
  "key": "usb",
  "part": "USB cable",
  "detailMatch": null,
  "kind": "usb",
  "w": 95,
  "h": 62,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Reference USB-A to USB-B cable; received connectors and cable length unverified."
 },
 {
  "key": "breadboard",
  "part": "Breadboard",
  "detailMatch": null,
  "kind": "breadboard",
  "w": 82,
  "h": 53,
  "measured": false,
  "dimensioned": true,
  "size": "82 × 53 mm body",
  "source": "https://www.arduino.cc/en/uploads/Main/BreadboardSolidWire.pdf",
  "hint": "White 400-point board, centre channel and red/blue power rails."
 },
 {
  "key": "base",
  "part": "Assembly base",
  "detailMatch": null,
  "kind": "base",
  "w": 150,
  "h": 100,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Wooden mounting base; cut-outs and outline are representative."
 },
 {
  "key": "battery-snap",
  "part": "9 V battery snap",
  "detailMatch": null,
  "kind": "snap",
  "w": 26,
  "h": 13,
  "measured": false,
  "dimensioned": true,
  "size": "26 × 13 mm body",
  "source": "https://www.arduino.cc/documents/datasheets/9vBatterySnap.PDF",
  "hint": "Black snap with two different metal terminals and red/black wires."
 },
 {
  "key": "solid-wire",
  "part": "Solid-core jumper wires",
  "detailMatch": null,
  "kind": "solidWire",
  "w": 75,
  "h": 32,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "A sample of the assorted solid-core wires; colours and lengths vary."
 },
 {
  "key": "stranded-wire",
  "part": "Stranded jumper wires",
  "detailMatch": null,
  "kind": "strandedWire",
  "w": 65,
  "h": 32,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "One red and one black flexible wire; length and ends unverified."
 },
 {
  "key": "phototransistor",
  "part": "Phototransistors",
  "detailMatch": null,
  "kind": "photo",
  "w": 5,
  "h": 8.6,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative two-lead phototransistor. Exact package unknown; may resemble a clear LED."
 },
 {
  "key": "potentiometer",
  "part": "Potentiometers",
  "detailMatch": null,
  "kind": "pot",
  "w": 10,
  "h": 10,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative three-terminal trimmer with an adjustment shaft; supplied style unverified."
 },
 {
  "key": "pushbutton",
  "part": "Pushbuttons",
  "detailMatch": null,
  "kind": "button",
  "w": 6.2,
  "h": 6.2,
  "measured": false,
  "dimensioned": true,
  "size": "6.2 × 6.2 mm body",
  "source": "https://www.arduino.cc/documents/datasheets/Button.pdf",
  "hint": "Square tactile switch with a round plunger and four legs; plunger height varies."
 },
 {
  "key": "tmp36",
  "part": "Temperature sensor",
  "detailMatch": null,
  "kind": "tmp36",
  "w": 4.83,
  "h": 4.825,
  "measured": false,
  "dimensioned": true,
  "size": "≈4.83 × 4.83 mm body",
  "source": "https://www.arduino.cc/en/uploads/Main/TemperatureSensor.pdf",
  "hint": "Flat-faced black TO-92 body with three legs. Match the marking, not just the shape."
 },
 {
  "key": "tilt",
  "part": "Tilt sensor",
  "detailMatch": null,
  "kind": "tilt",
  "w": 6.7,
  "h": 9.8,
  "measured": false,
  "dimensioned": true,
  "size": "6.7 × 9.8 mm side",
  "source": "https://content.arduino.cc/assets/TiltSensor.PDF",
  "hint": "BL-XT660 reference: black rectangular case and four legs. Received model unverified."
 },
 {
  "key": "lcd",
  "part": "Character LCD",
  "detailMatch": null,
  "kind": "lcd",
  "w": 80,
  "h": 36,
  "measured": false,
  "dimensioned": true,
  "size": "80 × 36 mm board",
  "source": "https://content.arduino.cc/assets/LCDscreen.PDF",
  "hint": "Green board, metal bezel and a 16 × 2 character window."
 },
 {
  "key": "led-white",
  "part": "LED — bright white",
  "detailMatch": null,
  "kind": "led",
  "w": 5,
  "h": 8.7,
  "measured": false,
  "dimensioned": true,
  "size": "Ø5 × 8.7 mm lens",
  "source": "https://content.arduino.cc/assets/LED(white).pdf",
  "hint": "Clear lens, two legs; white is its emitted light, not an opaque white case.",
  "color": "#dce8e8",
  "legs": 2
 },
 {
  "key": "led-rgb",
  "part": "LED — RGB",
  "detailMatch": null,
  "kind": "led",
  "w": 5,
  "h": 7.7,
  "measured": false,
  "dimensioned": true,
  "size": "Ø5 × 7.7 mm lens",
  "source": "https://content.arduino.cc/assets/LED(RGB).pdf",
  "hint": "Frosted clear lens and four legs; emits red, green and blue.",
  "color": "#e5e8df",
  "legs": 4
 },
 {
  "key": "led-red",
  "part": "LED — red",
  "detailMatch": null,
  "kind": "led",
  "w": 5,
  "h": 8.6,
  "measured": false,
  "dimensioned": true,
  "size": "Ø5 × 8.6 mm lens",
  "source": "https://content.arduino.cc/assets/LED(red).pdf",
  "hint": "Red lens and two legs; flange and internal metal cup shown.",
  "color": "#cf302e",
  "legs": 2
 },
 {
  "key": "led-green",
  "part": "LED — green",
  "detailMatch": null,
  "kind": "led",
  "w": 5,
  "h": 8.6,
  "measured": false,
  "dimensioned": true,
  "size": "Ø5 × 8.6 mm lens",
  "source": "https://content.arduino.cc/assets/Leds(Green).pdf",
  "hint": "Green lens and two legs.",
  "color": "#47a858",
  "legs": 2
 },
 {
  "key": "led-yellow",
  "part": "LED — yellow",
  "detailMatch": null,
  "kind": "led",
  "w": 5,
  "h": 8.6,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative yellow-lens LED; exact body dimensions unverified.",
  "color": "#ecc234",
  "legs": 2
 },
 {
  "key": "led-blue",
  "part": "LED — blue",
  "detailMatch": null,
  "kind": "led",
  "w": 5,
  "h": 8.6,
  "measured": false,
  "dimensioned": true,
  "size": "Ø5 × 8.6 mm lens",
  "source": "https://content.arduino.cc/assets/LED(blue).pdf",
  "hint": "Blue lens and two legs.",
  "color": "#3276bd",
  "legs": 2
 },
 {
  "key": "dc-motor",
  "part": "Small DC motor",
  "detailMatch": null,
  "kind": "motor",
  "w": 30.5,
  "h": 24,
  "measured": false,
  "dimensioned": true,
  "size": "30.5 mm long × Ø24 mm body",
  "source": "https://content.arduino.cc/assets/DCmotor.PDF",
  "hint": "Reference metal motor can with output shaft/pinion; supplied shaft accessory unverified."
 },
 {
  "key": "servo",
  "part": "Small servo motor",
  "detailMatch": null,
  "kind": "servo",
  "w": 22.9,
  "h": 22.2,
  "measured": false,
  "dimensioned": true,
  "size": "22.9 × 22.2 mm side; 12.3 mm deep",
  "source": "https://content.arduino.cc/assets/servoMotor.PDF",
  "hint": "Black SM-S2309S reference body, white horn and three-wire lead; actual servo model unverified."
 },
 {
  "key": "piezo",
  "part": "Piezo capsule",
  "detailMatch": null,
  "kind": "piezo",
  "w": 22,
  "h": 22,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative black piezo capsule with a sound opening; exact dimensions unverified."
 },
 {
  "key": "hbridge",
  "part": "H-bridge motor driver",
  "detailMatch": null,
  "kind": "dip",
  "w": 20,
  "h": 7.1,
  "measured": false,
  "dimensioned": true,
  "size": "20 × 7.1 mm body, maximum",
  "source": "https://content.arduino.cc/assets/H-bridge_motor_driver.PDF",
  "hint": "L293D: long black package with 16 legs and an end notch.",
  "pins": 16,
  "mark": "L293D"
 },
 {
  "key": "opto",
  "part": "Optocoupler",
  "detailMatch": null,
  "kind": "dip",
  "w": 7.3,
  "h": 6.5,
  "measured": false,
  "dimensioned": true,
  "size": "7.3 × 6.5 mm body, nominal",
  "source": "https://www.arduino.cc/documents/datasheets/Optocouplers.pdf",
  "hint": "4N35: short black package with six legs and an orientation dot.",
  "pins": 6,
  "mark": "4N35"
 },
 {
  "key": "mosfet",
  "part": "MOSFET transistors",
  "detailMatch": null,
  "kind": "mosfet",
  "w": 10.415,
  "h": 15.04,
  "measured": false,
  "dimensioned": true,
  "size": "≈10.42 × 15.04 mm body + tab",
  "source": "https://content.arduino.cc/assets/MosfetTransistor.pdf",
  "hint": "IRF520 family: three legs, black body and exposed metal mounting tab."
 },
 {
  "key": "capacitor",
  "part": "Capacitors",
  "detailMatch": null,
  "kind": "capacitor",
  "w": 6.3,
  "h": 11,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative radial 100 µF electrolytic. Stripe marks the negative side; size and voltage unknown."
 },
 {
  "key": "diode",
  "part": "Diodes",
  "detailMatch": null,
  "kind": "diode",
  "w": 4.7,
  "h": 2.35,
  "measured": false,
  "dimensioned": true,
  "size": "≈4.7 × Ø2.35 mm body",
  "source": "https://content.arduino.cc/assets/Diodes.pdf",
  "hint": "1N4007: black axial body with a pale cathode band at one end."
 },
 {
  "key": "gels",
  "part": "Transparent colour gels",
  "detailMatch": null,
  "kind": "gels",
  "w": 70,
  "h": 55,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Three translucent sheets: red, green and blue. Sheet dimensions unknown."
 },
 {
  "key": "header",
  "part": "Male pin strip",
  "detailMatch": null,
  "kind": "header",
  "w": 101.6,
  "h": 2.54,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "One strip with 40 metal pins in a black carrier; actual pitch not verified."
 },
 {
  "key": "resistor-220",
  "part": "Resistors",
  "detailMatch": "220 Ω",
  "kind": "resistor",
  "w": 6.3,
  "h": 2.3,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative 4-band resistor; value colours shown, gold tolerance band is illustrative. Size and tolerance unverified.",
  "bands": [
   "red",
   "red",
   "brown"
  ]
 },
 {
  "key": "resistor-560",
  "part": "Resistors",
  "detailMatch": "560 Ω",
  "kind": "resistor",
  "w": 6.3,
  "h": 2.3,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative 4-band resistor; value colours shown, gold tolerance band is illustrative. Size and tolerance unverified.",
  "bands": [
   "green",
   "blue",
   "brown"
  ]
 },
 {
  "key": "resistor-1k",
  "part": "Resistors",
  "detailMatch": "1 kΩ",
  "kind": "resistor",
  "w": 6.3,
  "h": 2.3,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative 4-band resistor; value colours shown, gold tolerance band is illustrative. Size and tolerance unverified.",
  "bands": [
   "brown",
   "black",
   "red"
  ]
 },
 {
  "key": "resistor-4k7",
  "part": "Resistors",
  "detailMatch": "4.7 kΩ",
  "kind": "resistor",
  "w": 6.3,
  "h": 2.3,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative 4-band resistor; value colours shown, gold tolerance band is illustrative. Size and tolerance unverified.",
  "bands": [
   "yellow",
   "violet",
   "red"
  ]
 },
 {
  "key": "resistor-10k",
  "part": "Resistors",
  "detailMatch": "10 kΩ",
  "kind": "resistor",
  "w": 6.3,
  "h": 2.3,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative 4-band resistor; value colours shown, gold tolerance band is illustrative. Size and tolerance unverified.",
  "bands": [
   "brown",
   "black",
   "orange"
  ]
 },
 {
  "key": "resistor-1m",
  "part": "Resistors",
  "detailMatch": "1 MΩ",
  "kind": "resistor",
  "w": 6.3,
  "h": 2.3,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative 4-band resistor; value colours shown, gold tolerance band is illustrative. Size and tolerance unverified.",
  "bands": [
   "brown",
   "black",
   "green"
  ]
 },
 {
  "key": "resistor-10m",
  "part": "Resistors",
  "detailMatch": "10 MΩ",
  "kind": "resistor",
  "w": 6.3,
  "h": 2.3,
  "measured": false,
  "dimensioned": false,
  "size": "Size not documented",
  "source": null,
  "hint": "Representative 4-band resistor; value colours shown, gold tolerance band is illustrative. Size and tolerance unverified.",
  "bands": [
   "brown",
   "black",
   "blue"
  ]
 }
];

const kpEscape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const kpRect=(x,y,w,h,fill,rx=.3,stroke='none',sw=.15)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const kpCircle=(x,y,r,fill,stroke='none',sw=.15)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const kpLine=(d,color,width=.3)=>`<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
const kpText=(x,y,text,size,fill='#d9dedb',anchor='middle')=>`<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" fill="${fill}" text-anchor="${anchor}">${kpEscape(text)}</text>`;
const kpMany=(n,f)=>Array.from({length:n},(_,i)=>f(i)).join('');
const kpBands={black:'#252629',brown:'#72492c',red:'#c83c32',orange:'#e28737',yellow:'#dfc73c',green:'#328956',blue:'#3b67ba',violet:'#985297'};
export function kitPartProfile(itemId,row){
 if(itemId!=='arduino-starter-kit-uno-r3')return null;
 return kitPartProfiles.find(p=>p.part===row.part&&(!p.detailMatch||p.detailMatch===row.detail))||null;
}
function kpDefinitions(id){return `<defs>
 <linearGradient id="${id}-metal" x2="0" y2="1"><stop stop-color="#8e9699"/><stop offset=".18" stop-color="#eef0ee"/><stop offset=".43" stop-color="#adb7b9"/><stop offset=".72" stop-color="#e1e4e3"/><stop offset="1" stop-color="#7a868a"/></linearGradient>
 <linearGradient id="${id}-dark" x2="1" y2="1"><stop stop-color="#52585b"/><stop offset=".25" stop-color="#303538"/><stop offset=".8" stop-color="#171b1e"/><stop offset="1" stop-color="#414649"/></linearGradient>
 <linearGradient id="${id}-white" x2="0" y2="1"><stop stop-color="#ffffff"/><stop offset=".48" stop-color="#e9e8df"/><stop offset="1" stop-color="#b2b8b5"/></linearGradient>
 <linearGradient id="${id}-gold" x2="1" y2="0"><stop stop-color="#93713c"/><stop offset=".4" stop-color="#edd797"/><stop offset="1" stop-color="#a78343"/></linearGradient>
 <linearGradient id="${id}-glass" x2="1" y2="0"><stop stop-color="#fff" stop-opacity=".55"/><stop offset=".22" stop-color="#fff" stop-opacity=".2"/><stop offset=".7" stop-color="#fff" stop-opacity=".02"/><stop offset="1" stop-color="#16333f" stop-opacity=".25"/></linearGradient>
 </defs>`;}
function kpDrawing(p,id,bodyOnly=false){
 const metal=`url(#${id}-metal)`,dark=`url(#${id}-dark)`,white=`url(#${id}-white)`,gold=`url(#${id}-gold)`,glass=`url(#${id}-glass)`;
 const w=p.w,h=p.h,lead=(d,sw=.45)=>kpLine(d,'#8d9b9f',sw)+kpLine(d,'#e3e8e4',sw*.28);
 switch(p.kind){
 case 'book':return kpRect(3,3,w,h,'#a8b2ad',1)+kpRect(1,1,w-3,h-3,'#ece9df',1)+kpMany(9,i=>kpLine(`M${w-1} ${10+i*21}v14`,'#bfc2ba',.7))+kpRect(0,0,w-4,h-4,'#eae6db',1)+kpRect(0,0,8,h-4,'#a4c5c0',0)+kpText(w/2,32,'ARDUINO',12,'#008b90')+kpText(w/2,52,'PROJECTS BOOK',8,'#008b90')+kpLine('M24 108h35v-24h41v57h27M24 151h27v21h49v-14h27','#d75d36',1.2)+kpCircle(59,108,4,'none','#d75d36',1)+kpCircle(100,141,4,'none','#d75d36',1)+kpText(w/2,191,'STARTER KIT',7,'#606963');
 case 'uno':{
  const sockets=(x,y,n)=>kpRect(x,y,n*2.54,2.7,dark,.2)+kpMany(n,i=>kpRect(x+.65+i*2.54,y+.6,1.1,1.1,'#111719',.05,'#8e9997',.15));
  return `<path d="M0 0H65.8l2.8 2.8v47.4l-2.8 3.2H0Z" fill="#078f96" stroke="#06616b" stroke-width=".4"/>`+
   kpMany(12,i=>kpLine(`M${15+i*3.5} 13v${6+i%4*2}h${9-i%5}`,'#58b2ac',.22))+
   [[3.5,3.5],[3.5,49.8],[65,5],[65,47]].map(([x,y])=>kpCircle(x,y,1.65,'#c2a75b')+kpCircle(x,y,1,'#e1e3d9')).join('')+
   sockets(21,1.1,10)+sockets(48,1.1,8)+sockets(22,49.1,8)+sockets(48,49.1,6)+
   kpRect(-2,8,16,12.2,metal,.5,'#586c72',.25)+kpRect(-2,9.2,2,9.8,dark,.2)+kpLine('M1 10h10v8H1', '#f8f9f6',.25)+
   kpRect(-1,36,13,9,dark,.6)+kpCircle(0,40.5,3.2,'#171d20','#a0aaac',.5)+
   kpRect(31,30,36,9,dark,.7)+kpMany(14,i=>lead(`M${31.8+i*2.54} 28.8v1.2m0 9v1.4`,.75))+
   kpText(49,35.4,'ATMEGA328P',1.7)+kpCircle(33,32,0.5,'#878d88')+
   kpRect(18,18,7,7,dark,.4)+kpMany(4,i=>lead(`M${18.6+i*1.6} 17v1m0 7v1`,.6))+
   kpRect(21,37,5,9,dark,.3)+kpCircle(15,35,2.2,metal)+kpCircle(15,42,2.2,metal)+
   kpRect(5,24,5,3.8,metal,.6)+kpRect(6.4,25.1,2.3,1.4,'#cf6154',.4)+
   kpMany(7,i=>kpRect(28+i*3.5,18+i%2*4,2,1.2,'#d3c3a0',.1,'#e7e7dd',.25))+
   kpText(49,13,'ARDUINO',3.2,'#f3f7ec')+kpText(52,23,'UNO',5,'#f3f7ec')+kpText(43,47,'ANALOG IN',1.2,'#e3f4ed')+
   kpRect(60,22,5.1,5.1,dark,.3)+kpMany(6,i=>kpCircle(61+i%2*2.54,23+Math.floor(i/2)*1.5,.45,gold));}
 case 'breadboard':{
  const holes=(x,y,n,rows)=>kpMany(rows,r=>kpMany(n,c=>kpRect(x+c*2.54,y+r*2.54,.9,.9,'#727b77',.12)));
  return kpRect(0,0,w,h,white,1.5,'#c4c8c2',.3)+kpRect(2,24.6,78,3.8,'#b6bdb7',.3)+holes(3.7,10.2,30,5)+holes(3.7,30,30,5)+holes(9,2,25,2)+holes(9,46.5,25,2)+kpLine('M7 1H74M7 46H74','#d15249',.35)+kpLine('M7 6.7H74M7 51.4H74','#4b84b1',.35)+kpMany(6,i=>kpText(5+i*12.7,9,String(1+i*5),1.3,'#69766e'));}
 case 'lcd':return kpRect(0,0,w,h,'#257b4e',1,'#175534',.3)+[[2.5,2.5],[77.5,2.5],[2.5,33.5],[77.5,33.5]].map(([x,y])=>kpCircle(x,y,1.65,gold)+kpCircle(x,y,1.1,'#dfe4db')).join('')+kpMany(16,i=>kpCircle(7.5+i*2.54,3,0.9,gold)+kpCircle(7.5+i*2.54,3,.45,'#263e2e'))+kpRect(4,7,72,26,dark,1)+kpRect(7.75,12.25,64.5,14.5,'#b0be79',.3,'#070e0a',.25)+kpMany(2,r=>kpMany(16,c=>kpRect(11+c*3.65,14+r*5.05,2.95,4.35,'#9cac6c',.05)))+kpLine('M6 8H74M6 31H74','#747b78',.25);
 case 'usb':return kpLine('M21 27C-2 76 70 79 78 34','#232b2e',4)+kpLine('M21 27C-2 76 70 79 78 34','#748086',.7)+kpRect(12,8,18,23,dark,2)+kpRect(14,0,14,12,metal,.5,'#7d898b',.35)+kpRect(17,3,3,3,'#435054')+kpRect(23,3,3,3,'#435054')+kpMany(4,i=>kpLine(`M15 ${26+i*1.7}h12`,'#171f22',.6))+kpRect(68,16,22,22,dark,2)+`<path d="M72 16V5l3-3h9l3 3v11Z" fill="${metal}" stroke="#76878b" stroke-width=".3"/>`+kpRect(76,5,7,8,'#34474e',.2)+kpRect(77.2,6,4.6,6,'#e4e6de',.2);
 case 'base':return kpRect(0,0,w,h,'#bf9664',3,'#77573e',1)+kpMany(12,i=>kpLine(`M5 ${7+i*7.5}q36 -3 69 0t69 0`,'#ae8556',.5))+kpRect(7,9,60,81,'none',1,'#876643',.8)+kpRect(75,9,66,81,'none',1,'#876643',.8)+[[11,13],[62,13],[11,86],[62,86],[80,13],[136,86]].map(([x,y])=>kpCircle(x,y,1.8,'#4f4437')).join('')+kpText(108,55,'ARDUINO',5,'#805b39');
 case 'snap':return (!bodyOnly?kpLine('M26 4C47 2 46 30 60 27','#bb3630',1.1)+kpLine('M26 9C42 7 42 35 59 32','#292f32',1.1)+lead('M60 27l6-2M59 32h7',.6):'')+kpRect(0,0,26,13,dark,6,'#151b1d',.25)+kpCircle(6.5,6.5,3.5,metal,'#899293',.2)+kpCircle(6.5,6.5,1.9,'#768587','#dde2df',.4)+`<path d="m16 3 5-1 3 4-1 4-5 1-3-4Z" fill="${metal}" stroke="#a6afab" stroke-width=".3"/>`+kpCircle(19.5,6.5,2.2,'#424d4e','#f0f0e9',.5);
 case 'solidWire':return ['#c84538','#e5b638','#4b985e','#4886b7','#f4ece0','#9c7965'].map((c,i)=>{const x=3+i*11,y=3+i%3*5;return lead(`M${x} ${y+11}v13m7-13v13`,.65)+kpLine(`M${x} ${y+11}V${y}h7v11`,c,1.3);}).join('');
 case 'strandedWire':return ['#bc3b34','#252d31'].map((c,i)=>kpLine(`M5 ${8+i*9}C18 ${-5+i*10} 44 ${35+i*3} 58 ${15+i*9}`,c,1.8)+lead(`M5 ${8+i*9}l-4 1m57 ${6+i*0}l5-1`,.7)).join('');
 case 'photo':return (!bodyOnly?lead('M1.2 7v15M3.8 7v13',.45):'')+`<path d="M0 8V2.5A2.5 2.5 0 0 1 5 2.5V8Z" fill="#a3c2bf" fill-opacity=".65" stroke="#718e8d" stroke-width=".15"/>`+kpRect(1.1,4,2.8,2.5,'#4e6465',.2)+kpCircle(2.5,4.7,.65,'#212c31')+kpLine('M.8 5V2.5q0-1.3 1.3-1.5','#fff',.3)+kpRect(-.35,7.6,5.7,1,glass,.1);
 case 'pot':return lead('M1 9v5M5 9v5M9 9v5',.55)+kpRect(0,0,10,10,'#256faf',1,'#244a64',.3)+kpRect(1,1,8,8,'#76afd0',.6)+kpCircle(5,5,3.7,white,'#8c9b9e',.25)+kpRect(3.7,-5,2.6,10,white,.5,'#aeb7b3',.15)+kpMany(4,i=>kpLine(`M${4+i*.65} -4v8`,'#bdc6c1',.12))+kpLine('M4 -4h2','#676f70',.45);
 case 'button':return (!bodyOnly?lead('M.8 1h-1.6v2m1.6 2h-1.6v2M5.4 1H7v2M5.4 5H7v2',.45):'')+kpRect(0,0,6.2,6.2,dark,.35)+kpRect(.15,.15,5.9,5.9,metal,.35)+[[.8,.8],[5.4,.8],[.8,5.4],[5.4,5.4]].map(([x,y])=>kpCircle(x,y,.5,'#c3cbca','#6c787a',.1)).join('')+kpCircle(3.1,3.1,1.75,dark,'#22282a',.15)+kpCircle(3.1,2.95,1.35,'#434a4a');
 case 'tmp36':return (!bodyOnly?kpMany(3,i=>lead(`M${1.14+i*1.27} ${h}v12.7`,.4)):'')+kpRect(0,0,w,h,dark,.7,'#1f2a2e',.16)+kpLine(`M.4 .7H${w-.4}`,'#6b7477',.18)+kpText(w/2,2.2,'TMP',.8)+kpText(w/2,3.3,'36',.8);
 case 'tilt':return (!bodyOnly?kpMany(4,i=>lead(`M${.7+i*1.7} 9.8v${i%2?4:3}`, .45)):'')+kpRect(0,0,w,h,dark,.3,'#171e21',.2)+kpLine('M.5 .4H6.2V9.3','#687276',.18)+kpLine('M.4 8.8H6.3','#090f12',.2);
 case 'led':{
  const rgb=p.legs===4, flange=rgb?5.6:p.key==='led-white'?5.8:5.9;
  const legs=kpMany(p.legs,i=>lead(`M${rgb?.55+i*1.3:1.23+i*2.54} ${h-2}v${rgb?(i===1?24:21):p.key==='led-blue'?(i?27:29):(i?17:19)}`, .45));
  return (!bodyOnly?legs:'')+`<path d="M0 ${h-.7}V2.5A2.5 2.5 0 0 1 5 2.5V${h-.7}Z" fill="${p.color}" fill-opacity=".88" stroke="${p.color}" stroke-width=".15"/>`+kpRect((5-flange)/2,h-.9,flange,.9,p.color,.1)+kpLine(`M1.2 ${h-1}V4.8h2.3v${h-5.8}`,'#9baba4',.35)+kpRect(2,4.2,1.5,1.3,'#aab5ae',.15)+`<path d="M.35 ${h-1.2}V2.5a2.15 2.15 0 0 1 4.3 0v${h-3.7}Z" fill="${glass}"/>`+kpLine('M.9 4V2.4q0-1.3 1.3-1.5','#fff',.35);}
 case 'motor':return (!bodyOnly?lead('M0 12h-11.5',2)+kpRect(-11.5,9,4,6,gold,.1)+kpMany(5,i=>kpLine(`M-11.5 ${9.5+i*1.1}h4`,'#8e723b',.2)):'')+kpRect(0,0,30.5,24,metal,4,'#7f8b8e',.25)+kpRect(27.5,1.5,3,21,'#d4d3c5',.7)+kpLine('M3 1v22M26 2v20','#7b888b',.3)+kpRect(6,3,7,2.2,'#3b4548',1)+kpRect(6,18.8,7,2.2,'#3b4548',1)+(!bodyOnly?lead('M30.5 6h3M30.5 18h3',1):'');
 case 'servo':return (!bodyOnly?kpRect(-4,4,30.9,2.2,dark,.4)+kpCircle(-2,5,0.8,'#929b94')+kpCircle(25,5,.8,'#929b94')+kpLine('M3 22c0 7 32 12 33 0','#252e32',1)+kpLine('M4.2 22c0 6 32 11 33-1','#ba3931',.8)+kpLine('M5.4 22c0 5 32 10 33-2','#e8cfa9',.8)+kpRect(34,16,6,6,white,.6):'')+kpRect(0,0,w,h,dark,1,'#172126',.3)+kpLine(`M.6 4.3H${w-.6}M.6 19.4H${w-.6}`,'#6c7475',.25)+kpRect(3,7,17,10,'#343c3f',.5)+kpText(11.5,11,'MICRO',1.3)+kpText(11.5,14,'SERVO',1.3)+(!bodyOnly?kpCircle(6,-.8,3.7,white,'#a1a9a4',.15)+kpRect(-2,-2.4,16,3.2,white,1.6)+kpCircle(6,-.8,1,metal)+kpMany(6,i=>kpCircle(-.7+i*2.6,-.8,.4,'#76817f')):'');
 case 'piezo':return (!bodyOnly?lead('M7 20v10M15 20v8',.6):'')+kpCircle(11,11,11,dark,'#171f22',.3)+kpCircle(11,11,9.8,'#353d40','#5d686b',.3)+kpCircle(11,11,2.7,'#10191c','#4b575b',.3)+kpText(11,6,'+',2.4,'#a8b2af')+kpLine('M3 9a8 8 0 0 1 9-6','#697376',.4);
 case 'dip':return (!bodyOnly?kpMany(p.pins/2,i=>lead(`M${(w-(p.pins/2-1)*2.54)/2+i*2.54} 0v-2.2m0 ${h+2.2}v2.2`,.65)):'')+kpRect(0,0,w,h,dark,.5,'#192025',.2)+kpLine(`M.7 .6H${w-.7}`,'#656c6e',.18)+`<path d="M0 ${h/2-1}a1 1 0 0 1 0 2" fill="#10171b" stroke="#788182" stroke-width=".15"/>`+kpCircle(1.4,h-1.2,.3,'#8b9290')+kpText(w/2,h*.59,p.mark,Math.min(1.7,w*.16),'#afb5af');
 case 'mosfet':return (!bodyOnly?kpMany(3,i=>lead(`M${2.667+i*2.54} ${h}v13.5`,.7)):'')+kpRect(0,0,w,h,metal,.35,'#7f8d92',.2)+kpCircle(w/2,3,1.8,'#eff0e7','#929fa1',.3)+kpRect(0,5.6,w,h-5.6,dark,.5)+kpLine(`M.5 6.2H${w-.5}`,'#616d73',.2)+kpText(w/2,9.3,'IRF520',1.2)+kpText(w/2,12,'REF',.75,'#798782');
 case 'capacitor':return (!bodyOnly?lead('M1.7 11v16M4.4 11v13',.45):'')+kpRect(0,0,w,h,dark,1,'#1c262b',.2)+kpRect(w-1.5,.5,1.1,h-1,'#c6d2cc',.3)+kpMany(4,i=>kpLine(`M${w-1.3} ${2+i*2}h.65`,'#384d51',.18))+`<ellipse cx="${w/2}" cy=".8" rx="${w/2}" ry=".8" fill="${metal}"/>`+kpLine(`M${w/2-1.2} .4l2.4 .7m0-.7-2.4 .7`,'#8b9797',.15)+kpText(w/2-.5,6,'100',1)+kpText(w/2-.5,8,'µF',.9);
 case 'diode':return (!bodyOnly?lead(`M0 ${h/2}h-6M${w} ${h/2}h6`,.45):'')+kpRect(0,0,w,h,dark,h/3,'#252e31',.12)+kpRect(w-.9,.1,.55,h-.2,'#d7dbd5',.08)+kpLine(`M.5 .35H${w-1.1}`,'#737b7d',.15);
 case 'gels':return ['#d23e36','#388c58','#3970b5'].map((c,i)=>`<g transform="translate(${i*14} ${i*8})">${kpRect(0,0,43,35,c,.4,c,.3)}${kpRect(1,1,41,33,'#fff',.3).replace('fill="#fff"','fill="#fff" opacity=".08"')}${kpLine('M2 32 40 3','#fff',.35)}</g>`).join('');
 case 'header':return kpRect(0,0,w,2.54,dark,.2)+kpMany(40,i=>lead(`M${1.27+i*2.54} 0v-6m0 8.54v3`,.6)+kpRect(.95+i*2.54,.65,.64,1.2,gold,.05));
 case 'resistor':return (!bodyOnly?lead(`M0 ${h/2}h-5.5M${w} ${h/2}h5.5`,.4):'')+`<path d="M0 .6Q0 0 .9 0l1 .3h${w-3.8}l1-.3q.9 0 .9 .6v${h-1.2}q0 .6-.9 .6l-1-.3H1.9l-1 .3Q0 ${h} 0 ${h-.6}Z" fill="#d7be91" stroke="#a38b65" stroke-width=".12"/>`+p.bands.map((b,i)=>kpRect(.9+i*1.05,.15,.5,h-.3,kpBands[b],.02)).join('')+kpRect(w-.9,.1,.4,h-.2,gold,.05)+kpLine(`M.5 .4H${w-.5}`,'#fff8df',.12);
 default:return '';
 }
}
function kpBounds(p){
 const bounds={book:[0,0,153,213],uno:[-2,0,70.6,53.4],usb:[0,-1,96,66],base:[0,0,150,100],snap:[0,0,67,35],solidWire:[0,0,70,38],strandedWire:[0,0,67,37],photo:[-.5,0,6,23],pot:[-.5,-5,11,20],button:[-1,0,8.2,7.5],tmp36:[0,0,p.w,p.h+13],tilt:[0,0,6.7,14],led:[-.5,0,6,p.h+(p.key==='led-blue'?30:25)],motor:[-12,0,46,24],servo:[-4,-5,45,37],piezo:[0,0,22,31],dip:[0,-2.5,p.w,p.h+5],mosfet:[0,0,p.w,p.h+14],capacitor:[0,-.3,p.w,28],diode:[-6,0,p.w+12,p.h],gels:[0,0,72,52],header:[0,-6.5,101.6,13],resistor:[-5.5,0,p.w+11,p.h]};
 return bounds[p.kind]||[0,0,p.w,p.h];
}
export function kitPartArtwork(profile){
 if(!profile)return '';
 const p=profile,id='kit-card-'+p.key,[x,y,w,h]=kpBounds(p),padding=Math.max(w,h)*.1;
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x-padding} ${y-padding} ${w+padding*2} ${h+padding*2}" role="img" aria-label="${kpEscape(p.part+(p.detailMatch?' '+p.detailMatch:'')+'. '+p.hint)}" data-kit-art="${p.key}">${kpDefinitions(id)}${kpDrawing(p,id)}</svg>`;
}
// Shared millimetre coordinates. No per-object resizing; only translation is permitted.
export function kitScaleLayout(){
 const placed=[];let x=8,y=19,rowHeight=0;
 for(const p of kitPartProfiles.filter(p=>p.dimensioned)){
  const cellW=Math.max(52,p.w+12),cellH=Math.max(38,p.h+21);
  if(x+cellW>216){x=8;y+=rowHeight;rowHeight=0;}
  placed.push({profile:p,x:x+(cellW-p.w)/2,y,cellW,cellH});x+=cellW;rowHeight=Math.max(rowHeight,cellH);
 }
 return {width:224,height:y+rowHeight+9,placed};
}
export function kitScaleArtwork(){
 const {width,height,placed}=kitScaleLayout();
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="672" height="${height*3}" role="img" aria-label="Eighteen reference part bodies at one common millimetre scale. Wires, leads, horns and unknown sizes are omitted."><rect width="100%" height="100%" fill="#e9eae2"/>${kpMany(22,i=>kpLine(`M${8+i*10} 8v${height-14}`,'#d9ddd3',.15))}${kpMany(Math.floor(height/10),i=>kpLine(`M8 ${8+i*10}H216`,'#d9ddd3',.15))}${kpLine('M8 9H108','#44564e',.4)}${kpMany(11,i=>kpLine(`M${8+i*10} 7v4`,'#44564e',.3)+(i%2===0?kpText(8+i*10,5,i*10,2.7,'#3d5047'):''))}${kpText(115,10,'mm',3,'#3d5047','start')}${placed.map(({profile:p,x,y,cellH})=>{const id='kit-scale-'+p.key;return kpDefinitions(id)+`<g transform="translate(${x} ${y})" data-scale-part="${p.key}" data-width-mm="${p.w}" data-height-mm="${p.h}">${kpDrawing(p,id,true)}</g>`+kpText(x+p.w/2,y+Math.max(p.h+6,24),p.part,3,'#30483b')+kpText(x+p.w/2,y+Math.max(p.h+11,29),`${p.w.toFixed(2).replace(/\.?0+$/,'')} × ${p.h.toFixed(2).replace(/\.?0+$/,'')} mm`,2.7,'#5b6d61');}).join('')}</svg>`;
}
