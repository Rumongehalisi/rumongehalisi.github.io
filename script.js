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
    var bad = [];

    var b1 = nm.value.trim().length < 2;
    setErr('nm', 'Indiquez votre nom.', 'Please enter your name.', b1);
    if (b1) bad.push(nm);

    var b2 = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim());
    setErr('em', 'Indiquez une adresse e-mail valide.', 'Please enter a valid email address.', b2);
    if (b2) bad.push(em);

    var b3 = ms.value.trim().length < 10;
    setErr('ms', 'Écrivez un message d’au moins 10 caractères.', 'Please write a message of at least 10 characters.', b3);
    if (b3) bad.push(ms);

    if (cs) {
      var b4 = !cs.checked;
      setErr('cs', 'Cochez la case pour que nous puissions vous répondre.', 'Please tick the box so we can reply to you.', b4);
      if (b4) bad.push(cs);
    }

    if (bad.length) { bad[0].focus(); return false; }
    return true;
  }

  btn.addEventListener('click', function () {
    if (stt) { stt.textContent = ''; stt.className = ''; }
    if (!checkForm()) return;

    // Champ piège anti-spam : on ne fait rien si un robot l'a rempli
    var hp = document.getElementById('hp');
    if (hp && hp.value) {
      say('Merci, votre message est envoyé.', 'Thank you, your message has been sent.', true);
      return;
    }

    var nm = document.getElementById('nm').value.trim();
    var em = document.getElementById('em').value.trim();
    var phEl = document.getElementById('ph');
    var ph = phEl ? phEl.value.trim() : '';
    var sj = document.getElementById('sj').value;
    var ms = document.getElementById('ms').value.trim();

    /* --- Envoi via Formspree --- */
    if (FORMSPREE) {
      btn.disabled = true;
      btn.textContent = isEn() ? 'Sending…' : 'Envoi en cours…';

      var data = {
        name: nm,
        email: em,
        phone: ph,
        subject: sj,
        message: ms,
        _subject: 'Site Rumonge Halisi – ' + sj
      };

      fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (d) {
            if (!r.ok) {
              var m = (d && d.errors && d.errors.map(function (x) { return x.message; }).join(' '))
                || (d && d.error)
                || ('HTTP ' + r.status);
              throw new Error(m);
            }
            say(
              'Merci, votre message est envoyé. Nous vous répondrons très bientôt.',
              'Thank you, your message has been sent. We will reply very soon.',
              true
            );
            ['nm', 'em', 'ph', 'ms'].forEach(function (id) {
              var e = document.getElementById(id);
              if (e) e.value = '';
            });
            var cs = document.getElementById('cs');
            if (cs) cs.checked = false;
          });
        })
        .catch(function (er) {
          var msg = (er && er.message) || er;
          say(
            'Envoi impossible (' + msg + '). Réessayez ou écrivez-nous directement.',
            'Could not send (' + msg + '). Try again or write to us directly.',
            false
          );
        })
        .then(function () {
          btn.disabled = false;
          btn.textContent = isEn() ? 'Send message' : 'Envoyer le message';
        });
      return;
    }

    /* --- Secours : mailto --- */
    var body = ms + '\n\n' + nm + ' <' + em + '>' + (ph ? '\n' + ph : '');
    if (EMAIL) {
      location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(sj + ' – ' + nm) + '&body=' + encodeURIComponent(body);
      return;
    }

    /* --- Secours : WhatsApp --- */
    if (WHATSAPP) {
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(sj + ' : ' + body), '_blank', 'noopener');
      return;
    }

    say('Le formulaire n’est pas encore configuré.', 'The form is not configured yet.', false);
  });
})();
