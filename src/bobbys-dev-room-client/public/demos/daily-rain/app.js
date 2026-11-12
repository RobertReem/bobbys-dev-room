const bolRdm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const svgStrand=document.getElementById('svgStrand'),pthStrand=document.getElementById('pthStrand');
const numLen=pthStrand.getTotalLength(),numBulbs=26,arrBulbs=[];
for(let i=0;i<=numBulbs;i++){const pnt=pthStrand.getPointAtLength(numLen*i/numBulbs);
const blb=document.createElementNS('http://www.w3.org/2000/svg','ellipse');
blb.setAttribute('cx',pnt.x);blb.setAttribute('cy',pnt.y+12);blb.setAttribute('rx',7);blb.setAttribute('ry',11);blb.setAttribute('class','bulb');svgStrand.appendChild(blb);arrBulbs.push(blb)}
/* one signature moment: the strand switches on bulb by bulb */
arrBulbs.forEach((blb,i)=>setTimeout(()=>blb.classList.add('on'),bolRdm?0:500+i*90+Math.random()*120));
if(!bolRdm){gsap.registerPlugin(ScrollTrigger);
gsap.from('#secHero h1,#secHero p,#secHero .acts',{y:30,opacity:0,duration:.8,stagger:.15,delay:.4});
ScrollTrigger.batch('.pop',{start:'top 88%',once:true,onEnter:els=>gsap.from(els,{scale:.82,y:50,rotate:-2,opacity:0,duration:.7,stagger:.12,ease:'back.out(1.7)'})})}
const btnMenu=document.getElementById('btnMenu'),navOverlay=document.getElementById('navOverlay');
function setMenu(bolOpen){btnMenu.setAttribute('aria-expanded',bolOpen);btnMenu.textContent=bolOpen?'Close':'Menu';
if(bolOpen){navOverlay.style.display='flex';if(!bolRdm){gsap.fromTo(navOverlay,{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:.55,ease:'power3.inOut'});gsap.from('#navOverlay a',{y:60,opacity:0,stagger:.07,delay:.25,duration:.5})}}
else if(bolRdm)navOverlay.style.display='none';else gsap.to(navOverlay,{clipPath:'inset(0 0 100% 0)',duration:.45,ease:'power3.inOut',onComplete:()=>navOverlay.style.display='none'})}
btnMenu.onclick=()=>setMenu(btnMenu.getAttribute('aria-expanded')!=='true');
navOverlay.querySelectorAll('a').forEach(lnk=>lnk.onclick=()=>setMenu(false));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
const btnStart=document.getElementById('btnSchedStartup'),btnEnd=document.getElementById('btnSchedShutdown');
[btnStart,btnEnd].forEach(btn=>btn.onclick=()=>{btnStart.classList.toggle('on',btn===btnStart);btnEnd.classList.toggle('on',btn===btnEnd)});
const tstDemo=document.getElementById('tstDemo');let tmrToast;
document.querySelectorAll('[data-demo]').forEach(btn=>btn.addEventListener('click',()=>{
tstDemo.textContent=btn.id==='btnSchedConfirm'?'Demo: this will create the visit in Aspire.':'Demo only. This button gets wired up in the next phase.';
tstDemo.classList.add('show');clearTimeout(tmrToast);tmrToast=setTimeout(()=>tstDemo.classList.remove('show'),2600)}));

document.querySelectorAll('[data-go]').forEach(btn=>btn.addEventListener('click',()=>location.href=btn.dataset.go));
