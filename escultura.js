function calcularNumeroDeVezesLaserLigado(altura, comprimento, alturasFinais) {
  let laserLigado = 0;
  let alturaAtual = altura;

  for (let i = 0; i < comprimento; i++) {
    const alturaFinal = alturasFinais[i];

    const diferencaAltura = alturaAtual - alturaFinal;

    if (diferencaAltura > 0) {
      laserLigado += diferencaAltura;
    }

    alturaAtual = alturaFinal;
  }

  return laserLigado;
}

/*
const vezesLaserLigado = calcularNumeroDeVezesLaserLigado(
  alturaBloco,
  comprimentoBloco,
  alturasFinais
);

console.log(
  `O laser deve ser ligado ${vezesLaserLigado} vezes para esculpir o bloco.`
);
*/

module.exports = { calcularNumeroDeVezesLaserLigado };
