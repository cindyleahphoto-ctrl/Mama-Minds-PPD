(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const v="en",l={en:"English",es:"Español",fr:"Français",sw:"Kiswahili"},h=[{id:1,question:"I have been able to laugh and see the funny side of things"},{id:2,question:"I have looked forward to things with enjoyment"},{id:3,question:"I have blamed myself unnecessarily when things went wrong"}];function y(e){return Object.values(e).reduce((t,n)=>t+(n||0),0)}function w(e){return e<9?"Low Risk":e<12?"Medium Risk":"High Risk"}function k(e){return e<9?"green":e<12?"yellow":"red"}const S=[{id:1,title:"Understanding Postpartum Depression",category:"education",content:"Learn about postpartum depression and how to manage it"},{id:2,title:"Breathing Exercises",category:"mindfulness",content:"Calming breathing techniques for stress relief"},{id:3,title:"Support Communities",category:"community",content:"Connect with other mothers for support"}];let s={lang:v,L:l[v],currentQuestion:0,answers:new Array(10).fill(null),lastScore:null,moodHistory:[],userName:"Amara"};document.addEventListener("DOMContentLoaded",()=>{L(),$(),_()});function L(){try{const e=localStorage.getItem("mamaminds-state");if(e){const t=JSON.parse(e);s={...s,...t},s.L=l[s.lang]||l[v]}}catch{console.warn("Could not load saved state")}}function p(){try{const e={lang:s.lang,lastScore:s.lastScore,moodHistory:s.moodHistory,userName:s.userName};localStorage.setItem("mamaminds-state",JSON.stringify(e))}catch{console.warn("Could not save state")}}function _(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").catch(()=>{})}function $(){const e=document.getElementById("root");e.innerHTML=x(),j(),localStorage.getItem("mamaminds-visited")?showScreen("screen-home"):showScreen("screen-lang")}function x(){return`
<div id="app">
  ${A()}
  ${B()}
  ${E()}
  ${M()}
  ${C()}
  ${I()}
  ${Q()}
</div>`}function A(){return`
<div class="screen active" id="screen-lang">
  <div class="lang-logo">Mama Minds</div>
  <div class="lang-tagline">Postnatal mental health support</div>
  <div class="lang-prompt">Choose your language / Khetha ulimi lwakho</div>
  <div class="lang-grid">${Object.entries(l).map(([t,n])=>`
    <button class="lang-btn ${t===s.lang?"selected":""}"
      data-lang="${t}" onclick="selectLang(this)">
      ${n.name}
      <span class="native">${n.native}</span>
    </button>
  `).join("")}</div>
  <button class="lang-continue" onclick="continueFromLang()">Continue →</button>
</div>`}function B(){const e=s.L,t=N(),n=s.lastScore;return`
<div class="screen" id="screen-home">
  <div class="home-hero">
    <div class="hero-row">
      <div>
        <div class="greeting">${e.greeting}</div>
        <div class="hero-name" id="hero-name">${s.userName}</div>
      </div>
      <div class="hero-badges">
        <div class="offline-pill">
          <div class="offline-dot"></div>
          <span id="offline-text">${e.offline}</span>
        </div>
        <button class="lang-chip" onclick="showScreen('screen-lang')" id="lang-chip">
          🌐 ${e.chip}
        </button>
      </div>
    </div>
    <div class="checkin-strip">
      <div>
        <div class="cs-label">${e.checkin_label}</div>
        <div class="cs-hint">${e.checkin_hint}</div>
      </div>
      <div class="cs-days">${t}</div>
    </div>
  </div>

  <div class="scroll-body home-body">
    <div class="alert-banner" onclick="showScreen('screen-alert')">
      ${D("#8B2020")}
      <div class="ab-text">
        <div class="ab-title">${e.alert_title}</div>
        <div class="ab-sub">${e.alert_sub}</div>
      </div>
      ${R("#A03030")}
    </div>

    <div class="section-label">${e.mood_label}</div>
    <div class="mood-row" id="mood-row">
      ${e.moods.map((a,i)=>`
        <button class="mood-btn" onclick="selectMood(this, ${i})">
          <span class="mood-emoji">${["😔","😐","🙂","😊"][i]}</span>
          <span>${a}</span>
        </button>
      `).join("")}
    </div>

    <div class="section-label">${e.tools_label}</div>
    <div class="card-row">
      <div class="home-card" onclick="showScreen('screen-assess')">
        <div class="card-icon ci-green">${T("#4A7C59")}</div>
        <div class="card-title">${e.card_assess}</div>
        <div class="card-sub">${e.card_assess_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-resources')">
        <div class="card-icon ci-gold">${U("#8B5A00")}</div>
        <div class="card-title">${e.card_resources}</div>
        <div class="card-sub">${e.card_resources_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-alert')">
        <div class="card-icon ci-rose">${z("#C9736A")}</div>
        <div class="card-title">${e.card_help}</div>
        <div class="card-sub">${e.card_help_sub}</div>
      </div>
      <div class="home-card" onclick="showScreen('screen-profile')">
        <div class="card-icon ci-terra">${F("#8B4513")}</div>
        <div class="card-title">${e.card_profile}</div>
        <div class="card-sub">${e.card_profile_sub}</div>
      </div>
    </div>

    <div class="section-label">${e.progress_label}</div>
    <div class="score-summary">
      <div class="score-row">
        <span class="text-muted text-small">${e.last_score}</span>
        <span style="font-size:12px;font-weight:500;color:var(--sage)">
          ${n!==null?`${n} — ${O(n)}`:"—"}
        </span>
      </div>
      <div class="score-bar">
        <div class="score-fill" style="width:${n!==null?n/30*100:0}%"></div>
      </div>
      <div class="score-ticks">
        <span class="text-muted" style="font-size:10px">0</span>
        <span class="text-muted" style="font-size:10px">30</span>
      </div>
    </div>
    <div style="height:16px"></div>
  </div>

  ${f(0)}
</div>`}function E(){const e=s.L;return`
<div class="screen" id="screen-assess">
  <div class="assess-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${b("#8B4513")}</button>
      <div>
        <h2>${e.assess_title}</h2>
        <p>${e.assess_sub}</p>
      </div>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" id="progress-fill" style="width:10%"></div>
    </div>
  </div>
  <div class="scroll-body question-area" id="question-area"></div>
  <div class="nav-actions">
    <button class="btn-back" id="btn-back" onclick="prevQuestion()">
      ${e.btn_back}
    </button>
    <button class="btn-next" id="btn-next" onclick="nextQuestion()" disabled>
      ${e.btn_next}
    </button>
  </div>
</div>`}function M(){const e=s.L;return`
<div class="screen" id="screen-result">
  <div class="result-header" id="result-header">
    <div class="result-score-label">${e.result_label}</div>
    <div class="result-score" id="result-score">—</div>
    <div class="result-category" id="result-category">—</div>
  </div>
  <div class="scroll-body result-body">
    <div class="result-card">
      <h3>${e.result_means}</h3>
      <p id="result-meaning"></p>
    </div>
    <div class="result-card">
      <h3>${e.result_steps}</h3>
      <p id="result-steps-text"></p>
    </div>
    <button class="action-btn" onclick="showScreen('screen-alert')" id="r-btn1">
      ${e.result_btn_alert}
    </button>
    <button class="action-btn secondary" onclick="showScreen('screen-resources')" id="r-btn2">
      ${e.result_btn_resources}
    </button>
    <button class="action-btn secondary" onclick="resetAssessment()" id="r-btn3">
      ${e.result_btn_retake}
    </button>
    <div style="height:16px"></div>
  </div>
</div>`}function C(){const e=s.L,t=e.res_tabs,n=["understanding","coping","family","hotlines","healthcare"],a=t.map((o,r)=>`
    <button class="res-tab ${r===0?"active":""}"
      onclick="showResourceTab('${n[r]}', this)">${o}</button>
  `).join(""),i=n.map((o,r)=>`
    <div class="res-content ${r===0?"active":""}" id="tab-${o}">
      ${H(o)}
    </div>
  `).join("");return`
<div class="screen" id="screen-resources">
  <div class="resources-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">${b("#8B4513")}</button>
      <div>
        <h2>${e.resources_title}</h2>
        <p>${e.resources_sub}</p>
      </div>
    </div>
  </div>
  <div class="res-tabs" id="res-tabs">${a}</div>
  <div class="scroll-body">${i}</div>
  ${f(2)}
</div>`}function H(e){return(S[e]||[]).map(n=>`
    <div class="res-article">
      <div class="article-header" onclick="toggleArticle(this)">
        <div class="article-title">${n.title}</div>
        ${n.offline?'<span class="article-badge">Offline</span>':""}
      </div>
      <div class="article-body ${n.open?"open":""}">${n.content}</div>
    </div>
  `).join("")}function I(){const e=s.L;return`
<div class="screen" id="screen-alert">
  <div class="alert-header">
    <div class="header-row">
      <button class="back-btn" onclick="showScreen('screen-home')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div>
        <h2>${e.alert_screen_title}</h2>
        <p>${e.alert_screen_sub}</p>
      </div>
    </div>
  </div>
  <div class="scroll-body alert-body">
    <div class="section-label">Healthcare providers</div>
    ${u("HW","av-blue","Sister Nomvula (CHW)","Community Health Worker · WhatsApp",!0)}
    ${u("CL","av-rose","Clinic 17 — Soweto","Maternity ward · SMS",!1)}

    <div class="section-label mt-12">Loved ones</div>
    ${u("MK","av-green","Mama Khumalo","Mother · WhatsApp",!0)}
    ${u("TS","av-gold","Thabo Sithole","Partner · SMS",!0)}

    <div class="message-box">
      <label>Message (edit if needed)</label>
      <textarea id="alert-message" rows="3">${e.default_message}</textarea>
    </div>
    <button class="send-alert-btn" id="send-alert-btn" onclick="sendAlert()">
      ${e.send_btn}
    </button>
    <div class="send-hint">${e.send_hint}</div>
    <div style="height:16px"></div>
  </div>
  ${f(3)}
</div>`}function u(e,t,n,a,i){return`
<div class="contact-card">
  <div class="contact-avatar ${t}">${e}</div>
  <div>
    <div class="contact-name">${n}</div>
    <div class="contact-role">${a}</div>
  </div>
  <input type="checkbox" ${i?"checked":""} style="margin-left:auto" />
</div>`}function Q(){const e=s.L;return`
<div class="screen" id="screen-profile">
  <div class="profile-header">
    <div style="display:flex;justify-content:flex-start;margin-bottom:8px">
      <button class="back-btn" onclick="showScreen('screen-home')">${b("#8B4513")}</button>
    </div>
    <div class="profile-avatar" id="profile-avatar">${s.userName[0]}</div>
    <div class="profile-name" id="profile-name">${s.userName}</div>
    <div class="profile-sub">Member since January 2025</div>
  </div>
  <div class="scroll-body profile-body">
    <div class="section-label">${e.profile_title}</div>
    <div class="profile-row">
      <span class="profile-label">${e.plan_label}</span>
      <span class="plan-badge">${e.plan_free}</span>
    </div>
    <div class="profile-row">
      <span class="profile-label">${e.language_label}</span>
      <a class="text-link" onclick="showScreen('screen-lang')">${e.name} → Change</a>
    </div>
    <div class="profile-row">
      <span class="profile-label">${e.location_label}</span>
      <span class="profile-value">Gauteng, South Africa</span>
    </div>
    <div class="profile-row">
      <span class="profile-label">${e.offline_label}</span>
      <span class="status-green">Enabled</span>
    </div>
    <div class="profile-row">
      <span class="profile-label">${e.last_assess_label}</span>
      <span class="profile-value">${s.lastScore!==null?`Score: ${s.lastScore}`:"—"}</span>
    </div>

    <div class="upgrade-box">
      <h3>${e.upgrade_title}</h3>
      <p>${e.upgrade_desc}</p>
      <button class="upgrade-btn" onclick="handleUpgrade()">${e.upgrade_btn}</button>
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
        <span class="status-red">${e.delete_data}</span>
      </div>
    </div>
    <div style="height:20px"></div>
  </div>
</div>`}function f(e){const t=s.L,n=["screen-home","screen-assess","screen-resources","screen-alert"],a=[K,P,W,G];return`
<div class="bottom-nav">
  ${t.nav.map((i,o)=>`
    <button class="nav-btn ${o===e?"active":""}"
      onclick="showScreen('${n[o]}')">
      ${a[o]("currentColor")}
      <span>${i}</span>
      ${o===3?'<span class="nav-badge">!</span>':""}
    </button>
  `).join("")}
</div>`}window.showScreen=function(e){document.querySelectorAll(".screen").forEach(n=>n.classList.remove("active"));const t=document.getElementById(e);t&&(t.classList.add("active"),t.scrollTop=0),e==="screen-assess"&&renderQuestion()};window.selectLang=function(e){document.querySelectorAll(".lang-btn").forEach(t=>t.classList.remove("selected")),e.classList.add("selected"),s.lang=e.dataset.lang};window.continueFromLang=function(){s.L=l[s.lang]||l[v],localStorage.setItem("mamaminds-visited","1"),p(),$(),showScreen("screen-home")};window.selectMood=function(e,t){document.querySelectorAll(".mood-btn").forEach(n=>n.classList.remove("selected")),e.classList.add("selected"),s.moodHistory.push({date:new Date().toISOString(),mood:t}),p()};window.renderQuestion=function(){const e=h[s.currentQuestion],t=s.L,n=h.length,a=(s.currentQuestion+1)/n*100+"%",i=document.getElementById("progress-fill");i&&(i.style.width=a);const o=document.getElementById("question-area");if(!o)return;o.innerHTML=`
    <div class="q-counter">
      ${(t.q_of||"Question {n} of 10").replace("{n}",s.currentQuestion+1)}
    </div>
    <div class="q-text">${e.text}</div>
    <div class="q-hint">${e.hint}</div>
    <div class="answer-list">
      ${e.options.map((d,g)=>{const m=s.answers[s.currentQuestion]===g;return`
          <button class="answer-opt ${m?"selected":""}" onclick="selectAnswer(${g})">
            <span class="radio-dot">
              ${m?'<span class="radio-dot-inner"></span>':""}
            </span>
            ${d}
          </button>`}).join("")}
    </div>`;const r=document.getElementById("btn-back"),c=document.getElementById("btn-next");r&&(r.style.display=s.currentQuestion===0?"none":""),c&&(c.textContent=s.currentQuestion===n-1?t.btn_results||"See my results":t.btn_next||"Next",c.disabled=s.answers[s.currentQuestion]===null)};window.selectAnswer=function(e){s.answers[s.currentQuestion]=e,renderQuestion()};window.nextQuestion=function(){s.answers[s.currentQuestion]!==null&&(s.currentQuestion<h.length-1?(s.currentQuestion++,renderQuestion()):q())};window.prevQuestion=function(){s.currentQuestion>0&&(s.currentQuestion--,renderQuestion())};window.resetAssessment=function(){s.currentQuestion=0,s.answers=new Array(10).fill(null),showScreen("screen-assess")};function q(){const e=y(s.answers),t=w(e),n=k(e),a=s.L;s.lastScore=e,p();const i=document.getElementById("result-header"),o=document.getElementById("result-score"),r=document.getElementById("result-category"),c=document.getElementById("result-meaning"),d=document.getElementById("result-steps-text");i&&(i.style.background=n),o&&(o.textContent=e),r&&(r.textContent=(a.result_categories||{})[t]||""),c&&(c.textContent=(a.result_meanings||{})[t]||""),d&&(d.textContent=(a.result_steps_text||{})[t]||""),showScreen("screen-result")}window.showResourceTab=function(e,t){document.querySelectorAll(".res-content").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".res-tab").forEach(a=>a.classList.remove("active"));const n=document.getElementById("tab-"+e);n&&n.classList.add("active"),t&&t.classList.add("active")};window.toggleArticle=function(e){const t=e.nextElementSibling;t&&t.classList.toggle("open")};window.sendAlert=function(){const e=document.getElementById("send-alert-btn"),t=s.L;e&&(e.textContent="✓ Alert sent",e.classList.add("sent"),e.disabled=!0,setTimeout(()=>{e.textContent=t.send_btn,e.classList.remove("sent"),e.disabled=!1},3500))};window.handleUpgrade=function(){alert(`Mama Minds Plus — Upgrade coming soon!

R89/month · R799/year

Features: Unlimited assessments, tele-health booking, therapist chat, care plan export, priority alerts.`)};window.confirmDeleteData=function(){confirm("Are you sure you want to delete all your data? This cannot be undone.")&&(localStorage.clear(),location.reload())};function N(){const e=localStorage.getItem("mamaminds-last-checkin");if(!e)return 0;const t=Date.now()-parseInt(e);return Math.floor(t/(1e3*60*60*24))}function O(e){const t=s.L,n=w(e);return(t.result_categories||{})[n]||n}function j(){document.querySelectorAll('[onclick*="screen-assess"]').forEach(e=>{e.addEventListener("click",()=>{localStorage.setItem("mamaminds-last-checkin",Date.now().toString())})})}function b(e){return`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>`}function D(e){return`<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`}function R(e){return`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`}function T(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`}function P(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`}function U(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`}function W(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`}function z(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`}function F(e){return`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`}function K(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`}function G(e){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`}
