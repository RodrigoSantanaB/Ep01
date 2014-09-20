//Declarada...
window.onload = function()
{
	//Declarada...
    var ale=ale();
    var oportunidades=oportunidades();

	var nomDiv = function(id)
	{
		return document.getElementById(id);
	}
	nomDiv("btnjuega").addEventListener("click", function(e)
	{
		var pcc = jugar();

	});
	function ale()
	{
		var j = Math.floor((Math.random() * 100) + 1);
		console.log(j);
		return j;
	}
		function oportunidades()
	{
		var i = 10;
		console.log(i);
		return i;
	}
	//Expresada...
	function jugar()
	{
		
		var num = Number(nomDiv("num").value);


		if (num>100 || num <1){
			txt = "El numero que digito no es correcto, digite un numero de 1 a 100";
			nomDiv("resultado").innerHTML = txt;
			
		}
		else{
		if (num==ale){
			txt = "Has Acertado";
			nomDiv("resultado").innerHTML = txt;
			nomDiv("imagenPrueba").src = "imagenes/fa.gif";
			document.getElementById('x').pause();
			document.getElementById('a').play();
			oportunidades--;
			nomDiv("oportunidades").innerHTML="Oportunidades: " +oportunidades;
		}
				else{
		if (num>(ale-5)&&num<(ale+5)){
			txt = "Estas demasiado caliente ";
			nomDiv("resultado").innerHTML = txt;
			nomDiv("imagenPrueba").src = "imagenes/img_5.gif";
			document.getElementById('x').pause();
			document.getElementById('a').play();
			oportunidades--;
			nomDiv("oportunidades").innerHTML="Oportunidades: " +oportunidades;
		}
		else{
		if (num>(ale-15)&&num<(ale+15)){
			txt = "Estas caliente ";
			nomDiv("resultado").innerHTML = txt;
			nomDiv("imagenPrueba").src = "imagenes/img_4.gif";
			document.getElementById('x').pause();
			document.getElementById('b').play();
			oportunidades--;
			nomDiv("oportunidades").innerHTML="Oportunidades: " +oportunidades;
		}
		else{
		if (num>(ale-30)&&num<(ale+30)){
			txt = "Estas tibio";
			nomDiv("resultado").innerHTML = txt;
			nomDiv("imagenPrueba").src = "imagenes/img_3.gif";
			document.getElementById('x').pause();
			document.getElementById('a').play();
			oportunidades--;
			nomDiv("oportunidades").innerHTML="Oportunidades: " +oportunidades;
		}
		else{
		if (num>(ale-50)&&num<(ale+50)){
			txt = "Estas frio ";
			nomDiv("resultado").innerHTML = txt;
			nomDiv("imagenPrueba").src = "imagenes/img_2.gif";
			document.getElementById('x').pause();
			document.getElementById('a').play();
			oportunidades--;
			nomDiv("oportunidades").innerHTML="Oportunidades: " +oportunidades;
		}
		else{
		if (num>(ale-100)&&num<(ale+100)){
			txt = "Estas demasiado frio ";
			nomDiv("resultado").innerHTML = txt;
			nomDiv("imagenPrueba").src = "imagenes/img_1.gif";
			document.getElementById('x').pause();
			document.getElementById('a').play();
			oportunidades--;
			nomDiv("oportunidades").innerHTML="Oportunidades: " + oportunidades;
		}
		}
		}
		}
		}
		}
		}
		if(oportunidades==0){
			txt = "Has perdido";
			nomDiv("resultado").innerHTML = txt;
			nomDiv("imagenPrueba").src = "imagenes/p.gif";
			document.getElementById('x').pause();
			document.getElementById('c').play();
			window.onload();
			nomDiv("oportunidades").innerHTML="Oportunidades: 10";
		}
		document.getElementById('x').play();
		return num;
		
	}

	
	
}