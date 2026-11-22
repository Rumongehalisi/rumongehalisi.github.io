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

/* ===== COORDONNEES ET RESEAUX SOCIAUX ===== */
var c=[];
if(EMAIL)c.push('✉️ <a href="mailto:'+EMAIL+'">'+EMAIL+'</a>');
if(TELEPHONE)c.push('📞 '+TELEPHONE);

var nets=[['Facebook',FACEBOOK],['Instagram',INSTAGRAM],['TikTok',TIKTOK],['YouTube',YOUTUBE],['WhatsApp',WHATSAPP?'https://wa.me/'+WHATSAPP:'']];
function pills(){
 return '<div class="soc">'+nets.map(function(n){
  return n[1]
   ?'<a href="'+n[1]+'" target="_blank" rel="noopener">'+n[0]+'</a>'
   :'<span title="Bientôt / Soon">'+n[0]+'</span>';
 }).join('')+'</div>';
}

/* barre verte du haut : on retire la zone des coordonnées */
document.querySelectorAll('.top .coords').forEach(function(e){e.parentNode.removeChild(e)});

/* ===== PIED DE PAGE : sans "Liens rapides", avec la zone réseaux sociaux ===== */
document.querySelectorAll('footer h4[data-en="Quick links"]').forEach(function(h){h.parentNode.parentNode.removeChild(h.parentNode)});
document.querySelectorAll('footer h4[data-en="Follow us"]').forEach(function(h){
 var z=h.parentNode.querySelector('.coords');
 if(z)z.innerHTML=pills();
});

/* ===== STYLE ===== */
var st=document.createElement('style');
st.textContent=
 'footer .fg{display:flex!important;justify-content:center;align-items:flex-start;gap:60px;flex-wrap:wrap;text-align:center}'+
 'footer .fg img{margin:0 auto 10px}'+
 '.soc{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:8px}'+
 '.soc a,.soc span{display:inline-block;padding:8px 18px;border:1px solid currentColor;border-radius:999px;font-size:.9rem;font-weight:600;text-decoration:none;color:inherit!important;line-height:1.2}'+
 '.soc a:hover{opacity:.7}'+
 '.soc span{opacity:.4;cursor:default}'+
 '.contact-coords{margin:14px 0}'+
 '.contact-coords a{color:inherit!important;font-weight:600;text-decoration:underline}'+
 '.contact-coords .soc{justify-content:flex-start}';
document.head.appendChild(st);

/* ===== PAGE CONTACT : email + réseaux sous "Siège social" ===== */
if(document.getElementById('send')||/contact/.test(location.pathname)){
 var tgt=null;
 document.querySelectorAll('p,div,li').forEach(function(e){
  if(!tgt&&e.children.length===0&&/^\s*(Siège social|Head office)/.test(e.textContent))tgt=e;
 });
 var box=document.createElement('div');box.className='contact-coords';
 box.innerHTML=(c.length?'<p>'+c.join('<br>')+'</p>':'')+pills();
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
