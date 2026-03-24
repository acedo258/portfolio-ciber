// TYPING EFFECT
const phrases = [
  "Ingeniera informática...",
  "Buscando primeras prácticas...",
];

let i = 0, j = 0, current = [], deleting = false;
const typingEl = document.getElementById("typing");

function type() {
  if (i >= phrases.length) i = 0;
  const full = phrases[i];

  if (!deleting) {
    current.push(full[j]);
    typingEl.textContent = current.join('');
    j++;
    if (j === full.length) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    current.pop();
    typingEl.textContent = current.join('');
    if (current.length === 0) {
      deleting = false;
      i++;
      j = 0;
    }
  }
  setTimeout(type, deleting ? 50 : 100);
}
type();

// SCROLL ANIMATION
const sections = document.querySelectorAll("section");
function reveal() {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const winH = window.innerHeight;
    if (top < winH - 100) sec.classList.add("visible");
  });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);



