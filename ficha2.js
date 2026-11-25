// MENSAGENS MISTERIOSAS //

const mensagensMisteriosas = [
    "Você sente que está sendo observado.",
    "O Outro Lado percebeu sua presença.",
    "Algo respondeu à tua rolagem.",
    "Não deveria ter mexido nisso...",
    "A realidade parece instável.",
    "Por um instante, tudo ficou em silêncio.",
    "Você ouve um sussurro distante.",
    "Algo parece estar fora do lugar.",
    "As sombras se moveram... ou será que foi impressão sua?",
    "De repente, o ambiente parece mais frio.",
    "Você sente que algo está prestes a acontecer.",
    "Uma presença desconhecida acompanha seus passos.",
    "O dado parece ter demorado demais para parar.",
    "Você tem a estranha sensação de déjà-vu.",
    "Um... grito?"
];

function mensagemAleatoria() {

    const indice = Math.floor(
        Math.random() * mensagensMisteriosas.length
    );

    return mensagensMisteriosas[indice];
}


// ROLAGEM DE DADOS - D20 //

function rolarD20() {

    const resultado = Math.floor(Math.random() * 20) + 1;

    const campo = document.getElementById("resultado");

    const mensagem = mensagemAleatoria();

    let resultadoEspecial = "";

    if (resultado === 20) {

        resultadoEspecial = `
            <p class="mensagem-especial">
                ✨ UAU! O Outro Lado favoreceu você... ✨ 
            </p>
        `;

    } else if (resultado === 1) {

        resultadoEspecial = `
            <p class="mensagem-especial">
                👁️ FALHA CRÍTICA! Algo despertou... 👁️
            </p>
        `;

    }

    campo.innerHTML = `
        <h3>🎲 Resultado da Rolagem</h3>

        <h1>${resultado}</h1>

        <p>
            ${resultado === 20
            ? "INCRÍVEL! A SORTE ESTÁ DO SEU LADO. ✨"
            : resultado === 1
                ? "Aparentemente você tem um dedo podre..."
                : "Rolagem realizada!"
        }
        </p>

        ${resultadoEspecial}

        <p class="mensagem-misteriosa">
            "${mensagem}"
        </p>
    `;
}


// RESUMO DO PERSONAGEM //

function mostrarResumo() {

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const classe = document.getElementById("classe").value;
    const patente = document.getElementById("patente").value;
    const elemento = document.getElementById("elemento").value;
    const origem = document.getElementById("origem").value;
    const nex = document.getElementById("nex").value;

    const resumo = document.getElementById("resumo");

    resumo.innerHTML = `
        <h2>Ficha do Personagem</h2>

        <p><strong>Jogador(a):</strong> ${nome || "Não informado"}</p>
        <p><strong>Idade:</strong> ${idade || "Não informada"}</p>
        <p><strong>Classe:</strong> ${classe}</p>
        <p><strong>Patente:</strong> ${patente}</p>
        <p><strong>Elemento:</strong> ${elemento}</p>
        <p><strong>Origem:</strong> ${origem}</p>
        <p><strong>NEX:</strong> ${nex || "Não informado"}</p>
    `;
}


// IDENTIFICAR CAMPOS DAS PERÍCIAS //

function obterIdentificador(campo, indice) {

    const linha = campo.closest("tbody tr");

    // Se o campo estiver dentro da tabela de perícias
    if (linha) {

        const nomePericia = linha.cells[0].textContent.trim();

        const coluna = campo.closest("td");

        const numeroColuna = Array.from(linha.cells).indexOf(coluna);

        // Bônus da perícia
        if (numeroColuna === 2) {
            return pericia_${ nomePericia } _bonus;
        }

        // Treinamento da perícia
        if (numeroColuna === 3) {
            return pericia_${nomePericia}_treino;
        }
    }

    // Identificação dos outros campos
    return campo.id || campo_${ indice };
}


// SALVAR FICHA //

function salvarFicha() {

    const campos = document.querySelectorAll(
        "input, select, td[contenteditable='true']"
    );

    const dados = {};

    campos.forEach((campo, indice) => {

        const identificador = obterIdentificador(campo, indice);

        dados[identificador] = campo.value !== undefined
            ? campo.value
            : campo.innerText;

    });

    localStorage.setItem("fichaOrdem", JSON.stringify(dados));

    alert("Ficha salva com sucesso! 💾");
}


// CARREGAR FICHA SALVA //

function carregarFicha() {

    const dadosSalvos = localStorage.getItem("fichaOrdem");

    if (!dadosSalvos) return;

    const dados = JSON.parse(dadosSalvos);

    const campos = document.querySelectorAll(
        "input, select, td[contenteditable='true']"
    );

    campos.forEach((campo, indice) => {

        const identificador = obterIdentificador(campo, indice);

        if (dados[identificador] !== undefined) {

            if (campo.value !== undefined) {
                campo.value = dados[identificador];
            } else {
                campo.innerText = dados[identificador];
            }

        }

    });
}
