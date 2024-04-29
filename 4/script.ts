const moedasSuportadas = ['BRL', 'USD', 'EUR', 'GBP'] as const;

type MoedasSuportadas = (typeof moedasSuportadas)[number];
type TaxasRegiao = {
  [k in MoedasSuportadas]: number;
};

const taxasBrasil = {
  BRL: 1,
  USD: 0.2,
  EUR: 0.18,
  GBP: 0.16,
} satisfies TaxasRegiao;

const taxasParaBrasil = {
  USD: 5.12,
  EUR: 5.47,
  GBP: 6.39,
} satisfies Omit<TaxasRegiao, 'BRL'>;

function assertIsMoedaValida(
  valor: unknown,
): asserts valor is MoedasSuportadas {
  if (
    !valor ||
    typeof valor !== 'string' ||
    !(moedasSuportadas as ReadonlyArray<string>).includes(valor.toUpperCase())
  ) {
    window.alert('Moeda não suportada!');
    throw new Error();
  }
}

function mainConversaoMoedas(): void {
  const valoresOrigem = window
    .prompt('Digite o valor de origem (Ex.: BRL 27.99): ')
    ?.trim()
    .split(' ');

  if (!valoresOrigem || valoresOrigem.length !== 2) {
    window.alert('Valor inválido');
    throw new Error();
  }

  let [moedaOrigem, valorBruto] = valoresOrigem;
  let valorDecimal = parseFloat(valorBruto);

  moedaOrigem = moedaOrigem?.toUpperCase();

  assertIsMoedaValida(moedaOrigem);

  if (isNaN(valorDecimal)) {
    window.alert('Valor inválido');
    throw new Error();
  }

  let moedaDestino = window
    .prompt('Digite a moeda de destino (Ex.: USD): ')
    ?.trim();

  moedaDestino = moedaDestino?.toUpperCase();

  assertIsMoedaValida(moedaDestino);

  if (moedaOrigem !== 'BRL') {
    valorDecimal = valorDecimal * taxasParaBrasil[moedaOrigem];
  }

  const valorConvertido = valorDecimal * taxasBrasil[moedaDestino];
  const valorFormatado = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: moedaDestino,
  }).format(valorConvertido);

  console.timeEnd('benchmark');

  window.alert(`Valor convertido: ${valorFormatado}`);
}

document.body.onload = _ => {
  while (true) mainConversaoMoedas();
};
