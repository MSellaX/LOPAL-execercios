let numUm = parseInt(prompt("Insira um número!"));
//variavel para representar o número que vai ser checado se é positivo, negativo ou invalido

if (isNaN(numUm)) {
//comando para ler o que o cliente digitou e ver se hã letras digitadas
    alert("Erro, você digitou um número invalido");
//mensagem caso tenha alguma letra digitada pelo cliente
} else {

    if (numUm > 0) {
    //comando usado para saber se o numero é positivo
        alert("Seu número é positivo.");
        //mensagem case ele for positivo
    } else

        if (numUm < 0) {
        //comando usado para saber se o número é negativo

            alert("Seu numero é negativo")
//mensagem dada caso ele for negativo
        } else {
            alert("Seu número é zero")
//mensagem dada caso o número for igual a zero
        }



}
