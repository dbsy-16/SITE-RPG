function criarCoracao() {
    let c = document.createElement("div");
    c.className = "coracao";
    c.innerHTML = "❤️";
    c.style.left = Math.random() * 95 + "vw";
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 4000);
}

let chuva = setInterval(criarCoracao, 300);

setTimeout(() => clearInterval(chuva), 5000);