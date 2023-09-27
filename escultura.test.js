const { calcularNumeroDeVezesLaserLigado } = require("./escultura");
const { describe, expect, it } = require("@jest/globals");

describe("conjunto de testes", () => {
  it("calcula o número de vezes que o laser é ligado", () => {
    const alturaBloco = 5;
    const comprimentoBloco = 8;
    const alturasFinais = [1, 2, 3, 2, 0, 3, 4, 5];

    let vezesLaserLigado = calcularNumeroDeVezesLaserLigado(
      alturaBloco,
      comprimentoBloco,
      alturasFinais
    );

    expect(vezesLaserLigado).toBe(7);
  });

  it("calcula o número de vezes que o laser é ligado", () => {
    const alturaBloco = 3;
    const comprimentoBloco = 3;
    const alturasFinais = [1, 0, 2];

    let vezesLaserLigado = calcularNumeroDeVezesLaserLigado(
      alturaBloco,
      comprimentoBloco,
      alturasFinais
    );

    expect(vezesLaserLigado).toBe(3);
  });

  it("calcula o número de vezes que o laser é ligado", () => {
    const alturaBloco = 4;
    const comprimentoBloco = 3;
    const alturasFinais = [4, 4, 1];

    let vezesLaserLigado = calcularNumeroDeVezesLaserLigado(
      alturaBloco,
      comprimentoBloco,
      alturasFinais
    );

    expect(vezesLaserLigado).toBe(3);
  });
});
