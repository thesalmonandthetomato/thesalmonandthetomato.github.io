/*!
https://codepen.io/hexagoncircle/pen/gOPMwvd
*/

document.addEventListener("DOMContentLoaded", () => {
  const highlights = document.querySelectorAll(".text-highlight");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  highlights.forEach(el => observer.observe(el));
});
