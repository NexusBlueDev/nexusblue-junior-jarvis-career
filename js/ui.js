/**
 * Junior Jarvis Career — UI Module
 * DOM manipulation, screen management, orb states, career gallery, AI future screen.
 */
var JJ = window.JJ || {};

JJ.ui = {
  screens: {},
  answerBtns: [],
  orbEls: [],

  init: function () {
    this.screens = {
      welcome: document.getElementById('screen-welcome'),
      game:    document.getElementById('screen-game'),
      match:   document.getElementById('screen-match'),
      future:  document.getElementById('screen-future')
    };
    this.answerBtns = [
      document.getElementById('btn-yes'),
      document.getElementById('btn-no'),
      document.getElementById('btn-probably'),
      document.getElementById('btn-probably-not'),
      document.getElementById('btn-uncertain')
    ];
    this.orbEls = document.querySelectorAll('.orb-wrapper');

    this.buildCareerGallery();
    this.buildProgressDots();
  },

  /**
   * Build the career preview gallery on the welcome screen.
   * Tap a card to see its details in a modal overlay.
   */
  buildCareerGallery: function () {
    var container = document.getElementById('career-gallery');
    if (!container) return;
    var self = this;
    JJ.characters.forEach(function (c) {
      var item = document.createElement('div');
      item.className = 'gallery-item';
      item.style.background = 'linear-gradient(135deg, ' + c.gradient[0] + ', ' + c.gradient[1] + ')';
      item.innerHTML = '<span class="gallery-emoji">' + c.emoji + '</span>' +
                       '<span class="gallery-name">' + c.name + '</span>' +
                       '<span class="gallery-click">(click me)</span>';
      item.addEventListener('click', function () { self.showCareerPreview(c); });
      container.appendChild(item);
    });
  },

  /**
   * Show a modal overlay with career details.
   */
  showCareerPreview: function (career) {
    var existing = document.getElementById('character-preview-overlay');
    if (existing) existing.remove();

    var overlay = document.createElement('div');
    overlay.id = 'character-preview-overlay';
    overlay.className = 'character-preview-overlay';

    var card = document.createElement('div');
    card.className = 'character-card glass-card';
    card.style.background = 'linear-gradient(135deg, ' + career.gradient[0] + ', ' + career.gradient[1] + ')';

    var emoji = document.createElement('div');
    emoji.className = 'character-emoji';
    emoji.textContent = career.emoji;

    var name = document.createElement('h2');
    name.className = 'character-name';
    name.textContent = career.name;

    var fact = document.createElement('p');
    fact.className = 'character-fact';
    fact.textContent = career.fact;

    var close = document.createElement('button');
    close.className = 'btn preview-close';
    close.textContent = 'Got it!';

    card.appendChild(emoji);
    card.appendChild(name);
    card.appendChild(fact);
    card.appendChild(close);
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    var dismiss = function () { JJ.speech.cancelSpeech(); overlay.remove(); };
    close.addEventListener('click', dismiss);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) dismiss();
    });

    JJ.speech.speak(career.name + '. ' + career.fact);
  },

  /**
   * Build progress dots (one per question).
   */
  buildProgressDots: function () {
    var container = document.getElementById('progress-dots');
    if (!container) return;
    for (var i = 0; i < JJ.questions.length; i++) {
      var dot = document.createElement('div');
      dot.className = 'progress-dot';
      container.appendChild(dot);
    }
  },

  showScreen: function (name) {
    var screens = this.screens;
    Object.keys(screens).forEach(function (key) {
      if (screens[key]) {
        screens[key].classList.toggle('hidden', key !== name);
        if (key === name) screens[key].classList.add('fade-in');
      }
    });
    // Scroll to top when entering scrollable screens
    if ((name === 'future' || name === 'welcome') && screens[name]) {
      screens[name].scrollTop = 0;
    }
  },

  setQuestion: function (text) {
    var el = document.getElementById('question-text');
    if (el) el.textContent = text;
  },

  setQuestionHint: function (text) {
    var el = document.getElementById('question-hint');
    if (el) el.textContent = text;
  },

  updateProgress: function (current, total) {
    var dots = document.querySelectorAll('.progress-dot');
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('filled', i < current);
    }
    var counter = document.getElementById('question-counter');
    if (counter && current > 0) {
      counter.textContent = 'Question ' + current + ' of ' + total;
    } else if (counter) {
      counter.textContent = '';
    }
  },

  setAnswerButtonsEnabled: function (enabled) {
    this.answerBtns.forEach(function (btn) { if (btn) btn.disabled = !enabled; });
  },

  /**
   * Show the career match screen with the recommended career.
   */
  showMatch: function (career) {
    var emoji = document.getElementById('match-emoji');
    var name  = document.getElementById('match-name');
    var fact  = document.getElementById('match-fact');
    var card  = document.getElementById('match-card');
    if (emoji) emoji.textContent = career.emoji;
    if (name)  name.textContent  = career.name;
    if (fact)  fact.textContent  = career.fact;
    if (card)  card.style.background = 'linear-gradient(135deg, ' + career.gradient[0] + ', ' + career.gradient[1] + ')';
  },

  /**
   * Show the AI Future screen.
   * Renders aiSuccessSteps as a numbered <ol> list.
   */
  showFuture: function (career) {
    var titleName = document.getElementById('future-title-name');
    var emoji     = document.getElementById('future-emoji');
    var name      = document.getElementById('future-name');
    var impact    = document.getElementById('future-ai-impact');
    var stepsList = document.getElementById('future-ai-steps');
    var card      = document.getElementById('future-card');

    if (titleName) titleName.textContent = career.name;
    if (emoji)     emoji.textContent     = career.emoji;
    if (name)      name.textContent      = career.name;
    if (impact)    impact.textContent    = career.aiImpact;
    if (card)      card.style.background = 'linear-gradient(135deg, ' + career.gradient[0] + ', ' + career.gradient[1] + ')';

    // Build numbered steps list
    if (stepsList) {
      stepsList.innerHTML = '';
      var steps = career.aiSuccessSteps || [];
      steps.forEach(function (step) {
        var li = document.createElement('li');
        li.className = 'ai-step-item';
        li.textContent = step;
        stepsList.appendChild(li);
      });
    }
  },

  updateMetrics: function (count) {
    var el = document.getElementById('play-count');
    if (el) el.textContent = count;
  },

  setOrbState: function (state) {
    var states = ['idle', 'speaking', 'thinking', 'celebrating'];
    for (var i = 0; i < this.orbEls.length; i++) {
      var el = this.orbEls[i];
      for (var j = 0; j < states.length; j++) {
        el.classList.toggle('orb-' + states[j], states[j] === state);
      }
    }
  }
};
