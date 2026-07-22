(function () {
  const triggers = document.querySelectorAll("[data-news-update-trigger]");
  const popup = document.getElementById("news-update-popup");
  const close = document.getElementById("news-update-popup-close");

  if (!triggers.length || !popup || !close) {
    return;
  }

  function openPopup(event) {
    event.preventDefault();
    popup.classList.add("is-open");
    popup.setAttribute("aria-hidden", "false");
  }

  function closePopup() {
    popup.classList.remove("is-open");
    popup.setAttribute("aria-hidden", "true");
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", openPopup);
  });

  close.addEventListener("click", closePopup);

  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      closePopup();
    }
  });
})();
