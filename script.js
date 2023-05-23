const botonencriptar = document.querySelector(".boton_encriptar");
const botondesencriptar = document.querySelector(".boton_desencriptar");
const botoncopiar = document.querySelector(".boton_copiar");
const cajatexto = document.querySelector(".caja_texto");
const munheco = document.querySelector(".contenedor_munheco");
const parrafo = document.querySelector(".contenedor_parrafo");
const resultado = document.querySelector(".texto_resultado");

botonencriptar.addEventListener("click", encriptar);
botondesencriptar.addEventListener("click", desencriptar);
botoncopiar.addEventListener("click", copiar);

function encriptar() {
    ocultar();
    resultado.textContent = encriptartexto(recuperartexto());
}

function desencriptar() {
    ocultar();
    resultado.textContent = desencriptartexto(recuperartexto());
}

function recuperartexto() {
    return cajatexto.value
}

function ocultar() {
    munheco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptartexto(mensaje){
    let textofinal ="";

    for ( i = 0; i < mensaje.length; i++){
        if (mensaje [i] == "a") {
            textofinal = textofinal + "ai"
            break;
        }
        else if (mensaje [i] == "e") {
            textofinal = textofinal + "enter"
            break;
        }
        else if (mensaje [i] == "i") {
            textofinal = textofinal + "imes"
            break;
        }
        else if (mensaje [i] == "u") {
            textofinal = textofinal + "ufat"
            break;
        }
        else {
            textofinal = textofinal + mensaje[i]
        }
    }
    return textofinal;
}

function desencriptartexto(mensaje){
    let textofinal ="";
    
    for ( i = 0; i < mensaje.length; i++){
        if (mensaje[i] == "a") {
            textofinal = textofinal + "a"
            break;
        }
        else if (mensaje[i] == "e") {
            textofinal = textofinal + "e"
            break;
        }
        else if (mensaje[i] == "i") {
            textofinal = textofinal + "i"
            break;
        }
        else if (mensaje[i] == "u") {
            textofinal = textofinal + "u"
            break;
        }
        else {
            textofinal = textofinal + mensaje[i]
        }
    }
    return textofinal;
}

function copiar() {
    const contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Si se pudo");
}