
function mostrarInformacion(textoIngresado){
    
    var informacion = document.querySelector('#der');
    informacion.innerHTML = `
    <textarea name="cajaRespuesta" id="cajaRespuesta" cols="18" rows="18" readonly="readonly">${textoIngresado}</textarea>
    <button type="button" id="copiar" onclick="copiar()">Copiar</button>
    `;
}

function validarInformacion(textoIngresado){

    if(textoIngresado == ""){
        alert("Ingresa un texto primero");
        return false;
    }
    else{
        vocalesTilde = ["á", "é", "í", "ó", "ú"];
        for(let i=0; i < textoIngresado.length;i++){
            for(let j=0; j< vocalesTilde.length;j++){
                if(textoIngresado[i] == vocalesTilde[j]){
                    alert("No se permiten acentos en tu texto");
                    return false;
                }
            }
        }

    }
    return true;
}

function encriptar(){

    let textoIngresado = document.getElementById("cajaTexto").value.toLowerCase();

    if(validarInformacion(textoIngresado)){
        let nuevaPalabra = ["enter", "ober", "imes", "ai", "ufat"];
        let vocalesReg = [/e/img, /o/img, /i/img, /a/img, /u/img];
    
        for(let i=0; i<nuevaPalabra.length;i++){
            textoIngresado = textoIngresado.replace(vocalesReg[i],nuevaPalabra[i]);
        }
        mostrarInformacion(textoIngresado);
    }
    
    
}

function desencriptar(){

    let textoIngresado = document.getElementById("cajaTexto").value.toLowerCase();

    if(validarInformacion(textoIngresado)){
        let nuevaPalabraReg = [/enter/img, /ober/img, /imes/img, /ai/img, /ufat/img];
        let vocales = ["e", "o", "i", "a", "u"];

        for(let i=0; i<nuevaPalabraReg.length;i++){
            textoIngresado = textoIngresado.replace(nuevaPalabraReg[i],vocales[i]);
        }
        mostrarInformacion(textoIngresado);
    }

}

function copiar(){
    var textoRespuesta = document.getElementById("cajaRespuesta");
    textoRespuesta.select();
    document.execCommand('copy');
}