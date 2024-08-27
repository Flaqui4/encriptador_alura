var munaco = document.querySelector(".carcel_de_muneco");
var contenedor = document.querySelector(".caja_de_parrafo");
var resultado = document.querySelector(".the_resultado");
var boton_Encriptar = document.querySelector(".encriptados");
var boton_Desencriptar = document.querySelector(".desencriptados");

boton_Encriptar.onclick = encriptar;
boton_Desencriptar.onclick = desencriptar;

function encriptar() {
    var caja_de_texto = recuperar_Texto();
    
    if (verificarMayusculasYAcentos(caja_de_texto)) {
        resultado.textContent = "No se permiten las mayúsculas, acentos y símbolos.";
        return; 
    }

    ocultador();
    resultado.textContent = encriptarTexto(caja_de_texto);
}

function desencriptar() {
    ocultador();
    var caja_de_texto = recuperar_Texto();
    resultado.textContent = desencriptar_Texto(caja_de_texto);    
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var texto_Final = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            texto_Final = texto_Final + "ai";
        } else if (texto[i] == "o") {
            texto_Final = texto_Final + "ober";
        } else if (texto[i] == "u") {
            texto_Final = texto_Final + "ufat";
        } else if (texto[i] == "e") {
            texto_Final = texto_Final + "enter";
        } else if (texto[i] == "i") {
            texto_Final = texto_Final + "imes";
        } else {
            texto_Final = texto_Final + texto[i];
        }
    }
    return texto_Final;
}

var boton_Borrar = document.querySelector(".borrar");
boton_Borrar.onclick = borrarTexto;

function borrarTexto() {
    var caja_de_texto = document.querySelector(".caja_de_texto");
    caja_de_texto.value = "";  
    resultado.textContent = ""; 
    munaco.classList.remove("ocultar"); 
    contenedor.classList.remove("ocultar");
}


function verificarMayusculasYAcentos(texto) {

    return /[A-ZÁÉÍÓÚÜÑáéíóúüñ]/.test(texto) || /[^a-z\s]/.test(texto);
}

function recuperar_Texto() {
    var caja_de_texto = document.querySelector(".caja_de_texto");
    return caja_de_texto.value;
}

function ocultador() {
    munaco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function desencriptar_Texto(mensaje) {
    var texto = mensaje;
    var texto_Final = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            texto_Final = texto_Final + "a";
            i = i + 1;
        } else if (texto[i] == "o") {
            texto_Final = texto_Final + "o";
            i = i + 3;
        } else if (texto[i] == "u") {
            texto_Final = texto_Final + "u";
            i = i + 3;
        } else if (texto[i] == "e") {
            texto_Final = texto_Final + "e";
            i = i + 4;
        } else if (texto[i] == "i") {
            texto_Final = texto_Final + "i";
            i = i + 3;
        } else {
            texto_Final = texto_Final + texto[i];
        }
    }

    return texto_Final;
}

const boton_copiar = document.querySelector(".copiador"); 
boton_copiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".the_resultado").textContent;
    navigator.clipboard.writeText(contenido); 
});
