/* prefixes: obj object, arr array, btn button, lst list, txt text, frm form, inp input, hdn heading, dn demo note, fn function */
const fnDate=s=>new Date(s+'T12:00:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'});
const objUsers={
'rob@dailyrain.com':{nam:'Rob',adr:'123 Sample Street, Saline, MI (fake)',zon:8,map:'18A',
 apt:[['Holiday lighting installation','Wed, Nov 18, 2026, 8a-12p'],['2027 spring startup','Not scheduled yet']],
 inv:[['INV-1042','2027 Prepaid Startup and Winterization Package',145+22*8,'Due'],['INV-1007','Holiday lighting deposit',200,'Paid']],
 st:['2027-04-06','2027-04-08','2027-04-20','2027-04-22','2027-05-04','2027-05-06'],
 wn:['2027-10-05','2027-10-07','2027-10-19','2027-10-21','2027-11-02','2027-11-04']},
'traven@lotusgardenscapes.com':{nam:'Traven',adr:'456 Placeholder Lane, Dexter, MI (fake)',zon:12,map:'7B',
 apt:[['Holiday lighting installation','Tue, Nov 24, 2026, 12p-4p'],['Irrigation repair visit','Thu, Dec 3, 2026, 8a-12p']],
 inv:[['INV-1055','2027 Prepaid Startup and Winterization Package',145+22*12,'Due'],['INV-1012','Landscape lighting service call',95,'Paid']],
 st:['2027-04-13','2027-04-15','2027-04-27','2027-04-29','2027-05-11','2027-05-13'],
 wn:['2027-10-12','2027-10-14','2027-10-26','2027-10-28','2027-11-09','2027-11-11']}};
function fnSay(msg){const tst=document.getElementById('tstDemo');tst.textContent=msg;tst.classList.add('show');clearTimeout(fnSay.t);fnSay.t=setTimeout(()=>tst.classList.remove('show'),2800)}
const frmLogin=document.getElementById('frmLogin');
if(frmLogin){
frmLogin.onsubmit=e=>{e.preventDefault();const txtEml=document.getElementById('inpPortalEmail').value.trim().toLowerCase();
if(objUsers[txtEml]&&document.getElementById('inpPortalPassword').value==='12345678'){try{sessionStorage.setItem('usr',txtEml)}catch(x){}location.href='portal.html'}
else document.getElementById('txtLoginErr').textContent='That email or password was not recognized. Demo accounts only.'};
document.getElementById('btnNewCustomer').onclick=()=>location.href='signup.html';
}else{
let txtUsr=null;try{txtUsr=sessionStorage.getItem('usr')}catch(x){}
const objU=objUsers[txtUsr];
if(!objU)location.href='login.html';else{
document.getElementById('hdnGreeting').textContent=`Hi ${objU.nam}, welcome to the customer portal!`;
document.getElementById('txtAddr').textContent=`${objU.adr}, ${objU.zon} zones`;
const lstAppts=document.getElementById('lstAppts');
objU.apt.forEach(a=>lstAppts.insertAdjacentHTML('beforeend',`<div class="row"><span>${a[0]}</span><span>${a[1]}</span></div>`));
document.getElementById('lstInv').innerHTML=objU.inv.map(v=>`<div class="row"><span>${v[0]}<br>${v[1]}</span><span>$${v[2]} <span class="tag ${v[3]==='Due'?'due':''}">${v[3]}</span> ${v[3]==='Due'?'<button class="pill" type="button" data-pay>Pay now</button>':''}</span></div>`).join('');
document.querySelectorAll('[data-pay]').forEach(b=>b.onclick=()=>fnSay('Demo: this opens secure online payment.'));
function fnSched(idLst,arrD,idBtn,idMsg,txtKind){let txtSel=null;const lst=document.getElementById(idLst);
lst.innerHTML=arrD.map((d,i)=>`<div class="row"><span>${fnDate(d)}</span><span><button class="pill" type="button" data-k="${d}|8a-12p" ${i%4===2?'disabled':''}>8a-12p</button> <button class="pill" type="button" data-k="${d}|12p-4p" ${i%3===1?'disabled':''}>12p-4p</button></span></div>`).join('');
lst.querySelectorAll('.pill:not(:disabled)').forEach(b=>b.onclick=()=>{lst.querySelectorAll('.pill').forEach(x=>x.classList.remove('on'));b.classList.add('on');txtSel=b.dataset.k});
document.getElementById(idBtn).onclick=()=>{const msg=document.getElementById(idMsg);if(!txtSel){msg.textContent='Pick an open time first.';return}
const p=txtSel.split('|');msg.textContent=`Booked (demo): ${fnDate(p[0])}, ${p[1]}.`;
lstAppts.insertAdjacentHTML('beforeend',`<div class="row"><span>${txtKind} (new)</span><span>${fnDate(p[0])}, ${p[1]}</span></div>`)}}
fnSched('lstStart',objU.st,'btnConfirmStart','txtStartMsg','2027 spring startup');
fnSched('lstWinter',objU.wn,'btnConfirmWinter','txtWinterMsg','2027 fall winterization');
const txtDn=`Demo note: open times come from the Aspire schedule for map code ${objU.map}. We visit an area at most twice a week, and job length comes from past work on your property. Confirming creates the visit in Aspire.`;
document.getElementById('dnStart').textContent=txtDn;document.getElementById('dnWinter').textContent=txtDn;
document.getElementById('btnNotes').onclick=e=>{document.body.classList.toggle('nonotes');e.target.textContent=document.body.classList.contains('nonotes')?'Show demo notes':'Hide demo notes'};
document.getElementById('btnLogout').onclick=()=>{try{sessionStorage.removeItem('usr')}catch(x){}location.href='login.html'};
}}
