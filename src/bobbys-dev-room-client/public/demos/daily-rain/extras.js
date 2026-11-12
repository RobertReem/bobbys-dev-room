/* prefixes: frm form, inp input, sel select, txt text, lst list, hdn heading, arr array, fn function */
const fnVal=id=>{const e=document.getElementById(id);return e?e.value.trim():''};
const fnNum=id=>parseFloat(fnVal(id))||0;
const fnMoney=n=>'$'+Math.round(n).toLocaleString('en-US');
function fnResult(txtHead,arrRows,txtNext){
document.getElementById('hdnDone').textContent=txtHead;document.getElementById('txtNext').textContent=txtNext;
const lst=document.getElementById('lstRecords');lst.textContent='';
arrRows.forEach(r=>{const row=document.createElement('div');row.className='row';const a=document.createElement('strong'),b=document.createElement('span');a.textContent=r[0];b.textContent=r[1];row.append(a,b);lst.append(row)});
document.getElementById('frmRequest').hidden=true;document.getElementById('secResult').hidden=false;scrollTo({top:0,behavior:'smooth'})}
const frmRequest=document.getElementById('frmRequest'),txtPg=document.body.dataset.pg;
const txtWho=()=>`${fnVal('inpFirst')} ${fnVal('inpLast')}, ${fnVal('inpEmail')}, ${fnVal('inpPhone')}`;
if(txtPg==='prepay'){const upd=()=>{document.getElementById('txtTotal').textContent=`$145 + $22 x ${fnNum('inpZones')} zones = ${fnMoney(145+22*fnNum('inpZones'))}`};
document.getElementById('inpZones').oninput=upd;upd();
frmRequest.onsubmit=e=>{e.preventDefault();const z=fnNum('inpZones');
fnResult(`Thanks, ${fnVal('inpFirst')}! Your package is paid.`,[['Customer',txtWho()],['Package','2027 Prepaid Startup and Winterization Package'],['Zones',String(z)],['Total paid',fnMoney(145+22*z)]],'Next, sign in to the portal and pick your startup and winterization dates.')}}
if(txtPg==='financing'){const upd=()=>{document.getElementById('txtTotal').textContent=`About ${fnMoney(fnNum('inpAmount')/fnNum('selTerm'))} per month for ${fnVal('selTerm')} months (placeholder 0% terms)`};
['inpAmount','selTerm'].forEach(i=>document.getElementById(i).oninput=upd);upd();
frmRequest.onsubmit=e=>{e.preventDefault();fnResult(`Thanks, ${fnVal('inpFirst')}! Your application is in.`,[['Applicant',txtWho()],['Amount requested',fnMoney(fnNum('inpAmount'))],['Term',fnVal('selTerm')+' months']],'In production you would continue on the financing partner\'s secure page.')}}
if(txtPg==='careers'){const selRole=document.getElementById('selRole');
document.querySelectorAll('[data-role]').forEach(b=>b.onclick=()=>{selRole.value=b.dataset.role;frmRequest.scrollIntoView({behavior:'smooth'})});
frmRequest.onsubmit=e=>{e.preventDefault();const f=document.getElementById('inpResume').files[0];
fnResult(`Thanks, ${fnVal('inpFirst')}! We got your application.`,[['Role',selRole.selectedOptions[0].text],['Applicant',txtWho()],['Resume',f?f.name:'None attached']],'We will be in touch (placeholder timing).')}}
if(txtPg==='vision'){const upd=()=>{const h=fnNum('inpCust')*fnNum('inpCalls')*fnNum('inpMin')/60*fnNum('inpAdopt')/100,s=h*fnNum('inpRate');
document.getElementById('txtHours').textContent=Math.round(h).toLocaleString('en-US')+' hours';document.getElementById('txtSaved').textContent=fnMoney(s);
document.getElementById('txtNet').textContent=fnMoney(s+fnNum('inpJobber')*12-19*12)};
['inpCust','inpCalls','inpMin','inpAdopt','inpRate','inpJobber'].forEach(i=>document.getElementById(i).oninput=upd);upd()}
