/* ===== À COMPLÉTER : vos coordonnées (laissez vide ce que vous n'avez pas) ===== */
var EMAIL="",        // ex. contact@votredomaine.org
    TELEPHONE="",    // ex. +257 79 00 00 00
    WHATSAPP="",     // chiffres uniquement, avec indicatif : 25779000000
    FACEBOOK="",INSTAGRAM="",TIKTOK="",YOUTUBE="",   // adresses complètes https://...
    FORMSPREE="",    // ex. https://formspree.io/f/xxxxxxxx (le formulaire envoie sans ouvrir la messagerie)
    DONS=[];         // ex. [{t:"Virement bancaire",d:"Banque … – Compte n° … – Intitulé : Association de Rumonge Halisi"},{t:"Mobile money",d:"Lumicash : +257 …"}]
(function(){
var en=false;try{en=localStorage.getItem('lang')==='en'}catch(x){}
var els=document.querySelectorAll('[data-en]'),b=document.getElementById('lang'),nav=document.getElementById('nav'),m=document.getElementById('menu');
els.forEach(function(e){e.setAttribute('data-fr',e.textContent)});
function ap(){els.forEach(function(e){e.textContent=e.getAttribute(en?'data-en':'data-fr')});document.documentElement.lang=en?'en':'fr';b.textContent=en?'FR':'EN';b.setAttribute('aria-label',en?'Passer en français':'Switch to English')}
b.onclick=function(){en=!en;try{localStorage.setItem('lang',en?'en':'fr')}catch(x){}ap()};if(en)ap();
function closeMenu(){nav.classList.remove('open');m.setAttribute('aria-expanded','false')}
m.onclick=function(){m.setAttribute('aria-expanded',nav.classList.toggle('open'))};
nav.addEventListener('click',function(e){if(e.target.tagName==='A')closeMenu()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});
/* coordonnées + réseaux */
var c=[];
if(EMAIL)c.push('✉️ <a href="mailto:'+EMAIL+'">'+EMAIL+'</a>');
if(TELEPHONE)c.push('📞 <a href="tel:'+TELEPHONE.replace(/[^+\d]/g,'')+'">'+TELEPHONE+'</a>');
if(WHATSAPP)c.push('💬 <a href="https://wa.me/'+WHATSAPP+'">WhatsApp</a>');
[['Facebook',FACEBOOK],['Instagram',INSTAGRAM],['TikTok',TIKTOK],['YouTube',YOUTUBE]].forEach(function(x){if(x[1])c.push('🔗 <a href="'+x[1]+'" rel="noopener">'+x[0]+'</a>')});
document.querySelectorAll('.coords').forEach(function(e){e.innerHTML=c.join(e.closest('.top')?' · ':'<br>')});
/* page Don */
var dm=document.getElementById('donmethods');
if(dm&&DONS.length){DONS.forEach(function(x){var d=document.createElement('div'),h=document.createElement('h3'),p=document.createElement('p');d.className='card';h.textContent=x.t;p.textContent=x.d;d.appendChild(h);d.appendChild(p);dm.appendChild(d)});document.getElementById('donfallback').hidden=true}
/* formulaire de contact */
var s=document.getElementById('send'),st=document.getElementById('st');
function say(fr,eng,err){st.textContent=en?eng:fr;st.className=err?'err':''}
if(s)s.onclick=function(){
 var nm=document.getElementById('nm').value.trim(),em=document.getElementById('em').value.trim(),sj=document.getElementById('sj').value,ms=document.getElementById('ms').value.trim();
 if(!ms){say('Écrivez votre message avant d’envoyer.','Please write your message first.',1);return}
 if(FORMSPREE){s.disabled=true;
  fetch(FORMSPREE,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify({name:nm,email:em,subject:sj,message:ms})})
  .then(function(r){if(!r.ok)throw 0;say('Merci, votre message est envoyé.','Thank you, your message has been sent.');document.getElementById('ms').value=''})
  .catch(function(){say('Envoi impossible. Réessayez ou écrivez-nous directement.','Could not send. Try again or write to us directly.',1)})
  .then(function(){s.disabled=false});return}
 var body=ms+(nm||em?'\n\n'+nm+(em?' <'+em+'>':''):'');
 if(EMAIL){location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(sj+(nm?' – '+nm:''))+'&body='+encodeURIComponent(body);return}
 if(WHATSAPP){window.open('https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(sj+' : '+body),'_blank','noopener');return}
 say('Le formulaire n’est pas encore configuré : renseignez EMAIL, WHATSAPP ou FORMSPREE dans script.js.','The form is not configured yet: set EMAIL, WHATSAPP or FORMSPREE in script.js.',1)};
})();
