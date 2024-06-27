let valores = [];

process.stdout.write("Digite o primeiro número: ");
process.stdin.once("data", function (data) {
    let valorUm = Number(data.toString().trim());
    valores.push(valorUm);

    process.stdout.write("Digite o segundo número: ");
    process.stdin.once("data", function (data) {
        let valorDois = Number(data.toString().trim());
        valores.push(valorDois);

        let soma = (valores[0] + valores[1]);
        let multiplicacao = (valores[0] * valores[1]);

        if(valorUm === valorDois) {
            console.log("O resultado é: " + soma + ". O cálculo é uma soma.")
        } else{
            console.log("O resultado é: " + multiplicacao + ". O cálculo é uma multiplicação. ")
        }

        let ParouImpar = data.toString().trim().toLowerCase();
        if (ParouImpar )
        process.exit();
    });
});