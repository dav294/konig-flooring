// app.js — König Flooring
// GSAP + ScrollTrigger + Lenis

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

  // ─── Lenis Smooth Scroll ──────────────────────────────────
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // ─── Nav: hide/show + scrolled class ─────────────────────
  const nav = document.getElementById('site-nav');
  let lastScroll = 0;

  lenis.on('scroll', ({ scroll }) => {
    if (scroll > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    if (scroll > lastScroll && scroll > 160) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastScroll = scroll;
  });

  // ─── Mobile nav burger ───────────────────────────────────
  const burger    = document.getElementById('nav-burger');
  const mobileNav = document.getElementById('mobile-nav');

  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('is-open');
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('is-open'));
  });

  // ─── Hero Entrance ───────────────────────────────────────
  // Wrap each hero-line text in an inner span for clip reveal
  document.querySelectorAll('.hero-line').forEach(line => {
    const text = line.innerHTML;
    line.innerHTML = `<span class="hero-line-inner">${text}</span>`;
  });

  const heroTl = gsap.timeline({ delay: 0.2, defaults: { ease: 'power4.out' } });

  heroTl
    .to('.hero-label',      { opacity: 1, y: 0, duration: 0.7 })
    .to('.hero-line-inner', { y: '0%', duration: 1.1, stagger: 0.14 }, '-=0.3')
    .to('.hero-sub',        { opacity: 1, duration: 0.8 }, '-=0.6')
    .to('.hero-ctas',       { opacity: 1, duration: 0.7 }, '-=0.5')
    .to('.hero-scroll',     { opacity: 1, duration: 0.6 }, '-=0.4');

  // Set initial states
  gsap.set('.hero-label', { opacity: 0, y: 10 });
  gsap.set('.hero-sub',   { opacity: 0 });
  gsap.set('.hero-ctas',  { opacity: 0 });
  gsap.set('.hero-scroll', { opacity: 0 });

  // ─── Hero parallax on scroll ──────────────────────────────
  gsap.to('.hero-bg', {
    yPercent: 25,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // ─── Reusable: section heading clip reveal ────────────────
  // Split each section-heading into lines for a clip-path reveal
  function revealHeading(el, trigger) {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1.1, ease: 'power4.out',
        scrollTrigger: {
          trigger: trigger || el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  document.querySelectorAll('.section-heading').forEach(el => revealHeading(el));

  // ─── Reusable: fade-up on scroll enter ───────────────────
  function fadeUp(selector, stagger = 0, triggerEl = null) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: stagger,
      scrollTrigger: {
        trigger: triggerEl || els[0],
        start: 'top 84%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // ─── Section label fade ───────────────────────────────────
  document.querySelectorAll('.section-label').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 12 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' }
      }
    );
  });

  // ─── Trust strip ─────────────────────────────────────────
  gsap.to('.trust-item', {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
    scrollTrigger: {
      trigger: '.trust-strip',
      start: 'top 88%',
      toggleActions: 'play none none reverse'
    }
  });

  // ─── Sustainability ───────────────────────────────────────
  gsap.to('.sustain-body', {
    opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    scrollTrigger: {
      trigger: '.sustain-content',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.to('.sustain-stat', {
    opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    scrollTrigger: {
      trigger: '.sustain-stats',
      start: 'top 84%',
      toggleActions: 'play none none reverse'
    }
  });

  // Sustainability image parallax
  gsap.to('.sustain-image', {
    yPercent: -8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.sustain-image-wrap',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  // ─── Stats count-up ───────────────────────────────────────
  document.querySelectorAll('.stat-num').forEach(el => {
    const target  = parseFloat(el.dataset.target);
    const suffix  = el.dataset.suffix || '';
    const isZero  = target === 0;

    if (isZero) {
      ScrollTrigger.create({
        trigger: el, start: 'top 88%', once: true,
        onEnter: () => { el.textContent = '0' + suffix; }
      });
      return;
    }

    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target, duration: 2, ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          }
        });
      }
    });
  });

  // ─── Process steps ───────────────────────────────────────
  document.querySelectorAll('.process-step').forEach((step, i) => {
    const dir = i % 2 === 0 ? -30 : 30;
    gsap.fromTo(step,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
    // Image parallax per step
    const img = step.querySelector('.process-img');
    if (img) {
      gsap.to(img, {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: step,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  });

  // ─── Collection cards ────────────────────────────────────
  gsap.to('.collection-card', {
    opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
    scrollTrigger: {
      trigger: '.collections-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // ─── Certifications ──────────────────────────────────────
  gsap.to('.cert-item', {
    opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    scrollTrigger: {
      trigger: '.cert-grid',
      start: 'top 82%',
      toggleActions: 'play none none reverse'
    }
  });

  // ─── Trade section ───────────────────────────────────────
  gsap.to('.trade-body', {
    opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    scrollTrigger: {
      trigger: '.trade-content',
      start: 'top 82%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.to('.trade-benefits', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    scrollTrigger: {
      trigger: '.trade-benefits',
      start: 'top 86%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.to('.trade-image-wrap', {
    opacity: 1, x: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: {
      trigger: '.trade-inner',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // ─── Footer entrance ─────────────────────────────────────
  gsap.fromTo('.site-footer',
    { opacity: 0, y: 20 },
    {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: {
        trigger: '.site-footer',
        start: 'top 96%',
        toggleActions: 'play none none none'
      }
    }
  );

});
