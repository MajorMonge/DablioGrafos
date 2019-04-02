var Grafo = function (vertices, arestas, vAdj, conexo, temPeso) {
    this.vertices = [];
    this.arestas = [];
    
    this.vertices.push(vertices);
    this.arestas.push(arestas);
    this.vAdj = vAdj;
    this.conexo = conexo;
    this.temPeso = temPeso;

    return {
        vertices, arestas, vAdj, conexo, temPeso
    }

};

module.exports = Grafo;