window.onload = function()
{
	var girarX = false;
	function creaCubo(posicion)
	{
		var scene = new THREE.Scene(); 
		var camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 1, 100); //1/1
		var renderer = new THREE.WebGLRenderer( { alpha: true } );
		renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);
		renderer.setClearColor( 0x000000, 0);
		//nom_div("cubo").innerHTL = renderer.domElement;

		//console.log(renderer.domElement);
		document.body.appendChild(renderer.domElement); 
		
		var geometry = new THREE.SphereGeometry(1, 32,32); 
		var material = new THREE.MeshBasicMaterial({color: "blue"});
		
		
		var texture = THREE.ImageUtils.loadTexture( 'Mercurio.jpg' );
		texture.anisotropy = renderer.getMaxAnisotropy();
		
		var material = new THREE.MeshBasicMaterial( { map: texture } );
		
		var cube = new THREE.Mesh(geometry, material);

		//var cubu2 = new THREE.Mesh(new THREE.CubeGeometry(3, 1, 3), new THREE.MeshBasicMaterial({color: "blue"}));

		scene.add(cube);

		//scene.add(cubu2);

		camera.position.z = posicion; 
		var cont = 1;
		var render = function () 
		{				
			cont++;
			console.log(cont);
			requestAnimationFrame(render);
			//if(cont % 5 == 0)
			//{
				//if(girarX)
				//{
					//cube.rotation.x -= 0.1; 	
				//}
				//
				cube.rotation.y += 0.05;
				//cube.rotation.z += 0.1;
				renderer.render(scene, camera); 
			//}
			//console.log(cube.rotation.x);				
		};
		render();

	}
	creaCubo(5);

	nom_div("girax").addEventListener('click', function(event)
    {
       girarX = !girarX;
    });


	function nom_div(div)
	{
		return document.getElementById(div);
	}
}