var Vertice  = new function (id) {
    this.id = id;
    this.adjacencias = [];
    this.cor;

    function adicionaAdjacencia(vertice){
        this.adjacencias.push(vertice);
    }

    function removeAdjacencia(vertice){
       this.adjacencias.forEach(element, index => {
           if(element == vertice)
                adjacencias.splice(index, 1)
       });
    }

    return{
        Vertice
    }
};

module.exports = Vertice;