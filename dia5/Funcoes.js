var p1 = {

  name: "Paulo",
  kill: 0,
  assist: 0,
  death: 0,
  points: 0
}

var p2 = {

  name: "Rafa",
  kill: 0,
  assist: 0,
  death: 0,
  points: 0
}

var p3 = {

  name: "Gui",
  kill: 0,
  assist: 0,
  death: 0,
  points: 0
}

var jogadores = [p1, p2, p3];

var elementoTabela = document.getElementById('tabelaJogadores');
exibirNaTela();
function exibirNaTela(){
  var resultados = '';
  for(var i = 0; i < jogadores.length; i++){
    resultados += `
      <tr>
        <td>${jogadores[i].name}</td>
        <td>${jogadores[i].kill}</td>
        <td>${jogadores[i].assist}</td>
        <td>${jogadores[i].death}</td>
        <td>${jogadores[i].points}</td>
        <td><button onClick="adicionarAbate(${i})">Abate</button></td>
        <td><button onClick="adicionarAssistencia(${i})">Assistência</button></td>
        <td><button onClick="adicionarMorte(${i})">Morte</button></td>
      </tr>
    `;
  }
  elementoTabela.innerHTML = resultados;
}

function adicionarAbate(jogador){

  jogadores[jogador].kill++;
  jogadores[jogador].points = jogadores[jogador].points + 3;
  exibirNaTela();
}

function adicionarAssistencia(jogador){

  jogadores[jogador].assist++;
  jogadores[jogador].points++;
  exibirNaTela();
}

function adicionarMorte(jogador){

  jogadores[jogador].death++;
  if(jogadores[jogador].points > 0){

    jogadores[jogador].points--;
  }
  exibirNaTela();
}