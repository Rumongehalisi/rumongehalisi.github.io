/* ===== FORMULAIRE DE CONTACT ===== */
(function () {
  var FORMSPREE = 'https://formspree.io/f/xeagpoby';
  var EMAIL = '';      // optionnel : secours par mailto si FORMSPREE est vide
  var WHATSAPP = '';   // optionnel : numéro sans +, ex. 25712345678

  var btn = document.getElementById('send');
  var stt = document.getElementById('st');
  if (!btn) return;

  // Langue courante (utilise la variable "en" du site si elle existe)
  function isEn() {
    try {
      if (typeof en !== 'undefined') return !!en;
    } catch (e) {}
    return document.documentElement.lang === 'en';
  }

  function say(fr, eng, ok) {
    if (!stt) return;
    stt.textContent = isEn() ? eng : fr;
    stt.className = ok ? 'ok' : 'ko';
  }

  function setErr(id, fr, eng, bad) {
    var el = document.getElementById(id);
    var er = document.getElementById(id + '-e');
    if (el) el.setAttribute('aria-invalid', bad ? 'true' : 'false');
    if (er) er.textContent = bad ? (isEn() ? eng : fr) : '';
  }

  function checkForm() {
    var nm = document.getElementById('nm');
    var em = document.getElementById('em');
    var ms = document.getElementById('ms');
    var cs = document.getElementById('cs');
