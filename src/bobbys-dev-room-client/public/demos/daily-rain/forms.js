/* prefixes: frm form, sel select, txt text, lst list, hdn heading, arr array, fn function */
const frmRequest=document.getElementById('frmRequest'),selType=document.getElementById('selSvcType');
const txtPre=new URLSearchParams(location.search).get('t');
if(txtPre)[...selType.options].forEach(o=>{if(o.value===txtPre)selType.value=txtPre});
const fnVal=id=>{const el=document.getElementById(id);return el?el.value.trim():''};
frmRequest.onsubmit=e=>{e.preventDefault();
const arrRows=[['Contact',`${fnVal('inpFirst')} ${fnVal('inpLast')}, ${fnVal('inpEmail')}, ${fnVal('inpPhone')}`],
['Property',`${fnVal('inpAddr')}, ${fnVal('inpCity')}, ${fnVal('selState')} ${fnVal('inpZip')}${fnVal('inpZones')?', '+fnVal('inpZones')+' zones':''}`]];
if(selType.value!=='account')arrRows.push(['Issue',selType.selectedOptions[0].text+(fnVal('txtNotes')?': '+fnVal('txtNotes'):'')]);
document.getElementById('hdnDone').textContent=frmRequest.dataset.done.replace('{first}',fnVal('inpFirst'));
document.getElementById('txtNext').textContent=frmRequest.dataset.next;
const lst=document.getElementById('lstRecords');lst.textContent='';
arrRows.forEach(r=>{const row=document.createElement('div');row.className='row';const a=document.createElement('strong'),b=document.createElement('span');a.textContent='Created in Aspire: '+r[0];b.textContent=r[1];row.append(a,b);lst.append(row)});
frmRequest.hidden=true;document.getElementById('secResult').hidden=false;window.scrollTo({top:0,behavior:'smooth'})};
