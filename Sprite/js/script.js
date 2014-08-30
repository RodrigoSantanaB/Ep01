window.onload = function()
{
	//console.log(nom_div("personaje"));
	var estaCaminando = false;
	var pies = 1;
	var pies2 = 14;
	nom_div("personaje").setAttribute("class", "caminar " + "p" + pies);
	function caminaPersonaje()
	{
		if(estaCaminando)
		{
			pies++;
			nom_div("personaje").setAttribute("class", "caminar " + "p" + pies);
			if(pies > 14)
			{
				pies = 1;
			}
			nom_div("personaje2").setAttribute("class", "caminar " + "p" + pies2);
			pies2--;
			if(pies2 < 0)
			{
				pies2 = 14;
			}
		}
	}
	var tiempo = setInterval(caminaPersonaje, 100);
	//Cuando el usuario haga click en el botón...
	
	nom_div("boton").addEventListener('click', function(event)
	{
		//alert("Hola Mundo");
		if(!estaCaminando)
		{
			estaCaminando = true;
			this.value = "DETIENE";
		}
		else
		{
			nom_div("personaje").setAttribute("class", "caminar " + "p0");
			pies = 1;
			estaCaminando = false;
			this.value = "Caminar";
		}
	});

	nom_div("velocidad").addEventListener('change', function(event)
	{
		//console.log(this.value);
		clearInterval(tiempo);
		tiempo = setInterval(caminaPersonaje, this.value);
	});

	



	function nom_div(div)
	{
		return document.getElementById(div);
	}
}