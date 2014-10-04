window.onload = function()
{

    inicio();
}

function inicio()
{
    /*
    Tamaño/tomaño del sol = %
    */
    var velObjetos = 1;
    function movimiento(path, obj, vel)
    {
        //console.log("Vel de: "  + obj + " es: " + vel);
        var pathLength = path.getTotalLength();
        var tween = new TWEEN.Tween({ length: 0  })
        .to({ length: pathLength }, vel)
        .onUpdate(function()
        {
            var point = path.getPointAtLength(this.length);
            obj.style.webkitTransform = 'translate('+ point.x + 'px,'+ point.y +'px)';
        }).repeat(999999999).start();
        animate = function()
        {
            requestAnimationFrame(animate);
            TWEEN.update();
            //console.log("Ingresa");
        }
        animate();
    }
    var tamReal = false;
    var creaPlanetas = function(objeto, planeta)
    {
        //console.log(planeta.nombre);
        var tamanoPlaneta = planeta.tamano;
        //console.debug(objeto);
        if(tamReal)
        {
            //console.log("Ingresa");
            tamanoPlaneta = Math.round(elSol.tamano * (planeta.porcentaje / 100));
            //console.log(planeta.nombre + " = " + tamanoPlaneta);
        }
        objeto.style.width = tamanoPlaneta + "px";
        objeto.style.height = tamanoPlaneta + "px";
        objeto.style.backgroundImage = "url('lunas/"+planeta.imagen+"')";
        objeto.style.backgroundSize = tamanoPlaneta + "px " + tamanoPlaneta + "px";
        var margen = (Math.round(tamanoPlaneta / 2)) * -1;
        objeto.style.marginTop = margen + "px";
        objeto.style.marginLeft = margen + "px";
        //objeto.style.borderRadius = "50%";
        objeto.style.position = "absolute";
        //console.debug(objeto);
        //console.log("basePlaneta " + planeta.imagen);
        //objeto.style.border = "thick solid #FFF";
        //objeto.setAttribute("class", "basePlaneta " + planeta.imagen);
    }
    planetas = [
                {nombre: "Mercurio", 
                 imagen: "io.png",
                 porcentaje: 0.14,
                 tamano: 3.6, 
                 tacontante : 3.6
                },
                {nombre: "Tierra", 
                 imagen: "europa.png",
                 porcentaje: 0.12,
                 tamano: 3.1, 
                 tacontante : 3.1
                },
                {nombre: "Júpiter", 
                 imagen: "ganimed.png",
                 porcentaje: 0.21,
                 tamano: 5.3, 
                 tacontante : 5.3
                },
                {nombre: "Neptuno", 
                 imagen: "calisto.png",
                 porcentaje: 0.17,
                 tamano: 4.3, 
                 tacontante : 4.3
                }];
    var objSol = nom_div('sol_svg');
    var elSol = {
        tamano: objSol.height.baseVal.value, 
        x : objSol.x.baseVal.value, 
        y : objSol.y.baseVal.value
    };
    var objeto = "";
    var ruta = "";
    var velInicia = 10000;

    nom_div("opcion_1").addEventListener('change', function(event)
    {
        for(var i = 1; i < planetas.length +1; i++)
        {
            planetas[i -1].tamano = planetas[i - 1].tacontante * Number(this.value);
            creaPlanetas(nom_div("objeto_" + i), planetas[i - 1]);
        }
        //console.log(this.value);
    });

    nom_div("opcion_2").addEventListener('change', function(event)
    {
        var velInicia = 10000 / Number(this.value);
        for(var i = 1; i < planetas.length + 1; i++)
        {
            movimiento(nom_div("ruta_" + i), nom_div("objeto_" + i), velInicia);
            velInicia += (8000 / Number(this.value));
        }
    });
    



    for(var i = 1; i <= planetas.length; i++)
    {
        objeto = nom_div("objeto_" + i);
        ruta = nom_div("ruta_" + i);
        //console.debug(ruta);
        creaPlanetas(objeto, planetas[i - 1]);
        movimiento(ruta, objeto, velInicia);
        velInicia += 4000;
    }
    //console.log("Hola mundo");
    function nom_div(div)
    {
        return document.getElementById(div);
    }
}