
/* =====================================================
   ASSOCIATION DE RUMONGE HALISI
   SYSTEME COMPLET : FR / EN + MENU + CONTACT
   ===================================================== */

(function () {
  'use strict';

  /* =====================================================
     1. GESTION DES LANGUES FRANCAIS / ANGLAIS
     ===================================================== */

  var langButton = document.getElementById('lang');
  var currentLang = 'fr';

  // Lire la langue précédemment choisie
  try {
    var savedLang = localStorage.getItem('site-language');

    if (savedLang === 'fr' || savedLang === 'en') {
      currentLang = savedLang;
    }
  } catch (error) {
    console.warn('Stockage de la langue indisponible.');
  }

  // Traduire tous les éléments portant data-en
  function translatePage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    var elements = document.querySelectorAll('[data-en]');

    elements.forEach(function (element) {

      // Conserver le texte français original
      if (!element.hasAttribute('data-fr')) {
        element.setAttribute('data-fr', element.textContent);
      }

      var french = element.getAttribute('data-fr');
      var english = element.getAttribute('data-en');

      element.textContent = lang === 'en' ? english : french;
    });

    // Modifier le bouton de langue
    if (langButton) {
      langButton.textContent = lang === 'fr' ? 'EN' : 'FR';

      langButton.setAttribute(
        'aria-label',
        lang === 'fr' ? 'Switch to English' : 'Passer en français'
      );
    }

    // Mémoriser le choix
    try {
      localStorage.setItem('site-language', lang);
    } catch (error) {
      console.warn('Impossible de sauvegarder la langue.');
    }

    // Actualiser les messages du formulaire si nécessaire
    updateContactLanguage();
  }

  // Bouton FR / EN
  if (langButton) {
    langButton.addEventListener('click', function () {
      translatePage(currentLang === 'fr' ? 'en' : 'fr');
    });
  }


  /* =====================================================
     2. MENU DE NAVIGATION MOBILE
     ===================================================== */

  var menuButton = document.getElementById('menu');
  var navigation = document.getElementById('nav');

  if (menuButton && navigation) {

    menuButton.addEventListener('click', function () {

      var isOpen = navigation.classList.toggle('open');

      menuButton.setAttribute(
        'aria-expanded',
        isOpen ? 'true' : 'false'
      );

      menuButton.textContent = isOpen ? '✕' : '☰';
    });

    // Fermer le menu après avoir choisi une page
    navigation.querySelectorAll('a').forEach(function (link) {

      link.addEventListener('click', function () {
        navigation.classList.remove('open');

        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
      });

    });

  }


  /* =====================================================
     3. FORMULAIRE DE CONTACT - FORMSPREE
     ===================================================== */

  var FORMSPREE = 'https://formspree.io/f/xeagpoby';

  var sendButton = document.getElementById('send');
  var statusElement = document.getElementById('st');

  var contactStatus = null;
  var sending = false;

  function isEnglish() {
    return document.documentElement.lang === 'en';
  }

  // Afficher les messages dans la langue choisie
  function showStatus(fr, en, success) {

    contactStatus = {
      fr: fr,
      en: en,
      success: success
    };

    updateContactLanguage();
  }

  function updateContactLanguage() {

    if (!statusElement || !contactStatus) {
      return;
    }

    statusElement.textContent = isEnglish()
      ? contactStatus.en
      : contactStatus.fr;

    statusElement.className = contactStatus.success
      ? 'ok'
      : 'ko';
  }

  // Afficher ou supprimer les erreurs des champs
  function setError(id, fr, en, invalid) {

    var field = document.getElementById(id);
    var errorElement = document.getElementById(id + '-e');

    if (field) {
      field.setAttribute(
        'aria-invalid',
        invalid ? 'true' : 'false'
      );
    }

    if (errorElement) {
      errorElement.textContent = invalid
        ? (isEnglish() ? en : fr)
        : '';
    }
  }

  // Vérifier les champs du formulaire
  function validateForm() {

    var name = document.getElementById('nm');
    var email = document.getElementById('em');
    var message = document.getElementById('ms');
    var consent = document.getElementById('cs');

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


    var emailValid = email &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

    if (!emailValid) {

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


    // Vérifier le consentement
    var consentError = document.getElementById('cs-e');

    if (consent && !consent.checked) {

      if (consentError) {
        consentError.textContent = isEnglish()
          ? 'Please agree before sending your message.'
          : 'Veuillez donner votre accord avant l’envoi.';
      }

      valid = false;

    } else if (consentError) {

      consentError.textContent = '';
    }

    return valid;
  }


  // Envoyer le formulaire
  async function sendContactMessage() {

    if (sending) {
      return;
    }

    var name = document.getElementById('nm');
    var email = document.getElementById('em');
    var phone = document.getElementById('ph');
    var subject = document.getElementById('sj');
    var message = document.getElementById('ms');
    var consent = document.getElementById('cs');
    var honeypot = document.getElementById('hp');

    if (!name || !email || !message) {
      showStatus(
        'Le formulaire est incomplet.',
        'The form is incomplete.',
        false
      );
      return;
    }

    // Protection anti-spam
    if (honeypot && honeypot.value.trim()) {
      showStatus(
        'Impossible de traiter cette demande.',
        'Unable to process this request.',
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

    if (!FORMSPREE) {

      showStatus(
        'Le service de contact n’est pas configuré.',
        'The contact service is not configured.',
        false
      );

      return;
    }

    // Préparer les données
    var formData = new FormData();

    formData.append('name', name.value.trim());
    formData.append('email', email.value.trim());
    formData.append('_replyto', email.value.trim());
    formData.append('message', message.value.trim());

    if (phone && phone.value.trim()) {
      formData.append('phone', phone.value.trim());
    }

    if (subject) {
      formData.append('subject', subject.value);
      formData.append(
        '_subject',
        'Contact - Association de Rumonge Halisi'
      );
    }

    formData.append('consent', consent && consent.checked ? 'Oui' : 'Non');

    // Champ anti-spam Formspree
    formData.append('_gotcha', '');

    sending = true;
    sendButton.disabled = true;

    sendButton.textContent = isEnglish()
      ? 'Sending...'
      : 'Envoi en cours...';

    showStatus(
      'Envoi de votre message en cours...',
      'Sending your message...',
      true
    );

    try {

      var response = await fetch(FORMSPREE, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      var result = await response.json().catch(function () {
        return {};
      });

      if (!response.ok) {

        var errorMessage = result.errors
          ? result.errors.map(function (error) {
              return error.message;
            }).join(', ')
          : 'HTTP ' + response.status;

        throw new Error(errorMessage);
      }

      // Confirmation d'envoi
      showStatus(
        'Votre message a été envoyé avec succès ! Merci de nous avoir contactés.',
        'Your message has been sent successfully! Thank you for contacting us.',
        true
      );

      // Vider les champs après succès
      name.value = '';
      email.value = '';
      message.value = '';

      if (phone) phone.value = '';

      if (subject) subject.selectedIndex = 0;

      if (consent) consent.checked = false;

      // Réinitialiser les erreurs
      ['nm', 'em', 'ms'].forEach(function (id) {
        setError(id, '', '', false);
      });

    } catch (error) {

      console.error('Erreur Formspree :', error);

      showStatus(
        'Échec de l’envoi. Vérifiez votre connexion et la configuration de Formspree. Réessayez plus tard.',
        'Message not sent. Please check your connection and Formspree configuration, then try again.',
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


  // Activer le bouton d'envoi
  if (sendButton) {

    sendButton.addEventListener('click', function (event) {

      event.preventDefault();
      sendContactMessage();

    });

  }


  // Nettoyer les erreurs lorsque l'utilisateur corrige un champ
  ['nm', 'em', 'ms'].forEach(function (id) {

    var field = document.getElementById(id);

    if (field) {

      field.addEventListener('input', function () {
        setError(id, '', '', false);
      });

    }

  });


  /* =====================================================
     4. INITIALISATION DU SITE
     ===================================================== */

  // Appliquer la langue sauvegardée
  translatePage(currentLang);

  console.log(
    'Association de Rumonge Halisi : JavaScript chargé correctement.'
  );

})();
