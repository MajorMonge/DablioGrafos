var Dijkstra = function (Grafo, s) {
	Grafo.forEach((vertice, index )=> {
		vertice.DISTANCIA = 214748364; //Maior valor de int;
		vertice.PAI = null;
		vertice.ID = index;
	});

	Grafo[s].DISTANCIA = 0;
	
	var S = [];
	let VQ = Grafo.slice();
	console.log(VQ)

	function relaxa(u) {
		/* console.log("g" )
		console.log(Grafo)
		console.log("U" )
		console.log(u) */
		u.forEach((element, index)=> {
			/* console.log("e" )
			console.log(element) */
			if (Grafo[element.ID].DISTANCIA > (u.DISTANCIA + element.PES)) {
				Grafo[element.ID].DISTANCIA = u.DISTANCIA +element.PES;
				Grafo[element.ID].PAI = u.ID;
								
			}
		});
	}

	function Minimo(VQ) {
		var valor = 2147483647; var aux; var i = 0; var iremocao;
		VQ.forEach(vertice => {
			if (vertice.DISTANCIA < valor) {
				aux = vertice;
				iremocao = i;
				valor = vertice.DISTANCIA;
			}
			i++;
		})
		VQ.splice(iremocao, 1);
		return aux;
	}

	
	while (VQ != null) {
		
		var u = Minimo(VQ);
		
		if(u == undefined) break;
		S.push(u);
		
		u.forEach(adj => {
			relaxa(u);
		});
	}

	console.log("S: " + S)
	console.log(S)
	mModal.children("p").append(`A Raiz é ${S[0].ID}<br>`);
	S.forEach((element, index) => {
		if(index > 0){
			mModal.children("p").append(`O elemento ${element.ID} tem como pai ${element.PAI} e distância da raiz ${element.DISTANCIA}. <br>`);
		}
	});
		

	return { Dijkstra, Minimo, relaxa, S }
}