/* script.js v10 */
var EMAIL="rumongehalisiassociation@outlook.com",WHATSAPP="",FACEBOOK="",INSTAGRAM="",TIKTOK="",YOUTUBE="",TELEPHONE="";
/* Optionnel : lien Formspree (https://formspree.io/f/xxxxxxxx) pour envoyer le formulaire sans ouvrir la messagerie */
var FORMSPREE="";
/* Moyens de don affichés sur la page Don. Exemple :
   var DONS=[{t:"Virement bancaire",d:"Banque … – Compte n° … – Intitulé : Association de Rumonge Halisi"},{t:"Mobile money",d:"Lumicash : +257 …"}]; */
var DONS=[];
(function(){
/* ===== EMPÊCHE LA TRADUCTION AUTOMATIQUE DU NAVIGATEUR (le bouton EN/FR du site fait la traduction) ===== */
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

/* ===== RESEAUX SOCIAUX : toujours en couleur, cliquables si le lien est rempli ===== */
var nets=[['Facebook',FACEBOOK],['Instagram',INSTAGRAM],['TikTok',TIKTOK],['YouTube',YOUTUBE],['WhatsApp',WHATSAPP?'https://wa.me/'+WHATSAPP:'']];
function social(border){
 var w=document.createElement('div');
 w.style.cssText='display:flex;flex-wrap:wrap;gap:12px;align-items:center';
 nets.forEach(function(n){
  var el=document.createElement(n[1]?'a':'span');
  if(n[1]){el.href=n[1];el.target='_blank';el.rel='noopener'}
  el.title=n[0];el.setAttribute('aria-label',n[0]);
  el.style.cssText='display:inline-block!important;width:46px!important;height:46px!important;padding:0!important;margin:0!important;border-radius:50%!important;overflow:hidden!important;background:#fff!important;box-shadow:0 0 0 2px '+border+'!important;opacity:1!important;filter:none!important;line-height:0!important;cursor:'+(n[1]?'pointer':'default');
  var im=document.createElement('img');
  im.src=uri(ICONS[n[0]]);im.alt=n[0];
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
 '.nav-urai img{height:16px;width:auto}';
document.head.appendChild(st);

/* ===== ICÔNE URAI DANS LE MENU (toutes les pages) ===== */
var nu=document.querySelector('#nav a[href="urai.html"]');
if(nu&&!nu.querySelector('img')){
 nu.removeAttribute('data-en');
 nu.classList.add('nav-urai');
 var ui=document.createElement('img');
 ui.src='urai-icon.webp';ui.alt='';ui.width=42;ui.height=16;
 nu.insertBefore(ui,nu.firstChild);
}

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
 var blk=document.createElement('div');blk.id='soc-block';blk.className='fs';
 blk.innerHTML='<h4 data-en="Follow us">Suivez-nous</h4>';
 blk.appendChild(social('#fff'));
 if(fg)fg.appendChild(blk);
 else{var cp=ft.querySelector('.copy');if(cp&&cp.parentNode)cp.parentNode.insertBefore(blk,cp);else ft.appendChild(blk)}
}

/* ===== LANGUE FR / EN (via les attributs data-en du HTML) ===== */
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
 box.appendChild(social('#14701f'));
 if(tgt&&tgt.parentNode)tgt.parentNode.insertBefore(box,tgt.nextSibling);
}

/* ===== FORMULAIRE DE CONTACT ===== */
var s=document.getElementById('send'),stt=document.getElementById('st');
function say(fr,eng,err){if(stt){stt.textContent=en?eng:fr;stt.className=err?'err':''}}
if(s)s.onclick=function(){
 var nm=document.getElementById('nm').value.trim(),em=document.getElementById('em').value.trim(),sj=document.getElementById('sj').value,ms=document.getElementById('ms').value.trim();
 if(!ms){say('Écrivez votre message avant d’envoyer.','Please write your message first.',1);return}
 if(FORMSPREE){
  s.disabled=true;
  fetch(FORMSPREE,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify({name:nm,email:em,subject:sj,message:ms})})
  .then(function(r){if(!r.ok)throw 0;say('Merci, votre message est envoyé.','Thank you, your message has been sent.');document.getElementById('ms').value=''})
  .catch(function(){say('Envoi impossible. Réessayez ou écrivez-nous directement.','Could not send. Try again or write to us directly.',1)})
  .then(function(){s.disabled=false});
  return;
 }
 var body=ms+(nm||em?'\n\n'+nm+(em?' <'+em+'>':''):'');
 if(EMAIL){location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(sj+(nm?' – '+nm:''))+'&body='+encodeURIComponent(body);return}
 if(WHATSAPP){window.open('https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(sj+' : '+body),'_blank','noopener');return}
 say('Le formulaire n’est pas encore configuré.','The form is not configured yet.',1);
};

/* ===== PAGE DON : moyens de paiement ===== */
var dm=document.getElementById('donmethods');
if(dm&&DONS.length){
 DONS.forEach(function(x){
  var d=document.createElement('div'),h=document.createElement('h3'),q=document.createElement('p');
  d.className='card';h.textContent=x.t;q.textContent=x.d;d.appendChild(h);d.appendChild(q);dm.appendChild(d);
 });
 var fb=document.getElementById('donfallback');if(fb)fb.hidden=true;
}
})();
