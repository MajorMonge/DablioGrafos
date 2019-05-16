
var Prim = function (Grafo, r) {
	var X = [];
	Grafo.forEach((vertice, index)=> {
		vertice.chave = 2147483647; //Maior valor de int;
		vertice.pai = null;
		vertice.Q = 1;
		vertice.ID = index;
	});
	
	Grafo[r].chave = 0;
	let VQ = Grafo.slice();
	console.log(VQ)
	function Minimo(VQ) {
		var valor = 2147483647; var aux; var i = 0; var iremocao;
		VQ.forEach(vertice  => {
			if (vertice.chave < valor) {
				
				aux = vertice;
				iremocao = i;
				valor = vertice.chave;
			}
			i++;
		})
		VQ.splice(iremocao, 1);
		
		return aux;
	}

	while (VQ != null) {
		var u = Minimo(VQ);
		if(u == undefined) break; 
		u.Q = 0;
		X.push(u);
		u.forEach(adj => {
			if (Grafo[adj.ID].Q == 1 && adj.PES < Grafo[adj.ID].chave) 
			{
				Grafo[adj.ID].chave = adj.PES;
				Grafo[adj.ID].pai = u.ID;
			}
		});
	}
	console.log("X")
	console.log(X)
	
	mModal.children("p").append(`A Raiz é ${X[0].ID}<br>`);
	X.forEach((element, index) => {
		if(index > 0){
			mModal.children("p").append(`O elemento ${element.ID} tem como pai ${element.pai}. <br>`);
		}
	});
	return (X);

}