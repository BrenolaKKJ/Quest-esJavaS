let soma = 0;
let numero;

do {
    numero = Number(prompt("Digite um número (0 para parar):"));
    soma = soma + numero;
} while (numero != 0);

alert("A soma total é: " + soma);
