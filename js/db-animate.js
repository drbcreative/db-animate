/*!
 * db-animate.css -http://dannyburns.me
 * Version 1.0
 * Licenced under MIT license  - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2019 Danny Burns
 */

//Page element animatin
function aniMate(element) {
  // Assign El
  const el = document.querySelectorAll(element);

  // Event Listener
  window.addEventListener("scroll", function() {
    el.forEach(elem => {
      if (elem.getBoundingClientRect().top < window.innerHeight / 2) {
        elem.classList.add("animate");
      }
    });
  });
}
aniMate(".fade-in");
aniMate(".fade-in-left");
aniMate(".fade-in-right");
aniMate(".scale-down");
