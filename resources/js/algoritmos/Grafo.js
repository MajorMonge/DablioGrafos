function Grafo(tipo) {

    /*ESTRUTURAS
    MATRIZ: 
    [
        COLUUNA 1      COLUNA 2      COLUNA 3
        [{ADJ: , COR:, PES:}, {ADJ: , COR:}, {ADJ: , COR:}, ...], LINHA 1
        [{ADJ: , COR:}, {ADJ: , COR:}, {ADJ: , COR:}, ...], LINHA 2
        [{ADJ: , COR:}, {ADJ: , COR:}, {ADJ: , COR:}, ...], LINHA 3
        [{ADJ: , COR:}, {ADJ: , COR:}, {ADJ: , COR:}, ...]  LINHA 4

        ADJ(0 OU 1)
        CADA BLOCO DA MATRIZ É UMA ADJACENCIA
    ]
    
    LISTA
    [
        [{ADJ: , COR:, PES:}, {ADJ: , COR:, PES:}, {ADJ: , COR:, PES:}]
    ]
    */

    this.vertices = 0; //Quantidade
    this.tipo = tipo;
    this.matriz = [];
    this.lista = [{}];
};