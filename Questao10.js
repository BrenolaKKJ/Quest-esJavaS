let numero = parseInt(prompt("Digite um número inteiro positivo: "));
let fatorial = 1;

for (let i = numero; i >= 1; i--) {
    fatorial = fatorial * i;
}

alert("O fatorial de " + numero + " é " + fatorial);
