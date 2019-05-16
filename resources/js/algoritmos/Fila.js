var Fila = function () {
	var Prox = NULL;
	var Pont = NULL;


	var Enfileira = function(Q, s)
	{
		if(Q.Pont == NULL)
		{
			Q.Pont = s;
			return;
		}
		else
		{
			var aux = Q;
			while (aux.Prox != NULL)
			{
				aux = aux.Prox;
			}
			novo = Fila();
			novo.Pont = s;
			novo.Prox = NULL;
			aux.Prox = novo;
			

		}
	}

	var Desenfileira = function (Q)
	{
		if(Q.Pont != NULL)
		{
			aux = Q;
			Q = aux.Prox;
			return aux.Pont;
		}
		
		else return NULL;
	}

}