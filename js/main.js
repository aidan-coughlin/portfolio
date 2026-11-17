// Small progressive enhancements. The site works fully without this file.

// Keep the footer year current.
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Phones and tablets have no hover, so play each card's little illustration
// once the card scrolls into view instead.
const noHover = window.matchMedia("(hover: none)").matches;
if (noHover && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-active", entry.intersectionRatio > 0.6);
      });
    },
    { threshold: [0, 0.6, 1] }
  );
  document.querySelectorAll(".card").forEach((card) => observer.observe(card));
}
