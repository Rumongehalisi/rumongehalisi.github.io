var EMAIL="rumongehalisiassociation@outlook.com",WHATSAPP="",FACEBOOK="",INSTAGRAM="",TIKTOK="",YOUTUBE="",TELEPHONE="";
(function(){
/* ===== TRADUCTIONS FR -> EN ===== */
var T={
"Rumonge, Burundi · Association sans but lucratif et apolitique":"Rumonge, Burundi · Non-profit, non-political association",
"Accueil":"Home","À propos":"About","Mission":"Mission","Vision":"Vision","Valeurs":"Values","URAI":"URAI","Actualités":"News","Aider":"Help","Rapports":"Reports","Contact":"Contact","Partenaires":"Partners","Faire un don":"Donate",
"Rumonge · Burundi":"Rumonge · Burundi",
"Association de Rumonge Halisi":"Rumonge Halisi Association",
"Encadrement de la communauté, amélioration de la vie et le bien-être.":"Community support, improving life and well-being.",
"En savoir plus":"Learn more","membres":"members","domaines d’action":"areas of action","activités / mois (objectif)":"activities / month (goal)",
"Qui nous sommes":"Who we are",
"Association sans but lucratif et apolitique à caractère socio-éducatif, environnemental et culturel. Nous œuvrons pour l’amélioration de la vie, la participation citoyenne et la formation de la jeunesse burundaise.":"Non-profit, non-political association with a socio-educational, environmental and cultural focus. We work to improve lives, encourage civic participation and train Burundian youth.",
"Nous accompagnons":"We support",
"Orphelins":"Orphans","Veuves en détresse":"Widows in distress","Jeunes filles-mères":"Young single mothers","Personnes démunies":"Destitute people","Enfants de la rue":"Street children","Jeunes sans emploi":"Unemployed youth","Personnes malades":"Sick people",
"Nos six domaines d’action":"Our six areas of action",
"Éducation et Formation":"Education and Training","Scolarisation des orphelins, enseignement supérieur et universitaire, formation aux métiers.":"Schooling for orphans, higher and university education, vocational training.",
"Santé et Soutien Social":"Health and Social Support","Visites, accompagnement psychosocial, aide à l’accès aux soins, aux examens et aux médicaments, prévention.":"Visits, psychosocial support, help accessing care, tests and medicines, prevention.",
"Lutte contre la Pauvreté":"Fighting Poverty","Micro-projets pour la jeunesse, activités génératrices de revenus, aide alimentaire, lutte contre la malnutrition.":"Micro-projects for youth, income-generating activities, food aid, fighting malnutrition.",
"Solidarité et Entraide":"Solidarity and Mutual Aid","Du décès à l’inhumation ou au rapatriement : démarches, veillée, cérémonie, soutien matériel et moral.":"From death to burial or repatriation: procedures, wake, ceremony, material and moral support.",
"Paix et Citoyenneté":"Peace and Citizenship","Humanité, solidarité, patriotisme, bonne cohabitation et sauvegarde de la paix.":"Humanity, solidarity, patriotism, good coexistence and safeguarding peace.",
"Développement Communautaire":"Community Development","Renforcement de l’action communautaire, conseil aux associations et recherche à travers l’URAI.":"Strengthening community action, advice to associations and research through URAI.",
"Dernières actions":"Latest actions",
"Hôpitaux généraux":"General hospitals","Cantines temporaires pour les malades : bouillies, nourriture, savons et cadeaux.":"Temporary canteens for the sick: porridge, food, soap and gifts.",
"Prisons":"Prisons","Visites et dons selon les besoins.":"Visits and donations according to needs.",
"Colis alimentaires":"Food parcels","Pour les orphelins et les malades, selon les besoins.":"For orphans and the sick, according to needs.",
"Toutes les actualités →":"All news →",
"Rejoignez-nous":"Join us","Membre, donateur, bénévole ou partenaire : vous pouvez faire la différence.":"Member, donor, volunteer or partner: you can make a difference.","Comment aider":"How to help",
"Ensemble, nous nous élevons et changeons des vies":"Together, we rise and change lives",
"ASSOCIATION DE RUMONGE HALISI – associations sans but lucratif":"RUMONGE HALISI ASSOCIATION – non-profit association",
"Colline Centre Urbain, Zone, Commune et Province de Rumonge, Burundi":"Centre Urbain Hill, Zone, Commune and Province of Rumonge, Burundi",
"Liens rapides":"Quick links","Suivez-nous":"Follow us","Politique de confidentialité":"Privacy policy","Conditions d’utilisation":"Terms of use",
"Rejoindre, soutenir ou suivre notre travail.":"Join, support or follow our work.",
"Nous écrire":"Write to us","Votre nom":"Your name","Sujet":"Subject","Message":"Message","Envoyer":"Send",
"Adhésion":"Membership","Don":"Donation","Partenariat":"Partnership","Autre":"Other",
"Siège social : Colline Centre Urbain, Zone, Commune et Province de Rumonge, Burundi.":"Head office: Centre Urbain Hill, Zone, Commune and Province of Rumonge, Burundi."
};
var P=[["Tous droits réservés.","All rights reserved."]];
var en=false;try{en=localStorage.getItem('lang')==='en'}catch(x){}

/* ===== COLLECTE DES TEXTES DE LA PAGE ===== */
var nodes=[];
(function walk(n){
 for(var c=n.firstChild;c;c=c.nextSibling){
  if(c.nodeType===3){if(c.nodeValue.trim())nodes.push({n:c,fr:c.nodeValue})}
  else if(c.nodeType===1&&!/^(SCRIPT|STYLE|NOSCRIPT)$/.test(c.tagName))walk(c);
 }
})(document.body);

function tr(s){
 var m=s.match(/^([^\p{L}\p{N}«]*)([\s\S]*?)(\s*)$/u),k=m[2].replace(/'/g,'’');
 if(T[k])return m[1]+T[k]+m[3];
 P.forEach(function(p){s=s.split(p[0]).join(p[1])});
 return s;
}

/* ===== BOUTON DE LANGUE ===== */
var b=document.getElementById('lang');
if(!b){Array.prototype.forEach.call(document.querySelectorAll('a,button'),function(e){if(e.textContent.trim()==='EN')b=e})}
function ap(){
 nodes.forEach(function(o){o.n.nodeValue=en?tr(o.fr):o.fr});
 document.documentElement.lang=en?'en':'fr';
 if(b)b.textContent=en?'FR':'EN';
}
if(b)b.onclick=function(ev){if(ev)ev.preventDefault();en=!en;try{localStorage.setItem('lang',en?'en':'fr')}catch(x){}ap();return false};
if(en)ap();

/* ===== MENU MOBILE ===== */
var mn=document.getElementById('menu'),nav=document.getElementById('nav');
if(mn&&nav)mn.onclick=function(){nav.classList.toggle('open')};

/* ===== COORDONNEES (email, réseaux) ===== */
var c=[];
if(EMAIL)c.push('✉️ <a href="mailto:'+EMAIL+'">'+EMAIL+'</a>');
if(TELEPHONE)c.push('📞 '+TELEPHONE);
if(WHATSAPP)c.push('💬 <a href="https://wa.me/'+WHATSAPP+'">WhatsApp</a>');
[['Facebook',FACEBOOK],['Instagram',INSTAGRAM],['TikTok',TIKTOK],['YouTube',YOUTUBE]].forEach(function(x){if(x[1])c.push('🔗 <a href="'+x[1]+'">'+x[0]+'</a>')});

var st=document.createElement('style');
st.textContent='.contact-coords{margin:14px 0}.contact-coords a{color:#1b5e20!important;text-decoration:underline;font-weight:600}';
document.head.appendChild(st);

/* on retire l'email de la barre du haut sur toutes les pages */
document.querySelectorAll('.coords').forEach(function(e){e.innerHTML='';e.style.display='none'});

/* on l'affiche uniquement sur la page Contact, sous "Siège social" */
if(document.getElementById('send')||/contact/.test(location.pathname)){
 var tgt=null;
 document.querySelectorAll('p,div,li').forEach(function(e){if(!tgt&&e.children.length===0&&/^\s*Siège social/.test(e.textContent))tgt=e});
 var box=document.createElement('p');box.className='contact-coords';box.innerHTML=c.join('<br>');
 if(tgt){tgt.parentNode.insertBefore(box,tgt.nextSibling)}
 else{var f=document.getElementById('send');if(f)f.parentNode.insertBefore(box,f.parentNode.firstChild)}
}

/* ===== BOUTON ENVOYER (formulaire) ===== */
var s=document.getElementById('send');
if(s)s.onclick=function(){if(!EMAIL){alert('Email non configuré / not set');return}
location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(document.getElementById('sj').value+' – '+document.getElementById('nm').value)+'&body='+encodeURIComponent(document.getElementById('ms').value)};
})();
