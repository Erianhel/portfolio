var nombre = document.getElementById('nombre');
var mail = document.getElementById('email');

function validarDatos () {
	nombre.addEventListener("input", validarNombre);
	mail.addEventListener("input", validarMail);
	validarNombre();
	validarMail();
}

function validarNombre() {
	if(nombre.value=='') {
		nombre.setCustomValidity('Ingrese su nombre');
	}else {
		nombre.setCustomValidity('');
	}
}

function validarMail() {
	if(mail.value=='') {
		mail.setCustomValidity('Ingrese su correo electrónico');
	}else {
		mail.setCustomValidity('');
	}
}

window.addEventListener("load", validarDatos);