(() => {
  "use strict";

  const storageKey = "elHorneroLanguage";
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const langButtons = [...document.querySelectorAll(".lang-btn")];
  const galleryButtons = [...document.querySelectorAll(".gallery-item")];
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = lightbox.querySelector("figure img");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const lightboxCount = lightbox.querySelector(".lightbox-count");
  let language = getInitialLanguage();
  let currentImage = 0;
  let returnFocus = null;

  function getInitialLanguage() {
    let saved = "";
    try { saved = localStorage.getItem(storageKey) || ""; } catch (_) { /* Storage may be unavailable. */ }
    return SITE_CONFIG.supportedLanguages.includes(saved) ? saved : SITE_CONFIG.defaultLanguage;
  }

  function t(key) {
    return translations[language][key] || translations.es[key] || key;
  }

  function setLanguage(nextLanguage) {
    if (!SITE_CONFIG.supportedLanguages.includes(nextLanguage)) return;
    language = nextLanguage;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      element.setAttribute("aria-label", t(element.dataset.i18nAria));
    });
    navToggle.setAttribute("aria-label", t(navToggle.getAttribute("aria-expanded") === "true" ? "closeMenu" : "openMenu"));
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.alt = t(element.dataset.i18nAlt);
    });
    langButtons.forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    try { localStorage.setItem(storageKey, language); } catch (_) { /* Translation still works without storage. */ }
    if (!lightbox.hidden) updateLightbox();
  }

  function closeNavigation() {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", t("openMenu"));
    mobileNav.hidden = true;
    header.classList.remove("menu-visible");
    document.body.classList.remove("nav-open");
  }

  function toggleNavigation() {
    const opening = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(opening));
    navToggle.setAttribute("aria-label", t(opening ? "closeMenu" : "openMenu"));
    mobileNav.hidden = !opening;
    header.classList.toggle("menu-visible", opening);
    document.body.classList.toggle("nav-open", opening);
    if (opening) mobileNav.querySelector("a").focus();
  }

  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }

  function updateLightbox() {
    const source = galleryButtons[currentImage].querySelector("img");
    lightboxImage.src = source.src;
    lightboxImage.alt = source.alt;
    lightboxCaption.textContent = galleryButtons[currentImage].querySelector("span").textContent;
    lightboxCount.textContent = `${currentImage + 1} / ${galleryButtons.length}`;
  }

  function openLightbox(index) {
    returnFocus = document.activeElement;
    currentImage = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    lightbox.querySelector(".lightbox-close").focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    lightboxImage.src = "";
    if (returnFocus) returnFocus.focus();
  }

  function moveLightbox(direction) {
    currentImage = (currentImage + direction + galleryButtons.length) % galleryButtons.length;
    updateLightbox();
  }

  function configureSite() {
    document.querySelectorAll(".external-maps").forEach((link) => { link.href = SITE_CONFIG.googleMapsUrl; });
    document.querySelectorAll("[data-map-key]").forEach((link) => {
      const url = SITE_CONFIG.travelMaps[link.dataset.mapKey];
      if (url) link.href = url;
    });
    const instagramPanel = document.querySelector(".instagram-panel");
    if (SITE_CONFIG.instagramUrl) {
      instagramPanel.hidden = false;
      instagramPanel.querySelector("a").href = SITE_CONFIG.instagramUrl;
    }
    const whatsapp = document.querySelector(".whatsapp-button");
    if (SITE_CONFIG.whatsappNumber) {
      whatsapp.href = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\D/g, "")}`;
      whatsapp.hidden = false;
    }
    const canonical = document.querySelector("#canonical-link");
    if (SITE_CONFIG.siteUrl) {
      const base = SITE_CONFIG.siteUrl.replace(/\/$/, "");
      canonical.href = `${base}/`;
      document.querySelector('meta[property="og:image"]').content = `${base}/images/hero/el-hornero-delta.svg`;
    } else {
      canonical.remove();
    }
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: SITE_CONFIG.restaurantName,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Arroyo Abra Vieja",
        addressLocality: "Tigre Delta, Tres Bocas, Arroyo Abra Vieja",
        addressRegion: "Buenos Aires",
        addressCountry: "AR"
      },
      hasMap: SITE_CONFIG.googleMapsUrl
    };
    if (SITE_CONFIG.siteUrl) structuredData.url = SITE_CONFIG.siteUrl;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.append(script);
    document.querySelector("#year").textContent = new Date().getFullYear();
  }

  langButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  navToggle.addEventListener("click", toggleNavigation);
  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", () => { if (window.innerWidth > 980) closeNavigation(); });

  galleryButtons.forEach((button, index) => button.addEventListener("click", () => openLightbox(index)));
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".prev").addEventListener("click", () => moveLightbox(-1));
  lightbox.querySelector(".next").addEventListener("click", () => moveLightbox(1));
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.hidden) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") moveLightbox(-1);
      if (event.key === "ArrowRight") moveLightbox(1);
      if (event.key === "Tab") {
        const controls = [...lightbox.querySelectorAll("button")];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
      return;
    }
    if (event.key === "Escape" && !mobileNav.hidden) closeNavigation();
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    document.querySelectorAll("#top,#experiencia,#carta,#galeria,#llegar").forEach((section) => sectionObserver.observe(section));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }

  configureSite();
  setLanguage(language);
  updateHeader();
})();
