var umAnoLuzEmMetros = 9.461e+15;
var anosLuzAteSiriusA = 8.611;
var metrosAteSiriusA = anosLuzAteSiriusA * umAnoLuzEmMetros;
var metrosAteSiriusAEmNotacaoCientifica = metrosAteSiriusA.toExponential();
alert('A distância entre a Terra e Sirius A é de ' + metrosAteSiriusAEmNotacaoCientifica + ' metros.');