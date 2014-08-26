window.onload = function()
{
	nom_div("ejecutain").addEventListener('click', function(event)
	{
		var objAnima1 = nom_div("imagen");
		objAnima1.setAttribute("class", "animated " + "bounceInUp");
		var objAnima2 = nom_div("imagen1");
		objAnima2.setAttribute("class", "animated " + "wobble");
		var objAnima3 = nom_div("imagen2");
		objAnima3.setAttribute("class", "animated " + "swing");
		var objAnima4 = nom_div("imagen3");
		objAnima4.setAttribute("class", "animated " + "tada");
		var objAnima5 = nom_div("imagen4");
		objAnima5.setAttribute("class", "animated " + "fadeInLeftBig");
		var objAnima6 = nom_div("imagen5");
		objAnima6.setAttribute("class", "animated " + "flipInY");
		var objAnima7 = nom_div("imagen6");
		objAnima7.setAttribute("class", "animated " + "lightSpeedIn");
		var objAnima8 = nom_div("imagen7");
		objAnima8.setAttribute("class", "animated " + "rotateInDownRight");
		var objAnima9 = nom_div("imagen8");
		objAnima9.setAttribute("class", "animated " + "rollIn");
		var objAnima10 = nom_div("imagen9");
		objAnima10.setAttribute("class", "animated " + "slideInRight");
		
	});
	nom_div("ejecutaout").addEventListener('click', function(event)
		{
			var objAnima1 = nom_div("imagen");
			objAnima1.setAttribute("class", "animated " + "slideOutRight");
			var objAnima2 = nom_div("imagen1");
			objAnima2.setAttribute("class", "animated " + "slideOutLeft");
			var objAnima3 = nom_div("imagen2");
			objAnima3.setAttribute("class", "animated " + "rotateOutUpLeft");
			var objAnima4 = nom_div("imagen3");
			objAnima4.setAttribute("class", "animated " + "rotateOutDownRight");
			var objAnima5 = nom_div("imagen4");
			objAnima5.setAttribute("class", "animated " + "lightSpeedOut");
			var objAnima6 = nom_div("imagen5");
			objAnima6.setAttribute("class", "animated " + "flipOutX");
			var objAnima7 = nom_div("imagen6");
			objAnima7.setAttribute("class", "animated " + "fadeOutUp");
			var objAnima8 = nom_div("imagen7");
			objAnima8.setAttribute("class", "animated " + "bounceOutRight");
			var objAnima9 = nom_div("imagen8");
			objAnima9.setAttribute("class", "animated " + "rollOut");
			var objAnima10 = nom_div("imagen9");
			objAnima10.setAttribute("class", "animated " + "rotateOutUpRight");
			
		});
	function nom_div(div)
	{
		return document.getElementById(div);
	}

}