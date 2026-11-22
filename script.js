var EMAIL="rumongehalisiassociation@outlook.com",WHATSAPP="",FACEBOOK="",INSTAGRAM="",TIKTOK="",YOUTUBE="",TELEPHONE="";
(function(){
/* ===== RESEAUX SOCIAUX : boutons (grisés tant que le lien est vide) ===== */
var nets=[['Facebook',FACEBOOK],['Instagram',INSTAGRAM],['TikTok',TIKTOK],['YouTube',YOUTUBE],['WhatsApp',WHATSAPP?'https://wa.me/'+WHATSAPP:'']];
function pills(){
 return '<div class="soc">'+nets.map(function(n){
  return n[1]
   ?'<a href="'+n[1]+'" target="_blank" rel="noopener">'+n[0]+'</a>'
   :'<span title="Bientôt / Soon">'+n[0]+'</span>';
 }).join('')+'</div>';
}

/* ===== STYLE ===== */
var st=document.createElement('style');
st.textContent=
 'footer .fg{display:flex!important;justify-content:center;align-items:flex-start;gap:60px;flex-wrap:wrap;text-align:center}'+
 'footer .fg img{margin:0 auto 10px}'+
 '.soc-block{text-align:center;margin:28px 0 12px}'+
 '.soc-block h4{margin:0 0 12px}'+
 '.soc{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}'+
 '.soc a,.soc span{display:inline-block;padding:9px 20px;border-radius:999px;font-size:.9rem;font-weight:700;text-decoration:none;line-height:1.2;background:#fff;color:#1b5e20!important;border:2px solid #1b5e20}'+
 '.soc a:hover{background:#1b5e20;color:#fff!important}'+
 '.soc span{background:#eee;color:#888!important;border-color:#ccc;cursor:default}'+
 '.contact-coords{margin:14px 0}'+
 '.contact-coords a:not(.x){color:inherit}'+
 '.contact-coords .soc{justify-content:flex-start;margin-top:10px}';
document.head.appendChild(st);

/* ===== BARRE DU HAUT : on retire la zone des coordonnées ===== */
document.querySelectorAll('.top .coords').forEach(function(e){e.parentNode.removeChild(e)});

/* ===== PIED DE PAGE : sans "Liens rapides", avec un bloc "Suivez-nous" ===== */
var ft=document.querySelector('footer');
if(ft){
 document.querySelectorAll('footer h4[data-en="Quick links"],footer h4[data-en="Follow us"]').forEach(function(h){
  var col=h.parentNode;if(col&&col.parentNode)col.parentNode.removeChild(col);
 });
 var blk=document.createElement('div');blk.className='soc-block';
 blk.innerHTML='<h4 data-en="Follow us">Suivez-nous</h4>'+pills();
 var cp=ft.querySelector('.copy');
 if(cp&&cp.parentNode)cp.parentNode.insertBefore(blk,cp);
 else(ft.querySelector('.wrap')||ft).appendChild(blk);
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
 else{var f=document.getElementById('send');if(f)f.parentNode.insertBefore(box,f.parentNode.firstChild)}
}

/* ===== BOUTON ENVOYER (formulaire) ===== */
var s=document.getElementById('send');
if(s)s.onclick=function(){
 if(!EMAIL){alert('Email non configuré / not set');return}
 location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(document.getElementById('sj').value+' – '+document.getElementById('nm').value)+'&body='+encodeURIComponent(document.getElementById('ms').value);
};
})();
