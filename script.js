let svgDoc=null,svgPaths=[],curIdx=-1;
const svgObj=document.getElementById('svgObj'),mapArea=document.querySelector('.map-area'),listItems=document.querySelectorAll('#rl li'),tt=document.getElementById('tt'),ttN=document.getElementById('ttN'),ttC=document.getElementById('ttC');

svgObj.addEventListener('load',function(){
svgDoc=svgObj.contentDocument;
svgPaths=Array.from(svgDoc.querySelectorAll('path[id]'));
svgPaths.forEach(p=>{const c=COLORS[p.id];if(!c)return;p.style.cssText='fill:'+c+';stroke:rgba(255,255,255,.12);stroke-width:.5;cursor:pointer;transition:all .5s'});
svgPaths.forEach(p=>{
const r=R.find(x=>x.id===p.id);if(!r)return;
p.addEventListener('mouseenter',()=>{ttN.textContent=r.name;ttC.textContent=r.clim;tt.classList.add('show');p.style.filter='brightness(1.4) saturate(1.4) drop-shadow(0 0 10px rgba(255,255,255,.25))';p.style.stroke='rgba(255,255,255,.8)';p.style.strokeWidth='1.5';p.style.opacity='1'});
p.addEventListener('mousemove',e=>{const b=tt.getBoundingClientRect();let x=e.clientX-b.width/2,y=e.clientY-b.height-12;if(x<5)x=5;if(x+b.width>innerWidth-5)x=innerWidth-b.width-5;if(y<5)y=e.clientY+18;tt.style.left=x+'px';tt.style.top=y+'px'});
p.addEventListener('mouseleave',()=>{tt.classList.remove('show');applyFocus(curIdx)});
p.addEventListener('click',()=>{const i=R.findIndex(x=>x.id===p.id);if(i>=0)scrollToRegion(i)})
});
onScroll()
});

function applyFocus(idx){
if(!svgDoc||idx<0)return;const id=R[idx].id;
svgPaths.forEach(p=>{
if(p.id===id){p.style.opacity='1';p.style.filter='brightness(1.3) saturate(1.3) drop-shadow(0 0 6px rgba(255,255,255,.15))';p.style.stroke='rgba(255,255,255,.6)';p.style.strokeWidth='1.2'}
else{p.style.opacity='.2';p.style.filter='saturate(.3)';p.style.stroke='rgba(255,255,255,.08)';p.style.strokeWidth='.3'}
})
}

function focusRegion(idx){
if(idx===curIdx||!svgDoc)return;curIdx=idx;
const r=R[idx],path=svgDoc.getElementById(r.id);if(!path)return;
const bb=path.getBBox(),cx=bb.x+bb.width/2,cy=bb.y+bb.height/2,a=bb.width*bb.height;
let z=a<100?9:a<400?6:a<1500?4:a<4000?3:a<10000?2:1.3;
const vw=mapArea.clientWidth,vh=mapArea.clientHeight,px=cx*(612/612.5365),py=cy*(709/708.72205);
svgObj.style.transform='translate('+(vw/2-px*z)+'px,'+(vh/2-py*z)+'px) scale('+z+')';
applyFocus(idx);
listItems.forEach(li=>li.classList.remove('active'));
const al=document.querySelector('[data-r="'+r.id+'"]');
if(al){al.classList.add('active');al.scrollIntoView({behavior:'smooth',block:'nearest'})}
document.getElementById('icN').textContent=r.num;
document.getElementById('icNm').innerHTML='<span class="idot" style="background:'+r.col+'"></span>'+r.name;
document.getElementById('icCl').textContent=r.clim;
document.getElementById('icDs').textContent=r.desc;
document.getElementById('ic').classList.add('show');
document.getElementById('animalDetail').classList.remove('show');
spawnAnimals(r,vw,vh);
updateMobileNav()
}

function scrollToRegion(idx){
idx=Math.max(0,Math.min(idx,R.length-1));
const ms=document.documentElement.scrollHeight-innerHeight;
scrollTo({top:((idx+.5)/R.length)*ms,behavior:'smooth'})
}

function onScroll(){
const s=scrollY,ms=document.documentElement.scrollHeight-innerHeight,p=Math.min(Math.max(s/ms,0),1);
document.getElementById('pf').style.height=(p*100)+'%';
document.getElementById('sh').classList.toggle('gone',p>.01);
focusRegion(Math.min(Math.floor(p*R.length),R.length-1))
}

let ticking=false;
addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{onScroll();ticking=false});ticking=true}});

let lastWheel=0;
addEventListener('wheel',e=>{e.preventDefault();const n=Date.now();if(n-lastWheel<350)return;lastWheel=n;const i=curIdx>=0?curIdx:0;scrollToRegion(i+(e.deltaY>0?1:-1))},{passive:false});

addEventListener('keydown',e=>{
const i=curIdx>=0?curIdx:0;let h=true;
switch(e.key){
case'ArrowDown':case'ArrowRight':case'PageDown':case' ':scrollToRegion(i+1);break;
case'ArrowUp':case'ArrowLeft':case'PageUp':scrollToRegion(i-1);break;
case'Home':scrollToRegion(0);break;case'End':scrollToRegion(R.length-1);break;
default:h=false}
if(h)e.preventDefault()
});

let touchY=0,touchDone=false;
addEventListener('touchstart',e=>{touchY=e.touches[0].clientY;touchDone=false},{passive:true});
addEventListener('touchmove',e=>{if(touchDone)return;const d=touchY-e.touches[0].clientY;if(Math.abs(d)>40){touchDone=true;scrollToRegion((curIdx>=0?curIdx:0)+(d>0?1:-1))}},{passive:true});
addEventListener('touchend',()=>{touchDone=false});

listItems.forEach(li=>{li.addEventListener('click',()=>{const i=R.findIndex(x=>x.id===li.dataset.r);if(i>=0)scrollToRegion(i)})});

function spawnAnimals(r,vw,vh){
const c=document.getElementById('animalsContainer');c.innerHTML='';
if(!r.animales||!r.animales.length)return;
const cw=isMobile()?110:140,ch=isMobile()?100:145,g=isMobile()?12:20,sx=vw-(cw+g),sy=40;
r.animales.forEach((a,i)=>{
let x=sx,y=sy+i*(ch+g);
if(y+ch>vh-40){x=sx-(cw+g);y=sy+(i-Math.floor((vh-80)/(ch+g)))*(ch+g)}
if(x<20)x=20;if(y<20)y=20;if(y+ch>vh-(isMobile()?80:20))y=vh-ch-(isMobile()?80:20);
const b=document.createElement('div');b.className='animal-bubble';b.style.left=x+'px';b.style.top=y+'px';
b.innerHTML='<img src="'+a.img+'" alt="'+a.nombre+'" onerror="this.style.background=\'rgba(126,200,227,.1)\'"><div class="ab-name">'+a.nombre+'</div>';
b.addEventListener('click',e=>{e.stopPropagation();showAnimalDetail(a,b)});
c.appendChild(b);setTimeout(()=>b.classList.add('show'),200+i*150)
})
}

function showAnimalDetail(a,el){
const d=document.getElementById('animalDetail'),rc=el.getBoundingClientRect();
document.getElementById('adImg').src=a.img;
document.getElementById('adName').textContent=a.nombre;
document.getElementById('adDesc').textContent=a.desc;
if(isMobile()){d.style.left='12px';d.style.top='auto';d.style.bottom='72px'}
else{let l=rc.left-390,t=rc.top;if(l<290){l=rc.left;t=rc.bottom+10}if(t+320>innerHeight)t=innerHeight-340;if(t<10)t=10;if(l<290)l=290;d.style.left=l+'px';d.style.top=t+'px'}
d.classList.add('show')
}

document.getElementById('adClose').addEventListener('click',e=>{e.stopPropagation();document.getElementById('animalDetail').classList.remove('show')});
document.addEventListener('click',e=>{if(!e.target.closest('.animal-bubble')&&!e.target.closest('.animal-detail'))document.getElementById('animalDetail').classList.remove('show')});

// MOBILE
function isMobile(){return innerWidth<=850}

function mobileNavigate(dir){scrollToRegion((curIdx>=0?curIdx:0)+dir)}

function updateMobileNav(){
if(!isMobile())return;const i=curIdx>=0?curIdx:0,r=R[i];if(!r)return;
const nm=document.getElementById('mobileRegionName'),nu=document.getElementById('mobileRegionNum');
if(nm)nm.textContent=r.name;if(nu)nu.textContent=(i+1)+' / '+R.length;
const bp=document.getElementById('btnPrev'),bn=document.getElementById('btnNext');
if(bp)bp.disabled=i===0;if(bn)bn.disabled=i===R.length-1;
const ml=document.querySelectorAll('#rlMobile li');
ml.forEach(li=>li.classList.remove('active'));
const am=document.querySelector('#rlMobile [data-r="'+r.id+'"]');if(am)am.classList.add('active')
}

addEventListener('scroll',()=>{if(isMobile())updateMobileNav()});

const mrb=document.getElementById('mobileRegionsBtn'),mrp=document.getElementById('mobileRegionsPanel'),pc=document.getElementById('panelClose');
if(mrb)mrb.addEventListener('click',()=>mrp.classList.add('open'));
if(pc)pc.addEventListener('click',()=>mrp.classList.remove('open'));
document.querySelectorAll('#rlMobile li').forEach(li=>{
li.addEventListener('click',()=>{const i=R.findIndex(x=>x.id===li.dataset.r);if(i>=0){scrollToRegion(i);mrp.classList.remove('open')}})
});

// Expose for HTML onclick
window.mobileNavigate=mobileNavigate;
updateMobileNav();

addEventListener('resize',()=>{if(isMobile())tt.classList.remove('show')});
addEventListener('touchstart',()=>{tt.classList.remove('show')},{passive:true});