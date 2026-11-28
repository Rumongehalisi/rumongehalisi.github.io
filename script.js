/* script.js v19 – pages FR (index.html), EN (en-*.html), SW (sw-*.html) ; la langue = attribut lang de <html> */
/* =====================================================================
   À REMPLIR UNIQUEMENT ICI (lignes 1 à 25). Ne touchez pas au reste.
   - Laissez "" pour ce que vous n'avez pas : rien ne s'affichera.
   - WHATSAPP : numéro international SANS "+" ni espaces, ex. "25779123456"
   - FACEBOOK, INSTAGRAM, TIKTOK, YOUTUBE : lien complet (https://...)
   - TELEPHONE : tel qu'il doit s'afficher, ex. "+257 79 12 34 56"
   ===================================================================== */
var EMAIL="rumongehalisiassociation@outlook.com";
var WHATSAPP="";
var FACEBOOK="https://www.facebook.com/profile.php?id=61596830857911";
var INSTAGRAM="https://www.instagram.com/rumongehalisiassociation";
var TIKTOK="https://www.tiktok.com/@rumonge.halisi";
var YOUTUBE="https://www.youtube.com/@RumongeHalisi";
var TWITTER="https://x.com/RumongeHalisi";
var PINTEREST="https://www.pinterest.com/rumongehalisiassociation/";
var TELEPHONE="";
/* true = les 5 icônes s'affichent toujours (celles sans lien sont grisées au clic) ; false = seulement celles avec un lien */
var SHOW_EMPTY=true;
/* Lien Formspree : envoi du formulaire de contact */
var FORMSPREE="https://formspree.io/f/xeagpoby";
/* Moyens de don (page Don). Chaque ligne : i = icône ("mobile" ou "bank"), t = titre, d = détail, te / de = version anglaise.
   Quand vous avez les vrais numéros, remplacez le texte de d (et de) par exemple :
   d:"Numéro : +257 79 00 00 00 – Nom : Association de Rumonge Halisi"
   N'écrivez que des informations RÉELLES. */
var DONS=[
 {i:"mobile",t:"Lumicash (mobile money)",d:"Le numéro de paiement est communiqué sur demande : écrivez-nous via la page Contact ou par e-mail à "+EMAIL+".",te:"Lumicash (mobile money)",de:"The payment number is provided on request: write to us via the Contact page or by email at "+EMAIL+".",ts:"Lumicash (mobile money)",ds:"Namba ya malipo hutolewa kwa ombi: tuandikie kupitia ukurasa wa Mawasiliano au kwa barua pepe kwa "+EMAIL+"."},
 {i:"bank",t:"Virement bancaire",d:"Les coordonnées bancaires sont communiquées sur demande : écrivez-nous via la page Contact ou par e-mail à "+EMAIL+".",te:"Bank transfer",de:"The bank details are provided on request: write to us via the Contact page or by email at "+EMAIL+".",ts:"Uhamisho wa benki",ds:"Maelezo ya benki hutolewa kwa ombi: tuandikie kupitia ukurasa wa Mawasiliano au kwa barua pepe kwa "+EMAIL+"."}
];
/* ===================== FIN DE LA ZONE À REMPLIR ===================== */

(function(){
var LG=document.documentElement.lang,EN=LG==='en',SW=LG==='sw';
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
 'Email':H+'<circle cx="12" cy="12" r="12" fill="#14701F"/><rect x="5.6" y="7.6" width="12.8" height="8.8" rx="1.6" fill="none" stroke="#fff" stroke-width="1.5"/><path fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" d="M6 8.6l6 4.6 6-4.6"/></svg>',
 'X':H+'<circle cx=\"12\" cy=\"12\" r=\"12\" fill=\"#000\"/><path transform=\"translate(5.2 5.2) scale(.57)\" fill=\"#fff\" d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/></svg>',
 'Pinterest':H+'<path fill=\"#E60023\" d=\"M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z\"/></svg>',
 'WhatsApp':H+'<circle cx="12" cy="12" r="12" fill="#25D366"/><path fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round" d="M12 5.2a6.8 6.8 0 0 0-5.8 10.3L5.3 18.7l3.3-.9A6.8 6.8 0 1 0 12 5.2z"/><path fill="#fff" d="M9.5 8.7c.2-.4.5-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .4.5.9 1.3 1.6 2.3 2.1.1.1.3 0 .4-.1l.5-.6c.1-.2.3-.2.5-.1l1.6.8c.2.1.3.3.2.5-.1.9-.9 1.6-1.9 1.6-3 0-5.7-2.6-5.7-5.7 0-.5.2-1.2.4-1.6z"/></svg>'
};
function uri(s){return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s)}

/* ===== RESEAUX SOCIAUX : seuls les liens renseignés s'affichent ===== */
var nets=[['Facebook',FACEBOOK],['Instagram',INSTAGRAM],['TikTok',TIKTOK],['YouTube',YOUTUBE],['X',TWITTER],['Pinterest',PINTEREST],['WhatsApp',WHATSAPP?'https://wa.me/'+WHATSAPP:''],['Email',EMAIL?'mailto:'+EMAIL:'']].filter(function(n){return SHOW_EMPTY||n[1]});
function social(border){
 if(!nets.length)return null;
 var w=document.createElement('div');
 w.style.cssText='display:flex;flex-wrap:wrap;gap:12px;align-items:center';
 nets.forEach(function(n){
  var el=document.createElement(n[1]?'a':'span');
  if(n[1]){el.href=n[1];el.target=n[0]==='Email'?'_self':'_blank';el.rel='noopener'}
  el.title=n[0]==='Email'&&EMAIL?EMAIL:n[0]+(n[1]?'':(SW?' – inakuja hivi karibuni':EN?' – coming soon':' – bientôt'));el.setAttribute('aria-label',n[0]);
  el.style.cssText='display:inline-block!important;width:46px!important;height:46px!important;padding:0!important;margin:0!important;border-radius:50%!important;overflow:hidden!important;background:#fff!important;box-shadow:0 0 0 2px '+border+'!important;opacity:1!important;filter:none!important;line-height:0!important;cursor:'+(n[1]?'pointer':'default');
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
 '#soc-block a[target],.contact-coords a[target]{transition:transform .15s ease}'+
 '#soc-block a[target]:hover,.contact-coords a[target]:hover,#soc-block a[target]:focus-visible{transform:scale(1.12)}'+
 '@media(prefers-reduced-motion:reduce){#soc-block a[target],.contact-coords a[target]{transition:none}#soc-block a[target]:hover,.contact-coords a[target]:hover{transform:none}}'+
 '.contact-coords{margin:14px 0}'+
 '.nav-urai{display:inline-flex;align-items:center;gap:.35rem}'+
 '.nav-urai img{height:16px;width:auto}'+
 'footer .fg>.ql a.nav-urai{display:inline-flex!important;align-items:center;gap:.4rem}'+
 'footer .nav-urai img{height:20px;width:auto;background:#fff;border-radius:5px;padding:2px 5px}';
document.head.appendChild(st);

/* ===== ICÔNE URAI DANS LE MENU ET LE PIED DE PAGE ===== */
document.querySelectorAll('#nav a[href$="urai.html"],footer a[href$="urai.html"]').forEach(function(nu){
 if(nu.querySelector('img'))return;
 nu.removeAttribute('data-en');
 nu.classList.add('nav-urai');
 var ui=document.createElement('img');
 ui.src='/urai-icon.webp';ui.alt='';ui.width=42;ui.height=16;
 nu.insertBefore(ui,nu.firstChild);
});

/* ===== BARRE DU HAUT : on retire la zone des coordonnées ===== */
document.querySelectorAll('.top .coords').forEach(function(e){e.parentNode.removeChild(e)});

/* ===== PIED DE PAGE ===== */
var addr=null,addrFR='',ADDR_EN='RUMONGE HALISI ASSOCIATION – non-profit association<br>Centre Urbain Hill, Zone, Commune and Province of Rumonge, Burundi',ADDR_SW='CHAMA CHA RUMONGE HALISI – chama kisichotafuta faida<br>Kilima cha Centre Urbain, Zone, Commune na Mkoa wa Rumonge, Burundi';
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
  if(/^(Liens rapides|Quick links|Viungo vya haraka)$/.test(t))col.classList.add('ql');
  if(/^(Suivez-nous|Follow us|Tufuate)$/.test(t))col.parentNode.removeChild(col);
 });
 var socF=social('#fff');
 if(socF){
  var blk=document.createElement('div');blk.id='soc-block';blk.className='fs';
  blk.innerHTML='<h4 data-en="Follow us" data-sw="Tufuate">Suivez-nous</h4>';
  blk.appendChild(socF);
  if(fg)fg.appendChild(blk);
  else{var cp=ft.querySelector('.copy');if(cp&&cp.parentNode)cp.parentNode.insertBefore(blk,cp);else ft.appendChild(blk)}
 }
}

/* ===== ICÔNES DE PAIEMENT (génériques) ===== */
var PAY={
 mobile:H+'<rect x="6.5" y="2" width="11" height="20" rx="2.5" fill="none" stroke="#14701f" stroke-width="1.8"/><circle cx="12" cy="18.6" r="1" fill="#14701f"/><circle cx="12" cy="10.5" r="3.2" fill="#14701f"/><text x="12" y="12" font-family="Arial,sans-serif" font-size="4.4" font-weight="700" fill="#fff" text-anchor="middle">F</text></svg>',
 bank:H+'<path fill="#14701f" d="M12 2.5 3 8v1.5h18V8z"/><rect x="5" y="11" width="2.4" height="7" fill="#14701f"/><rect x="10.8" y="11" width="2.4" height="7" fill="#14701f"/><rect x="16.6" y="11" width="2.4" height="7" fill="#14701f"/><rect x="3" y="19.5" width="18" height="2" fill="#14701f"/></svg>'
};

/* ===== PAGE DON : moyens de paiement (avant la langue pour être traduits) ===== */
var dm=document.getElementById('donmethods');
if(dm&&DONS.length){
 DONS.forEach(function(x){
  var d=document.createElement('div'),h=document.createElement('h3'),q=document.createElement('p');
  d.className='card';
  if(x.i&&PAY[x.i]){var pi=document.createElement('img');pi.src=uri(PAY[x.i]);pi.alt='';pi.width=48;pi.height=48;pi.style.cssText='display:block;margin:0 0 10px';d.appendChild(pi)}
  h.textContent=x.t;q.textContent=x.d;
  if(x.te)h.setAttribute('data-en',x.te);
  if(x.ts)h.setAttribute('data-sw',x.ts);
  if(x.de)q.setAttribute('data-en',x.de);
  if(x.ds)q.setAttribute('data-sw',x.ds);
  d.appendChild(h);d.appendChild(q);dm.appendChild(d);
 });
 var fb=document.getElementById('donfallback');if(fb)fb.hidden=true;
}

/* ===== PAGE DON : bouton e-mail ===== */
var dmb=document.getElementById('donmailbtn');
if(dmb&&EMAIL)dmb.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(SW?'Mchango – Chama cha Rumonge Halisi':EN?'Donation – Rumonge Halisi Association':'Don – Association de Rumonge Halisi');

/* ===== LANGUE FR / EN ===== */
var en=EN||SW;
var els=document.querySelectorAll('[data-en]'),b=document.getElementById('lang'),nav=document.getElementById('nav');
els.forEach(function(e){e.setAttribute('data-fr',e.textContent)});
function ap(){
 els.forEach(function(e){e.textContent=e.getAttribute(SW&&e.hasAttribute('data-sw')?'data-sw':EN||SW?'data-en':'data-fr')});
 if(addr)addr.innerHTML=SW?ADDR_SW:en?ADDR_EN:addrFR;
 document.documentElement.lang=LG;
 }
if(en)ap();

/* ===== PAGE ACTIVE DANS LE MENU ===== */
(function(){var cur=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('#nav a:not(.btn)').forEach(function(a){
  if(a.getAttribute('href')===cur){a.classList.add('on');a.setAttribute('aria-current','page')}});})();

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
  if(!tgt&&e.children.length===0&&/^\s*(Siège social|Registered office|Head office|Makao makuu)/.test(e.textContent))tgt=e;
 });
 var box=document.createElement('div');box.className='contact-coords';
 var lines=[];
 /* e-mail : affiché uniquement via l'icône ronde (réseaux) */
 if(TELEPHONE)lines.push('📞 <a href="tel:'+TELEPHONE.replace(/[^+\d]/g,'')+'">'+TELEPHONE+'</a>');
 if(lines.length){var p=document.createElement('p');p.innerHTML=lines.join('<br>');box.appendChild(p)}
 var socC=social('#14701f');if(socC)box.appendChild(socC);
 if(tgt&&tgt.parentNode)tgt.parentNode.insertBefore(box,tgt.nextSibling);
}

/* ===== FORMULAIRE DE CONTACT ===== */
var s=document.getElementById('send'),stt=document.getElementById('st');
function say(fr,eng,bad,sw){if(stt){stt.textContent=SW&&sw?sw:(EN?eng:fr);stt.className=bad?'ko':'ok'}}
function ferr(id,fr,eng,sw){
 var i=document.getElementById(id),e=document.getElementById(id+'-e');
 if(e)e.textContent=fr?(SW&&sw?sw:(EN?eng:fr)):'';
 if(i){if(fr)i.setAttribute('aria-invalid','true');else i.removeAttribute('aria-invalid')}
}
function val(id){var e=document.getElementById(id);return e?e.value.trim():''}
if(s)s.onclick=function(){
 if(val('hp'))return; /* anti-spam : champ piège rempli = robot */
 var nm=val('nm'),em=val('em'),ph=val('ph'),sj=val('sj'),ms=val('ms'),cs=document.getElementById('cs'),ok=true;
 if(!nm){ferr('nm','Indiquez votre nom.','Please enter your name.','Tafadhali andika jina lako.');ok=false}else ferr('nm');
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){ferr('em','Indiquez un email valide.','Please enter a valid email.','Tafadhali andika barua pepe halali.');ok=false}else ferr('em');
 if(!ms){ferr('ms','Écrivez votre message.','Please write your message.','Tafadhali andika ujumbe wako.');ok=false}else ferr('ms');
 if(cs&&!cs.checked){ferr('cs','Veuillez accepter pour continuer.','Please tick the box to continue.','Tafadhali kubali ili uendelee.');ok=false}else ferr('cs');
 if(!ok){say('Vérifiez les champs signalés.','Please check the highlighted fields.',1,'Tafadhali angalia sehemu zilizoonyeshwa.');return}
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
    say('Merci, votre message est envoyé. Nous vous répondrons bientôt.','Thank you, your message has been sent. We will reply soon.',0,'Asante, ujumbe wako umetumwa. Tutakujibu hivi karibuni.');
    document.getElementById('ms').value='';if(cs)cs.checked=false;
   });
  })
  .catch(function(er){say('Envoi impossible ('+((er&&er.message)||er)+'). Réessayez ou écrivez-nous directement par email.','Could not send ('+((er&&er.message)||er)+'). Try again or email us directly.',1,'Imeshindikana kutuma ('+((er&&er.message)||er)+'). Jaribu tena au tuandikie moja kwa moja kwa barua pepe.')})
  .then(function(){s.disabled=false});
  return;
 }
 var body=ms+'\n\n'+nm+' <'+em+'>'+(ph?'\n'+ph:'');
 if(EMAIL){location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(sj+' – '+nm)+'&body='+encodeURIComponent(body);return}
 if(WHATSAPP){window.open('https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(sj+' : '+body),'_blank','noopener');return}
 say('Le formulaire n’est pas encore configuré.','The form is not configured yet.',1,'Fomu bado haijawekwa tayari.');
};
})();
