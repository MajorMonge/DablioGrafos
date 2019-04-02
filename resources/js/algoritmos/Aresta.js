var Aresta = function (origem, destino, peso) {

    this.origem = origem;
    this.destino = destino;
    this.peso = peso;

    var comparaPesoAresta = function (outraAresta) {
        if (this.peso < outraAresta.peso)
            return -1;
        if (this.peso > outraAresta.peso)
            return 1;

        return 0;
    }
    var comparaIgualdadeAresta = function (outraAresta) {
        if (this.origem.equals(outraAresta.origem) && this.destino.equals(outraAresta.destino)) {
            return true;
        } else {
            return false;
        }
    }

    return {
        origem,
        destino,
        peso
    }

};

module.exports = Aresta;