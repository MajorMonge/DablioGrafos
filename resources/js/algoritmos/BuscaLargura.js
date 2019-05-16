var Fila = function () {
	var Prox = null;
	var Pont = null;

	function Enfileira(s) {
		console.log("Pont: " + this.Pont)
		if (this.Pont == null) {
			this.Pont = s;
			console.log("Pont s: " + this.Pont)	
		}
		else {
			var aux = this;
			while (aux.Prox != null) {
				aux = aux.Prox;
			}
			novo = new Fila();
			novo.Pont = s;
			novo.Prox = null;
			aux.Prox = novo;
		}
	}

	function Atualiza(){
		if(this.Prox == null){
			this.Pont = null
			return this
		}
		return this.Prox;
	}

	function Desenfileira() {
		if (this.Pont != null) {
			aux = this.Pont;
			
			return aux;

		}
		else return null;
	}

	return {
		Prox, Pont, Enfileira, Desenfileira, Atualiza
	}

}

var Q = new Fila();

function BuscaLargura(Grafo, Raiz) {

	Grafo.forEach(vertice => {
		vertice.COR = 'B';
		vertice.distancia = 0; //Maior valor de int;
		vertice.PAI = null;
	});

	Grafo[Raiz].COR = 'C';
	Grafo[Raiz].distancia = 0;
	Grafo[Raiz].PAI = null;

	Q.Enfileira(Grafo[Raiz]);
	console.log("OPONT" + Q.Pont)

	while (Q.Pont != null) {
		aux = Q.Desenfileira();
		Q = Q.Atualiza();
		
		console.log(aux)
		aux.forEach(adjacencia => {
			if (Grafo[adjacencia.ID].COR == 'B') {
				Grafo[adjacencia.ID].COR = 'C';
				Grafo[adjacencia.ID].distancia = aux.distancia + 1;
				console.log("A1: " + Grafo[adjacencia.ID].distancia + " A2 " + aux.distancia)
				Grafo[adjacencia.ID].PAI = aux;
				Q.Enfileira(Grafo[adjacencia.ID]);
			}
			aux.COR = 'P';
		});
	}

	var retorno = [];

	Grafo.forEach((vertice, index) => {
		console.log("O vertice " + index + " possui " + vertice.distancia + " de distancia para a Raiz");
		retorno.push(vertice.distancia);
	});

	return retorno;
}
