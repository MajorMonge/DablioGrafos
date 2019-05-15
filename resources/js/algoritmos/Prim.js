var Grafo = require('./Grafo');

var Prim = function (Grafo, w, r, NV)
{
	var X = []; var aux = 1;
	Grafo.vertices.forEach(vertice => {
		vertices.chave = 2147483647; //Maior valor de int;
		vertices.pai = NULL;
		vertices.Q = 1;
	});
	Grafo.vertices[r].chave = 0;
	var VQ[] = Grafo.vertices;
	while (VQ != NULL)
	{
		u = Minimo(VQ);
		X.splice(aux, 0, u);
		u.forEach(adj => {
			if( vertices.Q == 1 && w(u,v) < chave[v]) //CITOPERSON, w(u,v) é a distancia de u a v;
		{
			vertices.chave = w(u,v);
			vertice.pai = u;
		}
	});
	}
	return(X);
	
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

	}
	VQ.splice(iremocao, 1);
	aux.Q = 0;
	return aux;
}