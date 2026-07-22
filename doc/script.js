(function () {
  const current = document.body.getAttribute("data-doc-page");
  if (!current) {
    return;
  }

  document.querySelectorAll("[data-doc-link]").forEach((link) => {
    if (link.getAttribute("data-doc-link") === current) {
      link.classList.add("is-current");
      link.setAttribute("aria-current", "page");
    }
  });
})();
