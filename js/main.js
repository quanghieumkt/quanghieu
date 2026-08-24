document.addEventListener("DOMContentLoaded", () => {

  /* Mobile menu */
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
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
        const isDecimal = !Number.isInteger(target);
        const val = isDecimal ? (target * eased).toFixed(1) : Math.round(target * eased);
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

  /* Toast helper */
  const toast = document.querySelector("#toast");
  const toastText = document.querySelector("#toast-text");
  let toastTimer;
  function showToast(msg) {
    if (!toast) return;
    clearTimeout(toastTimer);
    toastText.textContent = msg;
    toast.classList.add("show");
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  /* Contact topic pills */
  const topicPills = document.querySelectorAll(".topic-pill");
  topicPills.forEach(pill => {
    const input = pill.querySelector("input");
    if (!input) return;
    input.addEventListener("change", () => {
      topicPills.forEach(p => p.classList.remove("checked"));
      pill.classList.add("checked");
    });
  });

  /* Message character counter */
  const messageField = document.querySelector("#message");
  const charCount = document.querySelector("#char-count");
  if (messageField && charCount) {
    const max = messageField.getAttribute("maxlength") || 600;
    messageField.addEventListener("input", () => {
      const len = messageField.value.length;
      charCount.textContent = `${len}/${max}`;
      charCount.classList.toggle("near-limit", len > max * 0.85);
    });
  }

  /* Copy-to-clipboard buttons */
  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const value = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
      } catch (err) {
        const tmp = document.createElement("textarea");
        tmp.value = value;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand("copy");
        document.body.removeChild(tmp);
      }
      btn.classList.add("copied");
      showToast(`Đã sao chép: ${value}`);
      setTimeout(() => btn.classList.remove("copied"), 1800);
    });
  });

  /* Contact form -> mailto fallback (static site, no backend) */
  const form = document.querySelector("#contact-form");
  const submitBtn = document.querySelector("#submit-btn");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const topic = (form.querySelector('input[name="topic"]:checked') || {}).value || "Liên hệ";
      const subject = encodeURIComponent(`[${topic}] Liên hệ từ ${name} qua Portfolio`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

      if (submitBtn) submitBtn.classList.add("is-loading");
      setTimeout(() => {
        window.location.href = `mailto:quanghieumkt@gmail.com?subject=${subject}&body=${body}`;
        if (submitBtn) submitBtn.classList.remove("is-loading");
        showToast("Đã mở ứng dụng email — gửi để hoàn tất.");
      }, 450);
    });
  }
});
