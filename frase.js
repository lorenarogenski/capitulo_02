process.stdout.write("Digite uma frase: \n");
process.stdin.once("data", function (data) {
    let frase = data.toString().toLowerCase().trim();
    let comprimento = (frase.length);

    if (comprimento % 2 === 0) {
        console.log("O número de caracteres é: " + comprimento + ", par. \n");
    } else {
        console.log("O número de caracteres é: " + comprimento + ", ímpar. \n")
    }
    process.exit();
    
});