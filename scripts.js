
  const grid = document.querySelector('.education-grid');
  const cards = grid.querySelectorAll('.education-card');

  if (cards.length % 2 === 0) {
    grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
  } else {
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
  }

