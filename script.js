
/* =====================================================
   ASSOCIATION DE RUMONGE HALISI
   SCRIPT GLOBAL : LANGUES + MENU + CONTACT
   ===================================================== */

(function () {
  'use strict';

  /* =====================================================
     1. LANGUE FRANCAIS / ANGLAIS
     ===================================================== */

  var langButton = document.getElementById('lang');
  var currentLang = 'fr';

  try {
    var saved = localStorage.getItem('site-language');

    if (saved === 'fr' || saved === 'en') {
      currentLang = saved;
    }
  } catch (e) {}

  function translatePage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-en]').forEach(function (el) {

      if (!el.hasAttribute('data-fr')) {
        el.setAttribute('data-fr', el.textContent);
      }

      el.textContent = lang === 'en'
        ? el.getAttribute('data-en')
        : el.getAttribute('data-fr');
    });

    if (langButton) {
      langButton.textContent = lang === 'fr' ? 'EN' : 'FR';
    }

    try {
      localStorage.setItem('site-language', lang);
    } catch (e) {}

    refreshFormStatus();
  }

  if (langButton) {
    langButton.addEventListener('click', function () {
      translatePage(currentLang === 'fr' ? 'en' : 'fr');
    });
  }


  /* =====================================================
     2. MENU MOBILE
     ===================================================== */

  var menuButton = document.getElementById('menu');
  var nav = document.getElementById('nav');

  if (menuButton && nav) {

    menuButton.addEventListener('click', function () {

      var opened = nav.classList.toggle('open');

      menuButton.setAttribute(
        'aria-expanded',
        opened ? 'true' : 'false'
      );

      menuButton.textContent = opened ? '✕' : '☰';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
      });
    });
  }


  /* =====================================================
     3. FORMULAIRE DE CONTACT
     ===================================================== */

  var FORMSPREE = 'https://formspree.io/f/xeagpoby';

  var sendButton = document.getElementById('send');
  var status = document.getElementById('st');

  var sending = false;
  var lastStatus = null;

  function isEnglish() {
    return currentLang === 'en';
  }

  function refreshFormStatus() {
    if (!status || !lastStatus) return;

    status.textContent = isEnglish()
      ? lastStatus.en
      : lastStatus.fr;

    status.className = lastStatus.success ? 'ok' : 'ko';
  }

  function showStatus(fr, en, success) {
    lastStatus = {
      fr: fr,
      en: en,
      success: success
    };

    refreshFormStatus();
  }

  function setError(id, fr, en, invalid) {

    var field = document.getElementById(id);
    var error = document.getElementById(id + '-e');

    if (field) {
      field.setAttribute(
        'aria-invalid',
        invalid ? 'true' : 'false'
      );
    }

    if (error) {
      error.textContent = invalid
        ? (isEnglish() ? en : fr)
        : '';
    }
  }


  /* =====================================================
     4. VALIDATION DES CHAMPS
     ===================================================== */

  function validateForm() {

    var name = document.getElementById('nm');
    var email = document.getElementById('em');
    var message = document.getElementById('ms');

    var valid = true;

    if (!name || !name.value.trim()) {

      setError(
        'nm',
        'Veuillez saisir votre nom.',
        'Please enter your name.',
        true
      );

      valid = false;

    } else {
      setError('nm', '', '', false);
    }

    if (
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
    ) {

      setError(
        'em',
        'Veuillez saisir une adresse e-mail valide.',
        'Please enter a valid email address.',
        true
      );

      valid = false;

    } else {
      setError('em', '', '', false);
    }

    if (!message || !message.value.trim()) {

      setError(
        'ms',
        'Veuillez écrire votre message.',
        'Please enter your message.',
        true
      );

      valid = false;

    } else {
      setError('ms', '', '', false);
    }

    return valid;
  }


  /* =====================================================
     5. ENVOI DU MESSAGE
     ===================================================== */

  async function sendMessage() {

    if (sending) return;

    var name = document.getElementById('nm');
    var email = document.getElementById('em');
    var phone = document.getElementById('ph');
    var subject = document.getElementById('sj');
    var message = document.getElementById('ms');
    var consent = document.getElementById('cs');
    var honeypot = document.getElementById('hp');

    if (!name || !email || !message) {
      showStatus(
        'Formulaire incomplet.',
        'Incomplete form.',
        false
      );
      return;
    }

    if (!validateForm()) {
      showStatus(
        'Veuillez corriger les champs indiqués.',
        'Please correct the highlighted fields.',
        false
      );
      return;
    }

    // Protection anti-robots
    if (honeypot && honeypot.value.trim()) {
      showStatus(
        'Demande impossible à traiter.',
        'Unable to process request.',
        false
      );
      return;
    }

    var data = new FormData();

    data.append('name', name.value.trim());
    data.append('email', email.value.trim());
    data.append('_replyto', email.value.trim());
    data.append('message', message.value.trim());

    if (phone && phone.value.trim()) {
      data.append('phone', phone.value.trim());
    }

    if (subject) {
      data.append('subject', subject.value);
    }

    if (consent) {
      data.append(
        'consent',
        consent.checked ? 'Oui' : 'Non'
      );
    }

    sending = true;
    sendButton.disabled = true;

    sendButton.textContent = isEnglish()
      ? 'Sending...'
      : 'Envoi en cours...';

    showStatus(
      'Envoi de votre message...',
      'Sending your message...',
      true
    );

    try {

      var response = await fetch(FORMSPREE, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: data
      });

      var result = await response.json().catch(function () {
        return {};
      });

      if (!response.ok) {
        throw new Error(
          result.errors
            ? result.errors.map(function (e) {
                return e.message;
              }).join(', ')
            : 'Erreur HTTP ' + response.status
        );
      }

      showStatus(
        'Votre message a été envoyé avec succès. Merci !',
        'Your message has been sent successfully. Thank you!',
        true
      );

      name.value = '';
      email.value = '';
      message.value = '';

      if (phone) phone.value = '';
      if (subject) subject.selectedIndex = 0;
      if (consent) consent.checked = false;

      ['nm', 'em', 'ms'].forEach(function (id) {
        setError(id, '', '', false);
      });

    } catch (error) {

      console.error('Erreur formulaire :', error);

      showStatus(
        'Échec de l’envoi. Vérifiez votre connexion et réessayez.',
        'Sending failed. Check your connection and try again.',
        false
      );

    } finally {

      sending = false;
      sendButton.disabled = false;

      sendButton.textContent = isEnglish()
        ? 'Send message'
        : 'Envoyer le message';
    }
  }

  if (sendButton) {
    sendButton.addEventListener('click', function (event) {
      event.preventDefault();
      sendMessage();
    });
  }


  /* =====================================================
     6. SUPPRESSION DES ERREURS PENDANT LA SAISIE
     ===================================================== */

  ['nm', 'em', 'ms'].forEach(function (id) {

    var field = document.getElementById(id);

    if (field) {
      field.addEventListener('input', function () {
        setError(id, '', '', false);
      });
    }

  });


  /* =====================================================
     7. DEMARRAGE DU SITE
     ===================================================== */

  translatePage(currentLang);

  console.log(
    'Rumonge Halisi : système FR/EN et JavaScript activés.'
  );

})();
