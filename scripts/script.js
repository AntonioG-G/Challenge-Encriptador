function encrypting(){
    let text = document.getElementById("user-text").value;

    var encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    
    let result = document.getElementById("resultText");
    result.textContent = encryptedText;

    return encryptedText;
}

function decrypting(){

    let text = document.getElementById("user-text").value;
 
    var encryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    
     let result = document.getElementById("resultText");
    result.textContent = encryptedText;

    return encryptedText;

}

function copying(){

    let text = document.getElementById("resultText").textContent;
    console.log(text);
    navigator.clipboard.writeText(text)
    .then(() => alert("Texto copiado al portapapeles"))
    .catch(err => alert("Error al copiar el texto: ",err));
     
}

/* function reading(){

} */