const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	asunto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	mensaje: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const campos = {
	nombre: false,
	correo: false,
	asunto: false,
    mensaje: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, "nombre");
            break;
		case "correo":
			validarCampo(expresiones.correo, e.target, "correo");
		    break;
		case "asunto":
			validarCampo(expresiones.asunto, e.target, "asunto");
		    break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, "mensaje");
		    break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove("contacto__form__caja-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.add("contacto__form__caja-correcto");
		document.querySelector(`#grupo__${campo} .for__input-error`).classList.remove(".form__input-error-activo");
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add("contacto__form__caja-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.remove("contacto__form__caja-correcto");
		document.querySelector(`#grupo__${campo} .for__input-error`).classList.add(".form__input-error-activo");
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});
