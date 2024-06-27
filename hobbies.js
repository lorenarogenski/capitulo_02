let hobbies = [];

console.log("Insira um hobbie: \n");
    process.stdin.on("data", function (data) {
        let hobby = data.toString().toLowerCase().trim();

        if(hobby === "sair") {
            console.log("Aqui estão os seus hobbies: \n");
            hobbies.forEach(function(hobby,index) {
                console.log((index + 1) + ", " + hobby);
            });
            process.exit();

        } else {
            hobbies.push(hobby);
            console.log("Hobbie adicionado! Digite outro ou 'sair' para concluir: \n");
        }
        
    });