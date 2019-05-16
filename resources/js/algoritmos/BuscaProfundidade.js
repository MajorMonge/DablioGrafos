var BuscaProfundidade = function (Grafo) {
	var QQR = 0;
	
	Grafo.forEach(vertice => {
		vertice.COR = 'B';
	});

	Grafo.forEach(vertice => {
		if (vertice.COR == 'B') {
			QQR = VisitaVertice(vertice, QQR);
			
		}
	});

	function VisitaVertice(Raiz, tempo) {
		console.log("Printando Raiz")
		console.log(Raiz)
		Raiz.COR = 'C'
		tempo = tempo + 1;
		Raiz.INICIO = tempo;
		
		Raiz.forEach(adjacencia => {
			if (Grafo[adjacencia.ID].COR == 'B') {
				tempo = VisitaVertice(Grafo[adjacencia.ID], tempo);
			}
		})

		Raiz.COR = 'P';
		tempo = tempo + 1;
		Raiz.FIM = tempo;

		return tempo;
	}



	function ImprimeBusca() {
		Grafo.forEach((element, index) => {
			mModal.children("p").append(`O vertice  ${index} foi primeiramente alcançado na ${element.INICIO}ª etapa e finalizado na ${element.FIM}ª etapa. <br>`);
		})
	}

	ImprimeBusca(Grafo);


	function BuscaCaminhoProfundidade(Raiz, destino) {
		//Para cada Vertice em Grafo
		{
			Grafo.vertices[u].COR = 'B';
		}
		var aux = VisitaVerticeCaminho(Grafo, Raiz, 0, destino, 0);
		if (!aux) console.log("Não foi possível alcançar o destino");
	}

	function VisitaVerticeCaminho(Raiz, tempo, destino, aux) {
		Grafo.vertices[Raiz].COR = 'C';
		tempo = tempo + 1;
		Grafo.vertices[Raiz].INICIO = tempo;
		console.log("Entrando no vértice " + Grafo.vertices[Raiz].ID + " na " + tempo + "ª etapa;");
		if (Grafo.vertices[Raiz].ID.equals(destino)) {
			console.log("Destino alcançado!");
			aux = 1;
		}

		//(<Para cada Vertice Adj> && !aux)
		{
			if (Grafo.vertices[v].COR = 'B')
				aux = (VisitaVertice(Grafo, v, tempo, destino, aux));
		}
		Grafo.vertices[Raiz].COR = 'P';
		tempo = tempo + 1;
		Grafo.vertices[Raiz].FIM = tempo;
		console.log("Saindo do vértice " + Grafo.vertices[Raiz].ID + " na " + tempo + "ª etapa;");
		return (aux);
	}

	return { VisitaVertice, VisitaVerticeCaminho, BuscaCaminhoProfundidade, ImprimeBusca }

}