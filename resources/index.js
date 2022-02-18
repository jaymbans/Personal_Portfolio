// Navbar animations
const mouse = document.getElementById('homepage-arrow');
const items = document.querySelectorAll('.timeline-items .timeline-item');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);




// Function for typing



(function typeTitleOut() {
  const texts = ['Developer', 'Problem Solver', 'Learner'];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('#typer').textContent = letter;
    if (letter.length === currentText.length) {
      count++
      index = 0
    }
    setTimeout(type, 150);
  })()
})()
