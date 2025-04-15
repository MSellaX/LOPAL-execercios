let valCompra = parseFloat(prompt("qual o valor da sua compra"));
const desconto = (valCompra * 0.1)
let valFinal = valCompra - desconto


if (isNaN(valCompra)) {
    alert("Esse numero nao é valido");
}

    if(valCompra >= 100){
        alert("Boa, você atingiu o valor necessario para usar o desconto de 10%");
        alert("Bom como você atingiu o valor para usar nosso desconto, com isso a sua compra foi de " +valCompra+ " para " +valFinal );
   
    }else{
        alert("deseja mais alguma coisa.");
    }
    