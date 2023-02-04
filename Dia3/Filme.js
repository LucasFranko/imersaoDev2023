var listaFilmes = ['https://melhoresfilmesdahistoriaemumano.files.wordpress.com/2015/09/pc.jpg', 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d4/Pirates_of_the_Caribbean_2.jpg/250px-Pirates_of_the_Caribbean_2.jpg', 'https://br.web.img3.acsta.net/pictures/210/176/21017697_20130704202238456.jpg', 'https://m.media-amazon.com/images/I/91FIMaQlveL._AC_SL1500_.jpg', 'https://br.web.img3.acsta.net/pictures/17/03/02/16/02/262397.jpg'];
var nomeFilme = ['Piratas do Caribe: A Maldição do Pérola Negra', 'Piratas do Caribe: O Baú da Morte', 'Piratas do Caribe: No Fim do Mundo', 'Piratas do Caribe - Navegando em Águas Misteriosas', 'Piratas do Caribe: A Vingança de Salazar'];
var i = 0;

while (i < listaFilmes.length) {
    document.write('<img src=' + listaFilmes[i] + '>');
    document.write('<p>' + nomeFilme[i] + '</p>');
    i++;
}