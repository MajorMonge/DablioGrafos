var Grafo = require('./Grafo');

var GrafoAuxiliar = new Grafo();

GrafoAuxiliar.tipo = 0;

GrafoAuxiliar.matriz = 
    [
        [{ADJ: 0, COR: 'C'}, {ADJ: 1, COR: 'C'}, {ADJ: 0, COR: 'C'}],
        [{ADJ: 0, COR: 'C'}, {ADJ: 0, COR: 'C'}, {ADJ: 1, COR: 'C'}],   
        [{ADJ: 1, COR: 'C'}, {ADJ: 0, COR: 'C'}, {ADJ: 0, COR: 'C'}]         
    ];

GrafoAuxiliar.lista = [[{ID: 2, PROX: null}, {COR: 0}], [{ID: 3, PROX: null}, {COR: 0}], [{ID: 1, PROX: null}, {COR: 0}]]

//console.log(GrafoAuxiliar);
//console.log(GrafoAuxiliar.matriz[1][2])
//console.log(GrafoAuxiliar.lista[2]);
