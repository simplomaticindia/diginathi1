const basePath = document.body.dataset.basePath || ".";
const contentPath = `${basePath}/data/site-content.json`;

async function loadContent() {
  if (window.SITE_CONTENT) {
    return window.SITE_CONTENT;
  }

  const response = await fetch(contentPath);
  if (!response.ok) {
    throw new Error("Failed to load content");
  }
  return response.json();
}

function byId(id) {
  return document.getElementById(id);
}

function renderFeatures(features) {
  const container = byId("feature-grid");
  if (!container) return;

  container.innerHTML = features
    .map(
      (feature) => `
      <article class="feature-card reveal">
        <div class="feature-icon">${feature.icon}</div>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </article>
    `
    )
    .join("");
}

function renderTrusted(trustedBy) {
  const container = byId("trusted-logos");
  if (!container) return;

  container.innerHTML = trustedBy
    .map((name) => `<span class="logo-pill">${name}</span>`)
    .join("");
}

function renderStats(stats) {
  const container = byId("hero-stats");
  if (!container) return;

  container.innerHTML = stats.map((stat) => `<span class="stat-chip">${stat}</span>`).join("");
}

function renderAdvantages(advantages) {
  const container = byId("advantage-grid");
  if (!container) return;

  container.innerHTML = advantages
    .map(
      (item, index) => `
      <article class="adv-card reveal">
        <div class="adv-index">${String(index + 1).padStart(2, "0")}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
    )
    .join("");
}

function renderOfferings(offerings) {
  const cardGrid = byId("offering-grid");
  const accordion = byId("service-accordion");

  if (cardGrid) {
    cardGrid.innerHTML = offerings
      .map(
        (offering) => `
      <article class="offer-card reveal">
        <span class="meta">${offering.type}</span>
        <h3>${offering.title}</h3>
        <p>${offering.summary}</p>
        <div class="brochure-row">
          <a class="btn btn-outline" href="${offering.page}">View Page</a>
          <a class="btn btn-ghost" href="${offering.brochure}" download>Brochure</a>
        </div>
      </article>
    `
      )
      .join("");
  }

  if (accordion) {
    const services = offerings.filter((offering) => offering.type === "Service");
    accordion.innerHTML = services
      .map(
        (service) => `
      <div class="acc-item">
        <button class="acc-head" type="button">
          <span>${service.title}</span>
          <span>+</span>
        </button>
        <div class="acc-body">
          <p>${service.description}</p>
          <div class="brochure-row">
            <a class="btn btn-outline" href="${service.page}">Explore</a>
            <a class="btn btn-ghost" href="${service.brochure}" download>Download Brochure</a>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  bindAccordions();
}

function renderTestimonials(testimonials) {
  const container = byId("testimonial-row");
  if (!container) return;

  container.innerHTML = testimonials
    .map(
      (item) => `
      <article class="testimonial reveal">
        <p class="quote">\u201c${item.quote}\u201d</p>
        <div class="quote-by">${item.name} \u00b7 ${item.company}</div>
      </article>
    `
    )
    .join("");
}

function renderFaq(items) {
  const container = byId("faq-grid");
  if (!container) return;

  container.innerHTML = items
    .map(
      (item) => `
      <article class="faq-item reveal">
        <h3>${item.question}</h3>
        <p>${item.answer}</p>
      </article>
    `
    )
    .join("");
}

function renderIndustryTabs(industries) {
  const tabContainer = byId("industry-tabs");
  const contentContainer = byId("industry-content");
  if (!tabContainer || !contentContainer) return;

  tabContainer.innerHTML = industries
    .map(
      (industry, index) => `
      <button class="tab-btn ${index === 0 ? "active" : ""}" data-industry="${industry.id}" type="button">
        ${industry.emoji} ${industry.label}
      </button>
    `
    )
    .join("");

  function renderIndustryPanel(industry) {
    contentContainer.innerHTML = `
      <div class="industry-panel">
        <article class="industry-card card reveal">
          <h3>${industry.tagline}</h3>
          <p style="margin-top:0.8rem;">${industry.description}</p>
          <ul class="checklist" style="margin-top: 1rem;">
            ${industry.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
          </ul>
        </article>
        <aside class="mock-mini reveal">
          <h3>${industry.label} Dashboard</h3>
          <p style="margin-top:0.5rem;color:rgba(227,235,255,0.8);">Live operational snapshot</p>
          <div class="metric-list">
            ${industry.metrics.map((metric) => `<div class="metric-item">${metric}</div>`).join("")}
          </div>
        </aside>
      </div>
    `;

    observeReveal();
  }

  renderIndustryPanel(industries[0]);

  tabContainer.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      tabContainer.querySelectorAll(".tab-btn").forEach((tab) => tab.classList.remove("active"));
      button.classList.add("active");
      const selected = industries.find((item) => item.id === button.dataset.industry);
      if (selected) renderIndustryPanel(selected);
    });
  });
}

function populateContacts(data) {
  const emailEls = document.querySelectorAll("[data-contact='email']");
  const phoneEls = document.querySelectorAll("[data-contact='phones']");
  const addressEls = document.querySelectorAll("[data-contact='address']");

  emailEls.forEach((el) => {
    el.textContent = data.contact.email;
    if (el.tagName.toLowerCase() === "a") {
      el.href = `mailto:${data.contact.email}`;
    }
  });

  phoneEls.forEach((el) => {
    el.innerHTML = data.contact.phones.map((phone) => `<span>${phone}</span>`).join("<br>");
  });

  addressEls.forEach((el) => {
    el.textContent = data.contact.address;
  });
}

function renderOfferingPage(data) {
  const slug = document.body.dataset.offering;
  if (!slug) return;

  const offering = data.offerings.find((item) => item.slug === slug);
  if (!offering) return;

  const titleEl = byId("offering-title");
  const typeEl = byId("offering-type");
  const summaryEl = byId("offering-summary");
  const descriptionEl = byId("offering-description");
  const detailEl = byId("offering-detail");
  const listEl = byId("offering-highlights");
  const brochureEl = byId("offering-brochure");

  if (titleEl) titleEl.textContent = offering.title;
  if (typeEl) typeEl.textContent = offering.type;
  if (summaryEl) summaryEl.textContent = offering.summary;
  if (descriptionEl) descriptionEl.textContent = offering.description;
  if (detailEl) detailEl.textContent = offering.detail;

  if (listEl) {
    listEl.innerHTML = offering.highlights.map((item) => `<div class="kv-item">${item}</div>`).join("");
  }

  if (brochureEl) {
    brochureEl.href = `${basePath}/${offering.brochure}`;
  }
}

function bindFormFeedback() {
  const forms = document.querySelectorAll("form[data-demo-form]");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const submit = form.querySelector("button[type='submit']");
      const message = form.querySelector("[data-form-message]");
      if (submit) submit.disabled = true;
      if (message) message.textContent = "Thanks. Our team will contact you shortly.";
      form.reset();
      setTimeout(() => {
        if (submit) submit.disabled = false;
      }, 1200);
    });
  });
}

function bindMobileNav() {
  const nav = document.querySelector(".top-nav");
  const toggle = document.querySelector(".mobile-toggle");
  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(nav.classList.contains("open")));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function bindAccordions() {
  document.querySelectorAll(".acc-item").forEach((item) => {
    const head = item.querySelector(".acc-head");
    if (!head) return;

    head.addEventListener("click", () => {
      item.classList.toggle("open");
      const symbol = head.querySelector("span:last-child");
      if (symbol) symbol.textContent = item.classList.contains("open") ? "\u2212" : "+";
    });
  });
}

function bindDemoModal() {
  const trigger = byId("open-demo");
  const modal = byId("demo-modal");
  const close = byId("close-demo");
  if (!trigger || !modal || !close) return;

  trigger.addEventListener("click", () => modal.classList.add("show"));
  close.addEventListener("click", () => modal.classList.remove("show"));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
}

function observeReveal() {
  const items = document.querySelectorAll(".reveal:not(.visible)");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}

function fillBrochures(data) {
  const container = byId("brochure-row");
  if (!container) return;

  container.innerHTML = data.offerings
    .slice(0, 4)
    .map(
      (offering) =>
        `<a class="btn btn-outline" href="${offering.brochure}" download>${offering.title} Brochure</a>`
    )
    .join("");
}

async function init() {
  bindMobileNav();
  bindDemoModal();
  bindFormFeedback();

  try {
    const content = await loadContent();

    renderStats(content.stats);
    renderTrusted(content.trustedBy);
    renderFeatures(content.features);
    renderIndustryTabs(content.industries);
    renderAdvantages(content.advantages);
    renderOfferings(content.offerings);
    renderTestimonials(content.testimonials);
    renderFaq(content.supportFaq);
    fillBrochures(content);
    populateContacts(content.brand);
    renderOfferingPage(content);

    observeReveal();
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", init);
