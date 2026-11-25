window.addEventListener("load", function () {
    alert("Bem-vindo(a) ao universo de Lésbicas Espadachins Sedentas!");
});


const titulos = document.querySelectorAll("h2");

titulos.forEach(function (titulo) {
    titulo.addEventListener("mouseover", function () {
        titulo.style.color = "purple";
    });

    titulo.addEventListener("mouseout", function () {
        titulo.style.color = "";
    });
});


const imagens = document.querySelectorAll("img");

imagens.forEach(function (imagem) {
    imagem.style.transition = "transform 0.3s";

    imagem.addEventListener("mouseover", function () {
        imagem.style.transform = "scale(1.05)";
    });

    imagem.addEventListener("mouseout", function () {
        imagem.style.transform = "scale(1)";
    });
});


const botaoFicha = document.querySelector("a[href='ficha3.html']");

botaoFicha.addEventListener("click", function (evento) {
    const resposta = confirm(
        "Você deseja acessar a ficha de personagem de Lésbicas Espadachins Sedentas?"
    );

    if (!resposta) {
        evento.preventDefault();
    }
});


const rodape = document.querySelector("footer p");

rodape.addEventListener("click", function () {
    alert("Obrigado por conhecer nosso projeto de RPG!");
});