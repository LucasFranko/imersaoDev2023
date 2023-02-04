var listaFilmes = ['https://melhoresfilmesdahistoriaemumano.files.wordpress.com/2015/09/pc.jpg', 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d4/Pirates_of_the_Caribbean_2.jpg/250px-Pirates_of_the_Caribbean_2.jpg', 'https://br.web.img3.acsta.net/pictures/210/176/21017697_20130704202238456.jpg', 'https://m.media-amazon.com/images/I/91FIMaQlveL._AC_SL1500_.jpg', 'https://br.web.img3.acsta.net/pictures/17/03/02/16/02/262397.jpg'];
var links = ['https://www.youtube.com/watch?v=2PBYQDDkubM', 'https://www.youtube.com/watch?v=IY4P1I_0zL4', 'https://www.youtube.com/watch?v=pDxUtOJqtbY', 'https://www.youtube.com/watch?v=haenBC_xPnc', 'https://www.youtube.com/watch?v=WzW2og2PQg4'];
var i = 0;

while (i < listaFilmes.length) {
  document.write('<a href=' + links[i] + '>' + '<img src=' + listaFilmes[i] + '>' + '</a>');
  i++;
}

function adicionarFilme(){
  var filmeFavorito = document.getElementById('filme').value;
  var elementoListaFilmes = document.getElementById('listaFilmes');
    
  if (filmeFavorito.endsWith('.jpg' || '.png' || '.gif' || '.jpeg' || '.svg')){
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src="' + filmeFavorito + '">';
  } else {
    alert("Imagem inválida");
  }
  document.getElementById('filme').value = "";
}