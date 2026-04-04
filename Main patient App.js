/* ═══════════════════════════════════════════
   Mama Minds — Patient App Main JS
   ═══════════════════════════════════════════ */

import { LANGUAGES, DEFAULT_LANG } from './data/languages.js';
import { EPDS_QUESTIONS, calculateScore, getScoreCategory, getScoreColor } from './data/questions.js';
import { RESOURCES } from './data/resources.js';

// ── State ──────────────────────────────────
let state = {
  lang: DEFAULT_LANG,
  L: LANGUAGES[DEFAULT_LANG],
  currentQuestion: 0,
  answers: new Array(10).fill(null),
  lastScore: null,
  moodHistory: [],
  userName: 'Amara',
};

// ── Init ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();
  renderApp();
  registerServiceWorker();
});

function loadSavedState() {
  try {
    const saved = localStorage.getItem('mamaminds-state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
      state.L = LANGUAGES[state.lang] || LANGUAGES[DEFAULT_LANG];
    }
  } catch (e) {
    console.warn('Could not load saved state');
  }
}

function saveState() {
  try {
    const toSave = {
      lang: state.lang,
      lastScore: state.lastScore,
      moodHistory: state.moodHistory,
      userName: state.userName,
    };
    localStorage.setItem('mamaminds-state', JSON.stringify(toSave));
  } catch (e) {
    console.warn('Could not save state');
  }
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
}

// ── Render App ─────────────────────────────
function renderApp() {
  const root = document.getElementById('root');
  root.innerHTML = buildAppHTML();
  attachEventListeners();

  // Show language selector if first visit, else home
  const hasVisited = localStorage.getItem('mamaminds-visited');
  if (hasVisited) {
    showScreen('screen-home');
  } else {
    showScreen('screen-lang');
  }
}

// ── HTML Builders ──────────────────────────
function buildAppHTML() {
  return `
<div id="app">
  ${buildLangScreen()}
  ${buildHomeScreen()}
  ${buildAssessScreen()}
  ${buildResultScreen()}
  ${buildResourcesScreen()}
  ${buildAlertScreen()}
  ${buildProfileScreen()}
</div>`;
}

function buildLangScreen() {
  const langBtns = Object.entries(LANGUAGES).map(([code, l]) => `
    <button class="lang-btn ${code === state.lang ? 'selected' : ''}"
      data-lang="${code}" onclick="selectLang(this)">
      ${l.name}
      <span class="native">${l.native}</span>
    </button>
  `).join('');

  return `
<div class="screen active" id="screen-lang">
  <div class="lang-logo">Mama Minds</div>
  <div class="lang-tagline">Postnatal mental health support</div>
  <div class="lang-prompt">Choose your language / Khetha ulimi lwakho</div>
  <div class="lang-grid">${langBtns}</div>
  <button class="lang-continue" onclick="continueFromLang()">Continue →</button>
</div>`;
}

function buildHomeScreen() {
  const L = state.L;
  const daysSince = getDaysSinceLastCheckin();
  const score = state.lastScore;

  return `
<div class="screen" id="screen-home">
  <div class="home-hero">
    <div class="hero-row">
      <div>
        <div class="greeting">${L.greeting}</div>
        <div class="hero-name" id="hero-name">${state.userName}</div>
      </div>
      <div class="hero-badges">
        <div class="offline-pill">
          <div class="offline-dot"></div>
          <span id="offline-text">${L.offline}</span>
        </div>
        <button class="lang-chip" onclick="showScreen('screen-lang')" id="lang-chip">
          🌐 ${L.chip}
        </button>
      </div>
    </div>
    <div class="checkin-strip">
      <div>
        <div class="cs-label">${L.checkin_label}</div>
        <div class="cs-hint">${L.checkin_hint}</div>
      </div>
      <div class="cs-days">${daysSince}</div>
    </div>
  </div>

  <div class="scroll-body home-body">
    <div class="alert-banner" onclick="showScreen('screen-alert')">
      ${iconBell('#8B2020')}
      <div class="ab-text">
        <div class="ab-title">${L.alert_title}</div>
        <div class="ab-sub">${L.alert_sub}</div>
      </div>
      ${iconChevronRight('#A03030')}
    </div>

    <div class="section-label">${L.mood_label}</div>
    <div class="mood-row" id="mood-row">
      ${L.moods.map((m, i) => `
        <button class="mood-btn" onclick="selectMood(this, ${i})">
          <span class="mood-emoji">${['😔','😐','🙂','😊'][i]}</span>
          <span>${m}</span>
        </button>
      `).join('')}
    </div>

    <div class="section-label">${L.tools_label}</div>
    <div class="card-row">
      <div class="home-card" onclick="showScreen('screen-assess')">
        <div class="card-icon ci-green">${iconCheck('#4A7C59')}</div>
        <div class="card-title">${L.card_assess}</div>
        <div class="card-sub">${L.card_assess_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-resources')">
        <div class="card-icon ci-gold">${iconBook('#8B5A00')}</div>
        <div class="card-title">${L.card_resources}</div>
        <div class="card-sub">${L.card_resources_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-alert')">
        <div class="card-icon ci-rose">${iconPhone('#C9736A')}</div>
        <div class="card-title">${L.card_help}</div>
        <div class="card-sub">${L.card_help_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-profile')">
        <div class="card-icon ci-terra">${iconUser('#8B4513')}</div>
        <div class="card-title">${L.card_profile}</div>
        <div class="card-sub">${L.card_profile_sub}</div>
      </div>
    </div>

    <div class="section-label">${L.progress_label}</div>
    <div class="score-summary">
      <div class="score-row">
        <span class="text-muted text-small">${L.last_score}</span>
        <span style="font-size:12px;font-weight:500;color:var(--sage)">
          ${score !== null ? `${score} — ${getScoreLabel(score)}` : '—'}
        </span>
      </div>
      <div class="score-bar">
        <div class="score-fill" style="width:${score !== null ? (score/30*100) : 0}%"></div>
      </div>
      <div class="score-ticks">
        <span class="text-muted" style="font-size:10px">0</span>
        <span class="text-muted" style="font-size:10px">30</span>
      </div>
    </div>
    <div style="height:16px"></div>
  </div>

  ${buildBottomNav(0)}
</div>`;
}

function buildAssessScreen() {
  const L = state.L;
  return `
<div class="screen" id="screen-assess">
  <div class="assess-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${iconBack('#8B4513')}</button>
      <div>
        <h2>${L.assess_title}</h2>
        <p>${L.assess_sub}</p>
      </div>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" id="progress-fill" style="width:10%"></div>
    </div>
  </div>
  <div class="scroll-body question-area" id="question-area"></div>
  <div class="nav-actions">
    <button class="btn-back" id="btn-back" onclick="prevQuestion()">
      ${L.btn_back}
    </button>
    <button class="btn-next" id="btn-next" onclick="nextQuestion()" disabled>
      ${L.btn_next}
    </button>
  </div>
</div>`;
}

function buildResultScreen() {
  const L = state.L;
  return `
<div class="screen" id="screen-result">
  <div class="result-header" id="result-header">
    <div class="result-score-label">${L.result_label}</div>
    <div class="result-score" id="result-score">—</div>
    <div class="result-category" id="result-category">—</div>
  </div>
  <div class="scroll-body result-body">
    <div class="result-card">
      <h3>${L.result_means}</h3>
      <p id="result-meaning"></p>
    </div>
    <div class="result-card">
      <h3>${L.result_steps}</h3>
      <p id="result-steps-text"></p>
    </div>
    <button class="action-btn" onclick="showScreen('screen-alert')" id="r-btn1">
      ${L.result_btn_alert}
    </button>
    <button class="action-btn secondary" onclick="showScreen('screen-resources')" id="r-btn2">
      ${L.result_btn_resources}
    </button>
    <button class="action-btn secondary" onclick="resetAssessment()" id="r-btn3">
      ${L.result_btn_retake}
    </button>
    <div style="height:16px"></div>
  </div>
</div>`;
}

function buildResourcesScreen() {
  const L = state.L;
  const tabs = L.res_tabs;
  const tabKeys = ['understanding', 'coping', 'family', 'hotlines', 'healthcare'];

  const tabHTML = tabs.map((tab, i) => `
    <button class="res-tab ${i === 0 ? 'active' : ''}"
      onclick="showResourceTab('${tabKeys[i]}', this)">${tab}</button>
  `).join('');

  const contentHTML = tabKeys.map((key, i) => `
    <div class="res-content ${i === 0 ? 'active' : ''}" id="tab-${key}">
      ${buildResourceArticles(key)}
    </div>
  `).join('');

  return `
<div class="screen" id="screen-resources">
  <div class="resources-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${iconBack('#8B4513')}</button>
      <div>
        <h2>${L.resources_title}</h2>
        <p>${L.resources_sub}</p>
      </div>
    </div>
  </div>
  <div class="res-tabs" id="res-tabs">${tabHTML}</div>
  <div class="scroll-body">${contentHTML}</div>
  ${buildBottomNav(2)}
</div>`;
}

function buildResourceArticles(tabKey) {
  const articles = RESOURCES[tabKey] || [];
  return articles.map(article => `
    <div class="res-article">
      <div class="article-header" onclick="toggleArticle(this)">
        <div class="article-title">${article.title}</div>
        ${article.offline ? '<span class="article-badge">Offline</span>' : ''}
      </div>
      <div class="article-body ${article.open ? 'open' : ''}">${article.content}</div>
    </div>
  `).join('');
}

function buildAlertScreen() {
  const L = state.L;
  return `
<div class="screen" id="screen-alert">
  <div class="alert-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div>
        <h2>${L.alert_screen_title}</h2>
        <p>${L.alert_screen_sub}</p>
      </div>
    </div>
  </div>
  <div class="scroll-body alert-body">
    <div class="section-label">Healthcare providers</div>
    ${buildContactCard('HW', 'av-blue', 'Sister Nomvula (CHW)', 'Community Health Worker · WhatsApp', true)}
    ${buildContactCard('CL', 'av-rose', 'Clinic 17 — Soweto', 'Maternity ward · SMS', false)}

    <div class="section-label mt-12">Loved ones</div>
    ${buildContactCard('MK', 'av-green', 'Mama Khumalo', 'Mother · WhatsApp', true)}
    ${buildContactCard('TS', 'av-gold', 'Thabo Sithole', 'Partner · SMS', true)}

    <div class="message-box">
      <label>Message (edit if needed)</label>
      <textarea id="alert-message" rows="3">${L.default_message}</textarea>
    </div>
    <button class="send-alert-btn" id="send-alert-btn" onclick="sendAlert()">
      ${L.send_btn}
    </button>
    <div class="send-hint">${L.send_hint}</div>
    <div style="height:16px"></div>
  </div>
  ${buildBottomNav(3)}
</div>`;
}

function buildContactCard(initials, avatarClass, name, role, checked) {
  return `
<div class="contact-card">
  <div class="contact-avatar ${avatarClass}">${initials}</div>
  <div>
    <div class="contact-name">${name}</div>
    <div class="contact-role">${role}</div>
  </div>
  <input type="checkbox" ${checked ? 'checked' : ''} style="margin-left:auto" />
</div>`;
}

function buildProfileScreen() {
  const L = state.L;
  return `
<div class="screen" id="screen-profile">
  <div class="profile-header">
    <div style="display:flex;justify-content:flex-start;margin-bottom:8px">
      <button class="back-btn" onclick="showScreen('screen-home')">${iconBack('#8B4513')}</button>
    </div>
    <div class="profile-avatar" id="profile-avatar">${state.userName[0]}</div>
    <div class="profile-name" id="profile-name">${state.userName}</div>
    <div class="profile-sub">Member since January 2025</div>
  </div>
  <div class="scroll-body profile-body">
    <div class="section-label">${L.profile_title}</div>
    <div class="profile-row">
      <span class="profile-label">${L.plan_label}</span>
      <span class="plan-badge">${L.plan_free}</span>
    </div>
    <div class="profile-row">
      <span class="profile-label">${L.language_label}</span>
      <a class="text-link" onclick="showScreen('screen-lang')">${L.name} → Change</a>
    </div>
    <div class="profile-row">
      <span class="profile-label">${L.location_label}</span>
      <span class="profile-value">Gauteng, South Africa</span>
    </div>
    <div class="profile-row">
      <span class="profile-label">${L.offline_label}</span>
      <span class="status-green">Enabled</span>
    </div>
    <div class="profile-row">
      <span class="profile-label">${L.last_assess_label}</span>
      <span class="profile-value">${state.lastScore !== null ? `Score: ${state.lastScore}` : '—'}</span>
    </div>

    <div class="upgrade-box">
      <h3>${L.upgrade_title}</h3>
      <p>${L.upgrade_desc}</p>
      <button class="upgrade-btn" onclick="handleUpgrade()">${L.upgrade_btn}</button>
    </div>

    <div class="mt-16">
      <div class="section-label">Data & privacy</div>
      <div class="profile-row">
        <span class="profile-label">Data stored on this device</span>
        <span class="status-green">Yes</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">Share anonymised data for research</span>
        <span class="profile-value">Off</span>
      </div>
      <div class="profile-row" onclick="confirmDeleteData()" style="cursor:pointer">
        <span class="status-red">${L.delete_data}</span>
      </div>
    </div>
    <div style="height:20px"></div>
  </div>
</div>`;
}

function buildBottomNav(activeIndex) {
  const L = state.L;
  const screens = ['screen-home', 'screen-assess', 'screen-resources', 'screen-alert'];
  const icons = [iconHome, iconCheck2, iconBook2, iconBell2];

  return `
<div class="bottom-nav">
  ${L.nav.map((label, i) => `
    <button class="nav-btn ${i === activeIndex ? 'active' : ''}"
      onclick="showScreen('${screens[i]}')">
      ${icons[i]('currentColor')}
      <span>${label}</span>
      ${i === 3 ? '<span class="nav-badge">!</span>' : ''}
    </button>
  `).join('')}
</div>`;
}

// ── Navigation ─────────────────────────────
window.showScreen = function(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(id);
  if (screen) {
    screen.classList.add('active');
    screen.scrollTop = 0;
  }
  if (id === 'screen-assess') renderQuestion();
};

// ── Language ───────────────────────────────
window.selectLang = function(btn) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.lang = btn.dataset.lang;
};

window.continueFromLang = function() {
  state.L = LANGUAGES[state.lang] || LANGUAGES[DEFAULT_LANG];
  localStorage.setItem('mamaminds-visited', '1');
  saveState();
  renderApp();
  // Re-attach after full re-render
  showScreen('screen-home');
};

// ── Mood ───────────────────────────────────
window.selectMood = function(btn, index) {
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.moodHistory.push({ date: new Date().toISOString(), mood: index });
  saveState();
};

// ── Assessment ─────────────────────────────
window.renderQuestion = function() {
  const q = EPDS_QUESTIONS[state.currentQuestion];
  const L = state.L;
  const total = EPDS_QUESTIONS.length;
  const progress = ((state.currentQuestion + 1) / total * 100) + '%';

  const progressFill = document.getElementById('progress-fill');
  if (progressFill) progressFill.style.width = progress;

  const area = document.getElementById('question-area');
  if (!area) return;

  area.innerHTML = `
    <div class="q-counter">
      ${(L.q_of || 'Question {n} of 10').replace('{n}', state.currentQuestion + 1)}
    </div>
    <div class="q-text">${q.text}</div>
    <div class="q-hint">${q.hint}</div>
    <div class="answer-list">
      ${q.options.map((opt, i) => {
        const selected = state.answers[state.currentQuestion] === i;
        return `
          <button class="answer-opt ${selected ? 'selected' : ''}" onclick="selectAnswer(${i})">
            <span class="radio-dot">
              ${selected ? '<span class="radio-dot-inner"></span>' : ''}
            </span>
            ${opt}
          </button>`;
      }).join('')}
    </div>`;

  const btnBack = document.getElementById('btn-back');
  const btnNext = document.getElementById('btn-next');
  if (btnBack) btnBack.style.display = state.currentQuestion === 0 ? 'none' : '';
  if (btnNext) {
    btnNext.textContent = state.currentQuestion === total - 1
      ? (L.btn_results || 'See my results')
      : (L.btn_next || 'Next');
    btnNext.disabled = state.answers[state.currentQuestion] === null;
  }
};

window.selectAnswer = function(i) {
  state.answers[state.currentQuestion] = i;
  renderQuestion();
};

window.nextQuestion = function() {
  if (state.answers[state.currentQuestion] === null) return;
  if (state.currentQuestion < EPDS_QUESTIONS.length - 1) {
    state.currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
};

window.prevQuestion = function() {
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    renderQuestion();
  }
};

window.resetAssessment = function() {
  state.currentQuestion = 0;
  state.answers = new Array(10).fill(null);
  showScreen('screen-assess');
};

function showResults() {
  const score = calculateScore(state.answers);
  const category = getScoreCategory(score);
  const color = getScoreColor(score);
  const L = state.L;

  state.lastScore = score;
  saveState();

  const headerEl   = document.getElementById('result-header');
  const scoreEl    = document.getElementById('result-score');
  const categoryEl = document.getElementById('result-category');
  const meaningEl  = document.getElementById('result-meaning');
  const stepsEl    = document.getElementById('result-steps-text');

  if (headerEl)   headerEl.style.background = color;
  if (scoreEl)    scoreEl.textContent = score;
  if (categoryEl) categoryEl.textContent = (L.result_categories || {})[category] || '';
  if (meaningEl)  meaningEl.textContent = (L.result_meanings || {})[category] || '';
  if (stepsEl)    stepsEl.textContent = (L.result_steps_text || {})[category] || '';

  showScreen('screen-result');
}

// ── Resources ──────────────────────────────
window.showResourceTab = function(tabKey, btn) {
  document.querySelectorAll('.res-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.res-tab').forEach(b => b.classList.remove('active'));
  const tab = document.getElementById('tab-' + tabKey);
  if (tab) tab.classList.add('active');
  if (btn) btn.classList.add('active');
};

window.toggleArticle = function(header) {
  const body = header.nextElementSibling;
  if (body) body.classList.toggle('open');
};

// ── Alert ──────────────────────────────────
window.sendAlert = function() {
  const btn = document.getElementById('send-alert-btn');
  const L = state.L;
  if (!btn) return;
  btn.textContent = '✓ Alert sent';
  btn.classList.add('sent');
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = L.send_btn;
    btn.classList.remove('sent');
    btn.disabled = false;
  }, 3500);
};

// ── Profile ────────────────────────────────
window.handleUpgrade = function() {
  alert('Mama Minds Plus — Upgrade coming soon!\n\nR89/month · R799/year\n\nFeatures: Unlimited assessments, tele-health booking, therapist chat, care plan export, priority alerts.');
};

window.confirmDeleteData = function() {
  if (confirm('Are you sure you want to delete all your data? This cannot be undone.')) {
    localStorage.clear();
    location.reload();
  }
};

// ── Helpers ────────────────────────────────
function getDaysSinceLastCheckin() {
  const last = localStorage.getItem('mamaminds-last-checkin');
  if (!last) return 0;
  const diff = Date.now() - parseInt(last);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getScoreLabel(score) {
  const L = state.L;
  const cat = getScoreCategory(score);
  return (L.result_categories || {})[cat] || cat;
}

function attachEventListeners() {
  // Save checkin time whenever user opens the assess screen
  document.querySelectorAll('[onclick*="screen-assess"]').forEach(el => {
    el.addEventListener('click', () => {
      localStorage.setItem('mamaminds-last-checkin', Date.now().toString());
    });
  });
}

// ── SVG Icons ──────────────────────────────
function iconBack(color) {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>`;
}
function iconBell(color) {
  return `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
}
function iconChevronRight(color) {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`;
}
function iconCheck(color) {
  return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`;
}
function iconCheck2(color) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`;
}
function iconBook(color) {
  return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
}
function iconBook2(color) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
}
function iconPhone(color) {
  return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
}
function iconUser(color) {
  return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
}
function iconHome(color) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
}
function iconBell2(color) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
           }
