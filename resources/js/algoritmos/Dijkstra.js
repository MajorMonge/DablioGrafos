var Grafo = require('./Grafo');


var Dijkstra = function (G, w, s){
	Grafo.vertices.forEach(vertice => {
		vvertices.distancia = 2147483647; //Maior valor de int;
		vertices.pai = NULL;
	});
	Grafo.vertices[s].distancia = 0;
	var S = [];
	var VQ = Grafo.vertices;
	while(VQ != NULL)
	{
		var u = Minimo(VQ);
		S.splice(aux, 0, u);
		aux++;
		u.forEach(adj => {
			relaxa(u,vertices,w);
		});
	}

	var Minimo = function(VQ)
	{
		var valor = 2147483647; var aux; var i = 0; var iremocao;
		VQ.forEach(vertice => {
			if(VQ.chave < aux)
			{
				aux = VQ.vertices;
				iremocao = i;
			} 
			i++;
		})
		VQ.splice(iremocao, 1);
		aux.Q = 0;
		return aux;
	}

	var relaxa = function(u,v,w)
	{
		if(v.distancia > (u.distancia + w(v,u)))
		{
			v.distancia = u.distancia + w(v,u);
			v.pai = u;
		}
	}
}