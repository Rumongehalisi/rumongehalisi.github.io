/* script.js v15 */
/* =====================================================================
   À REMPLIR UNIQUEMENT ICI (lignes 1 à 25). Ne touchez pas au reste.
   - Laissez "" pour ce que vous n'avez pas : rien ne s'affichera.
   - WHATSAPP : numéro international SANS "+" ni espaces, ex. "25779123456"
   - FACEBOOK, INSTAGRAM, TIKTOK, YOUTUBE : lien complet (https://...)
   - TELEPHONE : tel qu'il doit s'afficher, ex. "+257 79 12 34 56"
   ===================================================================== */
var EMAIL="rumongehalisiassociation@outlook.com";
var WHATSAPP="";
var FACEBOOK="";
var INSTAGRAM="";
var TIKTOK="";
var YOUTUBE="";
var TELEPHONE="";
/* Lien Formspree : envoi du formulaire de contact */
var FORMSPREE="https://formspree.io/f/xeagpoby";
/* Moyens de don (page Don). Chaque ligne : t = titre, d = détail, te / de = version anglaise.
   Exemple à ajouter (ne mettez que des informations RÉELLES) :
   {t:"Mobile money (Lumicash)",d:"+257 79 12 34 56 – Nom : Association de Rumonge Halisi",te:"Mobile money (Lumicash)",de:"+257 79 12 34 56 – Name: Association de Rumonge Halisi"}, */
var DONS=[
 {t:"Obtenir les coordonnées de paiement",d:"Écrivez-nous via la page Contact ou par e-mail à "+EMAIL+" : nous vous indiquerons les moyens de paiement disponibles (mobile money, banque, depuis l’étranger).",te:"Get the payment details",de:"Write to us via the Contact page or by email at "+EMAIL+": we will tell you the payment options available (mobile money, bank, from abroad)."}
];
/* ===================== FIN DE LA ZONE À REMPLIR ===================== */

(function(){
document.documentElement.setAttribute('translate','no');
var mt=document.createElement('meta');mt.name='google';mt.content='notranslate';document.head.appendChild(mt);
/* ===== LOGOS (SVG intégrés, couleurs d'origine) ===== */
var TT='M16.6 5.8c-.7-.8-1.1-1.8-1.1-2.8h-2.9v12.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1V9.9c-.3 0-.5-.1-.8-.1-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4V9.2c1.1.8 2.4 1.3 3.8 1.3V7.6c-1.2 0-2.4-.7-3.2-1.8z';
var H='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">';
var ICONS={
 'Facebook':H+'<circle cx="12" cy="12" r="12" fill="#1877F2"/><path fill="#fff" d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.2H7.6V13h2.8v8h3.1z"/></svg>',
 'Instagram':H+'<defs><linearGradient id="g" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#FEDA75"/><stop offset=".35" stop-color="#FA7E1E"/><stop offset=".6" stop-color="#D62976"/><stop offset="1" stop-color="#4F5BD5"/></linearGradient></defs><circle cx="12" cy="12" r="12" fill="url(#g)"/><rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.4" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="12" cy="12" r="2.9" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="15.7" cy="8.3" r=".9" fill="#fff"/></svg>',
 'TikTok':H+'<circle cx="12" cy="12" r="12" fill="#000"/><g transform="translate(3.6 3.6) scale(.7)"><path transform="translate(-.7 -.7)" fill="#25F4EE" d="'+TT+'"/><path transform="translate(.7 .7)" fill="#FE2C55" d="'+TT+'"/><path fill="#fff" d="'+TT+'"/></g></svg>',
 'YouTube':H+'<circle cx="12" cy="12" r="12" fill="#FF0000"/><path fill="#fff" d="M9.6 7.8v8.4l7-4.2z"/></svg>',
 'WhatsApp':H+'<circle cx="12" cy="12" r="12" fill="#25D366"/><path fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round" d="M12 5.2a6.8 6.8 0 0 0-5.8 10.3L5.3 18.7l3.3-.9A6.8 6.8 0 1 0 12 5.2z"/><path fill="#fff" d="M9.5 8.7c.2-.4.5-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .4.5.9 1.3 1.6 2.3 2.1.1.1.3 0 .4-.1l.5-.6c.1-.2.3-.2.5-.1l1.6.8c.2.1.3.3.2.5-.1.9-.9 1.6-1.9 1.6-3 0-5.7-2.6-5.7-5.7 0-.5.2-1.2.4-1.6z"/></svg>'
};
function uri(s){return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s)}

/* ===== RESEAUX SOCIAUX : seuls les liens renseignés s'affichent ===== */
var nets=[['Facebook',FACEBOOK],['Instagram',INSTAGRAM],['TikTok',TIKTOK],['YouTube',YOUTUBE],['WhatsApp',WHATSAPP?'https://wa.me/'+WHATSAPP:'']].filter(function(n){return n[1]});
function social(border){
 if(!nets.length)return null;
 var w=document.createElement('div');
 w.style.cssText='display:flex;flex-wrap:wrap;gap:12px;align-items:center';
 nets.forEach(function(n){
  var el=document.createElement('a');
  el.href=n[1];el.target='_blank';el.rel='noopener';
  el.title=n[0];el.setAttribute('aria-label',n[0]);
  el.style.cssText='display:inline-block!important;width:46px!important;height:46px!important;padding:0!important;margin:0!important;border-radius:50%!important;overflow:hidden!important;background:#fff!important;box-shadow:0 0 0 2px '+border+'!important;opacity:1!important;filter:none!important;line-height:0!important;cursor:pointer';
  var im=document.createElement('img');
  im.src=uri(ICONS[n[0]]);im.alt='';
  im.style.cssText='display:block!important;width:100%!important;height:100%!important;max-width:none!important;margin:0!important;padding:0!important;border:0!important;border-radius:0!important';
  el.appendChild(im);w.appendChild(el);
 });
 return w;
}

/* ===== STYLE (mise en page du pied de page) ===== */
var st=document.createElement('style');
st.textContent=
 'footer .fg{display:flex!important;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:28px 40px}'+
 'footer .fg>.fb{flex:1 1 340px}'+
 'footer .fg>.fs{flex:0 1 auto}'+
 'footer .fg>.ql{order:3;flex:0 0 100%;display:flex;flex-wrap:wrap;align-items:center;gap:10px 30px;padding-top:22px;border-top:1px solid rgba(255,255,255,.18)}'+
 'footer .fg>.ql h4{flex:0 0 100%;margin:0 0 2px}'+
 'footer .fg>.ql a{display:inline-block!important;padding:0!important;margin:0!important}'+
 '#soc-block h4{margin:0 0 12px}'+
 '.contact-coords{margin:14px 0}'+
 '.nav-urai{display:inline-flex;align-items:center;gap:.35rem}'+
 '.nav-urai img{height:16px;width:auto}'+
 'footer .fg>.ql a.nav-urai{display:inline-flex!important;align-items:center;gap:.4rem}'+
 'footer .nav-urai img{height:20px;width:auto;background:#fff;border-radius:5px;padding:2px 5px}';
document.head.appendChild(st);

/* ===== ICÔNE URAI DANS LE MENU ET LE PIED DE PAGE ===== */
document.querySelectorAll('#nav a[href="urai.html"],footer a[href="urai.html"]').forEach(function(nu){
 if(nu.querySelector('img'))return;
 nu.removeAttribute('data-en');
 nu.classList.add('nav-urai');
 var ui=document.createElement('img');
 ui.src='urai-icon.webp';ui.alt='';ui.width=42;ui.height=16;
 nu.insertBefore(ui,nu.firstChild);
});

/* ===== BARRE DU HAUT : on retire la zone des coordonnées ===== */
document.querySelectorAll('.top .coords').forEach(function(e){e.parentNode.removeChild(e)});

/* ===== PIED DE PAGE ===== */
var addr=null,addrFR='',ADDR_EN='RUMONGE HALISI ASSOCIATION – non-profit association<br>Centre Urbain Hill, Zone, Commune and Province of Rumonge, Burundi';
var ft=document.querySelector('footer');
if(ft){
 var fg=ft.querySelector('.fg');
 if(fg&&fg.children[0]){
  fg.children[0].classList.add('fb');
  addr=fg.children[0].querySelector('p');
  if(addr)addrFR=addr.innerHTML;
 }
 ft.querySelectorAll('h2,h3,h4,h5').forEach(function(h){
  var t=h.textContent.trim(),col=h.parentNode;
  if(!col||col===ft||col===fg)return;
  if(/^(Liens rapides|Quick links)$/.test(t))col.classList.add('ql');
  if(/^(Suivez-nous|Follow us)$/.test(t))col.parentNode.removeChild(col);
 });
 var socF=social('#fff');
 if(socF){
  var blk=document.createElement('div');blk.id='soc-block';blk.className='fs';
  blk.innerHTML='<h4 data-en="Follow us">Suivez-nous</h4>';
  blk.appendChild(socF);
  if(fg)fg.appendChild(blk);
  else{var cp=ft.querySelector('.copy');if(cp&&cp.parentNode)cp.parentNode.insertBefore(blk,cp);else ft.appendChild(blk)}
 }
}

/* ===== PAGE DON : moyens de paiement (avant la langue pour être traduits) ===== */
var dm=document.getElementById('donmethods');
if(dm&&DONS.length){
 DONS.forEach(function(x){
  var d=document.createElement('div'),h=document.createElement('h3'),q=document.createElement('p');
  d.className='card';
  h.textContent=x.t;q.textContent=x.d;
  if(x.te)h.setAttribute('data-en',x.te);
  if(x.de)q.setAttribute('data-en',x.de);
  d.appendChild(h);d.appendChild(q);dm.appendChild(d);
 });
 var fb=document.getElementById('donfallback');if(fb)fb.hidden=true;
}

/* ===== LANGUE FR / EN ===== */
var en=false;try{en=localStorage.getItem('lang')==='en'}catch(x){}
var els=document.querySelectorAll('[data-en]'),b=document.getElementById('lang'),nav=document.getElementById('nav');
els.forEach(function(e){e.setAttribute('data-fr',e.textContent)});
function ap(){
 els.forEach(function(e){e.textContent=e.getAttribute(en?'data-en':'data-fr')});
 if(addr)addr.innerHTML=en?ADDR_EN:addrFR;
 document.documentElement.lang=en?'en':'fr';
 if(b){b.textContent=en?'FR':'EN';b.setAttribute('aria-label',en?'Passer en français':'Switch to English')}
}
if(b)b.onclick=function(){en=!en;try{localStorage.setItem('lang',en?'en':'fr')}catch(x){}ap()};
if(en)ap();

/* ===== MENU MOBILE ===== */
var mn=document.getElementById('menu');
function closeMenu(){if(nav)nav.classList.remove('open');if(mn)mn.setAttribute('aria-expanded','false')}
if(mn&&nav){
 mn.onclick=function(){mn.setAttribute('aria-expanded',nav.classList.toggle('open'))};
 nav.addEventListener('click',function(e){if(e.target.tagName==='A')closeMenu()});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});
}

/* ===== PAGE CONTACT : email + réseaux sous "Siège social" ===== */
if(document.getElementById('send')||/contact/.test(location.pathname)){
 var tgt=null;
 document.querySelectorAll('p,div,li').forEach(function(e){
  if(!tgt&&e.children.length===0&&/^\s*(Siège social|Registered office|Head office)/.test(e.textContent))tgt=e;
 });
 var box=document.createElement('div');box.className='contact-coords';
 var lines=[];
 if(EMAIL)lines.push('✉️ <a href="mailto:'+EMAIL+'">'+EMAIL+'</a>');
 if(TELEPHONE)lines.push('📞 <a href="tel:'+TELEPHONE.replace(/[^+\d]/g,'')+'">'+TELEPHONE+'</a>');
 if(lines.length){var p=document.createElement('p');p.innerHTML=lines.join('<br>');box.appendChild(p)}
 var socC=social('#14701f');if(socC)box.appendChild(socC);
 if(tgt&&tgt.parentNode)tgt.parentNode.insertBefore(box,tgt.nextSibling);
}

/* ===== FORMULAIRE DE CONTACT ===== */
var s=document.getElementById('send'),stt=document.getElementById('st');
function say(fr,eng,bad){if(stt){stt.textContent=en?eng:fr;stt.className=bad?'ko':'ok'}}
function ferr(id,fr,eng){
 var i=document.getElementById(id),e=document.getElementById(id+'-e');
 if(e)e.textContent=fr?(en?eng:fr):'';
 if(i){if(fr)i.setAttribute('aria-invalid','true');else i.removeAttribute('aria-invalid')}
}
function val(id){var e=document.getElementById(id);return e?e.value.trim():''}
if(s)s.onclick=function(){
 if(val('hp'))return; /* anti-spam : champ piège rempli = robot */
 var nm=val('nm'),em=val('em'),ph=val('ph'),sj=val('sj'),ms=val('ms'),cs=document.getElementById('cs'),ok=true;
 if(!nm){ferr('nm','Indiquez votre nom.','Please enter your name.');ok=false}else ferr('nm');
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){ferr('em','Indiquez un email valide.','Please enter a valid email.');ok=false}else ferr('em');
 if(!ms){ferr('ms','Écrivez votre message.','Please write your message.');ok=false}else ferr('ms');
 if(cs&&!cs.checked){ferr('cs','Veuillez accepter pour continuer.','Please tick the box to continue.');ok=false}else ferr('cs');
 if(!ok){say('Vérifiez les champs signalés.','Please check the highlighted fields.',1);return}
 if(stt){stt.textContent='';stt.className=''}
 if(FORMSPREE){
  s.disabled=true;
  var data={name:nm,email:em,message:ms,_subject:'Site Rumonge Halisi – '+sj};
  if(ph)data.phone=ph;
  fetch(FORMSPREE,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify(data)})
  .then(function(r){
   return r.json().catch(function(){return {}}).then(function(d){
    if(!r.ok){
     var m=(d&&d.errors&&d.errors.map(function(x){return x.message}).join(' '))||(d&&d.error)||('HTTP '+r.status);
     throw new Error(m);
    }
    say('Merci, votre message est envoyé. Nous vous répondrons bientôt.','Thank you, your message has been sent. We will reply soon.');
    document.getElementById('ms').value='';if(cs)cs.checked=false;
   });
  })
  .catch(function(er){say('Envoi impossible ('+((er&&er.message)||er)+'). Réessayez ou écrivez-nous directement par email.','Could not send ('+((er&&er.message)||er)+'). Try again or email us directly.',1)})
  .then(function(){s.disabled=false});
  return;
 }
 var body=ms+'\n\n'+nm+' <'+em+'>'+(ph?'\n'+ph:'');
 if(EMAIL){location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(sj+' – '+nm)+'&body='+encodeURIComponent(body);return}
 if(WHATSAPP){window.open('https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(sj+' : '+body),'_blank','noopener');return}
 say('Le formulaire n’est pas encore configuré.','The form is not configured yet.',1);
};
})();
