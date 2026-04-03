// app.js — König Flooring
// GSAP + ScrollTrigger + Lenis + i18n

gsap.registerPlugin(ScrollTrigger);

// ─── Translations ─────────────────────────────────────────────
const translations = {
  de: {
    'page.title':                  'König Flooring — Nachhaltig gefertigt in Deutschland',
    'nav.collections':             'Kollektionen',
    'nav.sustainability':          'Nachhaltigkeit',
    'nav.about':                   'Über uns',
    'nav.trade':                   'Handel',
    'nav.cta':                     'Händler finden',
    'hero.label':                  'Premium-Laminatboden — Bayern, Deutschland',
    'hero.line1':                  'Böden, geboren',
    'hero.line2':                  'aus dem Wald.',
    'hero.sub':                    'Premium-Laminatböden, nachhaltig gefertigt in Deutschland aus verantwortungsvoll gewonnenen Naturmaterialien. Gebaut, um ein Leben lang zu halten.',
    'hero.cta1':                   'Kollektionen entdecken <span aria-hidden="true">→</span>',
    'hero.cta2':                   'Handelsanfragen',
    'trust.fsc':                   'FSC-zertifiziertes Holz',
    'trust.en13329':               'EN 13329 Standard',
    'trust.voc':                   'Formaldehydfrei',
    'trust.warranty':              '25 Jahre Garantie',
    'sustain.label':               'Unsere Verantwortung',
    'sustain.heading':             'Nachhaltigkeit ist kein Merkmal.<br><em>Sie ist unser Fundament.</em>',
    'sustain.body1':               'Jeder König-Boden beginnt seinen Weg in den nachhaltig bewirtschafteten Wäldern Mitteleuropas. Wir beziehen unser Holz ausschließlich aus FSC-zertifizierten Wäldern — Wälder, die aktiv wieder aufgeforstet, überwacht und für zukünftige Generationen erhalten werden.',
    'sustain.body2':               'Unser Herstellungsprozess verwendet wasserbasierte Beschichtungen, die Lösungsmittelschadstoffe eliminieren, und unsere Klebstoffsysteme sind frei von Formaldehyd und anderen flüchtigen organischen Verbindungen. Wir besitzen die EMICODE EC1+-Zertifizierung — den strengsten unabhängigen Emissionsstandard der Branche.',
    'sustain.body3':               'Verpackungen werden aus recycelten und recycelbaren Materialien hergestellt. Unsere Anlage in Bayern verfolgt eine Zero-Waste-Politik, bei der Produktionsreste wiederverwertet statt entsorgt werden. Mit König wählen Sie einen Boden mit gutem Gewissen.',
    'sustain.stat1':               'FSC-zertifiziertes Holz',
    'sustain.stat2':               'Formaldehyd-Emissionen',
    'sustain.stat3':               'Wohngarantie',
    'sustain.badge':               'Gefertigt in<br>Bayern',
    'process.label':               'Unser Prozess',
    'process.heading':             'Vom Wald<br>zum Boden.',
    'process.intro':               'Drei durchdachte Stufen. Ein außergewöhnliches Ergebnis.',
    'process.step1.title':         'Verantwortungsvolle Beschaffung',
    'process.step1.body':          'Wir arbeiten ausschließlich mit Forstpartnern zusammen, die nach FSC-Lieferkettenprinzipien zertifiziert sind. Holz wird für optimale Dichte und strukturelle Integrität ausgewählt, auf eine Weise geerntet, die aktiv die Waldregeneration fördert. Kein Altholz. Keine Kompromisse.',
    'process.step2.title':         'Präzisionsfertigung',
    'process.step2.body':          'In unserem Werk in Bayern werden Holzfasern unter Präzisionswärme und -druck zu hochdichten Kernplatten verarbeitet, die eine maßhaltige Grundlage schaffen. Jede Dekorschicht wird authentisch aufgebracht, um die natürliche Maserung, Farbe und Textur von Echtholz zu replizieren — naturgetreu in jedem Detail.',
    'process.step3.title':         'Natürliche Veredelung',
    'process.step3.body':          'Eine robuste Schutzoberfläche, formuliert mit Mineralverbindungen, wird auf jede Diele aufgebracht — und liefert die Verschleißfestigkeit, die jedem König-Boden seine AC4-Bewertung einbringt. Wasserbasierte Lackierungen ersetzen konventionelle Lösungsmittelsysteme und halten unsere Emissionen weit unter den E1-Klassenschwellen.',
    'collections.label':           'Unsere Kollektionen',
    'collections.heading':         'Drei Ausdrücke<br>natürlicher Schönheit.',
    'collections.essence.spec':    '8mm · Gerader Dielenbelag',
    'collections.essence.name':    'König Essence',
    'collections.essence.desc':    'Unser Einstieg in die König-Reihe — ein 8mm Laminat im geraden Dielenformat, das authentischen Holzcharakter ohne Kompromisse liefert. Langlebig, klar und gefertigt, um der Zeit standzuhalten.',
    'collections.essence.link':    'Kollektion ansehen <span aria-hidden="true">→</span>',
    'collections.essencepro.spec': '12mm · Gerader Dielenbelag',
    'collections.essencepro.name': 'König Essence Pro',
    'collections.essencepro.desc': 'Dieselbe authentische König-Handwerkskunst, auf 12mm gehoben. Bessere akustische Leistung, ein substanzielleres Auftrittsgefühl und gesteigerte Haltbarkeit für anspruchsvolle Innenräume.',
    'collections.essencepro.link': 'Kollektion ansehen <span aria-hidden="true">→</span>',
    'collections.prestige.spec':   '12mm · Fischgrätmuster',
    'collections.prestige.name':   'König Prestige',
    'collections.prestige.desc':   'Unser feinster Ausdruck des König-Standards. Ein 12mm Fischgrätmuster-Verlegeraster, das jeden Boden in ein durchdachtes Designstatement verwandelt. Geometrische Präzision, natürliche Wärme.',
    'collections.prestige.link':   'Kollektion ansehen <span aria-hidden="true">→</span>',
    'cert.label':                  'Standards &amp; Zertifizierungen',
    'cert.heading':                'Unabhängig geprüft.<br>Von den Besten der Branche bestätigt.',
    'cert.fsc.name':               'FSC-zertifiziert',
    'cert.fsc.desc':               'Alles Holz in König-Böden stammt aus Wäldern, die vom Forest Stewardship Council zertifiziert wurden — dem weltweiten Maßstab für verantwortungsvolle Forstwirtschaft.',
    'cert.emicode.name':           'EMICODE EC1 Plus',
    'cert.emicode.desc':           'Unsere Kleb- und Beschichtungsstoffe tragen die EMICODE EC1+-Klassifizierung — die höchstmögliche Bewertung für emissionsarme Bodenbelagsinstallationsprodukte.',
    'cert.en.name':                'EN 13329 Standard',
    'cert.en.desc':                'Jede König-Diele wird in vollständiger Übereinstimmung mit EN 13329 hergestellt und geprüft — dem maßgeblichen europäischen Standard für Laminatbodenleistung.',
    'cert.gg.name':                'GREENGUARD Gold',
    'cert.gg.desc':                'Die GREENGUARD Gold-Zertifizierung bestätigt, dass König-Böden strenge chemische Emissionsstandards erfüllen und damit sicher für den Einsatz in Schulen und Gesundheitseinrichtungen sind.',
    'trade.label':                 'Für Händler &amp; Distributoren',
    'trade.heading':               'König in<br>Ihrem Geschäft führen.',
    'trade.body1':                 'Wir arbeiten mit Bodenbelagseinzelhändlern, Inneneinrichtungsspezialisten und Distributoren in ganz Europa zusammen. Wenn Sie Ihren Kunden eine Premium-Laminatbodenkollektion aus nachhaltiger Produktion anbieten möchten, sprechen wir gerne mit Ihnen.',
    'trade.body2':                 'Mindestbestellmengen gelten. Handelspreise auf Anfrage erhältlich.',
    'trade.benefit1':              'Wettbewerbsfähige Handelspreise',
    'trade.benefit2':              'Muster- &amp; Displaypakete',
    'trade.benefit3':              'Persönlicher Kundenservice',
    'trade.cta':                   'Handelskonto beantragen <span aria-hidden="true">→</span>',
    'footer.tagline':              'Gefertigt in Deutschland. Für das Leben gebaut.',
    'footer.col1.label':           'Produkt',
    'footer.collections':          'Kollektionen',
    'footer.sustainability':       'Nachhaltigkeit',
    'footer.technical':            'Technische Daten',
    'footer.installation':         'Installationsanleitung',
    'footer.col2.label':           'Unternehmen',
    'footer.about':                'Über König',
    'footer.trade':                'Handelsprogramm',
    'footer.press':                'Presse',
    'footer.contact':              'Kontakt',
    'footer.col3.label':           'Kontakt',
    'footer.location':             'Bayern, Deutschland',
    'footer.copy':                 '© 2025 König Flooring GmbH. Alle Rechte vorbehalten.',
    'footer.privacy':              'Datenschutzrichtlinie',
    'footer.terms':                'Nutzungsbedingungen',
    'footer.imprint':              'Impressum',
  },
  en: {
    'page.title':                  'König Flooring — Sustainably Crafted in Germany',
    'nav.collections':             'Collections',
    'nav.sustainability':          'Sustainability',
    'nav.about':                   'About',
    'nav.trade':                   'Trade',
    'nav.cta':                     'Find a Retailer',
    'hero.label':                  'Premium Laminate Flooring — Bavaria, Germany',
    'hero.line1':                  'Flooring Born',
    'hero.line2':                  'From the Forest.',
    'hero.sub':                    'Premium laminate flooring, sustainably crafted in Germany using responsibly sourced natural materials. Built to endure a lifetime of living.',
    'hero.cta1':                   'Explore Collections <span aria-hidden="true">→</span>',
    'hero.cta2':                   'Trade Enquiries',
    'trust.fsc':                   'FSC Certified Timber',
    'trust.en13329':               'EN 13329 Standard',
    'trust.voc':                   'Zero Formaldehyde',
    'trust.warranty':              '25-Year Warranty',
    'sustain.label':               'Our Responsibility',
    'sustain.heading':             'Sustainability is not a feature.<br><em>It\'s our foundation.</em>',
    'sustain.body1':               'Every König floor begins its journey in the sustainably managed forests of Central Europe. We source our timber exclusively from FSC-certified woodlands — forests that are actively replanted, monitored, and preserved for future generations.',
    'sustain.body2':               'Our manufacturing process uses water-based coatings that eliminate hazardous solvents, and our adhesive systems are free from formaldehyde and other volatile organic compounds. We hold EMICODE EC1+ certification — the most stringent independent emissions standard in the industry.',
    'sustain.body3':               'Packaging is produced from recycled and recyclable materials. Our facility in Bavaria operates under a zero-landfill policy, with production offcuts repurposed rather than discarded. When you choose König, you choose a floor with a clear conscience.',
    'sustain.stat1':               'FSC Certified Timber',
    'sustain.stat2':               'Formaldehyde Emissions',
    'sustain.stat3':               'Residential Warranty',
    'sustain.badge':               'Crafted in<br>Bavaria',
    'process.label':               'Our Process',
    'process.heading':             'From Forest<br>to Floor.',
    'process.intro':               'Three considered stages. One exceptional result.',
    'process.step1.title':         'Responsible Sourcing',
    'process.step1.body':          'We work only with forestry partners certified to FSC Chain of Custody standards. Timber is selected for optimal density and structural integrity, harvested in a manner that actively promotes forest regeneration. No old-growth timber. No compromises.',
    'process.step2.title':         'Precision Manufacturing',
    'process.step2.body':          'In our Bavarian facility, wood fibres are engineered into high-density core panels under precision heat and pressure, creating a dimensionally stable foundation. Each décor layer is applied to authentically replicate the natural grain, colour and texture of real wood — faithful to nature in every detail.',
    'process.step3.title':         'Natural Finishing',
    'process.step3.body':          'A robust protective surface, formulated with mineral compounds, is bonded to each plank — providing the wear resistance that earns every König floor its AC4 commercial rating. Water-based finishes replace conventional solvent systems throughout, keeping our emissions well below E1 class thresholds.',
    'collections.label':           'Our Collections',
    'collections.heading':         'Three Expressions<br>of Natural Beauty.',
    'collections.essence.spec':    '8mm · Straight Plank',
    'collections.essence.name':    'König Essence',
    'collections.essence.desc':    'Our entry into the König range — an 8mm straight plank laminate that delivers authentic wood character without compromise. Durable, clean, and crafted to stand the test of time.',
    'collections.essence.link':    'View Collection <span aria-hidden="true">→</span>',
    'collections.essencepro.spec': '12mm · Straight Plank',
    'collections.essencepro.name': 'König Essence Pro',
    'collections.essencepro.desc': 'The same authentic König craftsmanship, elevated to 12mm. Greater acoustic performance, a more substantial underfoot feel, and enhanced durability for demanding interiors.',
    'collections.essencepro.link': 'View Collection <span aria-hidden="true">→</span>',
    'collections.prestige.spec':   '12mm · Herringbone',
    'collections.prestige.name':   'König Prestige',
    'collections.prestige.desc':   'Our finest expression of the König standard. A 12mm herringbone lay pattern that transforms any floor into a considered design statement. Geometric precision, natural warmth.',
    'collections.prestige.link':   'View Collection <span aria-hidden="true">→</span>',
    'cert.label':                  'Standards &amp; Certifications',
    'cert.heading':                'Independently Tested.<br>Verified by the Industry\'s Best.',
    'cert.fsc.name':               'FSC Certified',
    'cert.fsc.desc':               'All timber used in König floors is sourced from forests certified by the Forest Stewardship Council — the global benchmark for responsible forestry.',
    'cert.emicode.name':           'EMICODE EC1 Plus',
    'cert.emicode.desc':           'Our adhesives and coatings carry EMICODE EC1+ classification — the highest possible rating for low-emission flooring installation products.',
    'cert.en.name':                'EN 13329 Standard',
    'cert.en.desc':                'Every König plank is manufactured and tested in full conformance with EN 13329, the definitive European standard for laminate flooring performance.',
    'cert.gg.name':                'GREENGUARD Gold',
    'cert.gg.desc':                'GREENGUARD Gold certification confirms that König floors meet strict chemical emissions standards, making them safe for use in schools and healthcare environments.',
    'trade.label':                 'For Retailers &amp; Distributors',
    'trade.heading':               'Stock König<br>in Your Store.',
    'trade.body1':                 'We partner with flooring retailers, interior specialists and distributors across Europe. If you\'re looking to offer your customers a premium, sustainably produced laminate flooring range, we\'d be glad to talk.',
    'trade.body2':                 'Minimum order quantities apply. Trade pricing available on application.',
    'trade.benefit1':              'Competitive Trade Pricing',
    'trade.benefit2':              'Sample &amp; Display Packages',
    'trade.benefit3':              'Dedicated Account Support',
    'trade.cta':                   'Apply for a Trade Account <span aria-hidden="true">→</span>',
    'footer.tagline':              'Crafted in Germany. Built for life.',
    'footer.col1.label':           'Product',
    'footer.collections':          'Collections',
    'footer.sustainability':       'Sustainability',
    'footer.technical':            'Technical Data',
    'footer.installation':         'Installation Guide',
    'footer.col2.label':           'Company',
    'footer.about':                'About König',
    'footer.trade':                'Trade Programme',
    'footer.press':                'Press',
    'footer.contact':              'Contact',
    'footer.col3.label':           'Contact',
    'footer.location':             'Bavaria, Germany',
    'footer.copy':                 '© 2025 König Flooring GmbH. All rights reserved.',
    'footer.privacy':              'Privacy Policy',
    'footer.terms':                'Terms of Use',
    'footer.imprint':              'Imprint',
  }
};

// ─── Apply translations to the page ──────────────────────────
let currentLang = 'de';

function applyTranslations(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = t['page.title'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key]) return;

    // Hero lines: GSAP wraps text in .hero-line-inner — update that child instead
    if (el.classList.contains('hero-line')) {
      const inner = el.querySelector('.hero-line-inner');
      if (inner) {
        inner.textContent = t[key];
      } else {
        el.textContent = t[key];
      }
      return;
    }

    el.innerHTML = t[key];
  });

  // Update lang button label to show only active language code
  document.getElementById('lang-btn').textContent = lang.toUpperCase();

  // Mark the active option in the dropdown
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('is-active', opt.dataset.lang === lang);
  });

  currentLang = lang;
}

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

  // ─── Language Switcher ───────────────────────────────────
  const langBtn      = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('is-open');
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('is-open');
  });

  langDropdown.addEventListener('click', (e) => {
    const option = e.target.closest('.lang-option');
    if (!option) return;
    applyTranslations(option.dataset.lang);
    langDropdown.classList.remove('is-open');
  });

  // ─── Hero Entrance ───────────────────────────────────────
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

  // ─── Reusable: section heading reveal ────────────────────
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
  document.querySelectorAll('.process-step').forEach((step) => {
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
