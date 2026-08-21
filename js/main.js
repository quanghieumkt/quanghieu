document.addEventListener("DOMContentLoaded", () => {

  /* Mobile menu */
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  /* Scroll reveal */
  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));

  /* Count-up stats */
  const counters = document.querySelectorAll("[data-count]");
  const countIO = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      countIO.unobserve(el);
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const duration = 1100;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target < 10 ? (target * eased).toFixed(1) : Math.round(target * eased);
        el.textContent = val.toLocaleString("vi-VN") + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  counters.forEach(el => countIO.observe(el));

  /* Project filter */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll("[data-category]");
  filterButtons.forEach(btn => btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display = filter === "all" || card.dataset.category.includes(filter) ? "" : "none";
    });
  }));

  /* Contact form -> mailto fallback (static site, no backend) */
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const subject = encodeURIComponent(`Liên hệ từ ${name} qua Portfolio`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:quanghieumkt@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
