const grid = document.querySelector('.projetos-grid');
const dots = document.querySelectorAll('.projetos-indicadores .dot');

if (grid && dots.length) {
  grid.addEventListener('scroll', () => {
    const card = grid.querySelector('.project-card');
    if (!card) return;

    const gap = 16; // 1rem
    const cardWidth = card.offsetWidth + gap;
    const index = Math.round(grid.scrollLeft / cardWidth);

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  });
}
