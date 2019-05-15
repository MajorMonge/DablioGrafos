var Grafo = require('./Grafo');

var BuscaProfundidade = function (Grafo) {

	var VisitaVertice = function (Grafo, Raiz, tempo) {
		Raiz.cor = 'C'
		tempo = tempo + 1;
		Raiz.inicio = tempo;

		Raiz.adjacencias.forEach(adjacencia => {
			Grafo.vertices.forEach(vertice => {
				if (adjacencia.destino == vertice.id) {
					if (vertice.cor == 'B')
						VisitaVertice(Grafo, vertice, tempo);
				}
			});
		})

		Raiz.cor = 'P';
		tempo = tempo + 1;
		Raiz.fim = tempo;
	}

	Grafo.vertices.forEach(vertice => {
		vertice.cor = 'B';
	});

	Grafo.vertices.forEach(vertice => {
		if (vertice.cor == 'B') {
			VisitaVertice(Grafo, vertice, 0);
		}
	});
	
	var ImprimeBusca = function (Grafo) {
		//Para cada Vertice em Grafo
		{
			console.log("O vertice " + Grafo.vertices[u].id + "foi primeiramente alcançado na " + Grafo.vertices[u].inicio + "ª etapa e finalizado na " + Grafo.vertices[u].fim + "ª etapa.");
		}
	}

	ImprimeBusca(Grafo);


	var BuscaCaminhoProfundidade = function (Grafo, Raiz, destino) {
		//Para cada Vertice em Grafo
		{
			Grafo.vertices[u].cor = 'B';
		}
		var aux = VisitaVerticeCaminho(Grafo, Raiz, 0, destino, 0);
		if (!aux) console.log("Não foi possível alcançar o destino");
	}

	var VisitaVerticeCaminho = function (Grafo, Raiz, tempo, destino, aux) {
		Grafo.vertices[Raiz].cor = 'C';
		tempo = tempo + 1;
		Grafo.vertices[Raiz].inicio = tempo;
		console.log("Entrando no vértice " + Grafo.vertices[Raiz].id + " na " + tempo + "ª etapa;");
		if (Grafo.vertices[Raiz].id.equals(destino)) {
			console.log("Destino alcançado!");
			aux = 1;
		}

		//(<Para cada Vertice Adj> && !aux)
		{
			if (Grafo.vertices[v].cor = 'B')
				aux = (VisitaVertice(Grafo, v, tempo, destino, aux));
		}
		Grafo.vertices[Raiz].cor = 'P';
		tempo = tempo + 1;
		Grafo.vertices[Raiz].fim = tempo;
		console.log("Saindo do vértice " + Grafo.vertices[Raiz].id + " na " + tempo + "ª etapa;");
		return (aux);
	}

}

module.exports = BuscaProfundidade;