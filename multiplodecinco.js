let multiplo = parseInt(prompt("digite um valor aleatório"));

if(isNaN(multiplo)){
    alert("Esse número não é valido")

}else{
    if(multiplo % 5 == 0){
    alert ("Este número é múltiplo de 5!")

} else {
    alert ("Este número não é múltiplo de 5!")

}
}
