valorDeCompra = prompt("Digite aqui o seu valor de compra:");

if (valorDeCompra > 100) {
    alert("Parabéns, você recebeu 10% de desconto!");
} else if (valorDeCompra <= 100 && valorDeCompra > 0) {
    alert("Desconto apenas para compras acima de R$100.");
} else{
    alert("Valor inválido. Por favor, insira um valor positivo.");
}