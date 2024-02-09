
function encryptMessage() {
    // Obtener el valor del input.
    let messageToEncrypt = String(document.getElementById("textbox").value).toLowerCase();  
    let messageEncrypted = "";

    console.log(messageToEncrypt.length)

    // Iterar sobre la cadena de texto y
    for (i = 0; i < messageToEncrypt.length; i++) {
        if(messageToEncrypt[i] == "e") {
            messageEncrypted += "enter";
        } else if (messageToEncrypt[i] ==  "i") {
            messageEncrypted += "imes";
        } else if (messageToEncrypt[i] == "a") {
            messageEncrypted += "ai";
        } else if (messageToEncrypt[i] == "o") {
            messageEncrypted += "ober";
        } else if (messageToEncrypt[i] == "u" ) {
            messageEncrypted += "ufat";
        } else {
            messageEncrypted += messageToEncrypt[i];
        }
    }
    // Imprimir el mensaje encriptado.
    alert(messageEncrypted);
}   

function decryptMessage() {

}