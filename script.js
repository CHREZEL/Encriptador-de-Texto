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

    for ( var i = 0; i < mensaje.length; i++){
        if (mensaje [i] == "a") {
            textofinal = textofinal + "ai"
        }
        else if (mensaje [i] == "e") {
            textofinal = textofinal + "enter"
        }
        else if (mensaje [i] == "i") {
            textofinal = textofinal + "imes"
        }
        else if (mensaje [i] == "o") {
            textofinal = textofinal + "ober"
        }
        else if (mensaje [i] == "u") {
            textofinal = textofinal + "ufat"
        }
        else {
            textofinal = textofinal + mensaje[i]
        }
    }
    return textofinal;
}

function desencriptartexto(mensaje){
    let textofinal ="";
    
    for ( var i = 0; i < mensaje.length; i++){
        if (mensaje[i] == "a") {
            textofinal = textofinal + "a"
            i = i + 1;       
        }
        else if (mensaje[i] == "e") {
            textofinal = textofinal + "e"            
            i = i + 4;
        }
        else if (mensaje[i] == "i") {
            textofinal = textofinal + "i"
            i = i + 3;
        }
        else if (mensaje[i] == "o") {
            textofinal = textofinal + "o"
            i = i + 3;
        }
        else if (mensaje[i] == "u") {
            textofinal = textofinal + "u"
            i = i + 3;
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