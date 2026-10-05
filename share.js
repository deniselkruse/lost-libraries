/* ============================================================
   THE LOST LIBRARIES — shareable records

   Gives every catalogue entry its own URL, so a single library can
   be linked rather than the whole page:

       index.html#house-of-wisdom

   Loads LAST, after the page's own script, because it wraps
   openModal() rather than replacing it. Everything it needs —
   styles, markup, listeners — it adds itself, so no other file
   changes.

       <script src="share.js"></script>   <!-- just before </body> -->

   Degrades quietly: if openModal or LIBRARIES is missing, it does
   nothing and the page behaves exactly as before.
   ============================================================ */
(function () {
  'use strict';

  if (typeof LIBRARIES === 'undefined' || typeof openModal !== 'function') return;

  /* ---------- slugs ---------- */

  function slugify(s) {
    return String(s)
      .toLowerCase()
      .replace(/['’]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60);
  }

  /* Two records can produce the same slug — the Constantinople and
     Warsaw entries are close. Disambiguate with the year so a link
     never silently opens the wrong library. */
  var bySlug = {};
  var seen = {};
  LIBRARIES.forEach(function (d) {
    var base = slugify(d.name);
    var slug = base;
    if (seen[base]) slug = base + '-' + (d.year < 0 ? Math.abs(d.year) + 'bc' : d.year);
    seen[base] = true;
    while (bySlug[slug]) slug = slug + '-' + d.id;   /* last resort */
    d.slug = slug;
    bySlug[slug] = d;
  });

  /* ---------- styles ---------- */

  var css = document.createElement('style');
  css.textContent =
    '.m-share-sec{margin-top:1.25rem;padding-top:1.25rem;' +
      'border-top:1px solid rgba(18,15,12,.1);display:flex;gap:.6rem;' +
      'align-items:center;flex-wrap:wrap}' +
    '.m-share-btn{font-family:"Courier Prime",monospace;' +
      'font-size:clamp(.95rem,3.2vw,.95rem);letter-spacing:.1em;' +
      'text-transform:uppercase;padding:.55rem 1rem;min-height:44px;' +
      'border:1px solid var(--ember,#8f3410);color:var(--ember,#8f3410);' +
      'background:transparent;border-radius:2px;cursor:pointer;' +
      'transition:background .2s,color .2s;touch-action:manipulation;' +
      '-webkit-tap-highlight-color:transparent}' +
    '.m-share-btn:hover,.m-share-btn:focus-visible{' +
      'background:var(--ember,#8f3410);color:#fdfbf6}' +
    '.m-share-note{font-family:"Courier Prime",monospace;' +
      'font-size:clamp(.9rem,3vw,.9rem);color:var(--smoke,#3d342a)}' +
    '@media(max-width:420px){.m-share-sec{flex-direction:column;align-items:stretch}' +
      '.m-share-btn{width:100%}}' +
    /* Brief highlight on the card a shared link points at, so closing the
       modal leaves you looking at the right row rather than hunting. */
    '.lib-card-found{animation:libFound 2.6s ease-out 1;position:relative;z-index:1}' +
    '@keyframes libFound{' +
      '0%{background:rgba(143,52,16,.18);box-shadow:inset 3px 0 0 var(--ember,#8f3410)}' +
      '70%{background:rgba(143,52,16,.10);box-shadow:inset 3px 0 0 var(--ember,#8f3410)}' +
      '100%{background:transparent;box-shadow:none}}' +
    '@media(prefers-reduced-motion:reduce){' +
      '.lib-card-found{animation:none;outline:3px solid var(--ember,#8f3410);outline-offset:-3px}}';
  document.head.appendChild(css);

  /* ---------- share controls, built once ---------- */

  var modal = document.getElementById('libModal');
  var body  = modal && modal.querySelector('.modal-body');
  if (!body) return;

  var sec  = document.createElement('div');
  sec.className = 'm-share-sec';

  var btn  = document.createElement('button');
  btn.type = 'button';
  btn.className = 'm-share-btn';
  btn.textContent = 'Copy link';

  var note = document.createElement('span');
  note.className = 'm-share-note';
  note.setAttribute('role', 'status');          /* announces the result */
  note.setAttribute('aria-live', 'polite');

  sec.appendChild(btn);
  sec.appendChild(note);
  body.appendChild(sec);

  var current = null;

  function linkFor(d) {
    return location.origin + location.pathname + '#' + d.slug;
  }

  function flash(msg) {
    note.textContent = msg;
    setTimeout(function () { note.textContent = ''; }, 2600);
  }

  btn.addEventListener('click', function () {
    if (!current) return;
    var url = linkFor(current);

    /* The clipboard API needs a secure context; file:// and plain http
       will reject it, so fall back rather than failing silently. */
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url).then(
        function () { flash('Link copied'); },
        function () { fallback(url); }
      );
    } else {
      fallback(url);
    }
  });

  function fallback(url) {
    var ta = document.createElement('textarea');
    ta.value = url;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:absolute;left:-9999px';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    flash(ok ? 'Link copied' : 'Press Ctrl+C to copy: ' + url);
  }

  /* ---------- wrap openModal so the URL follows the record ---------- */

  var original = openModal;
  var silent = false;            /* true while reacting to a hash change */

  window.openModal = function (lib) {
    original(lib);
    current = lib;
    note.textContent = '';
    if (!silent && lib && lib.slug) {
      history.replaceState(null, '', '#' + lib.slug);
    }
  };

  /* Clear the fragment on close so a later share doesn't carry a stale
     record, and so the back button behaves. */
  modal.addEventListener('hidden.bs.modal', function () {
    current = null;
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  });

  /* ---------- find the card behind a record ---------- */

  /* Cards carry no id — they are rebuilt whenever a filter changes — so
     match on the name text instead of holding a stale reference. */
  function findCard(lib) {
    /* index.html keeps a handle on each card, so no DOM search is needed.
       The fallback covers an older index.html that still rebuilds the grid. */
    if (lib._card && lib._card.isConnected !== false) return lib._card;
    var cards = document.querySelectorAll('.lib-card');
    for (var i = 0; i < cards.length; i++) {
      var nameEl = cards[i].querySelector('.lib-name');
      if (nameEl && nameEl.textContent.trim().indexOf(lib.name) === 0) return cards[i];
    }
    return null;
  }

  /* A shared record may be hidden by whatever filter is active. Reset to
     All and look again rather than scrolling to nothing. */
  function revealCard(lib) {
    var card = findCard(lib);
    var hiddenByFilter = card && card.hasAttribute && card.hasAttribute('hidden');
    if (!card || hiddenByFilter) {
      var all = document.querySelector('.fbtn');       /* the All button */
      if (all && all.getAttribute('aria-pressed') !== 'true') {
        all.click();
        card = findCard(lib);
      }
    }
    if (!card) return;

    var reduce = window.matchMedia &&
                 window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    try {
      card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    } catch (e) {
      card.scrollIntoView();                            /* older browsers */
    }

    card.classList.add('lib-card-found');
    setTimeout(function () { card.classList.remove('lib-card-found'); }, 2800);
  }

  /* ---------- open from the URL ---------- */

  function openFromHash() {
    var key = decodeURIComponent((location.hash || '').replace(/^#/, ''));
    if (!key) return;
    var d = bySlug[key];
    if (!d) return;                       /* unknown fragment: ignore */
    silent = true;
    window.openModal(d);
    silent = false;

    /* Scroll behind the modal, so closing it leaves the card in view. */
    revealCard(d);
  }

  window.addEventListener('hashchange', openFromHash);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', openFromHash);
  } else {
    openFromHash();
  }

  /* Expose the lookup so anything else can build links. */
  window.LIB_BY_SLUG = bySlug;
  window.libLink = linkFor;
  window.revealLibCard = revealCard;
})();
