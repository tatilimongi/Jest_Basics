function somar(x, y) {
  return x + y;
}

function obterNumeros() {
  return [1, 2, 3, 4, 5];
}

function validarNumeroPositivo(num) {
  if (num < 0) {
    throw new Error("Número não pode ser nevativo");
  }
  return true;
}

function subtrair(x, y) {
  return x - y;
}

function multiplicar(x, y) {
  return x * y;
}

function divisao(x, y) {
  if (y === 0) {
    throw new Error("Não é possível dividir por zero");
  }
  return x / y;
}

function ehPar(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

function contarPalavras(frase) {
  return frase.split(" ");
}

module.exports = {
  somar,
  obterNumeros,
  validarNumeroPositivo,
  subtrair,
  multiplicar,
  divisao,
  ehPar,
  contarPalavras,
};