// script.js
function mostrarMensagem() {
    alert("Arquivo JS externo funcionando!");
}

// =============================
// IDENTIFICA O TEMA DA PÁGINA
// =============================

const titulo = document.title;

// =============================
// TELA DE CARREGAMENTO
// =============================

const loader = document.createElement("div");

loader.id = "loader";

loader.style.position = "fixed";
loader.style.top = "0";
loader.style.left = "0";
loader.style.width = "100vw";
loader.style.height = "100vh";
loader.style.minWidth = "100vw";
loader.style.minHeight = "100vh";

loader.style.backgroundColor = "#000";

loader.style.display = "flex";
loader.style.flexDirection = "column";
loader.style.justifyContent = "center";
loader.style.alignItems = "center";

loader.style.color = "white";
loader.style.fontSize = "2rem";
loader.style.textAlign = "center";

loader.style.zIndex = "999999";

document.body.appendChild(loader);

// =============================
// ESTILOS VIA JS
// =============================

const estilo = document.createElement("style");

estilo.innerHTML = `
.efeito{
    opacity:0;
    transform:translateY(40px);
    transition:1s;
}

.visivel{
    opacity:1;
    transform:translateY(0);
}

.particula{
    position:fixed;
    pointer-events:none;
    z-index:100;
}
`;

document.head.appendChild(estilo);

// =============================
// DUNGEONS & DRAGONS
// =============================

if(titulo.includes("Dungeons")){

    loader.innerHTML = `
        <h1>⚔️ DUNGEONS & DRAGONS ⚔️</h1>
        <p>🎲 Rolando os dados...</p>
    `;

    const intervaloDados = setInterval(() => {

        const dado = document.createElement("div");

        dado.classList.add("particula");

        dado.innerHTML = "🎲";

        dado.style.left = Math.random() * 100 + "vw";
        dado.style.top = "-50px";
        dado.style.fontSize = "35px";

        document.body.appendChild(dado);

        let pos = -50;

        const queda = setInterval(() => {

            pos += 5;

            dado.style.top = pos + "px";

            if(pos > window.innerHeight){

                clearInterval(queda);
                dado.remove();

            }

        },20);

    },300);

    setTimeout(() => {

        clearInterval(intervaloDados);

    },5000);

}

// =============================
// ORDEM PARANORMAL
// =============================

else if(titulo.includes("Ordem")){

    loader.innerHTML = `
        <h1>☠️ ORDEM PARANORMAL ☠️</h1>
        <p>Conectando ao Outro Lado...</p>
    `;

    const intervaloCaveiras = setInterval(() => {

        const caveira = document.createElement("div");

        caveira.classList.add("particula");

        caveira.innerHTML = "☠";

        caveira.style.color = "#8c00ff";
        caveira.style.fontSize = "35px";

        caveira.style.left =
            Math.random() * 100 + "vw";

        caveira.style.bottom = "-50px";

        document.body.appendChild(caveira);

        let pos = -50;

        const subir = setInterval(() => {

            pos += 4;

            caveira.style.bottom = pos + "px";

            if(pos > window.innerHeight){

                clearInterval(subir);
                caveira.remove();

            }

        },20);

    },400);

    setTimeout(() => {

        clearInterval(intervaloCaveiras);

    },5000);

}

// =============================
// ROMANCE
// =============================

else if(titulo.includes("Lésbicas")){

    loader.innerHTML = `
        <h1>💖 LÉSBICAS ESPADACHINS SEDENTAS 💖</h1>
        <p>Preparando o romance...</p>
    `;

    let coracoesAtivos = true;

    setTimeout(() => {

        coracoesAtivos = false;

    },5000);

    document.addEventListener("mousemove",(e)=>{

        if(!coracoesAtivos) return;

        const coracao = document.createElement("div");

        coracao.classList.add("particula");

        coracao.innerHTML = "❤";

        coracao.style.left = e.clientX + "px";
        coracao.style.top = e.clientY + "px";

        coracao.style.color = "#CE275F";
        coracao.style.fontSize = "25px";

        document.body.appendChild(coracao);

        let pos = e.clientY;

        const subir = setInterval(() => {

            pos -= 3;

            coracao.style.top = pos + "px";

            if(pos < e.clientY - 100){

                clearInterval(subir);
                coracao.remove();

            }

        },20);

    });

}

// =============================
// REMOVE O LOADER
// =============================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.transition = "1s";
        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        },1000);

    },2500);

});

// =============================
// ANIMAÇÃO DAS CAIXAS
// =============================

const caixas = document.querySelectorAll("body > div");

caixas.forEach(caixa => {

    caixa.classList.add("efeito");

});

function revelar(){

    caixas.forEach(caixa => {

        const topo =
            caixa.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){

            caixa.classList.add("visivel");

        }

    });

}

window.addEventListener("scroll", revelar);

revelar();

// =============================
// EFEITO DOS BOTÕES
// =============================

document.querySelectorAll("button").forEach(botao => {

    botao.addEventListener("mouseenter", () => {

        botao.style.transition = "0.3s";
        botao.style.transform = "scale(1.1)";

    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "scale(1)";

    });

});