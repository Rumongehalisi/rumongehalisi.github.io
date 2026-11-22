var EMAIL="rumongehalisiassociation@outlook.com",WHATSAPP="",FACEBOOK="",INSTAGRAM="",TIKTOK="",YOUTUBE="",TELEPHONE="";
(function(){
/* ===== RESEAUX SOCIAUX : logos officiels (grisés tant que le lien est vide) ===== */
var nets=[
 ['Facebook','facebook','1877F2',FACEBOOK],
 ['Instagram','instagram','E4405F',INSTAGRAM],
 ['TikTok','tiktok','000000',TIKTOK],
 ['YouTube','youtube','FF0000',YOUTUBE],
 ['WhatsApp','whatsapp','25D366',WHATSAPP?'https://wa.me/'+WHATSAPP:'']
];
function pills(){
 return '<div class="soc">'+nets.map(function(n){
  var img='<img src="https://cdn.simpleicons.org/'+n[1]+'/'+n[2]+'" alt="'+n[0]+'" onerror="this.replaceWith(\''+n[0].charAt(0)+'\')">';
  return n[3]
   ?'<a href="'+n[3]+'" target="_blank" rel="noopener" aria-label="'+n[0]+'" title="'+n[0]+'">'+img+'</a>'
   :'<span aria-label="'+n[0]+'" title="'+n[0]+' – Bientôt / Soon">'+img+'</span>';
 }).join('')+'</div>';
}

/* ===== STYLE ===== */
var st=document.createElement('style');
st.textContent=
 /* pied de page : logo à gauche, réseaux à droite, liens rapides en ligne dessous */
 'footer .fg{display:flex!important;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:28px 40px}'+
 'footer .fg>.fb{flex:1 1 340px}'+
 'footer .fg>.fs{flex:0 1 auto}'+
 'footer .fg>.ql{order:3;flex:0 0 100%;display:flex;flex-wrap:wrap;align-items:center;gap:10px 30px;padding-top:22px;border-top:1px solid rgba(255,255,255,.18)}'+
 'footer .fg>.ql h4{flex:0 0 100%;margin:0 0 2px}'+
 'footer .fg>.ql a{display:inline-block!important;padding:0!important;margin:0!important}'+
 /* logos réseaux sociaux */
 '.soc{display:flex;flex-wrap:wrap;gap:12px}'+
 '.soc a,.soc span{display:flex!important;align-items:center;justify-content:center;width:46px;height:46px;padding:0!important;border-radius:50%;background:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.12);font-weight:700;color:#1b5e20!important;text-decoration:none;transition:transform .15s}'+
 '.soc a:hover{transform:translateY(-3px)}'+
 '.soc span{opacity:.45;cursor:default;filter:grayscale(1)}'+
 '.soc img{width:22px;height:22px;display:block;margin:0}'+
 /* page Contact */
 '.contact-coords{margin:14px 0}'+
 '.contact-coords .soc{margin-top:10px}';
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
