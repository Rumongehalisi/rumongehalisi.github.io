var EMAIL="rumongehalisiassociation@outlook.com",WHATSAPP="",FACEBOOK="",INSTAGRAM="",TIKTOK="",YOUTUBE="",TELEPHONE="";
(function(){
/* ===== LOGOS (SVG intégrés, aucun service externe) ===== */
var ICONS={
 'Facebook':'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#1877F2"/><path fill="#fff" d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.2H7.6V13h2.8v8h3.1z"/></svg>',
 'Instagram':'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="igg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#FEDA75"/><stop offset=".35" stop-color="#FA7E1E"/><stop offset=".6" stop-color="#D62976"/><stop offset="1" stop-color="#4F5BD5"/></linearGradient></defs><circle cx="12" cy="12" r="12" fill="url(#igg)"/><rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.4" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="12" cy="12" r="2.9" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="15.7" cy="8.3" r=".9" fill="#fff"/></svg>',
 'TikTok':'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#000"/><g transform="translate(3.6 3.6) scale(.7)"><path transform="translate(-.7 -.7)" fill="#25F4EE" d="M16.6 5.8c-.7-.8-1.1-1.8-1.1-2.8h-2.9v12.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1V9.9c-.3 0-.5-.1-.8-.1-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4V9.2c1.1.8 2.4 1.3 3.8 1.3V7.6c-1.2 0-2.4-.7-3.2-1.8z"/><path transform="translate(.7 .7)" fill="#FE2C55" d="M16.6 5.8c-.7-.8-1.1-1.8-1.1-2.8h-2.9v12.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1V9.9c-.3 0-.5-.1-.8-.1-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4V9.2c1.1.8 2.4 1.3 3.8 1.3V7.6c-1.2 0-2.4-.7-3.2-1.8z"/><path fill="#fff" d="M16.6 5.8c-.7-.8-1.1-1.8-1.1-2.8h-2.9v12.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1V9.9c-.3 0-.5-.1-.8-.1-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4V9.2c1.1.8 2.4 1.3 3.8 1.3V7.6c-1.2 0-2.4-.7-3.2-1.8z"/></g></svg>',
 'YouTube':'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#FF0000"/><path fill="#fff" d="M9.6 7.8v8.4l7-4.2z"/></svg>',
 'WhatsApp':'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#25D366"/><path fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round" d="M12 5.2a6.8 6.8 0 0 0-5.8 10.3L5.3 18.7l3.3-.9A6.8 6.8 0 1 0 12 5.2z"/><path fill="#fff" d="M9.5 8.7c.2-.4.5-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .4.5.9 1.3 1.6 2.3 2.1.1.1.3 0 .4-.1l.5-.6c.1-.2.3-.2.5-.1l1.6.8c.2.1.3.3.2.5-.1.9-.9 1.6-1.9 1.6-3 0-5.7-2.6-5.7-5.7 0-.5.2-1.2.4-1.6z"/></svg>'
};

/* ===== RESEAUX SOCIAUX (grisés tant que le lien est vide) ===== */
var nets=[['Facebook',FACEBOOK],['Instagram',INSTAGRAM],['TikTok',TIKTOK],['YouTube',YOUTUBE],['WhatsApp',WHATSAPP?'https://wa.me/'+WHATSAPP:'']];
function pills(){
 return '<div class="soc">'+nets.map(function(n){
  var ic=ICONS[n[0]];
  return n[1]
   ?'<a href="'+n[1]+'" target="_blank" rel="noopener" aria-label="'+n[0]+'" title="'+n[0]+'">'+ic+'</a>'
   :'<span aria-label="'+n[0]+'" title="'+n[0]+' – Bientôt / Soon">'+ic+'</span>';
 }).join('')+'</div>';
}

/* ===== STYLE ===== */
var st=document.createElement('style');
st.textContent=
 'footer .fg{display:flex!important;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:28px 40px}'+
 'footer .fg>.fb{flex:1 1 340px}'+
 'footer .fg>.fs{flex:0 1 auto}'+
 'footer .fg>.ql{order:3;flex:0 0 100%;display:flex;flex-wrap:wrap;align-items:center;gap:10px 30px;padding-top:22px;border-top:1px solid rgba(255,255,255,.18)}'+
 'footer .fg>.ql h4{flex:0 0 100%;margin:0 0 2px}'+
 'footer .fg>.ql a{display:inline-block!important;padding:0!important;margin:0!important}'+
 '.soc{display:flex;flex-wrap:wrap;gap:12px}'+
 '.soc a,.soc span{display:block!important;width:46px;height:46px;padding:0!important;margin:0!important;border-radius:50%;box-shadow:0 0 0 2px #fff;transition:transform .15s}'+
 '.soc a:hover{transform:translateY(-3px)}'+
 '.soc span{opacity:.5;filter:grayscale(1);cursor:default}'+
 '.soc svg{width:100%;height:100%;display:block}'+
 '.contact-coords{margin:14px 0}'+
 '.contact-coords .soc{margin-top:10px}'+
 '.contact-coords .soc a,.contact-coords .soc span{box-shadow:0 0 0 2px #1b5e20}';
document.head.appendChild(st);

/* ===== BARRE DU HAUT : on retire la zone des coordonnées ===== */
document.querySelectorAll('.top .coords').forEach(function(e){e.parentNode.removeChild(e)});

/* ===== PIED DE PAGE ===== */
var ft=document.querySelector('footer');
if(ft){
 var fg=ft.querySelector('.fg');
 var q=ft.querySelector('h4[data-en="Quick links"]'),f=ft.querySelector('h4[data-en="Follow us"]');
 if(fg&&fg.children[0])fg.children[0].classList.add('fb');
 if(q)q.parentNode.classList.add('ql');
 if(f){
  f.parentNode.classList.add('fs');
  var z=f.parentNode.querySelector('.coords');
  if(z)z.innerHTML=pills();else f.parentNode.insertAdjacentHTML('beforeend',pills());
 }
}

/* ===== LANGUE FR / EN (via les attributs data-en du HTML) ===== */
var en=false;try{en=localStorage.getItem('lang')==='en'}catch(x){}
var els=document.querySelectorAll('[data-en]'),b=document.getElementById('lang'),nav=document.getElementById('nav');
els.forEach(function(e){e.setAttribute('data-fr',e.textContent)});
function ap(){
 els.forEach(function(e){e.textContent=e.getAttribute(en?'data-en':'data-fr')});
 document.documentElement.lang=en?'en':'fr';
 if(b)b.textContent=en?'FR':'EN';
}
if(b)b.onclick=function(){en=!en;try{localStorage.setItem('lang',en?'en':'fr')}catch(x){}ap()};
if(en)ap();

/* ===== MENU MOBILE ===== */
var mn=document.getElementById('menu');
if(mn&&nav)mn.onclick=function(){nav.classList.toggle('open')};

/* ===== PAGE CONTACT : email + réseaux sous "Siège social" ===== */
var c=[];
if(EMAIL)c.push('✉️ <a href="mailto:'+EMAIL+'">'+EMAIL+'</a>');
if(TELEPHONE)c.push('📞 '+TELEPHONE);
if(document.getElementById('send')||/contact/.test(location.pathname)){
 var tgt=null;
 document.querySelectorAll('p,div,li').forEach(function(e){
  if(!tgt&&e.children.length===0&&/^\s*(Siège social|Head office)/.test(e.textContent))tgt=e;
 });
 var box=document.createElement('div');box.className='contact-coords';
 box.innerHTML=(c.length?'<p>'+c.join('<br>')+'</p>':'')+pills();
 if(tgt){tgt.parentNode.insertBefore(box,tgt.nextSibling)}
 else{var sf=document.getElementById('send');if(sf)sf.parentNode.insertBefore(box,sf.parentNode.firstChild)}
}

/* ===== BOUTON ENVOYER (formulaire) ===== */
var s=document.getElementById('send');
if(s)s.onclick=function(){
 if(!EMAIL){alert('Email non configuré / not set');return}
 location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(document.getElementById('sj').value+' – '+document.getElementById('nm').value)+'&body='+encodeURIComponent(document.getElementById('ms').value);
};
})();
