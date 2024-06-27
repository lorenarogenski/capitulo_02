let listaNumeros = [];
let listaPares = [];
let listaImpares = [];
let maiorNumeroPar = 0;
let maiorNumeroImpar = 0;

console.log("Insira 15 números: ");

process.stdin.on("data", function(data) {
    let numeros = Number(data.toString().trim());

    if(listaNumeros.length > 14) {
        console.log("Aqui estão os números digitados por 'for': ");
        for(let i = 0; listaNumeros.length > i; i++) {
            if(listaNumeros[i] % 2 == 0) {
                listaPares.push(listaNumeros[i]);
            } else {
                listaImpares.push(listaNumeros[i]);
            }
        }
        console.log("Número pares: ");
        listaPares.forEach(function(numero) {
            console.log(numero);
        });

        process.exit();
    } else {
        listaImpares.forEach(function(numero) {
            console.log(numero)
        })

}

});