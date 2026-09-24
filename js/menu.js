(() => {
  "use strict";

  const storageKey = "elHorneroLanguage";
  const langButtons = [...document.querySelectorAll(".lang-btn")];
  let language = getInitialLanguage();

  function getInitialLanguage() {
    let saved = "";
    try { saved = localStorage.getItem(storageKey) || ""; } catch (_) { /* Storage may be unavailable. */ }
    return SITE_CONFIG.supportedLanguages.includes(saved) ? saved : SITE_CONFIG.defaultLanguage;
  }

  function t(key) {
    return translations[language][key] || translations.es[key] || key;
  }

  function localized(value) {
    if (typeof value === "string") return value;
    if (!value) return "";
    return value[language] || value.es || "";
  }

  function renderMenu() {
    const target = document.querySelector("#menu-sections");
    const empty = document.querySelector("#menu-empty");
    target.replaceChildren();
    empty.hidden = SITE_CONFIG.menu.length > 0;
    SITE_CONFIG.menu.forEach((category, categoryIndex) => {
      const section = document.createElement("section");
      section.className = "menu-category";
      const categoryHeader = document.createElement("header");
      categoryHeader.className = "menu-category-header";
      const number = document.createElement("span");
      number.className = "menu-category-number";
      number.textContent = String(categoryIndex + 1).padStart(2, "0");
      const heading = document.createElement("h2");
      heading.textContent = localized(category.name);
      categoryHeader.append(number, heading);
      section.append(categoryHeader);
      (category.items || []).forEach((item) => {
        const article = document.createElement("article");
        article.className = "menu-item";
        const name = document.createElement("h3");
        name.textContent = localized(item.name);
        article.append(name);
        if (item.description) {
          const description = document.createElement("p");
          description.textContent = localized(item.description);
          article.append(description);
        }
        if (item.price) {
          const price = document.createElement("span");
          price.className = "price";
          price.textContent = item.price;
          article.append(price);
        }
        section.append(article);
      });
      target.append(section);
    });
  }

  function setLanguage(nextLanguage) {
    if (!SITE_CONFIG.supportedLanguages.includes(nextLanguage)) return;
    language = nextLanguage;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => { element.setAttribute("aria-label", t(element.dataset.i18nAria)); });
    langButtons.forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    try { localStorage.setItem(storageKey, language); } catch (_) { /* Translation still works without storage. */ }
    renderMenu();
  }

  const canonical = document.querySelector("#canonical-link");
  if (SITE_CONFIG.siteUrl) canonical.href = `${SITE_CONFIG.siteUrl.replace(/\/$/, "")}/menu.html`;
  else canonical.remove();

  const whatsapp = document.querySelector(".whatsapp-button");
  if (SITE_CONFIG.whatsappNumber) {
    whatsapp.href = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\D/g, "")}`;
    whatsapp.hidden = false;
  }

  langButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  setLanguage(language);
})();
