let positivos = 0;

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt("Digite um número:"));

    if (numero > 0) {
        positivos++;
    }
}

alert("Quantidade de números positivos: " + positivos);
