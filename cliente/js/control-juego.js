var url="http://127.0.0.1:1338/";

//funciones que modifican el index


function inicio(){
	mostrarCabecera();
}

function borrarControl(){
	$('#control').remove();
}

function mostrarCabecera(){
	$('#cabecera').remove();
	$('#control').append('<div id="cabecera"><h2>Panel de Control</h2><input type="text" id="nombre" placeholder="Introduce tu nombre">');
	botonNombre();
}



function botonNombre(){
	$('#cabecera').append('<button type="button" id="nombreBtn" class="btn btn-primary">Medium</button>');
	$('#nombreBtn').on('click',function(){
		$('#nombreBtn').remove();
		crearUsuario($('#nombre').val());
		
	});
}



//funciones de comunicacion

function crearUsuario(nomb){
	if (nomb==""){
		nomb="jugador";
	}
	$.getJSON(url+'crearUsuario/'+nombre,function(datos){
		//datos tiene la respuestas del servidor
		//mostrar datos del usuario
	});

	//mostrar datos
}