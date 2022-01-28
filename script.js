
function encriptar() {
    var mensaje = document.getElementById("input-texto").value;

    if (mensaje == "" || !verificarAcentos(mensaje)) {
        alert("Debes ingresar un texto para poder encriptarlo sin acentos");
        document.getElementById("input-texto").focus();
    } else {
        mensaje = mensaje.toLowerCase();

        var reemplazo1 = mensaje.replaceAll("e", "enter");
        var reemplazo2 = reemplazo1.replaceAll("i", "imes");
        var reemplazo3 = reemplazo2.replaceAll("a", "ai");
        var reemplazo4 = reemplazo3.replaceAll("u", "ufat");
        var reemplazo5 = reemplazo4.replaceAll("o", "ober");
    
        document.getElementById("msg").value = reemplazo5;
    }
    
}

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

function desencriptar() {
    var mensaje = document.getElementById("input-texto").value;

    if (mensaje == "" || !verificarAcentos(mensaje)) {
        alert("Debes ingresar un texto para poder encriptarlo sin acentos");
        document.getElementById("input-texto").focus();
    } else {
        mensaje = mensaje.toLowerCase();

        var reemplazo1 = mensaje.replaceAll("enter", "e");
        var reemplazo2 = reemplazo1.replaceAll("imes", "i");
        var reemplazo3 = reemplazo2.replaceAll("ai", "a");
        var reemplazo4 = reemplazo3.replaceAll("ufat", "u");
        var reemplazo5 = reemplazo4.replaceAll("ober", "o");
    
        document.getElementById("msg").value = reemplazo5;
    }
    
}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function verificarAcentos(mensaje) {
    if (/^[a-z]+$/i.test(mensaje)) {
        return true;
    } else { 
        return false;
    }
}

function copiarTexto() {
    var mensaje = document.getElementById("msg").value;

    if (mensaje == "") {
        alert("Debes tener un texto primero");
        document.getElementById("msg").focus();
    } else {
        navigator.clipboard.writeText(
            mensaje
        );
    }
}