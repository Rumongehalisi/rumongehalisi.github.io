/* ===== FORMULAIRE DE CONTACT ===== */
var s=document.getElementById('send'),stt=document.getElementById('st');
function say(fr,eng,ok){if(stt){stt.textContent=en?eng:fr;stt.className=ok?'ok':'ko'}}
function setErr(id,fr,eng,bad){
 var el=document.getElementById(id),er=document.getElementById(id+'-e');
 if(el)el.setAttribute('aria-invalid',bad?'true':'false');
 if(er)er.textContent=bad?(en?eng:fr):'';
}
function checkForm(){
 var nm=document.getElementById('nm'),em=document.getElementById('em'),ms=document.getElementById('ms'),cs=document.getElementById('cs');
 var bad=[];
 var b1=nm.value.trim().length<2;
 setErr('nm','Indiquez votre nom.','Please enter your name.',b1);if(b1)bad.push(nm);
 var b2=!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim());
 setErr('em','Indiquez une adresse e-mail valide.','Please enter a valid email address.',b2);if(b2)bad.push(em);
 var b3=ms.value.trim().length<10;
 setErr('ms','Écrivez un message d’au moins 10 caractères.','Please write a message of at least 10 characters.',b3);if(b3)bad.push(ms);
 if(cs){
  var b4=!cs.checked;
  setErr('cs','Cochez la case pour que nous puissions vous répondre.','Please tick the box so we can reply to you.',b4);if(b4)bad.push(cs);
 }
 if(bad.length){bad[0].focus();return false}
 return true;
}
if(s)s.onclick=function(){
 if(stt){stt.textContent='';stt.className=''}
 if(!checkForm())return;
 var hp=document.getElementById('hp');
 if(hp&&hp.value){say('Merci, votre message est envoyé.','Thank you, your message has been sent.',1);return} /* robot : on ne fait rien */
 var nm=document.getElementById('nm').value.trim(),em=document.getElementById('em').value.trim(),
     ph=document.getElementById('ph')?document.getElementById('ph').value.trim():'',
     sj=document.getElementById('sj').value,ms=document.getElementById('ms').value.trim();
 if(FORMSPREE){
  s.disabled=true;
  s.textContent=en?'Sending…':'Envoi en cours…';
  var data={name:nm,email:em,phone:ph,subject:sj,message:ms,_subject:'Site Rumonge Halisi – '+sj};
  fetch(FORMSPREE,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify(data)})
  .then(function(r){
   return r.json().catch(function(){return {}}).then(function(d){
    if(!r.ok){
     var m=(d&&d.errors&&d.errors.map(function(x){return x.message}).join(' '))||(d&&d.error)||('HTTP '+r.status);
     throw new Error(m);
    }
    say('Merci, votre message est envoyé. Nous vous répondrons très bientôt.','Thank you, your message has been sent. We will reply very soon.',1);
    ['nm','em','ph','ms'].forEach(function(id){var e=document.getElementById(id);if(e)e.value=''});
    var cs=document.getElementById('cs');if(cs)cs.checked=false;
   });
  })
  .catch(function(er){say('Envoi impossible ('+((er&&er.message)||er)+'). Réessayez ou écrivez-nous directement.','Could not send ('+((er&&er.message)||er)+'). Try again or write to us directly.',0)})
  .then(function(){s.disabled=false;s.textContent=en?'Send message':'Envoyer le message'});
  return;
 }
 var body=ms+'\n\n'+nm+' <'+em+'>'+(ph?'\n'+ph:'');
 if(EMAIL){location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(sj+' – '+nm)+'&body='+encodeURIComponent(body);return}
 if(WHATSAPP){window.open('https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(sj+' : '+body),'_blank','noopener');return}
 say('Le formulaire n’est pas encore configuré.','The form is not configured yet.',0);
};
