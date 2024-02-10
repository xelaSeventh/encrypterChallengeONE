
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
    document.querySelector(".not-found-message").innerHTML = messageEncrypted;
    document.querySelector(".no-message-alert").innerHTML = "Tu mensaje fue encriptado exitosamente.";
    document.querySelector(".img-new").setAttribute("src", "img/secret.png");
    document.getElementById("textbox").value = "";
}   

function decryptMessage() {
    let messageEncrypted = String(document.getElementById("textbox").value).toLowerCase();
    let messageDecrypted = messageEncrypted.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    document.querySelector(".not-found-message").innerHTML = messageDecrypted;
    document.querySelector(".no-message-alert").innerHTML = "Tu mensaje fue desencriptado exitosamente.";
    document.querySelector(".img-new").setAttribute("src", "img/email.png");
    document.getElementById("textbox").value = "";
}