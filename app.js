let textoEncriptadoGlobal = '';

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptarTexto() {

    let textoUsuario = document.getElementById('valorUsuario').value;
    let textoEncriptado = '';

    console.log(typeof textoUsuario );
    for (let i = 0; i < textoUsuario.length; i++) {
        textoEncriptado += String.fromCharCode(textoUsuario.charCodeAt(i) + 1);
    }

    textoEncriptadoGlobal = textoEncriptado;
    asignarTextoElemento('#contenedor_encriptado', textoEncriptado);

    console.log(textoEncriptado);
    //console.log(typeof(textoEncriptado));
    return textoEncriptado;
}

function desencriptarTexto() {
    let textoDesencriptado = '';

    for (let i = 0; i < textoEncriptadoGlobal.length; i++) {
        textoDesencriptado += String.fromCharCode(textoEncriptadoGlobal.charCodeAt(i) - 1);
    }
    asignarTextoElemento('#contenedor_encriptado', textoDesencriptado);
    return textoDesencriptado;
}


