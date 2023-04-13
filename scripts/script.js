var text = document.getElementById("user-text").value;

function encrypting(){

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

var fileInput = document.getElementById("txt-file");


fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        var reader = new FileReader();
        
        reader.addEventListener("load", (event) => {
            console.log(reader.result);
        console.log("reader");
            text.value = event.target.result;
            console.log(text.textContent)
        });
        reader.readAsText(fileInput.files[0]);
    }
});

/* function reading(reader,texto){
    console.log("caca")
    reader.addEventListener("load", (event) => {
        const areaText = event.target.result;
        texto.textContent = areaText;
        
      });
      reader.readAsText(fileInput.files[0]);
      
} */