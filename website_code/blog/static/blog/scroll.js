let lastScrollPosition = 0;
let ticking = false;
const header = document.querySelector("header");

function updateHeaderOpacity(scrollPos, header) {
  const windowHeight = window.innerHeight/2;
  const headerHeight = windowHeight/2;
  const scrollDistance = Math.max(0, scrollPos - windowHeight + headerHeight);
  const scrollRatio = Math.min(1, scrollDistance / headerHeight);
  header.style.opacity = 1 - scrollRatio;
}

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateHeaderOpacity(currentScrollPosition, header);
      ticking = false;
    });
  }

//  ticking = true;
});
