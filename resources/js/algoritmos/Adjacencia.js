var Adjacencia = function (destino, peso) {

    this.destino = destino;
    this.peso = peso;

    var comparaPesoAresta = function (outraAresta) {
        if (this.peso < outraAresta.peso)
            return -1;
        if (this.peso > outraAresta.peso)
            return 1;

        return 0;
    }

    return {
        comparaPesoAresta
    }

};

module.exports = Adjacencia;