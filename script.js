
/* ===== FORMULAIRE DE CONTACT ===== */
(function () {
  'use strict';

  var FORMSPREE = 'https://formspree.io/f/xeagpoby';

  var btn = document.getElementById('send');
  var stt = document.getElementById('st');

  if (!btn) return;

  function isEn() {
    return document.documentElement.lang === 'en' ||
      (typeof en !== 'undefined' && !!en);
  }

  function say(fr, eng, ok) {
    if (!stt) return;
    stt.textContent = isEn() ? eng : fr;
    stt.className = ok ? 'ok' : 'ko';
  }

  function setErr(id, fr, eng, bad) {
    var el = document.getElementById(id);
    var er = document.getElementById(id + '-e');

    if (el) {
      el.setAttribute('aria-invalid', bad ? 'true' : 'false');
    }

    if (er) {
      er.textContent = bad ? (isEn() ? eng : fr) : '';
    }
  }

  function checkForm() {
    var nm = document.getElementById('nm');
    var em = document.getElementById('em');
    var ms = document.getElementById('ms');
    var cs = document.getElementById('cs');

    var valid = true;

    if (!nm || !nm.value.trim()) {
      setErr('nm', 'Veuillez saisir votre nom.', 'Please enter your name.', true);
      valid = false;
    } else {
      setErr('nm', '', '', false);
    }

    var emailValid = em &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim());

    if (!emailValid) {
      setErr('em', 'Veuillez saisir une adresse e-mail valide.',
        'Please enter a valid email address.', true);
      valid = false;
    } else {
      setErr('em', '', '', false);
    }

    if (!ms || !ms.value.trim()) {
      setErr('ms', 'Veuillez écrire votre message.',
        'Please enter your message.', true);
      valid = false;
    } else {
      setErr('ms', '', '', false);
    }

    return valid;
  }

  btn.addEventListener('click', async function (event) {
    event.preventDefault();

    if (!checkForm()) {
      say('Veuillez corriger les champs indiqués.',
        'Please correct the highlighted fields.', false);
      return;
    }

    if (!FORMSPREE) {
      say('Le service de contact n’est pas configuré.',
        'Contact service is not configured.', false);
      return;
    }

    var nm = document.getElementById('nm');
    var em = document.getElementById('em');
    var ms = document.getElementById('ms');
    var cs = document.getElementById('cs');

    var data = new FormData();
    data.append('name', nm.value.trim());
    data.append('email', em.value.trim());
    data.append('message', ms.value.trim());

    if (cs && cs.value.trim()) {
      data.append('subject', cs.value.trim());
    }

    btn.disabled = true;
    btn.textContent = isEn() ? 'Sending...' : 'Envoi en cours...';

    try {
      var response = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        var errorData = await response.json().catch(function () {
          return {};
        });

        throw new Error(
          errorData.errors
            ? errorData.errors.map(function (e) {
                return e.message;
              }).join(', ')
            : 'Erreur HTTP ' + response.status
        );
      }

      say(
        'Votre message a été envoyé avec succès !',
        'Your message has been sent successfully!',
        true
      );

      document.getElementById('nm').value = '';
      document.getElementById('em').value = '';
      document.getElementById('ms').value = '';
      if (cs) cs.value = '';

    } catch (error) {
      console.error('Erreur formulaire:', error);

      say(
        'Échec de l’envoi. Vérifiez votre connexion ou la configuration Formspree.',
        'Sending failed. Check your connection or Formspree configuration.',
        false
      );

    } finally {
      btn.disabled = false;
      btn.textContent = isEn() ? 'Send message' : 'Envoyer le message';
    }
  });

})();
