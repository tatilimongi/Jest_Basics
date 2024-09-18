const {
  somar,
  obterNumeros,
  validarNumeroPositivo,
  subtrair,
  multiplicar,
  divisao,
  ehPar,
  contarPalavras,
} = require("../src/funcoes");

describe("Teste do módulo funções", () => {
  test("Deveria somar dois números corretamente", () => {
    expect(somar(2, 3)).toBe(5);
  });
  
  test("Deveria retornar um array com os números esperados", () => {
    expect(obterNumeros()).toEqual([1, 2, 3, 4, 5]);
    expect(obterNumeros()).toHaveLength(5);
  });
  
  test("Deveria conter o número 3 no array", () => {
    expect(obterNumeros()).toContain(3);
  });
  
  test("Deveria lançar um erro ao validar o número negativo", () => {
    expect(() =>
      validarNumeroPositivo(-1).toThrow("Número não pode ser negativo"),
    );
  });
  
  test("Deveria retornar undefined para variáveis não definidas", () => {
    let naoDefinida;
    expect(naoDefinida).toBeUndefined();
  });
  
  test("Deveria retornar null para valores nulos", () => {
    const valorNulo = null;
    expect(valorNulo).toBeNull();
  });
  
  test("Deveria avaliar valores booleanos corretamente", () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });
  
  test("Deveria comparar valores numéricos corretamente", () => {
    let array = obterNumeros();
    expect(array[4]).toBeGreaterThan(2);
    expect(array[0]).toBeLessThan(array[4]);
  });
  
  test("Deveria fazer a subtração de dois números corretamente", () => {
    expect(subtrair(5, 3)).toBe(2);
  });
  
  test("Deveria fazer a multiplicação de dois números corretamente", () => {
    expect(multiplicar(5, 5)).toBe(25);
  });
  
  test("Deveria fazer a divisão de dois números corretamente", () => {
    expect(divisao(10, 2)).toBe(5);
  });
  
  test("Deveria lançar um erro ao tentar dividir um número por zero", () => {
    expect(() => divisao(5, 0).toThrow("Não é possível dividir por zero"));
  });
  
  test("Deveria verificar se um número é par", () => {
    expect(ehPar(10)).toBeTruthy();
    expect(ehPar(5)).toBeFalsy();
  });
  
  test("Deveria retornar o número de palavras em uma string", () => {
    expect(contarPalavras("Meu nome é Tatiana")).toHaveLength(4);
  });
});
