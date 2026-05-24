/* ── Preloader ──────────────────────────────────── */
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  setTimeout(() => preloader.classList.add('hidden'), 1700);
});

/* ── Scroll Progress Bar ────────────────────────── */
const progressBar = document.getElementById('scrollProgress');

window.addEventListener('scroll', updateProgress, { passive: true });

function updateProgress() {
  const scrolled  = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = ((scrolled / maxScroll) * 100) + '%';
}

/* ── Custom Cursor ──────────────────────────────── */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
}, { passive: true });

(function rafRing() {
  ringX += (mouseX - ringX) * 0.13;
  ringY += (mouseY - ringY) * 0.13;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(rafRing);
})();

document.querySelectorAll('a, button, .portfolio-item, .service-card, .team-card, .testi-card, .tech-pill, input, textarea, select').forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('expanded'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('expanded'));
});

/* ── Nav scroll effect ──────────────────────────── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveNav();
}, { passive: true });

function updateActiveNav() {
  const sections = ['hero', 'about', 'services', 'work', 'team', 'contact'];
  const offset   = 100;
  let current    = '';

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.scrollY >= el.offsetTop - offset) current = id;
  });

  document.querySelectorAll('.nl').forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === current);
  });
}

/* ── Mobile Nav (hamburger → X) ─────────────────── */
const hamburger = document.getElementById('navHamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('.nl').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ── Typewriter ─────────────────────────────────── */
const words   = ['innovantes.', 'mémorables.', 'performantes.', 'uniques.', 'puissantes.'];
const typedEl = document.getElementById('typedText');
let wIdx = 0, cIdx = 0, deleting = false;

function type() {
  const word = words[wIdx];
  typedEl.textContent = deleting
    ? word.slice(0, cIdx - 1)
    : word.slice(0, cIdx + 1);

  deleting ? cIdx-- : cIdx++;

  let delay = deleting ? 50 : 90;

  if (!deleting && cIdx === word.length)  { delay = 2400; deleting = true; }
  else if (deleting && cIdx === 0)        { deleting = false; wIdx = (wIdx + 1) % words.length; delay = 400; }

  setTimeout(type, delay);
}

type();

/* ── Scroll Reveal ──────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Stats Counters ─────────────────────────────── */
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el     = e.target;
    const target = parseInt(el.dataset.target);
    const dur    = 1500;
    const start  = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / dur, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
    statObserver.unobserve(el);
  });
}, { threshold: 0.6 });

document.querySelectorAll('.stat-num[data-target]').forEach(el => statObserver.observe(el));

/* ── Portfolio Filter ───────────────────────────── */
const filterBtns  = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.cat;

    portfolioItems.forEach(item => {
      const match = cat === 'all' || item.dataset.cat === cat;
      item.style.transition = 'opacity .3s ease, transform .3s ease';

      if (match) {
        item.style.display = 'block';
        requestAnimationFrame(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1) translateY(0)';
        });
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(.95) translateY(10px)';
        setTimeout(() => { if (item.style.opacity === '0') item.style.display = 'none'; }, 300);
      }
    });
  });
});

/* ── Hero Parallax Orbs ─────────────────────────── */
const orb1 = document.getElementById('orb1');
const orb2 = document.getElementById('orb2');

document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth  - 0.5) * 28;
  const y = (e.clientY / window.innerHeight - 0.5) * 28;
  if (orb1) orb1.style.transform = `translate(${x}px, ${y}px)`;
  if (orb2) orb2.style.transform = `translate(${-x * .6}px, ${-y * .6}px)`;
}, { passive: true });

/* ── Smooth Scroll ──────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
  });
});

/* ── Back to Top ────────────────────────────────── */
const backTopBtn = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  backTopBtn.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

backTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Contact Form ───────────────────────────────── */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const btn  = document.getElementById('submitBtn');
  const orig = btn.innerHTML;

  btn.disabled = true;
  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         style="animation:spin .7s linear infinite">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
    Envoi en cours...
  `;

  setTimeout(() => {
    btn.classList.add('sent');
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Message envoyé !
    `;

    setTimeout(() => {
      btn.disabled = false;
      btn.classList.remove('sent');
      btn.innerHTML = orig;
      this.reset();
    }, 3500);
  }, 1400);
});

/* ── Spin keyframe ──────────────────────────────── */
const spinStyle = document.createElement('style');
spinStyle.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(spinStyle);
