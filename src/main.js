/* ═══════════════════════════════════════════
   Mama Minds — Patient App Main JS
   ═══════════════════════════════════════════ */

import { LANGUAGES, DEFAULT_LANG } from './data/languages.js';
import { EPDS_QUESTIONS, calculateScore, getScoreCategory, getScoreColor } from './data/questions.js';
import { RESOURCES } from './data/resources.js';
import { PUBLIC_HOSPITALS } from './data/hospitals.js';

// ── State ──────────────────────────────────
let state = {
  lang: DEFAULT_LANG,
  L: LANGUAGES[DEFAULT_LANG],
  currentQuestion: 0,
  answers: new Array(10).fill(null),
  moodHistory: [],
  userName: 'Mama',
  postpartumRange: null, // '0-6w' | '6w-6m' | '6m-12m' | '1y+' | null (skipped)
  memberSince: null,     // ISO date string, set once when onboarding first completes
  scoreHistory: [],      // [{ score, date, postpartumRange }], newest last, capped at 10
  contacts: null,        // lazily initialised from DEFAULT_CONTACTS by getContacts()
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

      // Migrate legacy single-score storage (state.lastScore) to scoreHistory.
      // Only runs once: if scoreHistory is still empty but an old lastScore exists.
      if ((!state.scoreHistory || state.scoreHistory.length === 0) &&
          parsed.lastScore !== null && parsed.lastScore !== undefined) {
        state.scoreHistory = [{
          score: parsed.lastScore,
          date: new Date().toISOString(),
          postpartumRange: state.postpartumRange,
        }];
      }
      delete state.lastScore;
    }
  } catch (e) {
    console.warn('Could not load saved state');
  }
}

function getLatestScore() {
  return state.scoreHistory.length
    ? state.scoreHistory[state.scoreHistory.length - 1].score
    : null;
}

function saveState() {
  try {
    const toSave = {
      lang: state.lang,
      scoreHistory: state.scoreHistory,
      moodHistory: state.moodHistory,
      userName: state.userName,
      postpartumRange: state.postpartumRange,
      memberSince: state.memberSince,
      contacts: state.contacts,
    };
    localStorage.setItem('mamaminds-state', JSON.stringify(toSave));
  } catch (e) {
    console.warn('Could not save state');
  }
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const base = import.meta.env.BASE_URL || './';
    navigator.serviceWorker.register(base + 'sw.js').catch(() => {});
  }
}

// ── Theme ──────────────────────────────────
// A saved choice ('light'/'dark') overrides the OS preference; index.html
// applies it as a data-theme attribute before first paint to avoid a flash.
function getEffectiveTheme() {
  const saved = document.documentElement.getAttribute('data-theme');
  if (saved) return saved;
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}

function themeToggleIcon(theme) {
  return theme === 'dark' ? '☀️' : '🌙';
}

window.toggleTheme = function() {
  const next = getEffectiveTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('mamaminds-theme', next); } catch (e) {}

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.textContent = themeToggleIcon(next);
    btn.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
};

// ── Render App ─────────────────────────────
function renderApp() {
  const root = document.getElementById('root');
  root.innerHTML = buildAppHTML();
  attachEventListeners();

  const hasOnboarded    = localStorage.getItem('mamaminds-onboarded');
  const hasVisited      = localStorage.getItem('mamaminds-visited');
  const hasProfileDone  = localStorage.getItem('mamaminds-profile-done');

  if (hasOnboarded && hasVisited && hasProfileDone) {
    showScreen('screen-home');
  } else if (hasOnboarded && hasVisited) {
    showScreen('screen-name');
  } else if (hasOnboarded) {
    showScreen('screen-lang');
  } else {
    showScreen('screen-welcome');
  }
}

// ── HTML Builders ──────────────────────────
function buildAppHTML() {
  return `
<div id="app">
  ${buildWelcomeScreen()}
  ${buildLangScreen()}
  ${buildNameScreen()}
  ${buildStageScreen()}
  ${buildHomeScreen()}
  ${buildAssessScreen()}
  ${buildResultScreen()}
  ${buildResourcesScreen()}
  ${buildCommunityScreen()}
  ${buildThreadDetailScreen()}
  ${buildAlertScreen()}
  ${buildProfileScreen()}
  ${buildPrivacyScreen()}
  ${buildTermsScreen()}
</div>`;
}

function buildWelcomeScreen() {
  return `
<div class="screen" id="screen-welcome">
  <div class="welcome-content">
    <img class="welcome-cover" src="./images/cover-illustration.png"
         alt="Mama Minds — Postpartum Wellness App" width="500" height="500">
    <p class="welcome-tagline">${state.L.welcome_tagline}</p>
    <button class="action-btn welcome-btn" onclick="continueFromWelcome()">
      ${state.L.welcome_btn_label}
    </button>
  </div>
</div>`;
}

window.continueFromWelcome = function() {
  localStorage.setItem('mamaminds-onboarded', '1');
  showScreen('screen-lang');
};

function buildNameScreen() {
  return `
<div class="screen" id="screen-name">
  <div class="onboard-wrap">
    <div class="onboard-progress">
      <div class="onboard-progress-bar">
        <div class="onboard-progress-fill" style="width:50%"></div>
      </div>
      <span class="onboard-step-label">1 of 2</span>
    </div>
    <h2 class="onboard-title">${state.L.onboard_name_title}</h2>
    <p class="onboard-sub">${state.L.onboard_name_sub}</p>
    <input
      type="text"
      id="name-input"
      class="onboard-input"
      placeholder="${state.L.onboard_name_placeholder}"
      maxlength="40"
      autocomplete="off"
      oninput="updateNameCounter(this)"
      onkeydown="if(event.key==='Enter') submitName()">
    <div class="onboard-char-count" id="name-char-count"></div>
    <button class="action-btn onboard-cta" onclick="submitName()">${state.L.btn_continue}</button>
    <button class="onboard-skip" onclick="skipName()">${state.L.onboard_skip}</button>
  </div>
</div>`;
}

function buildStageScreen() {
  const L = state.L;
  const rangeKeys = ['0-6w', '6w-6m', '6m-12m', '1y+'];
  const rangeLabels = L.onboard_stage_ranges || ['0–6 weeks', '6 weeks – 6 months', '6–12 months', 'Over a year'];
  return `
<div class="screen" id="screen-stage">
  <div class="onboard-wrap">
    <div class="onboard-progress">
      <div class="onboard-progress-bar">
        <div class="onboard-progress-fill" style="width:100%"></div>
      </div>
      <span class="onboard-step-label">2 of 2</span>
    </div>
    <h2 class="onboard-title">${L.onboard_stage_title}</h2>
    <p class="onboard-sub">${L.onboard_stage_sub}</p>
    <div class="range-btns">
      ${rangeKeys.map((val, i) =>
        `<button class="range-btn ${state.postpartumRange === val ? 'selected' : ''}"
          onclick="selectPostpartumRange('${val}', this)">${rangeLabels[i]}</button>`
      ).join('')}
    </div>
    <button class="onboard-skip" onclick="skipStage()">${L.onboard_skip_step}</button>
  </div>
</div>`;
}

// ── Onboarding handlers ────────────────────
window.updateNameCounter = function(input) {
  const counter = document.getElementById('name-char-count');
  if (!counter) return;
  const len = input.value.length;
  counter.textContent = len >= 30 ? `${len}/40` : '';
};

window.submitName = function() {
  const input = document.getElementById('name-input');
  const val = input ? input.value.trim() : '';
  if (val) {
    state.userName = val;
    saveState();
  }
  showScreen('screen-stage');
};

window.skipName = function() {
  showScreen('screen-stage');
};

window.selectPostpartumRange = function(range, btn) {
  document.querySelectorAll('#screen-stage .range-btn').forEach(b => b.classList.remove('selected'));
  if (btn) btn.classList.add('selected');
  state.postpartumRange = range;
  completeOnboarding();
  renderApp();
};

window.skipStage = function() {
  completeOnboarding();
  renderApp();
};

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
  <div class="lang-tagline">${state.L.lang_tagline}</div>
  <div class="lang-prompt">Choose your language / Khetha ulimi lwakho</div>
  <div class="lang-grid">${langBtns}</div>
  <button class="lang-continue" onclick="continueFromLang()">${state.L.btn_continue} →</button>
</div>`;
}

function buildHomeScreen() {
  const L = state.L;
  const daysSince = getDaysSinceLastCheckin();
  const recentScores = state.scoreHistory.slice(-3).reverse(); // newest first, up to 3

  return `
<div class="screen" id="screen-home">
  <div class="home-hero">
    <div class="hero-row">
      <div>
        <div class="greeting">${getTimeGreeting()}</div>
        <div class="hero-name" id="hero-name">${state.userName}</div>
      </div>
      <div class="hero-badges">
        <button class="theme-toggle-btn" onclick="toggleTheme()" id="theme-toggle"
          aria-label="${getEffectiveTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}">${themeToggleIcon(getEffectiveTheme())}</button>
        <button class="lang-chip" onclick="showScreen('screen-lang')" id="lang-chip">
          🌐 ${L.chip}
        </button>
      </div>
    </div>
    <button class="checkin-strip" onclick="showScreen('screen-assess')">
      <div>
        <div class="cs-label">${L.checkin_label}</div>
        <div class="cs-hint">${L.checkin_hint}</div>
      </div>
      <div class="cs-right">
        <div class="cs-days">${daysSince}</div>
        ${iconChevronRight('rgba(255,255,255,0.85)')}
      </div>
    </button>
  </div>

  <div class="scroll-body home-body">
    <div class="alert-banner" onclick="showScreen('screen-alert')">
      ${iconBell('var(--red-on-pale)')}
      <div class="ab-text">
        <div class="ab-title">${L.alert_title}</div>
        <div class="ab-sub">${L.alert_sub}</div>
      </div>
      ${iconChevronRight('var(--red-soft-on-pale)')}
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
        <div class="card-icon ci-gold">${iconBook('var(--gold-on-pale)')}</div>
        <div class="card-title">${L.card_resources}</div>
        <div class="card-sub">${L.card_resources_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-alert')">
        <div class="card-icon ci-rose">${iconPhone('#C9736A')}</div>
        <div class="card-title">${L.card_help}</div>
        <div class="card-sub">${L.card_help_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-profile')">
        <div class="card-icon ci-terra">${iconUser('var(--terra-text)')}</div>
        <div class="card-title">${L.card_profile}</div>
        <div class="card-sub">${L.card_profile_sub}</div>
      </div>
    </div>

    <div class="section-label">${L.progress_label}</div>
    <div class="score-summary">
      ${recentScores.length > 1 ? `
      <div class="score-tabs" id="score-tabs">
        ${recentScores.map((e, i) => `
          <button class="score-tab ${i === 0 ? 'active' : ''}" onclick="showScoreTab(${i}, this)">${formatHistoryDate(e.date)}</button>
        `).join('')}
      </div>` : ''}
      <div id="score-tab-content">${buildScoreCardContent(recentScores[0] || null)}</div>
    </div>
    <div style="height:16px"></div>
  </div>

  ${buildBottomNav(0)}
</div>`;
}

function buildScoreCardContent(entry) {
  const L = state.L;
  const score = entry ? entry.score : null;
  return `
    <div class="score-row">
      <span class="text-muted text-small">${L.last_score}</span>
      <span style="font-size:12px;font-weight:500;color:var(--sage-text)">
        ${score !== null ? `${score} — ${getScoreLabel(score)}` : '—'}
      </span>
    </div>
    <div class="score-bar">
      <div class="score-fill" style="width:${score !== null ? (score/30*100) : 0}%"></div>
    </div>
    <div class="score-ticks">
      <span class="text-muted" style="font-size:10px">0</span>
      <span class="text-muted" style="font-size:10px">30</span>
    </div>`;
}

window.showScoreTab = function(index, btn) {
  const recentScores = state.scoreHistory.slice(-3).reverse();
  const entry = recentScores[index];
  if (!entry) return;
  document.querySelectorAll('#score-tabs .score-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const content = document.getElementById('score-tab-content');
  if (content) content.innerHTML = buildScoreCardContent(entry);
};

function buildAssessScreen() {
  const L = state.L;
  return `
<div class="screen" id="screen-assess">
  <div class="assess-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${iconBack('var(--terra-text)')}</button>
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
    <p class="result-disclaimer" id="result-disclaimer"></p>
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
      <button class="back-btn" onclick="showScreen('screen-home')">${iconBack('var(--terra-text)')}</button>
      <div>
        <h2>${L.resources_title}</h2>
        <p>${L.resources_sub}</p>
        <p class="resources-howto">${L.resources_howto || 'Tap a category tab, then tap any topic to open it.'}</p>
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
      </div>
      <div class="article-body ${article.open ? 'open' : ''}">${article.content}</div>
    </div>
  `).join('');
}

// Dummy forum seed data — South African, postpartum-grounded.
// Thread titles, post bodies, reply content, author handles, locations, and
// timestamps are treated as user-generated/seed content and intentionally
// NOT translated per-language (consistent with how real forum content from
// other users would appear regardless of the viewer's UI language).
const COMMUNITY_THREADS = [
  {
    title: 'Is it normal to feel nothing when I hold my baby?',
    author: 'Mama_Jozi', location: 'Gauteng', time: '2 days ago',
    post: "She's six weeks old and everyone keeps saying I should be overflowing with love, but most days I just feel numb. I do everything she needs — feed her, change her, rock her when she cries — but it feels like I'm watching myself do it from outside. Is this normal? Will it pass?",
    replies: [
      { author: 'Thando_Mzansi', time: '1 day ago', helpful: 12, text: "This is so much more common than anyone tells you. I felt exactly this with my first. It's worth mentioning to your clinic sister at your next check-up — not because something is wrong with you, but because there's support for this." },
      { author: 'NewMama_CPT', time: '1 day ago', helpful: 8, text: "Same here. I kept waiting for the 'rush of love' everyone talks about and it just didn't come for weeks. It crept in slowly instead. Be patient with yourself." },
      { author: 'Umama_KZN', time: '22 hours ago', helpful: 6, text: "My aunty told me this happens to a lot of us, we just don't talk about it because of what people will say. You're not alone, mama." },
      { author: 'Mama_4721', time: '18 hours ago', helpful: 4, text: "Sending you strength. Doing the caring even when you don't feel the love yet — that's still love." },
      { author: 'NewMama_Joburg', time: '10 hours ago', helpful: 9, text: "I took the EPDS in this app when I felt like this and my score was higher than I expected. Got me to actually ask for help instead of pushing through." },
    ]
  },
  {
    title: 'How did you get through the first 6 weeks?',
    author: 'NewMama_CPT', location: 'Western Cape', time: '5 hours ago',
    post: "Three weeks in and I'm running on no sleep, load shedding is messing up the little routine we had, and I feel like I'm barely keeping my head above water. For those who made it through — what actually helped?",
    replies: [
      { author: 'Mama_Jozi', time: '4 hours ago', helpful: 15, text: "Honestly, lowering my expectations of myself helped the most. Some days 'getting through' meant the baby was fed and I'd eaten one meal. That was enough." },
      { author: 'Umama_KZN', time: '4 hours ago', helpful: 11, text: "Load shedding nearly broke me too. I kept a power bank charged just for my phone torch and a flask of hot water ready before each stage. Small things, but they helped." },
      { author: 'Thando_Mzansi', time: '3 hours ago', helpful: 7, text: "Let people help. My mother and sister-in-law took turns coming through, even just to hold the baby so I could shower. Don't be too proud to accept it." },
      { author: 'Mama_4721', time: '2 hours ago', helpful: 5, text: 'Six weeks felt like the hardest stretch of my life. It does get easier — not all at once, but it does.' },
      { author: 'NewMama_Joburg', time: '1 hour ago', helpful: 6, text: 'Taxi rides to my mom\'s place twice a week saved me. Just being around family, even quietly, made the days softer.' },
    ]
  },
  {
    title: "My mother-in-law keeps giving advice I didn't ask for",
    author: 'Umama_KZN', location: 'KwaZulu-Natal', time: '1 day ago',
    post: "I know she means well and I respect that she raised her own children, but every visit comes with a new instruction — how I'm holding the baby wrong, what I should be feeding her, why I shouldn't let her sleep so much. I'm exhausted and it's making me dread her visits.",
    replies: [
      { author: 'NewMama_CPT', time: '22 hours ago', helpful: 9, text: "This is so common in our culture, the elders feel it's their place to guide us. Doesn't make it less tiring though." },
      { author: 'Mama_Jozi', time: '20 hours ago', helpful: 7, text: "I found it helped to thank her for the advice and then just quietly do what works for me and baby. Most of the time it's coming from love, even if it doesn't feel that way in the moment." },
      { author: 'Thando_Mzansi', time: '18 hours ago', helpful: 10, text: "Ubuntu means we're never raising a child alone, but it also means we sometimes have to gently set boundaries with the people who love us. Both things can be true." },
      { author: 'Mama_4721', time: '14 hours ago', helpful: 4, text: 'My husband ended up having that conversation with his mother for me. Sometimes it lands better coming from them.' },
      { author: 'NewMama_Joburg', time: '9 hours ago', helpful: 6, text: "Solidarity. I started saying 'thanks Mama, we're trying it this way for now' and leaving it there. Saved my sanity." },
    ]
  },
  {
    title: 'Anyone else feel like they lost themselves after birth?',
    author: 'Mama_4721', location: 'Free State', time: '3 days ago',
    post: "I used to know exactly who I was — my job, my friends, my hobbies. Now most days I'm just 'the baby's mom' and I don't recognise myself anymore. I love her more than anything but I miss me too. Does anyone else feel this?",
    replies: [
      { author: 'Umama_KZN', time: '3 days ago', helpful: 14, text: "Every single day. It's a real grief even though we're not allowed to call it that because we 'should' be grateful." },
      { author: 'NewMama_CPT', time: '2 days ago', helpful: 11, text: "Yes. I started taking even 20 minutes a day that was just mine — tea on the stoep, a podcast, anything. It didn't fix it but it helped me remember I'm still in here." },
      { author: 'Mama_Jozi', time: '2 days ago', helpful: 8, text: "This is exactly why I started using the mood check-in on this app. Seeing the pattern made me realise I wasn't imagining it." },
      { author: 'Thando_Mzansi', time: '1 day ago', helpful: 5, text: "You don't lose yourself, mama. You're just under a mountain of newness right now. She'll come back up for air." },
      { author: 'NewMama_Joburg', time: '20 hours ago', helpful: 7, text: 'Felt this so hard at 4 months. By 8 months I started feeling like myself again, just a version with more love in her.' },
    ]
  },
  {
    title: 'What actually helped you sleep when baby sleeps?',
    author: 'NewMama_Joburg', location: 'Gauteng', time: '6 hours ago',
    post: "Everyone says 'sleep when the baby sleeps' like it's that easy. My mind races the second I lie down — dishes, washing, whether she's breathing okay. What actually worked for you?",
    replies: [
      { author: 'Mama_4721', time: '5 hours ago', helpful: 10, text: 'Putting my phone in another room. The urge to check it the second I lay down was killing any chance of rest.' },
      { author: 'Thando_Mzansi', time: '5 hours ago', helpful: 8, text: 'I let the dishes sit. Genuinely. Sleep mattered more and the house survived.' },
      { author: 'Umama_KZN', time: '4 hours ago', helpful: 6, text: 'A weighted blanket helped me settle my own anxious thoughts, strange as it sounds.' },
      { author: 'Mama_Jozi', time: '3 hours ago', helpful: 9, text: 'I had to actively tell my brain "she is safe, the monitor is on" a few times before it would let me rest. Sounds silly but it worked.' },
      { author: 'NewMama_CPT', time: '2 hours ago', helpful: 5, text: 'If load shedding hit during nap time I just gave up and lay in the dark with her instead of stressing about chores I couldn\'t do anyway. Turned into some of our sweetest naps.' },
    ]
  },
  {
    title: "Told my doctor I was struggling — here's what happened",
    author: 'Thando_Mzansi', location: 'Eastern Cape', time: '4 days ago',
    post: "I finally said the words out loud at my 6-week check-up: 'I don't think I'm okay.' I was so scared she'd judge me or worse, get the social worker involved. Instead she just listened, gave me an EPDS-style questionnaire, and referred me to a counsellor at the clinic. It wasn't scary at all in the end.",
    replies: [
      { author: 'Mama_Jozi', time: '4 days ago', helpful: 18, text: "Thank you for sharing this. I've been too scared to say anything at my appointments." },
      { author: 'NewMama_CPT', time: '3 days ago', helpful: 13, text: "This made me tear up. I'm taking my baby for her 6-week jabs next week and I'm going to try to say it too." },
      { author: 'Umama_KZN', time: '3 days ago', helpful: 9, text: "So proud of you for speaking up. It takes real courage, especially when we're taught to just push through." },
      { author: 'Mama_4721', time: '2 days ago', helpful: 7, text: "Did the same at my clinic and they were kind about it too. Wish someone had told me sooner that it wouldn't be scary." },
      { author: 'NewMama_Joburg', time: '1 day ago', helpful: 11, text: 'This is why this community matters. Hearing it went okay for you makes it easier for the rest of us to try.' },
    ]
  },
];

function buildCommunityScreen() {
  const L = state.L;
  return `
<div class="screen" id="screen-community">
  <div class="community-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${iconBack('#4A7C59')}</button>
      <div>
        <h2>${L.community_title}</h2>
        <p>${L.community_sub}</p>
      </div>
    </div>
  </div>
  <div class="community-invite">${L.community_invite}</div>
  <div class="scroll-body">
    <div class="community-threads">
      ${buildCommunityThreadCards()}
    </div>
    <div class="community-ask-box">
      <button class="community-ask-btn" disabled>${L.community_ask_btn}</button>
      <p class="community-coming-soon">${L.community_coming_soon}</p>
    </div>
    <div style="height:12px"></div>
  </div>
  ${buildBottomNav(3)}
</div>`;
}

function buildCommunityThreadCards() {
  const L = state.L;
  return COMMUNITY_THREADS.map((t, i) => `
    <button class="thread-card" onclick="openThread(${i})">
      <div class="thread-card-main">
        <div class="thread-card-title">${t.title}</div>
        <div class="thread-card-meta">
          <span class="thread-card-author">${t.author}</span>
          <span class="thread-card-dot">·</span>
          <span class="thread-card-time">${t.time}</span>
          <span class="thread-card-dot">·</span>
          <span class="thread-card-replies">${(L.community_replies_label || '{n} replies').replace('{n}', t.replies.length)}</span>
        </div>
      </div>
      <span class="thread-card-chevron">${iconChevronRight('var(--text-muted)')}</span>
    </button>
  `).join('');
}

function buildThreadDetailScreen() {
  return `
<div class="screen" id="screen-thread-detail">
  <div class="community-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-community')">${iconBack('#4A7C59')}</button>
      <div>
        <h2 id="thread-detail-title"></h2>
      </div>
    </div>
  </div>
  <div class="scroll-body" id="thread-detail-content"></div>
  <div class="community-post-box">
    <p class="community-post-label" id="thread-detail-signin-prompt"></p>
    <textarea class="community-post-input" disabled rows="2" id="thread-detail-reply-input"></textarea>
    <button class="community-post-btn" disabled id="thread-detail-reply-btn"></button>
  </div>
</div>`;
}

window.openThread = function(i) {
  const L = state.L;
  const t = COMMUNITY_THREADS[i];
  if (!t) return;

  const titleEl = document.getElementById('thread-detail-title');
  if (titleEl) titleEl.textContent = t.title;

  const contentEl = document.getElementById('thread-detail-content');
  if (contentEl) {
    contentEl.innerHTML = `
      <div class="thread-detail-post">
        <div class="thread-author">
          <div class="thread-avatar">${t.author[0]}</div>
          <div>
            <div class="thread-author-name">${t.author}</div>
            <div class="thread-location">${t.location} · ${t.time}</div>
          </div>
        </div>
        <div class="thread-text">${t.post}</div>
      </div>
      <div class="thread-replies-label">${(L.community_replies_label || '{n} replies').replace('{n}', t.replies.length)}</div>
      ${t.replies.map(r => `
        <div class="thread-reply">
          <div class="thread-reply-header">
            <span class="thread-reply-author">${r.author}</span>
            <span class="thread-reply-time">${r.time}</span>
          </div>
          <div class="thread-reply-text">${r.text}</div>
          <div class="thread-reply-helpful">${iconHeart('var(--rose)')}<span>${r.helpful}</span></div>
        </div>
      `).join('')}
    `;
  }

  const signinPrompt = document.getElementById('thread-detail-signin-prompt');
  if (signinPrompt) signinPrompt.textContent = L.community_sign_in_prompt;

  const replyInput = document.getElementById('thread-detail-reply-input');
  if (replyInput) replyInput.placeholder = L.community_post_placeholder;

  const replyBtn = document.getElementById('thread-detail-reply-btn');
  if (replyBtn) replyBtn.textContent = L.community_sign_in_prompt;

  showScreen('screen-thread-detail');
};

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
    <div class="section-label">${L.alert_providers_label}</div>
    ${getContacts().filter(c => c.section === 'providers').map(buildContactCard).join('')}

    <div class="section-label mt-12">${L.alert_loved_ones_label}</div>
    <div id="loved-ones-list">
      ${getContacts().filter(c => c.section === 'loved_ones').map(buildContactCard).join('')}
    </div>
    <button class="add-contact-btn" onclick="addContact()">${L.alert_add_contact_label || '+ Add contact'}</button>

    <div class="message-box">
      <label>${L.alert_message_label}</label>
      <textarea id="alert-message" rows="3" oninput="updateAlertButtonState()">${L.default_message}</textarea>
    </div>
    <button class="send-alert-btn" id="send-alert-btn" onclick="sendAlert()">
      ${L.send_btn}
    </button>
    <div class="send-hint">${L.send_hint}</div>
    <div style="height:16px"></div>
  </div>
  ${buildBottomNav(4)}
</div>`;
}

// Seed data for the Alert screen's contact list.
//   editable: false     -> fixed placeholder, not wired up yet (e.g. CHW —
//                          coming later once there's a real way to assign one)
//   editable: 'hospital' -> name can be auto-filled via locateNearestHospital()
//                          or typed by hand; phone is always hand-typed, since
//                          we won't guess/display a number we can't verify
//   editable: true       -> fully user-managed: name, channel, phone, removable
const DEFAULT_CONTACTS = [
  { id: 'chw', section: 'providers', initials: 'HW', avatarClass: 'av-blue', name: 'Sister Nomvula (CHW)', roleKey: 'contact_role_chw', channel: 'whatsapp', checked: false, phone: '', editable: false },
  { id: 'clinic', section: 'providers', initials: 'CL', avatarClass: 'av-rose', name: '', roleKey: 'contact_role_maternity', channel: 'sms', checked: false, phone: '', editable: 'hospital' },
  { id: 'mother', section: 'loved_ones', avatarClass: 'av-green', name: 'Mama Khumalo', channel: 'whatsapp', checked: true, phone: '', editable: true },
  { id: 'partner', section: 'loved_ones', avatarClass: 'av-gold', name: 'Thabo Sithole', channel: 'sms', checked: true, phone: '', editable: true },
];
const NEW_CONTACT_AVATAR_CLASSES = ['av-green', 'av-gold', 'av-rose', 'av-blue'];

function getContacts() {
  if (!state.contacts) {
    state.contacts = DEFAULT_CONTACTS.map(c => ({ ...c }));
  }
  return state.contacts;
}

function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildContactCard(contact) {
  const L = state.L;

  // Fixed placeholder — not interactive yet.
  if (contact.editable === false) {
    const role = L[contact.roleKey] || contact.roleKey;
    return `
<div class="contact-card">
  <div class="contact-avatar ${contact.avatarClass}">${contact.initials}</div>
  <div class="contact-info">
    <div class="contact-name">${escapeHtml(contact.name)}</div>
    <div class="contact-role">${role}</div>
  </div>
  <span class="contact-coming-soon">${L.contact_coming_soon_label || 'Coming soon'}</span>
</div>`;
  }

  // Nearest-public-hospital slot: name can be auto-suggested or typed by
  // hand; we never guess a phone number for this one, only the user verifies it.
  if (contact.editable === 'hospital') {
    const role = L[contact.roleKey] || contact.roleKey;
    return `
<div class="contact-card" data-contact-id="${contact.id}">
  <div class="contact-avatar ${contact.avatarClass}">${contact.initials}</div>
  <div class="contact-info">
    <div class="contact-role">${role}</div>
    <input type="text" class="contact-name-input" placeholder="${L.hospital_name_placeholder || 'Nearest public hospital'}"
      value="${escapeHtml(contact.name)}" oninput="updateContactName('${contact.id}', this.value)">
    <button type="button" class="locate-hospital-btn" onclick="locateNearestHospital()">${L.locate_hospital_btn || '📍 Find my nearest hospital'}</button>
    <input type="tel" class="contact-phone-input" placeholder="${L.alert_phone_placeholder || 'Add phone number'}"
      value="${escapeHtml(contact.phone)}" oninput="updateContactPhone('${contact.id}', this.value)">
    <p class="hospital-note">${L.hospital_verify_note || "Please confirm this number yourself before relying on it — we can't guarantee it's current."}</p>
  </div>
  <input type="checkbox" ${contact.checked ? 'checked' : ''} onchange="toggleContact('${contact.id}', this.checked)" style="margin-left:auto" />
</div>`;
  }

  // Fully user-managed loved one: name, channel, phone, removable.
  return `
<div class="contact-card" data-contact-id="${contact.id}">
  <div class="contact-avatar ${contact.avatarClass}">${iconUser('#fff')}</div>
  <div class="contact-info">
    <input type="text" class="contact-name-input" placeholder="${L.alert_contact_name_placeholder || 'Contact name'}"
      value="${escapeHtml(contact.name)}" oninput="updateContactName('${contact.id}', this.value)">
    <div class="channel-toggle">
      <button type="button" class="channel-btn ${contact.channel === 'whatsapp' ? 'active' : ''}" onclick="setContactChannel('${contact.id}','whatsapp', this)">WhatsApp</button>
      <button type="button" class="channel-btn ${contact.channel === 'sms' ? 'active' : ''}" onclick="setContactChannel('${contact.id}','sms', this)">SMS</button>
    </div>
    <input type="tel" class="contact-phone-input" placeholder="${L.alert_phone_placeholder || 'Add phone number'}"
      value="${escapeHtml(contact.phone)}" oninput="updateContactPhone('${contact.id}', this.value)">
  </div>
  <div class="contact-actions">
    <input type="checkbox" ${contact.checked ? 'checked' : ''} onchange="toggleContact('${contact.id}', this.checked)" />
    <button type="button" class="remove-contact-btn" onclick="removeContact('${contact.id}')" aria-label="Remove contact">✕</button>
  </div>
</div>`;
}

window.updateContactPhone = function(id, value) {
  const contact = getContacts().find(c => c.id === id);
  if (!contact) return;
  contact.phone = value;
  saveState();
};

window.updateContactName = function(id, value) {
  const contact = getContacts().find(c => c.id === id);
  if (!contact) return;
  contact.name = value;
  saveState();
};

window.toggleContact = function(id, checked) {
  const contact = getContacts().find(c => c.id === id);
  if (!contact) return;
  contact.checked = checked;
  saveState();
};

window.setContactChannel = function(id, channel, btn) {
  const contact = getContacts().find(c => c.id === id);
  if (!contact) return;
  contact.channel = channel;
  saveState();
  const group = btn.closest('.channel-toggle');
  if (group) group.querySelectorAll('.channel-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
};

window.addContact = function() {
  const contacts = getContacts();
  const lovedOnesCount = contacts.filter(c => c.section === 'loved_ones').length;
  const newContact = {
    id: 'loved-' + Date.now(),
    section: 'loved_ones',
    avatarClass: NEW_CONTACT_AVATAR_CLASSES[lovedOnesCount % NEW_CONTACT_AVATAR_CLASSES.length],
    name: '',
    channel: 'whatsapp',
    checked: true,
    phone: '',
    editable: true,
  };
  contacts.push(newContact);
  saveState();
  const container = document.getElementById('loved-ones-list');
  if (container) container.insertAdjacentHTML('beforeend', buildContactCard(newContact));
};

window.removeContact = function(id) {
  state.contacts = getContacts().filter(c => c.id !== id);
  saveState();
  const card = document.querySelector(`.contact-card[data-contact-id="${id}"]`);
  if (card) card.remove();
  updateAlertButtonState();
};

window.locateNearestHospital = function() {
  const L = state.L;
  if (!navigator.geolocation) {
    alert(L.geolocation_unsupported || "Location isn't supported on this device — please type your nearest hospital's name yourself.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const nearest = findNearestHospital(pos.coords.latitude, pos.coords.longitude);
      if (!nearest) return;
      const contact = getContacts().find(c => c.id === 'clinic');
      if (!contact) return;
      contact.name = `${nearest.name} — ${nearest.city}`;
      saveState();
      const input = document.querySelector('.contact-card[data-contact-id="clinic"] .contact-name-input');
      if (input) input.value = contact.name;
    },
    () => {
      alert(L.geolocation_denied || "Couldn't get your location. You can type your nearest public hospital's name yourself below.");
    }
  );
};

function findNearestHospital(lat, lng) {
  let best = null;
  let bestDist = Infinity;
  for (const h of PUBLIC_HOSPITALS) {
    const d = haversineDistanceKm(lat, lng, h.lat, h.lng);
    if (d < bestDist) { bestDist = d; best = h; }
  }
  return best;
}

function haversineDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// wa.me requires an international number with no leading 0/+. South African
// numbers are commonly typed in local format (e.g. 082...), so assume SA
// (+27) when no country code was given — this app's content is SA-specific
// throughout (SADAG hotlines, Gauteng, Rand pricing).
function toWhatsAppNumber(phone) {
  const cleaned = phone.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+')) return cleaned.slice(1);
  if (cleaned.startsWith('0')) return '27' + cleaned.slice(1);
  return cleaned;
}

function buildProfileScreen() {
  const L = state.L;
  const recentEntries = state.scoreHistory.slice(-3).reverse(); // newest first, max 3, no padding

  const historyHTML = recentEntries.map(e => {
    const cat = getScoreCategory(e.score);
    return `
      <div class="history-row">
        <span class="history-dot history-dot-${cat}"></span>
        <span class="history-date">${formatHistoryDate(e.date)}</span>
        <span class="history-score">${e.score}/30</span>
        <span class="history-category">${(L.result_categories || {})[cat] || cat}</span>
      </div>`;
  }).join('');

  return `
<div class="screen" id="screen-profile">
  <div class="profile-header">
    <div style="display:flex;justify-content:flex-start;margin-bottom:8px">
      <button class="back-btn" onclick="showScreen('screen-home')">${iconBack('var(--terra-text)')}</button>
    </div>
    <div class="profile-avatar" id="profile-avatar">${buildAvatar(state.userName)}</div>
    <div class="profile-name" id="profile-name">${state.userName}</div>
    <div class="profile-sub">${L.member_since_label}${state.memberSince ? ' ' + formatMemberSince(state.memberSince) : ''}</div>
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
      <span class="profile-value">${L.location_value}</span>
    </div>
    <div class="profile-row">
      <span class="profile-label">${L.offline_label}</span>
      <span class="status-green">${L.enabled_label}</span>
    </div>

    ${recentEntries.length ? `
    <div class="mt-16">
      <div class="section-label">${L.progress_label}</div>
      ${historyHTML}
    </div>` : ''}

    <div class="upgrade-box">
      <h3>${L.upgrade_title}</h3>
      <p>${L.upgrade_desc}</p>
      <button class="upgrade-btn" onclick="handleUpgrade()">${L.upgrade_btn}</button>
    </div>

    <div class="mt-16">
      <div class="section-label">${L.data_privacy_label}</div>
      <div class="profile-row">
        <span class="profile-label">${L.data_stored_label}</span>
        <span class="status-green">${L.yes_label}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">${L.share_data_label}</span>
        <span class="profile-value">${L.off_label}</span>
      </div>
      <div class="profile-row">
        <span class="profile-label">${L.privacy_policy_label || 'Privacy Policy'}</span>
        <a class="text-link" onclick="showScreen('screen-privacy')">${L.view_label || 'View'} →</a>
      </div>
      <div class="profile-row">
        <span class="profile-label">${L.terms_label || 'Terms & Conditions'}</span>
        <a class="text-link" onclick="showScreen('screen-terms')">${L.view_label || 'View'} →</a>
      </div>
      <div class="profile-row" onclick="confirmDeleteData()" style="cursor:pointer">
        <span class="status-red">${L.delete_data}</span>
      </div>
    </div>
    <div style="height:20px"></div>
  </div>
</div>`;
}

// Privacy policy content is intentionally kept in English only, like the
// community seed content — it's a legal document, not app chrome, and
// machine-translating it into all 11 languages risks inaccurate legal text.
function buildPrivacyScreen() {
  return `
<div class="screen" id="screen-privacy">
  <div class="resources-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-profile')">${iconBack('var(--terra-text)')}</button>
      <div>
        <h2>Privacy Policy</h2>
        <p>Last updated September 15, 2026</p>
      </div>
    </div>
  </div>
  <div class="scroll-body" style="padding:14px">
    <div class="res-article">
      <div class="article-body open">
        <div class="info-box">In short: what you type into Mama Minds stays on your phone. The only thing that leaves your device automatically is an anonymous page-view count — never anything you type.</div>

        <h4>What we collect</h4>
        <p>Everything you enter is optional and stored only to make the app work for you: your first name, chosen language, how far postpartum you are, daily mood check-ins, and your EPDS assessment scores and dates.</p>
        <p>If you set up your support contacts, we also store what you enter there: names, phone numbers, and whether you'd message them on WhatsApp or SMS. This stays on your device the same way everything else does.</p>

        <h4>Where it's stored</h4>
        <p>All of it lives in your browser's local storage, on your own device. Mama Minds has no user accounts, no database, and no backend server — so there is nowhere for this information to be sent, even if we wanted to send it.</p>

        <h4>What we don't do</h4>
        <ul>
          <li>No cookies or advertising identifiers</li>
          <li>No sharing or selling of your information — we simply don't have it</li>
        </ul>

        <h4>Anonymous analytics</h4>
        <p>We use GoatCounter, a privacy-first analytics tool, to see how many people visit each page. It counts page views only — no cookies, no personal identifiers, and no way to trace a visit back to you.</p>

        <h4>Alerting your support network</h4>
        <p>The "Get help now" alert prepares a message for the contacts you select. Sending it hands the message to your phone's own SMS or WhatsApp — Mama Minds itself never sees or stores what you send.</p>

        <h4>Finding your nearest hospital</h4>
        <p>Your location is only ever requested if you tap "Find my nearest hospital" yourself — it is never accessed automatically or in the background. When you do tap it, your device checks its GPS position against a small list of public hospitals stored in the app itself, entirely on your device, and shows you the closest match. Your location is never sent anywhere, never stored, and never shared — it's used for that one calculation and then discarded. If you don't tap that button, this never happens at all.</p>

        <h4>Community</h4>
        <p>The stories currently shown in Community are sample entries so you can see how it will work. Posting your own story is coming soon; when it launches, this policy will be updated to explain how those posts are stored and moderated.</p>

        <h4>Offline access</h4>
        <p>Mama Minds caches its own app files on your device so it keeps working without internet. That cache holds app code and images only — never your personal check-ins or scores.</p>

        <h4>Your control over your data</h4>
        <p>You can erase everything at any time from Profile → "Delete my data." Since nothing is stored anywhere but your device, that one action removes it completely and permanently.</p>

        <h4>Changes to this policy</h4>
        <p>If new features change how data is handled — for example, an optional cloud sync or account system in a future version — we'll update this page to reflect it.</p>

        <h4>Questions</h4>
        <p>If you have questions about this policy, please <a class="text-link" href="https://github.com/cindyleahphoto-ctrl/Mama-Minds-PPD/issues" target="_blank" rel="noopener">open an issue on GitHub</a>.</p>
      </div>
    </div>
    <div style="height:16px"></div>
  </div>
</div>`;
}

// Terms content is intentionally kept in English only, for the same reason
// as the privacy policy above — it's a legal document, not app chrome.
function buildTermsScreen() {
  return `
<div class="screen" id="screen-terms">
  <div class="resources-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-profile')">${iconBack('var(--terra-text)')}</button>
      <div>
        <h2>Terms & Conditions</h2>
        <p>Last updated September 15, 2026</p>
      </div>
    </div>
  </div>
  <div class="scroll-body" style="padding:14px">
    <div class="res-article">
      <div class="article-body open">
        <div class="warning-box">Mama Minds is a screening and support tool. It is not a diagnosis, not a substitute for professional medical care, and not an emergency service. If you or your baby are in immediate danger, contact emergency services (10111 / 10177) or a crisis hotline right away.</div>

        <h4>Agreement to these terms</h4>
        <p>By using Mama Minds, you agree to these terms. If you don't agree with them, please don't use the app.</p>

        <h4>What Mama Minds is — and isn't</h4>
        <p>The EPDS assessment is a clinically recognised screening tool, not a clinical diagnosis. Resources and coping tools are for general education and support. Always speak to a qualified healthcare provider about your specific situation before making medical decisions.</p>

        <h4>Who can use it</h4>
        <p>Mama Minds is intended for adults. If a minor uses the app, a parent or guardian should be involved in decisions about her care.</p>

        <h4>Your data</h4>
        <p>Mama Minds has no accounts and no server — your check-ins and scores are stored only on your device. See the <a class="text-link" onclick="showScreen('screen-privacy')">Privacy Policy</a> for full details.</p>

        <h4>Community guidelines</h4>
        <p>When posting your own story becomes available, please be respectful and supportive of other mothers, avoid sharing anyone else's personal details without their consent, and remember that posts from other users are personal experiences, not medical advice. Content that is abusive, harmful, or unsafe may be removed.</p>

        <h4>Mama Minds Plus</h4>
        <p>Mama Minds Plus is an upcoming paid tier. No payment is currently collected through the app, and pricing and features may change before launch.</p>

        <h4>Intellectual property</h4>
        <p>The Mama Minds name, design, and written content belong to the Mama Minds project. Licensing terms: please contact the project owner before reusing or redistributing this app or its content.</p>

        <h4>No warranty</h4>
        <p>Mama Minds is provided "as is." We do our best to keep information accurate and the app working, but we make no guarantee it will be error-free, uninterrupted, or suitable for every situation.</p>

        <h4>Limitation of liability</h4>
        <p>To the fullest extent permitted by law, Mama Minds and its contributors are not liable for any harm or loss arising from your use of the app, including decisions made based on its content.</p>

        <h4>Changes to these terms</h4>
        <p>We may update these terms as the app changes. Continued use after an update means you accept the revised terms.</p>

        <h4>Governing law</h4>
        <p>These terms are governed by the laws of the Republic of South Africa.</p>

        <h4>Questions</h4>
        <p>If you have questions about these terms, please <a class="text-link" href="https://github.com/cindyleahphoto-ctrl/Mama-Minds-PPD/issues" target="_blank" rel="noopener">open an issue on GitHub</a>.</p>
      </div>
    </div>
    <div style="height:16px"></div>
  </div>
</div>`;
}

// Fixed avatar palette tied to the app's existing CSS variables.
const AVATAR_COLORS = ['var(--terra)', 'var(--sage)', 'var(--gold)', 'var(--rose)'];

function buildAvatar(name) {
  const isDefault = !name || name.trim() === '' || name === 'Mama';

  if (isDefault) {
    return `<svg viewBox="0 0 64 64" width="64" height="64">
      <circle cx="32" cy="32" r="32" fill="var(--terra-soft)"/>
      <g fill="var(--terra)">
        <circle cx="32" cy="19" r="8"/>
        <circle cx="45" cy="32" r="8"/>
        <circle cx="32" cy="45" r="8"/>
        <circle cx="19" cy="32" r="8"/>
      </g>
      <circle cx="32" cy="32" r="7" fill="var(--gold)"/>
    </svg>`;
  }

  const trimmed = name.trim();
  const words = trimmed.split(/\s+/);
  const initials = words.length >= 2
    ? (words[0][0] + words[1][0]).toUpperCase()
    : trimmed[0].toUpperCase();

  let hash = 0;
  for (let i = 0; i < trimmed.length; i++) {
    hash = (hash * 31 + trimmed.charCodeAt(i)) >>> 0;
  }
  const color = AVATAR_COLORS[hash % AVATAR_COLORS.length];

  return `<svg viewBox="0 0 64 64" width="64" height="64">
    <circle cx="32" cy="32" r="32" fill="${color}"/>
    <text x="32" y="33" text-anchor="middle" dominant-baseline="central"
      font-family="Lora, serif" font-size="${initials.length > 1 ? 22 : 26}" font-weight="600" fill="#fff">${initials}</text>
  </svg>`;
}

function formatMemberSince(isoDate) {
  if (!isoDate) return '';
  return new Date(isoDate).toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
}

function formatHistoryDate(isoDate) {
  return new Date(isoDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function completeOnboarding() {
  if (!state.memberSince) {
    state.memberSince = new Date().toISOString();
  }
  localStorage.setItem('mamaminds-profile-done', '1');
  saveState();
}

function buildBottomNav(activeIndex) {
  const L = state.L;
  const screens = ['screen-home', 'screen-assess', 'screen-resources', 'screen-community', 'screen-alert'];
  const icons = [iconHome, iconCheck2, iconBook2, iconPeople, iconBell2];

  return `
<div class="bottom-nav">
  ${L.nav.map((label, i) => `
    <button class="nav-btn ${i === activeIndex ? 'active' : ''}"
      onclick="showScreen('${screens[i]}')">
      ${icons[i]('currentColor')}
      <span>${label}</span>
      ${i === 4 ? '<span class="nav-badge">!</span>' : ''}
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
  if (id === 'screen-alert') updateAlertButtonState();
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
  renderApp(); // renderApp() picks the right screen based on onboarding flags
};

// ── Mood ───────────────────────────────────
window.selectMood = function(btn, index) {
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.moodHistory.push({ date: new Date().toISOString(), mood: index });
  saveState();
};

// ── Assessment ─────────────────────────────
let _autoAdvanceTimer = null; // guards against double-tap race on answer buttons

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
  const isLast      = state.currentQuestion === EPDS_QUESTIONS.length - 1;
  const wasUnanswered = state.answers[state.currentQuestion] === null;
  const isNewAnswer   = state.answers[state.currentQuestion] !== i;

  state.answers[state.currentQuestion] = i;
  renderQuestion(); // show the selection immediately

  // Auto-advance on Q1–Q9 when this is a first answer or a changed answer.
  // Q10 never auto-advances — user must tap "See my results" intentionally.
  if (!isLast && (wasUnanswered || isNewAnswer)) {
    clearTimeout(_autoAdvanceTimer);
    _autoAdvanceTimer = setTimeout(() => {
      state.currentQuestion++;
      renderQuestion();
    }, 220);
  }
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
  clearTimeout(_autoAdvanceTimer); // cancel any pending auto-advance
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

  state.scoreHistory.push({
    score,
    date: new Date().toISOString(),
    postpartumRange: state.postpartumRange,
  });
  if (state.scoreHistory.length > 10) {
    state.scoreHistory = state.scoreHistory.slice(-10);
  }
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

  const disclaimerEl = document.getElementById('result-disclaimer');
  if (disclaimerEl) disclaimerEl.textContent = L.epds_disclaimer || '';

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
window.updateAlertButtonState = function() {
  const btn = document.getElementById('send-alert-btn');
  const textarea = document.getElementById('alert-message');
  if (!btn || !textarea) return;
  btn.disabled = textarea.value.trim().length === 0;
};

window.sendAlert = function() {
  const btn = document.getElementById('send-alert-btn');
  const textarea = document.getElementById('alert-message');
  const L = state.L;
  if (!btn || !textarea || textarea.value.trim().length === 0) return;
  const message = textarea.value.trim();

  const recipients = getContacts().filter(c => c.checked && c.phone && c.phone.trim().length > 0);
  if (recipients.length === 0) {
    alert(L.alert_no_number_label || 'Select at least one contact and add their phone number first.');
    return;
  }

  // wa.me only supports one number per link, so only the first checked
  // WhatsApp contact gets opened — the SMS side supports multiple
  // recipients on one link, so every checked SMS contact gets included.
  const smsNumbers = recipients.filter(c => c.channel === 'sms').map(c => c.phone.trim());
  const waContact = recipients.find(c => c.channel === 'whatsapp');

  if (smsNumbers.length > 0) {
    window.open(`sms:${smsNumbers.join(',')}?body=${encodeURIComponent(message)}`, '_blank');
  }
  if (waContact) {
    window.open(`https://wa.me/${toWhatsAppNumber(waContact.phone)}?text=${encodeURIComponent(message)}`, '_blank');
  }

  btn.textContent = L.alert_sent_label || '✓ Alert sent';
  btn.classList.add('sent');
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = L.send_btn;
    btn.classList.remove('sent');
    updateAlertButtonState();
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
function getTimeGreeting() {
  const L = state.L;
  if (L.greetings) {
    const hour = new Date().getHours();
    if (hour < 12) return L.greetings.morning;
    if (hour < 17) return L.greetings.afternoon;
    return L.greetings.evening;
  }
  return L.greeting;
}

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
function iconPeople(color) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
}
function iconHeart(color) {
  return `<svg width="11" height="11" viewBox="0 0 24 24" fill="${color}" stroke="none"><path d="M12 21s-6.7-4.35-9.33-8.2C1 10.28 1.6 7 4.5 5.5 6.5 4.5 9 5 12 8c3-3 5.5-3.5 7.5-2.5 2.9 1.5 3.5 4.78 1.83 7.3C18.7 16.65 12 21 12 21z"/></svg>`;
}
