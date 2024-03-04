//variable
let userText = document.querySelector("#userText");
let omg = userText.value.toLowerCase();
let outText = document.querySelector("#outText");
let copyButton = document.querySelector("#copy_button")

let matrixCode = [ //index vs position
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
];

//Encrypt button
function btnEncrypt(){
    let omg = userText.value.toLowerCase();
    let text1 = encrypt(omg);
    outText.innerHTML = text1;
    details();
    return;
}

//Encrypt function
function encrypt(encryptedText){
    let indices = [];
    let sample = encryptedText.split("");
    for (let i = 0; i < matrixCode.length; i++) {
        if(encryptedText.includes(matrixCode[i][0])){
            let index = sample.indexOf(matrixCode[i][0]);
            while (index !=-1) {
                indices.push(index);
                index = sample.indexOf(matrixCode[i][0], index + 1);
            }
            for (let j = 0; j < indices.length; j++) {
                sample[indices[j]] = matrixCode[i][1];
            }
        }
        indices=[];
    }
    return sample.join('');
}

//Decrypt button
function btnDecrypt(){
    let omg = userText.value.toLowerCase();
    let text2 = decrypt(omg);
    outText.innerHTML = text2;
    details();
    return;
}

//Decrypt function
function decrypt(decryptedText){
    for (let k = matrixCode.length -1; k >= 0; k--) {
        if (decryptedText.includes(matrixCode[k][1])) {
            decryptedText = decryptedText.replaceAll(
                (matrixCode[k][1]),
                (matrixCode[k][0])
            )
        }
    }
    return decryptedText;
}

//Copy function
function copy() {
    let text3 = outText.innerHTML;
    navigator.clipboard.writeText(text3);
    copyButton.textContent = "\u2705 Copied!!";
}

//Details function
function details() {
    let pe = document.querySelector("#output_message");
    if (userText.value === "") {
        pe.removeAttribute("hidden");
        copyButton.setAttribute("hidden", "true");
    } else {
        pe.setAttribute("hidden", "true");
        copyButton.removeAttribute("hidden");
    }
    userText.value = "";
    copyButton.textContent = "Copy!";
    return;
}






// ACA TAMOS HACIENDO PRUEBAS PEEE

/*
let example = "hola pe"; 
let xd = example.split("");
console.log(xd);


function manoperro(encryptedText){
    let indices = [];

    for (let i = 0; i < matrixCode.length; i++) {
        if(encryptedText.includes(matrixCode[i][0])){
            let indexx = xd.indexOf(matrixCode[i][0]);
            while (indexx !=-1) {
                indices.push(indexx);
                indexx = xd.indexOf(matrixCode[i][0], indexx + 1);
                console.log(indices);
            }
            for (let j = 0; j < indices.length; j++) {
                xd[indices[j]] = matrixCode[i][1];
            }
            console.log(xd);
        }
        indices=[];
    }
    return encryptedText;
}

let final = manoperro(xd);
console.log(final);
console.log(final.join(""));
let finall = final.join('');
*/




/* ESTE DE ACÁ FUNCIONA ENCRIPTAR

let example = "james"; 
let amount = example.match(/[aeiou]/gi).length;

let xd = example.split("");
console.log(xd);

function manoperro(encryptedText){
     for (let i = 0; i < xd.length; i++) {
            
        if (xd[i] === "a") { 
            xd[i] = "ai";
        } if (xd[i] === "e") { 
            xd[i] = "enter";
        } if (xd[i] === "i") { 
            xd[i] = "imes";
        } if (xd[i] === "o") { 
            xd[i] = "ober";
        } if (xd[i] === "u") { 
            xd[i] = "ufat";
        }
     }
    return encryptedText;  
}

let final = manoperro(xd);
console.log(final);
console.log(final.join(""));
*/


//ESTE DE ACÁ FUNCIONA ENCRIPTAR (PERO SOLO CON LA MATRIZ DE DATOS ORDENADA)
/*
let example = "que pex pe mano como estais"; 

function manoperro(encryptedText){
    for (let i = 0; i < matrixCode.length; i++) {
        if(example.includes(matrixCode[i][0])) {
            encryptedText = encryptedText.replaceAll(
                (matrixCode[i][0]),
                (matrixCode[i][1])
        );
        }
    }
    return encryptedText;
}

let final = manoperro(example);
console.log(final);
*/

// HASTA ACÁ SON LAS PRUEBAS PEEEE

