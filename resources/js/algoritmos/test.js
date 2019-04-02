var Grafo = require('./Grafo');
var Aresta = require('./Aresta');

var ArestaAuxiliar = new Aresta("1", "a", 0)

var GrafoAuxiliar = new Grafo([1,3,4], [ArestaAuxiliar] ,1, 1, 1);
console.log(GrafoAuxiliar);