var listaJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

function adicionarJogador() {
    var nomeJogador = document.getElementById("nomeJogador").value;

    // Limpa o valor do input
    document.getElementById("nomeJogador").value = "";

    // Cria o objeto jogador e adiciona à lista
    var jogador = {
        nome: nomeJogador,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    };

    listaJogadores.push(jogador);

    // Atualiza a exibição na tela
    exibirNaTela();
}

function exibirNaTela() {
    elementoTabela.innerHTML = "";
    for (var i = 0; i < listaJogadores.length; i++) {
        elementoTabela.innerHTML += `
        <tr>
        <td>${listaJogadores[i].nome}</td>
        <td>${listaJogadores[i].vitorias}</td>
        <td>${listaJogadores[i].empates}</td>
        <td>${listaJogadores[i].derrotas}</td>
        <td>${listaJogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>
        `;
    }
}

function adicionarVitoria(i) {
    var jogador = listaJogadores[i];
    jogador.vitorias++;
    jogador.pontos += 3;
    exibirNaTela();
}

function adicionarEmpate(i) {
    var jogador = listaJogadores[i];
    jogador.empates++;
    jogador.pontos++;
    exibirNaTela();
}

function adicionarDerrota(i) {
    var jogador = listaJogadores[i];
    jogador.derrotas++;
    exibirNaTela();
}