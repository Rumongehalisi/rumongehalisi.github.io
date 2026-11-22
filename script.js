/* ⚠️ À COMPLÉTER */
var EMAIL="",WHATSAPP="",FACEBOOK="",INSTAGRAM="",TIKTOK="",YOUTUBE="",TELEPHONE="";
(function(){
var en=localStorage.getItem('lang')==='en',els=document.querySelectorAll('[data-en]'),b=document.getElementById('lang'),nav=document.getElementById('nav');
els.forEach(function(e){e.setAttribute('data-fr',e.textContent)});
function ap(){els.forEach(function(e){e.textContent=e.getAttribute(en?'data-en':'data-fr')});document.documentElement.lang=en?'en':'fr';b.textContent=en?'FR':'EN'}
b.onclick=function(){en=!en;try{localStorage.setItem('lang',en?'en':'fr')}catch(x){}ap()};if(en)ap();
document.getElementById('menu').onclick=function(){nav.classList.toggle('open')};
var c=[];if(var EMAIL="rumongehalisiassociation@outlook.com",WHATSAPP="",FACEBOOK="",INSTAGRAM="",TIKTOK="",YOUTUBE="",TELEPHONE="";)c.push('✉️ <a href="mailto:'+EMAIL+'">'+EMAIL+'</a>');if(TELEPHONE)c.push('📞 '+TELEPHONE);if(WHATSAPP)c.push('💬 <a href="https://wa.me/'+WHATSAPP+'">WhatsApp</a>');[['Facebook',FACEBOOK],['Instagram',INSTAGRAM],['TikTok',TIKTOK],['YouTube',YOUTUBE]].forEach(function(x){if(x[1])c.push('🔗 <a href="'+x[1]+'">'+x[0]+'</a>')});
document.querySelectorAll('.coords').forEach(function(e){e.innerHTML=c.join('<br>')});
var s=document.getElementById('send');if(s)s.onclick=function(){if(!EMAIL){alert('Email non configuré / not set');return}
location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(document.getElementById('sj').value+' – '+document.getElementById('nm').value)+'&body='+encodeURIComponent(document.getElementById('ms').value)};
})();
