let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação (+, -, *, /):");

let resultado;

switch (operacao) {
    case "+":
        resultado = n1 + n2;
        break;
    case "-":
        resultado = n1 - n2;
        break;
    case "*":
        resultado = n1 * n2;
        break;
    case "/":
        resultado = n1 / n2;
        break;
    default:
        alert("Operação inválida");
}

alert("Resultado: " + resultado);
