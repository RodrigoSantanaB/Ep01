window.onload = function()
{
	inicia();
};

function inicia()
{
	//alert("Cargó...");
	//tecla abajo...
	var direccion = 0;
	var txtDirecciones = ["Izquierda", "Arriba", "Derecha", "Abajo"];
	var direcciones = ["left", "top", "right", "front"];
	nom_div("personaje").setAttribute("class", "basepersonaje top_1");
	nom_div("personaje").style.left = "0px"; //x 530
	nom_div("personaje").style.top = "0px";//y 330
	nom_div("dinero").style.left = "210px"; //x 530
	nom_div("dinero").style.top = "210px";//y 330
    nom_div("dinero1").style.left = "730px"; //x 530
	nom_div("dinero1").style.top = "100px";//y 330
	nom_div("dinero2").style.left = "600px"; //x 530
	nom_div("dinero2").style.top = "600px";//y 330
	nom_div("hongo").style.left = "100px"; //x 530
	nom_div("hongo").style.top = "100px";//y 330
	nom_div("hongo1").style.left = "180px"; //x 530
	nom_div("hongo1").style.top = "310px";//y 330
	nom_div("hongo2").style.left = "600px"; //x 530
	nom_div("hongo2").style.top = "450px";//y 330
	nom_div("hongo3").style.left = "900px"; //x 530
	nom_div("hongo3").style.top = "400px";//y 330
	nom_div("hongo4").style.left = "450px"; //x 530
	nom_div("hongo4").style.top = "200px";//y 330
	var caminar = false;
	var paso = 1;
	setInterval(function()
	{
		if(caminar)
		{
			nom_div("personaje").setAttribute("class", "basepersonaje " + direcciones[direccion] + "_" + paso);
			paso++;
			if(paso >= 5)
			{
				paso = 1;
			}
			var posX = parseInt(nom_div("personaje").style.left); //x
			var posY = parseInt(nom_div("personaje").style.top); //Y
			//Posición de la llama...
			var posLlamaX = parseInt(nom_div("dinero").style.left); //x
			var posLlamaY = parseInt(nom_div("dinero").style.top); //x
			var posLlamaX1 = parseInt(nom_div("dinero1").style.left); //x
			var posLlamaY1 = parseInt(nom_div("dinero1").style.top); //x
			var posLlamaX2 = parseInt(nom_div("dinero2").style.left); //x
			var posLlamaY2 = parseInt(nom_div("dinero2").style.top); //x
			var hx = parseInt(nom_div("hongo").style.left); //x
			var hy = parseInt(nom_div("hongo").style.top); //x
			var hx1 = parseInt(nom_div("hongo1").style.left); //x
			var hy1 = parseInt(nom_div("hongo1").style.top); //x
			var hx2 = parseInt(nom_div("hongo2").style.left); //x
			var hy2 = parseInt(nom_div("hongo2").style.top); //x
			var hx3 = parseInt(nom_div("hongo3").style.left); //x
			var hy3 = parseInt(nom_div("hongo3").style.top); //x
			var hx4 = parseInt(nom_div("hongo4").style.left); //x
			var hy4 = parseInt(nom_div("hongo4").style.top); //x
			//console.log("El personaje en x es: " + posX + " en Y es: " + posY);
			//console.log("La llama en x es: " + posLlamaX1 + " en Y es: " + posLlamaY1);


			switch(direccion)
			{
				case 0: posX -= 10; break;
				case 1: posY -= 10; break;
				case 2: posX += 10; break;
				case 3: posY += 10; break;
			}
			if((posX >= 0 && posX <= 950) && (posY >= 0 && posY <= 694))
			{
				nom_div("personaje").style.left = posX + "px";
				nom_div("personaje").style.top = posY + "px";
				//Detectar si esta cerca de la llama...
				if((posLlamaX == posX && posLlamaY == posY)||(posLlamaX1  == posX && posLlamaY1 == posY)||(posLlamaX2  == posX && posLlamaY2 == posY))
				{
					document.getElementById('player').play();
				}
				if((hx == posX && hy == posY)||(hx1 == posX && hy1 == posY)||(hx2 == posX && hy2 == posY)||(hx3 == posX && hy3 == posY)||(hx4 == posX && hy4 == posY))
				{
					document.getElementById('d').play();
				}
			}
		}
	}, 100);

	window.onkeydown = function(e)
	{
    	e.preventDefault();
		var code = e.keyCode ? e.keyCode : e.which;
		//37 hasta el 40..
		if(!caminar)
		{
			if(code >= 37 && code <= 40)
			{
				direccion = code - 37;
				caminar = true;
				//console.log("Presionó:" + txtDirecciones[code - 37]);
			}
		}
	}
	//Tecla arriba...
	window.onkeyup = function(e)
	{
		var code = e.keyCode ? e.keyCode : e.which;
		if(caminar)
		{
			if(code >= 37 && code <= 40)
			{			
				direccion = code - 37;
				nom_div("personaje").setAttribute("class", "basepersonaje " + direcciones[direccion] + "_1");
				//console.log("Suelta: " + txtDirecciones[code - 37]);
				caminar = false;

			}
		}
	}
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}