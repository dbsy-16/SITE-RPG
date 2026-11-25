const botao = document.getElementById("rolar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const numero = Math.floor(Math.random() * 20) + 1;
  resultado.textContent = "Você rolou: " + numero;
});

const seletorTema = document.getElementById("tema");

function aplicarTema(tema) {
  document.body.classList.remove("noite", "pergaminho");

  if (tema !== "dia") {
    document.body.classList.add(tema);
  }

  seletorTema.value = tema;
  localStorage.setItem("tema", tema);
}

const temaSalvo = localStorage.getItem("tema");
if (temaSalvo) {
  aplicarTema(temaSalvo);
}

seletorTema.addEventListener("change", function () {
  aplicarTema(seletorTema.value);
});

window.addEventListener("load", function () {
  const tela = document.getElementById("carregamento");

  setTimeout(function () {
    tela.style.opacity = "0";

    setTimeout(function () {
      tela.style.display = "none";
    }, 600);
  }, 2000);
});
