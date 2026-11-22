var EMAIL="rumongehalisiassociation@outlook.com",WHATSAPP="",FACEBOOK="",INSTAGRAM="",TIKTOK="",YOUTUBE="",TELEPHONE="";
(function(){
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

/* ===== COORDONNEES ===== */
var c=[];
if(EMAIL)c.push('✉️ <a href="mailto:'+EMAIL+'">'+EMAIL+'</a>');
if(TELEPHONE)c.push('📞 '+TELEPHONE);
if(WHATSAPP)c.push('💬 <a href="https://wa.me/'+WHATSAPP+'">WhatsApp</a>');
var so=[];
[['Facebook',FACEBOOK],['Instagram',INSTAGRAM],['TikTok',TIKTOK],['YouTube',YOUTUBE]].forEach(function(x){if(x[1])so.push('🔗 <a href="'+x[1]+'">'+x[0]+'</a>')});

/* barre verte du haut : on retire la zone des coordonnées */
document.querySelectorAll('.top .coords').forEach(function(e){e.parentNode.removeChild(e)});

/* ===== PIED DE PAGE : sans "Liens rapides", "Suivez-nous" seulement si réseaux ===== */
document.querySelectorAll('footer h4[data-en="Quick links"]').forEach(function(h){h.parentNode.parentNode.removeChild(h.parentNode)});
document.querySelectorAll('footer h4[data-en="Follow us"]').forEach(function(h){
 var col=h.parentNode;
 if(so.length){var z=col.querySelector('.coords');if(z)z.innerHTML=so.join('<br>')}
 else col.parentNode.removeChild(col);
});

/* ===== STYLE ===== */
var st=document.createElement('style');
st.textContent='footer .fg{display:flex!important;justify-content:center;align-items:flex-start;gap:60px;text-align:center}footer .fg img{margin:0 auto 10px}.contact-coords{margin:14px 0}.contact-coords a{color:inherit!important;font-weight:600;text-decoration:underline}';
document.head.appendChild(st);

/* ===== PAGE CONTACT : email sous "Siège social" ===== */
if(document.getElementById('send')||/contact/.test(location.pathname)){
 var tgt=null;
 document.querySelectorAll('p,div,li').forEach(function(e){
  if(!tgt&&e.children.length===0&&/^\s*(Siège social|Head office)/.test(e.textContent))tgt=e;
 });
 var box=document.createElement('p');box.className='contact-coords';box.innerHTML=c.join('<br>');
 if(tgt){tgt.parentNode.insertBefore(box,tgt.nextSibling)}
 else{var f=document.getElementById('send');if(f)f.parentNode.insertBefore(box,f.parentNode.firstChild)}
}

/* ===== BOUTON ENVOYER (formulaire) ===== */
var s=document.getElementById('send');
if(s)s.onclick=function(){
 if(!EMAIL){alert('Email non configuré / not set');return}
 location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(document.getElementById('sj').value+' – '+document.getElementById('nm').value)+'&body='+encodeURIComponent(document.getElementById('ms').value);
};
})();
