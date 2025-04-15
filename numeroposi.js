let numUm = parseInt(prompt("Insira um número!"));
//variavel para representar o número que vai ser checado se é positivo, negativo ou invalido

if (isNaN(numUm)) {

    alert("Erro, você digitou um número invalido");

} else {

    if (numUm > 0) {

        alert("Seu número é positivo.");
    } else

        if (numUm < 0) {

            alert("Seu numero é negativo")

        } else {
            alert("Seu número é zero")

        }



}
