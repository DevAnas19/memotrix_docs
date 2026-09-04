/* ============================================================
   Memotrix — shared site behaviour
   ============================================================ */

const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'why-memotrix.html', label: 'Why Memotrix' },
  { href: 'architecture.html', label: 'Architecture' },
  { href: 'data.html', label: 'Data' },
  { href: 'memory.html', label: 'Memory' },
  { href: 'use-cases.html', label: 'Use Cases' },
  { href: 'docs.html', label: 'Docs' },
  { href: 'roadmap.html', label: 'Roadmap' },
];

const GH_URL = 'https://github.com/Matrixxboy/memotrix';

const GH_ICON = `<svg class="gh-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>`;

function currentPage(){
  const p = location.pathname.split('/').pop() || 'index.html';
  return p;
}

function renderHeader(){
  const cur = currentPage();
  const links = NAV_LINKS.map(l => `<a href="${l.href}" class="${l.href===cur?'active':''}">${l.label}</a>`).join('');
  const mobileLinks = NAV_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join('');

  const html = `
  <div class="wrap nav-inner">
    <a href="index.html" class="brand">Memotrix<span style="color:var(--accent)">.</span></a>
    <nav class="nav-links" aria-label="Primary">${links}</nav>
    <div class="nav-right">
      <button class="nav-search-btn" id="search-open-btn" aria-label="Search documentation">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="7" cy="7" r="5"/><path d="M11 11L15 15"/></svg>
        <span>Search docs</span>
        <span class="kbd">/</span>
      </button>
      <a class="gh-icon-plain" href="${GH_URL}" target="_blank" rel="noopener" aria-label="GitHub repository">${GH_ICON}</a>
      <a class="nav-cta" href="docs.html">Explore Docs</a>
      <button class="mobile-toggle" id="mobile-toggle-btn" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu">${mobileLinks}<a href="${GH_URL}" target="_blank" rel="noopener">GitHub ↗</a></div>
  `;
  const header = document.getElementById('site-header');
  if(header){ header.innerHTML = html; }

  document.getElementById('search-open-btn')?.addEventListener('click', openSearch);
  const toggle = document.getElementById('mobile-toggle-btn');
  const menu = document.getElementById('mobile-menu');
  toggle?.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function renderFooter(){
  const html = `
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="brand">Memotrix<span style="color:var(--accent)">.</span></a>
        <p>Multimodal memory infrastructure for AI systems — turning documents, media, code and conversation into retrievable context.</p>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">DOCUMENTATION</div>
        <a href="docs.html">Introduction</a>
        <a href="architecture.html">Architecture</a>
        <a href="data.html">Data</a>
        <a href="memory.html">Memory</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">PROJECT</div>
        <a href="roadmap.html">Roadmap</a>
        <a href="contributors.html">Contributors</a>
        <a href="${GH_URL}" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Memotrix — open-source project, MIT-style repository.</span>
      <span class="font-mono" style="font-size:0.75rem;">github.com/Matrixxboy/memotrix</span>
    </div>
  </div>`;
  const footer = document.getElementById('site-footer');
  if(footer){ footer.innerHTML = html; }
}

/* ============================================================
   SEARCH — static index, frontend-only
   ============================================================ */
const SEARCH_INDEX = [
  { cat: 'Getting Started', title: 'What is Memotrix?', href: 'docs.html#introduction' },
  { cat: 'Getting Started', title: 'Why Memotrix', href: 'why-memotrix.html' },
  { cat: 'Getting Started', title: 'Installation & extras', href: 'docs.html#installation' },
  { cat: 'Getting Started', title: 'Quick start', href: 'docs.html#quick-start' },
  { cat: 'Core Concepts', title: 'Architecture overview', href: 'architecture.html' },
  { cat: 'Core Concepts', title: 'Agent memory types (API)', href: 'docs.html#memory-types' },
  { cat: 'Core Concepts', title: 'Custom extractors & embeddings', href: 'docs.html#custom' },
  { cat: 'Core Concepts', title: 'Environment config', href: 'docs.html#env-vars' },
  { cat: 'Data', title: 'Documents (PDF, DOCX, EPUB)', href: 'data.html#documents' },
  { cat: 'Data', title: 'Structured & tabular (CSV, JSON, SQL)', href: 'data.html#structured' },
  { cat: 'Data', title: 'Knowledge graphs (RDF, GraphML)', href: 'data.html#knowledge' },
  { cat: 'Data', title: 'Communication (email, chat)', href: 'data.html#communication' },
  { cat: 'Data', title: 'Images & video', href: 'data.html#media' },
  { cat: 'Data', title: 'Audio (Whisper transcription)', href: 'data.html#audio' },
  { cat: 'Data', title: 'Source code', href: 'data.html#code' },
  { cat: 'Data', title: 'SCORM & logs', href: 'data.html#other' },
  { cat: 'Memory', title: 'Semantic memory', href: 'memory.html#semantic' },
  { cat: 'Memory', title: 'Episodic memory', href: 'memory.html#episodic' },
  { cat: 'Memory', title: 'Procedural memory', href: 'memory.html#procedural' },
  { cat: 'Memory', title: 'Higher-level memory patterns', href: 'memory.html#patterns' },
  { cat: 'Use Cases', title: 'RAG systems', href: 'use-cases.html#rag' },
  { cat: 'Use Cases', title: 'Agent loops', href: 'use-cases.html#assistants' },
  { cat: 'Use Cases', title: 'Coding assistants', href: 'use-cases.html#coding' },
  { cat: 'Use Cases', title: 'Enterprise knowledge', href: 'use-cases.html#enterprise' },
  { cat: 'Use Cases', title: 'Domain apps', href: 'use-cases.html#domain' },
  { cat: 'Project', title: 'Roadmap', href: 'roadmap.html' },
  { cat: 'Project', title: 'Contributors', href: 'contributors.html' },
  { cat: 'Project', title: 'GitHub repository', href: GH_URL },
];

function renderSearchModal(){
  const wrap = document.createElement('div');
  wrap.className = 'search-overlay';
  wrap.id = 'search-overlay';
  wrap.innerHTML = `
    <div class="search-modal" role="dialog" aria-modal="true" aria-label="Search documentation">
      <div class="search-input-row">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" style="color:var(--ink-faint)"><circle cx="7" cy="7" r="5"/><path d="M11 11L15 15"/></svg>
        <input id="search-input" type="text" placeholder="Search pages, concepts, data types…" autocomplete="off" />
        <span class="kbd">esc</span>
      </div>
      <div class="search-results" id="search-results"></div>
    </div>`;
  document.body.appendChild(wrap);

  const input = wrap.querySelector('#search-input');
  const results = wrap.querySelector('#search-results');

  function renderResults(q){
    const query = q.trim().toLowerCase();
    const list = query
      ? SEARCH_INDEX.filter(i => i.title.toLowerCase().includes(query) || i.cat.toLowerCase().includes(query))
      : SEARCH_INDEX.slice(0, 8);
    if(list.length === 0){
      results.innerHTML = `<div class="search-empty">No results for “${q}”.</div>`;
      return;
    }
    results.innerHTML = list.map(i => `
      <a class="search-result" href="${i.href}">
        <div class="search-result-cat">${i.cat}</div>
        <div class="search-result-title">${i.title}</div>
      </a>`).join('');
  }
  renderResults('');
  input.addEventListener('input', e => renderResults(e.target.value));

  wrap.addEventListener('click', e => { if(e.target === wrap) closeSearch(); });
}

function openSearch(){
  document.getElementById('search-overlay')?.classList.add('open');
  setTimeout(() => document.getElementById('search-input')?.focus(), 30);
}
function closeSearch(){
  document.getElementById('search-overlay')?.classList.remove('open');
}
document.addEventListener('keydown', e => {
  const tag = (e.target.tagName || '').toLowerCase();
  const typing = tag === 'input' || tag === 'textarea';
  if(e.key === '/' && !typing){ e.preventDefault(); openSearch(); }
  if(e.key === 'Escape'){ closeSearch(); }
});

/* ============================================================
   Copy-code buttons
   ============================================================ */
function initCopyButtons(){
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.codeblock')?.querySelector('pre');
      if(!pre) return;
      navigator.clipboard.writeText(pre.innerText).then(() => {
        const orig = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(() => btn.textContent = orig, 1400);
      });
    });
  });
}

/* ============================================================
   Architecture diagram interactivity
   ============================================================ */
function initArchDiagram(){
  const cells = document.querySelectorAll('.arch-cell[data-detail]');
  const detailBox = document.getElementById('arch-detail-box');
  if(!cells.length || !detailBox) return;
  function show(cell){
    cells.forEach(c => c.classList.remove('active'));
    cell.classList.add('active');
    detailBox.innerHTML = `<strong>${cell.dataset.title}</strong> — ${cell.dataset.detail}`;
    detailBox.classList.add('open');
  }
  cells.forEach(cell => {
    cell.addEventListener('click', () => show(cell));
    cell.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); show(cell); } });
    cell.setAttribute('tabindex', '0');
    cell.setAttribute('role', 'button');
  });
  show(cells[0]);
}

/* ============================================================
   Data explorer tabs
   ============================================================ */
function initExplorer(){
  const tabs = document.querySelectorAll('.explorer-tab');
  const panels = document.querySelectorAll('[data-explorer-panel]');
  if(!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      panels.forEach(p => p.style.display = p.dataset.explorerPanel === tab.dataset.explorerTab ? 'block' : 'none');
    });
  });
}

/* ============================================================
   Doc tabs (generic, supports multiple instances)
   ============================================================ */
function initDocTabs(){
  document.querySelectorAll('.doctabs').forEach(group => {
    const btns = group.querySelectorAll('.doctabs-nav button');
    const panels = group.querySelectorAll('.doctabs-panel');
    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        panels[i].classList.add('active');
      });
    });
  });
}

/* ============================================================
   Docs sidebar scroll-spy for TOC
   ============================================================ */
function initTocSpy(){
  const tocLinks = document.querySelectorAll('.docs-toc a');
  if(!tocLinks.length) return;
  const targets = Array.from(tocLinks).map(a => document.querySelector(a.getAttribute('href')));
  function onScroll(){
    let current = null;
    targets.forEach(t => { if(t && t.getBoundingClientRect().top < 140) current = t; });
    tocLinks.forEach(a => a.classList.toggle('active', current && a.getAttribute('href') === '#' + current.id));
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function injectTopBar(){
  const bar = document.createElement('div');
  bar.className = 'top-accent-bar';
  document.body.insertBefore(bar, document.body.firstChild);
}

document.addEventListener('DOMContentLoaded', () => {
  injectTopBar();
  renderHeader();
  renderFooter();
  renderSearchModal();
  initCopyButtons();
  initArchDiagram();
  initExplorer();
  initDocTabs();
  initTocSpy();
});
