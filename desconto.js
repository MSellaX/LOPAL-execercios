let valCompra = parseFloat(prompt("qual o valor da sua compra"));
//variavel dada para armazenar o valor da compra do cliente
const desconto = (valCompra * 0.1)
//const criada para calcular o valor do desconto
let valFinal = valCompra - desconto
//variavel usada para calcular o valor final da compra do cliente

if (isNaN(valCompra)) {
    alert("Esse numero nao é valido");
//comando usado para analizar o que digitado pelo cliente e se há alguma letra digitada
}

    if(valCompra >= 100){
        alert("Boa, você atingiu o valor necessario para usar o desconto de 10%");
        alert("Bom como você atingiu o valor para usar nosso desconto, com isso a sua compra foi de " +valCompra+ " para " +valFinal );
    //esse comando vai verificar o que foi digitado e se for maior ou igual a 100 o desconto vai ser aplicado
   
    }else{
        alert("deseja mais alguma coisa.");
    //caso os 100 R$ não forem atingidos o desconto não será aplicado
    }
    