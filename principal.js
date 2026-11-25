const cards = document.querySelectorAll(".card-rpg");

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("aparecer");
    }
  });
}, {
  threshold: 0.25
});

cards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.2}s`;
  observador.observe(card);
});