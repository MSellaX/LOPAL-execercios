let idade = parseInt(prompt("digite sua idade."));
//variavel para armazenar a idade do cliente
if(isNaN(idade)) {
    alert("Erro, isso não é um número válido");
    // comando para ler o que o cliente digitou e ver se há letras digitadas
}else{
    if(idade>=18) {
        alert("você é maior de idade");
    //comando que indica se você tem mais de 18 anos, no caso a mensagem acima é para a pessoa que tem mais de 18 anos
    }else{
        if(idade<18);{
            alert("você é menor de idade") 
        //Mensagem caso o client ter menos de 18 anos
        }       
    }
}